# Hosting 5 Node.js Websites with Apache2 and NGINX

This guide demonstrates how to host 5 websites (`website1.com` to `website5.com`) with Node.js applications running on different ports, using both **Apache2** and **NGINX** for centralized management.

---

## Prerequisites

- A Linux-based server (e.g., Ubuntu).
- Node.js and npm installed.
- Domain names pointing to your server's IP address.

Install Node.js:
```bash
sudo apt update
sudo apt install -y nodejs npm
```

---

## 1. Create Node.js Applications

Each application will run on a different port. Below is an example for **Website 1**.

### Example Node.js Application

Create the application directory and app file:
```bash
mkdir website1 && cd website1
nano app.js
```

Add the following code:
```javascript
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to Website 1!');
});

app.listen(PORT, () => {
    console.log(`Website 1 running on http://localhost:${PORT}`);
});
```

Install dependencies and start the application:
```bash
npm init -y
npm install express
node app.js
```

Repeat these steps for `website2`, `website3`, etc., changing the `PORT` variable (3002, 3003, etc.).

---

## 2. Hosting with Apache2

### Install Apache2

Install and enable required modules:
```bash
sudo apt update
sudo apt install -y apache2
sudo a2enmod proxy proxy_http
```

### Configure Virtual Hosts

Create a separate configuration file for each website in `/etc/apache2/sites-available/`.

#### Example for `website1.com`
```bash
sudo nano /etc/apache2/sites-available/website1.conf
```
Add the following:
```apache
<VirtualHost *:80>
    ServerName website1.com
    ServerAlias www.website1.com

    ProxyPreserveHost On
    ProxyPass / http://localhost:3001/
    ProxyPassReverse / http://localhost:3001/

    ErrorLog ${APACHE_LOG_DIR}/website1_error.log
    CustomLog ${APACHE_LOG_DIR}/website1_access.log combined
</VirtualHost>
```

Repeat for `website2.com`, `website3.com`, etc., updating `ServerName`, `ProxyPass`, and `ProxyPassReverse` with the correct port.

### Enable Sites and Restart Apache

```bash
sudo a2ensite website1.conf
sudo a2ensite website2.conf
# Repeat for all websites

sudo systemctl reload apache2
```

---

## 3. Hosting with NGINX

### Install NGINX

```bash
sudo apt update
sudo apt install -y nginx
```

### Configure Server Blocks

Create a configuration file for each website in `/etc/nginx/sites-available/`.

#### Example for `website1.com`
```bash
sudo nano /etc/nginx/sites-available/website1.com
```
Add the following:
```nginx
server {
    listen 80;
    server_name website1.com www.website1.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    access_log /var/log/nginx/website1_access.log;
    error_log /var/log/nginx/website1_error.log;
}
```

Repeat for `website2.com`, `website3.com`, etc., updating `server_name` and `proxy_pass` for each.

### Enable Sites and Restart NGINX

Link the configuration files to `sites-enabled` and reload:
```bash
sudo ln -s /etc/nginx/sites-available/website1.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/website2.com /etc/nginx/sites-enabled/
# Repeat for all websites

sudo nginx -t   # Test NGINX configuration
sudo systemctl reload nginx
```

---

## 4. Testing the Setup

Ensure the DNS records for your domains point to your server's IP. Open a browser and test:

- `http://website1.com` → Routes to `http://localhost:3001`
- `http://website2.com` → Routes to `http://localhost:3002`
- ...and so on.

---

## 5. SSL Configuration (Optional)

Use **Certbot** to configure HTTPS for all websites:

### For Apache2
```bash
sudo apt install -y certbot python3-certbot-apache
sudo certbot --apache
```

### For NGINX
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx
```

Follow the prompts to select domains and enable HTTPS.

---

## 6. Repository Structure

Here’s how your project directory might look:
```
/multi-site-hosting
├── website1
│   └── app.js
├── website2
│   └── app.js
├── website3
│   └── app.js
├── website4
│   └── app.js
├── website5
│   └── app.js
└── README.md
```

---

## 7. Comparison Between Apache2 and NGINX

| Feature                  | Apache2                     | NGINX                      |
|--------------------------|-----------------------------|----------------------------|
| **Performance**          | Slower for high concurrency | Faster for high concurrency |
| **Static Content**       | Moderate                   | Optimized                  |
| **Ease of Use**          | Simpler for dynamic content | Requires reverse proxying  |
| **Scalability**          | Moderate                   | Excellent                  |

---

With this setup, you can host and manage multiple Node.js websites with either Apache2 or NGINX. Both options provide robust solutions, and the choice depends on your specific requirements.
