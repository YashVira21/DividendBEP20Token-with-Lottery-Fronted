/*! For license information please see 4.0a3bfa4f.chunk.js.LICENSE.txt */
(this.webpackJsonptikitoken = this.webpackJsonptikitoken || []).push([
    [4], {
        81: function(e, t, a) {
            "use strict";
            var r = a(82),
                l = a(5),
                n = a.n(l);
            t.a = function(e) {
                var t = e.children,
                    a = e.className,
                    l = Object(r.a)(e, ["children", "className"]);
                return n.a.createElement("h1", Object.assign({
                    className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 " + a
                }, l), t)
            }
        },
        84: function(e, t, a) {
            "use strict";
            var r = a(5),
                l = a.n(r);
            t.a = function(e) {
                var t = e.text,
                    a = e.holdings,
                    r = (e.address, void 0 !== t && "" !== t && "0x" === t.substring(0, 2) ? "bg-green-600" : "bg-purple-600");
                return l.a.createElement("div", {
                    className: "hidden lg:block"
                }, l.a.createElement("span", {
                    className: "flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 ".concat(r, " rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple")
                }, l.a.createElement("div", {
                    className: "flex items-center"
                }, l.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6 mr-3",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                }, l.a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                })), l.a.createElement("span", null, void 0 !== t && "" !== t && "0x" === t.substring(0, 2) ? a < 1e4 ? t + " - YOU NEED TO HOLD MORE THAN 90K cEVO TO RECEIVE DIVIDENDS" : t : "Please enter your address above")), l.a.createElement("a", {
                    href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7a18b98765f24a85f7966773a48a1d59d7ac51e2",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Buy cEVO ", l.a.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: "&RightArrow;"
                    }
                }))))
            }
        },
        85: function(e, t, a) {
            "use strict";

            function r(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            a.d(t, "a", (function() {
                return r
            }))
        },
        86: function(e, t, a) {
            e.exports = a.p + "static/media/money.d301ec34.png"
        },
        87: function(e, t, a) {
            var r;
            ! function() {
                "use strict";
                var a = {}.hasOwnProperty;

                function l() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var n = typeof r;
                            if ("string" === n || "number" === n) e.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var s = l.apply(null, r);
                                s && e.push(s)
                            } else if ("object" === n)
                                for (var c in r) a.call(r, c) && r[c] && e.push(c)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (l.default = l, e.exports = l) : void 0 === (r = function() {
                    return l
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        88: function(e, t, a) {
            e.exports = a.p + "static/media/bnb.162aaf57.png"
        },
        98: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(8),
                l = a(5),
                n = a.n(l),
                s = a(18),
                c = a(84),
                m = a(39);
            var o = function(e) {
                    var t = e.title,
                        a = e.value,
                        r = (e.button, e.children);
                    return n.a.createElement(m.Card, null, n.a.createElement(m.CardBody, {
                        className: "flex items-center"
                    }, r, n.a.createElement("div", null, n.a.createElement("p", {
                        className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                    }, t), n.a.createElement("p", {
                        className: "text-lg font-semibold text-gray-700 dark:text-gray-200"
                    }, a))))
                },
                x = a(81),
                i = a(87),
                d = a.n(i);
            var u = function(e) {
                    var t = e.icon,
                        a = e.iconColorClass,
                        r = void 0 === a ? "text-purple-600 dark:text-purple-100" : a,
                        l = e.bgColorClass,
                        s = void 0 === l ? "bg-purple-100 dark:bg-purple-600" : l,
                        c = e.className,
                        m = d()("p-3 rounded-md", r, s, c);
                    return n.a.createElement("div", {
                        className: m
                    }, n.a.createElement(t, {
                        className: "w-5 h-10"
                    }))
                },
                g = a(83);

            function E(e, t) {
                var a = e - t;
                if (a < 6e4) {
                    var r = Math.round(a / 1e3);
                    return r > 1 ? r + " Seconds Ago" : r + " Second Ago"
                }
                if (a < 36e5) {
                    var l = Math.round(a / 6e4);
                    return l > 1 ? l + " Minutes Ago" : l + " Minute Ago"
                }
                if (a < 864e5) {
                    var n = Math.round(a / 36e5);
                    return n > 1 ? n + " Hours Ago" : n + " Hour Ago"
                }
                return a < 2592e6 ? "~ " + Math.round(a / 864e5) + " days Ago" : a < 31536e6 ? "~ " + Math.round(a / 2592e6) + " months Ago" : "~ " + Math.round(a / 31536e6) + " years Ago"
            }
            var p = a(85);
            t.default = function(e) {
                var t = e.tikiPrice,
                    i = e.tikiVolume,
                    d = e.setTikiVolume,
                    b = e.wallet,
                    N = e.setWallet,
                    y = e.getWallet,
                    f = (e.highestBuyers, e.bnbPrice),
                    v = e.bnbHoldings,
                    h = e.totalPaid,
                    k = e.holdings,
                    C = e.paid,
                    I = e.lastPaid,
                    O = e.address,
                    w = e.nextPayoutProgress,
                    j = e.nextPayoutValue,
                    B = (e.setHoldings, e.setPaid, e.setLastPaid, e.setAddress),
                    F = (e.setNextPayoutProgress, e.setNextPayoutValue, Object(l.useState)(null)),
                    P = Object(r.a)(F, 2),
                    T = (P[0], P[1]),
                    M = Object(l.useState)(null),
                    A = Object(r.a)(M, 2),
                    D = A[0],
                    K = A[1],
                    H = Object(l.useState)(!1),
                    $ = Object(r.a)(H, 2),
                    S = ($[0], $[1], Object(l.useState)(!1)),
                    L = Object(r.a)(S, 2),
                    V = L[0],
                    W = L[1],
                    Y = Object(l.useState)(Number(v) - .03 > 0 ? (Number(v) - .03).toFixed(4) : "0"),
                    R = Object(r.a)(Y, 2),
                    _ = (R[0], R[1], n.a.Fragment, n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
                        className: "text-yellow-300"
                    }, 0 != j ? j + " ADA" : "Processing"), Date.now() - I >= 36e5 ? " | ".concat(w, "%") : " | ".concat((60 - (Date.now() - I) / 6e4).toFixed(0), "m"))),
                    z = 0 == i ? k / 1e9 * 22e4 : k / 1e9 * (.11 * i),
                    J = z / f,
                    U = function(e, a) {
                        for (var r = Number(e), l = 0; l < a; l++) r = 0 == i ? r + r / 1e9 * 22e4 / t : r + r / 1e9 * (.11 * i) / t;
                        return r.toFixed(0)
                    };
                return n.a.createElement("div", {
                    className: "pb-10"
                }, n.a.createElement(x.a, {
                    className: "text-3xl"
                }, "CardanoEvo Dashboard"), n.a.createElement(c.a, {
                    holdings: k,
                    text: "" !== O && s.a.utils.isAddress(O) && 0 !== v ? "".concat(O, " | BNB In Your Wallet: ").concat(v, " ($").concat(Object(p.a)((v * f).toFixed(2)), ")") : O
                }), n.a.createElement("div", {
                    className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                }, n.a.createElement(o, {
                    title: "Your cEVO Holdings",
                    value: "".concat(Object(p.a)(k), " cEVO")
                }, n.a.createElement(u, {
                    icon: g.CoinsIcon,
                    iconColorClass: "text-orange-500 dark:text-orange-100",
                    bgColorClass: "bg-orange-100 dark:bg-orange-500",
                    className: "mr-4"
                })), n.a.createElement(m.Card, null, n.a.createElement(m.CardBody, {
                    className: "flex items-center"
                }, n.a.createElement(u, {
                    icon: g.PeopleIcon,
                    iconColorClass: "text-green-500 dark:text-green-100",
                    bgColorClass: "bg-green-100 dark:bg-green-500",
                    className: "mr-4"
                }), n.a.createElement("div", null, n.a.createElement("p", {
                    className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                }, "Total ADA Paid"), n.a.createElement("p", {
                    className: "text-lg font-semibold text-gray-700 dark:text-gray-200"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, "".concat((C / 1e18).toFixed(4))), n.a.createElement("span", {
                    className: "italic font-light text-md text-green-400"
                }, " ~$", Object(p.a)((C / 1e18 * 1.35).toFixed(2))))))), n.a.createElement(o, {
                    className: "",
                    title: "Last Payout Time",
                    value: "".concat(0 === I ? "Never" : E(Date.now(), I))
                }, n.a.createElement(u, {
                    icon: g.MoneyIcon,
                    iconColorClass: "text-blue-500 dark:text-blue-100",
                    bgColorClass: "bg-blue-100 dark:bg-blue-500",
                    className: "mr-4"
                })), n.a.createElement(m.Card, null, n.a.createElement(m.CardBody, {
                    className: "flex items-center"
                }, n.a.createElement(u, {
                    icon: g.CartIcon,
                    iconColorClass: "text-yellow-500 dark:text-yellow-100",
                    bgColorClass: "bg-yellow-100 dark:bg-yellow-500",
                    className: "mr-4"
                }), n.a.createElement("div", null, n.a.createElement("p", {
                    className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                }, "Payout Loading"), n.a.createElement("p", {
                    className: "text-lg font-semibold text-gray-700 dark:text-gray-200"
                }, _))))), n.a.createElement(m.Card, {
                    className: "mt-4"
                }, n.a.createElement(m.CardBody, {
                    className: "flex items-center"
                }, n.a.createElement(m.Button, {
                    disabled: 0 == j,
                    className: "w-full h-full text-lg font-semibold",
                    onClick: function() {
                        if (null !== b && null !== D) {
                            var e = D.interface.encodeFunctionData("claim", []);
                            b.getTransactionCount().then((function(t) {
                                var a = {
                                    chainId: 56,
                                    nonce: s.a.utils.hexlify(t),
                                    gasPrice: s.a.utils.hexlify(7e9),
                                    gasLimit: s.a.utils.hexlify(25e4),
                                    to: D.address,
                                    value: s.a.utils.parseEther("0"),
                                    data: e
                                };
                                b.sendTransaction(a).then((function(e) {
                                    W(!0)
                                }))
                            }))
                        } else y().then((function(e) {
                            N(e[0]), B(e[1]), T(e[2]), K(e[3])
                        }))
                    }
                }, 0 == j ? "Payout Is Processing" : null !== b ? V ? "Payout Claimed!" : "Claim Payout" : "Optional - Connect Wallet and Claim Manually NOW"))), n.a.createElement("div", {style: {display: "none"},
                    className: "grid grid-cols-2 gap-4 mt-4"
                }, n.a.createElement(m.Card, {
                    className: "col-span-2"
                }, n.a.createElement(m.CardBody, {
                    className: "flex flex-col text-center items-center"
                }, n.a.createElement("img", {
                    className: "w-32 h-32 mb-4 mt-4",
                    src: a(88)
                }), n.a.createElement("p", {
                    className: "mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center"
                }, "Total ADA Paid To CardanoEvo Holders"), n.a.createElement("br", null), n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-4xl md:text-6xl text-center mb-8"
                }, Object(p.a)(h), " ", n.a.createElement("span", {
                    className: "text-yellow-300"
                }, "ADA"), n.a.createElement("br", null), " = $", Object(p.a)((f * h).toFixed(0))))), n.a.createElement(m.Card, {
                    className: "col-span-2"
                }, n.a.createElement(m.CardBody, {
                    className: "flex flex-col text-center items-center"
                }, n.a.createElement("p", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center -mt-2"
                }, "Estimations are based on a default of the last 24h of trading volume", n.a.createElement("br", null), "Change the volume to predict earnings based on other volume figures", n.a.createElement("br", null), "Trading Volume = $ ", n.a.createElement("input", {
                    className: "text-black",
                    value: Object(p.a)(i.toFixed(0)),
                    onChange: function(e) {
                        return isNaN(Number(parseFloat(e.target.value.replace(/,/g, "")))) ? i : d(Number(parseFloat(e.target.value.replace(/,/g, ""))))
                    }
                })))), n.a.createElement(m.Card, {
                    className: "col-span-2 lg:col-span-1"
                }, n.a.createElement(m.CardBody, {
                    className: "flex flex-col text-center items-center"
                }, n.a.createElement("img", {
                    className: "w-32 h-32 mb-4 mt-4",
                    src: a(86)
                }), n.a.createElement("p", {
                    className: "mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center"
                }, "Your ", Object(p.a)(k), " TIKI Earns:"), n.a.createElement("br", null), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, Object(p.a)(J.toFixed(2)), " BNB"), " ($", Object(p.a)(z.toFixed(2)), ")"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
                }, "Per Day")), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, Object(p.a)((7 * J).toFixed(2)), " BNB"), " ($", Object(p.a)((7 * z).toFixed(2)), ")"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
                }, "Per Week")), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, Object(p.a)((30 * J).toFixed(2)), " BNB"), " ($", Object(p.a)((30 * z).toFixed(2)), ")"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
                }, "Per Month")), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, Object(p.a)((365 * J).toFixed(2)), " BNB"), " ($", Object(p.a)((365 * z).toFixed(2)), ")"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
                }, "Per Year")), n.a.createElement("br", null), n.a.createElement("p", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center -mt-2"
                }, "Dynamic estimations based on trading volume of $", Object(p.a)(i.toFixed(0))))), n.a.createElement(m.Card, {
                    className: "col-span-2 lg:col-span-1"
                }, n.a.createElement(m.CardBody, {
                    className: "flex flex-col text-center items-center"
                }, n.a.createElement("img", {
                    className: "w-32 h-32 mb-4 mt-4",
                    src: a(86)
                }), n.a.createElement("p", {
                    className: "mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center"
                }, "By Reinvesting Dividends Every Day, Your ", Object(p.a)(k), " TIKI Becomes:"), n.a.createElement("br", null), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, 0 != k ? Object(p.a)(U(k, 7)) : "0", " TIKI"), " (", 0 != k ? (U(k, 7) / k).toFixed(2) : "0", "x Earnings)"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
                }, "In a Week")), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, 0 != k ? Object(p.a)(U(k, 30)) : "0", " TIKI"), " (", 0 != k ? (U(k, 30) / k).toFixed(2) : "0", "x Earnings)"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
                }, "In a Month")), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, 0 != k ? Object(p.a)(U(k, 182)) : "0", " TIKI"), " (", 0 != k ? (U(k, 182) / k).toFixed(2) : "0", "x Earnings)"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
                }, "In 6 Months")), n.a.createElement("div", {
                    className: "flex"
                }, n.a.createElement("p", {
                    className: "text-green-400 dark:text-green-400 text-2xl text-center"
                }, n.a.createElement("span", {
                    className: "text-yellow-300"
                }, 0 != k ? Object(p.a)(U(k, 365)) : "0", " TIKI"), " (", 0 != k ? (U(k, 365) / k).toFixed(2) : "0", "x Earnings)"), n.a.createElement("span", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
                }, "In 1 Year")), n.a.createElement("br", null), n.a.createElement("p", {
                    className: "text-gray-600 dark:text-gray-400 text-xl text-center -mt-2"
                }, "Estimations are based on current $TIKI price ($", t.toFixed(4), ")")))))
            }
        }
    }
]);
//# sourceMappingURL=4.0a3bfa4f.chunk.js.map