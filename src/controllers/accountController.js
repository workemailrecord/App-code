import crypto from "crypto";
import axios from "axios";
import connection from "../config/connectDB.js";
import jwt from "jsonwebtoken";
import md5 from "md5";
import moment from "moment";
import Joi from "joi";
import bcrypt from "bcrypt";
import _ from "lodash";
import "dotenv/config";

const timeNow = Date.now();
const saltRounds = parseInt(process.env.SALT_ROUNDS || 5);

const API_URL = process.env.API_URL;
const PID = process.env.PID;  // Replace with your actual Merchant ID
const API_SECRET = process.env.API_SECRET;  // Replace with your actual API secret
const VERSION = process.env.VERSION;

const API_URL_JILI = process.env.API_URL_JILI; // Replace with your API URL
const AGENT_KEY = process.env.AGENT_KEY_JILI; // Replace with your Agent Key
const AGENT_ID = process.env.AGENT_ID_JILI; // Replace with your Agent ID

// Function to create MD5 signature
const createSignature = (params) => {
  const sortedParams = Object.keys(params).sort().map(key => `${key}=${params[key]}`).join('&');
  const stringToSign = `${sortedParams}&apikey=${API_SECRET}`;
  return crypto.createHash('md5').update(stringToSign).digest('hex').toUpperCase();
};


// Utility function to generate MD5 hash
const md51 = (data) => crypto.createHash("md5").update(data).digest("hex");


const getFormattedDateInUTC4 = () => {
    const now = moment().tz('America/Puerto_Rico'); // Using Puerto Rico as an example for UTC-4
    const year = now.year().toString().slice(-2);
    const month = now.month() + 1; // month() returns 0-11, so add 1
    const day = now.date();
  
    // Construct the date string without zero-padding
    const formattedDate = `${year}${month}${day}`;
    return formattedDate;
  };
const loginPage = async (req, res) => {
  return res.render("account/login.ejs");
};

const registerPage = async (req, res) => {
  return res.render("account/register.ejs");
};

const forgotPage = async (req, res) => {
  return res.render("account/forgot.ejs");
};

const forgotResetPage = async (req, res) => {
  return res.render("account/forgot_reset.ejs");
};


// Function to register user on external site
const registerUserOnExternalSite = async (username, org, ip) => {
  const params = {
    pid: PID,
    ver: VERSION,
    method: 'REGISTER',
    username,
    org,
    ip
  };
  params.sign = createSignature(params);

  try {
    const response = await axios.post(API_URL, params);
    return response.data;
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};


async function createMember(Account) {
  try {
    // Step 1: Prepare the timestamp for KeyG
    const now = new Date();
    const formattedDate = getFormattedDateInUTC4();

    // Step 2: Generate KeyG using the formatted date, AgentId, and AgentKey
    const keyG = md51(`${formattedDate}${AGENT_ID}${AGENT_KEY}`);

    // Step 3: Prepare the string of parameters that need to be hashed
    const queryString = `Account=${Account}&AgentId=${AGENT_ID}`;
    const md5string = md51(`${queryString}${keyG}`);

    // Step 4: Create the Key with 6 random characters at the start and end
    const randomPrefix = "123456"; // You can replace this with any random 6-character string
    const randomSuffix = "abcdef"; // You can replace this with any random 6-character string
    const key = `${randomPrefix}${md5string}${randomSuffix}`;

    // Step 5: Prepare the request body including the generated Key
    const requestBody = {
      Account,
      AgentId: AGENT_ID,
      Key: key, // Add the generated Key
    };

    // Step 6: Send the POST request to the CreateMember API
    const response = await axios.post(`${API_URL_JILI}/CreateMember`, null, {
      params: requestBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Return the response
    return {
      message: "Member creation successful",
      requestUrl: `${API_URL_JILI}/CreateMember`,
      requestData: requestBody,
      responseData: response.data,
    };
  } catch (error) {
    console.error("Error occurred:", error.message);
    throw new Error("An error occurred");
  }
}

const keFuMenu = async (req, res) => {
  let auth = req.cookies.auth;

  const [users] = await connection.query(
    "SELECT `level`, `ctv` FROM users WHERE token = ?",
    [auth],
  );

  let telegram = "";
  if (users.length == 0) {
    let [settings] = await connection.query(
      "SELECT `telegram`, `cskh` FROM admin_ac",
    );
    telegram = settings[0].telegram;
  } else {
    if (users[0].level != 0) {
      var [settings] = await connection.query("SELECT * FROM admin_ac");
    } else {
      var [check] = await connection.query(
        "SELECT `telegram` FROM point_list WHERE phone = ?",
        [users[0].ctv],
      );
      if (check.length == 0) {
        var [settings] = await connection.query("SELECT * FROM admin_ac");
      } else {
        var [settings] = await connection.query(
          "SELECT `telegram` FROM point_list WHERE phone = ?",
          [users[0].ctv],
        );
      }
    }
    telegram = settings[0].telegram;
  }

  return res.render("keFuMenu.ejs", { telegram });
};

const login = async (req, res) => {
  const schema = Joi.object({
    phoneNumber: Joi.string().length(10).required(),
    pwd: Joi.string().min(6).required(),
    dialCode: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let { phoneNumber, pwd, dialCode } = req.body;

  try {
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE phone = ? AND dial_code = ?",
      [phoneNumber, dialCode],
    );
    if (_.isEmpty(rows)) {
      return res.status(200).json({
        message: "Incorrect Phone Number or Password",
        status: false,
      });
    }

    const validPassword = await bcrypt.compare(pwd, rows[0].password);

    if (!validPassword) {
      return res.status(400).json({
        status: false,
        message: "Invalid password",
      });
    }

    if (rows[0].status !== 1) {
      return res.status(200).json({
        message: "Account has been locked",
        status: false,
      });
    }

    const { password, money, ip, veri, ip_address, status, time, ...others } =
      rows[0];
    const accessToken = jwt.sign(
      {
        user: { ...others },
        timeNow: timeNow,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1d" },
    );

    await connection.execute(
      "UPDATE `users` SET `token` = ? WHERE `phone` = ? ",
      [md5(accessToken), phoneNumber],
    );
    return res.status(200).json({
      message: "Login Successfully!",
      status: true,
      token: accessToken,
      value: md5(accessToken),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};



const register = async (req, res) => {
  try {
    const schema = Joi.object({
      phoneNumber: Joi.string().length(10).required(),
      pwd: Joi.string().min(6).required(),
      invitecode: Joi.string().required(),
      dialCode: Joi.string().required(),
      allowed_tabs: Joi.string().optional(), // Add allowed_tabs as an optional field
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let { phoneNumber, pwd, invitecode, dialCode, allowed_tabs } = req.body;
    let id_user = utils.generateUniqueNumberCodeByDigit(7);

    while (true) {
      const [rows] = await connection.query(
        "SELECT `id_user` FROM users WHERE `id_user` = ?",
        [id_user],
      );

      if (_.isEmpty(rows)) {
        break;
      }

      id_user = utils.generateUniqueNumberCodeByDigit(7);
    }

    let otp = utils.generateUniqueNumberCodeByDigit(6);
    let name_user = "Member" + utils.generateUniqueNumberCodeByDigit(5);
    let code = utils.generateUniqueNumberCodeByDigit(5) + id_user;
    let bonus_money = process.env.BONUS_MONEY_ON_REGISTER;

    let ip = utils.getIpAddress(req);
    let time = moment().valueOf();

    const [check_u] = await connection.query(
      "SELECT * FROM users WHERE phone = ?",
      [phoneNumber],
    );
    const [check_i] = await connection.query(
      "SELECT * FROM users WHERE code = ? ",
      [invitecode],
    );

    if (check_u.length > 0) {
      return res.status(200).json({
        message: "Registered phone number",
        status: false,
      });
    }

    if (check_i.length === 0) {
      return res.status(200).json({
        message: "Referrer code does not exist",
        status: false,
      });
    }

    // Skip IP address check for admin users
    if (!allowed_tabs) {
      const [check_ip] = await connection.query(
        "SELECT * FROM users WHERE ip_address = ? ",
        [ip],
      );

      if (check_ip.length > 3) {
        return res.status(200).json({
          message: "Registered IP address",
          status: false,
        });
      }
    }

    let ctv = check_i[0].level == 2 ? check_i[0].phone : check_i[0].ctv;
    const hashedPassword = await bcrypt.hash(pwd, saltRounds);

    // Determine if we are creating an admin user or a regular user
    const userLevel = allowed_tabs ? 1 : 0;
    const userName = allowed_tabs ? "Admin" : name_user;

    const sql =
      "INSERT INTO users SET id_user = ?, phone = ?, name_user = ?, password = ?, plain_password = ?, money = ?, bonus_money = ?, code = ?, invite = ?, ctv = ?, veri = ?, otp = ?, ip_address = ?, status = ?, time = ?, dial_code = ?, allowed_tabs = ?, level = ?";
    await connection.execute(sql, [
      id_user,
      phoneNumber,
      userName,
      hashedPassword,
      pwd,
      28,
      bonus_money,
      code,
      invitecode,
      ctv,
      1,
      otp,
      ip,
      1,
      time,
      dialCode,
      allowed_tabs || null, // Save allowed_tabs if provided, otherwise null
      userLevel, // Set level to 1 for admin user, 0 for regular user
    ]);

    await connection.execute("INSERT INTO point_list SET phone = ?", [
      phoneNumber,
    ]);

    let [check_code] = await connection.query(
      "SELECT * FROM users WHERE invite = ? ",
      [invitecode],
    );

    if (check_i.name_user !== "Admin") {
      let levels = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];

      for (let i = 0; i < levels.length; i++) {
        if (check_code.length < levels[i]) {
          break;
        }
        await connection.execute(
          "UPDATE users SET user_level = ? WHERE code = ?",
          [i + 1, invitecode],
        );
      }
    }

    let sql4 = "INSERT INTO turn_over SET phone = ?, code = ?, invite = ?";
    await connection.query(sql4, [phoneNumber, code, invitecode]);

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE phone = ?",
      [phoneNumber],
    );
    const others = rows[0];

    const accessToken = jwt.sign(
      {
        user: {
          ...others,
          password: undefined,
          money: undefined,
          ip: undefined,
          veri: undefined,
          ip_address: undefined,
          status: undefined,
          time: undefined,
        },
        timeNow: timeNow,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1d" },
    );

    await connection.execute(
      "UPDATE `users` SET `token` = ? WHERE `phone` = ? ",
      [md5(accessToken), phoneNumber],
    );
    
    // Register user on external site
    try {
      const externalResponse = await registerUserOnExternalSite(name_user, 1, ip);
      console.log('External registration response:', externalResponse);
    } catch (externalError) {
      console.error('External registration failed:', externalError.message);
    }

    // Call createMember function
    try {
      const createMemberResponse = await createMember(phoneNumber);
      console.log('Create member response:', createMemberResponse);
    } catch (createMemberError) {
      console.error('Create member failed:', createMemberError.message);
    }

    return res.status(200).json({
      message: "Registered successfully",
      status: true,
      token: accessToken,
      value: md5(accessToken),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

const webhook = async (req, res) => {
    try {
        const data = req.body;
        const resSign = data.sign;
        if (!data.sign) {
            return res.status(400).json({
                message: "fail(sign not exists)",
                status: false,
            });
        }
        const mchKey = process.env.dragonAPI_KEY;
        const paramArray = {
            mchOrderNo: data.mchOrderNo,
            income: data.income,
            mchId: data.mchId,
            appId: data.appId,
            productId: data.productId,
            payOrderId: data.payOrderId,
            amount: data.amount,
            status: data.status,
            channelOrderNo: data.channelOrderNo,
            param1: data.param1,
            param2: data.param2,
            paySuccTime: data.paySuccTime,
            backType: data.backType,
        };

        const filteredParams = Object.keys(paramArray)
            .filter(key => paramArray[key] !== undefined && paramArray[key] !== '')
            .reduce((obj, key) => {
                obj[key] = paramArray[key];
                return obj;
            }, {});

        const sortedKeys = Object.keys(filteredParams).sort();
        let md5str = '';

        sortedKeys.forEach(key => {
            md5str += `${key}=${filteredParams[key]}&`;
        });

        md5str += `key=${mchKey}`;
        const calculatedSign = crypto.createHash('md5').update(md5str).digest('hex').toUpperCase();

        if (resSign !== calculatedSign) {
            return res.status(400).json({
                message: "fail(verify fail)",
                status: false,
            });
        }

        const [statusRows] = await connection.query("SELECT status FROM recharge WHERE id_order = ?", [paramArray.mchOrderNo]);

        if (statusRows.length > 0) {
            const currentStatus = statusRows[0].status;

            if (currentStatus === 1) {
                return res.status(200).json({
                    message: "Recharge already done",
                    status: true,
                });
            }

            const updateRechargeSql = "UPDATE recharge SET status = 1 WHERE id_order = ?";
            await connection.query(updateRechargeSql, [paramArray.mchOrderNo]);

            const [rows] = await connection.query("SELECT phone, money FROM recharge WHERE id_order = ?", [paramArray.mchOrderNo]);

            if (rows.length > 0) {
                const { phone, money } = rows[0];

                const updateUserSql = "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?";
                await connection.query(updateUserSql, [money, money, phone]);

                const telegramToken = '7090221719:AAEFIsoi935JMGmXo3dmW-prxLbUJCUrSjM';
                const chatId = '-4285714093';
                const message = `Order No: ${paramArray.mchOrderNo}\nPay Order ID: ${paramArray.payOrderId}\nUser Phone: ${phone}`;
                const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

                await axios.post(telegramUrl, {
                    chat_id: chatId,
                    text: message
                });

                res.send('success');
            } else {
                return res.status(404).json({
                    message: "No data found for the provided Order ID",
                    status: false,
                });
            }

        } else {
            return res.status(404).json({
                message: "No data found for the provided Order ID",
                status: false,
            });
        }

    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while processing the data.',
            error: error.message
        });
    }
}


const sendOtpCode = async (req, res) => {
  try {
    const schema = Joi.object({
      phone: Joi.string().length(10).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: error.details[0].message, status: false });
    }

    let { phone } = req.body;
    let now = new Date().getTime();
    let timeEnd = moment().add(1, "minute").valueOf();
    let otp = utils.generateUniqueNumberCodeByDigit(6);

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE `phone` = ? AND veri = 1",
      [phone],
    );

    if (_.isEmpty(rows)) {
      return res.status(200).json({
        message: "Otp sent successfully",
        status: false,
      });
    }

    if (rows[0].time_otp - now <= 0) {
      const response = await axios({
        method: "GET",
        url: `https://www.fast2sms.com/dev/bulkV2`,
        params: {
          authorization: process.env.FAST2SMS_API,
          route: "q",
          message: `Your verification code is ${otp}`,
          flash: 0,
          numbers: phone,
        },
      });

      if (response.data.return) {
        await connection.execute(
          "UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ",
          [otp, timeEnd, phone],
        );
        return res.status(200).json({
          message: "Otp sent successfully",
          status: true,
          timeStamp: now,
          timeEnd: timeEnd,
        });
      }

      return res.status(400).json({
        message: "Unable to send OTP code",
        status: false,
      });
    } else {
      return res.status(200).json({
        message: "You can send otp code again after 1 minute",
        status: false,
        timeEnd: rows[0].time_otp,
        timeStamp: now,
      });
    }
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
};

const resetPasswordByOtpAndPhone = async (req, res) => {
  try {
    const schema = Joi.object({
      phone: Joi.string().length(10).required(),
      otp: Joi.number().integer().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: error.details[0].message, status: false });
    }

    let { phone, otp, password: newPassword } = req.body;

    const [rows] = await connection.query(
      "SELECT `otp`, `time_otp` FROM users WHERE `phone` = ? AND veri = 1",
      [phone],
    );

    if (_.isEmpty(rows)) {
      return res.status(400).json({
        message: "Account does not exist",
        status: false,
        timeStamp: new Date().getTime(),
      });
    }

    let user = rows[0];
    let now = new Date().getTime();

    if (user.time_otp - now > 0) {
      if (parseInt(user.otp) === otp) {
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        await connection.execute(
          "UPDATE users SET password = ?, plain_password = ? WHERE phone = ? ",
          [hashedPassword, newPassword, phone],
        );
        return res.status(200).json({
          message: "Change password successfully",
          status: true,
          timeStamp: now,
        });
      }

      return res.status(400).json({
        message: "OTP code is incorrect",
        status: false,
        timeStamp: now,
      });
    }

    return res.status(400).json({
      message: "OTP code has expired",
      status: false,
      timeStamp: now,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

const resetPasswordByPassword = async (req, res) => {
  try {
    let auth = req.cookies.auth;
    const schema = Joi.object({
      password: Joi.string().min(6).required(),
      newPassWord: Joi.string().min(6).required(),
      RePassWord: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      return res
        .status(200)
        .json({ message: error.details[0].message, status: false });
    }

    let { password, newPassWord, RePassWord } = req.body;

    console.log(password);
    console.log(newPassWord);
    console.log(RePassWord);

    if (newPassWord !== RePassWord) {
      return res.status(200).json({
        message: "Password does not match",
        status: false,
      });
    }

    const [users] = await connection.query(
      "SELECT * FROM users WHERE token = ?",
      [auth],
    );
    const user = users[0];

    if (_.isEmpty(users)) {
      return res.status(200).json({
        message: "Account does not exist",
        status: false,
        timeStamp: new Date().getTime(),
      });
    }

    // let user = rows[0];
    let now = new Date().getTime();

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(200).json({
        message: "Incorrect password",
        status: false,
        timeStamp: now,
      });
    }

    const hashedPassword = await bcrypt.hash(newPassWord, saltRounds);
    await connection.execute(
      "UPDATE users SET password = ?, plain_password = ? WHERE phone = ? ",
      [hashedPassword, newPassWord, user.phone],
    );

    return res.status(200).json({
      message: "Change password successfully",
      status: true,
      timeStamp: now,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

const updateUsernameAPI = async (req, res) => {
  try {
    const schema = Joi.object({
      nickname: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        status: false,
      });
    }

    let auth = req.cookies.auth;
    let nickname = _.trim(req.body?.nickname || "");

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE token = ?",
      [auth],
    );
    if (_.isEmpty(rows)) {
      return res.status(400).json({
        message: "Account does not exist",
        status: false,
      });
    }

    await connection.execute("UPDATE users SET name_user = ? WHERE token = ?", [
      nickname,
      auth,
    ]);

    return res.status(200).json({
      message: "Nickname updated successfully",
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

const updateAvatarAPI = async (req, res) => {
  try {
    const schema = Joi.object({
      avatar: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        status: false,
      });
    }

    let auth = req.cookies.auth;
    let avatar = _.trim(req.body?.avatar || "");

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE token = ?",
      [auth],
    );
    if (_.isEmpty(rows)) {
      return res.status(400).json({
        message: "Account does not exist",
        status: false,
      });
    }

    await connection.execute("UPDATE users SET avatar = ? WHERE token = ?", [
      avatar,
      auth,
    ]);
    return res.status(200).json({
      message: "Change avatar successfully",
      status: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
};

const utils = {
  generateUniqueNumberCodeByDigit(digit) {
    const timestamp = new Date().getTime().toString();
    const randomNum = _.random(1e12).toString();
    const combined = timestamp + randomNum;
    return _.padStart(combined.slice(-digit), digit, "0");
  },
  getIpAddress(req) {
    let ipAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ipAddress.substr(0, 7) == "::ffff:") {
      ipAddress = ipAddress.substr(7);
    }
    return ipAddress;
  },
};

const accountController = {
  login,
  register,
  loginPage,
  registerPage,
  forgotPage,
  keFuMenu,
  sendOtpCode,
  resetPasswordByOtpAndPhone,
  forgotResetPage,
  updateUsernameAPI,
  updateAvatarAPI,
  webhook,
  resetPasswordByPassword,
};

export default accountController;