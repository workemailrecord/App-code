import {
  X as $,
  K as ae,
  M as se,
  Y as m,
  Z as b,
  a4 as W,
  a5 as _e,
  _ as r,
  $ as ne,
  D as u,
  a1 as C,
  a0 as p,
  a9 as F,
  w as j,
  I as me,
  aB as ve,
  r as f,
  a3 as pe,
  aa as L,
  m as ke,
  W as Se,
  F as U,
  C as te,
  a2 as O,
  ae as w,
  a7 as E,
  a6 as S,
  a8 as re,
  G as Ie,
  aD as Ce,
  aj as ce,
  b5 as Le,
  b6 as Ee,
  T as $e,
  ac as Y,
  x as Te,
  b7 as De,
  al as z,
  am as Ae,
  b8 as xe,
  b9 as Pe,
  ba as Be,
  bb as Re,
  bc as Ve,
  bd as Ne,
  be as qe,
  bf as Oe,
  bg as He,
  bh as Ge,
  bi as Me,
  bj as Ue,
  bk as Fe,
  bl as je,
  bm as Ke,
  bn as ze,
  bo as Ye,
  bp as We,
  bq as Xe,
  br as Je,
  bs as Qe,
  bt as Ze,
  bu as et,
  bv as tt,
  bw as at,
  bx as st,
  by as ot,
  bz as nt,
  bA as it,
  bB as lt,
  bC as rt,
  bD as ct,
  bE as ut,
  bF as dt,
  bG as _t,
  bH as mt,
  bI as vt,
  bJ as pt,
  bK as ft,
  bL as gt,
  bM as ht,
} from "./modules-aa8ffe67.js";
import {
  g as x,
  _ as B,
  G as fe,
  aQ as yt,
  aV as ie,
  dw as ge,
  dx as bt,
  C as oe,
  v as k,
  u as wt,
  S as he,
  a as kt,
  dy as St,
  dz as It,
  dA as Ct,
  dB as Lt,
  s as Et,
  b2 as $t,
  i as Tt,
  j as Dt,
  k as ye,
  dC as ue,
  a9 as At,
} from "./page-activity-6d456111.js";
import { d as xt } from "./page-home-67e89e9a.js";
import "./native/index-3d731397.js";
import "./en-53bf8069.js";
import "./rus-ecb14220.js";
import "./vi-60d1c3eb.js";
import "./id-16b6cb52.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-e8a5e3b0.js";
import "./bra-38f5b166.js";
import "./my-32fb9d60.js";
import "./bdt-d8f19d0c.js";
import "./zh-7d334abd.js";
import "./pak-dbcb2394.js";
import "./ar-78aaffbf.js";
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const n of i.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && o(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(t) {
    const i = {};
    return (
      t.integrity && (i.integrity = t.integrity),
      t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function o(t) {
    if (t.ep) return;
    t.ep = !0;
    const i = e(t);
    fetch(t.href, i);
  }
})();
const Pt = { class: "tabbar__container" },
  Bt = ["onClick"],
  Rt = { key: 0, class: "promotionBg" },
  Vt = $({
    __name: "index",
    setup(s) {
      const a = ae(),
        e = se();
      async function o(i) {
        await a.push({ name: i });
      }
      const t = [
        { name: "home" },
        { name: "activity" },
        { name: "promotion" },
        { name: "wallet" },
        { name: "main" },
      ];
      return (i, n) => (
        m(),
        b("div", Pt, [
          (m(),
          b(
            W,
            null,
            _e(t, (l, c) =>
              r(
                "div",
                {
                  class: F([
                    "tabbar__container-item",
                    { active: l.name === u(e).name },
                  ]),
                  key: l + "" + c,
                  onClick: (d) => o(l.name),
                },
                [
                  r(
                    "div",
                    {
                      class: "tab_icon",
                      style: ne({
                        backgroundImage: `url(${u(x)("tabBarIcons", l.name === u(e).name && l.name !== "promotion" ? l.name + "_active" : l.name)})`,
                      }),
                    },
                    null,
                    4,
                  ),
                  l.name === "promotion" ? (m(), b("div", Rt)) : C("", !0),
                  r("span", null, p(i.$t(l.name)), 1),
                ],
                10,
                Bt,
              ),
            ),
            64,
          )),
        ])
      );
    },
  });
const Nt = B(Vt, [["__scopeId", "data-v-48aa04ea"]]);
function qt() {
  const s = fe(),
    a = () => {
      document.visibilityState === "visible"
        ? s.setvisibility()
        : s.setvisibility(0);
    };
  j(() => {
    document.addEventListener("visibilitychange", a);
  }),
    me(() => {
      document.removeEventListener("visibilitychange", a);
    });
}
const Ot = $({
  __name: "Customer",
  setup(s) {
    ve((v) => ({ "17a7a9f6": D.value }));
    const a = f(!1),
      e = f({ x: 0, y: 0 }),
      o = f(0),
      t = f(0),
      i = f(0),
      n = f(0),
      l = f(0),
      c = f(0),
      d = f();
    let _, H, G, R;
    const M = ae();
    function K() {
      N(_, H, G, R) || M.push({ name: "CustomerService" });
    }
    j(() => {
      d.value = document.getElementById("customerId");
    });
    function V(v) {
      a.value = !0;
      var g;
      v.touches ? (g = v.touches[0]) : (g = v),
        (e.value.x = g.clientX),
        (e.value.y = g.clientY),
        (o.value = d.value.offsetLeft),
        (t.value = d.value.offsetTop),
        (_ = v.clientX),
        (H = v.clientY);
    }
    function h(v) {
      if (a.value) {
        var g,
          A = document.getElementById("customerId"),
          q = A.clientWidth,
          X = A.clientHeight,
          J = document.documentElement.clientHeight,
          Q = document.documentElement.clientWidth;
        v.touches ? (g = v.touches[0]) : (g = v),
          (i.value = g.clientX - e.value.x),
          (n.value = g.clientY - e.value.y),
          (l.value = o.value + i.value),
          (c.value = t.value + n.value),
          l.value <= 0 && (l.value = 0),
          c.value <= 0 && (c.value = 0),
          l.value >= Q - q && (l.value = Q - q),
          c.value >= J - X && (c.value = J - X),
          (d.value.style.left = l.value + "px"),
          (d.value.style.top = c.value + "px"),
          document.addEventListener(
            "touchmove",
            function () {
              v.preventDefault();
            },
            !1,
          );
      }
      v.stopPropagation(), v.preventDefault();
    }
    function T(v) {
      (a.value = !1), (G = v.clientX), (R = v.clientY);
    }
    function N(v, g, A, q) {
      return !(Math.sqrt((v - A) * (v - A) + (g - q) * (g - q)) <= 1);
    }
    const D = f("bahnschrift");
    return (v, g) => {
      const A = pe("lazy");
      return (
        m(),
        b(
          "div",
          {
            class: "customer",
            onClick: K,
            onMousedown: V,
            onTouchstart: V,
            onMousemove: h,
            onTouchmove: h,
            onMouseup: T,
            id: "customerId",
          },
          [L(r("img", null, null, 512), [[A, u(x)("home", "icon_sevice")]])],
          32,
        )
      );
    };
  },
});
const Ht = ["src"],
  Gt = $({
    __name: "StartPage",
    setup(s) {
      const a = "p3",
        e = {}.VITE_STARTEXT || "";
      return (o, t) => (
        m(),
        b(
          "div",
          { class: F(["start-page", [u(a)]]) },
          [
            r("div", null, [
              r("div", { class: F(["dice", [u(a)]]) }, null, 2),
              r("p", null, p(u(e) || o.$t("fairAndSafe")), 1),
              r(
                "img",
                {
                  class: F(["logo", [u(a)]]),
                  src: u(x)("home/StartPage", u(yt)()),
                },
                null,
                10,
                Ht,
              ),
            ]),
          ],
          2,
        )
      );
    },
  });
const Mt = B(Gt, [["__scopeId", "data-v-4c7c9f53"]]),
  Ut = { class: "header" },
  Ft = { class: "title" },
  jt = { class: "tip" },
  Kt = { class: "container" },
  zt = { class: "footer" },
  Yt = $({
    __name: "dialog",
    setup(s) {
      const a = ae(),
        e = se(),
        o = f(!1),
        { store: t, closeFirstSave: i } = ie(),
        { ActiveSotre: n, getFirstRechargeList: l } = ge(),
        c = ke(new Date()).format("YYYY-MM-DD"),
        d = Se("firstSave", null),
        _ = U(() => d.value == c),
        H = () => {
          _.value
            ? ((d.value = ""), localStorage.removeItem("firstSave"))
            : (d.value = c);
        },
        G = () => {
          (o.value = !1), i();
        },
        R = ["activity", "home", "main", "wallet", "promotion"];
      te(
        () => e.name,
        (h) => {
          R.includes(e.name) && M();
        },
      );
      const M = () => {
          d.value != c &&
            l().then((h) => {
              if (!h.length) {
                (o.value = !1), i();
                return;
              }
              const T = h.find((N) => N.isFinshed);
              T && (n.value.isShowFirstSaveDialog = !1), T || (o.value = !0);
            });
        },
        K = () => {
          (o.value = !1), i(!0), a.push({ name: "FirstRecharge" });
        },
        V = () => {
          (o.value = !1), i(!0), a.push({ name: "Recharge" });
        };
      return (
        j(() => {
          R.includes(e.name) && M();
        }),
        (h, T) => {
          const N = O("van-dialog");
          return (
            m(),
            w(
              N,
              {
                show: o.value,
                "onUpdate:show": T[0] || (T[0] = (D) => (o.value = D)),
                className: "firstSaveDialog",
              },
              {
                title: E(() => [
                  r("div", Ut, [
                    r("div", Ft, p(h.$t("firstDialogH")), 1),
                    r("div", jt, p(h.$t("firstDialogTip")), 1),
                  ]),
                ]),
                footer: E(() => [
                  r("div", zt, [
                    r(
                      "div",
                      { class: F(["active", { a: _.value }]), onClick: H },
                      p(h.$t("noTipToday")),
                      3,
                    ),
                    r(
                      "div",
                      { class: "btn", onClick: K },
                      p(h.$t("activity")),
                      1,
                    ),
                  ]),
                ]),
                default: E(() => [
                  r("div", Kt, [
                    S(
                      bt,
                      { list: u(n).FirstRechargeList, onGorecharge: V },
                      null,
                      8,
                      ["list"],
                    ),
                  ]),
                  r("div", { class: "close", onClick: G }),
                ]),
                _: 1,
              },
              8,
              ["show"],
            )
          );
        }
      );
    },
  });
const Wt = B(Yt, [["__scopeId", "data-v-98ead68b"]]),
  Xt = { class: "dialog-window" },
  Jt = { class: "dialog-wrapper" },
  Qt = { class: "dialog-title" },
  Zt = { class: "dialog-content" },
  ea = { class: "dialog-window" },
  ta = { class: "dialog-wrapper" },
  aa = { class: "dialog-title" },
  sa = { class: "dialog-tips" },
  oa = { class: "dialog-content" },
  na = { class: "dialog-tips", style: { "margin-bottom": "0" } },
  ia = { class: "dialog-window" },
  la = { class: "dialog-wrapper" },
  ra = { class: "dialog-tips", style: { "margin-top": "10px" } },
  ca = { class: "dialog-title", style: { "margin-top": "0" } },
  ua = { class: "dialog-tips" },
  da = { class: "dialog-content" },
  _a = $({
    __name: "AllPageDialog",
    setup(s) {
      se();
      const { ActiveSotre: a } = ge(),
        {
          store: e,
          closeInvite: o,
          showFirstSave: t,
          onReturnAwards: i,
        } = ie();
      return (n, l) => {
        const c = O("van-dialog"),
          d = pe("lazy");
        return (
          m(),
          b(
            W,
            null,
            [
              u(t) ? (m(), w(Wt, { key: 0 })) : C("", !0),
              S(
                c,
                {
                  show: u(a).showReceiveDialog,
                  "onUpdate:show":
                    l[1] || (l[1] = (_) => (u(a).showReceiveDialog = _)),
                  "show-confirm-button": !1,
                  className: "noOverHidden",
                },
                {
                  default: E(() => [
                    r("div", Xt, [
                      r("div", Jt, [
                        L(r("img", null, null, 512), [
                          [
                            d,
                            u(x)("activity/DailyTask", "confirmationReceived"),
                          ],
                        ]),
                        r("div", Qt, p(n.$t("awardsReceived")), 1),
                        r("div", Zt, [
                          L(r("img", null, null, 512), [
                            [d, u(x)("activity/DailyTask", "amountIcon")],
                          ]),
                          r("span", null, p(u(oe)(u(a).receiveAmount)), 1),
                        ]),
                        r(
                          "div",
                          {
                            class: "dialog-btn",
                            onClick:
                              l[0] ||
                              (l[0] = (_) => (u(a).showReceiveDialog = !1)),
                          },
                          p(n.$t("confirm")),
                          1,
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"],
              ),
              S(
                c,
                {
                  show: u(e).invite,
                  "onUpdate:show": l[3] || (l[3] = (_) => (u(e).invite = _)),
                  "show-confirm-button": !1,
                  className: "noOverHidden",
                },
                {
                  default: E(() => [
                    r("div", ea, [
                      r("div", ta, [
                        L(r("img", null, null, 512), [
                          [
                            d,
                            u(x)("activity/DailyTask", "confirmationReceived"),
                          ],
                        ]),
                        r("div", aa, p(n.$t("inviteTips")), 1),
                        r("p", sa, p(n.$t("inviteAmount")), 1),
                        r("div", oa, [
                          r("span", na, p(n.$t("commissionAmount")), 1),
                          r("span", null, p(u(oe)(u(e).rebateAmount)), 1),
                        ]),
                        r(
                          "div",
                          {
                            class: "dialog-btn",
                            onClick: l[2] || (l[2] = (_) => u(o)()),
                          },
                          p(n.$t("receive")),
                          1,
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"],
              ),
              S(
                c,
                {
                  show: u(e).oldUser,
                  "onUpdate:show": l[5] || (l[5] = (_) => (u(e).oldUser = _)),
                  "show-confirm-button": !1,
                  "close-on-click-overlay": !0,
                  className: "noOverHidden",
                },
                {
                  default: E(() => [
                    r("div", ia, [
                      r("div", la, [
                        L(r("img", null, null, 512), [
                          [
                            d,
                            u(x)("activity/DailyTask", "confirmationReceived"),
                          ],
                        ]),
                        r("p", ra, p(n.$t("oldPromptTip")), 1),
                        r("div", ca, p(n.$t("oldPrompt")), 1),
                        r("p", ua, p(n.$t("oldPromptGift")), 1),
                        r("div", da, [
                          r("span", null, p(u(oe)(u(e).returnAwards)), 1),
                        ]),
                        r(
                          "div",
                          {
                            class: "dialog-btn",
                            onClick: l[4] || (l[4] = (_) => u(i)()),
                          },
                          p(n.$t("receive")),
                          1,
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"],
              ),
            ],
            64,
          )
        );
      };
    },
  });
const ma = B(_a, [["__scopeId", "data-v-d6eace8a"]]),
  va = { class: "test" },
  pa = { key: 0, class: "test_box" },
  fa = $({
    __name: "index",
    setup(s) {
      const a = [
          { name: "blue", pageName: "blueHome" },
          { name: "blackGold", pageName: "blackGoldHome" },
          { name: "whiteGold", pageName: "whiteGoldHome" },
          { name: "electronic", pageName: "electronic" },
        ],
        e = ae(),
        o = Object.assign({
          "/src/views/home/other/blackGoldHome.vue": () =>
            k(
              () => import("./page-home-67e89e9a.js").then((n) => n.O),
              [
                "assets/js/page-home-67e89e9a.js",
                "assets/js/modules-aa8ffe67.js",
                "assets/css/modules-8b01ca49.css",
                "assets/js/page-activity-6d456111.js",
                "assets/js/native/index-3d731397.js",
                "assets/js/en-53bf8069.js",
                "assets/js/rus-ecb14220.js",
                "assets/js/vi-60d1c3eb.js",
                "assets/js/id-16b6cb52.js",
                "assets/js/hd-c5b1d7e8.js",
                "assets/js/tha-330057b2.js",
                "assets/js/md-e8a5e3b0.js",
                "assets/js/bra-38f5b166.js",
                "assets/js/my-32fb9d60.js",
                "assets/js/bdt-d8f19d0c.js",
                "assets/js/zh-7d334abd.js",
                "assets/js/pak-dbcb2394.js",
                "assets/js/ar-78aaffbf.js",
                "assets/css/page-activity-9da3f4e3.css",
                "assets/css/page-home-482c7bbf.css",
              ],
            ),
          "/src/views/home/other/blueHome.vue": () =>
            k(
              () => import("./page-home-67e89e9a.js").then((n) => n.P),
              [
                "assets/js/page-home-67e89e9a.js",
                "assets/js/modules-aa8ffe67.js",
                "assets/css/modules-8b01ca49.css",
                "assets/js/page-activity-6d456111.js",
                "assets/js/native/index-3d731397.js",
                "assets/js/en-53bf8069.js",
                "assets/js/rus-ecb14220.js",
                "assets/js/vi-60d1c3eb.js",
                "assets/js/id-16b6cb52.js",
                "assets/js/hd-c5b1d7e8.js",
                "assets/js/tha-330057b2.js",
                "assets/js/md-e8a5e3b0.js",
                "assets/js/bra-38f5b166.js",
                "assets/js/my-32fb9d60.js",
                "assets/js/bdt-d8f19d0c.js",
                "assets/js/zh-7d334abd.js",
                "assets/js/pak-dbcb2394.js",
                "assets/js/ar-78aaffbf.js",
                "assets/css/page-activity-9da3f4e3.css",
                "assets/css/page-home-482c7bbf.css",
              ],
            ),
          "/src/views/home/other/damanHome.vue": () =>
            k(
              () => import("./page-home-67e89e9a.js").then((n) => n.Q),
              [
                "assets/js/page-home-67e89e9a.js",
                "assets/js/modules-aa8ffe67.js",
                "assets/css/modules-8b01ca49.css",
                "assets/js/page-activity-6d456111.js",
                "assets/js/native/index-3d731397.js",
                "assets/js/en-53bf8069.js",
                "assets/js/rus-ecb14220.js",
                "assets/js/vi-60d1c3eb.js",
                "assets/js/id-16b6cb52.js",
                "assets/js/hd-c5b1d7e8.js",
                "assets/js/tha-330057b2.js",
                "assets/js/md-e8a5e3b0.js",
                "assets/js/bra-38f5b166.js",
                "assets/js/my-32fb9d60.js",
                "assets/js/bdt-d8f19d0c.js",
                "assets/js/zh-7d334abd.js",
                "assets/js/pak-dbcb2394.js",
                "assets/js/ar-78aaffbf.js",
                "assets/css/page-activity-9da3f4e3.css",
                "assets/css/page-home-482c7bbf.css",
              ],
            ),
          "/src/views/home/other/electronic.vue": () =>
            k(
              () => import("./page-home-67e89e9a.js").then((n) => n.R),
              [
                "assets/js/page-home-67e89e9a.js",
                "assets/js/modules-aa8ffe67.js",
                "assets/css/modules-8b01ca49.css",
                "assets/js/page-activity-6d456111.js",
                "assets/js/native/index-3d731397.js",
                "assets/js/en-53bf8069.js",
                "assets/js/rus-ecb14220.js",
                "assets/js/vi-60d1c3eb.js",
                "assets/js/id-16b6cb52.js",
                "assets/js/hd-c5b1d7e8.js",
                "assets/js/tha-330057b2.js",
                "assets/js/md-e8a5e3b0.js",
                "assets/js/bra-38f5b166.js",
                "assets/js/my-32fb9d60.js",
                "assets/js/bdt-d8f19d0c.js",
                "assets/js/zh-7d334abd.js",
                "assets/js/pak-dbcb2394.js",
                "assets/js/ar-78aaffbf.js",
                "assets/css/page-activity-9da3f4e3.css",
                "assets/css/page-home-482c7bbf.css",
              ],
            ),
          "/src/views/home/other/redHome.vue": () =>
            k(
              () => import("./page-home-67e89e9a.js").then((n) => n.S),
              [
                "assets/js/page-home-67e89e9a.js",
                "assets/js/modules-aa8ffe67.js",
                "assets/css/modules-8b01ca49.css",
                "assets/js/page-activity-6d456111.js",
                "assets/js/native/index-3d731397.js",
                "assets/js/en-53bf8069.js",
                "assets/js/rus-ecb14220.js",
                "assets/js/vi-60d1c3eb.js",
                "assets/js/id-16b6cb52.js",
                "assets/js/hd-c5b1d7e8.js",
                "assets/js/tha-330057b2.js",
                "assets/js/md-e8a5e3b0.js",
                "assets/js/bra-38f5b166.js",
                "assets/js/my-32fb9d60.js",
                "assets/js/bdt-d8f19d0c.js",
                "assets/js/zh-7d334abd.js",
                "assets/js/pak-dbcb2394.js",
                "assets/js/ar-78aaffbf.js",
                "assets/css/page-activity-9da3f4e3.css",
                "assets/css/page-home-482c7bbf.css",
              ],
            ),
          "/src/views/home/other/whiteGoldHome.vue": () =>
            k(
              () => import("./page-home-67e89e9a.js").then((n) => n.T),
              [
                "assets/js/page-home-67e89e9a.js",
                "assets/js/modules-aa8ffe67.js",
                "assets/css/modules-8b01ca49.css",
                "assets/js/page-activity-6d456111.js",
                "assets/js/native/index-3d731397.js",
                "assets/js/en-53bf8069.js",
                "assets/js/rus-ecb14220.js",
                "assets/js/vi-60d1c3eb.js",
                "assets/js/id-16b6cb52.js",
                "assets/js/hd-c5b1d7e8.js",
                "assets/js/tha-330057b2.js",
                "assets/js/md-e8a5e3b0.js",
                "assets/js/bra-38f5b166.js",
                "assets/js/my-32fb9d60.js",
                "assets/js/bdt-d8f19d0c.js",
                "assets/js/zh-7d334abd.js",
                "assets/js/pak-dbcb2394.js",
                "assets/js/ar-78aaffbf.js",
                "assets/css/page-activity-9da3f4e3.css",
                "assets/css/page-home-482c7bbf.css",
              ],
            ),
        }),
        t = async (n) => {
          if (e.currentRoute.value.name === n) return;
          let l = o[`/src/views/home/other/${n}.vue`];
          e.removeRoute("home"),
            e.addRoute({
              path: "/",
              name: "home",
              component: l,
              meta: { title: "home", tabBar: !0, KeepAlive: !1 },
            }),
            e.push("/");
        },
        i = f(!1);
      return (n, l) => {
        const c = O("van-button");
        return (
          m(),
          b("div", va, [
            S(
              c,
              {
                type: "primary",
                onClick: l[0] || (l[0] = (d) => (i.value = !i.value)),
              },
              { default: E(() => [re(p(i.value ? "隐藏" : "展开"), 1)]), _: 1 },
            ),
            i.value
              ? (m(),
                b("div", pa, [
                  (m(),
                  b(
                    W,
                    null,
                    _e(a, (d) =>
                      S(
                        c,
                        { type: "primary", onClick: (_) => t(d.pageName) },
                        { default: E(() => [re(p(d.name), 1)]), _: 2 },
                        1032,
                        ["onClick"],
                      ),
                    ),
                    64,
                  )),
                ]))
              : C("", !0),
          ])
        );
      };
    },
  });
const ga = B(fa, [["__scopeId", "data-v-bfc96ef7"]]),
  ha = $({
    __name: "App",
    setup(s) {
      ve((I) => ({ 76181987: g.value }));
      const { openAll: a } = ie(),
        e = $t(),
        o = f(!1),
        t = f(!1),
        i = se(),
        n = wt(),
        l = he(),
        { locale: c } = Ie(),
        d = fe(),
        _ = f(!1),
        H = U(() => i.meta.tabBar);
      let G = ["development"];
      const R = U(() => G.includes("production.bigmumbai") && i.path === "/"),
        M = "whiteGoldHome",
        K = U(() =>
          ["electronic", "blackGoldHome"].includes(M)
            ? !1
            : ![
                "/wallet/Withdraw/C2cDetail",
                "/wallet/RechargeHistory/RechargeUpiDetail",
                "/wallet/Withdraw/Upi",
                "/wallet/Withdraw/AddUpi",
                "/wallet/Withdraw/c2cCancelWithdrawal/index.vue",
                "/wallet/otherPay?type=C2C",
                "/home/game",
              ].includes(i.path),
        ),
        V = f(0),
        h = f(Math.floor(Math.random() * 1e4)),
        T = U(() => i.name + h.value),
        N = () => {
          e.on("changeKeepAliveKey", () => {
            h.value = Math.floor(Math.random() * 1e4);
          });
        };
      sessionStorage.getItem("isload")
        ? (o.value = !1)
        : ((t.value = !0),
          sessionStorage.setItem("isload", t.value.toString()),
          (o.value = !0)),
        l.getHomeSetting(),
        te(
          () => l.getAreacode,
          (I) => {
            I && n.setNumberType(I.substring(1));
          },
        ),
        te(
          () => l.getDL,
          (I) => {
            (c.value = I), d.updateLanguage(I), Tt(I), Dt(ye.global.t);
          },
        ),
        setTimeout(() => {
          o.value = !1;
        }, 2e3);
      const D = f(!1),
        v = kt();
      v.$subscribe((I, P) => {
        (D.value = P.isLoading), v.setLoading(D.value);
      });
      const g = f("bahnschrift");
      let A = St(),
        q = l.getLanguage,
        X = It(A, q);
      const J = async (I) => {
          const P = [
              { title: "vi", fontStyle: "bahnschrift" },
              { title: "else", fontStyle: "'Roboto', 'Inter', sans-serif" },
            ],
            Z = P.findIndex((ee) => ee.title == X);
          Z >= 0
            ? (g.value = P[Z].fontStyle)
            : (g.value = P[P.length - 1].fontStyle);
        },
        Q = () => {
          e.on("keyChange", () => {
            V.value++;
          }),
            e.on("changeIsGame", () => {
              (_.value = !_.value), (D.value = !D.value);
            });
        },
        we = () => {
          e.off("keyChange"),
            e.off("changeKeepAliveKey"),
            e.off("changeIsGame");
        };
      return (
        n.setNumberType(l.getAreacode.substring(1)),
        J(),
        j(() => {
          Ct() && Lt(),
            a(),
            we(),
            Q(),
            N(),
            localStorage.getItem("language") &&
              Et(localStorage.getItem("language"));
        }),
        qt(),
        (I, P) => {
          const Z = O("LoadingView");
          return (
            m(),
            b(
              W,
              null,
              [
                S(
                  Z,
                  { loading: D.value, type: "loading", isGame: _.value },
                  {
                    default: E(() => [
                      (m(),
                      w(
                        u(Le),
                        { key: V.value },
                        {
                          default: E(({ Component: ee }) => [
                            (m(),
                            w(
                              Ce,
                              { max: 1 },
                              [
                                u(i).meta.keepAlive
                                  ? (m(), w(ce(ee), { key: T.value }))
                                  : C("", !0),
                              ],
                              1024,
                            )),
                            u(i).meta.keepAlive
                              ? C("", !0)
                              : (m(), w(ce(ee), { key: 0 })),
                          ]),
                          _: 1,
                        },
                      )),
                      K.value
                        ? (m(), w(Ot, { key: 0 }))
                        : (m(), w(u(Ee), { key: 1, license: "15861567" })),
                      H.value ? (m(), w(Nt, { key: 2 })) : C("", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "isGame"],
                ),
                o.value ? (m(), w(Mt, { key: 0 })) : C("", !0),
                S(ma),
                R.value ? (m(), w(ga, { key: 1 })) : C("", !0),
              ],
              64,
            )
          );
        }
      );
    },
  });
const ya = (s, a) => {
  const e = s[a];
  return e
    ? typeof e == "function"
      ? e()
      : Promise.resolve(e)
    : new Promise((o, t) => {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          t.bind(null, new Error("Unknown variable dynamic import: " + a)),
        );
      });
};
const ba = {
    mounted(s, a) {
      if (typeof a.value[0] != "function" || typeof a.value[1] != "number")
        throw new Error(
          "v-debounce: value must be an array that includes a function and a number",
        );
      let e = null;
      const o = a.value[0],
        t = a.value[1];
      (s.__handleClick__ = function () {
        e && clearTimeout(e),
          (e = setTimeout(() => {
            o();
          }, t || 500));
      }),
        s.addEventListener("click", s.__handleClick__);
    },
    beforeUnmount(s) {
      s.removeEventListener("click", s.__handleClick__);
    },
  },
  wa = {
    mounted(s, a) {
      if (typeof a.value[0] != "function" || typeof a.value[1] != "number")
        throw new Error(
          "v-throttle: value must be an array that includes a function and a number",
        );
      let e = null;
      const o = a.value[0],
        t = a.value[1];
      (s.__handleClick__ = function () {
        e && clearTimeout(e),
          s.disabled ||
            ((s.disabled = !0),
            o(),
            (e = setTimeout(() => {
              s.disabled = !1;
            }, t || 500)));
      }),
        s.addEventListener("click", s.__handleClick__);
    },
    beforeUnmount(s) {
      s.removeEventListener("click", s.__handleClick__);
    },
  },
  ka = {
    mounted(s, a) {
      s.addEventListener("input", (e) => {
        const t = s.value.replace(/\D+/g, "");
        (s.value = t), (a.value = t);
      });
    },
  },
  Sa = (s) => ({
    beforeMount: (a, e) => {
      a.classList.add("ar-lazyload");
      const { value: o } = e;
      (a.dataset.origin = o), s.observe(a);
    },
    updated(a, e) {
      (a.dataset.origin = e.value), s.observe(a);
    },
    unmounted(a, e) {
      s.unobserve(a);
    },
    mounted(a, e) {
      s.observe(a);
    },
  }),
  Ia = {
    mounted(s, a) {
      let e = 0;
      const o = a.value && a.value.wait ? a.value.wait : 3e3,
        t = (i) => {
          const n = Date.now();
          n - e >= o &&
            ((e = n), a.value && a.value.handler && a.value.handler(i));
        };
      s.addEventListener("click", t),
        (s._throttleClickCleanup = () => {
          s.removeEventListener("click", t);
        });
    },
    unmounted(s) {
      s._throttleClickCleanup && s._throttleClickCleanup(),
        delete s._throttleClickCleanup;
    },
  },
  Ca = {
    mounted(s, a) {
      const { value: e } = a;
      let o = $e("permission", null);
      o.value === null ||
        !e ||
        (o && (o = JSON.parse(o.value)),
        o && o[e] === !1 && (s.style.display = "none"));
    },
  },
  de = {
    debounce: ba,
    throttle: wa,
    onlyNum: ka,
    throttleClick: Ia,
    haspermission: Ca,
  },
  La = {
    install: function (s) {
      Object.keys(de).forEach((e) => {
        s.directive(e, de[e]);
      });
      const a = new IntersectionObserver(
        (e) => {
          e.forEach((o) => {
            if (o.isIntersecting) {
              const t = o.target;
              (t.src = t.dataset.origin || x("images", "avatar")),
                (t.onerror = () => {
                  a.unobserve(t);
                  let i = t.dataset.img || x("images", "avatar");
                  if (!i || (i != null && i.includes("undefined"))) {
                    t.onerror = null;
                    return;
                  }
                  (t.src = i), (t.style.objectFit = "contain");
                }),
                t.classList.remove("ar-lazyload"),
                a.unobserve(t);
            }
          });
        },
        { rootMargin: "0px 0px -50px 0px" },
      );
      s.directive("lazy", Sa(a));
    },
  },
  Ea = { class: "navbar__content" },
  $a = { class: "navbar__content-center" },
  Ta = { class: "navbar__content-title" },
  Da = $({
    __name: "NavBar",
    props: {
      title: { type: String, default: "" },
      placeholder: { type: Boolean, default: !0 },
      leftArrow: { type: Boolean, default: !1 },
      backgroundColor: { type: String, default: "#fff" },
      classN: { type: String, default: "" },
      headLogo: { type: Boolean, default: !1 },
      headerUrl: { type: String, default: "" },
    },
    emits: ["click-left", "click-right"],
    setup(s, { emit: a }) {
      const e = f(),
        o = he(),
        t = U(() => o.getHeadLogo),
        i = () => {
          a("click-left");
        },
        n = () => {
          a("click-right");
        };
      return (
        j(() => {}),
        (l, c) => {
          const d = O("van-icon");
          return (
            m(),
            b(
              "div",
              { class: "navbar", ref_key: "navbar", ref: e },
              [
                r(
                  "div",
                  {
                    class: F([
                      "navbar-fixed",
                      [s.backgroundColor != "#fff" && "wc"],
                    ]),
                    style: ne({ background: s.backgroundColor }),
                  },
                  [
                    r("div", Ea, [
                      r("div", { class: "navbar__content-left", onClick: i }, [
                        Y(
                          l.$slots,
                          "left",
                          {},
                          () => [
                            s.leftArrow
                              ? (m(), w(d, { key: 0, name: "arrow-left" }))
                              : C("", !0),
                          ],
                          !0,
                        ),
                      ]),
                      r("div", $a, [
                        s.headLogo
                          ? (m(),
                            b(
                              "div",
                              {
                                key: 0,
                                class: "headLogo",
                                style: ne({
                                  backgroundImage:
                                    "url(" + (s.headerUrl || t.value) + ")",
                                }),
                              },
                              null,
                              4,
                            ))
                          : C("", !0),
                        Y(
                          l.$slots,
                          "center",
                          {},
                          () => [r("div", Ta, p(s.title), 1)],
                          !0,
                        ),
                      ]),
                      r("div", { class: "navbar__content-right", onClick: n }, [
                        Y(l.$slots, "right", {}, void 0, !0),
                      ]),
                    ]),
                  ],
                  6,
                ),
              ],
              512,
            )
          );
        }
      );
    },
  });
const Aa = B(Da, [["__scopeId", "data-v-19888208"]]),
  xa = { class: "ar-loading-view" },
  Pa = { class: "loading-wrapper" },
  Ba = { class: "com__box" },
  Ra = Ae(
    '<div class="loading" data-v-4d8a8acc><div class="shape shape-1" data-v-4d8a8acc></div><div class="shape shape-2" data-v-4d8a8acc></div><div class="shape shape-3" data-v-4d8a8acc></div><div class="shape shape-4" data-v-4d8a8acc></div></div>',
    1,
  ),
  Va = [Ra],
  Na = { class: "skeleton-wrapper" },
  qa = $({
    __name: "LoadingView",
    props: { loading: { type: Boolean }, type: {}, isGame: { type: Boolean } },
    setup(s) {
      const a = s,
        e = f();
      let o = null;
      return (
        j(async () => {
          const t = "bigMumbai";
          await Te(),
            (o = De.loadAnimation({
              container: e.value,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              path: `/loading/${t}/data.json`,
            }));
        }),
        te(
          () => a.loading,
          () => {
            a.type === "loading" &&
              !a.isGame &&
              (a.loading ? o && o.play() : o && o.stop());
          },
        ),
        me(() => {
          o && o.destroy(), (o = null);
        }),
        (t, i) => {
          const n = O("VanSkeleton");
          return (
            m(),
            b(
              W,
              null,
              [
                L(
                  r(
                    "div",
                    xa,
                    [
                      Y(
                        t.$slots,
                        "template",
                        {},
                        () => [
                          L(
                            r(
                              "div",
                              Pa,
                              [
                                L(
                                  r(
                                    "div",
                                    {
                                      ref_key: "element",
                                      ref: e,
                                      class: "loading-animat",
                                    },
                                    null,
                                    512,
                                  ),
                                  [[z, !t.isGame]],
                                ),
                                L(r("div", Ba, Va, 512), [[z, t.isGame]]),
                              ],
                              512,
                            ),
                            [[z, t.type === "loading"]],
                          ),
                          L(
                            r(
                              "div",
                              Na,
                              [
                                S(n, { row: 10 }),
                                S(n, { title: "", avatar: "", row: 5 }),
                                S(n, { title: "", row: 5 }),
                              ],
                              512,
                            ),
                            [[z, t.type === "skeleton"]],
                          ),
                        ],
                        !0,
                      ),
                    ],
                    512,
                  ),
                  [[z, t.loading]],
                ),
                Y(t.$slots, "default", {}, void 0, !0),
              ],
              64,
            )
          );
        }
      );
    },
  });
const Oa = B(qa, [["__scopeId", "data-v-4d8a8acc"]]),
  Ha = { class: "ar-searchbar__selector" },
  Ga = { class: "ar-searchbar__selector-default" },
  Ma = $({
    __name: "ArSelect",
    props: { selectName: { type: String, default: "" } },
    emits: ["click-select"],
    setup(s, { emit: a }) {
      const e = () => {
        a("click-select");
      };
      return (o, t) => {
        const i = O("van-icon");
        return (
          m(),
          b("div", Ha, [
            r("div", { onClick: e }, [
              r("span", Ga, p(s.selectName), 1),
              S(i, { name: "arrow-down" }),
            ]),
          ])
        );
      };
    },
  });
const Ua = B(Ma, [["__scopeId", "data-v-3b481cc4"]]),
  Fa = "whiteGoldHome";
ya(
  Object.assign({
    "../assets/styles/other/blackGoldHome/reset.scss": () =>
      k(() => Promise.resolve({}), ["assets/css/reset-8972b5eb.css"]),
    "../assets/styles/other/blueHome/reset.scss": () =>
      k(() => Promise.resolve({}), ["assets/css/reset-58948e2b.css"]),
    "../assets/styles/other/damanHome/reset.scss": () =>
      k(() => Promise.resolve({}), ["assets/css/reset-b438533a.css"]),
    "../assets/styles/other/electronic/reset.scss": () =>
      k(() => Promise.resolve({}), ["assets/css/reset-7c75dfed.css"]),
    "../assets/styles/other/redHome/reset.scss": () =>
      k(() => Promise.resolve({}), ["assets/css/reset-b72ca269.css"]),
    "../assets/styles/other/whiteGoldHome/reset.scss": () =>
      k(() => Promise.resolve({}), ["assets/css/reset-910da13b.css"]),
  }),
  `../assets/styles/other/${Fa}/reset.scss`,
);
const ja = (s) => {
  s.component("NavBar", Aa),
    s.component("LoadingView", Oa),
    s.component("ArSelect", Ua),
    s.component("svg-icon", xt),
    s
      .use(xe)
      .use(Pe)
      .use(Be)
      .use(Re)
      .use(Ve)
      .use(Ne)
      .use(qe)
      .use(Oe)
      .use(He)
      .use(Ge)
      .use(Me)
      .use(Ue)
      .use(Fe)
      .use(je)
      .use(Ke)
      .use(ze)
      .use(Ye)
      .use(We)
      .use(Xe)
      .use(Je)
      .use(Qe)
      .use(Ze)
      .use(et)
      .use(tt)
      .use(at)
      .use(st)
      .use(ot)
      .use(nt)
      .use(it)
      .use(lt)
      .use(rt)
      .use(ct)
      .use(ut)
      .use(dt)
      .use(_t)
      .use(mt)
      .use(vt)
      .use(ye)
      .use(La)
      .use(pt);
  let a = s.config.globalProperties,
    e = {};
  (e.TopHeight = 38),
    Object.keys(ue.refiter).forEach((o) => {
      e[o] = ue.refiter[o];
    }),
    (a.$u = e);
};
function Ka() {
  let s = window.location.hash;
  s.includes("?") || (s = location.search);
  function a(e) {
    if (e) {
      const i = e.indexOf("?");
      i !== -1 && (e = e.substring(i + 1));
      var o = e.split("&"),
        t = {};
      return (
        o.forEach(function (n) {
          var l = n.split("=");
          t[l[0]] = decodeURIComponent(l[1]);
        }),
        t
      );
    } else return {};
  }
  return a(s);
}
const y = Ka(),
  za = {
    "91club": () => {
      const s = { 356634288423: "749293993830590" },
        a = y.invitationCode || sessionStorage.getItem("invitecode"),
        e = y.fb_dynamic_pixel || s[a] || "";
      y.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", e);
      const o =
        y.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || s[a];
      o &&
        ((function (t, i, n, l, c, d, _) {
          t.fbq ||
            ((c = t.fbq =
              function () {
                c.callMethod
                  ? c.callMethod.apply(c, arguments)
                  : c.queue.push(arguments);
              }),
            t._fbq || (t._fbq = c),
            (c.push = c),
            (c.loaded = !0),
            (c.version = "2.0"),
            (c.queue = []),
            (d = i.createElement(n)),
            (d.async = !0),
            (d.src = l),
            (_ = i.getElementsByTagName(n)[0]),
            _.parentNode.insertBefore(d, _));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js",
        ),
        fbq("init", o),
        fbq("track", "PageView"));
    },
    yjlottery: () => {
      (function (s, a, e, o, t, i, n) {
        s.fbq ||
          ((t = s.fbq =
            function () {
              t.callMethod
                ? t.callMethod.apply(t, arguments)
                : t.queue.push(arguments);
            }),
          s._fbq || (s._fbq = t),
          (t.push = t),
          (t.loaded = !0),
          (t.version = "2.0"),
          (t.queue = []),
          (i = a.createElement(e)),
          (i.async = !0),
          (i.src = o),
          (n = a.getElementsByTagName(e)[0]),
          n.parentNode.insertBefore(i, n));
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
      ),
        fbq("init", "865606625239361"),
        fbq("track", "PageView");
    },
    "66lottery": () => {
      y.gtagId && localStorage.setItem("gtagId", y.gtagId),
        y.fb_dynamic_pixel &&
          localStorage.setItem("fb_dynamic_pixel", y.fb_dynamic_pixel);
      const s = y.gtagId || localStorage.getItem("gtagId") || "AW-11352382371",
        a =
          y.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || "";
      (function () {
        window.dataLayer = window.dataLayer || [];
        function e() {
          dataLayer.push(arguments);
        }
        window.gtag = e;
        var o = document.createElement("script");
        o.src = "https://www.googletagmanager.com/gtag/js?id=" + s;
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(o, t), e("js", new Date()), e("config", s);
      })(),
        a &&
          ((function (e, o, t, i, n, l, c) {
            e.fbq ||
              ((n = e.fbq =
                function () {
                  n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
                }),
              e._fbq || (e._fbq = n),
              (n.push = n),
              (n.loaded = !0),
              (n.version = "2.0"),
              (n.queue = []),
              (l = o.createElement(t)),
              (l.async = !0),
              (l.src = i),
              (c = o.getElementsByTagName(t)[0]),
              c.parentNode.insertBefore(l, c));
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js",
          ),
          fbq("init", a),
          fbq("track", "PageView"));
    },
    lottery7: () => {
      const s = { 18685100001: "749293993830590" },
        a = y.invitationCode || sessionStorage.getItem("invitecode"),
        e = y.fb_dynamic_pixel || s[a] || "";
      y.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", e);
      const o =
        y.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || s[a];
      o &&
        ((function (t, i, n, l, c, d, _) {
          t.fbq ||
            ((c = t.fbq =
              function () {
                c.callMethod
                  ? c.callMethod.apply(c, arguments)
                  : c.queue.push(arguments);
              }),
            t._fbq || (t._fbq = c),
            (c.push = c),
            (c.loaded = !0),
            (c.version = "2.0"),
            (c.queue = []),
            (d = i.createElement(n)),
            (d.async = !0),
            (d.src = l),
            (_ = i.getElementsByTagName(n)[0]),
            _.parentNode.insertBefore(d, _));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js",
        ),
        fbq("init", o),
        fbq("track", "PageView"));
    },
  };
({}).VITE_POINT && za[{}.VITE_POINT]();
const le = ft(ha),
  be = gt();
ja(le);
be.use(ht);
le.use(At).use(be);
le.mount("#app");
