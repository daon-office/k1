(function (e) {
    function t(t) {
        for (var a, i, c = t[0], s = t[1], l = t[2], d = 0, u = []; d < c.length; d++)
            i = c[d], Object.prototype.hasOwnProperty.call(o, i) && o[i] && u.push(o[i][0]), o[i] = 0;
        for (a in s)
            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        p && p(t);
        while (u.length)
            u.shift()();
        return r.push.apply(r, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, i = 1; i < n.length; i++) {
                var s = n[i];
                0 !== o[s] && (a = !1)
            }
            a && (r.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var a = {},
    o = {
        app: 0
    },
    r = [];
    function i(e) {
        return c.p + "static/js/" + ({}
            [e] || e) + "." + {
            "chunk-2d0db81a": "f53abaff"
        }
        [e] + ".js"
    }
    function c(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c),
        n.l = !0,
        n.exports
    }
    c.e = function (e) {
        var t = [],
        n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var a = new Promise((function (t, a) {
                            n = o[e] = [t, a]
                        }));
                t.push(n[2] = a);
                var r,
                s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                c.nc && s.setAttribute("nonce", c.nc),
                s.src = i(e);
                var l = new Error;
                r = function (t) {
                    s.onerror = s.onload = null,
                    clearTimeout(d);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                            r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")",
                            l.name = "ChunkLoadError",
                            l.type = a,
                            l.request = r,
                            n[1](l)
                        }
                        o[e] = void 0
                    }
                };
                var d = setTimeout((function () {
                            r({
                                type: "timeout",
                                target: s
                            })
                        }), 12e4);
                s.onerror = s.onload = r,
                document.head.appendChild(s)
            }
        return Promise.all(t)
    },
    c.m = e,
    c.c = a,
    c.d = function (e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e)
                c.d(n, a, function (t) {
                    return e[t]
                }
                    .bind(null, a));
        return n
    },
    c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        }
         : function () {
            return e
        };
        return c.d(t, "a", t),
        t
    },
    c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    c.p = "",
    c.oe = function (e) {
        throw console.error(e),
        e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var d = 0; d < s.length; d++)
        t(s[d]);
    var p = l;
    r.push([0, "chunk-vendors"]),
    n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "091c": function (e, t, n) {
        var a = n("26e8");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("f0504938", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "0d81": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".controlAnimal[data-v-8e30bd52]{height:40px!important}[data-v-8e30bd52]::-webkit-scrollbar{width:6px;border-radius:3px;background-color:#37373b}[data-v-8e30bd52]::-webkit-scrollbar-thumb{border-radius:3px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.44,#616169));-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}[data-v-8e30bd52]::-webkit-scrollbar-thumb,[data-v-8e30bd52]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px}[data-v-8e30bd52]::-webkit-scrollbar-track{background-color:#37373b}@media screen and (max-width:1200px){.comp-FileManage[data-v-8e30bd52]  .com-HeaderBar .upload-demo{padding-right:.5rem!important}.comp-FileManage[data-v-8e30bd52]  .com-HeaderBar .upload-demo .el-upload .el-button{width:4rem}}.comp-FileManage[data-v-8e30bd52]{width:100%;height:411px;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px;position:relative}.comp-FileManage .progress[data-v-8e30bd52]{width:230px}.comp-FileManage .inner-con[data-v-8e30bd52]{position:absolute;left:50px;height:33px;display:flex;align-items:center;border-radius:5px;margin-bottom:3px}.comp-FileManage .inner-con .inner-top[data-v-8e30bd52]:hover{background:#525258}.comp-FileManage .inner-con .inner-top:hover .iconfont[data-v-8e30bd52],.comp-FileManage .inner-con .inner-top:hover span[data-v-8e30bd52]{color:#fff}.comp-FileManage .inner-con .inner-top[data-v-8e30bd52]{width:80px;height:32px;border-radius:5px;line-height:32px;cursor:pointer}.comp-FileManage .inner-con .inner-top .iconfont[data-v-8e30bd52]{color:#cbcbcc}.comp-FileManage .inner-con .inner-top span[data-v-8e30bd52]{color:#cbcbcc;margin-left:7px}.comp-FileManage .inner-con .inner-top[data-v-8e30bd52]:nth-child(2){margin-left:10px}.comp-FileManage .inner-con .inner-bg[data-v-8e30bd52]{background:#1e9be2}.comp-FileManage .inner-con .inner-bg span[data-v-8e30bd52]{color:#fff}.comp-FileManage .inner-con .inner-search[data-v-8e30bd52]{position:relative;margin-left:54.9%}.comp-FileManage .inner-con .inner-search .el-input[data-v-8e30bd52]{width:258px;height:30px;font-size:12px;padding-left:20px;background:#37373b;border:1px solid #4f4f54;border-radius:15px}.comp-FileManage .inner-con .inner-search .myself-icon[data-v-8e30bd52]{position:absolute;top:7px;left:13px;color:#cbcbcc}.comp-FileManage .inner-con .inner-btn[data-v-8e30bd52]{padding-left:5px}.comp-FileManage .inner-con .inner-btn .el-button[data-v-8e30bd52]{width:66px;height:30px;font-size:12px;box-shadow:0 3px 3px 0 #303034;border-radius:15px}.comp-FileManage .fold[data-v-8e30bd52]{cursor:pointer}.comp-FileManage .fold .iconfont[data-v-8e30bd52]{color:#d2d2da;font-size:8px}.comp-FileManage .btn[data-v-8e30bd52]{position:absolute;right:10%}.comp-FileManage .btn button[data-v-8e30bd52]{border-radius:12px;padding:0 20px}.comp-FileManage .btn button i[data-v-8e30bd52]{margin-right:10px}.comp-FileManage .content[data-v-8e30bd52],.comp-FileManage .tablistCon[data-v-8e30bd52]{overflow:auto}.comp-FileManage .content .el-table[data-v-8e30bd52],.comp-FileManage .tablistCon .el-table[data-v-8e30bd52]{height:320px}.comp-FileManage .content .el-table .fileName[data-v-8e30bd52],.comp-FileManage .tablistCon .el-table .fileName[data-v-8e30bd52]{position:absolute;left:50px;width:280px;text-align:left;overflow:hidden;white-space:nowrap;word-break:keep-all;text-overflow:ellipsis}.comp-FileManage .content .el-table[data-v-8e30bd52]  .sel,.comp-FileManage .tablistCon .el-table[data-v-8e30bd52]  .sel{--el-table-tr-bg-color:#46464a}.comp-FileManage .menu[data-v-8e30bd52]{position:absolute;width:160px;background:#1e9be2;box-shadow:0 3px 3px 0 rgba(51,51,51,.5);border-radius:5px;color:#fff;font-size:12px;z-index:9}.comp-FileManage .menu>div[data-v-8e30bd52]{text-align:left;padding:8px;cursor:pointer}.comp-FileManage .menu>div[data-v-8e30bd52]:first-child{border-radius:5px 5px 0 0}.comp-FileManage .menu>div[data-v-8e30bd52]:last-child{border-radius:0 0 5px 5px}.comp-FileManage .menu>div[data-v-8e30bd52]:hover{background:#a5dbf9}.comp-FileManage .controlAnimal[data-v-8e30bd52],.comp-FileManage .show-style[data-v-8e30bd52]{height:0!important}", ""]),
        e.exports = t
    },
    "12d4": function (e, t, n) {
        "use strict";
        n("2789")
    },
    2046: function (e, t, n) {
        var a = n("d81e");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("72c15590", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "232e": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".controlAnimal[data-v-d9964eec]{height:40px!important}@media screen and (max-width:1200px){.comp-TemperatureControl[data-v-d9964eec]  .com-HeaderBar .firstDiv{width:4.5rem!important}}.comp-TemperatureControl[data-v-d9964eec]{width:100%;height:503px;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px}.comp-TemperatureControl .header .menu[data-v-d9964eec]{display:flex;align-items:center;font-size:12px}.comp-TemperatureControl .header .menu .fan-switch>div[data-v-d9964eec]{margin-left:6px}.comp-TemperatureControl .header .menu .el-button[data-v-d9964eec]{width:120px;height:24px;margin-left:33px;border-radius:12px}.comp-TemperatureControl .header .menu .el-button i[data-v-d9964eec]{margin-right:6px}.comp-TemperatureControl .header .fold[data-v-d9964eec]{cursor:pointer}.comp-TemperatureControl .header .fold .iconfont[data-v-d9964eec]{color:#d2d2da;font-size:8px}.comp-TemperatureControl .content[data-v-d9964eec]  .el-table .el-table__cell{padding:0;height:42px}.comp-TemperatureControl .content[data-v-d9964eec]  .el-table .el-table__header-wrapper{background:#313135}.comp-TemperatureControl .content .speDiv .el-input[data-v-d9964eec]{width:120px}.comp-TemperatureControl .content .focus-style .el-input[data-v-d9964eec]{width:120px;border:1px solid #1e9be2}.comp-TemperatureControl .content .focus-style .el-input[data-v-d9964eec] .el-input__wrapper .el-input__suffix .el-input__suffix-inner{color:#1e9be2}.comp-TemperatureControl .content .chart[data-v-d9964eec]{height:280px;margin-top:15px}", ""]),
        e.exports = t
    },
    2437: function (e, t, n) {
        "use strict";
        n("c1c8")
    },
    2577: function (e, t, n) {
        "use strict";
        n("63ba")
    },
    "26e8": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".controlAnimal[data-v-0f9f9936]{height:40px!important}@media screen and (max-width:1200px){.control-main-set .com-HeaderBar[data-v-0f9f9936] .firstDiv{width:8rem!important}}.control-main-set[data-v-0f9f9936]{width:100%;height:372px;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px;margin-left:20px;position:relative}.control-main-set .right-feature[data-v-0f9f9936]{width:18rem;padding:8px 0;display:flex;justify-content:space-evenly}.control-main-set .right-feature .spe-button[data-v-0f9f9936]{width:120px;height:24px;background:#515157;box-shadow:0 3px 3px 0 #303034;border-radius:12px;font-size:12px;font-weight:500;color:#cbcbcc;line-height:24px;text-align:center;cursor:pointer}.control-main-set .right-feature .spe-button .iconfont[data-v-0f9f9936]{font-size:13px}.control-main-set .right-feature .spe-button[data-v-0f9f9936]:hover{background:#6c6c74!important;color:#fff!important}.control-main-set .right-feature .spe-button[data-v-0f9f9936]:active{background:#1e9be2!important;color:#fff}.control-main-set .fold[data-v-0f9f9936]{cursor:pointer}.control-main-set .fold .iconfont[data-v-0f9f9936]{color:#d2d2da;font-size:8px}@media screen and (max-width:1200px){.control-main-set .container_warp .middleContent[data-v-0f9f9936]{width:100%!important;padding-left:0!important}}.control-main-set .container_warp .middleContent[data-v-0f9f9936]{width:58.7%;height:180px;display:flex;justify-content:flex-start;padding-left:16px}.control-main-set .container_warp .middleContent .topPrintshow[data-v-0f9f9936]{position:relative;width:100%;border-radius:5px;font-size:12px;font-family:Source Han Sans CN;font-weight:700;color:#fff}@media screen and (max-width:1200px){.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936]:nth-child(2){width:9.5%!important;left:1.7%!important}}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936]{position:absolute;box-shadow:0 3px 3px 0 rgba(31,31,35,.5);border-radius:5px;display:flex;align-items:center;cursor:pointer}.control-main-set .container_warp .middleContent .topPrintshow .squre-item .iconfont[data-v-0f9f9936]{color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item .icon-a-xingzhuang11[data-v-0f9f9936]{color:#82828b}.control-main-set .container_warp .middleContent .topPrintshow .squre-item .squre-shouhui[data-v-0f9f9936]{color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936] .el-loading-mask{border-radius:5px}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936] .el-loading-mask .el-loading-spinner{padding-top:8px}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936] .el-loading-mask .el-loading-spinner .circular{width:25px;height:25px}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936] .el-loading-mask .el-loading-spinner .circular .path{stroke-width:3px;stroke:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936]:hover{background:#0cc4f2!important}.control-main-set .container_warp .middleContent .topPrintshow .squre-item:hover div[data-v-0f9f9936]:first-child{color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936]:hover .iconfont{color:#fff!important}.control-main-set .container_warp .middleContent .topPrintshow .squre-item2[data-v-0f9f9936]:hover{background:#6c6c74!important;color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item[data-v-0f9f9936]:active{background:#1e9be2!important}.control-main-set .container_warp .middleContent .topPrintshow .squre-item:active div[data-v-0f9f9936]:first-child{color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item:active div[data-v-0f9f9936]:nth-child(2) .iconfont{color:#fff!important}@media screen and (max-width:1200px){.control-main-set .container_warp .middleContent .topPrintshow .squre-item1[data-v-0f9f9936]{width:10.9%!important}.control-main-set .container_warp .middleContent .topPrintshow .itemClass1[data-v-0f9f9936]{left:45.6%!important}.control-main-set .container_warp .middleContent .topPrintshow .itemClass2[data-v-0f9f9936]{left:58.3%!important}.control-main-set .container_warp .middleContent .topPrintshow .itemClass3[data-v-0f9f9936]{left:70.9%!important}.control-main-set .container_warp .middleContent .topPrintshow .itemClass4[data-v-0f9f9936]{left:83.6%!important}}.control-main-set .container_warp .middleContent .topPrintshow .squre-item1[data-v-0f9f9936]{position:absolute;box-shadow:0 3px 3px 0 rgba(31,31,35,.5);border-radius:5px;display:flex;align-items:center;cursor:pointer}.control-main-set .container_warp .middleContent .topPrintshow .squre-item1 .iconfont[data-v-0f9f9936]{color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-itemClick2[data-v-0f9f9936]{background:#1e9be2!important;color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-item2[data-v-0f9f9936]{position:absolute;box-shadow:0 3px 3px 0 rgba(31,31,35,.5);border-radius:5px;display:flex;align-items:center;cursor:pointer}.control-main-set .container_warp .middleContent .topPrintshow .squre-item2 .iconfont[data-v-0f9f9936]{color:#fff}.control-main-set .container_warp .middleContent .topPrintshow .squre-itemClick[data-v-0f9f9936]{background:#1e9be2!important;color:#fff}@media screen and (max-width:1200px){.control-main-set .container_warp .middleContent .midinput[data-v-0f9f9936]{width:51%!important;left:45%!important}.control-main-set .container_warp .middleContent .midinput .midInnerInput[data-v-0f9f9936]{width:100%!important}}.control-main-set .container_warp .middleContent .midinput[data-v-0f9f9936]{width:64%;position:absolute;top:20px;left:58%;display:flex}.control-main-set .container_warp .middleContent .midinput .midInnerInput[data-v-0f9f9936]{width:25%!important;height:28px;padding:0 4px;background:#37373b;border-radius:5px}.control-main-set .container_warp .middleContent .midinput .midInnerInput .el-input[data-v-0f9f9936]{height:28px;font-size:12px!important}.control-main-set .container_warp .middleContent .midinput .focus-style[data-v-0f9f9936]  .el-input{border:1px solid #1e9be2}.control-main-set .container_warp .middleContent .midinput .focus-style .inline-flex[data-v-0f9f9936],.control-main-set .container_warp .middleContent .midinput .focus-style[data-v-0f9f9936]  .el-input .el-input-group__append,.control-main-set .container_warp .middleContent .midinput .focus-style[data-v-0f9f9936]  .el-input .el-input__wrapper .el-input__inner{color:#1e9be2}.control-main-set .container_warp .middleContent .lineL[data-v-0f9f9936]{width:1px;height:136px;background:#46464a;position:absolute;left:84.72%;top:24px}.control-main-set .container_warp .middleContent .z-translate[data-v-0f9f9936]{width:100px;height:10px;position:absolute;top:147px;left:91.11%}.control-main-set .container_warp .middleContent .z-translate span[data-v-0f9f9936]:first-child{font-family:Source Han Sans CN;font-weight:500;color:#a7a7a7}.control-main-set .container_warp .middleContent .z-translate span[data-v-0f9f9936]:nth-child(2){font-family:Source Han Sans CN;font-weight:500;color:#fff;padding-left:5px}.control-main-set .container_warp .middleContent .lineM[data-v-0f9f9936]{width:1px;height:136px;background:#46464a;position:absolute;left:116.82%;top:24px}.control-main-set .container_warp .middleContent .rightInputlittle[data-v-0f9f9936]{width:140px;position:absolute;left:123.36%;top:24px}.control-main-set .container_warp .middleContent .rightInputlittle .midInnerInput[data-v-0f9f9936]{width:25%!important;height:28px;padding:0 4px;background:#37373b;border-radius:5px}.control-main-set .container_warp .middleContent .rightInputlittle .midInnerInput .el-input[data-v-0f9f9936]{height:28px;font-size:12px!important}.control-main-set .container_warp .middleContent .rightInputlittle .focus-style[data-v-0f9f9936]  .el-input{border:1px solid #1e9be2}.control-main-set .container_warp .middleContent .rightInputlittle .focus-style .inline-flex[data-v-0f9f9936],.control-main-set .container_warp .middleContent .rightInputlittle .focus-style[data-v-0f9f9936]  .el-input .el-input-group__append,.control-main-set .container_warp .middleContent .rightInputlittle .focus-style[data-v-0f9f9936]  .el-input .el-input__wrapper .el-input__inner{color:#1e9be2}@media screen and (max-width:1200px){.control-main-set .container_warp .hot_bend[data-v-0f9f9936]{display:none!important}}.control-main-set .container_warp .hot_bend[data-v-0f9f9936]{width:35%;height:35px;position:absolute;top:44%;left:36%}.control-main-set .container_warp .hot_bend .hot_bend_item[data-v-0f9f9936]{display:flex;justify-content:flex-start;align-items:baseline}.control-main-set .container_warp .hot_bend .hot_bend_item .left_info[data-v-0f9f9936]{font-size:12px;font-family:Source Han Sans CN;font-weight:400;color:#cbcbcc}.control-main-set .container_warp .hot_bend .hot_bend_item .elinput_contain[data-v-0f9f9936]{width:120px;height:28px;margin:0 15px 0 20px;padding-bottom:10px}.control-main-set .container_warp .hot_bend .hot_bend_item .elinput_contain .el-input[data-v-0f9f9936]{font-size:12px;font-family:Source Han Sans CN;font-weight:500;color:#fff;height:28px}.control-main-set .container_warp .hot_bend .hot_bend_item .last_info[data-v-0f9f9936]{font-size:12px;font-family:Source Han Sans CN;font-weight:500;color:#fff}@media screen and (max-width:1200px){.control-main-set .container_warp .ofen_switch[data-v-0f9f9936]{width:95%!important}}.control-main-set .container_warp .ofen_switch[data-v-0f9f9936]{width:93%;height:30px;position:absolute;left:3.7%;top:67%;display:flex;justify-content:space-between}.control-main-set .container_warp .ofen_switch .usb-switch[data-v-0f9f9936]{font-size:12px;font-family:Source Han Sans CN;font-weight:700;color:#cbcbcc;width:207px;height:109px;background:#212124;border-radius:5px}.control-main-set .container_warp .ofen_switch .usb-switch[data-v-0f9f9936]  .el-switch{margin-left:18px}.control-main-set .container_warp .ofen_switch .usb-switch[data-v-0f9f9936]  .el-switch .el-switch__core{height:32px!important}.control-main-set .container_warp .ofen_switch .usb-switch[data-v-0f9f9936]  .el-switch .el-switch__core .el-switch__action{width:26px!important;height:26px!important}.control-main-set .container_warp .ofen_switch .usb-switch[data-v-0f9f9936]  .is-checked .el-switch__core .el-switch__action{left:calc(100% - 28px)!important}@keyframes rotate-0f9f9936{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.control-main-set .container_warp .ofen_switch .usb-switch .inner-lab[data-v-0f9f9936]{display:flex;align-items:center;padding:7px 0 0 11px}.control-main-set .container_warp .ofen_switch .usb-switch .inner-lab .inner-labin[data-v-0f9f9936]{display:inline-block;padding-left:4px;font-weight:700}.control-main-set .container_warp .ofen_switch .usb-switch .inner-lab .inner-labin span[data-v-0f9f9936]{padding-left:7px;font-size:12px;font-family:Source Han Sans CN;font-weight:700;color:#fff}.control-main-set .container_warp .ofen_switch .usb-switch .inner-lab .progress[data-v-0f9f9936]{width:100%}.control-main-set .container_warp .ofen_switch .usb-switch .inner-lab .progress .el-slider[data-v-0f9f9936]{width:93%}.control-main-set .container_warp .ofen_switch .usb-switch .inner-lab .rotation[data-v-0f9f9936]{animation:rotate-0f9f9936 2s linear infinite}.control-main-set .container_warp .footerContiner[data-v-0f9f9936]{width:100%;padding-top:11px;text-align:left}.control-main-set .container_warp .footerContiner .innerConul[data-v-0f9f9936]{display:flex;flex-wrap:wrap;justify-content:space-around;height:150px}.control-main-set .container_warp .footerContiner .innerConul li[data-v-0f9f9936]{padding-left:22px;padding-top:14px;display:flex;width:47%}.control-main-set .container_warp .footerContiner .innerConul li .iconfont[data-v-0f9f9936]{font-size:14px;color:#c8c8cf}.control-main-set .container_warp .footerContiner .innerConul li .innerSlider[data-v-0f9f9936]{width:55%}.control-main-set .container_warp .footerContiner .innerConul li .innerSlider p[data-v-0f9f9936]{padding-bottom:10px;font-size:14px;font-family:Source Han Sans CN;font-weight:500;color:#fff}.control-main-set .container_warp .footerContiner .innerConul li .innerSlider .el-slider[data-v-0f9f9936]{width:100%}.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli[data-v-0f9f9936]{width:220px}.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli .rightInput[data-v-0f9f9936]{display:flex;width:200px;height:36px;background:#37373b;border-radius:5px;padding-top:9px;padding-left:18px}.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli .rightInput[data-v-0f9f9936] .el-input .el-input__wrapper .el-input__inner{text-align:right;padding-right:5px;color:#a7a7a7}.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli .focus-style[data-v-0f9f9936]  .el-input{border:1px solid #1e9be2}.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli .focus-style[data-v-0f9f9936]  .el-input .el-input-group__append,.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli .focus-style[data-v-0f9f9936]  .el-input .el-input__wrapper .el-input__inner,.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli .focus-style[data-v-0f9f9936]  .el-input .el-input__wrapper .el-input__suffix{color:#1e9be2}.control-main-set .container_warp .footerContiner .innerConul li .rightInnerli span[data-v-0f9f9936]{display:inline-block;padding:13px 0 6px 11px;cursor:pointer}", ""]),
        e.exports = t
    },
    2789: function (e, t, n) {
        var a = n("0d81");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("bea941f2", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    2793: function (e, t, n) {
        var a = n("232e");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("5255289f", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    2908: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".com-HeaderBar[data-v-5d2724ee]{border-radius:5px 5px 0 0;height:40px;background:#46464a;display:flex;justify-content:space-between;align-items:center;padding:0 15px;font-size:14px;border:1px solid #46464a;box-shadow:0 3px 3px 0 #303034}.com-HeaderBar i[data-v-5d2724ee]{margin-right:10px;color:#cbcbcc}.com-HeaderBar[data-v-5d2724ee] .btn .upload-demo .el-upload .el-button{width:127px}", ""]),
        e.exports = t
    },
    "2c5c": function (e, t, n) {
        "use strict";
        n("e186")
    },
    "46a2": function (e, t, n) {
        var a = n("dab0");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("42d1da4a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "489e": function (e, t, n) {
        "use strict";
        n("2046")
    },
    "4af9": function (e, t, n) {
        var a = n("2908");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("0da75658", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "52e4": function (e, t, n) {
        "use strict";
        n("091c")
    },
    5462: function (e, t, n) {
        "use strict";
        n("87da")
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("7a23"),
        o = n("be92");
        const r = Object(o["b"])("prepareStore", {
            state: () => ({
                materialDetect: 0,
                videoElapse: 0,
                nozzleMoveSnapshot: 0,
                videoElapseFrame: 0,
                videoElapseInterval: 0
            })
        }),
        i = (Object(o["b"])("configStore", {
                state: () => ({
                    stepper_x: null,
                    tmc2209_stepper_x: null,
                    stepper_y: null,
                    tmc2209_stepper_y: null,
                    stepper_z: null,
                    tmc2209_stepper_z: null,
                    extruder: null,
                    heater_fan_hotend_fan: null,
                    tmc2209_extruder: null,
                    heater_bed: null,
                    bed_mesh: null,
                    printer: null,
					retMaterialInfo: null,
                })
            }), Object(o["b"])("mainStore", {
                state: () => ({ boxsInfo: null })
            }));
        var c = {
            23: (e, t) => t("errorMessage.printNoReady"),
            2218: (e, t) => t("errorMessage.chuanganqi"),
            2219: (e, t) => t("errorMessage.paramsNOuse"),
            2220: (e, t) => t("errorMessage.weizhizu") + "" + e[0],
            2221: (e, t) => t("errorMessage.wuxiaozi") + "" + e[0],
            2222: (e, t) => t("errorMessage.zixing") + "" + e[0] + t("errorMessage.buzhengque"),
            2223: (e, t) => t("errorMessage.bufenmingc") + "" + e[0] + t("errorMessage.wuxiao"),
            2224: (e, t) => t("errorMessage.yinjiao"),
            2225: (e, t) => t("errorMessage.chouxiang"),
            2226: (e, t) => t("errorMessage.caidanxiang") + "" + e[0] + t("errorMessage.bujieshou"),
            2227: (e, t) => t("errorMessage.wrongType"),
            2228: (e, t) => t("errorMessage.select") + "" + e[0] + t("errorMessage.myChose") + e[1] + t("errorMessage.notUseSelect"),
            2229: (e, t) => t("errorMessage.weizhicai") + (e[0] + "。"),
            2230: (e, t) => t("errorMessage.wujiexi"),
            2231: (e, t) => "" + e[0] + t("errorMessage.tongMcu"),
            2232: (e, t) => t("errorMessage.ceshizhi"),
            2233: (e, t) => t("errorMessage.wanggewai") + "" + e[0] +  + ("" + e[1]) + t("errorMessage.fade_target") + e[2],
            2234: (e, t) => t("errorMessage.wangge2") + "" + e[0] + t("errorMessage.wanggexiao") + e[1] + t("errorMessage.wanggezuida") + e[2],
            2235: (e, t) => t("errorMessage.wanggeshuiping"),
            2236: (e, t) => t("errorMessage.dicengtan"),
            2237: (e, t) => t("errorMessage.meijiazai"),
            2238: (e, t) => t("errorMessage.shengzuobiao"),
            2239: (e, t) => t("errorMessage.sancicacao") + `${e[0]}, ${e[1]}`,
            2240: (e, t) => t("errorMessage.bupipei") + `${e[0]}, ${e[1]}` + t("errorMessage.probed") + `(${e[3]}, ${e[4]})`,
            2241: (e, t) => t("errorMessage.ycontrol"),
            2242: (e, t) => t("errorMessage.guiling") + `${e[0]} ${e[1]} ${e[2]} [${e[3]}]`,
            2243: (e, t) => t("errorMessage.chaofanwei") + `${e[0]} ${e[1]} ${e[2]} [${e[3]}]`,
            2244: (e, t) => t("errorMessage.yidongchang") + `${e[0]}mm vs${e[1]}mm）` + t("errorMessage.xiangxinxi"),
            2246: (e, t) => t("errorMessage.jiemianxuanx") + "" + e[0] + t("errorMessage.bixuyou") + e[1],
            2247: (e, t) => t("errorMessage.jiemianxuanx") + "" + e[0] + t("errorMessage.dezuida") + e[1],
            2248: (e, t) => t("errorMessage.fenxican") + "" + e[0],
            2249: (e, t) => t("errorMessage.canshu") + "" + e[0] + t("errorMessage.dezuixiaob") + e[1],
            2250: (e, t) => t("errorMessage.canshu") + "" + e[0] + t("errorMessage.dezuidab") + e[1],
            2251: (e, t) => "" + e[0] + t("errorMessage.shangcuo1") + e[1],
            2252: (e, t) => "" + e[0] + t("errorMessage.shangcuo2") + e[1] + t("errorMessage.zuixiaozhi") + e[2],
            2253: (e, t) => "" + e[0] + t("errorMessage.shangcuo2") + e[1] + t("errorMessage.zuixiaozhi") + e[2],
            2254: (e, t) => "" + e[0] + t("errorMessage.shangcuo") + e[1] + t("errorMessage.bidayu") + e[2],
            2255: (e, t) => "" + e[0] + t("errorMessage.shangcuo") + e[1] + t("errorMessage.bixiaoyu") + e[2],
            2256: (e, t) => t("errorMessage.weizhimeib"),
            2257: (e, t) => t("errorMessage.tanshibai"),
            2258: (e, t) => t("errorMessage.xunidian"),
            2259: (e, t) => t("errorMessage.duanzhidian"),
            2260: (e, t) => t("errorMessage.yidongpenzui"),
            2261: (e, t) => t("errorMessage.deltadayin"),
            2262: (e, t) => t("errorMessage.celiangzhi"),
            2263: (e, t) => t("errorMessage.jibenjioazhun"),
            2264: (e, t) => t("errorMessage.canshu") + "" + e[0] + t("errorMessage.bixuyou1") + e[1] + t("errorMessage.gezhi"),
            2265: (e, t) => t("errorMessage.jiaozhunW"),
            2266: (e, t) => t("errorMessage.dostaryun"),
            2267: (e, t) => t("errorMessage.tongjixin") + "" + e[0],
            2268: (e, t) => t("errorMessage.bujinqi"),
            2269: (e, t) => t("errorMessage.weizhiHong") + "" + e[0],
            2270: (e, t) => t("errorMessage.wufajiang") + "" + e[0] + t("errorMessage.wenzixi"),
            2271: (e, t) => t("errorMessage.zhidingbian"),
            2272: (e, t) => "" + e[0] + t("errorMessage.zhongsuwuxiao"),
            2273: (e, t) => t("errorMessage.wufafenxi") + "" + e[0],
            2274: (e, t) => t("errorMessage.weizhig") + "" + e[0],
            2275: (e, t) => t("errorMessage.fenwuxiao") + "" + e[0],
            2276: (e, t) => t("errorMessage.replicape"),
            2277: (e, t) => t("errorMessage.jingtaiyin"),
            2278: (e, t) => t("errorMessage.fanzhuanyin"),
            2279: (e, t) => t("errorMessage.pwnxin"),
            2280: (e, t) => t("errorMessage.weizhipin") + "" + e[0],
            2281: (e, t) => t("errorMessage.offetxiao") + "" + e[0] + t("errorMessage.jiuzheng"),
            2282: (e, t) => t("errorMessage.wufenxi") + `${e[0]},${e[1]}`,
            2283: (e, t) => t("errorMessage.weizhunbei"),
            2284: (e, t) => t("errorMessage.bianliangwen"),
            2285: (e, t) => t("errorMessage.bianliangwen") + "" + e[0],
            2286: (e, t) => t("errorMessage.baobianl"),
            2287: (e, t) => t("errorMessage.mcngui"),
            2288: (e, t) => t("errorMessage.jingyin"),
            2289: (e, t) => t("errorMessage.guanjizhi"),
            2290: (e, t) => t("errorMessage.chishida"),
            2291: (e, t) => t("errorMessage.ruanpwn"),
            2292: (e, t) => t("errorMessage.zhouqida"),
            2293: (e, t) => t("errorMessage.zhouqidad"),
            2294: (e, t) => t("errorMessage.wait") + "" + e[0] + t("errorMessage.xiangyingcao"),
            2295: (e, t) => t("errorMessage.chongqimcm") + "" + e[0] + t("errorMessage.fail"),
            2296: (e, t) => t("errorMessage.mcu") + "" + e[0] + t("errorMessage.CRCpei"),
            2297: (e, t) => t("errorMessage.cajiao") + "" + e[0] + t("errorMessage.feiMcu") + e[1] + t("errorMessage.chajiaom"),
            2298: (e, t) => t("errorMessage.gengMcn") + "" + e[0] + t("errorMessage.peizhi"),
            2299: (e, t) => t("errorMessage.wupeiM") + "" + e[0],
            300: (e, t) => t("errorMessage.peiqiM") + "" + e[0] + t("errorMessage.chucuo1") + e[1],
            2301: (e, t) => t("errorMessage.zipeishi") + "" + e[0],
            2302: (e, t) => t("errorMessage.keyishao") + "" + e[0],
            2303: (e, t) => t("errorMessage.buzhiyin") + "" + e[0],
            2304: (e, t) => "" + e[0] + t("errorMessage.zhougewu"),
            2305: (e, t) => t("errorMessage.wufenzhou") + "" + e[0],
            2306: (e, t) => t("errorMessage.buzhishu") + "" + e[0] + t("errorMessage.jinreson"),
            2307: (e, t) => t("errorMessage.weizhishu"),
            2308: (e, t) => "" + e[0] + t("errorMessage.zhoujiashu"),
            2309: (e, t) => t("errorMessage.xiangleiy") + "" + e[0] + t("errorMessage.wuxiaob"),
            2310: (e, t) => t("errorMessage.bixuz") + "" + e[0] + t("errorMessage.shangzhid") + e[1],
            2311: (e, t) => t("errorMessage.weizhi") + `${e[0]} '${e[1]}'`,
            2312: (e, t) => t("errorMessage.yuanjisuan") + "" + e[0],
            2313: (e, t) => t("errorMessage.chujiashu") + "" + e[0] + t("errorMessage.shineicuo"),
            2314: (e, t) => t("errorMessage.xiewenj") + "" + e[0] + t("errorMessage.shicucuo") + e[1],
            2315: (e, t) => t("errorMessage.pingst") + "" + e[0] + t("errorMessage.tiaomug"),
            2316: (e, t) => t("errorMessage.lengduanfan"),
            2317: (e, t) => t("errorMessage.reoufan"),
            2318: (e, t) => t("errorMessage.lengduangao"),
            2319: (e, t) => t("errorMessage.lengduandi"),
            2320: (e, t) => t("errorMessage.reougao"),
            2321: (e, t) => t("errorMessage.reouDi"),
            2322: (e, t) => t("errorMessage.guodianya"),
            2323: (e, t) => t("errorMessage.reoukailu"),
            2324: (e, t) => t("errorMessage.kailu"),
            2325: (e, t) => t("errorMessage.duididuan"),
            2326: (e, t) => t("errorMessage.vcduan"),
            2327: (e, t) => t("errorMessage.sheIDw"),
            2328: (e, t) => t("errorMessage.redianoukai"),
            2329: (e, t) => t("errorMessage.shuruduan"),
            2330: (e, t) => t("errorMessage.rtdduanlu"),
            2331: (e, t) => t("errorMessage.daqiagkai"),
            2332: (e, t) => t("errorMessage.xiaoqiangkai"),
            2333: (e, t) => t("errorMessage.xiaoqiangkai"),
            2334: (e, t) => t("errorMessage.weizhid"),
            2335: (e, t) => t("errorMessage.xuanxiang") + "" + e[0] + t("errorMessage.zaijie") + e[1] + t("errorMessage.bixudi"),
            2336: (e, t) => t("errorMessage.baojietou") + "\n" + e[0] + t("errorMessage.jiuzhengwen"),
            2337: (e, t) => t("errorMessage.wenjianjie") + "" + e[0] + t("errorMessage.chongjiapei"),
            3e3: (e, t) => 'Shutdown due to webhooks request\n    Once the underlying issue is corrected, use the\n    "FIRMWARE_RESTART" command to reset the firmware, reload the\n    config, and restart the host software.\n    Printer is shutdown',
            1: (e, t) => "key" + e[0] + t("errorMessage.dianjiyi"),
            2: (e, t) => "key" + e[0] + t("errorMessage.neibvucuo"),
            3: (e, t) => "key" + e[0] + t("errorMessage.tongxunyi"),
            4: (e, t) => "key" + e[0] + t("errorMessage.yuqijia"),
            5: (e, t) => "key" + e[0] + t("errorMessage.rechuangyi"),
            6: (e, t) => "key" + e[0] + t("errorMessage.jichuyi"),
            7: (e, t) => "key" + e[0] + t("errorMessage.dayinyi"),
            8: (e, t) => "key" + e[0] + t("errorMessage.dayinzhi"),
            200: (e, t) => "key" + e[0] + t("errorMessage.weizhicuo"),
            201: (e, t) => "key" + e[0] + t("errorMessage.wenqiangyi"),
            202: (e, t) => "key" + e[0] + t("errorMessage.dayinwenyi"),
            203: (e, t) => "key" + e[0] + t("errorMessage.zhenwenyou"),
            204: (e, t) => "key" + e[0] + t("errorMessage.fenshanyi"),
            205: (e, t) => "key" + e[0] + t("errorMessage.wangluoyi"),
            206: (e, t) => "key" + e[0] + t("errorMessage.dayinzhi1"),
            207: (e, t) => "key" + e[0] + t("errorMessage.ztouchyi"),
            208: (e, t) => "key" + e[0] + t("errorMessage.wenfuyi"),
            500: (e, t) => "key" + e[0] + t("errorMessage.weizhiyi"),
            800: (e, t) => "key" + e[0] + t("errorMessage.yidongcuo"),
            801: (e, t) => "key" + e[0] + t("errorMessage.dayinjiuyu")
        },
        s = n("3ef4"),
        l = {
            __name: "App",
            setup(e) {
                const t = Object(a["ref"])(!0),
                n = '\n        <path class="path" d="\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n      ';
                return Object(a["onBeforeMount"])(() => {
                    const {
                        $t: e
                    } = Object(a["getCurrentInstance"])().proxy;
                    console.log("internationalization 612", e("FileManage.files"));
                    const {
                        proxy: n
                    } = Object(a["getCurrentInstance"])(),
                    o = e => {
                        let t = e.toString();
                        while (t.length < 4)
                            t = "0" + t;
                        return "E" + t
                    };
                    n.$messageCenter.on("websocket_open", a => {
                        if (t.value = !a, !a)
                            return;
                        let l = null;
                        n.$messageCenter.on("message_change", t => {
                            if ("ok" === t)
                                return;
                            const a = JSON.parse(t),
                            d = i();
                            for (const [e, n] of Object.entries(a))
                                d[e] = "curPosition" === e || "autohome" === e ? n.split(" ") : "boxsInfo" === e && typeof n === "string" ? JSON.parse(n) : n;
                            if (a.err && c[a.err.errcode]) {
                                const {
                                    errcode: t,
                                    key: r
                                } = a.err,
                                i = [1, 2, 3, 4, 5, 6, 8, 200],
                                d = i.includes(t),
                                p = e(d ? "configuration.resetIt" : "configuration.sureThat"),
                                u = `<div class= "codeMessage">\n           <p> ${o(t)}：${c[t]([r], e)}</p>\n            <button class="reboot">${p}</button>\n          </div>`;
                                l = Object(s["a"])({
                                    dangerouslyUseHTMLString: !0,
                                    message: u,
                                    type: "warning",
                                    duration: 0
                                });
                                const h = document.querySelector(".reboot");
                                h && h.addEventListener("click", () => {
                                    d ? n.$webSocket.sendMsg({
                                        method: "set",
                                        params: {
                                            restartFirmware: 1
                                        }
                                    }) : (n.$webSocket.sendMsg({
                                            method: "set",
                                            params: {
                                                cleanErr: 1
                                            }
                                        }), l.close())
                                })
                            }
                            a.err && 0 === a.err.errcode && l && l.close();
                            const p = r(),
                            u = ["materialDetect", "videoElapse", "nozzleMoveSnapshot", "videoElapseFrame", "videoElapseInterval"];
                            for (const [e, n] of Object.entries(a))
                                u.includes(e) && (p[e] = n)
                        })
                    })
                }),
                Object(a["onMounted"])(() => {
                    function e() {
                        const e = document.documentElement.clientWidth,
                        t = document.getElementById("app");
                        e <= 900 && (t.style.minWidth = e + "px")
                    }
                    e(),
                    window.addEventListener("resize", e)
                }),
                (e, o) => {
                    const r = Object(a["resolveComponent"])("router-view"),
                    i = Object(a["resolveDirective"])("loading");
                    return Object(a["withDirectives"])((Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                id: "nav",
                                "element-loading-text": "장치 연결 중...",
                                "element-loading-spinner": n,
                                "element-loading-svg-view-box": "-10, -10, 50, 50",
                                "element-loading-background": "rgba(255, 255, 255, 0.8)",
                                style: {
                                    position: "unset !important"
                                }
                            }, [t.value ? Object(a["createCommentVNode"])("", !0) : (Object(a["openBlock"])(), Object(a["createBlock"])(r, {
                                            key: 0
                                        }))])), [[i, t.value]])
                }
            }
        };
        n("2c5c");
        const d = l;
        var p = d,
        u = n("6605"),
        h = (n("14d9"), n("64e3")),
        m = n.n(h),
        b = n("c9a1"),
        g = n("47e2");
        const f = e => (Object(a["pushScopeId"])("data-v-07d0c6ea"), e = e(), Object(a["popScopeId"])(), e),
        w = {
            class: "home"
        },
        v = {
            class: "head-bar"
        },
        x = {
            class: "bar-left"
        },
        j = ["onClick"],
        O = f(() => Object(a["createElementVNode"])("img", {
                    src: m.a,
                    alt: ""
                }, null, -1)),
        y = {
            class: "bar-right"
        },
        k = {
            class: "interna"
        },
        M = ["onClick"];
        var C = {
            __name: "Layout",
            setup(e) {
                const {
                    locale: t
                } = Object(g["b"])(), {
                    $t: n
                } = Object(a["getCurrentInstance"])().proxy;
                let o = Object(a["reactive"])({
                    socket: null,
                    languageOption: [{
                            value: 0,
                            label: "한국어"
                        }, {
                            value: 1,
                            label: "English"
                        }
                    ],
                    selectVal: "한국어"
                });
                Object(a["onMounted"])(() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
                    o.socket = e.$webSocket
                });
                const r = Object(u["c"])();
                function i() {
                    b["a"].confirm(n("configuration.resetFuwu"), n("configuration.Tips"), {
                        confirmButtonText: n("configuration.sureInfo"),
                        cancelButtonText: n("configuration.cancel"),
                        type: "warning"
                    }).then(() => {
                        o.socket.sendMsg({
                            method: "set",
                            params: {
                                restartKlipper: 1
                            }
                        }),
                        o.socket.sendMsg({
                            method: "set",
                            params: {
                                restartFirmware: 1
                            }
                        }),
                        Object(s["a"])({
                            type: "success",
                            message: n("configuration.resetSuccess")
                        })
                    }).catch(() => {
                        Object(s["a"])({
                            type: "info",
                            message: n("configuration.quxiao")
                        })
                    })
                }
                function c() {
                    const e = document.getElementsByClassName("el-popper")[0];
                    console.log("elePopper", e.style.display),
                    "none" === e.style.display ? e.style.display = "block" : e.style.display = "none"
                }
                function l(e) {
                    0 === e && (o.selectVal = "한국어", t.value = "zh"),
                    1 === e && (o.selectVal = "English", t.value = "en");
                    const n = document.getElementsByClassName("el-popper")[0];
                    n.style.display = "none"
                }
                function d() {
                    r.push("/home")
                }
                return "/home" !== r.path && r.replace("home"),
                (e, t) => {
                    const r = Object(a["resolveComponent"])("el-option"),
                    s = Object(a["resolveComponent"])("el-select"),
                    p = Object(a["resolveComponent"])("router-view");
                    return Object(a["openBlock"])(),
                    Object(a["createElementBlock"])("div", w, [Object(a["createElementVNode"])("div", v, [Object(a["createElementVNode"])("div", x, [Object(a["createElementVNode"])("div", {
                                                class: "logo",
                                                onClick: Object(a["withModifiers"])(d, ["stop"])
                                            }, [O, Object(a["createElementVNode"])("span", null, Object(a["toDisplayString"])(Object(a["unref"])(n)("configuration.crealityPrint")), 1)], 8, j)]), Object(a["createElementVNode"])("div", y, [Object(a["createElementVNode"])("div", k, [Object(a["createElementVNode"])("i", {
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(c, ["stop"])
                                                    }, "", 8, M), Object(a["createVNode"])(s, {
                                                        modelValue: e.value,
                                                        "onUpdate:modelValue": t[0] || (t[0] = t => e.value = t),
                                                        effect: "dark",
                                                        class: "m-2",
                                                        placeholder: Object(a["unref"])(o).selectVal,
                                                        onChange: l
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(() => [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(Object(a["unref"])(o).languageOption, e => (Object(a["openBlock"])(), Object(a["createBlock"])(r, {
                                                                                    key: e.value,
                                                                                    label: e.label,
                                                                                    value: e.value
                                                                                }, null, 8, ["label", "value"]))), 128))]),
                                                        _: 1
                                                    }, 8, ["modelValue", "placeholder"])]), Object(a["createElementVNode"])("img", {src: "./static/img/power.png",style: {width: "35px",height: "35px",cursor: "pointer"},onClick: i})])]), Object(a["createVNode"])(p)])
                }
            }
        },
        _ = (n("489e"), n("6b0d")),
        S = n.n(_);
        const F = S()(C, [["__scopeId", "data-v-07d0c6ea"]]);
        var z = F;
        const E = {
            class: "com-HeaderBar"
        },
        T = {
            class: "firstDiv"
        },
        I = {
            class: "iconfont"
        };
        var N = {
            __name: "HeaderBar",
            props: {
                title: String,
                icon: String
            },
            setup(e) {
                return (t, n) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", E, [Object(a["createElementVNode"])("div", T, [Object(a["createElementVNode"])("i", I, Object(a["toDisplayString"])(e.icon), 1), Object(a["createElementVNode"])("span", null, Object(a["toDisplayString"])(e.title), 1)]), Object(a["renderSlot"])(t.$slots, "center"), Object(a["renderSlot"])(t.$slots, "right")]))
            }
        };
        n("f3de");
        const B = S()(N, [["__scopeId", "data-v-5d2724ee"]]);
        var P = B;
        const V = Object(o["b"])("parts", {
            state: () => ({
                parts: {
                    "0_0": {
                        name: "0_0",
                        outline: [{
                                x: 47.223,
                                y: 218.174
                            }, {
                                x: 47.223,
                                y: 238.174
                            }, {
                                x: 67.223,
                                y: 238.174
                            }, {
                                x: 67.223,
                                y: 218.174
                            }, {
                                x: 47.223,
                                y: 218.174
                            }
                        ],
                        target: {
                            x: 57.223,
                            y: 228.174
                        }
                    },
                    "0_1": {
                        name: "0_1",
                        outline: [{
                                x: 229.146,
                                y: 219.225
                            }, {
                                x: 229.146,
                                y: 239.225
                            }, {
                                x: 249.146,
                                y: 239.225
                            }, {
                                x: 249.146,
                                y: 219.225
                            }, {
                                x: 229.146,
                                y: 219.225
                            }
                        ],
                        target: {
                            x: 239.146,
                            y: 229.225
                        }
                    },
                    "0_2": {
                        name: "0_2",
                        outline: [{
                                x: 44.715,
                                y: 45.365
                            }, {
                                x: 44.715,
                                y: 65.365
                            }, {
                                x: 64.715,
                                y: 65.365
                            }, {
                                x: 64.715,
                                y: 45.365
                            }, {
                                x: 44.715,
                                y: 45.365
                            }
                        ],
                        target: {
                            x: 54.715,
                            y: 55.365
                        }
                    },
                    "0_3": {
                        name: "0_3",
                        outline: [{
                                x: 227.82,
                                y: 51.068
                            }, {
                                x: 227.82,
                                y: 71.068
                            }, {
                                x: 247.82,
                                y: 71.068
                            }, {
                                x: 247.82,
                                y: 51.068
                            }, {
                                x: 227.82,
                                y: 51.068
                            }
                        ],
                        target: {
                            x: 237.82,
                            y: 61.068
                        }
                    },
                    "0_4": {
                        name: "0_4",
                        outline: [{
                                x: 140,
                                y: 140
                            }, {
                                x: 140,
                                y: 160
                            }, {
                                x: 160,
                                y: 160
                            }, {
                                x: 160,
                                y: 140
                            }, {
                                x: 140,
                                y: 140
                            }
                        ],
                        target: {
                            x: 150,
                            y: 150
                        }
                    }
                },
                excludedParts: [""],
                printState: "",
                currentPosition: null
            }),
            getters: {
                getParts: e => e.parts,
                getPosition: e => e.currentPosition,
                getIsPartCurrent() {
                    return e => this.currentPart === e
                },
                getIsPartExcluded() {
                    return e => this.excludedParts.includes(e)
                },
                getPartPos() {
                    return e => {
                        const t = this.getParts[e];
                        return null === t || void 0 === t ? void 0 : t.target
                    }
                },
                getPartSVG() {
                    return e => {
                        const t = this.getParts[e];
                        let n = "",
                        a = "M";
                        return t.outline.forEach(e => {
                            n += `${a}${e.x},${e.y}`,
                            a = "L"
                        }),
                        n += "z",
                        n
                    }
                },
                getPrintState: e => e.printState
            },
            actions: {
                partUpdate(e) {
                    if (e.length > 0) {
                        const t = {};
                        e.forEach(e => {
                            const n = e.name,
                            a = {
                                name: n,
                                outline: [],
                                target: null
                            };
                            "center" in e && 2 === e.center.length && (a.target = {
                                    x: e.center[0],
                                    y: e.center[1]
                                }),
                            "polygon" in e && (a.outline = e.polygon.map(e => ({
                                            x: e[0],
                                            y: e[1]
                                        }))),
                            t[n] = a
                        }),
                        console.log("Excluded object SVG Excluded object data detected", JSON.stringify(t)),
                        this.parts = Object.freeze(t)
                    }
                },
                printStatsUpdate(e) {
                    this.printState(e.state)
                },
                printCurrentPosition(e) {
                    this.currentPosition = e
                }
            }
        }),
        A = {
            id: "parts"
        },
        R = ["d"],
        D = ["viewBox", "x", "y"],
        q = ["onClick", "onTouchend", "fill"],
        U = {
            key: 1,
            class: "eventNone",
            d: "M0 1024V0h1024v1024H0zM981.333333 42.666667H42.666667v938.666666h938.666666V42.666667z",
            "p-id": "4170"
        },
        Z = {
            key: 2,
            class: "eventNone",
            d: "M512.021333 484.565333a44.437333 44.437333 0 0 1-17.770666-4.394666l-225.002667-100.48c-18.922667-8-27.434667-29.034667-18.986667-46.976 3.797333-8.085333 10.56-14.485333 18.986667-18.026667l213.845333-96a71.210667 71.210667 0 0 1 57.728 0l213.930667 96c18.901333 8 27.413333 29.056 18.986667 46.997333a36.416 36.416 0 0 1-18.986667 18.005334l-225.024 100.394666c-5.461333 2.752-11.541333 4.266667-17.706667 4.48zM453.909333 810.666667c-5.76 0-11.456-1.365333-16.554666-3.946667l-203.285334-90.453333c-12.906667-6.421333-20.885333-19.114667-20.736-32.874667v-230.613333a36.608 36.608 0 0 1 19.072-31.488 37.12 37.12 0 0 1 35.008 0l202.922667 90.368c12.224 6.272 20.053333 18.304 20.565333 31.488v230.912a36.906667 36.906667 0 0 1-18.901333 31.509333 39.552 39.552 0 0 1-18.090667 5.098667z m116.16 0c-6.293333 0-12.544-1.578667-18.069333-4.522667a36.992 36.992 0 0 1-18.922667-31.509333V543.082667c0.298667-13.12 7.893333-25.088 19.904-31.488l204.266667-90.965334a36.970667 36.970667 0 0 1 34.346667 0.789334c11.776 6.570667 18.986667 18.538667 19.072 31.509333v230.464a36.373333 36.373333 0 0 1-19.904 32.874667l-204.053334 90.517333a35.797333 35.797333 0 0 1-16.64 3.882667z",
            "p-id": "4171"
        },
        H = {
            key: 3,
            class: "eventNone",
            d: "M42.666667 960L960 42.666667l21.333333 21.333333L64 981.333333l-21.333333-21.333333z",
            "p-id": "4172",
            fill: "#FD265A",
            "stroke-width": "10"
        };
        var W = {
            __name: "ExcludeObject",
            props: ["lightObjects"],
            emits: ["partChecked"],
            setup(e, {
                expose: t,
                emit: n
            }) {
                const o = e,
                r = i(),
                c = Object(a["ref"])("");
                let s = Object(a["ref"])(""),
                l = Object(a["reactive"])({
                    forceUpdate: () => {}
                });
                const d = V().getParts,
                p = Object.values(d),
                u = e => {
                    c.value = e,
                    s.value = e,
                    n("partChecked", e)
                };
                t({
                    isPartsChecked: s
                });
                const h = Object(a["computed"])(() => {
                    const e = V().getParts;
                    return Object.keys(e)
                }),
                m = function (e) {
                    return o.lightObjects.includes(e) ? "0 0 1200 1200" : "70 210 1200 1200"
                },
                b = e => v(e) ? "partExcluded" : w(e) ? "partCurrent" : "partIncluded";
                Object(a["watch"])(() => r.curPosition, e => {
                    const t = {
                        x: parseInt(e[0].slice(2)),
                        y: parseInt(e[1].slice(2))
                    };
                    p.forEach(e => {
                        d[e.name].color = "",
                        Math.abs(t.x - parseInt(e.target.x)) <= 20 && Math.abs(t.y - parseInt(e.target.y)) <= 20 && (d[e.name].color = "#FFC100", l.forceUpdate())
                    })
                }, {
                    immediate: !0
                });
                const g = e => V().getPartSVG(e),
                f = e => V().getPartPos(e),
                w = e => V().getIsPartCurrent(e),
                v = e => V().getIsPartExcluded(e);
                return Object(a["onMounted"])(() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
                    l.forceUpdate = e.$forceUpdate
                }),
                (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("g", A, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(Object(a["unref"])(h), e => (Object(a["openBlock"])(), Object(a["createElementBlock"])("g", {
                                                key: e,
                                                class: Object(a["normalizeClass"])([[b(e), o.lightObjects.includes(e) ? "partsEcclude" : ""], "layer"])
                                            }, [o.lightObjects.includes(e) ? Object(a["createCommentVNode"])("", !0) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("path", {
                                                            key: 0,
                                                            class: "partOutline",
                                                            d: g(e)
                                                        }, null, 8, R)), (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", {
                                                            t: "1695106316480",
                                                            class: "partIcon",
                                                            viewBox: m(e),
                                                            version: "1.1",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            x: f(e).x - 9,
                                                            y: f(e).y - 6,
                                                            width: "25",
                                                            height: "25"
                                                        }, [o.lightObjects.includes(e) ? Object(a["createCommentVNode"])("", !0) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("path", {
                                                                        key: 0,
                                                                        class: "hitarea",
                                                                        onClick: t => u(e),
                                                                        onTouchend: t => u(e),
                                                                        fill: Object(a["unref"])(d)[e].color,
                                                                        d: "M512.021333 484.565333a44.437333 44.437333 0 0 1-17.770666-4.394666l-225.002667-100.48c-18.922667-8-27.434667-29.034667-18.986667-46.976 3.797333-8.085333 10.56-14.485333 18.986667-18.026667l213.845333-96a71.210667 71.210667 0 0 1 57.728 0l213.930667 96c18.901333 8 27.413333 29.056 18.986667 46.997333a36.416 36.416 0 0 1-18.986667 18.005334l-225.024 100.394666c-5.461333 2.752-11.541333 4.266667-17.706667 4.48zM453.930667 810.666667c-5.781333 0-11.477333-1.365333-16.576-3.946667l-203.285334-90.453333c-12.906667-6.421333-20.885333-19.093333-20.736-32.874667v-230.613333a36.608 36.608 0 0 1 19.072-31.488 37.12 37.12 0 0 1 35.008 0l202.901334 90.368c12.245333 6.272 20.074667 18.304 20.586666 31.488v230.912a36.885333 36.885333 0 0 1-18.901333 31.488c-5.461333 3.114667-11.690667 4.906667-18.069333 5.12z m116.138666 0c-6.293333 0-12.544-1.578667-18.090666-4.522667a37.013333 37.013333 0 0 1-18.901334-31.509333V543.082667c0.298667-13.12 7.893333-25.088 19.904-31.488l204.266667-90.965334a36.906667 36.906667 0 0 1 34.346667 0.789334c11.776 6.570667 18.986667 18.538667 19.072 31.509333v230.464a36.394667 36.394667 0 0 1-19.904 32.874667l-204.053334 90.517333a35.797333 35.797333 0 0 1-16.64 3.882667z"
                                                                    }, null, 40, q)), o.lightObjects.includes(e) ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("path", U)) : Object(a["createCommentVNode"])("", !0), o.lightObjects.includes(e) ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("path", Z)) : Object(a["createCommentVNode"])("", !0), o.lightObjects.includes(e) ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("path", H)) : Object(a["createCommentVNode"])("", !0)], 8, D))], 2))), 128))]))
            }
        };
        n("f63a");
        const L = S()(W, [["__scopeId", "data-v-d7e40bce"]]);
        var X = L;
        const Y = {
            class: "v-input__control"
        },
        $ = {
            ref: "input-slot",
            class: "v-input__slot"
        };
        var G = {
            __name: "AppFocusableContainer",
            props: ["disabled"],
            emits: ["focus", "blur"],
            setup(e, {
                emit: t
            }) {
                const n = Object(a["ref"])(!1);
                return Object(a["watch"])(n, e => {
                    t(e ? "focus" : "blur")
                }),
                (t, o) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                        onFocusin: o[0] || (o[0] = e => n.value = !0),
                        onFocusout: o[1] || (o[1] = e => n.value = !1),
                        class: "v-input-wrap"
                    }, [Object(a["createElementVNode"])("div", {
                                class: Object(a["normalizeClass"])(["v-input v-input--hide-details v-text-field v-text-field--enclosed v-text-field--outlined", {
                                            "v-input--is-focused": n.value,
                                            "v-input--is-disabled": e.disabled,
                                            "theme--dark": !0
                                        }
                                    ])
                            }, [Object(a["createElementVNode"])("div", Y, [Object(a["createElementVNode"])("div", $, [Object(a["renderSlot"])(t.$slots, "default")], 512)])], 2)], 32))
            }
        };
        n("82d0");
        const J = S()(G, [["__scopeId", "data-v-6353470d"]]);
        var Q = J;
        const K = {
            class: "fold"
        },
        ee = ["onClick"],
        te = ["onClick"],
        ne = ["viewBox"];
        var ae = {
            __name: "Discharge",
            setup(e) {
                const t = i(), {
                    $t: o
                } = Object(a["getCurrentInstance"])().proxy;
                let r = Object(a["reactive"])({
                    foldFlag: !0,
                    dataReady: !1,
                    socket: null,
                    excluded_data: [],
                    partCheckedData: "",
                    lightObjects: [],
                    viewBoxInt: "",
                    deviceStyle: !1
                }),
                c = Object(a["ref"])(null);
                Object(a["watch"])([() => t.objects, () => t.excluded_objects, () => t.model], () => {
                    t.model && ("K1 Max" === t.model ? (console.log("Current printer model", t.model), r.viewBoxInt = "-26 0 350 300", r.deviceStyle = !0) : (r.viewBoxInt = "0 0 300 290", r.deviceStyle = !1)),
                    t.objects && t.objects.length > 0 && (r.excluded_data = JSON.parse(t.objects), console.log("Excluded object data listening was detected.", JSON.parse(t.objects)), V().partUpdate(r.excluded_data)),
                    t.excluded_objects && (r.lightObjects = JSON.parse(t.excluded_objects))
                }, {
                    immediate: !0
                });
                const l = () => {
                    r.foldFlag = !1
                },
                d = () => r.deviceStyle ? n("7f80") : n("e1be"),
                p = () => {
                    r.foldFlag = !0
                },
                u = (Object(a["ref"])(!0), Object(a["ref"])(null)),
                h = Object(a["ref"])(null),
                m = Object(a["ref"])(!1);
                let g = null;
                Object(a["onMounted"])(() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
                    r.socket = e.$webSocket;
                    let t = setInterval(() => {
                        r.socket.sendMsg({
                            method: "get",
                            params: {
                                reqPrintObjects: 1
                            }
                        }),
                        r.excluded_data && r.excluded_data.length > 0 && (clearTimeout(t), t = null)
                    }, 2e3);
                    setTimeout(() => {
                        clearTimeout(t),
                        t = null
                    }, 3e4)
                }),
                Object(a["onBeforeUnmount"])(() => {
                    null === g || void 0 === g || g.dispose()
                });
                const f = e => {
                    r.partCheckedData = e
                },
                w = e => {
                    r.lightObjects.includes(e) ? Object(s["a"])({
                        type: "warning",
                        message: o("configuration.paichuguol")
                    }) : b["a"].confirm(o("configuration.surePaichu"), o("configuration.paichuObject"), {
                        confirmButtonText: o("configuration.sureInfo"),
                        cancelButtonText: o("configuration.cancel"),
                        type: "warning"
                    }).then(() => {
                        r.socket.sendMsg({
                            method: "set",
                            params: {
                                excludeObjects: [e]
                            }
                        }),
                        Object(s["a"])({
                            type: "success",
                            message: o("configuration.paichuSuccess")
                        })
                    }).catch(() => {
                        c.value.isPartsChecked = "",
                        Object(s["a"])({
                            type: "info",
                            message: o("configuration.quxiao")
                        })
                    })
                };
                return (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["control-main", {
                                    controlAnimal: !Object(a["unref"])(r).foldFlag
                                }
                            ])
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                title: Object(a["unref"])(o)("configuration.paichuObject"),
                                class: "header",
                                icon: ""
                            }, {
                                right: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("div", K, [Object(a["unref"])(r).foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 0,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(l, ["stop"])
                                                    }, "", 8, ee)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 1,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(p, ["stop"])
                                                    }, "", 8, te))])]),
                                _: 1
                            }, 8, ["title"]), Object(a["unref"])(r).foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                    key: 0,
                                    class: "middleContent",
                                    style: Object(a["normalizeStyle"])({
                                        "background-image": `url(${d()})`
                                    })
                                }, [Object(a["createVNode"])(Q, {
                                            ref_key: "container",
                                            ref: u,
                                            onFocus: t[1] || (t[1] = e => m.value = !0),
                                            onBlur: t[2] || (t[2] = e => m.value = !1)
                                        }, {
                                        default:
                                            Object(a["withCtx"])(() => [(Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", {
                                                            ref_key: "svgElement",
                                                            ref: h,
                                                            viewBox: Object(a["unref"])(r).viewBoxInt,
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                                        }, [Object(a["unref"])(r).excluded_data.length > 0 ? (Object(a["openBlock"])(), Object(a["createBlock"])(X, {
                                                                        key: 0,
                                                                        onClick: t[0] || (t[0] = Object(a["withModifiers"])(e => w(Object(a["unref"])(r).partCheckedData), ["stop"])),
                                                                        onPartChecked: f,
                                                                        lightObjects: Object(a["unref"])(r).lightObjects,
                                                                        ref_key: "excludeObject",
                                                                        ref: c
                                                                    }, null, 8, ["lightObjects"])) : Object(a["createCommentVNode"])("", !0)], 8, ne))]),
                                            _: 1
                                        }, 512)], 4)) : Object(a["createCommentVNode"])("", !0)], 2))
            }
        };
        n("c0c6");
        const oe = S()(ae, [["__scopeId", "data-v-975faed4"]]);
        var re = oe;
        const ie = e => (Object(a["pushScopeId"])("data-v-d06bcaee"), e = e(), Object(a["popScopeId"])(), e),
        ce = {
            class: "fold"
        },
        se = ["onClick"],
        le = ["onClick"],
        de = {
            class: "middleContent"
        },
        pe = {
            class: "content flat-manual"
        },
        ue = {
            class: "flat-block"
        },
        he = {
            class: "row-btn"
        },
        me = {
            class: "row-btn"
        },
        be = {
            class: "content",
            ref: "chartRef"
        },
        ge = ie(() => Object(a["createElementVNode"])("div", {
                    class: "flat-auto"
                }, null, -1)),
        fe = {
            class: "auto-menu"
        };
        var we = {
			__name: "LevelControl",
			setup(e) {
				let chartInstance = null;
				let isInteracting = false;
				const t = i(); // 외부 store/instance
				let n = Object(a["reactive"])({
					foldFlag: !0,
					levelCount: 60,
					showBedFace: !1,
					showBedMesh: !1,
					socket: null,
					echart: null,
					checked: 2
				});

				const o = () => { n.foldFlag = !1 },
					  r = () => { n.foldFlag = !0 };
				
				let c = []; 
				let d = Object(a["ref"])([]);
				
				const l = () => {
					if (!chartInstance) return;

					c = [];

					const sData = d.value || [];
					const data = [];

					let p = Infinity;
					let u = -Infinity;

					for (let i = 0; i < sData.length; i++) {
						const z = Number(sData[i].z);

						if (!isNaN(z)) {
							if (z > u) u = z;
							if (z < p) p = z;
						}

						data.push([sData[i].x, sData[i].y, z]);
						c.push([sData[i].x, sData[i].y, 0]);
					}

					if (!isFinite(p) || !isFinite(u)) {
						p = -1;
						u = 1;
					}

					chartInstance.setOption({
						visualMap: {
							min: p,
							max: u,
							dimension: 2,
							seriesIndex: 0,
							precision: 4, 
							formatter: (v) => v.toFixed(4)
						},

						series: n.showBedFace
							? [
								{
									type: "surface",
									data: data,
									wireframe: { show: n.showBedMesh }
								},
								{
									type: "surface",
									data: c,
									itemStyle: { opacity: 0.3 },
									wireframe: { show: false }
								}
							]
							: [
								{
									type: "surface",
									data: data,
									wireframe: { show: n.showBedMesh }
								}
							]

					}, {
						replaceMerge: ['series']   // 💥 이거 없으면 베드 안사라짐
					});
				};
				
				const p = () => {
                    n.socket.sendMsg({
                        method: "set",
                        params: {
                            rmProbedMatrix: 1
                        }
                    })
                };
				const resetView = () => {
					if (!chartInstance) return;

					chartInstance.setOption({
						grid3D: {
							viewControl: {
								alpha: 20,      // 위/아래 각도 (기본값 느낌)
								beta: 40,       // 좌우 각도
								distance: 200,  // 줌 거리
								center: [0, 0, 0]
							}
						}
					}, false);
				};

				Object(a["onMounted"])(() => {
					const { proxy: e } = Object(a["getCurrentInstance"])();
					n.socket = e.$webSocket;
					n.echart = e.$echarts;

					// [중요] 렌더 함수에 .flat-auto가 반드시 있어야 합니다.
					const el = document.querySelector(".flat-auto");

					if (el && n.echart) {
						chartInstance = n.echart.init(el);
						
						chartInstance.on('mousedown', () => { isInteracting = true; });
						chartInstance.on('mouseup', () => { isInteracting = false; });
						chartInstance.on('globalout', () => { isInteracting = false; });
						
						// 최초 1번
						chartInstance.setOption({
							animation: false,

							tooltip: {
								textStyle: {
									align: "left",
									color: "#dbdbdc"
								},
								backgroundColor: "#515157",
								borderColor: "#515157",
								formatter: function (e) {
									if (!e.value || !Array.isArray(e.value)) return "";
									return `
									<div>
										<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${e.color};"></span>
										<div>x: ${e.value[0]}</div>
										<div>y: ${e.value[1]}</div>
										<div>z: ${e.value[2]}</div>
									</div>`;
								}
							},

							grid3D: {
								viewControl: {
									damping: 0.1,
									rotateSensitivity: 1,
									zoomSensitivity: 1
								}
							},

							xAxis3D: {
								type: "value",
								nameTextStyle: { color: "rgba(255,255,255,0.25)" },
								axisPointer: {
									lineStyle: { color: "#ffffff", opacity: 0.65 },
									label: { margin: 16, color: "rgba(255,255,255,0.25)", fontSize: 16 }
								},
								axisTick: { lineStyle: { color: "#ffffff", opacity: 0.1 } },
								axisLine: { lineStyle: { color: "#ffffff", opacity: 0.1, width: 2 } },
								axisLabel: { textStyle: { color: "rgba(255,255,255,0.25)", fontSize: 16 } },
								splitLine: { lineStyle: { color: "#ffffff", opacity: 0.1 } }
							},

							yAxis3D: {
								type: "value",
								nameTextStyle: { color: "rgba(255,255,255,0.25)" },
								axisPointer: {
									lineStyle: { color: "#ffffff", opacity: 0.65 },
									label: { margin: 16, color: "rgba(255,255,255,0.25)", fontSize: 16 }
								},
								axisTick: { lineStyle: { color: "#ffffff", opacity: 0.1 } },
								axisLine: { lineStyle: { color: "#ffffff", opacity: 0.1, width: 2 } },
								axisLabel: { textStyle: { color: "rgba(255,255,255,0.25)", fontSize: 16 } },
								splitLine: { lineStyle: { color: "#ffffff", opacity: 0.1 } }
							},

							zAxis3D: {
								type: "value",
								min: -1,
								max: 1,
								interval: 0.5,
								nameTextStyle: { color: "rgba(255,255,255,0.25)" },
								axisPointer: {
									lineStyle: { color: "#ffffff", opacity: 0.65 },
									label: { margin: 16, color: "rgba(255,255,255,0.25)", fontSize: 16 }
								},
								axisTick: { lineStyle: { color: "#ffffff", opacity: 0.1 } },
								axisLine: { lineStyle: { color: "#ffffff", opacity: 0.1, width: 2 } },
								axisLabel: { textStyle: { color: "rgba(255,255,255,0.25)", fontSize: 16 } },
								splitLine: { lineStyle: { color: "#ffffff", opacity: 0.1 } }
							},

							visualMap: {
								type: "continuous",
								dimension: 2,
								calculable: true,
								realtime: true,
								top: 39,
								right: 35,
								textStyle: {
									color: "rgba(255,255,255,0.25)",
									fontSize: 16
								},
								inRange: {
									color: [
										"#313695","#4575b4","#74add1","#abd9e9","#e0f3f8",
										"#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"
									]
								}
							},

							series: [{
								type: "surface",
								wireframe: {
									show: n.showBedMesh,
									lineStyle: { color: "#66AEFF" }
								},
								data: [],
								progressive: 0
							}]
						});
					}

					if (n.socket) {
						n.socket.sendMsg({ method: "get", params: { reqProbedMatrix: 1 } });
					}
					

					const stop = Object(a["watch"])(() => t.probedMatrix, e => {
						if (e && e.val) {
							d.value = e.val;
							// 상호작용 중이 아닐 때만 업데이트하거나, 
							// 데이터가 한 번만 오는 경우라면 즉시 실행
							l();
						}
					});
				});
                return (e, t) => {
                    const i = Object(a["resolveComponent"])("el-button"),
                    c = Object(a["resolveComponent"])("el-checkbox");
                    return Object(a["openBlock"])(),
                    Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["control-main", {
                                    controlAnimal: !Object(a["unref"])(n).foldFlag
                                }
                            ])
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                title: e.$t("wangchuang.name"),
                                class: "header",
                                icon: ""
                            }, 
							{
                                right: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("div", ce, [Object(a["unref"])(n).foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 0,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(o, ["stop"])
                                                    }, "", 8, se)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 1,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(r, ["stop"])
                                                    }, "", 8, le))])]),
                                _: 1
                            }, 8, ["title"]), Object(a["createElementVNode"])("div", de, [Object(a["createElementVNode"])("div", {
                                        class: "rightPrintshow",
                                        style: Object(a["normalizeStyle"])({
                                            display: Object(a["unref"])(n).foldFlag ? "block" : "none"
                                        })
                                    }, [
									Object(a["createVNode"])(i,{onClick:resetView},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Reset")]),_:1}),
									Object(a["withDirectives"])(Object(a["createElementVNode"])("div", pe, [Object(a["createElementVNode"])("div", ue, [Object(a["createElementVNode"])("div", he, [Object(a["createVNode"])(i, null, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [Object(a["createTextVNode"])("1")]),
                                                                            _: 1
                                                                        }), Object(a["createVNode"])(i, null, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [Object(a["createTextVNode"])("2")]),
                                                                            _: 1
                                                                        })]), Object(a["createElementVNode"])("div", null, [Object(a["createVNode"])(i, null, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [Object(a["createTextVNode"])("5")]),
                                                                            _: 1
                                                                        })]), Object(a["createElementVNode"])("div", me, [Object(a["createVNode"])(i, null, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [Object(a["createTextVNode"])("3")]),
                                                                            _: 1
                                                                        }), Object(a["createVNode"])(i, null, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [Object(a["createTextVNode"])("4")]),
                                                                            _: 1
                                                                        })])])], 512), [[a["vShow"], 1 === Object(a["unref"])(n).checked]]), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", be, [ge, Object(a["createElementVNode"])("div", fe, [Object(a["createVNode"])(c, {
                                                                    modelValue: Object(a["unref"])(n).showBedFace,
                                                                    "onUpdate:modelValue": t[0] || (t[0] = e => Object(a["unref"])(n).showBedFace = e),
                                                                    label: e.$t("wangchuang.showBed"),
                                                                    size: "large"
                                                                }, null, 8, ["modelValue", "label"]), Object(a["createVNode"])(i, {
                                                                    onClick: p
                                                                }, {
                                                                default:
                                                                    Object(a["withCtx"])(() => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("wangchuang.delete")), 1)]),
                                                                    _: 1
                                                                })])], 512), [[a["vShow"], null === Object(a["unref"])(n).checked || 2 === Object(a["unref"])(n).checked]])], 4)])], 2)
                }
            }
        };
        n("2577");
        const ve = S()(we, [["__scopeId", "data-v-d06bcaee"]]);
		
		
		// ── 2D Level Table Component ───────────────────────────────────
		const Level2DTable = {
			__name: "LevelTable2D",
			setup(e) {

				const t = i(); // store
				let r = Object(a["reactive"])({
					foldFlag: !0,
					socket: null,
					showData: true
				});

				let d = Object(a["ref"])([]);

				const open = () => { r.foldFlag = false };
				const close = () => { r.foldFlag = true };

				// 색상 (파스텔)
				const getColor = (z, min, max) => {
					if (max === min) return "#ddd";
					const ratio = (z - min) / (max - min);

					const hue = (1 - ratio) * 240; // 파랑 → 빨강
					return `hsl(${hue}, 70%, 80%)`; // 파스텔톤
				};
				
				let list =[];

				// grid 생성
				const getGrid = () => {
					if(d.value){
						list = d.value || [];
						//console.log('list.length   =  ',list.length);
						
						if (!list.length) return { grid: [], min: 0, max: 0 };

						let min = Infinity;
						let max = -Infinity;

						list.forEach(p => {
							const zVal = Number(p.z);
							if (zVal < min) min = zVal;
							if (zVal > max) max = zVal;
						});

						return { grid: list, min, max };
					}
					
				};

				Object(a["onMounted"])(() => {
					const { proxy: e } = Object(a["getCurrentInstance"])();

					r.socket = e.$webSocket;

					r.socket.sendMsg({
						method: "get",
						params: { reqProbedMatrix: 1 }
					});

					const stop = Object(a["watch"])(() => t.probedMatrix, val => {
						if (val && val.val) {
							d.value = val.val;
							//console.log('    d. value = ',d.value);
							r.showData = true;
							getGrid();
							stop(); //
						}
					});
				});

				return (e, t2) => {
					const Btn = Object(a["resolveComponent"])("el-button");

					return Object(a["openBlock"])(),
					Object(a["createElementBlock"])("div", {
						class: Object(a["normalizeClass"])(["control-main", {
							controlAnimal: !r.foldFlag
						}])
					}, [

						// 헤더
						Object(a["createVNode"])(Object(a["unref"])(P), {
							title: "2D Level Table",
							icon: ""
						}, {
							right: Object(a["withCtx"])(() => [
								Object(a["createElementVNode"])("div", {}, [
									r.foldFlag
										? Object(a["createElementVNode"])("i", {
											class: "iconfont",
											onClick: Object(a["withModifiers"])(open, ["stop"])
										}, "")
										: Object(a["createElementVNode"])("i", {
											class: "iconfont",
											onClick: Object(a["withModifiers"])(close, ["stop"])
										}, "")
								])
							]),
							_: 1
						}),

						// 컨텐츠
						Object(a["withDirectives"])(
							(() => {
								try {
									const { grid, min, max } = getGrid();
									
									if (grid.length === 0) {
										return;
									}

									const trElements = [];
									const rowCount = 5;
									const colCount = 5;

									// 1차원 배열을 5개씩 끊어서 행(tr) 생성
									
									for (let i = rowCount - 1; i >= 0; i--) {
										const tdElements = [];
										
										for (let j = 0; j < colCount; j++) {
											// 1차원 인덱스 계산 (0~24)
											const index = i * colCount + j;
											const cell = grid[index];
											const NumericZ = cell && cell.z !== undefined ? Number(cell.z) : 0;
											//console.log('NumericZ = ',NumericZ);

											tdElements.push(
												Object(a["createElementVNode"])(
													"td",
													{
														key: j,
														style: {
															padding: "8px",
															height: "100px",
															fontSize: "20px",
															textAlign: "center",
															verticalAlign: "middle",
															background: getColor(NumericZ, min, max),
															color: "#000",
															border: "1px solid #444"
														},
														innerHTML: NumericZ
													}
												)
											);
											//console.log(tdElements);
										}

										trElements.push(
											Object(a["createElementVNode"])(
												"tr",
												{ key: i },
												tdElements
											)
										);
									}

									return Object(a["createElementVNode"])(
										"table",
										{ style: { borderCollapse: "collapse", width: "100%" } },
										[
											Object(a["createElementVNode"])(
												"tbody",
												null,
												trElements
											)
										]
									);
									

								} catch (err) {
									console.error("🔥 렌더 에러:", err);
									return Object(a["createElementVNode"])(
										"div",
										{ style: { color: "red" } },
										"render error: " + err.message
									);
								}
							})(),
							[[a["vShow"], r.foldFlag]]
						)





					]);
				};
			}
		};
		
		const Level2DTableComp = Level2DTable;
		// ── 2D Level Table Component ───────────────────────────────────
		
        // ── FilamentSetting Component ───────────────────────────────────
        const FilamentSettingDef = {
            __name: "FilamentSetting",
            setup(e) {
				const {
                    locale: t
                } = Object(g["b"])(),
                n = i(), {
                    $t: c
                } = Object(a["getCurrentInstance"])().proxy;
				
                const store = i(),
                      { $t: tStr } = Object(a["getCurrentInstance"])().proxy;

                let fs = Object(a["reactive"])({
                    foldFlag: true,
                    bodyHeight: 'auto',
                    selectedSlot: null,  // { boxId, matId }
                    boxsInfo: null,
                    socket: null,
                    messageCenter: null,
					tableData: []
                });
				
                // helper: convert "#rrggbb" -> bool whether text should be dark
                const isDark = hex => {
					try {
						const c = hex.replace('#','');

						let r = parseInt(c.substr(0,2),16) / 255;
						let g = parseInt(c.substr(2,2),16) / 255;
						let b = parseInt(c.substr(4,2),16) / 255;

						// 감마 보정
						r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
						g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
						b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

						// 실제 밝기 (luminance)
						const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

						return luminance < 0.5; // 어두우면 true
					} catch {
						return false;
					}
				};

                const normalizeColor = hex => {
                    if (!hex) return '#888888';
                    const h = hex.replace('#','');
                    if (h.length === 7) return '#' + h;
                    if (h.length === 6) return '#' + h;
                    if (h.length === 8) return '#' + h.slice(1); // drop leading 0
                    return '#' + h.padEnd(6,'0');
                };

                const parseBoxsInfo = raw => {
					if (!raw) return null;

					if (typeof raw === 'string') {
						try {
							return JSON.parse(raw);
						} catch (err) {
							console.log('JSON parse failed:', raw);
							return null;
						}
					}

					return raw; // 이미 object면 그대로
				};

                const onMessage = e => {
					try {
						const raw = typeof e === 'string' ? e : e.data;
						if (raw === 'ok') return;

						const d = JSON.parse(raw);
						//console.log('return message = ', d);
						if (d.boxsInfo) {
							fs.boxsInfo = parseBoxsInfo(d.boxsInfo);
							//console.log('fs.boxsInfo = ',fs.boxsInfo);
						}
						else{
							console.log('this device not has boxsinfo');
							fs.boxsInfo = null;
						}
					} catch (err) {
						console.log('WS parse error', err);
					}
				};

                Object(a["onMounted"])(() => {
					const { proxy } = Object(a["getCurrentInstance"])();

					fs.socket = proxy.$webSocket;
					fs.messageCenter = proxy.$messageCenter;

					//  message 수신
					if (fs.messageCenter) {
						fs.messageCenter.on('message_change', onMessage);
					}

					//  polling 추가 (핵심)
					fs.timer = setInterval(() => {
						if (!fs.socket) return;

						//console.log('📤 boxsInfo 요청');

						fs.socket.sendMsg({
							method: "get",
							params: {
								boxsInfo: 1
							}
						});

					}, 3000);
				});
				
				let prev = !!fs.boxsInfo;

				Object(a["watch"])(() => fs.boxsInfo, (v) => {
					const now = !!v;

					if (prev === now) return;  // 상태 같으면 무시

					prev = now;

					console.log('상태 바뀜');  // 여기서 니 로직
					
					const prev_fs = fs.foldFlag;   // 이전 상태 저장

					//무조건 닫기
					fs.foldFlag = false;

					Promise.resolve().then(() => {
						// 이전 상태로 복구 (열려있었으면 다시 열림, 닫혀있었으면 그대로 유지)
						fs.foldFlag = prev_fs;
					});
					
				});
				
				
                // ── feed / retract ─────────────────────────────────────
                const sendFeed = dir => {
					if (!fs.socket) return;

					const cmd = dir === 1 ? 'LOAD_MATERIAL' : 'QUIT_MATERIAL';

					fs.socket.sendMsg({
						method: 'set',
						params: {
							gcodeCmd: cmd
						}
					});
				};

                const selectSlot = (boxId, matId) => {
                    if (fs.selectedSlot && fs.selectedSlot.boxId === boxId && fs.selectedSlot.matId === matId) {
                        fs.selectedSlot = null;
                    } else {
                        fs.selectedSlot = { boxId, matId };
                    }
                };

                const isSelected = (boxId, matId) =>
                    fs.selectedSlot && fs.selectedSlot.boxId === boxId && fs.selectedSlot.matId === matId;

				//console.log('fs.boxsInfo = ',fs.boxsInfo);
				//if (!fs.boxsInfo) return null;

                // ── render ────────────────────────────────────────────
                return (e2, t2) => {
					
                    const h = Object(a["createVNode"]),
                          cv = Object(a["createVNode"]),
                          ob = Object(a["openBlock"]),
                          ceb = Object(a["createElementBlock"]),
                          ccv = Object(a["createCommentVNode"]),
                          nc = Object(a["normalizeClass"]),
                          ns = Object(a["normalizeStyle"]),
                          td = Object(a["toDisplayString"]),
                          rb = Object(a["renderList"]),
                          fra = Object(a["Fragment"]);

                    const boxes = fs.boxsInfo?.materialBoxs || [];
					//console.log(boxes);
                    const hasCFS = boxes.some(b => b.type === 0);

                    // Build UI nodes imperatively to stay compatible with minified Vue runtime
                    const spoolIcon = (color, small) => {
						const sz = small ? 52 : 60;
						const cx = sz / 2;

						const r1 = sz / 2 - 1;   // 외곽
						const r2 = sz / 2 - 3;   // 컬러
						const r3 = sz / 2 - 22;  // 내경

						const c = normalizeColor(color);
						const dark = isDark(c);
						
						const lineColor = dark ? '#FFF' : '#000';

						return h('svg', { style: `width:${sz}px;height:${sz}px;` }, [
							// 외곽
							h('circle', {
								cx, cy: cx, r: r1,
								class: 'box-circle',
								'stroke-width': '10',
								fill: '#37373B'
							}),

							// 컬러 영역
							h('circle', {
								cx, cy: cx, r: r2,
								fill: c
							}),

							// 중앙 구멍 (작게!)
							h('circle', {
								cx, cy: cx, r: r3,
								fill: '#37373B'
							}),

							// 십자 라인
							h('line', { x1: cx, y1: 6, x2: cx, y2: cx - 15, stroke: lineColor }),
							h('line', { x1: cx, y1: sz - 6, x2: cx, y2: cx + 15, stroke: lineColor }),
							h('line', { x1: 6, y1: cx, x2: cx - 15, y2: cx, stroke: lineColor }),
							h('line', { x1: sz - 6, y1: cx, x2: cx + 15, y2: cx, stroke: lineColor }),
						]);
					};

                    const emptySpoolIcon = () => {
                        return h('svg', { style: 'width:60px;height:60px;' }, [
                            h('circle', { cx: 30, cy: 30, r: 29, class: 'box-circle', 'stroke-width': '2', 'data-v-flt00001': '' }),
                            h('circle', { cx: 30, cy: 30, r: 28, stroke: '#fff', 'stroke-width': '0', fill: '#000000', 'data-v-flt00001': '' }),
                            h('circle', { cx: 30, cy: 30, r: 7, fill: '#37373B', 'data-v-flt00001': '' }),
                            h('line', { x1: 30, y1: 5, x2: 30, y2: 12, stroke: '#FFF', 'stroke-width': '1', 'data-v-flt00001': '' }),
                            h('line', { x1: 30, y1: 55, x2: 30, y2: 48, stroke: '#FFF', 'stroke-width': '1', 'data-v-flt00001': '' }),
                            h('line', { x1: 5, y1: 30, x2: 12, y2: 30, stroke: '#FFF', 'stroke-width': '1', 'data-v-flt00001': '' }),
                            h('line', { x1: 55, y1: 30, x2: 48, y2: 30, stroke: '#FFF', 'stroke-width': '1', 'data-v-flt00001': '' }),
                        ]);
                    };
					
                    // Build box columns
                    const boxColumns = [];
					if (boxes.length === 0) {
						// 💡 기본 스풀 하나라도 만들어줘야 UI 유지됨
						boxColumns.push(
							h('div', { class: 'mainbox' }, [
							])
						);
					} else {
						boxes.forEach((box, bi) => {
							const isSpool = box.type === 1;  // external spool holder
							const isCFS   = box.type === 0;  // CFS multi-slot

							const matNodes = [];

							if (isSpool) {
								// Single spool slot
								const mat = box.materials && box.materials[0];
								const color = mat ? normalizeColor(mat.color) : null;
								const label = mat ? mat.type : '---';
								const sel = mat && isSelected(box.id, mat.id);
								
								matNodes.push(
									h('div', {
										class: 'box',
										'data-v-flt00001': '',
										onClick: () => mat && selectSlot(box.id, mat.id),
										style: sel ? 'outline:1px solid #1e9be2;border-radius:4px;cursor:pointer;' : 'cursor:pointer;'
									}, [
										// CFS랑 동일 구조
										h('div', { 'data-v-flt00001': '' }, [
											h('div', { class: 'title', 'data-v-flt00001': '' }, 'Spool Holder')
										]),

										h('div', { class: 'filament', 'data-v-flt00001': '' }, [
											color ? spoolIcon(color, false, true) : emptySpoolIcon()
										]),

										h('div', { class: 'current_flag', 'data-v-flt00001': '' }),

										h('div', { class: 'filament_type', 'data-v-flt00001': '' }, label),

										h('div', { class: 'fs-box-label', 'data-v-flt00001': '' },
											mat && mat.percent != null ? mat.percent + '%' : ''
										)
									])
								);

								boxColumns.push(
									h('div', { class: 'mainbox', style: 'padding-left:10px;padding-top:10px;padding-right:10px;padding-bottom:15px;', 'data-v-flt00001': '' }, [
										h('div', { class: 'box_container', 'data-v-flt00001': '' }, matNodes),
										h('div', { class: 'btnbox', 'data-v-flt00001': '' }),
										h('div', { class: 'btn', style: 'color:#17cc5f;', 'data-v-flt00001': '' }, null)
									])
								);
								
							} else if (isCFS) {
								// CFS multi-slot box
								const slotNodes = (box.materials || []).map((mat, mi) => {
									const color = normalizeColor(mat.color);
									const sel = isSelected(box.id, mat.id);
									const slotLabel = String.fromCharCode(65 + mi); // A,B,C,D
									return h('div', { class: 'box', 'data-v-flt00001': '', onClick: () => selectSlot(box.id, mat.id), style: sel ? 'outline:1px solid #1e9be2;border-radius:4px;cursor:pointer;' : 'cursor:pointer;' }, [
										h('div', { 'data-v-flt00001': '' }, [
											h('div', { class: 'title', 'data-v-flt00001': '' }, [
												h('div', { class: 'title' }, `${bi + 1}${slotLabel}`)
											])
										]),
										h('div', { class: 'filament', 'data-v-flt00001': '' }, [ spoolIcon(color, false, false) ]),
										h('div', { class: 'current_flag', 'data-v-flt00001': '' }),
										h('div', { class: 'filament_type', 'data-v-flt00001': '' }, mat.type || '---'),
										h('div', { class: 'fs-box-label', 'data-v-flt00001': '' }, mat.percent != null ? mat.percent + '%' : ''),
									]);
								});

								// humidity / temp badge
								const infoStr = (box.humidity != null ? `${box.humidity}RH%` : '') + (box.temp != null ? `  ${box.temp}°C` : '');

								boxColumns.push(
									h('div', { class: 'mainbox', style: 'padding-left:10px;padding-top:10px;padding-right:10px;padding-bottom:5px;', 'data-v-flt00001': '' }, [
										h('div', { class: 'box_container', 'data-v-flt00001': '' }, slotNodes),
										h('div', { class: 'btnbox', 'data-v-flt00001': '' }, [
											infoStr ? h('div', { class: 'btn', style: 'color:#17cc5f;', 'data-v-flt00001': '' }, infoStr) : null
										])
									])
								);
							}
						});
					}
					//console.log('materialBoxs ===', fs.boxsInfo.materialBoxs);
					//console.log(boxColumns[0].appContext);
					
                    const selectedMat = (() => {
                        if (!fs.selectedSlot) return null;
                        const box = boxes.find(b => b.id === fs.selectedSlot.boxId);
                        if (!box) return null;
                        return (box.materials || []).find(m => m.id === fs.selectedSlot.matId) || null;
                    })();
					
                    const statusText = selectedMat
                        ? `Selected: ${selectedMat.type} ${normalizeColor(selectedMat.color)}`
                        : 'Select a slot and click the "Feed"/"Retract" button';
						
					const toggle = () => {
						fs.foldFlag = !fs.foldFlag;
					};
					
					
                    return (ob(), ceb('div', {key: fs.foldFlag,class: Object(a["normalizeClass"])(["comp-FilamentSetting",{ controlAnimal: !fs.foldFlag }]),'data-v-flt00001': ''},
					[
                        // Header (공통 컴포넌트 사용)
						
						Object(a["createVNode"])(
							Object(a["unref"])(P),
							{
								title: c("filamentsetting.title"),
								class: "header",
								icon: ""
							},
							{
								right: Object(a["withCtx"])(() => [
									h('div', {}, [
										fs.foldFlag
											? (ob(), ceb('i', {
												key: 0,
												class: 'iconfont',
												onClick: Object(a["withModifiers"])(toggle, ["stop"])
											}, ''))
											: (ob(), ceb('i', {
												key: 1,
												class: 'iconfont',
												onClick: Object(a["withModifiers"])(toggle, ["stop"])
											}, ''))
									])
								]),
								_: 1
							}
						),

						// Content
						Object(a["withDirectives"])(
							h('div', {
								class: 'fs-body',
								'data-v-flt00001': ''
							}, [
								h('div', { class: 'filament-container-wrapper', 'data-v-flt00001': '' }, [

									h('div', { class: 'filament-wrapper', 'data-v-flt00001': '' }, boxColumns || []),

									h('div', { class: 'filament-btn', 'data-v-flt00001': '' }, [

										h('button', {
											type: 'button',
											class: nc(['el-button el-button--default self_btn']),
											onClick: () => sendFeed(1)
										}, [
											h('span', {}, c("filamentsetting.feed"))
										]),

										h('button', {
											type: 'button',
											class: nc(['el-button el-button--default self_btn']),
											onClick: () => sendFeed(-1)
										}, [
											h('span', {}, c("filamentsetting.retract"))
										])

									])
								])
							]),
							[
								[Object(a["vShow"]), fs.foldFlag]
							]
						)
                    ]));
					
				
                };
			
            }
			
        };
		
		const FilamentSettingComp = FilamentSettingDef;
        // ── end FilamentSetting ──────────────────────────────────────────

        var xe = ve;
        const je = e => (Object(a["pushScopeId"])("data-v-e0becdc4"), e = e(), Object(a["popScopeId"])(), e),
        Oe = {
            class: "right-func"
        },
        ye = {
            class: "continue-func"
        },
        ke = {
            class: "iconfont"
        },
        Me = {
            key: 0,
            class: "start-func"
        },
        Ce = ["onClick"],
        _e = je(() => Object(a["createElementVNode"])("i", {
                    class: "iconfont"
                }, "", -1)),
        Se = je(() => Object(a["createElementVNode"])("i", {
                    class: "iconfont"
                }, "", -1)),
        Fe = je(() => Object(a["createElementVNode"])("i", {
                    class: "iconfont"
                }, "", -1)),
        ze = {
            class: "fold"
        },
        Ee = ["onClick"],
        Te = ["onClick"],
        Ie = {
            class: "containMain"
        },
        Ne = {
            class: "middleContent"
        },
        Be = {
            class: "leftPrintshow"
        },
        Pe = ["src", "alt"],
        Ve = je(() => Object(a["createElementVNode"])("canvas", {
                    id: "c"
                }, null, -1)),
        Ae = {
            class: "rightPrintshow"
        },
        Re = {
            class: "innerFlie"
        },
        De = je(() => Object(a["createElementVNode"])("span", {
                    class: "span1"
                }, "File:", -1)),
        qe = {
            class: "span2"
        },
        Ue = {
            class: "innerFlie"
        },
        Ze = je(() => Object(a["createElementVNode"])("span", {
                    class: "span1"
                }, "Layer: ", -1)),
        He = {
            class: "span2 spe-span"
        },
        We = {
            key: 0,
            class: "innerFlie"
        },
        Le = je(() => Object(a["createElementVNode"])("span", {
                    class: "span1"
                }, null, -1)),
        Xe = {
            class: "progress"
        },
        Ye = je(() => Object(a["createElementVNode"])("div", {
                    class: "line_right"
                }, null, -1)),
        $e = {
            class: "footerContiner"
        },
        Ge = {
            class: "innerConul"
        },
        Je = {
            class: "rightInnerli"
        };
        var Qe = {
            __name: "PrintControl",
            setup(e) {
                const {
                    locale: t
                } = Object(g["b"])(),
                o = i(),
                r = e => {
                    let t = "";
                    return e > 3600 ? t = parseInt(e / 3600) + "h " + parseInt(e % 3600 / 60) + "m " + parseInt(e % 3600 % 60) + "s" : e < 3600 && 60 < e ? t = `${parseInt(e / 60)}m ${e % 60}s` : e < 60 && (t = e + "s"),
                    t
                }, {
                    $t: c
                } = Object(a["getCurrentInstance"])().proxy;
				
				const params = new URLSearchParams(window.location.search);
				const ip = params.get("ip");
				console.log(' get ip = ',ip);

                let s = Object(a["reactive"])({
                    controlFlag: !0,
                    standInfo: c("printStatus.pause"),
                    startInfo: c("printStatus.goOn"),
                    stopInfo: c("printStatus.off"),
                    gcodePriview: "",
                    layer: 0,
                    TotalLayer: 0,
                    printStatus: -1,
                    statusArr: ["Printing stopped", "Printing", "printing complete", "Printing failed", "print abort", "Printing Paused"],
                    statusArr1: ["출력 중지됨","출력 중", "출력 완료","출력 실패","출력 중단", "일시정지됨"],
                    statusTitle: "",
                    fileName: "",
                    socket: null,
                    foldFlag: !0,
                    ip: ip,
                    moreInfo: [{
                            showInfo: c("printStatus.printTime"),
                            resultInfo: "",
                            iconShowInfo: "icon-a-xingzhuang14",
                            iconColor: "#02a0f9",
                            type: "printJobTime",
                            fontSize: "13px",
                            marginLeft: "9.3px"
                        }, {
                            showInfo: c("printStatus.lastTime"),
                            resultInfo: "",
                            iconShowInfo: "icon-a-xingzhuang1628",
                            iconColor: "#46BC5B",
                            type: "printLeftTime",
                            fontSize: "14px",
                            marginLeft: "10px"
                        }
                    ]
                });
				
				console.log('s.printStatus = ',s.printStatus);
                Object(a["watch"])(() => t.value, () => {
                    console.log("status", t.value),
                    s.moreInfo[0].showInfo = c("printStatus.printTime"),
                    s.moreInfo[1].showInfo = c("printStatus.lastTime"),
                    "en" == t.value && (console.log("check EN", s.statusArr[s.printStatus]), s.statusTitle = s.statusArr[s.printStatus]),
                    "zh" == t.value && (console.log("check ZH", s.statusArr1[s.printStatus]), s.statusTitle = s.statusArr1[s.printStatus])
                }),
                Object(a["watch"])([() => o.state, () => o.printProgress, () => o.printLeftTime, () => o.printJobTime, () => o.realTimeSpeed, () => o.realTimeFlow, () => o.usedMaterialLength, () => o.printFileName, () => o.layer, () => o.TotalLayer], () => {
                    const {
                        state: e,
                        printProgress: n
                    } = o;
                    s.printStatus = e;

					if (t.value === "en") {
						console.log("check EN", s.statusArr[s.printStatus]);
						s.statusTitle = s.statusArr[s.printStatus];
					} else if (t.value === "zh") {
						console.log("check ZH", s.statusArr1[s.printStatus]);
						s.statusTitle = s.statusArr1[s.printStatus];
					}
                    s.printProgress = n,
                    s.layer = o.layer,
                    s.TotalLayer = o.TotalLayer,
                    s.fileName = o.printFileName ? o.printFileName.substring(o.printFileName.lastIndexOf("/") + 1) : "";
                    for (const t of s.moreInfo)
                        switch (t.type) {
                        case "printJobTime":
                            t.resultInfo = r(o.printJobTime);
                            break;
                        case "printLeftTime":
                            t.resultInfo = r(o.printLeftTime);
                            break;
                        case "realTimeSpeed":
                            t.resultInfo = o.realTimeSpeed + "mm/s";
                            break;
                        case "realTimeFlow":
                            t.resultInfo = o.realTimeFlow + "mm³/s";
                            break;
                        case "usedMaterialLength":
                            t.resultInfo = o.usedMaterialLength + "mm";
                            break
                        }
                }, {
                    immediate: !0
                });
                const l = async function (e) {
                    return fetch(e, {
                        method: "HEAD"
                    }).then(e => {
                        if (e.ok)
                            return console.log("resources are available"), s.effective = !0, !0; {
                            console.log("The resources are invalid."),
                            s.effective = !1;
                            const e = n("882d");
                            return s.gcodePriview = e,
                            !1
                        }
                    }).catch(e => (console.error("Error:", e), !1))
                };
				
				console.log(' get s.ip = ',s.ip);
				const thumbnamil_ip = s.ip;
				const ts = Date.now();
				
                Object(a["watch"])(() => thumbnamil_ip, (ip) => {
					if (!ip) return;

					s.gcodePriview = `https://${ip}:80/downloads/original/current_print_image.png?date=${Date.now()}`;
					l(s.gcodePriview);
				}, { immediate: true });
                const d = Object(a["ref"])(!1),
                p = Object(a["ref"])(""),
                u = Object(a["ref"])("");
                Object(a["watch"])([() => o.materialStatus, () => o.repoPlrStatus, () => t.value], () => {
                    d.value = !!o.materialStatus || !!o.repoPlrStatus,
                    o.materialStatus && (p.value = "materialStatus", u.value = c("printStatus.notTestMaterial")),
                    o.repoPlrStatus && (p.value = "repoPlrStatus", u.value = c("printStatus.stopUnexpect"))
                });
                const h = () => {
                    "materialStatus" === p.value ? s.socket.sendMsg({
                        method: "set",
                        params: {
                            pause: 0
                        }
                    }) : s.socket.sendMsg({
                        method: "set",
                        params: {
                            repoPlrStatus: 1
                        }
                    })
                },
                m = () => {
                    "materialStatus" === p.value ? s.socket.sendMsg({
                        method: "set",
                        params: {
                            stop: 0
                        }
                    }) : s.socket.sendMsg({
                        method: "set",
                        params: {
                            repoPlrStatus: 0
                        }
                    })
                },
                b = () => {
                    s.socket.sendMsg({
                        method: "set",
                        params: {
                            pause: 1 === +s.printStatus ? 1 : 0
                        }
                    })
                },
                f = () => {
                    s.socket.sendMsg({
                        method: "set",
                        params: {
                            stop: 1
                        }
                    })
                },
                w = () => {
                    s.foldFlag = !1
                },
                v = () => {
                    s.foldFlag = !0
                };
                return Object(a["onMounted"])(() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
                    s.socket = e.$webSocket,
                    s.ip = e.$ip;
                    var t = document.getElementById("c"),
                    n = t.getContext("2d"),
                    o = 1,
                    r = 0,
                    i = t.width = 250,
                    c = t.height = 250,
                    l = 2,
                    d = 0,
                    p = i,
                    u = .015,
                    h = 6,
                    m = .09,
                    b = 0;
                    n.lineWidth = l;
                    var g = function (e) {
                        n.save();
                        var t = [];
                        n.beginPath();
                        for (var a = d; a < d + p; a += 20 / p) {
                            var o = -Math.sin((d + a) * u + e),
                            i = c * (1 - r / 100);
                            t.push([a, i + o * h]),
                            n.lineTo(a, i + o * h)
                        }
                        n.lineTo(p, c),
                        n.lineTo(d, c),
                        n.lineTo(t[0][0], t[0][1]),
                        n.fillStyle = "#1E9BE2",
                        n.fill(),
                        n.restore()
                    },
                    f = function () {
                        if (n.clearRect(0, 0, i, c), o = s.printProgress, 0 === +o && (r = 0), r <= o) {
                            var e = 1;
                            r += e
                        }
                        r > o && (r -= e),
                        g(b),
                        b += m,
                        requestAnimationFrame(f)
                    };
                    f()
                }),
                (e, t) => {
                    const n = Object(a["resolveComponent"])("el-tooltip"),
                    o = Object(a["resolveComponent"])("el-button"),
                    r = Object(a["resolveComponent"])("el-progress");
                    return Object(a["openBlock"])(),
                    Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["control-main", {
                                    controlAnimal: !Object(a["unref"])(s).foldFlag
                                }
                            ])
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                title: Object(a["unref"])(s).statusTitle,
                                icon: ""
                            }, {
                                right: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("div", Oe, [Object(a["withDirectives"])(Object(a["createElementVNode"])("div", ye, [Object(a["createVNode"])(n, {
                                                                class: "box-item",
                                                                effect: "dark",
                                                                content: u.value,
                                                                placement: "top"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(() => [Object(a["withDirectives"])(Object(a["createElementVNode"])("i", ke, "", 512), [[a["vShow"], !!u.value]])]),
                                                                _: 1
                                                            }, 8, ["content"]), Object(a["withDirectives"])(Object(a["createVNode"])(o, {
                                                                    size: "small",
                                                                    onClick: h
                                                                }, {
                                                                default:
                                                                    Object(a["withCtx"])(() => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(c)("printStatus.goOn")), 1)]),
                                                                    _: 1
                                                                }, 512), [[a["vShow"], "repoPlrStatus" === p.value]]), Object(a["withDirectives"])(Object(a["createVNode"])(o, {
                                                                    size: "small",
                                                                    onClick: m
                                                                }, {
                                                                default:
                                                                    Object(a["withCtx"])(() => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(c)("printStatus.cancel")), 1)]),
                                                                    _: 1
                                                                }, 512), [[a["vShow"], "repoPlrStatus" === p.value]])], 512), [[a["vShow"], d.value]]), 1 === Object(a["unref"])(s).printStatus || 5 === Object(a["unref"])(s).printStatus ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Me, [Object(a["createElementVNode"])("div", {
                                                                class: "spe-button go-btn",
                                                                onClick: Object(a["withModifiers"])(b, ["stop"])
                                                            }, [1 === Object(a["unref"])(s).printStatus ? (Object(a["openBlock"])(), Object(a["createBlock"])(o, {
                                                                            key: 0,
                                                                            size: "small"
                                                                        }, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [_e, Object(a["createTextVNode"])(" " + Object(a["toDisplayString"])(Object(a["unref"])(c)("printStatus.pause")), 1)]),
                                                                            _: 1
                                                                        })) : Object(a["createCommentVNode"])("", !0), 5 === Object(a["unref"])(s).printStatus ? (Object(a["openBlock"])(), Object(a["createBlock"])(o, {
                                                                            key: 1,
                                                                            size: "small"
                                                                        }, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [Se, Object(a["createTextVNode"])(" " + Object(a["toDisplayString"])(Object(a["unref"])(c)("printStatus.goOn")), 1)]),
                                                                            _: 1
                                                                        })) : Object(a["createCommentVNode"])("", !0)], 8, Ce), Object(a["createVNode"])(o, {
                                                                size: "small",
                                                                onClick: Object(a["withModifiers"])(f, ["stop"])
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(() => [Fe, Object(a["createTextVNode"])(" " + Object(a["toDisplayString"])(Object(a["unref"])(c)("printStatus.off")), 1)]),
                                                                _: 1
                                                            }, 8, ["onClick"])])) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", ze, [Object(a["unref"])(s).foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                                key: 0,
                                                                class: "iconfont",
                                                                onClick: Object(a["withModifiers"])(w, ["stop"])
                                                            }, "", 8, Ee)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                                key: 1,
                                                                class: "iconfont",
                                                                onClick: Object(a["withModifiers"])(v, ["stop"])
                                                            }, "", 8, Te))])])]),
                                _: 1
                            }, 8, ["title"]), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", Ie, [Object(a["createElementVNode"])("div", Ne, [Object(a["createElementVNode"])("div", Be, [Object(a["createElementVNode"])("img", {
                                                            style: Object(a["normalizeStyle"])(Object(a["unref"])(s).effective ? "width: 134px; height: 80%" : "width: fit-content"),
                                                            src: Object(a["unref"])(s).gcodePriview,
                                                            alt: Object(a["unref"])(c)("printStatus.gcodePre"),
                                                            srcset: ""
                                                        }, null, 12, Pe), Ve]), Object(a["createElementVNode"])("div", Ae, [Object(a["createElementVNode"])("div", Re, [Object(a["createElementVNode"])("span", { class: "span1" }, Object(a["toDisplayString"])(Object(a["unref"])(c)("FileManage.file")), 1), Object(a["createElementVNode"])("span", qe, Object(a["toDisplayString"])(Object(a["unref"])(s).fileName), 1)]), Object(a["createElementVNode"])("div", Ue, [Object(a["createElementVNode"])("span", { class: "span1" }, Object(a["toDisplayString"])(Object(a["unref"])(c)("FileManage.layer")), 1), Object(a["createElementVNode"])("span", He, Object(a["toDisplayString"])(Object(a["unref"])(s).layer) + " / " + Object(a["toDisplayString"])(Object(a["unref"])(s).TotalLayer), 1)]), 1 === Object(a["unref"])(s).printStatus || 5 === Object(a["unref"])(s).printStatus ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", We, [Le, Object(a["createElementVNode"])("div", Xe, [Object(a["createVNode"])(r, {
                                                                                percentage: Object(a["unref"])(s).printProgress
                                                                            }, null, 8, ["percentage"])])])) : Object(a["createCommentVNode"])("", !0)])]), Ye, Object(a["createElementVNode"])("div", $e, [Object(a["createElementVNode"])("ul", Ge, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(Object(a["unref"])(s).moreInfo, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("li", {
                                                                            key: t
                                                                        }, [Object(a["createElementVNode"])("div", Je, [Object(a["createElementVNode"])("span", {
                                                                                            style: Object(a["normalizeStyle"])({
                                                                                                marginLeft: e.marginLeft
                                                                                            })
                                                                                        }, Object(a["toDisplayString"])(e.showInfo), 5), Object(a["createElementVNode"])("span", null, Object(a["toDisplayString"])(e.resultInfo), 1)])]))), 128))])])], 512), [[a["vShow"], Object(a["unref"])(s).foldFlag]])], 2)
                }
            }
        };
        n("5462");
        const Ke = S()(Qe, [["__scopeId", "data-v-e0becdc4"]]);
        var et = Ke;
        const tt = e => {
            let t = "";
            t = e < 102.4 ? e.toFixed(2) + "B" : e < 104857.6 ? (e / 1024).toFixed(2) + "KB" : e < 107374182.4 ? (e / 1048576).toFixed(2) + "MB" : (e / 1073741824).toFixed(2) + "GB";
            let n = t + "",
            a = n.indexOf("."),
            o = n.substr(a + 1, 2);
            return "00" == o ? n.substring(0, a) + n.substr(a + 3, 2) : n
        },
        nt = e => {
            let t = new Date,
            n = ":",
            a = 60 * e * 1e3;
            t = new Date(Date.parse(t) - +a);
            let o = t.getMonth() + 1,
            r = t.getDate(),
            i = t.getHours(),
            c = t.getMinutes(),
            s = t.getSeconds();
            o >= 1 && o <= 9 && (o = "0" + o),
            r >= 0 && r <= 9 && (r = "0" + r),
            i >= 0 && i <= 9 && (i = "0" + i),
            c >= 0 && c <= 9 && (c = "0" + c),
            s >= 0 && s <= 9 && (s = "0" + s);
            let l = i + n + c + n + s;
            return l
        },
        at = function (e, t) {
            const n = new Date(1e3 * e),
            a = e => (e < 10 ? "0" : "") + e;
            return t.replace(/yyyy|MM|dd|HH|mm|ss/g, (function (e) {
                    switch (e) {
                    case "yyyy":
                        return a(n.getFullYear());
                    case "MM":
                        return a(n.getMonth() + 1);
                    case "mm":
                        return a(n.getMinutes());
                    case "dd":
                        return a(n.getDate());
                    case "HH":
                        return a(n.getHours());
                    case "ss":
                        return a(n.getSeconds())
                    }
                }))
        };
        function ot(e) {
            let t = parseInt(e),
            n = 0,
            a = 0;
            t > 60 && (n = parseInt(t / 60), t = parseInt(t % 60), n > 60 && (a = parseInt(n / 60), n = parseInt(n % 60)));
            let o = parseInt(t) + "S";
            return n > 0 && (o = parseInt(n) + "M" + o),
            a > 0 && (o = parseInt(a) + "H" + o),
            console.log("result：", o),
            o
        }
        function rt(e) {
            var t = new Date(1e3 * e),
            n = t.getFullYear() + "-",
            a = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
            o = t.getDate() + " ",
            r = t.getHours() + ":",
            i = t.getMinutes() + ":",
            c = t.getSeconds();
            return n + a + o + r + i + c
        }
        const it = (e, t = 500) => {
            var n;
            return function () {
                n && (clearTimeout(n), n = null),
                n = setTimeout(() => {
                    e.call(this, ...arguments)
                }, t)
            }
        },
        ct = e => (Object(a["pushScopeId"])("data-v-d9964eec"), e = e(), Object(a["popScopeId"])(), e),
        st = {
            class: "fold"
        },
        lt = ["onClick"],
        dt = ["onClick"],
        pt = {
            class: "content"
        },
        ut = {
            style: {
                "margin-left": "10px"
            }
        },
        ht = ct(() => Object(a["createElementVNode"])("span", null, "°C", -1)),
        mt = {
            class: "chart",
            ref: "chartRef"
        };
        var bt = {
            __name: "TemperatureControl",
            setup(e) {
                const {
                    locale: t
                } = Object(g["b"])(), {
                    $t: n
                } = Object(a["getCurrentInstance"])().proxy,
                o = Object(a["reactive"])({
                    foldFlag: !0,
                    tableData: [{
                            project: n("temperatureControl.penzui"),
                            temperature: "/",
                            target: "",
                            idx: 3,
                            iconColor: "#b57326",
                            focusFlag: !1,
                            type: "extruder"
                        }, {
                            project: n("temperatureControl.hotBed"),
                            temperature: "/",
                            target: "",
                            idx: 0,
                            iconColor: "#2d76a0",
                            focusFlag: !1,
                            type: "bed0"
                        }
                    ],
                    socket: null,
                    echart: null,
                    chart: null,
                    product: ["product"],
                    source: [],
                    messageCenter: null,
                    bedTem: "/",
                    extruder: "/"
                }),
                r = i();
                Object(a["watch"])([() => r.targetBedTemp0, () => r.targetNozzleTemp], () => {
                    for (const e of o.tableData)
                        "extruder" === e.type && (e.target = r.targetNozzleTemp), "bed0" === e.type && (e.target = r.targetBedTemp0)
                }, {
                    immediate: !0
                }),
                Object(a["watch"])(() => t.value, () => {
                    console.log("status", t.value),
                    o.tableData[0].project = n("temperatureControl.penzui"),
                    o.tableData[1].project = n("temperatureControl.hotBed")
                }),
                Object(a["watch"])(() => r.nozzleTemp, e => {
                    o.tableData[0].temperature = (+e).toFixed(2) || (+o.tableData[0].temperature).toFixed(2)
                }, {
                    immediate: !0
                }),
                Object(a["watch"])(() => r.bedTemp0, e => {
                    o.tableData[1].temperature = (+e).toFixed(2) || (+o.tableData[1].temperature).toFixed(2)
                }, {
                    immediate: !0
                }),
                Object(a["watch"])(() => r.maxNozzleTemp, e => {
                    console.log("Max nozzle temp: ", e)
                }, {
                    immediate: !0
                }),
                Object(a["watch"])(() => r.maxBedTemp, e => {
                    console.log("Max bed temp: ", e)
                }, {
                    immediate: !0
                });
                let c = Object(a["ref"])(!!r.fan);
                Object(a["watch"])(r.fan, e => c.value = !!e);
                const l = () => {
                    o.foldFlag = !1
                },
                d = () => {
                    o.foldFlag = !0
                },
                p = (e, t) => {
                    const a = [0, 1, 2];
                    +t <= 0 || +t >= 300 ? Object(s["a"])({
                        type: "warning",
                        message: n("temperatureControl.temFanwei")
                    }) : a.includes(e.idx) ? o.socket.sendMsg({
                        method: "set",
                        params: {
                            bedTempControl: {
                                num: e.idx,
                                val: +t
                            }
                        }
                    }) : o.socket.sendMsg({
                        method: "set",
                        params: {
                            nozzleTempControl: +t
                        }
                    })
                };
                function u(e) {
                    e.focusFlag = !0
                }
                function h(e) {
                    e.focusFlag = !1
                }
                const m = () => {
                    const e = ["product"],
                    t = o.tableData.map(t => (e.push(t.project), {
                                type: "line",
                                areaStyle: {
                                    opacity: .1
                                },
                                smooth: !0,
                                symbol: "none"
                            }));
                    o.source = [e];
                    for (let a = 60; a--; a > 0)
                        o.source.push([nt(a), 0, 0]);
                    let n = {
                        color: ["#ED970F", "#289ADA"],
                        title: {
                            text: "temperature℃",
                            left: 40,
                            top: 0,
                            textStyle: {
                                color: "#CBCBCC",
                                fontSize: 14
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            textStyle: {
                                align: "left",
                                color: "#dbdbdc"
                            },
                            backgroundColor: "#515157",
                            borderColor: "#515157"
                        },
                        grid: {
                            left: "3%",
                            right: "4%",
                            bottom: 10,
                            top: 30,
                            containLabel: !0
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            axisTick: {
                                show: !1
                            },
                            splitLine: {
                                show: !0,
                                lineStyle: {
                                    color: ["#46464A"]
                                }
                            }
                        },
                        yAxis: {
                            type: "value",
                            splitLine: {
                                show: !0,
                                lineStyle: {
                                    color: ["#46464A"]
                                }
                            }
                        },
                        dataset: {
                            source: o.source
                        },
                        series: t
                    };
                    return n
                };
                return Object(a["onMounted"])(() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
                    o.socket = e.$webSocket,
                    o.messageCenter = e.$messageCenter;
                    const t = document.querySelector(".chart");
                    let n = m();
                    const r = e.$echarts.init(t);
                    n && r.setOption(n),
                    o.messageCenter.on("message_change", e => {
                        if ("ok" === e)
                            return;
                        const t = JSON.parse(e), {
                            nozzleTemp: n,
                            bedTemp0: a
                        } = t;
                        if (n || a) {
                            const e = o.source[o.source.length - 1];
                            let t = nt(0);
                            const i = [t, +n || e[1], +a || e[2]];
                            if (e[0] === t) {
                                if (61 !== o.source.length)
                                    return;
                                o.source.splice(o.source.length - 1, 1)
                            }
                            o.source.push(i),
                            o.source.length > 120 && o.source.splice(1, 1),
                            r.setOption({
                                dataset: {
                                    source: o.source
                                }
                            })
                        }
                    }),
                    window.addEventListener("resize", () => r.resize())
                }),
                (e, t) => {
                    const r = Object(a["resolveComponent"])("el-table-column"),
                    i = Object(a["resolveComponent"])("el-input"),
                    c = Object(a["resolveComponent"])("el-table");
                    return Object(a["openBlock"])(),
                    Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["comp-TemperatureControl", {
                                    controlAnimal: !o.foldFlag
                                }
                            ])
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                title: Object(a["unref"])(n)("temperatureControl.temp"),
                                class: "header",
                                icon: ""
                            }, {
                                right: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("div", st, [o.foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 0,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(l, ["stop"])
                                                    }, "", 8, lt)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 1,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(d, ["stop"])
                                                    }, "", 8, dt))])]),
                                _: 1
                            }, 8, ["title"]), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", pt, [Object(a["createVNode"])(c, {
                                            class: "table",
                                            data: o.tableData,
                                            style: {
                                                width: "100%"
                                            }
                                        }, {
                                        default:
                                            Object(a["withCtx"])(() => [Object(a["createVNode"])(r, {
                                                        prop: "project",
                                                        label: Object(a["unref"])(n)("temperatureControl.progrems"),
                                                        width: "100",
                                                        align: "center"
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createElementVNode"])("i", {
                                                                    class: "iconfont",
                                                                    style: Object(a["normalizeStyle"])({
                                                                        color: e.row.iconColor
                                                                    })
                                                                }, "", 4), Object(a["createElementVNode"])("span", ut, Object(a["toDisplayString"])(e.row.project), 1)]),
                                                        _: 1
                                                    }, 8, ["label"]), Object(a["createVNode"])(r, {
                                                        prop: "temperature",
                                                        label: Object(a["unref"])(n)("temperatureControl.nows"),
                                                        align: "center",
                                                        width: "100"
                                                    }, null, 8, ["label"]), Object(a["createVNode"])(r, {
                                                        prop: "target",
                                                        label: Object(a["unref"])(n)("temperatureControl.goals"),
                                                        align: "center"
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createElementVNode"])("div", {
                                                                    class: Object(a["normalizeClass"])(["speDiv", {
                                                                                "focus-style": 1 == e.row.focusFlag
                                                                            }
                                                                        ])
                                                                }, [Object(a["createVNode"])(i, {
                                                                            modelValue: e.row.target,
                                                                            "onUpdate:modelValue": t => e.row.target = t,
                                                                            onChange: t => p(e.row, e.row.target),
                                                                            onFocus: t => u(e.row),
                                                                            onBlur: t => h(e.row)
                                                                        }, {
                                                                            suffix: Object(a["withCtx"])(() => [ht]),
                                                                            _: 2
                                                                        }, 1032, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus", "onBlur"])], 2)]),
                                                        _: 1
                                                    }, 8, ["label"])]),
                                            _: 1
                                        }, 8, ["data"]), Object(a["createElementVNode"])("div", mt, null, 512)], 512), [[a["vShow"], o.foldFlag]])], 2)
                }
            }
        };
        n("b8de");
        const gt = S()(bt, [["__scopeId", "data-v-d9964eec"]]);
        var ft = gt,
        wt = n("cee4");
        const vt = e => (Object(a["pushScopeId"])("data-v-8e30bd52"), e = e(), Object(a["popScopeId"])(), e),
        xt = {
            class: "inner-con"
        },
        jt = ["onClick"],
        Ot = {
            class: "btn"
        },
        yt = {
            class: "containsWarp"
        },
        kt = vt(() => Object(a["createElementVNode"])("i", {
                    class: "iconfont",
                    style: {
                        "font-size": "12px"
                    }
                }, "", -1)),
        Mt = {
            class: "fold"
        },
        Ct = ["onClick"],
        _t = ["onClick"],
        St = {
            class: "content"
        },
        Ft = ["onClick"],
        zt = ["src"],
        Et = ["title"],
        Tt = ["onClick"],
        It = {
            key: 0,
            class: "tableList"
        };
        var Nt = {
            __name: "FileManage",
            setup(e) {
                const {
                    locale: t
                } = Object(g["b"])(),
                n = i(), {
                    $t: o
                } = Object(a["getCurrentInstance"])().proxy,
                r = Object(a["reactive"])({
                    tableDataFlag: !1,
                    printStatus: 0,
                    moduleList: [{
                            moduleName: o("FileManage.files"),
                            idx: 0,
                            moduleInfo: "fileMent",
                            iconInfo: "icon-a-xingzhuang14"
                        }, {
                            moduleName: o("FileManage.historyRecord"),
                            idx: 1,
                            moduleInfo: "history",
                            iconInfo: "icon-a-xingzhuang14"
                        }
                    ],
                    printProgress: 0,
                    hisTableData: [],
                    foldFlag: !0,
                    tableData: [],
                    fileList: [],
                    socket: null,
                    fileUrl: "",
                    ip: "",
                    messageCenter: null,
                    Gtimer: !1,
                    selectRow: [],
                    fileMenus: [{
                            name: o("FileManage.startPrint"),
                            operType: 1
                        }, {
                            name: o("FileManage.deleteFile"),
                            operType: 2
                        }, {
                            name: o("FileManage.newName"),
                            operType: 3
                        }
                    ],
                    hisMenus: [{
                            name: o("FileManage.deleteFile"),
                            operType: 2
                        }
                    ]
                }),
                c = Object(a["ref"])([]),
                l = e => {
                    c.value = e,
                    p.value = !1
                };
                Object(a["watch"])(c, e => {
                    if (r.selectRow = [], r.hisTableData.length)
                        for (const t of e)
                            r.selectRow.push(r.hisTableData.indexOf(t))
                });
                const d = ({
                    rowIndex: e
                }) => {
                    if (r.selectRow.includes(e))
                        return "sel "
                },
                p = Object(a["ref"])(!1),
                u = Object(a["ref"])(0),
                h = Object(a["ref"])(0),
                m = Object(a["ref"])(""),
                f = (e, t, n) => {
                    n.stopPropagation();
                    const a = document.querySelector(".comp-FileManage"), {
                        top: o,
                        left: r
                    } = a.getBoundingClientRect(), {
                        clientX: i,
                        clientY: s
                    } = n;
                    u.value = i - r,
                    h.value = s - o,
                    c.value.length && (p.value = !0)
                },
                w = (e, t) => {
                    console.log("menuTop.value", h.value),
                    t.preventDefault();
                    const n = document.querySelector(".comp-FileManage"), {
                        top: a,
                        left: o
                    } = n.getBoundingClientRect(), {
                        clientX: r,
                        clientY: i
                    } = t;
                    u.value = r - o,
                    h.value = i - a,
                    p.value = !0,
                    m.value = e
                },
                v = () => {
                    b["a"].prompt(o("FileManage.inputFilename"), o("FileManage.newName"), {
                        confirmButtonText: o("configuration.sureInfo"),
                        cancelButtonText: o("configuration.cancel"),
                        inputValue: m.value.name,
                        inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
                        inputErrorMessage: o("configuration.fileNameNull")
                    }).then(({
                            value: e
                        }) => {
                        const {
                            name: t,
                            path: n
                        } = m.value;
                        r.socket.sendMsg({
                            method: "set",
                            params: {
                                opGcodeFile: `renameprt:${n}/${t}:${n}/${e}`
                            }
                        }),
                        setTimeout(() => {
                            Object(s["a"])({
                                type: "success",
                                message: o("FileManage.newNameScuess")
                            })
                        }, 1700)
                    }).catch(() => {
                        Object(s["a"])({
                            type: "info",
                            message: o("FileManage.newNameCancel")
                        })
                    })
                },
                x = Object(a["ref"])(0),
                j = Object(a["ref"])();
                function O(e) {
                    x.value = e.idx,
                    p.value = !1,
                    "history" === e.moduleInfo ? (r.menus = r.hisMenus, j.value && j.value.clearSelection(), c.value = [], r.socket.sendMsg({
                            method: "get",
                            params: {
                                reqHistory: 1
                            }
                        })) : r.menus = r.fileMenus
                }
                const y = () => {
                    const e = c.value.map(e => e.id);
                    r.socket.sendMsg({
                        method: "set",
                        params: {
                            deleteHistory: e
                        }
                    }),
                    j.value && j.value.clearSelection()
                },
                k = () => {
                    b["a"].confirm(o("configuration.sureDelete"), o("configuration.deleteFile"), {
                        confirmButtonText: o("configuration.sureInfo"),
                        cancelButtonText: o("configuration.cancel"),
                        type: "warning"
                    }).then(() => {
                        const {
                            name: e,
                            path: t
                        } = m.value;
                        r.socket.sendMsg({
                            method: "set",
                            params: {
                                opGcodeFile: "deleteprt:" + t + "/" + e
                            }
                        }),
                        setTimeout(() => {
                            Object(s["a"])({
                                type: "success",
                                message: o("FileManage.deleteSuccess")
                            })
                        }, 1700)
                    }).catch(e => {
                        console.log("err", e),
                        Object(s["a"])({
                            type: "info",
                            message: o("FileManage.calcelDelete")
                        })
                    })
                },
                M = () => {
                    r.foldFlag = !1
                },
                C = () => {
                    r.foldFlag = !0
                },
                _ = () => {
                    const {
                        name: e,
                        path: t
                    } = m.value;
                    console.log("name", e),
                    console.log("path", t),
                    r.socket.sendMsg({
                        method: "set",
                        params: {
                            opGcodeFile: "printprt:" + t + "/" + e
                        }
                    })
                },
                S = e => {
                    const t = e.name.lastIndexOf("."),
                    a = e.name.substring(t + 1);
                    return "gcode" !== a.toLowerCase() ? (s["a"].warning(o("FileManage.gcodeSilceTips")), !1) : e.name.toLowerCase() === n.printFileName.toLowerCase() ? (s["a"].warning(o("FileManage.samePrinting")), !1) : (r.fileUrl = "/upload/" + e.name, !0)
                },
                F = Object(a["ref"])(),
                z = Object(a["ref"])(0),
                E = e => {
                    let t = new FormData;
                    t.append("file", e.file),
                    wt["a"].post(r.fileUrl, t, {
                        onUploadProgress: e => {
                            z.value = Math.floor(e.loaded / e.total * 100)
                        }
                    }).then(e => {
                        z.value = 0,
                        200 === e.data.code ? (s["a"].success(o("FileManage.insertSuccess")), r.socket.sendMsg({
                                method: "get",
                                params: {
                                    reqGcodeFile: 1
                                }
                            })) : s["a"].warning(o("FileManage.uploadFailed"))
                    })
                },
                T = e => {
                    p.value = !1,
                    3 === e.operType && v(),
                    2 === e.operType && (1 === x.value ? y() : k()),
                    1 === e.operType && _()
                },
                I = (e, t) => new Promise(n => {
                    const a = new Image;
                    a.src = e,
                    a.onload = () => n(e),
                    a.onerror = () => {
                        const e = new Image;
                        e.src = t,
                        e.onload = () => n(t),
                        e.onerror = () => n("")
                    }
                });
                return Object(a["watch"])(() => t.value, () => {
                    r.moduleList[0].moduleName = o("FileManage.files"),
                    r.moduleList[1].moduleName = o("FileManage.historyRecord"),
                    r.fileMenus[0].name = o("FileManage.startPrint"),
                    r.fileMenus[1].name = o("FileManage.deleteFile"),
                    r.fileMenus[2].name = o("FileManage.newName")
                }),
                Object(a["watch"])(() => n.retGcodeFileInfo, async e => {
					console.log("Update data ", 6666)

					const t = e.fileInfo
					const list = t.split(";").filter(e => !!e)

					const result = await Promise.all(list.map(async (o) => {
						const e = o.split(":")
						const s = await I('', '')

						return {
							path: e[0],
							name: e[1],
							size: +e[2],
							layer: +e[3],
							time: e[4],
							length: +e[5] / 1e3,
							thumb: s
						}
					}))

					const sorted = result.sort((e, t) => t.time - e.time)

					// 💥 여기만 중요
					r.tableData.splice(0, r.tableData.length, ...sorted)

					r.tableDataFlag = !0
				}),
                Object(a["watch"])(() => n.historyList, e => {
                    e && e.length && (r.hisTableData = JSON.parse(JSON.stringify(e)))
                }, {
                    immediate: !0
                }),
                Object(a["onMounted"])(() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
                    r.socket = e.$webSocket,
                    r.messageCenter = e.$messageCenter,
                    r.ip = e.$ip;
                    let t = setInterval(() => {
                        r.socket.sendMsg({
                            method: "get",
                            params: {
                                reqGcodeFile: 1
                            }
                        }),
                        r.tableDataFlag && (console.log("State 66666", r.tableDataFlag), clearInterval(t), t = null)
                    }, 3e3);
                    window.oncontextmenu = e => {
                        p.value = !1
                    },
                    window.onclick = e => {
                        let t = document.querySelector(".menu");
                        t && !t.contains(e.target) && (p.value = !1)
                    },
                    r.menus = r.fileMenus
                }),
                (e, t) => {
                    const n = Object(a["resolveComponent"])("el-progress"),
                    i = Object(a["resolveComponent"])("el-button"),
                    c = Object(a["resolveComponent"])("el-upload"),
                    s = Object(a["resolveComponent"])("el-table-column"),
                    m = Object(a["resolveComponent"])("el-table");
                    return Object(a["openBlock"])(),
                    Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["comp-FileManage", {
                                    controlAnimal: !r.foldFlag
                                }
                            ])
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                icon: ""
                            }, {
                                right: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("div", xt, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(r.moduleList, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                                    class: Object(a["normalizeClass"])(["inner-top", {
                                                                                "inner-bg": x.value == e.idx
                                                                            }
                                                                        ]),
                                                                    key: t,
                                                                    onClick: t => O(e)
                                                                }, [Object(a["createElementVNode"])("span", null, Object(a["toDisplayString"])(e.moduleName), 1)], 10, jt))), 128))]), Object(a["withDirectives"])(Object(a["createVNode"])(n, {
                                                class: "progress",
                                                percentage: z.value
                                            }, null, 8, ["percentage"]), [[a["vShow"], !!z.value]]), Object(a["createElementVNode"])("div", Ot, [Object(a["withDirectives"])(Object(a["createElementVNode"])("div", yt, [Object(a["createVNode"])(c, {
                                                                "show-file-list": !1,
                                                                class: "upload-demo",
                                                                action: "",
                                                                "before-upload": S,
                                                                "http-request": E
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(() => [Object(a["createVNode"])(i, {
                                                                            size: "small"
                                                                        }, {
                                                                        default:
                                                                            Object(a["withCtx"])(() => [kt, Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(o)("FileManage.insert")), 1)]),
                                                                            _: 1
                                                                        })]),
                                                                _: 1
                                                            })], 512), [[a["vShow"], 0 === x.value]])]), Object(a["createElementVNode"])("div", Mt, [r.foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 0,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(M, ["stop"])
                                                    }, "", 8, Ct)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 1,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(C, ["stop"])
                                                    }, "", 8, _t))])]),
                                _: 1
                            }), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", St, [Object(a["createVNode"])(m, {
                                            data: r.tableData,
											rowKey: 'name',
                                            style: {
                                                width: "100%"
                                            },
                                            ref_key: "table",
                                            ref: F
                                        }, {
                                        default:
                                            Object(a["withCtx"])(() => [Object(a["createVNode"])(s, {
                                                        label: Object(a["unref"])(o)("FileManage.fileName"),
                                                        align: "center",
                                                        width: "350"
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createElementVNode"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        "align-items": "center"
                                                                    },
                                                                    onClick: Object(a["withModifiers"])(t => w(e.row, t), ["stop"])
                                                                }, [e.row.thumb ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("img", {
                                                                                key: 0,
                                                                                src: e.row.thumb,
                                                                                alt: "",
                                                                                width: "24",
                                                                                height: "20"
                                                                            }, null, 8, zt)) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", {
                                                                            class: "fileName",
                                                                            title: e.row.name
                                                                        }, Object(a["toDisplayString"])(e.row.name), 9, Et)], 8, Ft)]),
                                                        _: 1
                                                    }, 8, ["label"]), Object(a["createVNode"])(s, {
                                                        label: Object(a["unref"])(o)("FileManage.fileSize"),
                                                        sortable: "",
                                                        "sort-method": (e, t) => +e.size - +t.size,
                                                        align: "center"
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(tt)(e.row.size)), 1)]),
                                                        _: 1
                                                    }, 8, ["label", "sort-method"]), Object(a["createVNode"])(s, {
                                                        prop: "layer",
                                                        label: Object(a["unref"])(o)("FileManage.layerHeight"),
                                                        sortable: "",
                                                        align: "center",
                                                        "sort-method": (e, t) => e.layer - t.layer
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.layer) + "mm", 1)]),
                                                        _: 1
                                                    }, 8, ["label", "sort-method"]), Object(a["createVNode"])(s, {
                                                        label: Object(a["unref"])(o)("FileManage.time"),
                                                        sortable: "",
                                                        width: "200",
                                                        align: "center",
                                                        "sort-method": (e, t) => e.time - t.time
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(at)(+e.row.time, "yyyy-MM-dd HH:mm:ss")), 1)]),
                                                        _: 1
                                                    }, 8, ["label", "sort-method"]), Object(a["createVNode"])(s, {
                                                        label: Object(a["unref"])(o)("FileManage.hcLehgth"),
                                                        sortable: "",
                                                        align: "center",
                                                        width: "130",
                                                        "sort-method": (e, t) => e.length - t.length
                                                    }, {
                                                    default:
                                                        Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.length) + "m", 1)]),
                                                        _: 1
                                                    }, 8, ["label", "sort-method"])]),
                                            _: 1
                                        }, 8, ["data"])], 512), [[a["vShow"], r.foldFlag && 0 === x.value]]), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", {
                                    class: "menu",
                                    style: Object(a["normalizeStyle"])({
                                        left: u.value + "px",
                                        top: h.value + "px"
                                    })
                                }, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(r.menus, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                            key: t,
                                                            onClick: Object(a["withModifiers"])(t => T(e), ["stop"])
                                                        }, Object(a["toDisplayString"])(e.name), 9, Tt))), 128))], 4), [[a["vShow"], p.value]]), Object(a["createElementVNode"])("div", {
                                class: Object(a["normalizeClass"])(["tablistCon", {
                                            controlAnimal: !r.foldFlag,
                                            "show-style": 0 === x.value
                                        }
                                    ])
                            }, [1 === x.value ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", It, [Object(a["createVNode"])(m, {
                                                    data: r.hisTableData,
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    onRowClick: f,
                                                    onSelectionChange: l,
                                                    "row-class-name": d,
                                                    ref_key: "multipleTableRef",
                                                    ref: j
                                                }, {
                                                default:
                                                    Object(a["withCtx"])(() => [Object(a["createVNode"])(s, {
                                                                type: "selection",
                                                                width: "55"
                                                            }), Object(a["createVNode"])(s, {
                                                                prop: "filename",
                                                                label: Object(a["unref"])(o)("FileManage.files"),
                                                                width: "150",
                                                                align: "center"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.filename.split("/")[e.row.filename.split("/").length - 1]), 1)]),
                                                                _: 1
                                                            }, 8, ["label"]), Object(a["createVNode"])(s, {
                                                                label: Object(a["unref"])(o)("FileManage.status"),
                                                                sortable: "",
                                                                width: "120",
                                                                align: "center"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(0 == e.row.printfinish ? Object(a["unref"])(o)("FileManage.noFinish") : Object(a["unref"])(o)("FileManage.finish")), 1)]),
                                                                _: 1
                                                            }, 8, ["label"]), Object(a["createVNode"])(s, {
                                                                prop: "starttime",
                                                                label: Object(a["unref"])(o)("FileManage.startTime"),
                                                                width: "160px",
                                                                sortable: "",
                                                                align: "center"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(rt)(e.row.starttime)), 1)]),
                                                                _: 1
                                                            }, 8, ["label"]), Object(a["createVNode"])(s, {
                                                                prop: "ctime",
                                                                label: Object(a["unref"])(o)("FileManage.endTime"),
                                                                width: "160px",
                                                                sortable: "",
                                                                align: "center"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(rt)(e.row.starttime + e.row.usagetime)), 1)]),
                                                                _: 1
                                                            }, 8, ["label"]), Object(a["createVNode"])(s, {
                                                                prop: "usagetime",
                                                                label: Object(a["unref"])(o)("FileManage.allTime"),
                                                                width: "150",
                                                                sortable: "",
                                                                align: "center"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(ot)(e.row.usagetime)), 1)]),
                                                                _: 1
                                                            }, 8, ["label"]), Object(a["createVNode"])(s, {
                                                                prop: "size",
                                                                label: Object(a["unref"])(o)("FileManage.size"),
                                                                sortable: "",
                                                                align: "center"
                                                            }, {
                                                            default:
                                                                Object(a["withCtx"])(e => [Object(a["createTextVNode"])(Object(a["toDisplayString"])((e.row.size / 1048576).toFixed(2) + "M"), 1)]),
                                                                _: 1
                                                            }, 8, ["label"])]),
                                                    _: 1
                                                }, 8, ["data"])])) : Object(a["createCommentVNode"])("", !0)], 2)], 2)
                }
            }
        };
        n("12d4");
        const Bt = S()(Nt, [["__scopeId", "data-v-8e30bd52"]]);
        var Pt = Bt;
        const Vt = e => (Object(a["pushScopeId"])("data-v-3f5e4e02"), e = e(), Object(a["popScopeId"])(), e),
        At = {
            class: "fold"
        },
        Rt = ["onClick"],
        Dt = ["onClick"],
        qt = {
            class: "content"
        },
        Ut = ["src"],
        Zt = {
            key: 1,
            class: "netErr"
        },
        Ht = Vt(() => Object(a["createElementVNode"])("div", {
                    class: "iconfont"
                }, "", -1));
        var Wt = {
            __name: "CameraShow",
            setup(e) {
                const t = Object(a["ref"])(""),
                n = Object(a["ref"])(""),
                o = Object(a["ref"])(!0);
                let r = Object(a["reactive"])({
                    foldFlag: !0
                });
                const i = () => {
                    r.foldFlag = !1
                },
                c = () => {
                    r.foldFlag = !0
                },
                s = e => new Promise(t => {
                    const n = new Image;
                    n.src = e,
                    n.onload = () => t(!0),
                    n.onerror = () => t(!1)
                });
                return Object(a["onMounted"])(async() => {
                    const {
                        proxy: e
                    } = Object(a["getCurrentInstance"])();
					const params = new URLSearchParams(window.location.search);
			    	const getip = params.get("ip");
                    t.value = `https://${getip}:8080/?action=stream`,
                    n.value = getip,
                    o.value = await s(t.value)
                }),
                (e, s) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["comp-CameraShow", {
                                    controlAnimal: !Object(a["unref"])(r).foldFlag
                                }
                            ]),
                        style: Object(a["normalizeStyle"])({
                            height: (o.value, "539px")
                        })
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                title: e.$t("cameraModule.cameraShow"),
                                icon: ""
                            }, {
                                right: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("div", At, [Object(a["unref"])(r).foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 0,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(i, ["stop"])
                                                    }, "", 8, Rt)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 1,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(c, ["stop"])
                                                    }, "", 8, Dt))])]),
                                _: 1
                            }, 8, ["title"]), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", qt, [o.value ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("img", {
                                                key: 0,
                                                ref: "camera_image",
                                                src: t.value,
                                                class: "camera-image"
                                            }, null, 8, Ut)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Zt, [Ht, Object(a["createElementVNode"])("p", null, Object(a["toDisplayString"])(e.$t("cameraModule.pleaseCheck")) + " " + Object(a["toDisplayString"])(n.value) + " " + Object(a["toDisplayString"])(e.$t("cameraModule.printAsset")), 1)]))], 512), [[a["vShow"], Object(a["unref"])(r).foldFlag]])], 6))
            }
        };
        n("99b8");
        const Lt = S()(Wt, [["__scopeId", "data-v-3f5e4e02"]]);
        var Xt = Lt;
        const Yt = {
            homeXY: "homeXY",
            reduceX: "reduceX",
            addX: "addX",
            addY: "addY",
            addZ: "addZ",
            reduceY: "reduceY",
            homeZ: "homeZ",
            reduceZ: "reduceZ",
            homeX: "homeX",
            homeY: "homeY",
            topZ: "topZ",
            bottomZ: "bottomZ",
            saveZ: "saveZ",
            goBack: "goBack",
            goOut: "goOut"
        },
        $t = e => (Object(a["pushScopeId"])("data-v-0f9f9936"), e = e(), Object(a["popScopeId"])(), e),
        Gt = $t(() => Object(a["createElementVNode"])("div", {
                    class: "right-feature"
                }, null, -1)),
        Jt = {
            class: "fold"
        },
        Qt = ["onClick"],
        Kt = ["onClick"],
        en = {
            class: "container_warp"
        },
        tn = {
            class: "middleContent"
        },
        nn = {
            class: "topPrintshow"
        },
        an = ["element-loading-background", "onClick"],
        on = {
            key: 0
        },
        rn = ["onClick"],
        cn = {
            key: 0
        },
        sn = {
            class: "midinput"
        },
        ln = {
            style: {
                color: "#ffffff",
                "padding-right": "5px"
            }
        },
        dn = {
            class: "hot_bend"
        },
        pn = {
            class: "left_info"
        },
        un = {
            class: "elinput_contain"
        },
        hn = {
            class: "last_info"
        },
        mn = {
            class: "ofen_switch"
        },
        bn = {
            class: "inner-lab"
        },
        gn = {
            class: "inner-lab"
        },
        fn = {
            key: 1
        },
        wn = {
            key: 2,
            class: "inner-labin"
        },
        vn = {
            key: 0,
            class: "inner-lab"
        },
        xn = {
            class: "progress"
        };
        var jn = {
            __name: "PrintSetting",
            setup(e) {
                const {
                    locale: t
                } = Object(g["b"])(),
                n = i(), {
                    proxy: o
                } = Object(a["getCurrentInstance"])(), {
                    $t: r
                } = Object(a["getCurrentInstance"])().proxy,
                c = Object(a["reactive"])([{
                                temInfo: r("moveControl.printSpeed"),
                                temNow: 0,
                                temTarget: 0,
                                company: "%",
                                type: "speed"
                            }
                        ]),
                l = Object(a["reactive"])([{
                                temInfo: r("moveControl.modelFengshan"),
                                value: !1,
                                sign: "Feng",
                                speedNum: 0
                            }, {
                                temInfo: r("moveControl.qiangtiFengshan"),
                                value: !1,
                                sign: "Qiang",
                                speedNum: 0
                            }, {
                                temInfo: r("moveControl.fuzhuFengshan"),
                                value: !1,
                                sign: "Fuzhu",
                                speedNum: 0
                            }, {
                                temInfo: r("moveControl.lFengshan"),
                                value: !1,
                                sign: "LED"
                            }
                        ]),
                d = Object(a["reactive"])({
                    foldFlag: !0,
                    socketConnect: !0,
                    printStatus: 0,
                    socket: null,
                    echart: null,
                    messageCenter: null,
                    zPianyi: .05,
                    xBtnshowFlag: 0,
                    yBtnshowFlag: 0,
                    zBtnshowFlag: 0,
                    moveUnits: "0.1",
                    moveUnitsZ: "0.005",
                    pollingMessages: null,
                    pollingMessagesZ: null,
                    pollingMessagesXYZ: null,
                    nozzleTemp: n.nozzleTemp
                });
                Object(a["watch"])(() => t.value, () => {
                    l[0].temInfo = r("moveControl.modelFengshan"),
                    l[1].temInfo = r("moveControl.fuzhuFengshan"),
                    l[2].temInfo = r("moveControl.qiangtiFengshan"),
                    l[3].temInfo = r("moveControl.lFengshan"),
                    c[0].temInfo = r("moveControl.printSpeed")
                }),
                Object(a["watch"])(() => n.curFeedratePct, e => {
                    console.log("Current printer speed", e),
                    c[0].temNow = e
                }),
                Object(a["watch"])(() => n.autohome, e => {
                    e && (d.xBtnshowFlag = +e[0].slice(2), d.yBtnshowFlag = +e[1].slice(2), d.zBtnshowFlag = +e[2].slice(2), M())
                }),
                Object(a["watch"])([() => n.state, () => n.fan, () => n.modelFanPct, () => n.fanCase, () => n.caseFanPct, () => n.fanAuxiliary, () => n.auxiliaryFanPct, () => n.lightSw], () => {
                    d.printStatus = n.state,
                    l[0].value = 1 === n.fan,
                    l[1].value = 1 === n.fanCase,
                    l[2].value = 1 === n.fanAuxiliary,
                    l[3].value = 1 === n.lightSw,
                    l[0].speedNum = n.modelFanPct,
                    l[1].speedNum = n.caseFanPct,
                    l[2].speedNum = n.auxiliaryFanPct
                }, {
                    immediate: !0
                }),
                Object(a["watch"])(() => n.curPosition, e => {
                    const t = {
                        x: e[0].slice(2),
                        y: e[1].slice(2)
                    };
                    V().printCurrentPosition(t);
                    for (const n of h)
                        n.value = n.topInfo = e[n.index].slice(2)
                });
                const p = Object(a["reactive"])([{
                                loading: !1,
                                showInfo: "",
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#1E9BE2",
                                iconShowInfo: "icon-a-home1",
                                topPosition: "70px",
                                leftPosition: "13%",
                                clickAction: Yt.homeXY,
                                size: "14px",
                                justFy: "center",
                                direction: "column"
                            }, {
                                showInfo: "X-",
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#4F4F54",
                                iconShowInfo: "icon-a-shangjiantoukaobei3",
                                topPosition: "70px",
                                leftPosition: "3.5%",
                                clickAction: Yt.reduceX,
                                size: "20px",
                                justFy: "space-evenly",
                                direction: "row"
                            }, {
                                showInfo: "X+",
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#4F4F54",
                                iconShowInfo: "icon-a-shangjiantoukaobei2",
                                topPosition: "70px",
                                leftPosition: "22.3%",
                                clickAction: Yt.addX,
                                size: "11px",
                                justFy: "space-evenly",
                                direction: "row-reverse"
                            }, {
                                showInfo: "Y+",
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#4F4F54",
                                iconShowInfo: "icon-shangjiantou",
                                topPosition: "20px",
                                leftPosition: "13%",
                                clickAction: Yt.addY,
                                size: "20px",
                                justFy: "space-evenly",
                                direction: "column"
                            }, {
                                showInfo: "Y-",
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#4F4F54",
                                iconShowInfo: "icon-a-shangjiantoukaobei",
                                topPosition: "120px",
                                leftPosition: "13%",
                                clickAction: Yt.reduceY,
                                size: "20px",
                                justFy: "space-evenly",
                                direction: "column"
                            }, {
                                showInfo: "Z+",
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#4F4F54",
                                iconShowInfo: "icon-shangjiantou",
                                topPosition: "20px",
                                leftPosition: "31.5%",
                                clickAction: Yt.addZ,
                                size: "20px",
                                justFy: "space-evenly",
                                direction: "column"
                            }, {
                                loading: !1,
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#1E9BE2",
                                showInfo: "",
                                iconShowInfo: "icon-a-home1",
                                topPosition: "70px",
                                leftPosition: "31.5%",
                                clickAction: Yt.homeZ,
                                size: "14px",
                                justFy: "center",
                                direction: "column"
                            }, {
                                width: "7.5%",
                                height: "40px",
                                disable: !1,
                                background: "#4F4F54",
                                showInfo: "Z-",
                                iconShowInfo: "icon-a-shangjiantoukaobei",
                                topPosition: "120px",
                                leftPosition: "31.5%",
                                clickAction: Yt.reduceZ,
                                justFy: "space-evenly",
                                size: "20px",
                                direction: "column"
                            }
                        ]),
                u = Object(a["reactive"])([{
                                width: "10.9%",
                                height: "40px",
                                background: "#4F4F54",
                                showInfo: "0.1",
                                clickFlag: !0,
                                iconShowInfo: "",
                                topPosition: "60px",
                                leftPosition: "58.87%",
                                clickAction: "showTwice",
                                justFy: "space-evenly",
                                size: "12px",
                                direction: "row",
                                itemClass: "itemClass1"
                            }, {
                                width: "10.9%",
                                height: "40px",
                                background: "#4F4F54",
                                showInfo: "1",
                                clickFlag: !1,
                                iconShowInfo: "",
                                topPosition: "60px",
                                leftPosition: "72.3%",
                                clickAction: "showTwice",
                                justFy: "space-evenly",
                                size: "12px",
                                direction: "row",
                                itemClass: "itemClass2"
                            }, {
                                width: "10.9%",
                                height: "40px",
                                background: "#4F4F54",
                                showInfo: "10",
                                clickFlag: !1,
                                iconShowInfo: "",
                                topPosition: "60px",
                                leftPosition: "85.5%",
                                clickAction: "showTwice",
                                justFy: "space-evenly",
                                size: "12px",
                                direction: "row",
                                itemClass: "itemClass3"
                            }, {
                                width: "10.9%",
                                height: "40px",
                                background: "#4F4F54",
                                showInfo: "100",
                                clickFlag: !1,
                                iconShowInfo: "",
                                topPosition: "60px",
                                leftPosition: "98.6%",
                                clickAction: "showTwice",
                                justFy: "space-evenly",
                                size: "12px",
                                direction: "row",
                                itemClass: "itemClass4"
                            }
                        ]),
                h = Object(a["reactive"])([{
                                index: 0,
                                value: 0,
                                type: "curPosition",
                                firstInfo: "X",
                                firstInfo1: "X",
                                lastInfo: r("moveControl.haomi"),
                                BtnshowFlag: !0,
                                marginTop: "0px",
                                topInfo: "40.50",
                                left: "12px",
                                top: "-5px",
                                rate: " F3000"
                            }, {
                                index: 1,
                                value: 0,
                                type: "curPosition",
                                firstInfo: "Y",
                                firstInfo1: "Y",
                                lastInfo: r("moveControl.haomi"),
                                BtnshowFlag: !0,
                                marginTop: "4px",
                                topInfo: "40.50",
                                left: "12px",
                                top: "45px",
                                rate: " F3000"
                            }, {
                                index: 2,
                                value: 0,
                                type: "curPosition",
                                firstInfo: "Z",
                                firstInfo1: "Z",
                                lastInfo: r("moveControl.haomi"),
                                BtnshowFlag: !0,
                                marginTop: "4px",
                                topInfo: "40.50",
                                left: "12px",
                                top: "95px",
                                rate: " F600"
                            }
                        ]),
                m = () => {
                    d.foldFlag = !1
                },
                b = () => {
                    d.foldFlag = !0
                };
                function f(e) {
                    e.firstInfo = ""
                }
                function w(e) {
                    e.firstInfo = e.firstInfo1 + ":"
                }
                function v(e) {
                    if (1 === d.printStatus)
                        return Object(s["a"])({
                            showClose: !0,
                            message: r("moveControl.printWarning"),
                            type: "warning"
                        }), h[0].firstInfo = "X", h[1].firstInfo = "Y", h[2].firstInfo = "Z", h[0].BtnshowFlag = !1, h[1].BtnshowFlag = !1, void(h[2].BtnshowFlag = !1);
                    Number(e.firstInfo) - Number(e.topInfo) != 0 ? (alert(2), d.socket.sendMsg({
                            method: "set",
                            params: {
                                setPosition: e.firstInfo1 + (Number(e.firstInfo) - Number(e.topInfo)) + e.rate
                            }
                        }), setTimeout(() => {
                            clearInterval(d.pollingMessagesInput)
                        }, 3e3)) : Object(s["a"])({
                        showClose: !0,
                        message: r("moveControl.shuruMubiao"),
                        type: "warning"
                    })
                }
                function x(e, t) {
                    let n = e / 100 * 255;
                    switch (t) {
                    case "Feng":
                        d.socket.sendMsg({
                            method: "set",
                            params: {
                                gcodeCmd: "M106 P0 S" + Math.round(n)
                            }
                        });
                        break;
                    case "Qiang":
                        d.socket.sendMsg({
                            method: "set",
                            params: {
                                gcodeCmd: "M106 P1 S" + Math.round(n)
                            }
                        });
                        break;
                    case "Fuzhu":
                        d.socket.sendMsg({
                            method: "set",
                            params: {
                                gcodeCmd: "M106 P2 S" + Math.round(n)
                            }
                        });
                        break;
                    default:
                        break
                    }
                }
                function j(e) {
                    "Feng" === e.sign && d.socket.sendMsg({
                        method: "set",
                        params: {
                            fan: +e.value
                        }
                    }),
                    "Qiang" === e.sign && d.socket.sendMsg({
                        method: "set",
                        params: {
                            fanCase: +e.value
                        }
                    }),
                    "Fuzhu" === e.sign && d.socket.sendMsg({
                        method: "set",
                        params: {
                            fanAuxiliary: +e.value
                        }
                    }),
                    "LED" === e.sign && d.socket.sendMsg({
                        method: "set",
                        params: {
                            lightSw: +e.value
                        }
                    })
                }
                const O = (e, t) => {
                    "speed" === e && d.socket.sendMsg({
                        method: "set",
                        params: {
                            setFeedratePct: +t
                        }
                    })
                },
                y = it(e => {
                    if (1 !== d.printStatus)
                        if (d.socketConnect)
                            if (!0 !== e.disable)
                                if (e.clickAction != Yt.homeZ || "#4F4F54" == p[0].background) {
                                    if (!1 === e.loading)
                                        if (e.loading = !0, e.showInfo !== r("configuration.allIt")) {
                                            if (null !== d.pollingMessages)
                                                return;
                                            d.pollingMessages = setInterval((function () {
                                                        d.socket.sendMsg({
                                                            method: "get",
                                                            params: {
                                                                ReqPrinterPara: 1
                                                            }
                                                        })
                                                    }), 1e3)
                                        } else
                                            d.pollingMessagesZ = setInterval((function () {
                                                        d.socket.sendMsg({
                                                            method: "get",
                                                            params: {
                                                                ReqPrinterPara: 1
                                                            }
                                                        })
                                                    }), 1e3);
                                    else {
                                        if (null !== d.pollingMessagesXYZ)
                                            return;
                                        d.pollingMessagesXYZ = setInterval((function () {
                                                    d.socket.sendMsg({
                                                        method: "get",
                                                        params: {
                                                            ReqPrinterPara: 1
                                                        }
                                                    })
                                                }), 1e3),
                                        setTimeout(() => {
                                            clearInterval(d.pollingMessagesXYZ),
                                            d.pollingMessagesXYZ = null
                                        }, 3e3)
                                    }
                                    switch (console.log("What is item.clickAction", e.clickAction), e.clickAction) {
                                    case Yt.homeXY:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                autohome: "X Y"
                                            }
                                        });
                                        break;
                                    case Yt.homeX:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                autohome: "X"
                                            }
                                        });
                                        break;
                                    case Yt.homeY:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                autohome: "Y"
                                            }
                                        });
                                        break;
                                    case Yt.homeZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                autohome: "Z"
                                            }
                                        });
                                        break;
                                    case Yt.homeXYZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                autohome: "X Y Z"
                                            }
                                        });
                                        break;
                                    case Yt.reduceX:
                                        if (console.log("showInputConfig", h[0].topInfo), -5 == +h[0].topInfo)
                                            return void Object(s["a"])({
                                                showClose: !0,
                                                message: r("configuration.assetDi"),
                                                type: "warning"
                                            });
                                        alert(1),
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setPosition: "X-" + d.moveUnits + " F3000"
                                            }
                                        });
                                        break;
                                    case Yt.addX:
                                        console.log("state.moveUnits", d.moveUnits),
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setPosition: "X" + d.moveUnits + " F3000"
                                            }
                                        });
                                        break;
                                    case Yt.addY:
                                        console.log("Y ++++++++", d.moveUnits),
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setPosition: "Y" + d.moveUnits + " F3000"
                                            }
                                        });
                                        break;
                                    case Yt.reduceY:
                                        if (-5 == +h[1].topInfo)
                                            return void Object(s["a"])({
                                                showClose: !0,
                                                message: r("configuration.assetDi"),
                                                type: "warning"
                                            });
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setPosition: "Y-" + d.moveUnits + " F3000"
                                            }
                                        });
                                        break;
                                    case Yt.reduceZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setPosition: "Z" + d.moveUnits + " F600"
                                            }
                                        });
                                        break;
                                    case Yt.addZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setPosition: "Z-" + d.moveUnits + " F600"
                                            }
                                        });
                                        break;
                                    case Yt.bottomZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setZOffset: "-" + d.moveUnitsZ
                                            }
                                        });
                                        break;
                                    case Yt.topZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                setZOffset: "+" + d.moveUnitsZ
                                            }
                                        });
                                        break;
                                    case Yt.saveZ:
                                        d.socket.sendMsg({
                                            method: "set",
                                            params: {
                                                savePara: 1
                                            }
                                        });
                                        break;
                                    default:
                                        break
                                    }
                                } else
                                    Object(s["a"])({
                                        showClose: !0,
                                        message: r("configuration.guiweiPrint"),
                                        type: "warning"
                                    });
                            else
                                Object(s["a"])({
                                    message: r("configuration.guiweiPrint"),
                                    type: "warning"
                                });
                        else
                            Object(s["a"])({
                                showClose: !0,
                                message: r("configuration.closeWarn"),
                                type: "warning"
                            });
                    else
                        Object(s["a"])({
                            showClose: !0,
                            message: r("moveControl.printWarning"),
                            type: "warning"
                        })
                }, 1500);
                function k(e, t) {
                    d.moveUnits = e.showInfo;
                    for (let n = 0; n < t.length; n++)
                        e.showInfo !== t[n].showInfo && (t[n].clickFlag = !1);
                    e.clickFlag = !0
                }
                function M() {
                    1 === d.xBtnshowFlag ? (p[1].background = "#1E9BE2", p[2].background = "#1E9BE2", p[1].disable = !1, p[2].disable = !1) : (1 !== d.printStatus && (p[0].background = "#1E9BE2"), p[1].background = "#4F4F54", p[2].background = "#4F4F54", p[1].disable = !0, p[2].disable = !0),
                    1 === d.yBtnshowFlag ? (p[3].background = "#1E9BE2", p[4].background = "#1E9BE2", p[3].disable = !1, p[4].disable = !1) : (1 !== d.printStatus && (p[0].background = "#1E9BE2"), p[3].background = "#4F4F54", p[4].background = "#4F4F54", p[3].disable = !0, p[4].disable = !0),
                    1 === d.zBtnshowFlag ? (p[5].background = "#1E9BE2", p[7].background = "#1E9BE2", p[6].background = "#4F4F54", p[5].disable = !1, p[7].disable = !1, h[2].BtnshowFlag = !1, setTimeout(() => {
                            p[6].loading = !1
                        }, 1200)) : (p[5].background = "#4F4F54", p[7].background = "#4F4F54", p[6].background = "#1E9BE2", p[5].disable = !0, p[7].disable = !0, h[0].BtnshowFlag = !0),
                    1 === d.xBtnshowFlag && 1 === d.yBtnshowFlag && (h[0].BtnshowFlag = !1, h[1].BtnshowFlag = !1, p[0].background = "#4F4F54", clearInterval(d.pollingMessages), d.pollingMessages = null, setTimeout(() => {
                            p[0].loading = !1
                        }, 1200)),
                    1 === d.xBtnshowFlag && 1 === d.yBtnshowFlag && 1 === d.zBtnshowFlag && (h[2].BtnshowFlag = !1, clearInterval(d.pollingMessagesZ), d.pollingMessagesZ = null)
                }
                return Object(a["onUnmounted"])(() => {
                    clearInterval(d.pollingMessagesTop),
                    d.pollingMessagesZ = null
                }),
                Object(a["onMounted"])(() => {
                    d.socket = o.$webSocket,
                    d.echart = o.$echarts,
                    d.messageCenter = o.$messageCenter,
                    d.messageCenter.on("socket_close", () => {
                        d.socketConnect && (d.socketConnect = !1, Object(s["a"])({
                                showClose: !0,
                                message: r("configuration.closeWarn"),
                                type: "warning"
                            }), clearInterval(d.pollingMessagesXYZ), clearInterval(d.pollingMessages), clearInterval(d.pollingMessagesZ), clearInterval(d.pollingMessagesInput))
                    })
                }),
                (e, t) => {
                    const n = Object(a["resolveComponent"])("el-input"),
                    o = Object(a["resolveComponent"])("el-switch"),
                    i = Object(a["resolveComponent"])("el-slider"),
                    s = Object(a["resolveDirective"])("loading");
                    return Object(a["openBlock"])(),
                    Object(a["createElementBlock"])("div", {
                        class: Object(a["normalizeClass"])(["control-main-set", {
                                    controlAnimal: !d.foldFlag
                                }
                            ])
                    }, [Object(a["createVNode"])(Object(a["unref"])(P), {
                                title: Object(a["unref"])(r)("moveControl.infoControl"),
                                class: "header",
                                icon: ""
                            }, {
                                right: Object(a["withCtx"])(() => [Gt, Object(a["createElementVNode"])("div", Jt, [d.foldFlag ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 0,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(m, ["stop"])
                                                    }, "", 8, Qt)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("i", {
                                                        key: 1,
                                                        class: "iconfont",
                                                        onClick: Object(a["withModifiers"])(b, ["stop"])
                                                    }, "", 8, Kt))])]),
                                _: 1
                            }, 8, ["title"]), Object(a["withDirectives"])(Object(a["createElementVNode"])("div", en, [Object(a["createElementVNode"])("div", tn, [Object(a["createElementVNode"])("div", nn, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(p, (e, t) => Object(a["withDirectives"])((Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                                                style: Object(a["normalizeStyle"])({
                                                                                    top: e.topPosition,
                                                                                    left: e.leftPosition,
                                                                                    justifyContent: e.justFy,
                                                                                    flexDirection: e.direction,
                                                                                    width: e.width,
                                                                                    height: e.height,
                                                                                    color: e.color,
                                                                                    background: e.background
                                                                                }),
                                                                                class: "squre-item",
                                                                                "element-loading-background": e.background,
                                                                                key: t,
                                                                                onClick: n => Object(a["unref"])(y)(e, t)
                                                                            }, [e.direction ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", on, Object(a["toDisplayString"])(e.showInfo), 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", null, [Object(a["createElementVNode"])("i", {
                                                                                                class: Object(a["normalizeClass"])(["iconfont", e.iconShowInfo, {
                                                                                                            "squre-shouhui": d.nozzleTemp >= 180
                                                                                                        }
                                                                                                    ]),
                                                                                                style: Object(a["normalizeStyle"])({
                                                                                                    fontSize: e.size
                                                                                                })
                                                                                            }, null, 6)])], 12, an)), [[s, e.loading]])), 128)), (Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(u, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                                            style: Object(a["normalizeStyle"])({
                                                                                top: e.topPosition,
                                                                                left: e.leftPosition,
                                                                                justifyContent: e.justFy,
                                                                                flexDirection: e.direction,
                                                                                width: e.width,
                                                                                height: e.height,
                                                                                color: e.color,
                                                                                background: e.background
                                                                            }),
                                                                            class: Object(a["normalizeClass"])(["squre-item1", {
                                                                                        "squre-itemClick": 1 == e.clickFlag
                                                                                    }, e.itemClass]),
                                                                            key: t,
                                                                            onClick: t => k(e, u)
                                                                        }, [e.direction ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", cn, Object(a["toDisplayString"])(e.showInfo) + "mm", 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", null, [Object(a["createElementVNode"])("i", {
                                                                                            class: Object(a["normalizeClass"])(["iconfont", e.iconShowInfo]),
                                                                                            style: Object(a["normalizeStyle"])({
                                                                                                fontSize: e.size
                                                                                            })
                                                                                        }, null, 6)])], 14, rn))), 128)), Object(a["createElementVNode"])("div", sn, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(h, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                                                    key: t,
                                                                                    class: Object(a["normalizeClass"])(["midInnerInput"])
                                                                                }, [Object(a["createVNode"])(n, {
                                                                                            modelValue: e.firstInfo,
                                                                                            "onUpdate:modelValue": t => e.firstInfo = t,
                                                                                            readonly: e.BtnshowFlag,
                                                                                            onFocus: t => f(e),
                                                                                            onBlur: t => w(e),
                                                                                            onChange: t => v(e)
                                                                                        }, {
                                                                                            append: Object(a["withCtx"])(() => [Object(a["createElementVNode"])("span", ln, Object(a["toDisplayString"])(e.value), 1)]),
                                                                                            _: 2
                                                                                        }, 1032, ["modelValue", "onUpdate:modelValue", "readonly", "onFocus", "onBlur", "onChange"])]))), 128))])])]), Object(a["createElementVNode"])("div", dn, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(c, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                                    class: "hot_bend_item",
                                                                    key: t
                                                                }, [Object(a["createElementVNode"])("div", pn, Object(a["toDisplayString"])(e.temInfo), 1), Object(a["createElementVNode"])("div", un, [Object(a["createVNode"])(n, {
                                                                                    modelValue: e.temTarget,
                                                                                    "onUpdate:modelValue": t => e.temTarget = t,
                                                                                    onChange: t => O(e.type, e.temTarget)
                                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), Object(a["createElementVNode"])("div", hn, Object(a["toDisplayString"])("/ " + e.temNow + e.company), 1)]))), 128))]), Object(a["createElementVNode"])("div", mn, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(l, (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                                                                    class: "usb-switch",
                                                                    key: t
                                                                }, [Object(a["createElementVNode"])("div", bn, [Object(a["createElementVNode"])("span", null, Object(a["toDisplayString"])(e.temInfo), 1), Object(a["createVNode"])(o, {
                                                                                    size: "large",
                                                                                    modelValue: e.value,
                                                                                    "onUpdate:modelValue": t => e.value = t,
                                                                                    onChange: t => j(e)
                                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), Object(a["createElementVNode"])("div", gn, ["LED" !== e.sign ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("span", {
                                                                                        key: 0,
                                                                                        class: Object(a["normalizeClass"])({
                                                                                            rotation: e.value
                                                                                        })
                                                                                    }, [Object(a["createElementVNode"])("i", {
                                                                                                class: "iconfont",
                                                                                                style: Object(a["normalizeStyle"])({
                                                                                                    color: e.value ? "#00A3FF" : "#CBCBCC"
                                                                                                })
                                                                                            }, "", 4)], 2)) : Object(a["createCommentVNode"])("", !0), "LED" === e.sign ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("span", fn, [Object(a["createElementVNode"])("i", {
                                                                                                class: "iconfont",
                                                                                                style: Object(a["normalizeStyle"])({
                                                                                                    color: e.value ? "#00A3FF" : "#CBCBCC"
                                                                                                })
                                                                                            }, "", 4)])) : Object(a["createCommentVNode"])("", !0), "LED" !== e.sign ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", wn, [Object(a["createTextVNode"])(Object(a["toDisplayString"])(Object(a["unref"])(r)("moveControl.windSpeed")) + ": ", 1), Object(a["createElementVNode"])("span", null, Object(a["toDisplayString"])(e.speedNum) + "%", 1)])) : Object(a["createCommentVNode"])("", !0)]), e.value && "LED" !== e.sign ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", vn, [Object(a["createElementVNode"])("div", xn, [Object(a["createVNode"])(i, {
                                                                                                modelValue: e.speedNum,
                                                                                                "onUpdate:modelValue": t => e.speedNum = t,
                                                                                                onChange: t => x(t, e.sign)
                                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])])])) : Object(a["createCommentVNode"])("", !0)]))), 128))])], 512), [[a["vShow"], d.foldFlag]])], 2)
                }
            }
        };
        n("52e4");
        const On = S()(jn, [["__scopeId", "data-v-0f9f9936"]]);
        var yn = On;
        const kn = {
            class: "home-main"
        },
        Mn = {
            class: "leftComponent"
        },
        Cn = {
            class: "rightComponent"
        };
        var _n = {
            __name: "index",
            setup(e) {
                return (e, t) => (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", kn, [Object(a["createElementVNode"])("div", Mn, [Object(a["createVNode"])(et), Object(a["createVNode"])(Object(a["unref"])(yn)), Object(a["createVNode"])(FilamentSettingComp), Object(a["createVNode"])(Pt), Object(a["createVNode"])(re)]), Object(a["createElementVNode"])("div", Cn, [Object(a["createVNode"])(Xt), Object(a["createVNode"])(ft), Object(a["createVNode"])(xe), Object(a["createVNode"])(Level2DTableComp)])]))
            }
        };
        n("2437");
        const Sn = S()(_n, [["__scopeId", "data-v-5c8c4010"]]);
        var Fn = Sn;
        const zn = [{
                path: "/",
                name: "layout",
                redirect: "/home",
                component: z,
                children: [{
                        path: "/home",
                        name: "Home",
                        component: Fn
                    }
                ]
            }
        ],
        En = Object(u["b"])(),
        Tn = Object(u["a"])({
            history: En,
            routes: zn
        });
        var In = Tn,
        Nn = n("c3a1"),
        Bn = (n("7437"), n("22b4")),
        Pn = n("3b8f"),
        Vn = n("4cb5"),
        An = n("3620"),
        Rn = n("9394"),
        Dn = n("ff32"),
        qn = n("2da7"),
        Un = n("4b2a"),
        Zn = n("5e81"),
        Hn = n("e600"),
        Wn = n("abd2"),
        Ln = n("ee29"),
        Xn = n("c55a"),
        Yn = n("f95e"),
        $n = n("3bad"),
        Gn = n("218f");
        Bn["a"]([Rn["a"], Dn["a"], qn["a"], Un["a"], Zn["a"], Hn["a"], Vn["a"], Ln["a"], Xn["a"], Yn["a"], An["a"], Wn["a"], $n["a"], Gn["a"]]);
        var Jn = Pn,
        Qn = {
            configuration: {
				sureThat: "확인",
				resetIt: "재부팅",
				sureInfo: "확인",
				cancel: "취소",
				closeWarn: "웹소켓 서비스가 종료되었습니다!",
				guiweiPrint: "먼저 프린터를 리셋해주세요!",
				allIt: "전체",
				assetDi: "장치가 범위를 벗어났습니다!",
				crealityPrint: "Creality Print",
				resetFuwu: "현재 기기를 재부팅 하시겠습니까?",
				Tips: "알림",
				resetSuccess: "재부팅 성공!",
				quxiao: "취소됨",
				paichuSuccess: "제외 성공!",
				surePaichu: "선택한 모델을 제외하시겠습니까?",
				paichuObject: "객체 제외",
				paichuguol: "해당 객체가 제외되었습니다!"
			},
			FileManage: {
				file: "파일명: ",
				layer: "레이어: ",
				insert: "업로드",
				files: "파일",
				fileName: "파일 이름",
				fileSize: "파일 크기",
				layerHeight: "레이어",
				time: "시간",
				hcLehgth: "사용량",
				name: "이름",
				status: "상태",
				noFinish: "미완료",
				finish: "완료",
				startTime: "시작 시간",
				endTime: "종료 시간",
				allTime: "총 소요 시간",
				size: "크기",
				historyRecord: "기록",
				startPrint: "출력 시작",
				deleteFile: "파일 삭제",
				deleteSuccess: "삭제 성공!",
				calcelDelete: "삭제 취소",
				newName: "이름 변경",
				inputFilename: "파일 이름을 입력하세요",
				fileNameNull: "파일 이름은 비어 있을 수 없습니다!",
				newNameScuess: "이름 변경 성공!",
				newNameCancel: "이름 변경 취소",
				sureDelete: "이 파일을 삭제하시겠습니까?",
				homeTips: "출력을 시작하기 전에 프린터를 홈 위치로 이동하세요!",
				gcodeSilceTips: "Gcode 파일을 불러와 주세요!",
				samePrinting: "현재 출력 중입니다. 출력 완료 후 불러오세요",
				insertSuccess: "업로드 성공",
				uploadFailed: "업로드 실패"
			},
			moveControl: {
				infoControl: "제어",
				printSpeed: "출력 속도: ",
				windSpeed: "팬 속도",
				modelFengshan: "모델 팬",
				qiangtiFengshan: "후면 팬",
				fuzhuFengshan: "측면 팬",
				lFengshan: "LED 조명",
				haomi: "밀리미터",
				jichuDistence: "압출 거리",
				jichuSpeed: "압출 속도",
				haomiMiao: "mm/초",
				printWarning: "출력 중에는 기기 조작이 불가능합니다!",
				shuruMubiao: "목표 값을 다시 입력하세요!"
			},
			printStatus: {
				pause: "일시정지",
				goOn: "재개",
				off: "정지",
				cancel: "취소",
				gcodePre: "Gcode 미리보기 이미지",
				printTime: "출력 시간: ",
				lastTime: "남은 시간: ",
				printPause: "출력 중지됨",
				printing: "출력 중",
				printOver: "출력 완료",
				printFail: "출력 실패",
				printOvers: "출력 중단",
				printStay: "일시정지됨",
				notTestMaterial: "재료 감지 안됨",
				stopUnexpect: "이전에 비정상 종료된 파일 감지"
			},
			cameraModule: {
				cameraShow: "모니터링",
				pleaseCheck: "확인하세요",
				printAsset: "프린터 카메라 장치가 정상 작동하는지 확인하세요."
			},
			temperatureControl: {
				temp: "온도",
				progrems: "항목",
				nows: "현재",
				goals: "목표",
				penzui: "노즐",
				hotBed: "히트베드",
				temFanwei: "온도 범위가 올바르지 않습니다"
			},
			wangchuang: {
				name: "베드 메쉬",
				delete: "베드 메쉬 데이터 삭제",
				showBed: "베드 레벨 표시"
			},
			filamentsetting:{
				title: "필라멘트 설정",
				feed: "삽입",
				retract: "배출",
			},
            errorMessage: {
				printNoReady: "프린터가 준비되지 않았습니다. Klippy 호스트가 연결 중입니다. 잠시 후 다시 시도하세요.",
				chuanganqi: "BLTouch 센서 상태 확인 실패!",
				paramsNOuse: "display_template 파라미터가 잘못되었습니다",
				weizhizu: "알 수 없는 display_data 그룹",
				wuxiaozi: "잘못된 문자가 포함된 라인:",
				zixing: "문자",
				buzhengque: "잘못된 라인",
				bufenmingc: "파트 이름",
				wuxiao: "유효하지 않음",
				yinjiao: "hd44780의 모든 핀은 동일한 MCU에 있어야 합니다",
				chouxiang: "MenuContainer는 직접 생성할 수 없습니다",
				caidanxiang: "메뉴 항목",
				bujieshou: "허용되지 않음!",
				wrongType: "잘못된 타입, MenuContainer여야 합니다",
				select: "옵션",
				myChose: "선택",
				notUseSelect: "유효하지 않은 선택입니다",
				weizhicai: "알 수 없는 메뉴 항목",
				wujiexi: "encoder_pins를 분석할 수 없습니다",
				tongMcu: "SPI 핀은 동일한 MCU에 있어야 합니다",
				ceshizhi: "adxl345 측정값을 찾을 수 없습니다",
				wanggewai: "bed_mesh 오류: fade_target이 Z 범위를 벗어났습니다. 최소값:",
				zuidazhi: "최대값:",
				zuixiaozhi: "최소값",
				fade_target: "fade_target:",
				wangge2: "bed_mesh 오류: 메쉬가 fade 범위를 벗어났습니다. fade_start와 fade_end 설정을 확인하세요. 거리:",
				wanggexiao: "그리드 최소값:",
				wanggezuida: "그리드 최대값:",
				wanggeshuiping: "그리드 수평 보정 중 오류 발생",
				dicengtan: "베드가 감지되지 않았습니다",
				meijiazai: "메쉬가 로드되지 않았습니다",
				shengzuobiao: "bed_mesh: 손상된 영역 좌표 생성 실패",
				sancicacao: "프로브 포인트가 4개 미만이어서 보간 방식이 변경되었습니다",
				bupipei: "bed_mesh: 포인트 불일치",
				probed: "측정값:",
				ycontrol: "bed_mesh: y 제어 포인트 오류",
				guiling: "먼저 홈(0점) 이동 필요:",
				Chaofanwei: "범위 초과:",
				yidongchang: "압출 이동 거리 초과:",
				mmvs: "mm vs",
				xiangxinxi: "\nmax_extrude_only_distance 설정을 확인하세요",
				jiemianxuanx: "베드 메쉬 옵션",
				bixuyou: "최소 필요 개수:",
				dezuida: "최대값은 다음과 같아야 합니다",
				fenxican: "파라미터 분석 실패",
				canshu: "파라미터",
				dezuixiaob: "최소값은 다음과 같아야 합니다",
				dezuidab: "최대값은 다음과 같아야 합니다",
				shangcuo: "오류",
				shangcuo1: "오류: 누락됨",
				shangcuo2: "오류: 다음을 포함해야 함",
				bidayu: "보다 커야 합니다",
				bixiaoyu: "보다 작아야 합니다",
				weizhimeib: "경고: 위치 변화 없음 (스텝 해상도 제한)",
				tanshibai: "수동 프로빙 실패! TESTZ로 위치 조정 후 ACCEPT 실행",
				xunidian: "가상 프로브는 엔드스톱으로만 사용됩니다",
				duanzhidian: "가상 엔드스톱 설정 실패",
				yidongpenzui: "G-code 비활성화 중 노즐 이동 감지됨",
				deltadayin: "Delta 보정은 Delta 프린터에서만 가능합니다",
				celiangzhi: "측정값이 부족합니다",
				jibenjioazhun: "DELTA_CALIBRATE 먼저 실행해야 합니다",
				bixuyou1: "필수 값",
				gezhi: "값 필요",
				jiaozhunW: "알 수 없는 보정 작업",
				dostaryun: "Dotstar 핀은 동일 MCU에 있어야 합니다",
				tongjixin: "스테퍼 통계 사용 불가",
				bujinqi: "스테퍼 없음 (한 번 이상 홈 필요)",
				weizhiHong: "알 수 없는 gcode 변수",
				wufajiang: "전송 실패",
				wenzixi: "텍스트로 분석",
				zhidingbian: "G-Code 변환이 이미 지정됨",
				zhongsuwuxiao: "속도 값이 잘못되었습니다",
				wufafenxi: "이동 분석 실패",
				weizhig: "알 수 없는 gcode 상태",
				fenwuxiao: "HTU21D 해상도 값이 잘못됨",
				replicape: "Replicape는 해당 핀 타입을 지원하지 않음",
				jingtaiyin: "정적 핀은 비활성화할 수 없습니다",
				fanzhuanyin: "Replicape 핀 반전 불가",
				pwnxin: "PWM 칩 인식 실패",
				weizhipin: "알 수 없는 핀",
				offetxiao: "z_offset 최소값 오류",
				jiuzheng: "문제 해결 후 'reboot' 명령으로 재시작하세요. 프린터 중지됨",
				wufenxi: "옵션 분석 실패",
				weizhunbei: "프린터 준비되지 않음",
				bianliangwen: "변수 파일 분석 실패",
				baobianl: "변수 저장 실패",
				mcngui: "멀티 MCU에서 공유 축 홈 지원 안됨",
				guanjizhi: "핀 시작값과 종료값이 동일해야 함",
				chishida: "핀 최대 지속시간이 너무 큼",
				ruanpwn: "소프트 PWM 종료값은 0.0 또는 1.0이어야 함",
				zhouqida: "PWM 주기가 너무 큼",
				wait: "대기 중",
				xiangyingcao: "응답 시간 초과",
				chongqimcm: "MCU 재시작 시도",
				fail: "실패",
				mcu: "MCU",
				CRCpei: "CRC 설정 불일치",
				cajiao: "핀",
				feiMcu: "MCU 아님",
				gengMcn: "MCU 업데이트 실패",
				wupeiM: "MCU 설정 실패",
				peiqiM: "MCU 설정 중 오류",
				chucuo1: "오류:",
				zipeishi: "MCU 자동 재시작 실패",
				keyishao: "MCU 처리 가능한 동작 부족",
				buzhiyin: "지원되지 않는 핀 타입",
				zhougewu: "축 형식 오류",
				wufenzhou: "축 방향 분석 실패",
				buzhishu: "지원되지 않는 출력",
				jinreson: "resonances 또는 raw_data만 지원",
                weizhishu: "출력이 지정되지 않았습니다. output 파라미터에 resonances 또는 raw_data 중 하나 이상을 설정해야 합니다",
				zhoujiashu: "-축 가속도계에서 측정된 데이터가 없습니다",
				xiangleiy: "응답 타입",
				wuxiaob: "유효하지 않음. echo, command 또는 error 중 하나여야 합니다",
				bixuz: "MCU에 설정되어야 합니다",
				shangzhid: "상위 지정",
				Weizhi: "알 수 없음",
				yuanjisuan: "원격 계산 오류:",
				chujiashu: "가속도계 데이터 처리",
				shineicuo: "내부 오류 발생",
				xiewenj: "파일로 저장",
				shicucuo: "오류 발생:",
				pingst: "skew_correction: plane[",
				tiaomug: "] 항목 형식이 잘못되었습니다\n",

				lengduanfan: "Max31856: 냉접점 범위 오류. 문제를 해결한 후 'FIRMWARE_RESTART' 명령으로 펌웨어를 재시작하세요. 프린터가 중지되었습니다",
				reoufan: "Max31856: 열전대 범위 오류. 문제 해결 후 'FIRMWARE_RESTART'로 재시작하세요. 프린터가 중지되었습니다",
				lengduangao: "Max31856: 냉접점 온도 과다. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 전원 꺼짐",
				lengthduandi: "Max31856: 냉접점 온도 부족. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 전원 꺼짐",
				reougao: "Max31856: 열전대 온도 과다. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				reouDi: "Max31856: 열전대 온도 부족. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				guodianya: "Max31856: 과전압/저전압 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				reoukailu: "Max31856: 열전대 단선 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",

				kailu: "Max31855: 회로 단선 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				duididuan: "Max31855: 접지 단락 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				vcduan: "Max31855: Vcc 단락 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",

				sheIDw: "Max6675: 장치 ID 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				redianoukai: "Max6675: 열전대 단선 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",

				Shuruduan: "Max31865: RTD 입력 단선. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 전원 꺼짐",
				rtdduanlu: "Max31865: RTD 입력 단락. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",
				daqiagkai: "Max31865: VREF 과다 (0.85*VBIAS 초과). 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 전원 꺼짐",
				xiaoqiangkai: "Max31865: VREF 부족 (0.85*VBIAS 미만). 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 전원 꺼짐",
				weizhid: "Max31865: 알 수 없는 오류. 문제 해결 후 'FIRMWARE_RESTART' 실행. 프린터 중지됨",

				xuanxiang: "옵션",
				zaijie: "진행 중",
				bixudi: "필수 항목입니다",
				baojietou: "이 파일에는 섹션 헤더가 없습니다",
				jiuzhengwen: "\n문제 해결 후 RESTART 명령으로 설정을 다시 로드하고 호스트를 재시작하세요.\n프린터 중지됨",
				wenjianjie: "파일 파싱 오류:",
				chongjiapei: "\n문제 해결 후 RESTART 명령으로 설정을 다시 로드하세요.\n프린터 중지됨",

				dianjiyi: "모터 드라이버 이상",
				neibvucuo: "내부 오류",
				tongxunyi: "통신 오류",
				yuqijia: "예상대로 가열되지 않음",
				rechuangyi: "히트베드 온도 이상",
				jichuyi: "익스트루더 이상",
				dayinyi: "출력 파일 좌표 이상",
				dayinzhi: "출력 품질 문제 감지로 일시정지됨",
				weizhicuo: "알 수 없는 출력 오류",
				wenqiangyi: "챔버 온도 이상",
				dayinwenyi: "출력 파일 좌표 이상",
				zhenwenyou: "진동 보정 센서 이상",
				fenshanyi: "팬 이상",
				wangluoyi: "네트워크 오류",
				dayinzhi1: "출력 품질 문제 감지",
				ztouchyi: "Z-Touch 오류 발생, 다시 시도하세요",
				wenfuyi: "파일 복사 오류, 다시 시도하세요",
				weizhiyi: "알 수 없는 오류",
				yidongcuo: "축 이동 오류",
				dayinjiuyu: "프린터가 준비되지 않았습니다. Klippy가 연결 중입니다. 잠시 후 다시 시도하세요"
            }
        },
        Kn = {
            configuration: {
                sureThat: "confirm",
                resetIt: "reboot",
                sureInfo: "Sure",
                cancel: "Cancel",
                closeWarn: "The websocket service is closed!",
                guiweiPrint: "Please reset the printer first!",
                allIt: "whole",
                assetDi: "The device is out of range!",
                crealityPrint: "Creality Print",
                resetFuwu: "Are you sure to restart the current service?",
                Tips: "Point Out",
                resetSuccess: "restart successfully!",
                quxiao: "Cancelled",
                paichuSuccess: "Exclusion succeeded!",
                surePaichu: "Whether to exclude selected models?",
                paichuObject: "Exclude object",
                paichuguol: "This object is excluded!"
            },
            FileManage: {
				file: "File: ",
				layer: "Layer: ",
                insert: "Import",
                files: "File",
                fileName: "File Name",
                fileSize: "File Size",
                layerHeight: "Storey",
                time: "Time",
                hcLehgth: "Consumable",
                name: "Name",
                status: "status",
                noFinish: "not finished",
                finish: "finished",
                startTime: "start time",
                endTime: "end time",
                allTime: "Total duration",
                size: "Size",
                historyRecord: "History",
                startPrint: "Start printing",
                deleteFile: "Delete File",
                deleteSuccess: "Delete succeeded!",
                calcelDelete: "Cancel Delete",
                newName: "rename",
                inputFilename: "Please enter a file name",
                fileNameNull: "File name cannot be empty!",
                newNameScuess: "Rename succeeded!",
                newNameCancel: "Rename Cancel",
                sureDelete: "Are you sure you want to delete this file?",
                homeTips: "Please return to the printer before starting the printing operation!",
                gcodeSilceTips: "Please import a Gcode slice file!",
                samePrinting: "The file is being printed, please import after printing",
                insertSuccess: "Import succeeded",
                uploadFailed: "Import failed"
            },
            moveControl: {
                infoControl: "Control",
                printSpeed: "Printing speed: ",
                windSpeed: "wind speed",
                modelFengshan: "Model fan",
                qiangtiFengshan: "Back fan",
                fuzhuFengshan: "Side fan",
                lFengshan: "LED light",
                haomi: "millimetre",
                jichuDistence: "Extrusion distance",
                jichuSpeed: "Extrusion speed",
                haomiMiao: "Mm/sec",
                printWarning: "The printing status does not allow machine operation!",
                shuruMubiao: "Please re-enter the target value!"
            },
            printStatus: {
                pause: "Pause",
                goOn: "continue",
                off: "stop",
                cancel: "cancel",
                gcodePre: "Gcode preview image",
                printTime: "Printing time: ",
                lastTime: "Remaining: ",
                printPause: "Printing stopped",
                printing: "Printing",
                printOver: "printing complete",
                printFail: "Printing failed",
                printOvers: "print abort",
                printStay: "Printing Paused",
                notTestMaterial: "Consumable not detected",
                stopUnexpect: "Detects the last unexpectedly stopped file"
            },
            cameraModule: {
                cameraShow: "Monitoring",
                pleaseCheck: "Please check",
                printAsset: "Does the printer camera device work properly."
            },
            temperatureControl: {
                temp: "Temperature",
                progrems: "Item",
                nows: "Current",
                goals: "Target",
                penzui: "Nozzle",
                hotBed: "HotBed",
                temFanwei: "The temperature range is unreasonable"
            },
            wangchuang: {
                name: "Bed mesh",
                delete : "Clear bednet data",
                showBed: "Show bed level"
            },
			filamentsetting:{
				title: "Filament Setting",
				feed: "Feed",
				retract: "Retract",
			},
            errorMessage: {
                printNoReady: "The printer is not ready, the Klippy host is trying to connect, please try again later!",
                chuanganqi: "BLTouch failed to verify sensor status!",
                paramsNOuse: "The parameter of display_template is invalid",
                weizhizu: "Unknown display_data group",
                wuxiaozi: "The invalid glyph line is in",
                zixing: "zixing",
                buzhengque: "Incorrect line",
                bufenmingc: "Part Name",
                wuxiao: "Invalid",
                yinjiao: "All pins of hd44780 must be on the same MCU",
                chouxiang: "Abstract MenuContainer cannot be instantiated directly",
                caidanxiang: "menu item",
                bujieshou: "Not accepted!",
                wrongType: "Wrong type, should be MenuContainer",
                select: "Options",
                myChose: "Choose",
                notUseSelect: "Not a valid selection",
                weizhicai: "Unknown menu item",
                wujiexi: "Unable to parse encoder_pins",
                tongMcu: "spi pins must be on the same MCU",
                ceshizhi: "The measured value of adxl345 was not found",
                wanggewai: "bed_mesh: error, fade_target is outside the grid Z range\nminimum value",
                zuidazhi: "Maximum value:",
                zuixiaozhi: "Minimum value",
                fade_target: "fade_target:",
                wangge2: "bed_mesh: The mesh is beyond the fade range, please refer to the fade_start and fade_end options of example-extras.cfg. Fade distance: ",
                wanggexiao: "Grid Minimum:",
                wanggezuida: "Grid Maximum:",
                wanggeshuiping: "Grid horizontal adjustment: Error when splitting and moving",
                dicengtan: "The bed has not been detected",
                meijiazai: "Mesh not loaded to offset",
                shengzuobiao: "bed_mesh: Unable to generate coordinates for the faulty area at the index.",
                sancicacao: "bed_mesh: Bicubic interpolation detected with probe counts less than 4 points. Forced Lagrangian interpolation. Configured probe counts:",
                bupipei: "bed_mesh: points do not match, orig = (",
                probed: "), probed = ",
                ycontrol: "bed_mesh: Error finding y control points",
                guiling: "Return to zero first:",
                Chaofanwei: "Out of range: [",
                yidongchang: "Extrusion only moves too long (",
                mmvs: "mm vs",
                xiangxinxi: "\nSee the max_extrude_only_distance configuration option`",
                jiemianxuanx: "Options in Sectional Bed Mesh",
                bixuyou: "Must have at least",
                dezuida: "The maximum value must be",
                fenxican: "Unable to parse parameter",
                canshu: "Parameters",
                dezuixiaob: "The minimum value must be",
                dezuidab: "The maximum value must be",
                shangcuo: "The above error",
                shangcuo1: "Error on: Missing",
                shangcuo2: "The above error: must have",
                bidayu: "Must be greater than",
                bixiaoyu: "Must be less than",
                weizhimeib: "Warning: No change in position (stepping resolution reached)",
                tanshibai: "Manual probing failed! Use the TESTZ command to position the nozzle before running ACCEPT.",
                xunidian: "Probe virtual endpoints are only used as endpoint pins",
                duanzhidian: "Unable to pull up/reverse probe virtual end stop",
                yidongpenzui: "Detect nozzles moving during deactivation of gcode script",
                deltadayin: "Delta calibrate is only available for Delta printers",
                celiangzhi: "Not all measurements are provided",
                jibenjioazhun: "Must first run basic calibration with DELTA_CALIBRATE",
                bixuyou1: "must have",
                gezhi: "a value",
                jiaozhunW: "Unknown Calibration Operation",
                dostaryun: "Dotstar pins must be on the same mcu",
                tongjixin: "Stepper statistics are not available",
                bujinqi: "No stepper found. (Make sure to zero it at least once.)",
                weizhiHong: "Unknown gcode macro variable",
                wufajiang: "Unable to transfer",
                wenzixi: "Analyze as text",
                zhidingbian: "G-Code movement transformation has been specified",
                zhongsuwuxiao: "The speed in is invalid",
                wufafenxi: "Unable to analyze movement",
                weizhig: "Unknown gcode status:",
                fenwuxiao: "The HTU21D resolution is invalid. The valid value is",
                replicape: "replicape does not support Pin type",
                jingtaiyin: "Static pins cannot be turned off",
                fanzhuanyin: "Cannot reverse Replicape virtual enable pin",
                pwnxin: "Replicape cannot determine the pwm chip",
                weizhipin: "Unknown replicape pin",
                offetxiao: "Error on touch: must have a minimum value of z_offset",
                jiuzheng: "\nOnce the underlying problem has been corrected, use the 'reboot'\ncommand to reload the configuration and restart the host software.\nPrinter stopped",
                wufenxi: "Unable to analyze options",
                weizhunbei: "The printer is not ready",
                bianliangwen: "Unable to parse existing variable file",
                baobianl: "Unable to save variables",
                mcngui: "Multi-mcu homing is not supported on multi-mcu shared axes",
                jingyin: "Static pins cannot be turned off",
                guanjizhi: "The starting value of the pin with the maximum duration must be equal to the shutdown value",
                chishida: "The maximum duration of the digital pin is too large",
                ruanpwn: "shutdown on soft pwm must be 0.0 or 1.0",
                zhouqida: "PWM pin cycle time is too large",
                zhouqidad: "PWM cycle time is too large",
                wait: "Wait",
                xiangyingcao: "Response timed out",
                chongqimcm: "Try to restart the MCU",
                fail: "Failure",
                mcu: "MCU",
                CRCpei: "CRC does not match configuration",
                cajiao: "Pin",
                feiMcu: "not mcu",
                chajiaom: "Valid pin names on",
                gengMcn: "Unable to update MCU",
                peizhi: "Configuration, because it is closed",
                wupeiM: "Unable to configure MCU",
                peiqiM: "MCU during configuration",
                chucuo1: "Error: ",
                zipeishi: "MCU automatic reset failed",
                keyishao: "There are too few moves available on the MCU",
                buzhiyin: "mcu does not support pin type",
                zhougewu: "The axis format is invalid",
                wufenzhou: "Unable to analyze axis direction",
                buzhishu: "Unsupported output",
                jinreson: ", only supports resonances and raw_data",
                weizhishu: "No output specified, at least one resonances and raw_data must be set in the output parameters",
                zhoujiashu: "No data was measured by the -axis accelerometer",
                xiangleiy: "Response Type",
                wuxiaob: "Invalid. Must be one of echo, command or error",
                bixuz: "must be in mcu",
                shangzhid: "Up Designated",
                Weizhi: "Unknown",
                yuanjisuan: "Remote calculation error:",
                chujiashu: "Process accelerometer data",
                shineicuo: "An internal error occurred",
                xiewenj: "Write to file",
                shicucuo: "An error occurred:",
                pingst: "skew_correction: plane[",
                tiaomug: "The entry format of] is incorrect\n",
                lengduanfan: "Max31856: Cold Junction Range Fault, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                reoufan: "Max31856: Thermocouple range failure, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                lengduangao: "Max31856: Cold Junction High Fault, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. Printer is off",
                lengthduandi: "Max31856: Cold Junction Low Fault, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. Printer is off",
                reougao: "Max31856: Thermocouple High Fault, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                reouDi: "Max31856: Thermocouple Low Fault, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                guodianya: "Max31856: Overvoltage/Undervoltage fault, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                reoukailu: "Max31856: Open thermocouple failure, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                kailu: "Max31855: Open circuit failure, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                duididuan: "Max31855: Short to ground, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                vcduan: "Max31855: Short to Vcc, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                sheIDw: "Max6675: Wrong device ID, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                redianoukai: "Max6675: Open thermocouple failure, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                Shuruduan: "Max31865 RTD input disconnected, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. Printer is off",
                rtdduanlu: "Max31865 RTD input shorted, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                daqiagkai: "Max31865 VREF - Greater than 0.85*VBIAS, FORCED - ON, Once the underlying problem is corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. Printer is off",
                xiaoqiangkai: "`Max31865 VREF - less than 0.85*VBIAS, force-on, once the underlying problem is corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer is turned off",
                weizhid: "Max31865 Unspecified error, once the underlying problem has been corrected, use the 'FIRMWARE_RESTART' command to reset the firmware, reload the configuration, and restart the host software. The printer has shut down",
                xuanxiang: "Options",
                zaijie: "in festival",
                bixudi: "It is a must",
                baojietou: "This file does not contain a section header.",
                jiuzhengwen: " \nAfter correcting the underlying problem, use the RESTART\ncommand to reload the configuration and restart the host software.\nPrinter stopped",
                wenjianjie: "The file contains a parsing error:",
                chongjiapei: "\nAfter correcting the underlying problem, use the RESTART\ncommand to reload the configuration and restart the host software.\nThe printer stops",
                dianjiyi: "The motor drive is abnormal",
                neibvucuo: "Internal error",
                tongxunyi: "communication abnormal",
                yuqijia: "Not heated as expected",
                rechuangyi: "The temperature of the hot bed is abnormal",
                jichuyi: "The extruder is abnormal",
                dayinyi: "Print file coordinates are abnormal",
                dayinzhi: "Print quality problems detected and printing paused",
                weizhicuo: "An unknown printing error has been detected",
                wenqiangyi: "The chamber temperature is abnormal",
                dayinwenyi: "Print file coordinates are abnormal",
                zhenwenyou: "The vibration optimization sensor is abnormal",
                fenshanyi: "The fan is abnormal",
                wangluoyi: "Network exception",
                dayinzhi1: "Print quality problem detected",
                ztouchyi: "A z-Touch error has been detected, please try again",
                wenfuyi: "File copy error, please try again",
                weizhiyi: "Unknown exception",
                yidongcuo: "Move axis error",
                dayinjiuyu: "The printer is not ready, the Klippy host is trying to connect, please try again later"
            }
        };
        const ea = {
            zh: {
                ...Qn
            },
            en: {
                ...Kn
            }
        },
        ta = Object(g["a"])({
            legacy: !1,
            globalInjection: !0,
            locale: "zh",
            messages: ea
        });
        var na = ta,
        aa = (n("c2b1"), n("9b6e"), n("ade3"));
        n("d9e2");
        class oa {
            constructor() {
                Object(aa["a"])(this, "events", {})
            }
            on(e, t) {
                return this.checkHandler(e, t),
                this.has(e) || (this.events[e] = []),
                this.events[e].push(t),
                this
            }
            emit(e, t) {
                return this.has(e) && this.runHandler(e, t),
                this
            }
            un(e, t) {
                return this.unHandler(e, t),
                this
            }
            once(e, t) {
                this.checkHandler(e, t);
                const n = (...a) => (this.un(e, n), t(...a));
                return this.on(e, n),
                this
            }
            clear() {
                return this.events = {},
                this
            }
            has(e) {
                return !!this.events[e]
            }
            handlerLength(e) {
                var t,
                n;
                return null !== (t = null === (n = this.events[e]) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
            }
            watch(e, t) {
                this.checkHandler(e, t);
                const n = (...n) => {
                    this.emit(this.prefixStr(e), t(...n))
                };
                return this.on(e, n),
                this
            }
            invoke(e, t) {
                return new Promise(n => {
                    this.once(this.prefixStr(e), n),
                    this.emit(e, t)
                })
            }
            runHandler(e, t) {
                for (let n = 0; n < this.events[e].length; n++)
                    this.events[e][n] && this.events[e][n](t)
            }
            unHandler(e, t) {
                !t && (this.events[e] = []),
                t && this.checkHandler(e, t);
                for (let n = 0; n < this.events[e].length; n++)
                    this.events[e][n] && this.events[e][n] === t && (this.events[e][n] = null)
            }
            prefixStr(e) {
                return "@" + e
            }
            checkHandler(e, t) {
                if (0 === (null === e || void 0 === e ? void 0 : e.length))
                    throw new Error("type.length can not be 0");
                if (!t || !e)
                    throw new ReferenceError("type or handler is not defined");
                if ("function" !== typeof t || "string" !== typeof e)
                    throw new TypeError(`${t} is not a function or ${e} is not a string`)
            }
            static Instance(e) {
                return e._instance || Object.defineProperty(e, "_instance", {
                    value: new e
                }),
                e._instance
            }
        }
        const ra = oa.Instance(oa);
        const ia = {
            MSG: "message",
            HEART_BEAT: "heart_beat"
        },
        ca = {
            time: 5e3,
            timeout: 1e3,
            reconnect: 5e3
        },
        sa = !0;
        class la extends WebSocket {
            constructor() {
				const params = new URLSearchParams(window.location.search);
				const ip = params.get("ip");

				super(`ws://${ip}:9999`);

				this.init();
			}
            init() {
				this.onopen = this.openHandler,
				this.onclose = this.closeHandler,
				this.onmessage = this.getMsg,
				this.onerror = this.errorHandler,
				setTimeout(()=>ra.emit("websocket_open",this.readyState),300),
				this.heartBeat = ca,
				this.isReconnect = sa,
				this.reconnectTimer = null,
				this.waitingTimer = null,
				this.heartTimer = null,
				this.webSocketState = !1
			}
            openHandler() {
                this.webSocketState = !0,
                this.heartBeat && this.heartBeat.time && this.startHeartBeat(this.heartBeat.time),
                ra.emit("websocket_open", this.readyState)
            }
            getMsg(e) {
                let t = e.data;
                this.webSocketState = !0,
                ra.emit("message_change", t)
            }
            closeHandler() {
                this.webSocketState = !1
            }
            errorHandler() {
                this.webSocketState = !1,
                this.reconnectWebSocket(),
                console.log("The WebSocket service was detected to be in an error state: no connection, invalid backend service port, or does not exist.")
            }
            sendMsg(e) {
                try {
                    this.send(JSON.stringify(e))
                } catch (t) {
                    ra.emit("socket_close", "Failed")
                }
            }
            startHeartBeat(e) {
                this.heartTimer = setTimeout(() => {
                    this.sendMsg({
                        ModeCode: ia.HEART_BEAT,
                        msg: new Date
                    }),
                    this.waitingTimer = this.waitingServer(),
                    console.log("Heartbeat interval : ", this.waitingTimer)
                }, e)
            }
            waitingServer() {
                return this.webSocketState = !1,
                setTimeout(() => {
                    if (this.webSocketState)
                        return this.startHeartBeat(this.heartBeat.time)
                }, this.heartBeat.timeout)
            }
            reconnectWebSocket() {
                if (this.isReconnect)
                    return setTimeout(() => {
                        ra.emit("reconnect")
                    }, this.heartBeat.reconnect)
            }
            clearTimer() {
                clearTimeout(this.reconnectTimer),
                clearTimeout(this.heartTimer)
            }
            clear(e = !1) {
                this.isReconnect = e,
                this.clearTimer(),
                this.close()
            }
        }
        n.e("chunk-2d0db81a").then(n.t.bind(null, "6fc7", 7));
        const da = Object(a["createApp"])(p);
        let pa;
        const ua = location.hostname;
        function ha() {
            pa && (pa.clear(), pa = null),
            pa = new la(`wss://${ua}:9999`),
            pa.init()
        }
        ha(),
        ra.on("reconnect", () => {
            ha()
        }),
        da.use(na),
        da.use(In),
        da.use(Object(o["a"])()),
        da.use(Nn["a"]),
        da.use(Jn),
        da.config.globalProperties.$echarts = Jn,
        da.config.globalProperties.$webSocket = pa,
        da.config.globalProperties.$messageCenter = ra,
        da.config.globalProperties.$ip = ua,
        da.mount("#app")
    },
    "63ba": function (e, t, n) {
        var a = n("67e1");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("dce2ff6c", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "64e3": function (e, t, n) {
        e.exports = n.p + "static/img/mylogo.dff7f1ec.png"
    },
    "67e1": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".comp-FilamentSetting[data-v-flt00001]{width:100%;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px;margin-bottom:0}.comp-FilamentSetting .fs-header[data-v-flt00001]{display:flex;align-items:center;justify-content:space-between;padding:0 14px;height:40px;background:#2d2d31;border-radius:5px 5px 0 0;cursor:pointer}.comp-FilamentSetting .fs-header .fs-title[data-v-flt00001]{font-size:13px;font-weight:700;color:#d2d2da}.comp-FilamentSetting .fs-header .fold .iconfont[data-v-flt00001]{color:#d2d2da;font-size:8px}.comp-FilamentSetting .fs-body[data-v-flt00001]{overflow:hidden;transition:height .25s ease}.comp-FilamentSetting.controlAnimal .fs-body {height: 0 !important;}.comp-FilamentSetting .filament-container-wrapper[data-v-flt00001]{padding:10px 10px 10px 10px;display:flex;flex-wrap:nowrap;overflow-x:auto}.comp-FilamentSetting .filament-container-wrapper[data-v-flt00001]{padding:10px 10px 10px 10px;display:flex;justify-content:center;overflow-x:auto}.comp-FilamentSetting .filament-wrapper[data-v-flt00001]{display:flex;align-items:flex-start;gap:6px;width:max-content}.comp-FilamentSetting .mainbox[data-v-flt00001]{display:flex;flex-direction:column;align-items:centerpadding-top: 10px;background: #28282b;border-radius: 6px;border: 1px solid #414145;color: #8c9297;font-size: 12px;}.comp-FilamentSetting .box_container[data-v-flt00001]{display:flex;flex-direction:row;gap:4px}.comp-FilamentSetting .box[data-v-flt00001]{display:flex;flex-direction:column;align-items:center;width:72px}.comp-FilamentSetting .box .title[data-v-flt00001]{display:flex;align-items:center;justify-content:center;height:28px;font-size:15px;color:#cbcbcc}.comp-FilamentSetting .box .filament[data-v-flt00001]{display:flex;justify-content:center;align-items:center;height:64px}.comp-FilamentSetting .box-circle[data-v-flt00001]{fill:#cbcbcc;stroke:#cbcbcc}.comp-FilamentSetting .box .filament_type[data-v-flt00001]{font-size:15px;color:#cbcbcc;margin-top:3px;text-align:center;width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.comp-FilamentSetting .box .filament_edit[data-v-flt00001]{font-size:11px;color:#888;cursor:pointer;margin-top:2px}.comp-FilamentSetting .box .filament_edit[data-v-flt00001]:hover{color:#1e9be2}.comp-FilamentSetting .box .current_flag[data-v-flt00001]{height:14px;display:flex;justify-content:center}.comp-FilamentSetting .btnbox[data-v-flt00001]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:4px;padding-top:28px}.comp-FilamentSetting .btnbox .btn[data-v-flt00001]{font-size:11px;color:#17cc5f;display:flex;align-items:center;gap:3px}.comp-FilamentSetting .filament-status[data-v-flt00001]{padding:6px 14px;font-size:11px;color:#cbcbcc;display:flex;align-items:center;gap:5px}.comp-FilamentSetting .filament-btn[data-v-flt00001]{display:flex;align-items:center;gap:8px;padding:6px 14px 10px}.comp-FilamentSetting .filament-btn .el-button[data-v-flt00001]{height:28px;font-size:12px;border-radius:14px;padding:0 14px}.comp-FilamentSetting .fs-spool-label[data-v-flt00001]{font-size:10px;color:#888;margin-top:2px;text-align:center}.comp-FilamentSetting .fs-box-label[data-v-flt00001]{font-size:15px;color:#1e9be2;margin-top:2px;font-weight:600;text-align:center;,.comp-FilamentSetting[data-v-flt00001] .box_container[data-v-flt00001]{justify-content:center;align-items:center}}", ""]),
        t.push([e.i, ".controlAnimal[data-v-d06bcaee]{height:40px!important}.control-main[data-v-d06bcaee]{width:100%;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px}.control-main .fold[data-v-d06bcaee]{cursor:pointer}.control-main .fold .iconfont[data-v-d06bcaee]{color:#d2d2da;font-size:8px}.control-main .head-show[data-v-d06bcaee]{width:81%}.control-main .head-show .left-feature[data-v-d06bcaee]{width:54px;padding:12px 15px;font-size:16px;font-weight:700;color:#fff}.control-main .head-show .left-feature span[data-v-d06bcaee]{padding-left:5px}.control-main .head-show .right-feature[data-v-d06bcaee]{padding:8px 15px;display:flex;justify-content:space-evenly}.control-main .head-show .right-feature .head_inner[data-v-d06bcaee]{padding:1% 0 0 1%;font-size:14px}.control-main .middleContent[data-v-d06bcaee]{width:100%;display:flex;justify-content:flex-start}.control-main .middleContent .active[data-v-d06bcaee]{background:#00a3ff}.control-main .middleContent .leftPrintshow[data-v-d06bcaee]{width:19%;padding:11px 0 0 20px}.control-main .middleContent .leftPrintshow .btn_container .el-button[data-v-d06bcaee]{width:97%;height:40px;box-shadow:0 3px 3px 0 rgba(31,31,35,.5);border-radius:5px}.control-main .middleContent .leftPrintshow .btn_container .el-button[data-v-d06bcaee]:first-child{margin-top:10px}.control-main .middleContent .rightPrintshow[data-v-d06bcaee]{width:96%;height:500px;background:#2d2d31;border-radius:5px;margin:20px;position:relative}.control-main .middleContent .rightPrintshow .flat-manual[data-v-d06bcaee]{display:flex;justify-content:center;align-items:center}.control-main .middleContent .rightPrintshow .flat-block[data-v-d06bcaee]{width:310px;height:310px;background:#2d2d31;border:1px solid #46464a;border-radius:5px}.control-main .middleContent .rightPrintshow .flat-block .row-btn[data-v-d06bcaee]{display:flex;justify-content:space-between}.control-main .middleContent .rightPrintshow .flat-block .el-button[data-v-d06bcaee]{width:103px;height:103px;border-radius:0;font-size:36px;color:#1e9be2;text-align:center;line-height:103px}.control-main .middleContent .rightPrintshow .content[data-v-d06bcaee]{width:100%;height:100%;position:relative}.control-main .middleContent .rightPrintshow .flat-auto[data-v-d06bcaee]{width:100%;height:100%}.control-main .middleContent .rightPrintshow .auto-menu[data-v-d06bcaee]{width:160px;position:absolute;right:2.5%;bottom:5%}.control-main .middleContent .rightPrintshow .auto-menu .el-checkbox[data-v-d06bcaee]{width:160px}.control-main .middleContent .rightPrintshow .auto-menu .el-checkbox[data-v-d06bcaee] .is-checked .el-checkbox__inner{background:#1e9be2}.control-main .middleContent .rightPrintshow .auto-menu .el-checkbox[data-v-d06bcaee] .el-checkbox__label{font-family:Source Han Sans CN;font-weight:500;color:#fff}.control-main .middleContent .rightPrintshow .auto-menu .el-button[data-v-d06bcaee]{width:160px}", ""]),
        e.exports = t
    },
    "6aea": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ":root{--el-color-primary:#4f4f54}.el-input{--el-input-text-color:#fff;--el-input-border:#4f4f54;--el-input-bg-color:transparent;background-color:transparent;border:1px solid var(--el-input-border);border-radius:5px}.el-input:focus-within{border:1px solid #00a3ff}.el-input:focus-within .el-input__wrapper .el-input__inner{color:#00a3ff!important}.el-input .el-input__wrapper{background-color:transparent;box-shadow:unset}.el-input .el-input-group__append{padding:0 5px;box-shadow:none;background:none;color:#a7a7a7;font-size:12px}.el-popper.is-dark{background:#37373b!important}.el-popper.is-dark .el-select-dropdown .el-select-dropdown__item{color:#fff!important}.el-popper.is-dark .el-select-dropdown .el-select-dropdown__item.hover,.el-popper.is-dark .el-select-dropdown .el-select-dropdown__item:hover{background-color:#46464a!important}.el-popper.is-dark .el-popper__arrow:before{background:#37373b!important}.el-switch{--el-switch-on-color:#144f71;--el-switch-off-color:#4f4f54}.el-switch .el-switch__core{background:#4f4f54;border-radius:16px}.el-switch .el-switch__action{background:#27272a;border-radius:13px}.el-switch.is-checked .el-switch__core .el-switch__action{background:#00a3ff}.el-button{--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:transparent;--el-button-bg-color:#515157;--el-button-text-color:#fff;--el-button-divide-border-color:hsla(0,0%,100%,0.5);--el-button-hover-text-color:#fff;--el-button-hover-bg-color:#515157;--el-button-hover-border-color:transparent;--el-button-active-text-color:#fff;--el-button-active-border-color:transparent;--el-button-active-bg-color:#00a3ff;--el-input-border-radius:5px;box-shadow:0 3px 3px 0 #303034}.el-button:hover{background:#6c6c74!important;color:#fff}.el-button:hover :deep().iconfont{color:#fff!important}.el-slider{--el-slider-main-bg-color:#144f71;--el-slider-runway-bg-color:#dadada;--el-slider-border-radius:3px;--el-slider-height:2px;--el-slider-button-size:12px;--el-slider-button-wrapper-size:36px;--el-slider-button-wrapper-offset:-18px}.el-slider .el-slider__button{border:none;background-color:#00a3ff}.el-progress .el-progress-bar__outer{background:#404044;height:2px!important}.el-progress .el-progress-bar__inner{background:#1e9be2}.el-progress .el-progress__text{font-size:10px;color:#fff}.el-table{--el-table-bg-color:transparent;--el-table-tr-bg-color:transparent;--el-table-header-bg-color:transparent;--el-table-row-hover-bg-color:unset;--el-table-border-color:#46464a;--el-table-text-color:#cbcbcc;--el-table-header-text-color:#cbcbcc}.el-table th .el-checkbox__inner,.el-table tr .el-checkbox__inner{background-color:transparent;border:1px solid #5e5e64}.el-table th .el-checkbox__input.is-checked .el-checkbox__inner,.el-table tr .el-checkbox__input.is-checked .el-checkbox__inner{background-color:#1e9be2}.el-table .el-table__inner-wrapper .el-table__body-wrapper{overflow-y: scroll !important;} .el-scrollbar .el-table__body .el-table__row:hover{background:#46464a!important;cursor:pointer}.el-table .el-table__inner-wrapper:before{left:0;bottom:0;width:100%;height:0}.el-message-box{background:#37373b;border:none}.el-message-box .el-message-box__message,.el-message-box .el-message-box__title{color:#cbcbcc}.el-message{top:20px!important;background:#29292c;border:none;box-shadow:0 3px 3px 0 #303034;max-width:600px}.el-message:not(:last-child){visibility:hidden}.el-checkbox{--el-checkbox-bg-color:transparent}.el-dialog{--el-dialog-bg-color:#37373b}.el-dialog .el-dialog__title{color:#cbcbcc}.el-popper.is-dark{background:#000}.el-popper.is-dark .el-popper__arrow:before{background:#000;border:1px solid #000}", ""]),
        e.exports = t
    },
    "781d": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".controlAnimal[data-v-e0becdc4]{height:40px!important}.control-main[data-v-e0becdc4]{width:100%;height:218px;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px}.control-main .fold[data-v-e0becdc4]{cursor:pointer}.control-main .fold .iconfont[data-v-e0becdc4]{color:#d2d2da;font-size:8px}@media screen and (max-width:1200px){.control-main .right-func .start-func[data-v-e0becdc4]{margin-right:1rem!important}.control-main .right-func .start-func button[data-v-e0becdc4]{width:3.4rem!important;height:24px;border-radius:12px;font-size:12px}.control-main .right-func .start-func button[data-v-e0becdc4]:first-child{margin-right:0!important}.control-main .right-func .start-func button .iconfont[data-v-e0becdc4]{margin-right:5px;font-size:12px;display:none}.control-main .right-func .continue-func[data-v-e0becdc4]{padding:0!important;border:none!important;margin-right:0!important}.control-main .right-func .continue-func .el-button+.el-button[data-v-e0becdc4]{margin-left:.3rem!important}.control-main .right-func .continue-func i[data-v-e0becdc4]{cursor:pointer;margin-right:.3rem!important}}.control-main .right-func[data-v-e0becdc4],.control-main .right-func .continue-func[data-v-e0becdc4]{display:flex;align-items:center;justify-content:center}.control-main .right-func .continue-func[data-v-e0becdc4]{padding:5px 10px;border-radius:10px;border:1px solid #4f4f54;margin-right:10px}.control-main .right-func .continue-func .el-button[data-v-e0becdc4]{border-radius:10px}.control-main .right-func .continue-func i[data-v-e0becdc4]{cursor:pointer;margin-right:10px}.control-main .right-func .start-func[data-v-e0becdc4]{display:flex;align-items:center;justify-content:center;margin-right:40px}.control-main .right-func .start-func button[data-v-e0becdc4]{width:100px;height:24px;border-radius:12px;font-size:12px}.control-main .right-func .start-func button[data-v-e0becdc4]:first-child{margin-right:10px}.control-main .right-func .start-func button .iconfont[data-v-e0becdc4]{margin-right:5px;font-size:12px}@media screen and (max-width:1200px){.control-main .containMain .middleContent[data-v-e0becdc4]{width:92%!important}}.control-main .containMain .middleContent[data-v-e0becdc4]{width:62%;height:155px;display:flex;justify-content:flex-start;align-items:center;padding:11px 0 0 20px}@media screen and (max-width:1200px){.control-main .containMain .middleContent .leftPrintshow[data-v-e0becdc4]{width:135px!important}.control-main .containMain .middleContent .leftPrintshow img[data-v-e0becdc4]{width:134px!important;margin-top:0!important}.control-main .containMain .middleContent .leftPrintshow #c[data-v-e0becdc4]{width:134px!important;left:calc(5% + 20px)!important}}.control-main .containMain .middleContent .leftPrintshow[data-v-e0becdc4]{width:230px;height:135px;background:#2b2b2f;border-radius:5px}.control-main .containMain .middleContent .leftPrintshow img[data-v-e0becdc4]{margin-top:1rem}.control-main .containMain .middleContent .leftPrintshow #c[data-v-e0becdc4]{opacity:.3;width:10.4%;height:135px;position:absolute;left:41px}@media screen and (max-width:1200px){.control-main .containMain .middleContent .rightPrintshow[data-v-e0becdc4]{padding:0 0 0 15px!important;width:100%!important;margin-top:80px!important}.control-main .containMain .middleContent .rightPrintshow .innerFlie[data-v-e0becdc4]{height:25px!important}.control-main .containMain .middleContent .rightPrintshow .innerFlie .span2[data-v-e0becdc4]{width:5rem!important}}.control-main .containMain .middleContent .rightPrintshow[data-v-e0becdc4]{width:400px;height:100px;text-align:left;padding:5px 0 0 20px}.control-main .containMain .middleContent .rightPrintshow .innerFlie[data-v-e0becdc4]{width:100%}.control-main .containMain .middleContent .rightPrintshow .innerFlie .span1[data-v-e0becdc4]{width:50px;height:10px;font-size:12px;font-family:Source Han Sans CN;font-weight:500;color:#7f7f80;display:inline-block;vertical-align:text-top}.control-main .containMain .middleContent .rightPrintshow .innerFlie .span2[data-v-e0becdc4]{width:8rem;display:inline-block;height:18px;font-size:12px;font-family:Source Han Sans CN;font-weight:500;color:#cbcbcc;vertical-align:text-bottom;padding:14px 0 0 20px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.control-main .containMain .middleContent .rightPrintshow .innerFlie .spe-span[data-v-e0becdc4]{text-align:left}.control-main .containMain .middleContent .rightPrintshow .innerFlie .progress[data-v-e0becdc4]  .el-progress-bar__outer{height:3px!important}.control-main .containMain .middleContent .rightPrintshow .innerFlie .progress[data-v-e0becdc4]  .el-progress__text{font-size:16px!important;font-family:Source Han Sans CN;font-weight:700;color:#fff;padding-left:5px}.control-main .containMain .line_right[data-v-e0becdc4]{width:1px;height:100px;background:#414145;position:absolute;top:10rem;left:33%}@media screen and (max-width:1200px){.control-main .containMain .footerContiner[data-v-e0becdc4]{width:49%!important;left:calc(5% + 158px)!important;top:8rem!important}.control-main .containMain .line_right[data-v-e0becdc4]{display:none}}.control-main .containMain .footerContiner[data-v-e0becdc4]{width:194px;text-align:left;position:absolute;left:35%;top:10rem}.control-main .containMain .footerContiner .innerConul li[data-v-e0becdc4]{display:flex;padding-top:14px}.control-main .containMain .footerContiner .innerConul li .rightInnerli[data-v-e0becdc4]{width:86%;display:flex;justify-content:space-between}.control-main .containMain .footerContiner .innerConul li .rightInnerli span[data-v-e0becdc4]:first-child{font-size:12px;font-family:Source Han Sans CN;font-weight:500;color:#7f7f80;display:inline-block}.control-main .containMain .footerContiner .innerConul li .rightInnerli span[data-v-e0becdc4]:nth-child(2){font-size:12px;font-family:Source Han Sans CN;font-weight:500;color:#cbcbcc;width:74px;text-align:left;display:inline-block}", ""]),
        e.exports = t
    },
    "7f80": function (e, t, n) {
        e.exports = n.p + "static/img/k1max.7b9122fe.jpg"
    },
    "82d0": function (e, t, n) {
        "use strict";
        n("46a2")
    },
    "863c": function (e, t, n) {
        var a = n("f25e");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("4736ca9b", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "87da": function (e, t, n) {
        var a = n("781d");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("011785be", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "882d": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABUCAYAAAAVgLC7AAAAAXNSR0IArs4c6QAACcdJREFUeF7tnF1sFNcVx/9nZm0XhyCTlERyC9Q7M+s1LqVQN2l5aANqkqZqlH4FNUkrFYkkNCKUEMB55NGY4LTFVUUDUaK4CaVVpUalRaFV0zSQpiUNX2bXuzNrDNRSYpKCsInZ3bmnurZXWszaO7szsx/Szuvcc+45v7kz98y951xCBV3MTPF4/BtE6vcB/jKAT0+ZdwHAUSK8qmnaISLiSjGbKsGQY8eO1c2b1/QIEbYBaMtj0xkh7O4rV6680tHRkSq3/WUFODw83Dg6+vGjRLwZwKICYZxjxq65cxv3Njc3Xy1Q1rPmZQHY399/S319/QaAngTwSZfejDBjd0NDXe/ixYv/51JXweIlBTgwMPApRVE2M+MxIppbsLWzC1wB8KuGhvqeRYsWDXuse0Z1JQFoWVZICN4K4IcAGnx27hrALyuK0q1pWtznvuArQNM0v8BMnQB/B4DqtzPT9NsA/x5Al2EY//Grb18ARqPmalWdAHc34O9DcgCGmfmwolCXrut/c9C+oCaeAZQxnGVZDzDTMwDfWZAVJWvM7whBXaGQ9gevYknXAGUM19TU9LAQ3ElE+WK4kqEqVSxZNEAZw129enUdM54uIoarFJCuY8mCAQ4NDc2/di21AeCNROQ2hqsUkEXHko4BTsZw6lMAHgNwc6V47rEdE7Gkbad7wuGwo1gyL8BIJBIKBAJbASpFDOcxj6LVOY4lZwQYjUZbVDXQBeC7ZYjhivbcY0EZS/5OVdXOYDA4lEt3ToCWZS0VAm8AfIvHBlWpOvpIVWlVMBg8Od2BGwAeOHBAXb58+SmgakKSkjwUZo4cP/7e0jVr1tjZHd4AMBZL3E0kXi+JVVXWCbO4JxQKHZ4VYDxubQZ4V5X5VhJzmbEtFNJ35gO4CeDnSmJRlXXCjI2hkL57VoCWZX1RCP5XlflWEnMVhe7QNO3fswKUN2Mx8zARvlYSq6qmE3rdMLR7887CskEikbjdtoX8WC6tGv98NZT7iWi1rusfOAIoG50/f37O+Pj4RoDk79vtvtpXucrfl/PByMjIz1euXPmx40A6u+Hg4OAn0un0WmZsIaJg5frqqWWWotCziqK82NLSMj6b5rz/whlhZlYty3pwaon+856aWzHK+DgR7dA07bdEdF3APJOJjgFmKzBN8+vM/AxAX60Y390Z8oZtY0c4rB8qVE1RADOdxOPxLwGQIO8HoBTaeZnbCwCvBQJqV0tLyzvF2nIdQNM0b1MUZZlt2ynbtt8Nh8NyfSzvFYudbVMUexszPwygPq9AeRskAf41M+8MhUIRJ6ZMJQJ0EJGiKMp7wWDw/YzcBMBoNHqzqgZ6ATyStXR1lQh7k8lkz5IlS3Iu5Uzv3DTNhcwyTYPWAfB649yJrzO2YeZRIjwPoMcwDJmslPcaGBgMK4rYCrDkktnPTgP0UjI5vqm9vX2U+vv76+vr698EaKadNJnAs58I3bqun87bK4BIJHJrIBCQqRsbPEjdcNLlbG1GiGTqR8MvFi5c+JETZYODg3fatt3JjAdm+TQd0XVtFcVi5hYiXPeDPEMnDPBBIZQdra3aW04MOXHixE1z5sxdV2TykJMuZmszRIRdjY2N+5wmH01OjugEcJezzvlpisdNuUhY6B/HEblRHQwGDzrZX53a+nxIrmYAaHdmXNGtTgvB3cPD+qurVlE6nxYZnsXjiTWTqXVcUHjGjJMUi8WTRFSXr6MZ7p8GuPvy5cv7neTqyc130zTvJyL5eqwsss+cYkR4S8ZwTh/q0aNH5yxYsGAtQHJbttgfhKQcga6zPYloSAjuKSRXLxZLfEVRhAR5n4v0DwbooBBw/Fk5efLk/MbGxifk0hSA29w+RE8AZhlxEeDedDrd29bW9qET4wYGBpYpirINoDUAAk5kAKQA/o0ccU4nNrktq6rqJiH4cSLybFvWa4AT/jPzGEB7FQW7dF0/7wRKNHq2RVVTWwBaC2DODDIytNqXSqV62trazjrRm0gkWm1bptbxD/xIrfMFYMYxZk4pivoKs73TMIx+Jw7LYF4IbCTCo1mv2AdE2MPMuw3DGHGiJ5FI3CHExCfiW37+JfkKMOMoEQlm/iMR5Ct31AkAZlYsy5r4uGualpA6nMjF4/F7pyapVU7au21TEoDZRhLhH0LQjlBI+5N82906MPXJUGMx60GiiQyxgkIRt/2XHGCWwadkCHThgr7fSbyWy9HMWuVUKKK5hVGMfDkBTk04OCsnm0uXLr3Q0dHhqFxhcHCwKZ1OPwGQDEXKulpedoBZT/2CotBDmjb7b6Jpmvcx88sA3VrMiPFappIASt9GZXqwYRhncjk6mbSOI36EI8WCrTSAIKKDuq59M5dD8bj5VwCri3XWD7mKAwjAtu30/OmLuTIzNpVKX5ThjR8gitVZiQBldNM+/TU+c8b8bF0dThXrqF9yFQkwnabPtbVp18GKRKylgQDfkJ/nFxinemsAnZKaoV0NYA2gSwIuxWsjsAbQJQGX4rURWAPokoBL8doIrAF0ScCleG0E1gC6JOBSvDYCawBdEnApXhuBNYAuCbgUr43AGkCXBFyK10agW4CxWPwaEVVUZn21LOnL5Ck5AuXBXMtdPghPxasFIIBTMuV2gzzA0FMCLpVVC0BmbKXJGrjEIWaumPrg6gDIbyeTybsmCm1kllMqZXcRYX0lpE1UOECbCH3pdPpJufl/XanXuXPnmsfHk08RTRzvNM/lm1i0eIUCHGfGS6kUnm1v182MczmLDcudPlZhAC8B/EtVVX+WXSM3K8DMzXIlMFYIwP8y46dCpPfMVnTpqNxVTjQyhVZRJiqNfA95ygmQmaOqquwcHx/va29vT+b7DjkCmK1kKol7G7N/aWZlAvhPmQTf19f32vbt2x0ltEsuBQPMwJw8X0Z0AvRtr8sISgiQifBnZu42DOPv+UZbrvtFA8wC6fkZ0SUAmGLmA/JM/nA47CrjyzXADMhoNNocCAQ2MeNxtyGQfwBpjJlfsG3nlU75RqVnALNm7qZ0WvwY4J8Un0HPC6dXlUcikc8EAnWD+RzKdZ+ZPyRCrxCit7W19WIxOmaS8RxgdggkhPiRELxFFhs5NZoZZ0MhvWV6+8lSWUuW6jc71UUEeVRBz9jY2L5ly5aNOZUrpJ1vADNGyAMdV6xY8T1mlhNO3hCIGetDIX1PLiecVtcT4RSz0q3rLfuJ8hddFwJselvfAU4Lge4B5BHxkHVsOfrm5w3DkL+ROa+phY8DzBNn8+e46E1mdHtZRpYPbkkBZodA8nQPZsiz9m8iwru2jd7WVn1/PoNllr5pJtYzCwl6CRGNAvQXQDxnGMbb+eS9vv9/XFEwJ+dj/FAAAAAASUVORK5CYII="
    },
    8882: function (e, t, n) {
        var a = n("d1fa");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("047ecd54", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "99b8": function (e, t, n) {
        "use strict";
        n("8882")
    },
    "9b6e": function (e, t, n) {
        var a = n("6aea");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("a61c5904", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "9c6b": function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, "@media screen and (max-width:1200px){.home-main[data-v-5c8c4010]{display:block!important;height:-moz-max-content!important;height:max-content!important}}.home-main[data-v-5c8c4010]{display:flex;padding:70px 0 7px 0}@media screen and (max-width:1200px){.home-main .leftComponent[data-v-5c8c4010]{width:91%!important}.home-main .leftComponent>div[data-v-5c8c4010]{margin:0 0 5% 5%!important}.home-main .rightComponent[data-v-5c8c4010]{width:91%!important;padding-left:0!important}.home-main .rightComponent>div[data-v-5c8c4010]{margin:0 0 5% 5%!important}}.home-main .leftComponent[data-v-5c8c4010]{width:47.8%}.home-main .leftComponent>div[data-v-5c8c4010]{margin:0 0 20px 20px}.home-main .rightComponent[data-v-5c8c4010]{width:49%;padding-left:18px}.home-main .rightComponent>div[data-v-5c8c4010]{margin:0 0 20px 20px}", ""]),
        e.exports = t
    },
    b8de: function (e, t, n) {
        "use strict";
        n("2793")
    },
    c0c6: function (e, t, n) {
        "use strict";
        n("863c")
    },
    c1c8: function (e, t, n) {
        var a = n("9c6b");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("d1b044ea", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c2b1: function (e, t, n) {
        var a = n("d9cd");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("72aa0bb8", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c619: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, "@media screen and (max-width:1200px){#app{min-width:540px!important}}#app{font-family:Source Han Sans CN,Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#fff;min-height:100vh;background:#363638;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:170vh}body{margin:0}.codeMessage{display:flex;flex-direction:column;align-items:center}.codeMessage p{margin:5px 0!important}.codeMessage .reboot{width:100px;height:24px;border-radius:12px;font-size:12px;border:none;box-shadow:0 3px 3px 0 #303034;background:#515157;color:#fff;cursor:pointer;margin-top:10px}", ""]),
        e.exports = t
    },
    d1fa: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".controlAnimal[data-v-3f5e4e02]{height:40px!important}@media screen and (max-width:1200px){.comp-CameraShow[data-v-3f5e4e02]  .com-HeaderBar .firstDiv{width:7rem!important}.comp-CameraShow[data-v-3f5e4e02]  .content{height:20rem}}.comp-CameraShow[data-v-3f5e4e02]{width:100%;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px}.comp-CameraShow .fold[data-v-3f5e4e02]{cursor:pointer}.comp-CameraShow .fold .iconfont[data-v-3f5e4e02]{color:#d2d2da;font-size:8px}.comp-CameraShow .content[data-v-3f5e4e02]{padding:20px;width:calc(100% - 40px);height:calc(100% - 90px)}.comp-CameraShow .content .camera-image[data-v-3f5e4e02]{width:100%;height:100%}.comp-CameraShow .content .netErr[data-v-3f5e4e02]{width:100%;height:100%;background:#29292c;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:14px;font-weight:500;color:#b1b1b9}.comp-CameraShow .content .netErr .iconfont[data-v-3f5e4e02]{font-size:50px;margin-bottom:20px}", ""]),
        e.exports = t
    },
    d81e: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, "@media screen and (max-width:1200px){.home[data-v-07d0c6ea]{min-width:540px!important}}.home[data-v-07d0c6ea]{width:100%;height:100%}@media screen and (max-width:1200px){.home .head-bar[data-v-07d0c6ea]{width:98%!important}}.home .head-bar[data-v-07d0c6ea]{height:56px;background:#1c1c1d;padding:0 20px;display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:fixed;z-index:999;width:1880px}.home .head-bar .bar-left[data-v-07d0c6ea]{display:flex;align-items:center;height:100%}.home .head-bar .bar-left .logo img[data-v-07d0c6ea]{width:28px;height:28px;cursor:pointer}.home .head-bar .bar-left .logo span[data-v-07d0c6ea]{vertical-align:super;padding-left:10px;font-size:18px;font-family:Source Han Sans CN;font-weight:700;color:#d2d2d8}.home .head-bar .bar-left .line[data-v-07d0c6ea]{width:1px;height:20px;background:#4b4b50;margin:0 20px}.home .head-bar .bar-left .menu[data-v-07d0c6ea],.home .head-bar .bar-left .menu div[data-v-07d0c6ea]{display:flex;align-items:center;height:100%}.home .head-bar .bar-left .menu div[data-v-07d0c6ea]{padding:0 20px;cursor:pointer}.home .head-bar .bar-left .menu div .tab-span[data-v-07d0c6ea]{padding-left:6px;color:#b4b4bb}.home .head-bar .bar-left .menu div .iconfont[data-v-07d0c6ea]{color:#b4b4bb}.home .head-bar .bar-left .menu div[data-v-07d0c6ea]:hover{background:#343435;border-radius:5px;height:44px}.home .head-bar .bar-left .menu .is-active[data-v-07d0c6ea]{background:#1e9be2;height:44px;border-radius:5px}.home .head-bar .bar-left .menu .is-active .iconfont[data-v-07d0c6ea],.home .head-bar .bar-left .menu .is-active .tab-span[data-v-07d0c6ea]{color:#fff}.home .head-bar .bar-right[data-v-07d0c6ea]{font-size:30px;height:100%;writing-mode:vertical-lr;margin-right:30px;cursor:pointer}.home .head-bar .bar-right .iconfont[data-v-07d0c6ea]{color:#b4b4bb;font-size:20px}.home .head-bar .bar-right .iconfont[data-v-07d0c6ea]:hover{color:#fff}.home .head-bar .bar-right .interna[data-v-07d0c6ea]{padding:11px 40px 0 0;writing-mode:horizontal-tb}.home .head-bar .bar-right .interna[data-v-07d0c6ea]  .el-select{--el-select-input-focus-border-color:none!important;--el-select-border-color-hover:none!important}.home .head-bar .bar-right .interna[data-v-07d0c6ea]  .el-select .select-trigger .el-input{width:105px;--el-input-border:none!important}.home .head-bar .bar-right .interna[data-v-07d0c6ea]  .el-select .select-trigger .el-input:focus-within{border:none}.home .head-bar .bar-right .interna[data-v-07d0c6ea]  .el-select .select-trigger .el-input:focus-within .el-input__wrapper .el-input__inner{color:#fff!important}.home .content-page[data-v-07d0c6ea]{padding:21px}", ""]),
        e.exports = t
    },
    d9cd: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, '@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/c/font_3796490_7gfsgm3wrwu.woff2?t=1681463557310) format("woff2"),url(//at.alicdn.com/t/c/font_3796490_7gfsgm3wrwu.woff?t=1681463557310) format("woff"),url(//at.alicdn.com/t/c/font_3796490_7gfsgm3wrwu.ttf?t=1681463557310) format("truetype"),url(//at.alicdn.com/t/c/font_3796490_7gfsgm3wrwu.svg?t=1681463557310#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:14px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,header,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font-weight:400;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block}body{line-height:1;height:100%;font-family:Source Han Sans CN;font-family:Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}a{color:#7e8c8d;text-decoration:none;-webkit-backface-visibility:hidden}li{list-style:none}body,html{width:100%;height:100%;background:#f5f6fa}body{-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}', ""]),
        e.exports = t
    },
    dab0: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".v-input-wrap[data-v-6353470d]{width:100%}.v-input__control[data-v-6353470d]{height:29.875rem}.v-input__control .v-input__slot .partLines[data-v-6353470d]{position:absolute}[data-v-6353470d] .v-input__slot{padding:0!important;outline:none!important;cursor:default!important;height:29.875rem}[data-v-6353470d] .v-input__slot fieldset{top:0!important}", ""]),
        e.exports = t
    },
    e186: function (e, t, n) {
        var a = n("c619");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("26745a5a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    e1be: function (e, t, n) {
        e.exports = n.p + "static/img/k1device.b11c36c9.png"
    },
    f019: function (e, t, n) {
        var a = n("fb2b");
        a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        var o = n("499e").default;
        o("057b9258", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    f25e: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".controlAnimal[data-v-975faed4]{height:40px!important}.control-main[data-v-975faed4]{width:100%;background:#37373b;border:1px solid #0f0f10;box-shadow:0 6px 6px 0 rgba(36,36,39,.5);border-radius:5px}.control-main .fold[data-v-975faed4]{cursor:pointer}.control-main .fold .iconfont[data-v-975faed4]{color:#d2d2da;font-size:8px}.control-main .head-show[data-v-975faed4]{width:81%}@media screen and (max-width:1200px){.control-main .middleContent[data-v-975faed4]{height:30.7747rem!important}}.control-main .middleContent[data-v-975faed4]{width:100%;display:flex;height:57.3rem;overflow:hidden;border-radius:10px;justify-content:flex-start;background-size:cover}.control-main .middleContent .active[data-v-975faed4]{background:#00a3ff}.control-main .middleContent .v-input-wrap .v-input__slot svg[data-v-975faed4]{width:100%;height:916px;transform:rotate(180deg) rotateY(180deg)}@media screen and (max-width:1200px){.control-main .middleContent .v-input-wrap .v-input__slot svg[data-v-975faed4]{height:500px}}", ""]),
        e.exports = t
    },
    f3de: function (e, t, n) {
        "use strict";
        n("4af9")
    },
    f63a: function (e, t, n) {
        "use strict";
        n("f019")
    },
    fb2b: function (e, t, n) {
        var a = n("24fb");
        t = a(!1),
        t.push([e.i, ".layer[data-v-d7e40bce]{cursor:pointer;filter:brightness(100%)}.layer .partOutline[data-v-d7e40bce]{filter:opacity(60%);stroke-width:1}.layer .partIcon[data-v-d7e40bce]{fill-opacity:100%;stroke-width:15;fill:#d2d2da}.layer .partIcon .hitarea[data-v-d7e40bce]{pointer-events:all;z-index:-1;transform-origin:center!important;transform:rotate(180deg) rotateY(180deg) translateY(150px)!important}.layer .partIcon .eventNone[data-v-d7e40bce]{pointer-events:none}.layer.partExcluded[data-v-d7e40bce]{pointer-events:all}.layer.partIncluded[data-v-d7e40bce]{fill:transparent;stroke:#a9a9a9}.layer.partCurrent.partsEcclude[data-v-d7e40bce],.layer.partIncluded.partsEcclude[data-v-d7e40bce]{stroke:#6d6d74}.layer.partCurrent.partsEcclude .partIcon[data-v-d7e40bce],.layer.partIncluded.partsEcclude .partIcon[data-v-d7e40bce]{fill:#6d6d74}.layer.partCurrent[data-v-d7e40bce]{fill:transparent;stroke:#00f4c3}.layer:hover .partOutline[data-v-d7e40bce]{stroke:#1e9be2;fill-opacity:100%}.partsEcclude:hover .partOutline[data-v-d7e40bce]{stroke:#6d6d74}.theme--light .layer[data-v-d7e40bce]{filter:brightness(90%)}", ""]),
        e.exports = t
    }
});
//# sourceMappingURL=app.b05d1c1a.js.map
