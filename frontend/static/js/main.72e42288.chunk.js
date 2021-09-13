(this.webpackJsonptikitoken = this.webpackJsonptikitoken || []).push([
    [0], {
        35: function(e, t) {
            e.exports = {
                address: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                abi: [{
                    inputs: [{
                        internalType: "address",
                        name: "_factory",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_WETH",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "WETH",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountADesired",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBDesired",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountAMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "addLiquidity",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenDesired",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "addLiquidityETH",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountToken",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveOut",
                        type: "uint256"
                    }],
                    name: "getAmountIn",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveOut",
                        type: "uint256"
                    }],
                    name: "getAmountOut",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }],
                    name: "getAmountsIn",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }],
                    name: "getAmountsOut",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveB",
                        type: "uint256"
                    }],
                    name: "quote",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountAMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "removeLiquidity",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "removeLiquidityETH",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountToken",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "approveMax",
                        type: "bool"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "removeLiquidityETHWithPermit",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountToken",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "approveMax",
                        type: "bool"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountAMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "approveMax",
                        type: "bool"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "removeLiquidityWithPermit",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapETHForExactTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactETHForTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForETH",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountInMax",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapTokensForExactETH",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountInMax",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapTokensForExactTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }]
            }
        },
        40: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return s
            }));
            var a = n(8),
                i = n(5),
                u = n.n(i),
                p = u.a.createContext(),
                s = function(e) {
                    var t = e.children,
                        n = Object(i.useState)(!1),
                        s = Object(a.a)(n, 2),
                        r = s[0],
                        y = s[1];

                    function o() {
                        y(!r)
                    }

                    function d() {
                        y(!1)
                    }
                    var l = Object(i.useMemo)((function() {
                        return {
                            isSidebarOpen: r,
                            toggleSidebar: o,
                            closeSidebar: d
                        }
                    }), [r]);
                    return u.a.createElement(p.Provider, {
                        value: l
                    }, t)
                }
        },
        49: function(e, t, n) {
            "use strict";
            var a = n(5),
                i = n.n(a);
            t.a = function() {
                return i.a.createElement("div", {
                    className: "w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"
                }, "Loading...")
            }
        },
        57: function(e, t, n) {
            e.exports = n(79)
        },
        67: function(e, t) {},
        75: function(e, t) {},
        78: function(e, t, n) {},
        79: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(5),
                i = n.n(a),
                u = n(33),
                p = n.n(u),
                s = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function r(e, t) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                      
                        var n = e.installing;
                        null != n && (n.onstatechange = function() {
                            "installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var y = n(39),
                o = n(2),
                d = n.n(o),
                l = (n(34), n(8)),
                m = n(19),
                c = n(30),
                T = n(7),
                b = n(18),
                f = n(35),
                v = n.n(f);
            var w, M = function() {
                    var e = Object(a.useState)(""),
                        t = Object(l.a)(e, 2),
                        n = t[0],
                        u = t[1],
                        p = Object(T.g)();
                    return Object(a.useEffect)((function() {
                        p.pathname.slice(1) ? setTimeout((function() {
                            return u("Navigated to ".concat(p.pathname.slice(1), " page."))
                        }), 500) : u("")
                    }), [p]), i.a.createElement("span", {
                        className: "sr-only",
                        role: "status",
                        "aria-live": "polite",
                        "aria-atomic": "true"
                    }, n)
                },
                x = Object(a.lazy)((function() {
                    return n.e(6).then(n.bind(null, 96))
                })),
                h = new b.a.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/"),
                O = "0x7a18B98765f24A85f7966773A48A1D59d7Ac51e2",
                k = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "isExcluded",
                        type: "bool"
                    }],
                    name: "ExcludeFromFees",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address[]",
                        name: "accounts",
                        type: "address[]"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "isExcluded",
                        type: "bool"
                    }],
                    name: "ExcludeMultipleAccountsFromFees",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "bool",
                        name: "earlyParticipant",
                        type: "bool"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "numberOfBuyers",
                        type: "uint256"
                    }],
                    name: "FixedSaleBuy",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address[]",
                        name: "participants",
                        type: "address[]"
                    }],
                    name: "FixedSaleEarlyParticipantsAdded",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint256",
                        name: "newValue",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "oldValue",
                        type: "uint256"
                    }],
                    name: "GasForProcessingUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "newLiquidityWallet",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "oldLiquidityWallet",
                        type: "address"
                    }],
                    name: "LiquidityWalletUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "iterations",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "claims",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "lastProcessedIndex",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "bool",
                        name: "automatic",
                        type: "bool"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "processor",
                        type: "address"
                    }],
                    name: "ProcessedDividendTracker",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokensSwapped",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "SendDividends",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "pair",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "bool",
                        name: "value",
                        type: "bool"
                    }],
                    name: "SetAutomatedMarketMakerPair",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokensSwapped",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "ethReceived",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokensIntoLiqudity",
                        type: "uint256"
                    }],
                    name: "SwapAndLiquify",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "oldAddress",
                        type: "address"
                    }],
                    name: "UpdateDividendTracker",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "oldAddress",
                        type: "address"
                    }],
                    name: "UpdateUniswapV2Router",
                    type: "event"
                }, {
                    inputs: [],
                    name: "BNBRewardsFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "accounts",
                        type: "address[]"
                    }],
                    name: "addFixedSaleEarlyParticipants",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "automatedMarketMakerPairs",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "bounceFixedSaleWallet",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "claim",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "subtractedValue",
                        type: "uint256"
                    }],
                    name: "decreaseAllowance",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "dividendTokenBalanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dividendTracker",
                    outputs: [{
                        internalType: "contract TIKIDividendTracker",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "excluded",
                        type: "bool"
                    }],
                    name: "excludeFromFees",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "accounts",
                        type: "address[]"
                    }, {
                        internalType: "bool",
                        name: "excluded",
                        type: "bool"
                    }],
                    name: "excludeMultipleAccountsFromFees",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "fixedSaleBuyers",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fixedSaleEarlyParticipantBuysThreshold",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fixedSaleEarlyParticipantDuration",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "fixedSaleEarlyParticipants",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fixedSaleStartTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "gasForProcessing",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "getAccountDividendsInfo",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "getAccountDividendsInfoAtIndex",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getClaimWait",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getLastProcessedIndex",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getNumberOfDividendTokenHolders",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getTotalDividendsDistributed",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getTradingIsEnabled",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "addedValue",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "isExcludedFromFees",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "liquidityFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "liquidityWallet",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxSellTransactionAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "numberOfFixedSaleBuys",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256"
                    }],
                    name: "processDividendTracker",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "sellFeeIncreaseFactor",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "pair",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "value",
                        type: "bool"
                    }],
                    name: "setAutomatedMarketMakerPair",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "swapTokensAtAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalFees",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "tradingEnabledTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "uniswapV2Pair",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "uniswapV2Router",
                    outputs: [{
                        internalType: "contract IUniswapV2Router02",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "claimWait",
                        type: "uint256"
                    }],
                    name: "updateClaimWait",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }],
                    name: "updateDividendTracker",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "newValue",
                        type: "uint256"
                    }],
                    name: "updateGasForProcessing",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newLiquidityWallet",
                        type: "address"
                    }],
                    name: "updateLiquidityWallet",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }],
                    name: "updateUniswapV2Router",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "withdrawableDividendOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                g = new b.a.Contract(O, k, h),
                E = new b.a.Contract(v.a.address, v.a.abi, h),
                S = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                F = 18,
                j = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                A = 18;

            function P(e, t) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = Object(m.a)(d.a.mark((function e(t, n) {
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, E.functions.getAmountsOut(t, n, {
                                    gasLimit: 1e12
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function B() {
                return (B = Object(m.a)(d.a.mark((function e() {
                    var t, n;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, P("".concat(1 * Math.pow(10, 18)), [O, S, j]);
                            case 2:
                                return t = e.sent, n = Number(t.amounts[2].toString()) / Math.pow(10, A), e.abrupt("return", n);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function W() {
                return (W = Object(m.a)(d.a.mark((function e() {
                    var t, n;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, P("".concat(1 * Math.pow(10, F)), [S, j]);
                            case 2:
                                return t = e.sent, n = Number(t.amounts[1].toString()) / Math.pow(10, A), e.abrupt("return", n);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function H() {
                return (H = Object(m.a)(d.a.mark((function e() {
                    var t, n, a;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.coingecko.com/api/v3/simple/price?ids=tiki-token&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=false&include_last_updated_at=false");
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, a = n["tiki-token"].usd_24h_vol, e.abrupt("return", a);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function q() {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = Object(m.a)(d.a.mark((function e() {
                    var t;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.prev = 0, t = new b.a.providers.Web3Provider(window.ethereum, 56), e.next = 8;
                                break;
                            case 4:
                                return e.prev = 4, e.t0 = e.catch(0), console.log("wrong chain"), e.abrupt("return", null);
                            case 8:
                                return e.next = 10, t.send("eth_requestAccounts", []);
                            case 10:
                                return e.abrupt("return", t.getSigner());
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 4]
                    ])
                })))).apply(this, arguments)
            }

            function _() {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = Object(m.a)(d.a.mark((function e() {
                    var t, n, a, i;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, q();
                            case 2:
                                if (null !== (t = e.sent)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return n = new b.a.Contract("0x2FD8385d94853E40FAe5E94b4E5033a836E71776", [{
                                    inputs: [],
                                    stateMutability: "nonpayable",
                                    type: "constructor"
                                }, {
                                    anonymous: !1,
                                    inputs: [{
                                        indexed: !1,
                                        internalType: "bool",
                                        name: "enabled",
                                        type: "bool"
                                    }],
                                    name: "Enable",
                                    type: "event"
                                }, {
                                    anonymous: !1,
                                    inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "previousOwner",
                                        type: "address"
                                    }, {
                                        indexed: !0,
                                        internalType: "address",
                                        name: "newOwner",
                                        type: "address"
                                    }],
                                    name: "OwnershipTransferred",
                                    type: "event"
                                }, {
                                    anonymous: !1,
                                    inputs: [{
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256"
                                    }],
                                    name: "TakeFees",
                                    type: "event"
                                }, {
                                    anonymous: !1,
                                    inputs: [{
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "feesPercent",
                                        type: "uint256"
                                    }],
                                    name: "UpdateFeesPercent",
                                    type: "event"
                                }, {
                                    anonymous: !1,
                                    inputs: [{
                                        indexed: !1,
                                        internalType: "address",
                                        name: "feesWallet",
                                        type: "address"
                                    }],
                                    name: "UpdateFeesWallet",
                                    type: "event"
                                }, {
                                    anonymous: !1,
                                    inputs: [{
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "minimumBalance",
                                        type: "uint256"
                                    }],
                                    name: "UpdateMinimumBalance",
                                    type: "event"
                                }, {
                                    inputs: [],
                                    name: "TIKI",
                                    outputs: [{
                                        internalType: "contract IERC20",
                                        name: "",
                                        type: "address"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "bool",
                                        name: "_enabled",
                                        type: "bool"
                                    }],
                                    name: "enable",
                                    outputs: [],
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "enabled",
                                    outputs: [{
                                        internalType: "bool",
                                        name: "",
                                        type: "bool"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "feesPercent",
                                    outputs: [{
                                        internalType: "uint256",
                                        name: "",
                                        type: "uint256"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "feesWallet",
                                    outputs: [{
                                        internalType: "address",
                                        name: "",
                                        type: "address"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "minimumBalance",
                                    outputs: [{
                                        internalType: "uint256",
                                        name: "",
                                        type: "uint256"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "owner",
                                    outputs: [{
                                        internalType: "address",
                                        name: "",
                                        type: "address"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "renounceOwnership",
                                    outputs: [],
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "uint256",
                                        name: "amountOut",
                                        type: "uint256"
                                    }, {
                                        internalType: "uint256",
                                        name: "deadline",
                                        type: "uint256"
                                    }],
                                    name: "swapETHForExactTokens",
                                    outputs: [],
                                    stateMutability: "payable",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "uint256",
                                        name: "amountOutMin",
                                        type: "uint256"
                                    }, {
                                        internalType: "uint256",
                                        name: "deadline",
                                        type: "uint256"
                                    }],
                                    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
                                    outputs: [],
                                    stateMutability: "payable",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "address",
                                        name: "newOwner",
                                        type: "address"
                                    }],
                                    name: "transferOwnership",
                                    outputs: [],
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }, {
                                    inputs: [],
                                    name: "uniswapV2Router",
                                    outputs: [{
                                        internalType: "contract IUniswapV2Router02",
                                        name: "",
                                        type: "address"
                                    }],
                                    stateMutability: "view",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "uint256",
                                        name: "newPercent",
                                        type: "uint256"
                                    }],
                                    name: "updateFeesPercent",
                                    outputs: [],
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "address",
                                        name: "newWallet",
                                        type: "address"
                                    }],
                                    name: "updateFeesWallet",
                                    outputs: [],
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }, {
                                    inputs: [{
                                        internalType: "uint256",
                                        name: "newMinimumBalance",
                                        type: "uint256"
                                    }],
                                    name: "updateMinimumBalance",
                                    outputs: [],
                                    stateMutability: "nonpayable",
                                    type: "function"
                                }, {
                                    stateMutability: "payable",
                                    type: "receive"
                                }], t), a = new b.a.Contract(O, k, t), e.next = 9, t.getAddress();
                            case 9:
                                return i = e.sent, e.abrupt("return", [t, i, n, a]);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var V = function() {
                    var e = Object(a.useState)(null),
                        t = Object(l.a)(e, 2),
                        n = t[0],
                        u = t[1],
                        p = Object(a.useState)(0),
                        s = Object(l.a)(p, 2),
                        r = s[0],
                        y = s[1],
                        o = Object(a.useState)(0),
                        d = Object(l.a)(o, 2),
                        m = d[0],
                        f = d[1],
                        v = Object(a.useState)(0),
                        O = Object(l.a)(v, 2),
                        k = O[0],
                        E = O[1],
                        S = Object(a.useState)(0),
                        F = Object(l.a)(S, 2),
                        j = F[0],
                        A = F[1],
                        P = Object(a.useState)(0),
                        I = Object(l.a)(P, 2),
                        q = I[0],
                        D = I[1],
                        L = Object(a.useState)([]),
                        V = Object(l.a)(L, 2),
                        U = V[0],
                        N = (V[1], Object(a.useState)(0)),
                        R = Object(l.a)(N, 2),
                        C = R[0],
                        G = R[1],
                        J = Object(a.useState)(0),
                        K = Object(l.a)(J, 2),
                        z = K[0],
                        $ = K[1],
                        Q = Object(a.useState)(0),
                        X = Object(l.a)(Q, 2),
                        Y = X[0],
                        Z = X[1],
                        ee = Object(a.useState)(0),
                        te = Object(l.a)(ee, 2),
                        ne = te[0],
                        ae = te[1],
                        ie = Object(a.useState)(0),
                        ue = Object(l.a)(ie, 2),
                        pe = ue[0],
                        se = ue[1],
                        re = Object(a.useState)(!0),
                        ye = Object(l.a)(re, 2),
                        oe = ye[0],
                        de = ye[1],
                        le = Object(a.useState)(!0),
                        me = Object(l.a)(le, 2),
                        ce = me[0],
                        Te = me[1],
                        be = Object(a.useState)(!0),
                        fe = Object(l.a)(be, 2);
                    fe[0], fe[1];
                    var ve = Object(a.useState)(localStorage.getItem("address") || ""),
                        we = Object(l.a)(ve, 2),
                        Me = we[0],
                        xe = we[1];
                    Object(a.useEffect)((function() {
                        (function() {
                            return B.apply(this, arguments)
                        })().then(A),
                            function() {
                                return W.apply(this, arguments)
                            }().then(E),
                            function() {
                                return H.apply(this, arguments)
                            }().then(D)
                    }), []), Object(a.useEffect)((function() {
                        b.a.utils.isAddress(Me) && (localStorage.getItem("address") !== Me && localStorage.setItem("address", Me), he(Me))
                    }), [Me, oe]), Object(a.useEffect)((function() {
                        g.getTotalDividendsDistributed().then((function(e) {
                            y((e / 1e18).toFixed(0)), setTimeout((function() {
                                Te(!ce)
                            }), 5e3)
                        }))
                    }), [ce]);
                    var he = function() {
                        g.getNumberOfDividendTokenHolders().then((function(e) {
                            g.balanceOf(Me).then((function(t) {
                                G((t / 1e18).toFixed(0)), g.getAccountDividendsInfo(Me).then((function(t) {
                                    h.getBalance(Me).then((function(n) {
                                        f((n / 1e18).toFixed(4)), $(parseInt(t[4]._hex, 16) - parseInt(t[3]._hex, 16)), Z(1e3 * parseInt(t[5]._hex, 16)), ae((100 - parseInt(t[2]._hex, 16) / parseInt(e._hex, 16) * 100).toFixed(0)), se((parseInt(t[3]._hex, 16) / 1e18).toFixed(4)), window.clearTimeout(w), w = window.setTimeout((function() {
                                            de(!oe)
                                        }), 9e3)
                                    }))
                                }))
                            }))
                        }))
                    };
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement(c.a, null, i.a.createElement(M, null), i.a.createElement(T.c, null, i.a.createElement(T.a, {
                        path: "/",
                        render: function(e) {
                            return i.a.createElement(x, Object.assign({}, e, {
                                tikiPrice: j,
                                address: Me,
                                setAddress: xe,
                                holdings: C,
                                setHoldings: G,
                                paid: z,
                                setPaid: $,
                                lastPaid: Y,
                                setLastPaid: Z,
                                nextPayoutProgress: ne,
                                setNextPayoutProgress: ae,
                                totalPaid: r,
                                nextPayoutValue: pe,
                                setNextPayoutValue: se,
                                bnbHoldings: m,
                                bnbPrice: k,
                                highestBuyers: U,
                                wallet: n,
                                getWallet: _,
                                setWallet: u,
                                tikiVolume: q,
                                setTikiVolume: D
                            }))
                        }
                    }))))
                },
                U = n(40),
                N = n(49);
            n(78);
            p.a.render(i.a.createElement(U.b, null, i.a.createElement(a.Suspense, {
                    fallback: i.a.createElement(N.a, null)
                }, i.a.createElement(y.Windmill, {
                    usePreferences: !0,
                    dark: !0
                }, i.a.createElement(V, null)))), document.getElementById("root")),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var t = "".concat("", "/service-worker.js");
                            s ? (! function(e, t) {
                                fetch(e, {
                                    headers: {
                                        "Service-Worker": "script"
                                    }
                                }).then((function(n) {
                                    var a = n.headers.get("content-type");
                                    404 === n.status || null != a && -1 === a.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : r(e, t)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(t, e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                            }))) : r(t, e)
                        }))
                    }
                }({
                    onUpdate: function(e) {
                        e && e.waiting && e.waiting.postMessage({
                            type: "SKIP_WAITING"
                        }), window.location.reload()
                    }
                })
        }
    },
    [
        [57, 1, 2]
    ]
]);
//# sourceMappingURL=main.72e42288.chunk.js.map
