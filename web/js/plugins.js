!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    var t = []
        , k = C.document
        , c = t.slice
        , g = t.concat
        , a = t.push
        , i = t.indexOf
        , n = {}
        , r = n.toString
        , h = n.hasOwnProperty
        , v = {}
        , o = "2.2.4"
        , E = function(e, t) {
        return new E.fn.init(e,t)
    }
        , s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , u = /^-ms-/
        , l = /-([\da-z])/gi
        , f = function(e, t) {
        return t.toUpperCase()
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
            , n = E.type(e);
        return "function" !== n && !E.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: o,
        constructor: E,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    },
        E.extend = E.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof s && (l = s,
                s = arguments[a] || {},
                a++),
                 "object" == typeof s || E.isFunction(s) || (s = {}),
                 a === u && (s = this,
                     a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = s[t],
                        s !== (r = e[t]) && (l && r && (E.isPlainObject(r) || (i = E.isArray(r))) ? (i ? (i = !1,
                            o = n && E.isArray(n) ? n : []) : o = n && E.isPlainObject(n) ? n : {},
                            s[t] = E.extend(l, o, r)) : void 0 !== r && (s[t] = r));
            return s
        }
        ,
        E.extend({
            expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === E.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !E.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isPlainObject: function(e) {
                var t;
                if ("object" !== E.type(e) || e.nodeType || E.isWindow(e))
                    return !1;
                if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf"))
                    return !1;
                for (t in e)
                    ;
                return void 0 === t || h.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = E.trim(e)) && (1 === e.indexOf("use strict") ? ((t = k.createElement("script")).text = e,
                    k.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(u, "ms-").replace(l, f)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (p(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(s, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                    !t(e[i], i) !== s && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0, s = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && s.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && s.push(i);
                return g.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    E.isFunction(e) ? (r = c.call(arguments, 2),
                        (i = function() {
                                return e.apply(t || this, r.concat(c.call(arguments)))
                            }
                        ).guid = e.guid = e.guid || E.guid++,
                        i) : void 0
            },
            now: Date.now,
            support: v
        }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
        E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
    var d = function(n) {
        var e, h, b, o, i, g, f, v, w, u, l, T, C, s, k, m, a, c, y, E = "sizzle" + 1 * new Date, x = n.document, N = 0, r = 0, p = oe(), d = oe(), S = oe(), j = function(e, t) {
            return e === t && (l = !0),
                0
        }, D = 1 << 31, A = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, F = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", I = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]", W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(R + "+","g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), _ = new RegExp("^" + R + "*," + R + "*"), X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), z = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]","g"), U = new RegExp(W), V = new RegExp("^" + M + "$"), Y = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = function() {
            T()
        };
        try {
            H.apply(t = O.call(x.childNodes), x.childNodes),
                t[x.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                        L.apply(e, O.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
            }
        }
        function ie(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t),
                    t = t || C,
                    k)) {
                if (11 !== d && (l = K.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                    n
                        } else if (p && (s = p.getElementById(i)) && y(t, s) && s.id === i)
                            return n.push(s),
                                n
                    } else {
                        if (l[2])
                            return H.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName)
                            return H.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (h.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d)
                        p = t,
                            f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ee, "\\$&") : t.setAttribute("id", a = E),
                                 o = (c = g(e)).length,
                                 u = V.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            c[o] = u + " " + ge(c[o]);
                        f = c.join(","),
                            p = Z.test(e) && de(t.parentNode) || t
                    }
                    if (f)
                        try {
                            return H.apply(n, p.querySelectorAll(f)),
                                n
                        } catch (e) {} finally {
                            a === E && t.removeAttribute("id")
                        }
                }
            }
            return v(e.replace(B, "$1"), t, n, r)
        }
        function oe() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
            }
        }
        function se(e) {
            return e[E] = !0,
                e
        }
        function ae(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                b.attrHandle[n[r]] = t
        }
        function le(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ce(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function fe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function pe(s) {
            return se(function(o) {
                return o = +o,
                    se(function(e, t) {
                        for (var n, r = s([], e.length, o), i = r.length; i--; )
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function de(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ie.support = {},
            i = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            T = ie.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement,
                        k = !i(C),
                    (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)),
                        h.attributes = ae(function(e) {
                            return e.className = "i",
                                !e.getAttribute("className")
                        }),
                        h.getElementsByTagName = ae(function(e) {
                            return e.appendChild(C.createComment("")),
                                !e.getElementsByTagName("*").length
                        }),
                        h.getElementsByClassName = J.test(C.getElementsByClassName),
                        h.getById = ae(function(e) {
                            return s.appendChild(e).id = E,
                            !C.getElementsByName || !C.getElementsByName(E).length
                        }),
                        h.getById ? (b.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && k) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }
                                ,
                                b.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }
                        ) : (delete b.find.ID,
                                b.filter.ID = function(e) {
                                    var n = e.replace(te, ne);
                                    return function(e) {
                                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return t && t.value === n
                                    }
                                }
                        ),
                        b.find.TAG = h.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                            }
                            : function(e, t) {
                                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++]; )
                                        1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }
                        ,
                        b.find.CLASS = h.getElementsByClassName && function(e, t) {
                            return void 0 !== t.getElementsByClassName && k ? t.getElementsByClassName(e) : void 0
                        }
                        ,
                        a = [],
                        m = [],
                    (h.qsa = J.test(C.querySelectorAll)) && (ae(function(e) {
                        s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + P + ")"),
                        e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="),
                        e.querySelectorAll(":checked").length || m.push(":checked"),
                        e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                    }),
                        ae(function(e) {
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                m.push(",.*:")
                        })),
                    (h.matchesSelector = J.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ae(function(e) {
                        h.disconnectedMatch = c.call(e, "div"),
                            c.call(e, "[s!='']:x"),
                            a.push("!=", W)
                    }),
                        m = m.length && new RegExp(m.join("|")),
                        a = a.length && new RegExp(a.join("|")),
                        t = J.test(s.compareDocumentPosition),
                        y = t || J.test(s.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e
                                    , r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            }
                            : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode; )
                                        if (t === e)
                                            return !0;
                                return !1
                            }
                        ,
                        j = t ? function(e, t) {
                                if (e === t)
                                    return l = !0,
                                        0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & n ? -1 : 1)
                            }
                            : function(e, t) {
                                if (e === t)
                                    return l = !0,
                                        0;
                                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                                if (!i || !o)
                                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? F(u, e) - F(u, t) : 0;
                                if (i === o)
                                    return le(e, t);
                                for (n = e; n = n.parentNode; )
                                    s.unshift(n);
                                for (n = t; n = n.parentNode; )
                                    a.unshift(n);
                                for (; s[r] === a[r]; )
                                    r++;
                                return r ? le(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
                            }
                ),
                    C
            }
            ,
            ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }
            ,
            ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e),
                        t = t.replace(z, "='$1']"),
                    h.matchesSelector && k && !S[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {}
                return 0 < ie(t, C, null, [e]).length
            }
            ,
            ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e),
                    y(e, t)
            }
            ,
            ie.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()]
                    , r = n && A.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== r ? r : h.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ie.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (l = !h.detectDuplicates,
                        u = !h.sortStable && e.slice(0),
                        e.sort(j),
                        l) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return u = null,
                    e
            }
            ,
            o = ie.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += o(t);
                return n
            }
            ,
            (b = ie.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                                "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var m = "nth" !== h.slice(0, 3)
                            , y = "last" !== h.slice(-4)
                            , x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                                return !!e.parentNode
                            }
                            : function(e, t, n) {
                                var r, i, o, s, a, u, l = m !== y ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                                if (c) {
                                    if (m) {
                                        for (; l; ) {
                                            for (s = e; s = s[l]; )
                                                if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                                    return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [y ? c.firstChild : c.lastChild],
                                        y && p) {
                                        for (d = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2],
                                                 s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop(); )
                                            if (1 === s.nodeType && ++d && s === e) {
                                                i[h] = [N, a, d];
                                                break
                                            }
                                    } else if (p && (d = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]),
                                        !1 === d)
                                        for (; (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [N, d]),
                                        s !== e)); )
                                            ;
                                    return (d -= v) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                                b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                    for (var n, r = s(e, o), i = r.length; i--; )
                                        e[n = F(e, r[i])] = !(t[n] = r[i])
                                }) : function(e) {
                                    return s(e, 0, t)
                                }
                        ) : s
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = []
                            , i = []
                            , a = f(e.replace(B, "$1"));
                        return a[E] ? se(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--; )
                                (i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e,
                                a(r, null, n, i),
                                r[0] = null,
                                !i.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: se(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: se(function(n) {
                        return V.test(n || "") || ie.error("unsupported lang: " + n),
                            n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r; )
                            e.push(r);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            b.pseudos[e] = ce(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = fe(e);
        function he() {}
        function ge(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ve(a, e, t) {
            var u = e.dir
                , l = t && "parentNode" === u
                , c = r++;
            return e.first ? function(e, t, n) {
                    for (; e = e[u]; )
                        if (1 === e.nodeType || l)
                            return a(e, t, n)
                }
                : function(e, t, n) {
                    var r, i, o, s = [N, c];
                    if (n) {
                        for (; e = e[u]; )
                            if ((1 === e.nodeType || l) && a(e, t, n))
                                return !0
                    } else
                        for (; e = e[u]; )
                            if (1 === e.nodeType || l) {
                                if ((r = (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === N && r[1] === c)
                                    return s[2] = r[2];
                                if ((i[u] = s)[2] = a(e, t, n))
                                    return !0
                            }
                }
        }
        function me(i) {
            return 1 < i.length ? function(e, t, n) {
                    for (var r = i.length; r--; )
                        if (!i[r](e, t, n))
                            return !1;
                    return !0
                }
                : i[0]
        }
        function ye(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                l && t.push(a)));
            return s
        }
        function xe(d, h, g, v, m, e) {
            return v && !v[E] && (v = xe(v)),
            m && !m[E] && (m = xe(m, e)),
                se(function(e, t, n, r) {
                    var i, o, s, a = [], u = [], l = t.length, c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            ie(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : ye(c, a, d, n, r), p = g ? m || (e ? d : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r),
                            v)
                        for (i = ye(p, u),
                                 v(i, [], n, r),
                                 o = i.length; o--; )
                            (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                    if (e) {
                        if (m || d) {
                            if (m) {
                                for (i = [],
                                         o = p.length; o--; )
                                    (s = p[o]) && i.push(f[o] = s);
                                m(null, p = [], i, r)
                            }
                            for (o = p.length; o--; )
                                (s = p[o]) && -1 < (i = m ? F(e, s) : a[o]) && (e[i] = !(t[i] = s))
                        }
                    } else
                        p = ye(p === t ? p.splice(l, p.length) : p),
                            m ? m(null, t, p, r) : H.apply(t, p)
                })
        }
        function be(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ve(function(e) {
                return e === i
            }, s, !0), l = ve(function(e) {
                return -1 < F(i, e)
            }, s, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                    r
            }
            ]; a < r; a++)
                if (t = b.relative[e[a].type])
                    c = [ve(me(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (n = ++a; n < r && !b.relative[e[n].type]; n++)
                            ;
                        return xe(1 < a && me(c), 1 < a && ge(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, a < n && be(e.slice(a, n)), n < r && be(e = e.slice(n)), n < r && ge(e))
                    }
                    c.push(t)
                }
            return me(c)
        }
        return he.prototype = b.filters = b.pseudos,
            b.setFilters = new he,
            g = ie.tokenize = function(e, t) {
                var n, r, i, o, s, a, u, l = d[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (s = e,
                         a = [],
                         u = b.preFilter; s; ) {
                    for (o in n && !(r = _.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                        a.push(i = [])),
                        n = !1,
                    (r = X.exec(s)) && (n = r.shift(),
                        i.push({
                            value: n,
                            type: r[0].replace(B, " ")
                        }),
                        s = s.slice(n.length)),
                        b.filter)
                        !(r = Y[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? ie.error(e) : d(e, a).slice(0)
            }
            ,
            f = ie.compile = function(e, t) {
                var n, v, m, y, x, r, i = [], o = [], s = S[e + " "];
                if (!s) {
                    for (t || (t = g(e)),
                             n = t.length; n--; )
                        (s = be(t[n]))[E] ? i.push(s) : o.push(s);
                    (s = S(e, (v = o,
                        y = 0 < (m = i).length,
                        x = 0 < v.length,
                        r = function(e, t, n, r, i) {
                            var o, s, a, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = N += null == p ? 1 : Math.random() || .1, g = d.length;
                            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    for (s = 0,
                                         t || o.ownerDocument === C || (T(o),
                                             n = !k); a = v[s++]; )
                                        if (a(o, t || C, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (N = h)
                                }
                                y && ((o = !a && o) && u--,
                                e && c.push(o))
                            }
                            if (u += l,
                                y && l !== u) {
                                for (s = 0; a = m[s++]; )
                                    a(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        for (; l--; )
                                            c[l] || f[l] || (f[l] = q.call(r));
                                    f = ye(f)
                                }
                                H.apply(r, f),
                                i && !e && 0 < f.length && 1 < u + m.length && ie.uniqueSort(r)
                            }
                            return i && (N = h,
                                w = p),
                                c
                        }
                        ,
                        y ? se(r) : r))).selector = e
                }
                return s
            }
            ,
            v = ie.select = function(e, t, n, r) {
                var i, o, s, a, u, l = "function" == typeof e && e, c = !r && g(e = l.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && k && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(s.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                        !b.relative[a = s.type]); )
                        if ((u = b.find[a]) && (r = u(s.matches[0].replace(te, ne), Z.test(o[0].type) && de(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                    !(e = r.length && ge(o)))
                                return H.apply(n, r),
                                    n;
                            break
                        }
                }
                return (l || f(e, c))(r, t, !k, n, !t || Z.test(e) && de(t.parentNode) || t),
                    n
            }
            ,
            h.sortStable = E.split("").sort(j).join("") === E,
            h.detectDuplicates = !!l,
            T(),
            h.sortDetached = ae(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("div"))
            }),
        ae(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        h.attributes && ae(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(P, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            ie
    }(C);
    E.find = d,
        E.expr = d.selectors,
        E.expr[":"] = E.expr.pseudos,
        E.uniqueSort = E.unique = d.uniqueSort,
        E.text = d.getText,
        E.isXMLDoc = d.isXML,
        E.contains = d.contains;
    var m = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && E(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , y = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
        , x = E.expr.match.needsContext
        , b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
        , w = /^.[^:#\[\.,]*$/;
    function T(e, n, r) {
        if (E.isFunction(n))
            return E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            });
        if (n.nodeType)
            return E.grep(e, function(e) {
                return e === n !== r
            });
        if ("string" == typeof n) {
            if (w.test(n))
                return E.filter(n, e, r);
            n = E.filter(n, e)
        }
        return E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        })
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        E.fn.extend({
            find: function(e) {
                var t, n = this.length, r = [], i = this;
                if ("string" != typeof e)
                    return this.pushStack(E(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (E.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; t < n; t++)
                    E.find(e, i[t], r);
                return (r = this.pushStack(1 < n ? E.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e,
                    r
            },
            filter: function(e) {
                return this.pushStack(T(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(T(this, e || [], !0))
            },
            is: function(e) {
                return !!T(this, "string" == typeof e && x.test(e) ? E(e) : e || [], !1).length
            }
        });
    var N, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (E.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || N,
                "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof E ? t[0] : t,
                            E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)),
                        b.test(r[1]) && E.isPlainObject(t))
                        for (r in t)
                            E.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = k.getElementById(r[2])) && i.parentNode && (this.length = 1,
                    this[0] = i),
                    this.context = k,
                    this.selector = e,
                    this
            }
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : E.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                E.makeArray(e, this))
        }
    ).prototype = E.fn,
        N = E(k);
    var j = /^(?:parents|prev(?:Until|All))/
        , D = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function A(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
                , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? E(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        E.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return m(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return m(e, "parentNode", n)
            },
            next: function(e) {
                return A(e, "nextSibling")
            },
            prev: function(e) {
                return A(e, "previousSibling")
            },
            nextAll: function(e) {
                return m(e, "nextSibling")
            },
            prevAll: function(e) {
                return m(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return m(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return m(e, "previousSibling", n)
            },
            siblings: function(e) {
                return y((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return y(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || E.merge([], e.childNodes)
            }
        }, function(r, i) {
            E.fn[r] = function(e, t) {
                var n = E.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                t && "string" == typeof t && (n = E.filter(t, n)),
                1 < this.length && (D[r] || E.uniqueSort(n),
                j.test(r) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var q, L = /\S+/g;
    function H() {
        k.removeEventListener("DOMContentLoaded", H),
            C.removeEventListener("load", H),
            E.ready()
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
            n = {},
            E.each(e.match(L) || [], function(e, t) {
                n[t] = !0
            }),
            n) : E.extend({}, r);
        var i, t, o, s, a = [], u = [], l = -1, c = function() {
            for (s = r.once,
                     o = i = !0; u.length; l = -1)
                for (t = u.shift(); ++l < a.length; )
                    !1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length,
                        t = !1);
            r.memory || (t = !1),
                i = !1,
            s && (a = t ? [] : "")
        }, f = {
            add: function() {
                return a && (t && !i && (l = a.length - 1,
                    u.push(t)),
                    function n(e) {
                        E.each(e, function(e, t) {
                            E.isFunction(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== E.type(t) && n(t)
                        })
                    }(arguments),
                t && !i && c()),
                    this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= l && l--
                }),
                    this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                    this
            },
            disable: function() {
                return s = u = [],
                    a = t = "",
                    this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = u = [],
                t || (a = t = ""),
                    this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                    u.push(t),
                i || c()),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
        ,
        E.extend({
            Deferred: function(e) {
                var o = [["resolve", "done", E.Callbacks("once memory"), "resolved"], ["reject", "fail", E.Callbacks("once memory"), "rejected"], ["notify", "progress", E.Callbacks("memory")]]
                    , i = "pending"
                    , s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = E.isFunction(i[e]) && i[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && E.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }),
                                i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, s) : s
                    }
                }
                    , a = {};
                return s.pipe = s.then,
                    E.each(o, function(e, t) {
                        var n = t[2]
                            , r = t[3];
                        s[t[1]] = n.add,
                        r && n.add(function() {
                            i = r
                        }, o[1 ^ e][2].disable, o[2][2].lock),
                            a[t[0]] = function() {
                                return a[t[0] + "With"](this === a ? s : this, arguments),
                                    this
                            }
                            ,
                            a[t[0] + "With"] = n.fireWith
                    }),
                    s.promise(a),
                e && e.call(a, a),
                    a
            },
            when: function(e) {
                var i, t, n, r = 0, o = c.call(arguments), s = o.length, a = 1 !== s || e && E.isFunction(e.promise) ? s : 0, u = 1 === a ? e : E.Deferred(), l = function(t, n, r) {
                    return function(e) {
                        n[t] = this,
                            r[t] = 1 < arguments.length ? c.call(arguments) : e,
                            r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
                if (1 < s)
                    for (i = new Array(s),
                             t = new Array(s),
                             n = new Array(s); r < s; r++)
                        o[r] && E.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --a;
                return a || u.resolveWith(n, o),
                    u.promise()
            }
        }),
        E.fn.ready = function(e) {
            return E.ready.promise().done(e),
                this
        }
        ,
        E.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? E.readyWait++ : E.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || (q.resolveWith(k, [E]),
                E.fn.triggerHandler && (E(k).triggerHandler("ready"),
                    E(k).off("ready"))))
            }
        }),
        E.ready.promise = function(e) {
            return q || (q = E.Deferred(),
                "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", H),
                    C.addEventListener("load", H))),
                q.promise(e)
        }
        ,
        E.ready.promise();
    var O = function(e, t, n, r, i, o, s) {
        var a = 0
            , u = e.length
            , l = null == n;
        if ("object" === E.type(n))
            for (a in i = !0,
                n)
                O(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
            E.isFunction(r) || (s = !0),
            l && (s ? (t.call(e, r),
                t = null) : (l = t,
                    t = function(e, t, n) {
                        return l.call(E(e), n)
                    }
            )),
                t))
            for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , F = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function P() {
        this.expando = E.expando + P.uid++
    }
    P.uid = 1,
        P.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }),
                    e[this.expando]
            },
            cache: function(e) {
                if (!F(e))
                    return {};
                var t = e[this.expando];
                return t || (t = {},
                F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                    t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[t] = n;
                else
                    for (r in t)
                        i[r] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, E.camelCase(t)) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, i, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t)
                        this.register(e);
                    else {
                        E.isArray(t) ? r = t.concat(t.map(E.camelCase)) : (i = E.camelCase(t),
                            t in o ? r = [t, i] : r = (r = i)in o ? [r] : r.match(L) || []),
                            n = r.length;
                        for (; n--; )
                            delete o[r[n]]
                    }
                    (void 0 === t || E.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
    var R = new P
        , M = new P
        , I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , W = /[A-Z]/g;
    function $(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(W, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? E.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    }),
        E.fn.extend({
            data: function(r, e) {
                var t, n, i, o = this[0], s = o && o.attributes;
                if (void 0 === r) {
                    if (this.length && (i = M.get(o),
                        1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                        for (t = s.length; t--; )
                            s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = E.camelCase(n.slice(5)),
                                $(o, n, i[n])));
                        R.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof r ? this.each(function() {
                    M.set(this, r)
                }) : O(this, function(t) {
                    var e, n;
                    if (o && void 0 === t) {
                        if (void 0 !== (e = M.get(o, r) || M.get(o, r.replace(W, "-$&").toLowerCase())))
                            return e;
                        if (n = E.camelCase(r),
                            void 0 !== (e = M.get(o, n)))
                            return e;
                        if (void 0 !== (e = $(o, n, void 0)))
                            return e
                    } else
                        n = E.camelCase(r),
                            this.each(function() {
                                var e = M.get(this, n);
                                M.set(this, n, t),
                                -1 < r.indexOf("-") && void 0 !== e && M.set(this, r, t)
                            })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    M.remove(this, e)
                })
            }
        }),
        E.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue",
                    r = R.get(e, t),
                n && (!r || E.isArray(n) ? r = R.access(e, t, E.makeArray(n)) : r.push(n)),
                r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = E._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, function() {
                        E.dequeue(e, t)
                    }, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return R.get(e, n) || R.access(e, n, {
                    empty: E.Callbacks("once memory").add(function() {
                        R.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        E.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = E.queue(this, t, n);
                        E._queueHooks(this, t),
                        "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = E.Deferred(), o = this, s = this.length, a = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; s--; )
                    (n = R.get(o[s], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(a));
                return a(),
                    i.promise(t)
            }
        });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , _ = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$","i")
        , X = ["Top", "Right", "Bottom", "Left"]
        , z = function(e, t) {
        return e = t || e,
        "none" === E.css(e, "display") || !E.contains(e.ownerDocument, e)
    };
    function U(e, t, n, r) {
        var i, o = 1, s = 20, a = r ? function() {
                return r.cur()
            }
            : function() {
                return E.css(e, t, "")
            }
            , u = a(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = (E.cssNumber[t] || "px" !== l && +u) && _.exec(E.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3],
                     n = n || [],
                     c = +u || 1; c /= o = o || ".5",
                     E.style(e, t, c + l),
                 o !== (o = a() / u) && 1 !== o && --s; )
                ;
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
    }
    var V = /^(?:checkbox|radio)$/i
        , Y = /<([\w:-]+)/
        , G = /^$|\/(?:java|ecma)script/i
        , Q = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function J(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E.nodeName(e, t) ? E.merge([e], n) : n
    }
    function K(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    Q.optgroup = Q.option,
        Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead,
        Q.th = Q.td;
    var Z, ee, te = /<|&#?\w+;/;
    function ne(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === E.type(o))
                    E.merge(p, o.nodeType ? [o] : o);
                else if (te.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                             a = (Y.exec(o) || ["", ""])[1].toLowerCase(),
                             u = Q[a] || Q._default,
                             s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                             c = u[0]; c--; )
                        s = s.lastChild;
                    E.merge(p, s.childNodes),
                        (s = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
                 d = 0; o = p[d++]; )
            if (r && -1 < E.inArray(o, r))
                i && i.push(o);
            else if (l = E.contains(o.ownerDocument, o),
                    s = J(f.appendChild(o), "script"),
                l && K(s),
                    n)
                for (c = 0; o = s[c++]; )
                    G.test(o.type || "") && n.push(o);
        return f
    }
    Z = k.createDocumentFragment().appendChild(k.createElement("div")),
        (ee = k.createElement("input")).setAttribute("type", "radio"),
        ee.setAttribute("checked", "checked"),
        ee.setAttribute("name", "t"),
        Z.appendChild(ee),
        v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked,
        Z.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/
        , ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , oe = /^([^.]*)(?:\.(.+)|)/;
    function se() {
        return !0
    }
    function ae() {
        return !1
    }
    function ue() {
        try {
            return k.activeElement
        } catch (e) {}
    }
    function le(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                le(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
            !1 === i)
            i = ae;
        else if (!i)
            return e;
        return 1 === o && (s = i,
            (i = function(e) {
                    return E().off(e),
                        s.apply(this, arguments)
                }
            ).guid = s.guid || (s.guid = E.guid++)),
            e.each(function() {
                E.event.add(this, t, i, r, n)
            })
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler,
                    i = o.selector),
                     n.guid || (n.guid = E.guid++),
                     (u = v.events) || (u = v.events = {}),
                     (s = v.handle) || (s = v.handle = function(e) {
                             return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                         }
                     ),
                         l = (e = (e || "").match(L) || [""]).length; l--; )
                    d = g = (a = oe.exec(e[l]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                    d && (f = E.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = E.event.special[d] || {},
                        c = E.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && E.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        E.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.hasData(e) && R.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(L) || [""]).length; l--; )
                    if (d = g = (a = oe.exec(t[l]) || [])[1],
                            h = (a[2] || "").split(".").sort(),
                            d) {
                        for (f = E.event.special[d] || {},
                                 p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                                 a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 s = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && R.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = E.event.fix(e);
            var t, n, r, i, o, s = [], a = c.call(arguments), u = (R.get(this, "events") || {})[e.type] || [], l = E.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this,
                !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = E.event.handlers.call(this, e, u),
                         t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                             n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                            e.data = o.data,
                        void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(),
                            e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [],
                                 n = 0; n < a; n++)
                            void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
                s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || k).documentElement,
                    i = n.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
            }
        },
        fix: function(e) {
            if (e[E.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = ie.test(i) ? this.mouseHooks : re.test(i) ? this.keyHooks : {}),
                     r = s.props ? this.props.concat(s.props) : this.props,
                     e = new E.Event(o),
                     t = r.length; t--; )
                e[n = r[t]] = o[n];
            return e.target || (e.target = k),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ue() && this.focus ? (this.focus(),
                        !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ue() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && E.nodeName(this, "input") ? (this.click(),
                        !1) : void 0
                },
                _default: function(e) {
                    return E.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        E.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        E.Event = function(e, t) {
            return this instanceof E.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ae) : this.type = e,
            t && E.extend(this, t),
                this.timeStamp = e && e.timeStamp || E.now(),
                void (this[E.expando] = !0)) : new E.Event(e,t)
        }
        ,
        E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: ae,
            isPropagationStopped: ae,
            isImmediatePropagationStopped: ae,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = se,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = se,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = se,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            E.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || E.contains(this, n)) || (e.type = r.origType,
                        t = r.handler.apply(this, arguments),
                        e.type = i),
                        t
                }
            }
        }),
        E.fn.extend({
            on: function(e, t, n, r) {
                return le(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return le(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                !1 === n && (n = ae),
                    this.each(function() {
                        E.event.remove(this, e, n, t)
                    })
            }
        });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
        , fe = /<script|<style|<link/i
        , pe = /checked\s*(?:[^=]|=\s*.checked.)/i
        , de = /^true\/(.*)/
        , he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ge(e, t) {
        return E.nodeName(e, "table") && E.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function ve(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function me(e) {
        var t = de.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function ye(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e),
                    s = R.set(t, o),
                    l = o.events))
                for (i in delete s.handle,
                    s.events = {},
                    l)
                    for (n = 0,
                             r = l[i].length; n < r; n++)
                        E.event.add(t, i, l[i][n]);
            M.hasData(e) && (a = M.access(e),
                u = E.extend({}, a),
                M.set(t, u))
        }
    }
    function xe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = E.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && pe.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                    xe(t, r, i, o)
            });
        if (f && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
            for (a = (s = E.map(J(e, "script"), ve)).length; c < f; c++)
                u = e,
                c !== p && (u = E.clone(u, !0, !0),
                a && E.merge(s, J(u, "script"))),
                    i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                         E.map(s, me),
                         c = 0; c < a; c++)
                    u = s[c],
                    G.test(u.type || "") && !R.access(u, "globalEval") && E.contains(l, u) && (u.src ? E._evalUrl && E._evalUrl(u.src) : E.globalEval(u.textContent.replace(he, "")))
        }
        return n
    }
    function be(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || E.cleanData(J(r)),
            r.parentNode && (n && E.contains(r.ownerDocument, r) && K(J(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0), f = E.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = J(c),
                         r = 0,
                         i = (o = J(e)).length; r < i; r++)
                    a = o[r],
                        u = s[r],
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && V.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || J(e),
                             s = s || J(c),
                             r = 0,
                             i = o.length; r < i; r++)
                        ye(o[r], s[r]);
                else
                    ye(e, c);
            return 0 < (s = J(c, "script")).length && K(s, !f && J(e, "script")),
                c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (F(n)) {
                    if (t = n[R.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[R.expando] = void 0
                    }
                    n[M.expando] && (n[M.expando] = void 0)
                }
        }
    }),
        E.fn.extend({
            domManip: xe,
            detach: function(e) {
                return be(this, e, !0)
            },
            remove: function(e) {
                return be(this, e)
            },
            text: function(e) {
                return O(this, function(e) {
                    return void 0 === e ? E.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return xe(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return xe(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = ge(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return xe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return xe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (E.cleanData(J(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return E.clone(this, e, t)
                    })
            },
            html: function(e) {
                return O(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !fe.test(e) && !Q[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (E.cleanData(J(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return xe(this, arguments, function(e) {
                    var t = this.parentNode;
                    E.inArray(this, n) < 0 && (E.cleanData(J(this)),
                    t && t.replaceChild(e, this))
                }, n)
            }
        }),
        E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            E.fn[e] = function(e) {
                for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                        E(r[o])[s](t),
                        a.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var we, Te = {
        HTML: "block",
        BODY: "block"
    };
    function Ce(e, t) {
        var n = E(t.createElement(e)).appendTo(t.body)
            , r = E.css(n[0], "display");
        return n.detach(),
            r
    }
    function ke(e) {
        var t = k
            , n = Te[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
            t.close(),
            n = Ce(e, t),
            we.detach()),
            Te[e] = n),
            n
    }
    var Ee = /^margin/
        , Ne = new RegExp("^(" + B + ")(?!px)[a-z%]+$","i")
        , Se = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
            t.getComputedStyle(e)
    }
        , je = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o],
                e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
            t)
            e.style[o] = s[o];
        return i
    }
        , De = k.documentElement;
    function Ae(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || Se(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || E.contains(e.ownerDocument, e) || (s = E.style(e, t)),
        n && !v.pixelMarginRight() && Ne.test(s) && Ee.test(t) && (r = a.width,
            i = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = r,
            a.minWidth = i,
            a.maxWidth = o),
            void 0 !== s ? s + "" : s
    }
    function qe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    !function() {
        var t, n, r, i, o = k.createElement("div"), s = k.createElement("div");
        if (s.style) {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    De.appendChild(o);
                var e = C.getComputedStyle(s);
                t = "1%" !== e.top,
                    i = "2px" === e.marginLeft,
                    n = "4px" === e.width,
                    s.style.marginRight = "50%",
                    r = "4px" === e.marginRight,
                    De.removeChild(o)
            }
            s.style.backgroundClip = "content-box",
                s.cloneNode(!0).style.backgroundClip = "",
                v.clearCloneStyle = "content-box" === s.style.backgroundClip,
                o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                o.appendChild(s),
                E.extend(v, {
                    pixelPosition: function() {
                        return e(),
                            t
                    },
                    boxSizingReliable: function() {
                        return null == n && e(),
                            n
                    },
                    pixelMarginRight: function() {
                        return null == n && e(),
                            r
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(),
                            i
                    },
                    reliableMarginRight: function() {
                        var e, t = s.appendChild(k.createElement("div"));
                        return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                            t.style.marginRight = t.style.width = "0",
                            s.style.width = "1px",
                            De.appendChild(o),
                            e = !parseFloat(C.getComputedStyle(t).marginRight),
                            De.removeChild(o),
                            s.removeChild(t),
                            e
                    }
                })
        }
    }();
    var Le = /^(none|table(?!-c[ea]).+)/
        , He = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , Oe = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , Fe = ["Webkit", "O", "Moz", "ms"]
        , Pe = k.createElement("div").style;
    function Re(e) {
        if (e in Pe)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--; )
            if ((e = Fe[n] + t)in Pe)
                return e
    }
    function Me(e, t, n) {
        var r = _.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ie(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += E.css(e, n + X[o], !0, i)),
                r ? ("content" === n && (s -= E.css(e, "padding" + X[o], !0, i)),
                "margin" !== n && (s -= E.css(e, "border" + X[o] + "Width", !0, i))) : (s += E.css(e, "padding" + X[o], !0, i),
                "padding" !== n && (s += E.css(e, "border" + X[o] + "Width", !0, i)));
        return s
    }
    function We(e, t, n) {
        var r = !0
            , i = "width" === t ? e.offsetWidth : e.offsetHeight
            , o = Se(e)
            , s = "border-box" === E.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Ae(e, t, o)) < 0 || null == i) && (i = e.style[t]),
                    Ne.test(i))
                return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]),
                i = parseFloat(i) || 0
        }
        return i + Ie(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function $e(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
            (r = e[s]).style && (o[s] = R.get(r, "olddisplay"),
                n = r.style.display,
                t ? (o[s] || "none" !== n || (r.style.display = ""),
                "" === r.style.display && z(r) && (o[s] = R.access(r, "olddisplay", ke(r.nodeName)))) : (i = z(r),
                "none" === n && i || R.set(r, "olddisplay", i ? n : E.css(r, "display"))));
        for (s = 0; s < a; s++)
            (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function Be(e, t, n, r, i) {
        return new Be.prototype.init(e,t,n,r,i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ae(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = E.camelCase(t), u = e.style;
                return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a),
                    s = E.cssHooks[t] || E.cssHooks[a],
                    void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = _.exec(n)) && i[1] && (n = U(e, t, i),
                        o = "number"),
                        void (null != n && n == n && ("number" === o && (n += i && i[3] || (E.cssNumber[a] ? "" : "px")),
                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = E.camelCase(t);
            return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a),
            (s = E.cssHooks[t] || E.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = Ae(e, t, r)),
            "normal" === i && t in Oe && (i = Oe[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
        E.each(["height", "width"], function(e, s) {
            E.cssHooks[s] = {
                get: function(e, t, n) {
                    return t ? Le.test(E.css(e, "display")) && 0 === e.offsetWidth ? je(e, He, function() {
                        return We(e, s, n)
                    }) : We(e, s, n) : void 0
                },
                set: function(e, t, n) {
                    var r, i = n && Se(e), o = n && Ie(e, s, n, "border-box" === E.css(e, "boxSizing", !1, i), i);
                    return o && (r = _.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                        t = E.css(e, s)),
                        Me(0, t, o)
                }
            }
        }),
        E.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(Ae(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }),
        E.cssHooks.marginRight = qe(v.reliableMarginRight, function(e, t) {
            return t ? je(e, {
                display: "inline-block"
            }, Ae, [e, "marginRight"]) : void 0
        }),
        E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            E.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + X[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
            Ee.test(i) || (E.cssHooks[i + o].set = Me)
        }),
        E.fn.extend({
            css: function(e, t) {
                return O(this, function(e, t, n) {
                    var r, i, o = {}, s = 0;
                    if (E.isArray(t)) {
                        for (r = Se(e),
                                 i = t.length; s < i; s++)
                            o[t[s]] = E.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function() {
                return $e(this, !0)
            },
            hide: function() {
                return $e(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    z(this) ? E(this).show() : E(this).hide()
                })
            }
        }),
        ((E.Tween = Be).prototype = {
            constructor: Be,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || E.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (E.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Be.propHooks[this.prop];
                return e && e.get ? e.get(this) : Be.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Be.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Be.propHooks._default.set(this),
                    this
            }
        }).init.prototype = Be.prototype,
        (Be.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = Be.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        E.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        E.fx = Be.prototype.init,
        E.fx.step = {};
    var _e, Xe, ze, Ue, Ve, Ye = /^(?:toggle|show|hide)$/, Ge = /queueHooks$/;
    function Qe() {
        return C.setTimeout(function() {
            _e = void 0
        }),
            _e = E.now()
    }
    function Je(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = X[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function Ke(e, t, n) {
        for (var r, i = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function Ze(o, e, t) {
        var n, s, r = 0, i = Ze.prefilters.length, a = E.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (s)
                return !1;
            for (var e = _e || Qe(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return a.notifyWith(o, [l, n, t]),
                n < 1 && i ? t : (a.resolveWith(o, [l]),
                    !1)
        }, l = a.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: _e || Qe(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                    n
            },
            stop: function(e) {
                var t = 0
                    , n = e ? l.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (a.notifyWith(o, [l, 1, 0]),
                    a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]),
                    this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (i = t[r = E.camelCase(n)],
                        o = e[n],
                    E.isArray(o) && (i = o[1],
                        o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                        delete e[n]),
                    (s = E.cssHooks[r]) && "expand"in s)
                    for (n in o = s.expand(o),
                        delete e[r],
                        o)
                        n in e || (e[n] = o[n],
                            t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = Ze.prefilters[r].call(l, o, c, l.opts))
                return E.isFunction(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = E.proxy(n.stop, n)),
                    n;
        return E.map(c, Ke, l),
        E.isFunction(l.opts.start) && l.opts.start.call(o, l),
            E.fx.timer(E.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    E.Animation = E.extend(Ze, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, _.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            E.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(L);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    Ze.tweeners[n] = Ze.tweeners[n] || [],
                    Ze.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, u, l, c = this, f = {}, p = t.style, d = t.nodeType && z(t), h = R.get(t, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
                    u = a.empty.fire,
                    a.empty.fire = function() {
                        a.unqueued || u()
                    }
            ),
                a.unqueued++,
                c.always(function() {
                    c.always(function() {
                        a.unqueued--,
                        E.queue(t, "fx").length || a.empty.fire()
                    })
                })),
            1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
            "inline" === ("none" === (l = E.css(t, "display")) ? R.get(t, "olddisplay") || ke(t.nodeName) : l) && "none" === E.css(t, "float") && (p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden",
                c.always(function() {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                })),
                e)
                if (i = e[r],
                        Ye.exec(i)) {
                    if (delete e[r],
                            o = o || "toggle" === i,
                        i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r])
                            continue;
                        d = !0
                    }
                    f[r] = h && h[r] || E.style(t, r)
                } else
                    l = void 0;
            if (E.isEmptyObject(f))
                "inline" === ("none" === l ? ke(t.nodeName) : l) && (p.display = l);
            else
                for (r in h ? "hidden"in h && (d = h.hidden) : h = R.access(t, "fxshow", {}),
                o && (h.hidden = !d),
                    d ? E(t).show() : c.done(function() {
                        E(t).hide()
                    }),
                    c.done(function() {
                        var e;
                        for (e in R.remove(t, "fxshow"),
                            f)
                            E.style(t, e, f[e])
                    }),
                    f)
                    s = Ke(d ? h[r] : 0, r, c),
                    r in h || (h[r] = s.start,
                    d && (s.end = s.start,
                        s.start = "width" === r || "height" === r ? 1 : 0))
        }
        ],
        prefilter: function(e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }),
        E.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : {
                complete: n || !n && t || E.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !E.isFunction(t) && t
            };
            return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default,
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    E.isFunction(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        E.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(z).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = E.isEmptyObject(t)
                    , o = E.speed(e, n, r)
                    , s = function() {
                    var e = Ze(this, E.extend({}, t), o);
                    (i || R.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s,
                    i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(i, e, o) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(o)
                };
                return "string" != typeof i && (o = e,
                    e = i,
                    i = void 0),
                e && !1 !== i && this.queue(i || "fx", []),
                    this.each(function() {
                        var e = !0
                            , t = null != i && i + "queueHooks"
                            , n = E.timers
                            , r = R.get(this);
                        if (t)
                            r[t] && r[t].stop && s(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && Ge.test(t) && s(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                                e = !1,
                                n.splice(t, 1));
                        !e && o || E.dequeue(this, i)
                    })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"),
                    this.each(function() {
                        var e, t = R.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = E.timers, o = n ? n.length : 0;
                        for (t.finish = !0,
                                 E.queue(this, s, []),
                             r && r.stop && r.stop.call(this, !0),
                                 e = i.length; e--; )
                            i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                                i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        E.each(["toggle", "show", "hide"], function(e, r) {
            var i = E.fn[r];
            E.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Je(r, !0), e, t, n)
            }
        }),
        E.each({
            slideDown: Je("show"),
            slideUp: Je("hide"),
            slideToggle: Je("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            E.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        E.timers = [],
        E.fx.tick = function() {
            var e, t = 0, n = E.timers;
            for (_e = E.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(),
                _e = void 0
        }
        ,
        E.fx.timer = function(e) {
            E.timers.push(e),
                e() ? E.fx.start() : E.timers.pop()
        }
        ,
        E.fx.interval = 13,
        E.fx.start = function() {
            Xe || (Xe = C.setInterval(E.fx.tick, E.fx.interval))
        }
        ,
        E.fx.stop = function() {
            C.clearInterval(Xe),
                Xe = null
        }
        ,
        E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        E.fn.delay = function(r, e) {
            return r = E.fx && E.fx.speeds[r] || r,
                e = e || "fx",
                this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n)
                    }
                })
        }
        ,
        ze = k.createElement("input"),
        Ue = k.createElement("select"),
        Ve = Ue.appendChild(k.createElement("option")),
        ze.type = "checkbox",
        v.checkOn = "" !== ze.value,
        v.optSelected = Ve.selected,
        Ue.disabled = !0,
        v.optDisabled = !Ve.disabled,
        (ze = k.createElement("input")).value = "t",
        ze.type = "radio",
        v.radioValue = "t" === ze.value;
    var et, tt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return O(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
        E.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (t = t.toLowerCase(),
                        i = E.attrHooks[t] || (E.expr.match.bool.test(t) ? et : void 0)),
                        void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && E.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, o = t && t.match(L);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        r = E.propFix[n] || n,
                        E.expr.match.bool.test(n) && (e[r] = !1),
                            e.removeAttribute(n)
            }
        }),
        et = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = tt[t] || E.find.attr;
            tt[t] = function(e, t, n) {
                var r, i;
                return n || (i = tt[t],
                    tt[t] = r,
                    r = null != o(e, t, n) ? t.toLowerCase() : null,
                    tt[t] = i),
                    r
            }
        });
    var nt = /^(?:input|select|textarea|button)$/i
        , rt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return O(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
        E.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                        i = E.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
    v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
        E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            E.propFix[this.toLowerCase()] = this
        });
    var it = /[\t\r\n\f]/g;
    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, ot(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++]; )
                    if (i = ot(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, ot(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++]; )
                    if (i = ot(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : E.isFunction(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, ot(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0,
                             n = E(this),
                             r = i.match(L) || []; e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" !== o || ((e = ot(this)) && R.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : R.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + ot(n) + " ").replace(it, " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var st = /\r/g
        , at = /[\x20\t\r\n\f]+/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = E.isFunction(n),
                this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : E.isArray(t) && (t = E.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(st, "") : null == e ? "" : e : void 0
        }
    }),
        E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : E.trim(E.text(e)).replace(at, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                            if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !E.nodeName(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(),
                                        o)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = E.makeArray(t), s = i.length; s--; )
                            ((r = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        E.each(["radio", "checkbox"], function() {
            E.valHooks[this] = {
                set: function(e, t) {
                    return E.isArray(t) ? e.checked = -1 < E.inArray(E(e).val(), t) : void 0
                }
            },
            v.checkOn || (E.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        });
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c, f = [n || k], p = h.call(e, "type") ? e.type : e, d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || k,
                3 !== n.nodeType && 8 !== n.nodeType && !ut.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
                    d.sort()),
                    u = p.indexOf(":") < 0 && "on" + p,
                    (e = e[E.expando] ? e : new E.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
                    e.namespace = d.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                e.target || (e.target = n),
                    t = null == t ? [e] : E.makeArray(t, [e]),
                    c = E.event.special[p] || {},
                r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !E.isWindow(n)) {
                    for (a = c.delegateType || p,
                         ut.test(a + p) || (o = o.parentNode); o; o = o.parentNode)
                        f.push(o),
                            s = o;
                    s === (n.ownerDocument || k) && f.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); )
                    e.type = 1 < i ? a : c.bindType || p,
                    (l = (R.get(o, "events") || {})[e.type] && R.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && F(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !F(n) || u && E.isFunction(n[p]) && !E.isWindow(n) && ((s = n[u]) && (n[u] = null),
                    n[E.event.triggered = p](),
                    E.event.triggered = void 0,
                s && (n[u] = s)),
                    e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }),
        E.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    E.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? E.event.trigger(e, t, n, !0) : void 0
            }
        }),
        E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
            E.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        E.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        v.focusin = "onfocusin"in C,
    v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                    , t = R.access(e, r);
                t || e.addEventListener(n, i, !0),
                    R.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                    , t = R.access(e, r) - 1;
                t ? R.access(e, r, t) : (e.removeEventListener(n, i, !0),
                    R.remove(e, r))
            }
        }
    });
    var lt = C.location
        , ct = E.now()
        , ft = /\?/;
    E.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
        ,
        E.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new C.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e),
                t
        }
    ;
    var pt = /#.*$/
        , dt = /([?&])_=[^&]*/
        , ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , gt = /^(?:GET|HEAD)$/
        , vt = /^\/\//
        , mt = {}
        , yt = {}
        , xt = "*/".concat("*")
        , bt = k.createElement("a");
    function wt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, r = 0, i = e.toLowerCase().match(L) || [];
            if (E.isFunction(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Tt(t, i, o, s) {
        var a = {}
            , u = t === yt;
        function l(e) {
            var r;
            return a[e] = !0,
                E.each(t[e] || [], function(e, t) {
                    var n = t(i, o, s);
                    return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                        l(n),
                        !1)
                }),
                r
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }
    function Ct(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r),
            e
    }
    bt.href = lt.href,
        E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: lt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": E.parseJSON,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ct(Ct(e, E.ajaxSettings), t) : Ct(E.ajaxSettings, e)
            },
            ajaxPrefilter: wt(mt),
            ajaxTransport: wt(yt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var c, f, p, n, d, r, h, i, g = E.ajaxSetup({}, t), v = g.context || g, m = g.context && (v.nodeType || v.jquery) ? E(v) : E.event, y = E.Deferred(), x = E.Callbacks("once memory"), b = g.statusCode || {}, o = {}, s = {}, w = 0, a = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; t = ht.exec(p); )
                                    n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e,
                            o[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return w || (g.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                            else
                                T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return c && c.abort(t),
                            u(0, t),
                            this
                    }
                };
                if (y.promise(T).complete = x.add,
                        T.success = T.done,
                        T.error = T.fail,
                        g.url = ((e || g.url || lt.href) + "").replace(pt, "").replace(vt, lt.protocol + "//"),
                        g.type = t.method || t.type || g.method || g.type,
                        g.dataTypes = E.trim(g.dataType || "*").toLowerCase().match(L) || [""],
                    null == g.crossDomain) {
                    r = k.createElement("a");
                    try {
                        r.href = g.url,
                            r.href = r.href,
                            g.crossDomain = bt.protocol + "//" + bt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        g.crossDomain = !0
                    }
                }
                if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)),
                        Tt(mt, g, t, T),
                    2 === w)
                    return T;
                for (i in (h = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                    g.type = g.type.toUpperCase(),
                    g.hasContent = !gt.test(g.type),
                    f = g.url,
                g.hasContent || (g.data && (f = g.url += (ft.test(f) ? "&" : "?") + g.data,
                    delete g.data),
                !1 === g.cache && (g.url = dt.test(f) ? f.replace(dt, "$1_=" + ct++) : f + (ft.test(f) ? "&" : "?") + "_=" + ct++)),
                g.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]),
                E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])),
                (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType),
                    T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : g.accepts["*"]),
                    g.headers)
                    T.setRequestHeader(i, g.headers[i]);
                if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || 2 === w))
                    return T.abort();
                for (i in a = "abort",
                    {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                    T[i](g[i]);
                if (c = Tt(yt, g, t, T)) {
                    if (T.readyState = 1,
                        h && m.trigger("ajaxSend", [T, g]),
                        2 === w)
                        return T;
                    g.async && 0 < g.timeout && (d = C.setTimeout(function() {
                        T.abort("timeout")
                    }, g.timeout));
                    try {
                        w = 1,
                            c.send(o, u)
                    } catch (e) {
                        if (!(w < 2))
                            throw e;
                        u(-1, e)
                    }
                } else
                    u(-1, "No Transport");
                function u(e, t, n, r) {
                    var i, o, s, a, u, l = t;
                    2 !== w && (w = 2,
                    d && C.clearTimeout(d),
                        c = void 0,
                        p = r || "",
                        T.readyState = 0 < e ? 4 : 0,
                        i = 200 <= e && e < 300 || 304 === e,
                    n && (a = function(e, t, n) {
                        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    u.unshift(i);
                                    break
                                }
                        if (u[0]in n)
                            o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                s || (s = i)
                            }
                            o = o || s
                        }
                        return o ? (o !== u[0] && u.unshift(o),
                            n[o]) : void 0
                    }(g, T, n)),
                        a = function(e, t, n, r) {
                            var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters)
                                    l[s.toLowerCase()] = e.converters[s];
                            for (o = c.shift(); o; )
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                        u = o,
                                        o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(s = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                                        c.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws)
                                                t = s(t);
                                            else
                                                try {
                                                    t = s(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(g, a, T, i),
                        i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u),
                        (u = T.getResponseHeader("etag")) && (E.etag[f] = u)),
                            204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state,
                                o = a.data,
                                i = !(s = a.error))) : (s = l,
                        !e && l || (l = "error",
                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || l) + "",
                        i ? y.resolveWith(v, [o, l, T]) : y.rejectWith(v, [T, l, s]),
                        T.statusCode(b),
                        b = void 0,
                    h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]),
                        x.fireWith(v, [T, l]),
                    h && (m.trigger("ajaxComplete", [T, g]),
                    --E.active || E.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script")
            }
        }),
        E.each(["get", "post"], function(e, i) {
            E[i] = function(e, t, n, r) {
                return E.isFunction(t) && (r = r || n,
                    n = t,
                    t = void 0),
                    E.ajax(E.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, E.isPlainObject(e) && e))
            }
        }),
        E._evalUrl = function(e) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        E.fn.extend({
            wrapAll: function(t) {
                var e;
                return E.isFunction(t) ? this.each(function(e) {
                    E(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = E(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this)
            },
            wrapInner: function(n) {
                return E.isFunction(n) ? this.each(function(e) {
                    E(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = E(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = E.isFunction(t);
                return this.each(function(e) {
                    E(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    E.nodeName(this, "body") || E(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        E.expr.filters.hidden = function(e) {
            return !E.expr.filters.visible(e)
        }
        ,
        E.expr.filters.visible = function(e) {
            return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
        }
    ;
    var kt = /%20/g
        , Et = /\[\]$/
        , Nt = /\r?\n/g
        , St = /^(?:submit|button|image|reset|file)$/i
        , jt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (E.isArray(e))
            E.each(e, function(e, t) {
                r || Et.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== E.type(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = E.isFunction(t) ? t() : null == t ? "" : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = E.ajaxSettings && E.ajaxSettings.traditional),
            E.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&").replace(kt, "+")
    }
        ,
        E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !V.test(e))
                }).map(function(e, t) {
                    var n = E(this).val();
                    return null == n ? null : E.isArray(n) ? E.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                }).get()
            }
        }),
        E.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        }
    ;
    var At = {
        0: 200,
        1223: 204
    }
        , qt = E.ajaxSettings.xhr();
    v.cors = !!qt && "withCredentials"in qt,
        v.ajax = qt = !!qt,
        E.ajaxTransport(function(i) {
            var o, s;
            return v.cors || qt && !i.crossDomain ? {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                            i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                        e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null,
                                "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()))
                        }
                    }
                        ,
                        r.onload = o(),
                        s = r.onerror = o("error"),
                        void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                            4 === r.readyState && C.setTimeout(function() {
                                o && s()
                            })
                        }
                        ,
                        o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            } : void 0
        }),
        E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return E.globalEval(e),
                        e
                }
            }
        }),
        E.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        E.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain)
                return {
                    send: function(e, t) {
                        r = E("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                                r.remove(),
                                    i = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            k.head.appendChild(r[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        });
    var Lt = []
        , Ht = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || E.expando + "_" + ct++;
            return this[e] = !0,
                e
        }
    }),
        E.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, s = !1 !== e.jsonp && (Ht.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(Ht, "$1" + r) : !1 !== e.jsonp && (e.url += (ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return o || E.error(r + " was not called"),
                        o[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = C[r],
                C[r] = function() {
                    o = arguments
                }
                ,
                n.always(function() {
                    void 0 === i ? E(C).removeProp(r) : C[r] = i,
                    e[r] && (e.jsonpCallback = t.jsonpCallback,
                        Lt.push(r)),
                    o && E.isFunction(i) && i(o[0]),
                        o = i = void 0
                }),
                "script") : void 0
        }),
        E.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
                t = !1),
                t = t || k;
            var r = b.exec(e)
                , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ne([e], t, i),
            i && i.length && E(i).remove(),
                E.merge([], r.childNodes))
        }
    ;
    var Ot = E.fn.load;
    function Ft(e) {
        return E.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    E.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot)
            return Ot.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return -1 < a && (r = E.trim(e.slice(a)),
            e = e.slice(0, a)),
            E.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
                s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
            this
    }
        ,
        E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            E.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        E.expr.filters.animated = function(t) {
            return E.grep(E.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        E.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, s, a, u, l = E.css(e, "position"), c = E(e), f = {};
                "static" === l && (e.style.position = "relative"),
                    a = c.offset(),
                    o = E.css(e, "top"),
                    u = E.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top,
                        i = r.left) : (s = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                E.isFunction(t) && (t = t.call(e, n, E.extend({}, a))),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + i),
                    "using"in t ? t.using.call(e, f) : c.css(f)
            }
        },
        E.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        E.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0], i = {
                    top: 0,
                    left: 0
                }, o = r && r.ownerDocument;
                return o ? (e = o.documentElement,
                    E.contains(e, r) ? (i = r.getBoundingClientRect(),
                        n = Ft(o),
                        {
                            top: i.top + n.pageYOffset - e.clientTop,
                            left: i.left + n.pageXOffset - e.clientLeft
                        }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === E.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    E.nodeName(e[0], "html") || (r = e.offset()),
                        r.top += E.css(e[0], "borderTopWidth", !0),
                        r.left += E.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - r.top - E.css(n, "marginTop", !0),
                            left: t.left - r.left - E.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                        e = e.offsetParent;
                    return e || De
                })
            }
        }),
        E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            E.fn[t] = function(e) {
                return O(this, function(e, t, n) {
                    var r = Ft(e);
                    return void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
                }, t, e, arguments.length)
            }
        }),
        E.each(["top", "left"], function(e, n) {
            E.cssHooks[n] = qe(v.pixelPosition, function(e, t) {
                return t ? (t = Ae(e, n),
                    Ne.test(t) ? E(e).position()[n] + "px" : t) : void 0
            })
        }),
        E.each({
            Height: "height",
            Width: "width"
        }, function(o, s) {
            E.each({
                padding: "inner" + o,
                content: s,
                "": "outer" + o
            }, function(r, e) {
                E.fn[e] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                        , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return O(this, function(e, t, n) {
                        var r;
                        return E.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                    }, s, n ? e : void 0, n, null)
                }
            })
        }),
        E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }),
        E.fn.andSelf = E.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Pt = C.jQuery
        , Rt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Rt),
        e && C.jQuery === E && (C.jQuery = Pt),
            E
    }
        ,
    e || (C.jQuery = C.$ = E),
        E
});
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    function s(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function y(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function b(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function w(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = y(e)
            , n = t.overflow
            , r = t.overflowX
            , o = t.overflowY;
        return /(auto|scroll)/.test(n + o + r) ? e : w(b(e))
    }
    function E(e) {
        var t = e && e.offsetParent
            , n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === y(t, "position") ? E(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function l(e) {
        return null === e.parentNode ? e : l(e.parentNode)
    }
    function O(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
            , r = n ? e : t
            , o = n ? t : e
            , i = document.createRange();
        i.setStart(r, 0),
            i.setEnd(o, 0);
        var s, f, a = i.commonAncestorContainer;
        if (e !== a && t !== a || r.contains(o))
            return "BODY" === (f = (s = a).nodeName) || "HTML" !== f && E(s.firstElementChild) !== s ? E(a) : a;
        var p = l(e);
        return p.host ? O(p.host, t) : O(e, l(t).host)
    }
    function x(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
            , n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[t]
        }
        return e[t]
    }
    function u(e, t) {
        var n = "x" === t ? "Left" : "Top"
            , r = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
    }
    function r(e, t, n, r) {
        return M(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Y() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function L() {
        var e = document.body
            , t = document.documentElement
            , n = Y() && getComputedStyle(t);
        return {
            height: r("Height", e, t, n),
            width: r("Width", e, t, n)
        }
    }
    function T(e) {
        return z({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function D(e) {
        var t = {};
        if (Y())
            try {
                t = e.getBoundingClientRect();
                var n = x(e, "top")
                    , r = x(e, "left");
                t.top += n,
                    t.left += r,
                    t.bottom += n,
                    t.right += r
            } catch (e) {}
        else
            t = e.getBoundingClientRect();
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
            , i = "HTML" === e.nodeName ? L() : {}
            , s = i.width || e.clientWidth || o.right - o.left
            , f = i.height || e.clientHeight || o.bottom - o.top
            , a = e.offsetWidth - s
            , p = e.offsetHeight - f;
        if (a || p) {
            var l = y(e);
            a -= u(l, "x"),
                p -= u(l, "y"),
                o.width -= a,
                o.height -= p
        }
        return T(o)
    }
    function N(e, t) {
        var n = Y()
            , r = "HTML" === t.nodeName
            , o = D(e)
            , i = D(t)
            , s = w(e)
            , f = y(t)
            , a = parseFloat(f.borderTopWidth, 10)
            , p = parseFloat(f.borderLeftWidth, 10)
            , l = T({
            top: o.top - i.top - a,
            left: o.left - i.left - p,
            width: o.width,
            height: o.height
        });
        if (l.marginTop = 0,
                l.marginLeft = 0,
            !n && r) {
            var u = parseFloat(f.marginTop, 10)
                , c = parseFloat(f.marginLeft, 10);
            l.top -= a - u,
                l.bottom -= a - u,
                l.left -= p - c,
                l.right -= p - c,
                l.marginTop = u,
                l.marginLeft = c
        }
        return (n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (l = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                , r = x(t, "top")
                , o = x(t, "left")
                , i = n ? -1 : 1;
            return e.top += r * i,
                e.bottom += r * i,
                e.left += o * i,
                e.right += o * i,
                e
        }(l, t)),
            l
    }
    function c(e, t, n, r) {
        var o, i, s, f, a, p, l, u = {
            top: 0,
            left: 0
        }, c = O(e, t);
        if ("viewport" === r)
            i = (o = c).ownerDocument.documentElement,
                s = N(o, i),
                f = M(i.clientWidth, window.innerWidth || 0),
                a = M(i.clientHeight, window.innerHeight || 0),
                p = x(i),
                l = x(i, "left"),
                u = T({
                    top: p - s.top + s.marginTop,
                    left: l - s.left + s.marginLeft,
                    width: f,
                    height: a
                });
        else {
            var d;
            "scrollParent" === r ? "BODY" === (d = w(b(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === r ? e.ownerDocument.documentElement : r;
            var h = N(d, c);
            if ("HTML" !== d.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === y(t, "position") || e(b(t)))
                }(c))
                u = h;
            else {
                var m = L()
                    , g = m.height
                    , v = m.width;
                u.top += h.top - h.marginTop,
                    u.bottom = g + h.top,
                    u.left += h.left - h.marginLeft,
                    u.right = v + h.left
            }
        }
        return u.left += n,
            u.top += n,
            u.right -= n,
            u.bottom -= n,
            u
    }
    function f(e, t, r, n, o) {
        var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = c(r, n, i, o)
            , f = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
            , a = Object.keys(f).map(function(e) {
            return z({
                key: e
            }, f[e], {
                area: (t = f[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
            , p = a.filter(function(e) {
            var t = e.width
                , n = e.height;
            return t >= r.clientWidth && n >= r.clientHeight
        })
            , l = 0 < p.length ? p[0].key : a[0].key
            , u = e.split("-")[1];
        return l + (u ? "-" + u : "")
    }
    function a(e, t, n) {
        return N(n, O(t, n))
    }
    function k(e) {
        var t = getComputedStyle(e)
            , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
            , r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }
    function B(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function H(e, t, n) {
        n = n.split("-")[0];
        var r = k(e)
            , o = {
            width: r.width,
            height: r.height
        }
            , i = -1 !== ["right", "left"].indexOf(n)
            , s = i ? "top" : "left"
            , f = i ? "left" : "top"
            , a = i ? "height" : "width"
            , p = i ? "width" : "height";
        return o[s] = t[s] + t[a] / 2 - r[a] / 2,
            o[f] = n === f ? t[f] - r[p] : t[B(f)],
            o
    }
    function W(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function A(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var r = W(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(r)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && s(t) && (n.offsets.popper = T(n.offsets.popper),
                n.offsets.reference = T(n.offsets.reference),
                n = t(n, e))
        }),
            n
    }
    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function C(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
            var o = t[r]
                , i = o ? "" + o + n : e;
            if (void 0 !== document.body.style[i])
                return i
        }
        return null
    }
    function i(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function t(e, t, n, r) {
        n.updateBound = r,
            i(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
        var o = w(e);
        return function e(t, n, r, o) {
            var i = "BODY" === t.nodeName
                , s = i ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, r, {
                passive: !0
            }),
            i || e(w(s.parentNode), n, r, o),
                o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = o,
            n.eventsEnabled = !0,
            n
    }
    function n() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = (e = this.reference,
                t = this.state,
                i(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }),
                t.updateBound = null,
                t.scrollParents = [],
                t.scrollElement = null,
                t.eventsEnabled = !1,
                t))
    }
    function d(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function p(n, r) {
        Object.keys(r).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && d(r[e]) && (t = "px"),
                n.style[e] = r[e] + t
        })
    }
    function F(e, t, n) {
        var r = W(e, function(e) {
            return e.name === t
        })
            , o = !!r && e.some(function(e) {
            return e.name === n && e.enabled && e.order < r.order
        });
        if (!o) {
            var i = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
        }
        return o
    }
    function o(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            , n = _.indexOf(e)
            , r = _.slice(n + 1).concat(_.slice(0, n));
        return t ? r.reverse() : r
    }
    function h(e, o, i, t) {
        var s = [0, 0]
            , f = -1 !== ["right", "left"].indexOf(t)
            , n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
            , r = n.indexOf(W(n, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        n[r] && -1 === n[r].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var a = /\s*,\s*|\s+/
            , p = -1 === r ? [n] : [n.slice(0, r).concat([n[r].split(a)[0]]), [n[r].split(a)[1]].concat(n.slice(r + 1))];
        return (p = p.map(function(e, t) {
            var n = (1 === t ? !f : f) ? "height" : "width"
                , r = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                    r = !0,
                    e) : r ? (e[e.length - 1] += t,
                    r = !1,
                    e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, r) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                        , i = +o[1]
                        , s = o[2];
                    if (!i)
                        return e;
                    if (0 === s.indexOf("%")) {
                        var f;
                        switch (s) {
                            case "%p":
                                f = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                f = r
                        }
                        return T(f)[t] / 100 * i
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? M(document.documentElement.clientHeight, window.innerHeight || 0) : M(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i
                }(e, n, o, i)
            })
        })).forEach(function(n, r) {
            n.forEach(function(e, t) {
                d(e) && (s[r] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
            s
    }
    for (var P = Math.min, S = Math.floor, M = Math.max, m = "undefined" != typeof window && "undefined" != typeof document, g = ["Edge", "Trident", "Firefox"], v = 0, j = 0; j < g.length; j += 1)
        if (m && 0 <= navigator.userAgent.indexOf(g[j])) {
            v = 1;
            break
        }
    var R, U = m && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                    window.Promise.resolve().then(function() {
                        t = !1,
                            e()
                    }))
            }
        }
        : function(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                    setTimeout(function() {
                        t = !1,
                            e()
                    }, v))
            }
        }
        , Y = function() {
        return null == R && (R = -1 !== navigator.appVersion.indexOf("MSIE 10")),
            R
    }, I = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }, q = function() {
        function r(e, t) {
            for (var n, r = 0; r < t.length; r++)
                (n = t[r]).enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
        }
        return function(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
                e
        }
    }(), V = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
            e
    }, z = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var r in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    }
        , G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], _ = G.slice(3), X = "flip", J = "clockwise", K = "counterclockwise", Q = function() {
        function i(e, t) {
            var n = this
                , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            I(this, i),
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }
                ,
                this.update = U(this.update.bind(this)),
                this.options = z({}, i.Defaults, r),
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                },
                this.reference = e && e.jquery ? e[0] : e,
                this.popper = t && t.jquery ? t[0] : t,
                this.options.modifiers = {},
                Object.keys(z({}, i.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = z({}, i.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }),
                this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return z({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }),
                this.modifiers.forEach(function(e) {
                    e.enabled && s(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }),
                this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(),
                this.state.eventsEnabled = o
        }
        return q(i, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = a(this.state, this.popper, this.reference),
                            e.placement = f(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                            e.originalPlacement = e.placement,
                            e.offsets.popper = H(this.popper, e.offsets.reference, e.placement),
                            e.offsets.popper.position = "absolute",
                            e = A(this.modifiers, e),
                            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                                this.options.onCreate(e))
                    }
                }
                    .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                        this.popper.style.left = "",
                        this.popper.style.position = "",
                        this.popper.style.top = "",
                        this.popper.style[C("transform")] = ""),
                        this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                }
                    .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                    .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return n.call(this)
            }
        }]),
            i
    }();
    return Q.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
        Q.placements = G,
        Q.Defaults = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement
                            , n = t.split("-")[0]
                            , r = t.split("-")[1];
                        if (r) {
                            var o = e.offsets
                                , i = o.reference
                                , s = o.popper
                                , f = -1 !== ["bottom", "top"].indexOf(n)
                                , a = f ? "left" : "top"
                                , p = f ? "width" : "height"
                                , l = {
                                start: V({}, a, i[a]),
                                end: V({}, a, i[a] + i[p] - s[p])
                            };
                            e.offsets.popper = z({}, s, l[r])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, r = t.offset, o = e.placement, i = e.offsets, s = i.popper, f = i.reference, a = o.split("-")[0];
                        return n = d(+r) ? [+r, 0] : h(r, s, f, a),
                            "left" === a ? (s.top += n[0],
                                s.left -= n[1]) : "right" === a ? (s.top += n[0],
                                s.left += n[1]) : "top" === a ? (s.left += n[0],
                                s.top -= n[1]) : "bottom" === a && (s.left += n[0],
                                s.top += n[1]),
                            e.popper = s,
                            e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, r) {
                        var t = r.boundariesElement || E(e.instance.popper);
                        e.instance.reference === t && (t = E(t));
                        var o = c(e.instance.popper, e.instance.reference, r.padding, t);
                        r.boundaries = o;
                        var n = r.priority
                            , i = e.offsets.popper
                            , s = {
                            primary: function(e) {
                                var t = i[e];
                                return i[e] < o[e] && !r.escapeWithReference && (t = M(i[e], o[e])),
                                    V({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top"
                                    , n = i[t];
                                return i[e] > o[e] && !r.escapeWithReference && (n = P(i[t], o[e] - ("right" === e ? i.width : i.height))),
                                    V({}, t, n)
                            }
                        };
                        return n.forEach(function(e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            i = z({}, i, s[t](e))
                        }),
                            e.offsets.popper = i,
                            e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets
                            , n = t.popper
                            , r = t.reference
                            , o = e.placement.split("-")[0]
                            , i = S
                            , s = -1 !== ["top", "bottom"].indexOf(o)
                            , f = s ? "right" : "bottom"
                            , a = s ? "left" : "top"
                            , p = s ? "width" : "height";
                        return n[f] < i(r[a]) && (e.offsets.popper[a] = i(r[a]) - n[p]),
                        n[a] > i(r[f]) && (e.offsets.popper[a] = i(r[f])),
                            e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!F(e.instance.modifiers, "arrow", "keepTogether"))
                            return e;
                        var r = t.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r)))
                                return e
                        } else if (!e.instance.popper.contains(r))
                            return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                                e;
                        var o = e.placement.split("-")[0]
                            , i = e.offsets
                            , s = i.popper
                            , f = i.reference
                            , a = -1 !== ["left", "right"].indexOf(o)
                            , p = a ? "height" : "width"
                            , l = a ? "Top" : "Left"
                            , u = l.toLowerCase()
                            , c = a ? "left" : "top"
                            , d = a ? "bottom" : "right"
                            , h = k(r)[p];
                        f[d] - h < s[u] && (e.offsets.popper[u] -= s[u] - (f[d] - h)),
                        f[u] + h > s[d] && (e.offsets.popper[u] += f[u] + h - s[d]),
                            e.offsets.popper = T(e.offsets.popper);
                        var m = f[u] + f[p] / 2 - h / 2
                            , g = y(e.instance.popper)
                            , v = parseFloat(g["margin" + l], 10)
                            , b = parseFloat(g["border" + l + "Width"], 10)
                            , w = m - e.offsets.popper[u] - v - b;
                        return w = M(P(s[p] - h, w), 0),
                            e.arrowElement = r,
                            e.offsets.arrow = (V(n = {}, u, Math.round(w)),
                                V(n, c, ""),
                                n),
                            e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(h, m) {
                        if (e(h.instance.modifiers, "inner"))
                            return h;
                        if (h.flipped && h.placement === h.originalPlacement)
                            return h;
                        var g = c(h.instance.popper, h.instance.reference, m.padding, m.boundariesElement)
                            , v = h.placement.split("-")[0]
                            , b = B(v)
                            , w = h.placement.split("-")[1] || ""
                            , y = [];
                        switch (m.behavior) {
                            case X:
                                y = [v, b];
                                break;
                            case J:
                                y = o(v);
                                break;
                            case K:
                                y = o(v, !0);
                                break;
                            default:
                                y = m.behavior
                        }
                        return y.forEach(function(e, t) {
                            if (v !== e || y.length === t + 1)
                                return h;
                            v = h.placement.split("-")[0],
                                b = B(v);
                            var n, r = h.offsets.popper, o = h.offsets.reference, i = S, s = "left" === v && i(r.right) > i(o.left) || "right" === v && i(r.left) < i(o.right) || "top" === v && i(r.bottom) > i(o.top) || "bottom" === v && i(r.top) < i(o.bottom), f = i(r.left) < i(g.left), a = i(r.right) > i(g.right), p = i(r.top) < i(g.top), l = i(r.bottom) > i(g.bottom), u = "left" === v && f || "right" === v && a || "top" === v && p || "bottom" === v && l, c = -1 !== ["top", "bottom"].indexOf(v), d = !!m.flipVariations && (c && "start" === w && f || c && "end" === w && a || !c && "start" === w && p || !c && "end" === w && l);
                            (s || u || d) && (h.flipped = !0,
                            (s || u) && (v = y[t + 1]),
                            d && (w = "end" === (n = w) ? "start" : "start" === n ? "end" : n),
                                h.placement = v + (w ? "-" + w : ""),
                                h.offsets.popper = z({}, h.offsets.popper, H(h.instance.popper, h.offsets.reference, h.placement)),
                                h = A(h.instance.modifiers, h, "flip"))
                        }),
                            h
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement
                            , n = t.split("-")[0]
                            , r = e.offsets
                            , o = r.popper
                            , i = r.reference
                            , s = -1 !== ["left", "right"].indexOf(n)
                            , f = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = i[n] - (f ? o[s ? "width" : "height"] : 0),
                            e.placement = B(t),
                            e.offsets.popper = T(o),
                            e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!F(e.instance.modifiers, "hide", "preventOverflow"))
                            return e;
                        var t = e.offsets.reference
                            , n = W(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0,
                                e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1,
                                e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x
                            , r = t.y
                            , o = e.offsets.popper
                            , i = W(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                        void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, f, a = void 0 === i ? t.gpuAcceleration : i, p = D(E(e.instance.popper)), l = {
                            position: o.position
                        }, u = {
                            left: S(o.left),
                            top: S(o.top),
                            bottom: S(o.bottom),
                            right: S(o.right)
                        }, c = "bottom" === n ? "top" : "bottom", d = "right" === r ? "left" : "right", h = C("transform");
                        if (f = "bottom" == c ? -p.height + u.bottom : u.top,
                                s = "right" == d ? -p.width + u.right : u.left,
                            a && h)
                            l[h] = "translate3d(" + s + "px, " + f + "px, 0)",
                                l[c] = 0,
                                l[d] = 0,
                                l.willChange = "transform";
                        else {
                            var m = "bottom" == c ? -1 : 1
                                , g = "right" == d ? -1 : 1;
                            l[c] = f * m,
                                l[d] = s * g,
                                l.willChange = c + ", " + d
                        }
                        var v = {
                            "x-placement": e.placement
                        };
                        return e.attributes = z({}, v, e.attributes),
                            e.styles = z({}, l, e.styles),
                            e.arrowStyles = z({}, e.offsets.arrow, e.arrowStyles),
                            e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return p(e.instance.popper, e.styles),
                            t = e.instance.popper,
                            n = e.attributes,
                            Object.keys(n).forEach(function(e) {
                                !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                            }),
                        e.arrowElement && Object.keys(e.arrowStyles).length && p(e.arrowElement, e.arrowStyles),
                            e;
                        var t, n
                    },
                    onLoad: function(e, t, n, r, o) {
                        var i = a(0, t, e)
                            , s = f(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s),
                            p(t, {
                                position: "absolute"
                            }),
                            n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Q
});
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, c) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
            "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function o(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
            t
    }
    function u() {
        return (u = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
        ).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
        c = c && c.hasOwnProperty("default") ? c.default : c;
    var s, n, r, a, l, h, d, f, _, g, m, p, v, E, T, C, y, I, A, b, D, S, w, N, O, k, P, L, R, j, H, W, M, U, x, K, V, Q, B, F, Y, G, q, z, X, Z, J, $, tt, et, nt, it, st, rt, ot, at, lt, ht, ct, ut, dt, ft, _t, gt, mt, pt, vt, Et, Tt, Ct, yt, It, At, bt, Dt, St, wt, Nt, Ot, kt, Pt, Lt, Rt, jt, Ht, Wt, Mt, Ut, xt, Kt, Vt, Qt, Bt, Ft, Yt, Gt, qt, zt, Xt, Zt, Jt, $t, te, ee, ne, ie, se, re, oe, ae, le, he, ce, ue, de, fe, _e, ge, me, pe, ve, Ee, Te, Ce = (ve = e,
        Ee = !1,
        Te = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                for (; t += ~~(1e6 * Math.random()),
                           document.getElementById(t); )
                    ;
                return t
            },
            getSelectorFromElement: function(t) {
                var e, n = t.getAttribute("data-target");
                n && "#" !== n || (n = t.getAttribute("href") || ""),
                "#" === n.charAt(0) && (e = n,
                    n = e = "function" == typeof ve.escapeSelector ? ve.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return 0 < ve(document).find(n).length ? n : null
                } catch (t) {
                    return null
                }
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                ve(t).trigger(Ee.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(Ee)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var s = n[i]
                            , r = e[i]
                            , o = r && Te.isElement(r) ? "element" : (a = r,
                            {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(s).test(o))
                            throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + s + '".')
                    }
                var a
            }
        },
        Ee = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend"
        },
        ve.fn.emulateTransitionEnd = function(t) {
            var e = this
                , n = !1;
            return ve(this).one(Te.TRANSITION_END, function() {
                n = !0
            }),
                setTimeout(function() {
                    n || Te.triggerTransitionEnd(e)
                }, t),
                this
        }
        ,
    Te.supportsTransitionEnd() && (ve.event.special[Te.TRANSITION_END] = {
        bindType: Ee.end,
        delegateType: Ee.end,
        handle: function(t) {
            if (ve(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    }),
        Te), ye = (n = "alert",
        a = "." + (r = "bs.alert"),
        l = (s = e).fn[n],
        h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        "alert",
        "fade",
        "show",
        d = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
                ,
                t.dispose = function() {
                    s.removeData(this._element, r),
                        this._element = null
                }
                ,
                t._getRootElement = function(t) {
                    var e = Ce.getSelectorFromElement(t)
                        , n = !1;
                    return e && (n = s(e)[0]),
                    n || (n = s(t).closest(".alert")[0]),
                        n
                }
                ,
                t._triggerCloseEvent = function(t) {
                    var e = s.Event(h.CLOSE);
                    return s(t).trigger(e),
                        e
                }
                ,
                t._removeElement = function(e) {
                    var n = this;
                    s(e).removeClass("show"),
                        Ce.supportsTransitionEnd() && s(e).hasClass("fade") ? s(e).one(Ce.TRANSITION_END, function(t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(150) : this._destroyElement(e)
                }
                ,
                t._destroyElement = function(t) {
                    s(t).detach().trigger(h.CLOSED).remove()
                }
                ,
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = s(this)
                            , e = t.data(r);
                        e || (e = new i(this),
                            t.data(r, e)),
                        "close" === n && e[n](this)
                    })
                }
                ,
                i._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(),
                            e.close(this)
                    }
                }
                ,
                o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }]),
                i
        }(),
        s(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)),
        s.fn[n] = d._jQueryInterface,
        s.fn[n].Constructor = d,
        s.fn[n].noConflict = function() {
            return s.fn[n] = l,
                d._jQueryInterface
        }
        ,
        d), Ie = (_ = "button",
        m = "." + (g = "bs.button"),
        p = ".data-api",
        v = (f = e).fn[_],
        E = "active",
        "btn",
        T = '[data-toggle^="button"]',
        '[data-toggle="buttons"]',
        "input",
        ".active",
        C = ".btn",
        y = {
            CLICK_DATA_API: "click" + m + p,
            FOCUS_BLUR_DATA_API: "focus" + m + p + " blur" + m + p
        },
        I = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0
                    , e = !0
                    , n = f(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = f(this._element).find("input")[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && f(this._element).hasClass(E))
                                t = !1;
                            else {
                                var s = f(n).find(".active")[0];
                                s && f(s).removeClass(E)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                return;
                            i.checked = !f(this._element).hasClass(E),
                                f(i).trigger("change")
                        }
                        i.focus(),
                            e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !f(this._element).hasClass(E)),
                t && f(this._element).toggleClass(E)
            }
                ,
                t.dispose = function() {
                    f.removeData(this._element, g),
                        this._element = null
                }
                ,
                n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = f(this).data(g);
                        t || (t = new n(this),
                            f(this).data(g, t)),
                        "toggle" === e && t[e]()
                    })
                }
                ,
                o(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }]),
                n
        }(),
        f(document).on(y.CLICK_DATA_API, T, function(t) {
            t.preventDefault();
            var e = t.target;
            f(e).hasClass("btn") || (e = f(e).closest(C)),
                I._jQueryInterface.call(f(e), "toggle")
        }).on(y.FOCUS_BLUR_DATA_API, T, function(t) {
            var e = f(t.target).closest(C)[0];
            f(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
        }),
        f.fn[_] = I._jQueryInterface,
        f.fn[_].Constructor = I,
        f.fn[_].noConflict = function() {
            return f.fn[_] = v,
                I._jQueryInterface
        }
        ,
        I), Ae = (oe = "carousel",
        le = "." + (ae = "bs.carousel"),
        he = (re = e).fn[oe],
        ce = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        },
        ue = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        },
        de = "next",
        fe = "prev",
        _e = {
            SLIDE: "slide" + le,
            SLID: "slid" + le,
            KEYDOWN: "keydown" + le,
            MOUSEENTER: "mouseenter" + le,
            MOUSELEAVE: "mouseleave" + le,
            TOUCHEND: "touchend" + le,
            LOAD_DATA_API: "load" + le + ".data-api",
            CLICK_DATA_API: "click" + le + ".data-api"
        },
        ge = "active",
        me = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        pe = function() {
            function r(t, e) {
                this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this._config = this._getConfig(e),
                    this._element = re(t)[0],
                    this._indicatorsElement = re(this._element).find(me.INDICATORS)[0],
                    this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(de)
            }
                ,
                t.nextWhenVisible = function() {
                    !document.hidden && re(this._element).is(":visible") && "hidden" !== re(this._element).css("visibility") && this.next()
                }
                ,
                t.prev = function() {
                    this._isSliding || this._slide(fe)
                }
                ,
                t.pause = function(t) {
                    t || (this._isPaused = !0),
                    re(this._element).find(me.NEXT_PREV)[0] && Ce.supportsTransitionEnd() && (Ce.triggerTransitionEnd(this._element),
                        this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                }
                ,
                t.cycle = function(t) {
                    t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval),
                        this._interval = null),
                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                ,
                t.to = function(t) {
                    var e = this;
                    this._activeElement = re(this._element).find(me.ACTIVE_ITEM)[0];
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            re(this._element).one(_e.SLID, function() {
                                return e.to(t)
                            });
                        else {
                            if (n === t)
                                return this.pause(),
                                    void this.cycle();
                            var i = n < t ? de : fe;
                            this._slide(i, this._items[t])
                        }
                }
                ,
                t.dispose = function() {
                    re(this._element).off(le),
                        re.removeData(this._element, ae),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                }
                ,
                t._getConfig = function(t) {
                    return t = u({}, ce, t),
                        Ce.typeCheckConfig(oe, t, ue),
                        t
                }
                ,
                t._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && re(this._element).on(_e.KEYDOWN, function(t) {
                        return e._keydown(t)
                    }),
                    "hover" === this._config.pause && (re(this._element).on(_e.MOUSEENTER, function(t) {
                        return e.pause(t)
                    }).on(_e.MOUSELEAVE, function(t) {
                        return e.cycle(t)
                    }),
                    "ontouchstart"in document.documentElement && re(this._element).on(_e.TOUCHEND, function() {
                        e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                            e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval)
                    }))
                }
                ,
                t._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                    this.next()
                        }
                }
                ,
                t._getItemIndex = function(t) {
                    return this._items = re.makeArray(re(t).parent().find(me.ITEM)),
                        this._items.indexOf(t)
                }
                ,
                t._getItemByDirection = function(t, e) {
                    var n = t === de
                        , i = t === fe
                        , s = this._getItemIndex(e)
                        , r = this._items.length - 1;
                    if ((i && 0 === s || n && s === r) && !this._config.wrap)
                        return e;
                    var o = (s + (t === fe ? -1 : 1)) % this._items.length;
                    return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                }
                ,
                t._triggerSlideEvent = function(t, e) {
                    var n = this._getItemIndex(t)
                        , i = this._getItemIndex(re(this._element).find(me.ACTIVE_ITEM)[0])
                        , s = re.Event(_e.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                    return re(this._element).trigger(s),
                        s
                }
                ,
                t._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        re(this._indicatorsElement).find(me.ACTIVE).removeClass(ge);
                        var e = this._indicatorsElement.children[this._getItemIndex(t)];
                        e && re(e).addClass(ge)
                    }
                }
                ,
                t._slide = function(t, e) {
                    var n, i, s, r = this, o = re(this._element).find(me.ACTIVE_ITEM)[0], a = this._getItemIndex(o), l = e || o && this._getItemByDirection(t, o), h = this._getItemIndex(l), c = Boolean(this._interval);
                    if (t === de ? (n = "carousel-item-left",
                            i = "carousel-item-next",
                            s = "left") : (n = "carousel-item-right",
                            i = "carousel-item-prev",
                            s = "right"),
                        l && re(l).hasClass(ge))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, s).isDefaultPrevented() && o && l) {
                        this._isSliding = !0,
                        c && this.pause(),
                            this._setActiveIndicatorElement(l);
                        var u = re.Event(_e.SLID, {
                            relatedTarget: l,
                            direction: s,
                            from: a,
                            to: h
                        });
                        Ce.supportsTransitionEnd() && re(this._element).hasClass("slide") ? (re(l).addClass(i),
                            Ce.reflow(l),
                            re(o).addClass(n),
                            re(l).addClass(n),
                            re(o).one(Ce.TRANSITION_END, function() {
                                re(l).removeClass(n + " " + i).addClass(ge),
                                    re(o).removeClass(ge + " " + i + " " + n),
                                    r._isSliding = !1,
                                    setTimeout(function() {
                                        return re(r._element).trigger(u)
                                    }, 0)
                            }).emulateTransitionEnd(600)) : (re(o).removeClass(ge),
                            re(l).addClass(ge),
                            this._isSliding = !1,
                            re(this._element).trigger(u)),
                        c && this.cycle()
                    }
                }
                ,
                r._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = re(this).data(ae)
                            , e = u({}, ce, re(this).data());
                        "object" == typeof i && (e = u({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (t || (t = new r(this,e),
                                re(this).data(ae, t)),
                            "number" == typeof i)
                            t.to(i);
                        else if ("string" == typeof n) {
                            if (void 0 === t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        } else
                            e.interval && (t.pause(),
                                t.cycle())
                    })
                }
                ,
                r._dataApiClickHandler = function(t) {
                    var e = Ce.getSelectorFromElement(this);
                    if (e) {
                        var n = re(e)[0];
                        if (n && re(n).hasClass("carousel")) {
                            var i = u({}, re(n).data(), re(this).data())
                                , s = this.getAttribute("data-slide-to");
                            s && (i.interval = !1),
                                r._jQueryInterface.call(re(n), i),
                            s && re(n).data(ae).to(s),
                                t.preventDefault()
                        }
                    }
                }
                ,
                o(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ce
                    }
                }]),
                r
        }(),
        re(document).on(_e.CLICK_DATA_API, me.DATA_SLIDE, pe._dataApiClickHandler),
        re(window).on(_e.LOAD_DATA_API, function() {
            re(me.DATA_RIDE).each(function() {
                var t = re(this);
                pe._jQueryInterface.call(t, t.data())
            })
        }),
        re.fn[oe] = pe._jQueryInterface,
        re.fn[oe].Constructor = pe,
        re.fn[oe].noConflict = function() {
            return re.fn[oe] = he,
                pe._jQueryInterface
        }
        ,
        pe), be = (Yt = "collapse",
        qt = "." + (Gt = "bs.collapse"),
        zt = (Ft = e).fn[Yt],
        Xt = {
            toggle: !0,
            parent: ""
        },
        Zt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Jt = {
            SHOW: "show" + qt,
            SHOWN: "shown" + qt,
            HIDE: "hide" + qt,
            HIDDEN: "hidden" + qt,
            CLICK_DATA_API: "click" + qt + ".data-api"
        },
        $t = "show",
        te = "collapse",
        ee = "collapsing",
        ne = "collapsed",
        ie = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        se = function() {
            function a(t, e) {
                this._isTransitioning = !1,
                    this._element = t,
                    this._config = this._getConfig(e),
                    this._triggerArray = Ft.makeArray(Ft('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = Ft(ie.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var s = n[i]
                        , r = Ce.getSelectorFromElement(s);
                    null !== r && 0 < Ft(r).filter(t).length && (this._selector = r,
                        this._triggerArray.push(s))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                Ft(this._element).hasClass($t) ? this.hide() : this.show()
            }
                ,
                t.show = function() {
                    var t, e, n = this;
                    if (!(this._isTransitioning || Ft(this._element).hasClass($t) || (this._parent && 0 === (t = Ft.makeArray(Ft(this._parent).find(ie.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null),
                        t && (e = Ft(t).not(this._selector).data(Gt)) && e._isTransitioning))) {
                        var i = Ft.Event(Jt.SHOW);
                        if (Ft(this._element).trigger(i),
                                !i.isDefaultPrevented()) {
                            t && (a._jQueryInterface.call(Ft(t).not(this._selector), "hide"),
                            e || Ft(t).data(Gt, null));
                            var s = this._getDimension();
                            Ft(this._element).removeClass(te).addClass(ee),
                            (this._element.style[s] = 0) < this._triggerArray.length && Ft(this._triggerArray).removeClass(ne).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var r = function() {
                                Ft(n._element).removeClass(ee).addClass(te).addClass($t),
                                    n._element.style[s] = "",
                                    n.setTransitioning(!1),
                                    Ft(n._element).trigger(Jt.SHOWN)
                            };
                            if (Ce.supportsTransitionEnd()) {
                                var o = "scroll" + (s[0].toUpperCase() + s.slice(1));
                                Ft(this._element).one(Ce.TRANSITION_END, r).emulateTransitionEnd(600),
                                    this._element.style[s] = this._element[o] + "px"
                            } else
                                r()
                        }
                    }
                }
                ,
                t.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && Ft(this._element).hasClass($t)) {
                        var e = Ft.Event(Jt.HIDE);
                        if (Ft(this._element).trigger(e),
                                !e.isDefaultPrevented()) {
                            var n = this._getDimension();
                            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                                    Ce.reflow(this._element),
                                    Ft(this._element).addClass(ee).removeClass(te).removeClass($t),
                                0 < this._triggerArray.length)
                                for (var i = 0; i < this._triggerArray.length; i++) {
                                    var s = this._triggerArray[i]
                                        , r = Ce.getSelectorFromElement(s);
                                    null !== r && (Ft(r).hasClass($t) || Ft(s).addClass(ne).attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0);
                            var o = function() {
                                t.setTransitioning(!1),
                                    Ft(t._element).removeClass(ee).addClass(te).trigger(Jt.HIDDEN)
                            };
                            this._element.style[n] = "",
                                Ce.supportsTransitionEnd() ? Ft(this._element).one(Ce.TRANSITION_END, o).emulateTransitionEnd(600) : o()
                        }
                    }
                }
                ,
                t.setTransitioning = function(t) {
                    this._isTransitioning = t
                }
                ,
                t.dispose = function() {
                    Ft.removeData(this._element, Gt),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                }
                ,
                t._getConfig = function(t) {
                    return (t = u({}, Xt, t)).toggle = Boolean(t.toggle),
                        Ce.typeCheckConfig(Yt, t, Zt),
                        t
                }
                ,
                t._getDimension = function() {
                    return Ft(this._element).hasClass("width") ? "width" : "height"
                }
                ,
                t._getParent = function() {
                    var n = this
                        , t = null;
                    Ce.isElement(this._config.parent) ? (t = this._config.parent,
                    void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = Ft(this._config.parent)[0];
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return Ft(t).find(e).each(function(t, e) {
                        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                    }),
                        t
                }
                ,
                t._addAriaAndCollapsedClass = function(t, e) {
                    if (t) {
                        var n = Ft(t).hasClass($t);
                        0 < e.length && Ft(e).toggleClass(ne, !n).attr("aria-expanded", n)
                    }
                }
                ,
                a._getTargetFromElement = function(t) {
                    var e = Ce.getSelectorFromElement(t);
                    return e ? Ft(e)[0] : null
                }
                ,
                a._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = Ft(this)
                            , e = t.data(Gt)
                            , n = u({}, Xt, t.data(), "object" == typeof i && i);
                        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                            e || (e = new a(this,n),
                                t.data(Gt, e)),
                            "string" == typeof i) {
                            if (void 0 === e[i])
                                throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                }
                ,
                o(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Xt
                    }
                }]),
                a
        }(),
        Ft(document).on(Jt.CLICK_DATA_API, ie.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = Ft(this)
                , e = Ce.getSelectorFromElement(this);
            Ft(e).each(function() {
                var t = Ft(this)
                    , e = t.data(Gt) ? "toggle" : n.data();
                se._jQueryInterface.call(t, e)
            })
        }),
        Ft.fn[Yt] = se._jQueryInterface,
        Ft.fn[Yt].Constructor = se,
        Ft.fn[Yt].noConflict = function() {
            return Ft.fn[Yt] = zt,
                se._jQueryInterface
        }
        ,
        se), De = (Ot = "dropdown",
        Pt = "." + (kt = "bs.dropdown"),
        Lt = ".data-api",
        Rt = (Nt = e).fn[Ot],
        jt = new RegExp("38|40|27"),
        Ht = {
            HIDE: "hide" + Pt,
            HIDDEN: "hidden" + Pt,
            SHOW: "show" + Pt,
            SHOWN: "shown" + Pt,
            CLICK: "click" + Pt,
            CLICK_DATA_API: "click" + Pt + Lt,
            KEYDOWN_DATA_API: "keydown" + Pt + Lt,
            KEYUP_DATA_API: "keyup" + Pt + Lt
        },
        Wt = "disabled",
        Mt = "show",
        Ut = "dropdown-menu-right",
        xt = '[data-toggle="dropdown"]',
        Kt = ".dropdown-menu",
        Vt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        },
        Qt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        },
        Bt = function() {
            function l(t, e) {
                this._element = t,
                    this._popper = null,
                    this._config = this._getConfig(e),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
            }
            var t = l.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !Nt(this._element).hasClass(Wt)) {
                    var t = l._getParentFromElement(this._element)
                        , e = Nt(this._menu).hasClass(Mt);
                    if (l._clearMenus(),
                            !e) {
                        var n = {
                            relatedTarget: this._element
                        }
                            , i = Nt.Event(Ht.SHOW, n);
                        if (Nt(t).trigger(i),
                                !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === c)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var s = this._element;
                                Nt(t).hasClass("dropup") && (Nt(this._menu).hasClass("dropdown-menu-left") || Nt(this._menu).hasClass(Ut)) && (s = t),
                                "scrollParent" !== this._config.boundary && Nt(t).addClass("position-static"),
                                    this._popper = new c(s,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === Nt(t).closest(".navbar-nav").length && Nt("body").children().on("mouseover", null, Nt.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                Nt(this._menu).toggleClass(Mt),
                                Nt(t).toggleClass(Mt).trigger(Nt.Event(Ht.SHOWN, n))
                        }
                    }
                }
            }
                ,
                t.dispose = function() {
                    Nt.removeData(this._element, kt),
                        Nt(this._element).off(Pt),
                        this._element = null,
                    (this._menu = null) !== this._popper && (this._popper.destroy(),
                        this._popper = null)
                }
                ,
                t.update = function() {
                    this._inNavbar = this._detectNavbar(),
                    null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                t._addEventListeners = function() {
                    var e = this;
                    Nt(this._element).on(Ht.CLICK, function(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                    })
                }
                ,
                t._getConfig = function(t) {
                    return t = u({}, this.constructor.Default, Nt(this._element).data(), t),
                        Ce.typeCheckConfig(Ot, t, this.constructor.DefaultType),
                        t
                }
                ,
                t._getMenuElement = function() {
                    if (!this._menu) {
                        var t = l._getParentFromElement(this._element);
                        this._menu = Nt(t).find(Kt)[0]
                    }
                    return this._menu
                }
                ,
                t._getPlacement = function() {
                    var t = Nt(this._element).parent()
                        , e = "bottom-start";
                    return t.hasClass("dropup") ? (e = "top-start",
                    Nt(this._menu).hasClass(Ut) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : Nt(this._menu).hasClass(Ut) && (e = "bottom-end"),
                        e
                }
                ,
                t._detectNavbar = function() {
                    return 0 < Nt(this._element).closest(".navbar").length
                }
                ,
                t._getPopperConfig = function() {
                    var e = this
                        , t = {};
                    return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = u({}, t.offsets, e._config.offset(t.offsets) || {}),
                                t
                        }
                        : t.offset = this._config.offset,
                        {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                }
                ,
                l._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = Nt(this).data(kt);
                        if (t || (t = new l(this,"object" == typeof e ? e : null),
                                Nt(this).data(kt, t)),
                            "string" == typeof e) {
                            if (void 0 === t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }
                ,
                l._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var e = Nt.makeArray(Nt(xt)), n = 0; n < e.length; n++) {
                            var i = l._getParentFromElement(e[n])
                                , s = Nt(e[n]).data(kt)
                                , r = {
                                relatedTarget: e[n]
                            };
                            if (s) {
                                var o = s._menu;
                                if (Nt(i).hasClass(Mt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Nt.contains(i, t.target))) {
                                    var a = Nt.Event(Ht.HIDE, r);
                                    Nt(i).trigger(a),
                                    a.isDefaultPrevented() || ("ontouchstart"in document.documentElement && Nt("body").children().off("mouseover", null, Nt.noop),
                                        e[n].setAttribute("aria-expanded", "false"),
                                        Nt(o).removeClass(Mt),
                                        Nt(i).removeClass(Mt).trigger(Nt.Event(Ht.HIDDEN, r)))
                                }
                            }
                        }
                }
                ,
                l._getParentFromElement = function(t) {
                    var e, n = Ce.getSelectorFromElement(t);
                    return n && (e = Nt(n)[0]),
                    e || t.parentNode
                }
                ,
                l._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Nt(t.target).closest(Kt).length)) : jt.test(t.which)) && (t.preventDefault(),
                            t.stopPropagation(),
                        !this.disabled && !Nt(this).hasClass(Wt))) {
                        var e = l._getParentFromElement(this)
                            , n = Nt(e).hasClass(Mt);
                        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = Nt(e).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                            if (0 !== i.length) {
                                var s = i.indexOf(t.target);
                                38 === t.which && 0 < s && s--,
                                40 === t.which && s < i.length - 1 && s++,
                                s < 0 && (s = 0),
                                    i[s].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var r = Nt(e).find(xt)[0];
                                Nt(r).trigger("focus")
                            }
                            Nt(this).trigger("click")
                        }
                    }
                }
                ,
                o(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Vt
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Qt
                    }
                }]),
                l
        }(),
        Nt(document).on(Ht.KEYDOWN_DATA_API, xt, Bt._dataApiKeydownHandler).on(Ht.KEYDOWN_DATA_API, Kt, Bt._dataApiKeydownHandler).on(Ht.CLICK_DATA_API + " " + Ht.KEYUP_DATA_API, Bt._clearMenus).on(Ht.CLICK_DATA_API, xt, function(t) {
            t.preventDefault(),
                t.stopPropagation(),
                Bt._jQueryInterface.call(Nt(this), "toggle")
        }).on(Ht.CLICK_DATA_API, ".dropdown form", function(t) {
            t.stopPropagation()
        }),
        Nt.fn[Ot] = Bt._jQueryInterface,
        Nt.fn[Ot].Constructor = Bt,
        Nt.fn[Ot].noConflict = function() {
            return Nt.fn[Ot] = Rt,
                Bt._jQueryInterface
        }
        ,
        Bt), Se = (Et = "." + (vt = "bs.modal"),
        Tt = (pt = e).fn.modal,
        Ct = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        yt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        It = {
            HIDE: "hide" + Et,
            HIDDEN: "hidden" + Et,
            SHOW: "show" + Et,
            SHOWN: "shown" + Et,
            FOCUSIN: "focusin" + Et,
            RESIZE: "resize" + Et,
            CLICK_DISMISS: "click.dismiss" + Et,
            KEYDOWN_DISMISS: "keydown.dismiss" + Et,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Et,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Et,
            CLICK_DATA_API: "click" + Et + ".data-api"
        },
        At = "modal-open",
        bt = "fade",
        Dt = "show",
        St = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        },
        wt = function() {
            function s(t, e) {
                this._config = this._getConfig(e),
                    this._element = t,
                    this._dialog = pt(t).find(St.DIALOG)[0],
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._originalBodyPadding = 0,
                    this._scrollbarWidth = 0
            }
            var t = s.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
                ,
                t.show = function(t) {
                    var e = this;
                    if (!this._isTransitioning && !this._isShown) {
                        Ce.supportsTransitionEnd() && pt(this._element).hasClass(bt) && (this._isTransitioning = !0);
                        var n = pt.Event(It.SHOW, {
                            relatedTarget: t
                        });
                        pt(this._element).trigger(n),
                        this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            pt(document.body).addClass(At),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            pt(this._element).on(It.CLICK_DISMISS, St.DATA_DISMISS, function(t) {
                                return e.hide(t)
                            }),
                            pt(this._dialog).on(It.MOUSEDOWN_DISMISS, function() {
                                pt(e._element).one(It.MOUSEUP_DISMISS, function(t) {
                                    pt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                                })
                            }),
                            this._showBackdrop(function() {
                                return e._showElement(t)
                            }))
                    }
                }
                ,
                t.hide = function(t) {
                    var e = this;
                    if (t && t.preventDefault(),
                        !this._isTransitioning && this._isShown) {
                        var n = pt.Event(It.HIDE);
                        if (pt(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = Ce.supportsTransitionEnd() && pt(this._element).hasClass(bt);
                            i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                pt(document).off(It.FOCUSIN),
                                pt(this._element).removeClass(Dt),
                                pt(this._element).off(It.CLICK_DISMISS),
                                pt(this._dialog).off(It.MOUSEDOWN_DISMISS),
                                i ? pt(this._element).one(Ce.TRANSITION_END, function(t) {
                                    return e._hideModal(t)
                                }).emulateTransitionEnd(300) : this._hideModal()
                        }
                    }
                }
                ,
                t.dispose = function() {
                    pt.removeData(this._element, vt),
                        pt(window, document, this._element, this._backdrop).off(Et),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._scrollbarWidth = null
                }
                ,
                t.handleUpdate = function() {
                    this._adjustDialog()
                }
                ,
                t._getConfig = function(t) {
                    return t = u({}, Ct, t),
                        Ce.typeCheckConfig("modal", t, yt),
                        t
                }
                ,
                t._showElement = function(t) {
                    var e = this
                        , n = Ce.supportsTransitionEnd() && pt(this._element).hasClass(bt);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.scrollTop = 0,
                    n && Ce.reflow(this._element),
                        pt(this._element).addClass(Dt),
                    this._config.focus && this._enforceFocus();
                    var i = pt.Event(It.SHOWN, {
                        relatedTarget: t
                    })
                        , s = function() {
                        e._config.focus && e._element.focus(),
                            e._isTransitioning = !1,
                            pt(e._element).trigger(i)
                    };
                    n ? pt(this._dialog).one(Ce.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                }
                ,
                t._enforceFocus = function() {
                    var e = this;
                    pt(document).off(It.FOCUSIN).on(It.FOCUSIN, function(t) {
                        document !== t.target && e._element !== t.target && 0 === pt(e._element).has(t.target).length && e._element.focus()
                    })
                }
                ,
                t._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? pt(this._element).on(It.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(),
                            e.hide())
                    }) : this._isShown || pt(this._element).off(It.KEYDOWN_DISMISS)
                }
                ,
                t._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? pt(window).on(It.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : pt(window).off(It.RESIZE)
                }
                ,
                t._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._isTransitioning = !1,
                        this._showBackdrop(function() {
                            pt(document.body).removeClass(At),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                pt(t._element).trigger(It.HIDDEN)
                        })
                }
                ,
                t._removeBackdrop = function() {
                    this._backdrop && (pt(this._backdrop).remove(),
                        this._backdrop = null)
                }
                ,
                t._showBackdrop = function(t) {
                    var e = this
                        , n = pt(this._element).hasClass(bt) ? bt : "";
                    if (this._isShown && this._config.backdrop) {
                        var i = Ce.supportsTransitionEnd() && n;
                        if (this._backdrop = document.createElement("div"),
                                this._backdrop.className = "modal-backdrop",
                            n && pt(this._backdrop).addClass(n),
                                pt(this._backdrop).appendTo(document.body),
                                pt(this._element).on(It.CLICK_DISMISS, function(t) {
                                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                                }),
                            i && Ce.reflow(this._backdrop),
                                pt(this._backdrop).addClass(Dt),
                                !t)
                            return;
                        if (!i)
                            return void t();
                        pt(this._backdrop).one(Ce.TRANSITION_END, t).emulateTransitionEnd(150)
                    } else if (!this._isShown && this._backdrop) {
                        pt(this._backdrop).removeClass(Dt);
                        var s = function() {
                            e._removeBackdrop(),
                            t && t()
                        };
                        Ce.supportsTransitionEnd() && pt(this._element).hasClass(bt) ? pt(this._backdrop).one(Ce.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                    } else
                        t && t()
                }
                ,
                t._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                    this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
                ,
                t._resetAdjustments = function() {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                }
                ,
                t._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                }
                ,
                t._setScrollbar = function() {
                    var s = this;
                    if (this._isBodyOverflowing) {
                        pt(St.FIXED_CONTENT).each(function(t, e) {
                            var n = pt(e)[0].style.paddingRight
                                , i = pt(e).css("padding-right");
                            pt(e).data("padding-right", n).css("padding-right", parseFloat(i) + s._scrollbarWidth + "px")
                        }),
                            pt(St.STICKY_CONTENT).each(function(t, e) {
                                var n = pt(e)[0].style.marginRight
                                    , i = pt(e).css("margin-right");
                                pt(e).data("margin-right", n).css("margin-right", parseFloat(i) - s._scrollbarWidth + "px")
                            }),
                            pt(St.NAVBAR_TOGGLER).each(function(t, e) {
                                var n = pt(e)[0].style.marginRight
                                    , i = pt(e).css("margin-right");
                                pt(e).data("margin-right", n).css("margin-right", parseFloat(i) + s._scrollbarWidth + "px")
                            });
                        var t = document.body.style.paddingRight
                            , e = pt("body").css("padding-right");
                        pt("body").data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                    }
                }
                ,
                t._resetScrollbar = function() {
                    pt(St.FIXED_CONTENT).each(function(t, e) {
                        var n = pt(e).data("padding-right");
                        void 0 !== n && pt(e).css("padding-right", n).removeData("padding-right")
                    }),
                        pt(St.STICKY_CONTENT + ", " + St.NAVBAR_TOGGLER).each(function(t, e) {
                            var n = pt(e).data("margin-right");
                            void 0 !== n && pt(e).css("margin-right", n).removeData("margin-right")
                        });
                    var t = pt("body").data("padding-right");
                    void 0 !== t && pt("body").css("padding-right", t).removeData("padding-right")
                }
                ,
                t._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure",
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                }
                ,
                s._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var t = pt(this).data(vt)
                            , e = u({}, s.Default, pt(this).data(), "object" == typeof n && n);
                        if (t || (t = new s(this,e),
                                pt(this).data(vt, t)),
                            "string" == typeof n) {
                            if (void 0 === t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n](i)
                        } else
                            e.show && t.show(i)
                    })
                }
                ,
                o(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ct
                    }
                }]),
                s
        }(),
        pt(document).on(It.CLICK_DATA_API, St.DATA_TOGGLE, function(t) {
            var e, n = this, i = Ce.getSelectorFromElement(this);
            i && (e = pt(i)[0]);
            var s = pt(e).data(vt) ? "toggle" : u({}, pt(e).data(), pt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var r = pt(e).one(It.SHOW, function(t) {
                t.isDefaultPrevented() || r.one(It.HIDDEN, function() {
                    pt(n).is(":visible") && n.focus()
                })
            });
            wt._jQueryInterface.call(pt(e), s, this)
        }),
        pt.fn.modal = wt._jQueryInterface,
        pt.fn.modal.Constructor = wt,
        pt.fn.modal.noConflict = function() {
            return pt.fn.modal = Tt,
                wt._jQueryInterface
        }
        ,
        wt), we = (nt = "tooltip",
        st = "." + (it = "bs.tooltip"),
        rt = (et = e).fn[nt],
        ot = new RegExp("(^|\\s)bs-tooltip\\S+","g"),
        ht = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(lt = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(at = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        },
        ut = {
            HIDE: "hide" + st,
            HIDDEN: "hidden" + st,
            SHOW: (ct = "show") + st,
            SHOWN: "shown" + st,
            INSERTED: "inserted" + st,
            CLICK: "click" + st,
            FOCUSIN: "focusin" + st,
            FOCUSOUT: "focusout" + st,
            MOUSEENTER: "mouseenter" + st,
            MOUSELEAVE: "mouseleave" + st
        },
        dt = "fade",
        ft = "show",
        _t = "hover",
        gt = "focus",
        mt = function() {
            function h(t, e) {
                if (void 0 === c)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._popper = null,
                    this.element = t,
                    this.config = this._getConfig(e),
                    this.tip = null,
                    this._setListeners()
            }
            var t = h.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }
                ,
                t.disable = function() {
                    this._isEnabled = !1
                }
                ,
                t.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }
                ,
                t.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY
                                , n = et(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                                et(t.currentTarget).data(e, n)),
                                n._activeTrigger.click = !n._activeTrigger.click,
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (et(this.getTipElement()).hasClass(ft))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                ,
                t.dispose = function() {
                    clearTimeout(this._timeout),
                        et.removeData(this.element, this.constructor.DATA_KEY),
                        et(this.element).off(this.constructor.EVENT_KEY),
                        et(this.element).closest(".modal").off("hide.bs.modal"),
                    this.tip && et(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                    (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                }
                ,
                t.show = function() {
                    var e = this;
                    if ("none" === et(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var t = et.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        et(this.element).trigger(t);
                        var n = et.contains(this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !n)
                            return;
                        var i = this.getTipElement()
                            , s = Ce.getUID(this.constructor.NAME);
                        i.setAttribute("id", s),
                            this.element.setAttribute("aria-describedby", s),
                            this.setContent(),
                        this.config.animation && et(i).addClass(dt);
                        var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement
                            , o = this._getAttachment(r);
                        this.addAttachmentClass(o);
                        var a = !1 === this.config.container ? document.body : et(this.config.container);
                        et(i).data(this.constructor.DATA_KEY, this),
                        et.contains(this.element.ownerDocument.documentElement, this.tip) || et(i).appendTo(a),
                            et(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new c(this.element,i,{
                                placement: o,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    e._handlePopperPlacementChange(t)
                                }
                            }),
                            et(i).addClass(ft),
                        "ontouchstart"in document.documentElement && et("body").children().on("mouseover", null, et.noop);
                        var l = function() {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null,
                                et(e.element).trigger(e.constructor.Event.SHOWN),
                            "out" === t && e._leave(null, e)
                        };
                        Ce.supportsTransitionEnd() && et(this.tip).hasClass(dt) ? et(this.tip).one(Ce.TRANSITION_END, l).emulateTransitionEnd(h._TRANSITION_DURATION) : l()
                    }
                }
                ,
                t.hide = function(t) {
                    var e = this
                        , n = this.getTipElement()
                        , i = et.Event(this.constructor.Event.HIDE)
                        , s = function() {
                        e._hoverState !== ct && n.parentNode && n.parentNode.removeChild(n),
                            e._cleanTipClass(),
                            e.element.removeAttribute("aria-describedby"),
                            et(e.element).trigger(e.constructor.Event.HIDDEN),
                        null !== e._popper && e._popper.destroy(),
                        t && t()
                    };
                    et(this.element).trigger(i),
                    i.isDefaultPrevented() || (et(n).removeClass(ft),
                    "ontouchstart"in document.documentElement && et("body").children().off("mouseover", null, et.noop),
                        this._activeTrigger.click = !1,
                        this._activeTrigger[gt] = !1,
                        this._activeTrigger[_t] = !1,
                        Ce.supportsTransitionEnd() && et(this.tip).hasClass(dt) ? et(n).one(Ce.TRANSITION_END, s).emulateTransitionEnd(150) : s(),
                        this._hoverState = "")
                }
                ,
                t.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                t.isWithContent = function() {
                    return Boolean(this.getTitle())
                }
                ,
                t.addAttachmentClass = function(t) {
                    et(this.getTipElement()).addClass("bs-tooltip-" + t)
                }
                ,
                t.getTipElement = function() {
                    return this.tip = this.tip || et(this.config.template)[0],
                        this.tip
                }
                ,
                t.setContent = function() {
                    var t = et(this.getTipElement());
                    this.setElementContent(t.find(".tooltip-inner"), this.getTitle()),
                        t.removeClass(dt + " " + ft)
                }
                ,
                t.setElementContent = function(t, e) {
                    var n = this.config.html;
                    "object" == typeof e && (e.nodeType || e.jquery) ? n ? et(e).parent().is(t) || t.empty().append(e) : t.text(et(e).text()) : t[n ? "html" : "text"](e)
                }
                ,
                t.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        t
                }
                ,
                t._getAttachment = function(t) {
                    return lt[t.toUpperCase()]
                }
                ,
                t._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(t) {
                        if ("click" === t)
                            et(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                                return i.toggle(t)
                            });
                        else if ("manual" !== t) {
                            var e = t === _t ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                                , n = t === _t ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            et(i.element).on(e, i.config.selector, function(t) {
                                return i._enter(t)
                            }).on(n, i.config.selector, function(t) {
                                return i._leave(t)
                            })
                        }
                        et(i.element).closest(".modal").on("hide.bs.modal", function() {
                            return i.hide()
                        })
                    }),
                        this.config.selector ? this.config = u({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                }
                ,
                t._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                }
                ,
                t._enter = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || et(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        et(t.currentTarget).data(n, e)),
                    t && (e._activeTrigger["focusin" === t.type ? gt : _t] = !0),
                        et(e.getTipElement()).hasClass(ft) || e._hoverState === ct ? e._hoverState = ct : (clearTimeout(e._timeout),
                            e._hoverState = ct,
                            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                                e._hoverState === ct && e.show()
                            }, e.config.delay.show) : e.show())
                }
                ,
                t._leave = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || et(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        et(t.currentTarget).data(n, e)),
                    t && (e._activeTrigger["focusout" === t.type ? gt : _t] = !1),
                    e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                        e._hoverState = "out",
                        e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                            "out" === e._hoverState && e.hide()
                        }, e.config.delay.hide) : e.hide())
                }
                ,
                t._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                }
                ,
                t._getConfig = function(t) {
                    return "number" == typeof (t = u({}, this.constructor.Default, et(this.element).data(), t)).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }),
                    "number" == typeof t.title && (t.title = t.title.toString()),
                    "number" == typeof t.content && (t.content = t.content.toString()),
                        Ce.typeCheckConfig(nt, t, this.constructor.DefaultType),
                        t
                }
                ,
                t._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }
                ,
                t._cleanTipClass = function() {
                    var t = et(this.getTipElement())
                        , e = t.attr("class").match(ot);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                }
                ,
                t._handlePopperPlacementChange = function(t) {
                    this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                }
                ,
                t._fixTransition = function() {
                    var t = this.getTipElement()
                        , e = this.config.animation;
                    null === t.getAttribute("x-placement") && (et(t).removeClass(dt),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = e)
                }
                ,
                h._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = et(this).data(it)
                            , e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new h(this,e),
                                et(this).data(it, t)),
                            "string" == typeof n)) {
                            if (void 0 === t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }
                ,
                o(h, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ht
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return nt
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return it
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return ut
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return st
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return at
                    }
                }]),
                h
        }(),
        et.fn[nt] = mt._jQueryInterface,
        et.fn[nt].Constructor = mt,
        et.fn[nt].noConflict = function() {
            return et.fn[nt] = rt,
                mt._jQueryInterface
        }
        ,
        mt), Ne = (Y = "popover",
        q = "." + (G = "bs.popover"),
        z = (F = e).fn[Y],
        X = new RegExp("(^|\\s)bs-popover\\S+","g"),
        Z = u({}, we.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        J = u({}, we.DefaultType, {
            content: "(string|element|function)"
        }),
        $ = {
            HIDE: "hide" + q,
            HIDDEN: "hidden" + q,
            SHOW: "show" + q,
            SHOWN: "shown" + q,
            INSERTED: "inserted" + q,
            CLICK: "click" + q,
            FOCUSIN: "focusin" + q,
            FOCUSOUT: "focusout" + q,
            MOUSEENTER: "mouseenter" + q,
            MOUSELEAVE: "mouseleave" + q
        },
        tt = function(t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this
            }
            n = t,
                (e = i).prototype = Object.create(n.prototype),
                (e.prototype.constructor = e).__proto__ = n;
            var s = i.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
                ,
                s.addAttachmentClass = function(t) {
                    F(this.getTipElement()).addClass("bs-popover-" + t)
                }
                ,
                s.getTipElement = function() {
                    return this.tip = this.tip || F(this.config.template)[0],
                        this.tip
                }
                ,
                s.setContent = function() {
                    var t = F(this.getTipElement());
                    this.setElementContent(t.find(".popover-header"), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(".popover-body"), e),
                        t.removeClass("fade show")
                }
                ,
                s._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }
                ,
                s._cleanTipClass = function() {
                    var t = F(this.getTipElement())
                        , e = t.attr("class").match(X);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                }
                ,
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = F(this).data(G)
                            , e = "object" == typeof n ? n : null;
                        if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this,e),
                                F(this).data(G, t)),
                            "string" == typeof n)) {
                            if (void 0 === t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }
                ,
                o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Z
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return Y
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return G
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return $
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return q
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return J
                    }
                }]),
                i
        }(we),
        F.fn[Y] = tt._jQueryInterface,
        F.fn[Y].Constructor = tt,
        F.fn[Y].noConflict = function() {
            return F.fn[Y] = z,
                tt._jQueryInterface
        }
        ,
        tt), Oe = (R = "scrollspy",
        H = "." + (j = "bs.scrollspy"),
        W = (L = e).fn[R],
        M = {
            offset: 10,
            method: "auto",
            target: ""
        },
        U = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        x = {
            ACTIVATE: "activate" + H,
            SCROLL: "scroll" + H,
            LOAD_DATA_API: "load" + H + ".data-api"
        },
        K = "active",
        V = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        Q = "position",
        B = function() {
            function n(t, e) {
                var n = this;
                this._element = t,
                    this._scrollElement = "BODY" === t.tagName ? window : t,
                    this._config = this._getConfig(e),
                    this._selector = this._config.target + " " + V.NAV_LINKS + "," + this._config.target + " " + V.LIST_ITEMS + "," + this._config.target + " " + V.DROPDOWN_ITEMS,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    L(this._scrollElement).on(x.SCROLL, function(t) {
                        return n._process(t)
                    }),
                    this.refresh(),
                    this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this
                    , t = this._scrollElement === this._scrollElement.window ? "offset" : Q
                    , s = "auto" === this._config.method ? t : this._config.method
                    , r = s === Q ? this._getScrollTop() : 0;
                this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight(),
                    L.makeArray(L(this._selector)).map(function(t) {
                        var e, n = Ce.getSelectorFromElement(t);
                        if (n && (e = L(n)[0]),
                                e) {
                            var i = e.getBoundingClientRect();
                            if (i.width || i.height)
                                return [L(e)[s]().top + r, n]
                        }
                        return null
                    }).filter(function(t) {
                        return t
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]),
                            e._targets.push(t[1])
                    })
            }
                ,
                t.dispose = function() {
                    L.removeData(this._element, j),
                        L(this._scrollElement).off(H),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                }
                ,
                t._getConfig = function(t) {
                    if ("string" != typeof (t = u({}, M, t)).target) {
                        var e = L(t.target).attr("id");
                        e || (e = Ce.getUID(R),
                            L(t.target).attr("id", e)),
                            t.target = "#" + e
                    }
                    return Ce.typeCheckConfig(R, t, U),
                        t
                }
                ,
                t._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                ,
                t._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                ,
                t._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                ,
                t._process = function() {
                    var t = this._getScrollTop() + this._config.offset
                        , e = this._getScrollHeight()
                        , n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                        n <= t) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                            return this._activeTarget = null,
                                void this._clear();
                        for (var s = this._offsets.length; s--; )
                            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                    }
                }
                ,
                t._activate = function(e) {
                    this._activeTarget = e,
                        this._clear();
                    var t = this._selector.split(",");
                    t = t.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    });
                    var n = L(t.join(","));
                    n.hasClass("dropdown-item") ? (n.closest(V.DROPDOWN).find(V.DROPDOWN_TOGGLE).addClass(K),
                        n.addClass(K)) : (n.addClass(K),
                        n.parents(V.NAV_LIST_GROUP).prev(V.NAV_LINKS + ", " + V.LIST_ITEMS).addClass(K),
                        n.parents(V.NAV_LIST_GROUP).prev(V.NAV_ITEMS).children(V.NAV_LINKS).addClass(K)),
                        L(this._scrollElement).trigger(x.ACTIVATE, {
                            relatedTarget: e
                        })
                }
                ,
                t._clear = function() {
                    L(this._selector).filter(V.ACTIVE).removeClass(K)
                }
                ,
                n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = L(this).data(j);
                        if (t || (t = new n(this,"object" == typeof e && e),
                                L(this).data(j, t)),
                            "string" == typeof e) {
                            if (void 0 === t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }
                ,
                o(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return M
                    }
                }]),
                n
        }(),
        L(window).on(x.LOAD_DATA_API, function() {
            for (var t = L.makeArray(L(V.DATA_SPY)), e = t.length; e--; ) {
                var n = L(t[e]);
                B._jQueryInterface.call(n, n.data())
            }
        }),
        L.fn[R] = B._jQueryInterface,
        L.fn[R].Constructor = B,
        L.fn[R].noConflict = function() {
            return L.fn[R] = W,
                B._jQueryInterface
        }
        ,
        B), ke = (D = "." + (b = "bs.tab"),
        S = (A = e).fn.tab,
        w = {
            HIDE: "hide" + D,
            HIDDEN: "hidden" + D,
            SHOW: "show" + D,
            SHOWN: "shown" + D,
            CLICK_DATA_API: "click.bs.tab.data-api"
        },
        N = "active",
        O = ".active",
        k = "> li > .active",
        P = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && A(this._element).hasClass(N) || A(this._element).hasClass("disabled"))) {
                    var t, i, e = A(this._element).closest(".nav, .list-group")[0], s = Ce.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName ? k : O;
                        i = (i = A.makeArray(A(e).find(r)))[i.length - 1]
                    }
                    var o = A.Event(w.HIDE, {
                        relatedTarget: this._element
                    })
                        , a = A.Event(w.SHOW, {
                        relatedTarget: i
                    });
                    if (i && A(i).trigger(o),
                            A(this._element).trigger(a),
                        !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        s && (t = A(s)[0]),
                            this._activate(this._element, e);
                        var l = function() {
                            var t = A.Event(w.HIDDEN, {
                                relatedTarget: n._element
                            })
                                , e = A.Event(w.SHOWN, {
                                relatedTarget: i
                            });
                            A(i).trigger(t),
                                A(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }
                ,
                t.dispose = function() {
                    A.removeData(this._element, b),
                        this._element = null
                }
                ,
                t._activate = function(t, e, n) {
                    var i = this
                        , s = ("UL" === e.nodeName ? A(e).find(k) : A(e).children(O))[0]
                        , r = n && Ce.supportsTransitionEnd() && s && A(s).hasClass("fade")
                        , o = function() {
                        return i._transitionComplete(t, s, n)
                    };
                    s && r ? A(s).one(Ce.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                }
                ,
                t._transitionComplete = function(t, e, n) {
                    if (e) {
                        A(e).removeClass("show " + N);
                        var i = A(e.parentNode).find("> .dropdown-menu .active")[0];
                        i && A(i).removeClass(N),
                        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    if (A(t).addClass(N),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                            Ce.reflow(t),
                            A(t).addClass("show"),
                        t.parentNode && A(t.parentNode).hasClass("dropdown-menu")) {
                        var s = A(t).closest(".dropdown")[0];
                        s && A(s).find(".dropdown-toggle").addClass(N),
                            t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }
                ,
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = A(this)
                            , e = t.data(b);
                        if (e || (e = new i(this),
                                t.data(b, e)),
                            "string" == typeof n) {
                            if (void 0 === e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }
                ,
                o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }]),
                i
        }(),
        A(document).on(w.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
            t.preventDefault(),
                P._jQueryInterface.call(A(this), "show")
        }),
        A.fn.tab = P._jQueryInterface,
        A.fn.tab.Constructor = P,
        A.fn.tab.noConflict = function() {
            return A.fn.tab = S,
                P._jQueryInterface
        }
        ,
        P);
    !function(t) {
        if (void 0 === t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
        t.Util = Ce,
        t.Alert = ye,
        t.Button = Ie,
        t.Carousel = Ae,
        t.Collapse = be,
        t.Dropdown = De,
        t.Modal = Se,
        t.Popover = Ne,
        t.Scrollspy = Oe,
        t.Tab = ke,
        t.Tooltip = we,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
            e.Countdown = t()
    }
}(function() {
    return function o(r, h, a) {
        function f(i, t) {
            if (!h[i]) {
                if (!r[i]) {
                    var e = "function" == typeof require && require;
                    if (!t && e)
                        return e(i, !0);
                    if (d)
                        return d(i, !0);
                    var n = new Error("Cannot find module '" + i + "'");
                    throw n.code = "MODULE_NOT_FOUND",
                        n
                }
                var s = h[i] = {
                    exports: {}
                };
                r[i][0].call(s.exports, function(t) {
                    var e = r[i][1][t];
                    return f(e || t)
                }, s, s.exports, o, r, h, a)
            }
            return h[i].exports
        }
        for (var d = "function" == typeof require && require, t = 0; t < a.length; t++)
            f(a[t]);
        return f
    }({
        1: [function(t, e, i) {
            var n = {
                date: "June 7, 2087 15:03:25",
                refresh: 1e3,
                offset: 0,
                onEnd: function() {},
                render: function(t) {
                    this.el.innerHTML = t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec"
                }
            };
            e.exports = function(t, e) {
                this.el = t,
                    this.options = {},
                    this.interval = !1,
                    this.mergeOptions = function(t) {
                        for (var e in n)
                            n.hasOwnProperty(e) && (this.options[e] = void 0 !== t[e] ? t[e] : n[e],
                            "date" === e && "object" != typeof this.options.date && (this.options.date = new Date(this.options.date)),
                            "function" == typeof this.options[e] && (this.options[e] = this.options[e].bind(this)));
                        "object" != typeof this.options.date && (this.options.date = new Date(this.options.date))
                    }
                        .bind(this),
                    this.mergeOptions(e),
                    this.getDiffDate = function() {
                        var t = (this.options.date.getTime() - Date.now() + this.options.offset) / 1e3
                            , e = {
                            years: 0,
                            days: 0,
                            hours: 0,
                            min: 0,
                            sec: 0,
                            millisec: 0
                        };
                        return t <= 0 ? this.interval && (this.stop(),
                            this.options.onEnd()) : (31557600 <= t && (e.years = Math.floor(t / 31557600),
                            t -= 365.25 * e.years * 86400),
                        86400 <= t && (e.days = Math.floor(t / 86400),
                            t -= 86400 * e.days),
                        3600 <= t && (e.hours = Math.floor(t / 3600),
                            t -= 3600 * e.hours),
                        60 <= t && (e.min = Math.floor(t / 60),
                            t -= 60 * e.min),
                            e.sec = Math.round(t),
                            e.millisec = t % 1 * 1e3),
                            e
                    }
                        .bind(this),
                    this.leadingZeros = function(t, e) {
                        return e = e || 2,
                            (t = String(t)).length > e ? t : (Array(e + 1).join("0") + t).substr(-e)
                    }
                    ,
                    this.update = function(t) {
                        return "object" != typeof t && (t = new Date(t)),
                            this.options.date = t,
                            this.render(),
                            this
                    }
                        .bind(this),
                    this.stop = function() {
                        return this.interval && (clearInterval(this.interval),
                            this.interval = !1),
                            this
                    }
                        .bind(this),
                    this.render = function() {
                        return this.options.render(this.getDiffDate()),
                            this
                    }
                        .bind(this),
                    this.start = function() {
                        if (!this.interval)
                            return this.render(),
                            this.options.refresh && (this.interval = setInterval(this.render, this.options.refresh)),
                                this
                    }
                        .bind(this),
                    this.updateOffset = function(t) {
                        return this.options.offset = t,
                            this
                    }
                        .bind(this),
                    this.restart = function(t) {
                        return this.mergeOptions(t),
                            this.interval = !1,
                            this.start(),
                            this
                    }
                        .bind(this),
                    this.start()
            }
        }
            , {}],
        2: [function(t, e, i) {
            var s = t("./countdown.js")
                , o = "countdown"
                , r = "date";
            jQuery.fn.countdown = function(n) {
                return $.each(this, function(t, e) {
                    var i = $(e);
                    i.data(o) || (i.data(r) && (n.date = i.data(r)),
                        i.data(o, new s(e,n)))
                })
            }
                ,
                e.exports = s
        }
            , {
                "./countdown.js": 1
            }]
    }, {}, [2])(2)
});
!function(n) {
    "use strict";
    n.fn.counterUp = function(t) {
        var e = n.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var i = n(this)
                , s = e;
            i.waypoint(function() {
                var t = []
                    , e = s.time / s.delay
                    , n = i.text()
                    , u = /[0-9]+,[0-9]+/.test(n);
                n = n.replace(/,/g, "");
                /^[0-9]+$/.test(n);
                for (var a = /^[0-9]+\.[0-9]+$/.test(n), r = a ? (n.split(".")[1] || []).length : 0, o = e; 1 <= o; o--) {
                    var c = parseInt(n / e * o);
                    if (a && (c = parseFloat(n / e * o).toFixed(r)),
                            u)
                        for (; /(\d+)(\d{3})/.test(c.toString()); )
                            c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    t.unshift(c)
                }
                i.data("counterup-nums", t),
                    i.text("0");
                i.data("counterup-func", function() {
                    i.text(i.data("counterup-nums").shift()),
                        i.data("counterup-nums").length ? setTimeout(i.data("counterup-func"), s.delay) : (i.data("counterup-nums"),
                            i.data("counterup-nums", null),
                            i.data("counterup-func", null))
                }),
                    setTimeout(i.data("counterup-func"), s.delay)
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(d) {
    var u, i, p, o, f, t, l = "Close", c = "BeforeClose", m = "MarkupParse", g = "Open", r = "Change", n = "mfp", h = "." + n, v = "mfp-ready", a = "mfp-removing", s = "mfp-prevent-close", e = function() {}, C = !!window.jQuery, y = d(window), w = function(e, t) {
        u.ev.on(n + e + h, t)
    }, b = function(e, t, n, i) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
            i ? t && t.appendChild(o) : (o = d(o),
            t && o.appendTo(t)),
            o
    }, I = function(e, t) {
        u.ev.triggerHandler(n + e, t),
        u.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1),
        u.st.callbacks[e] && u.st.callbacks[e].apply(u, d.isArray(t) ? t : [t]))
    }, x = function(e) {
        return e === t && u.currTemplate.closeBtn || (u.currTemplate.closeBtn = d(u.st.closeMarkup.replace("%title%", u.st.tClose)),
            t = e),
            u.currTemplate.closeBtn
    }, k = function() {
        d.magnificPopup.instance || ((u = new e).init(),
            d.magnificPopup.instance = u)
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            u.isIE7 = -1 !== e.indexOf("MSIE 7."),
                u.isIE8 = -1 !== e.indexOf("MSIE 8."),
                u.isLowIE = u.isIE7 || u.isIE8,
                u.isAndroid = /android/gi.test(e),
                u.isIOS = /iphone|ipad|ipod/gi.test(e),
                u.supportsTransition = function() {
                    var e = document.createElement("p").style
                        , t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition)
                        return !0;
                    for (; t.length; )
                        if (t.pop() + "Transition"in e)
                            return !0;
                    return !1
                }(),
                u.probablyMobile = u.isAndroid || u.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
                p = d(document),
                u.popupsCache = {}
        },
        open: function(e) {
            var t;
            if (!1 === e.isObj) {
                u.items = e.items.toArray(),
                    u.index = 0;
                var n, i = e.items;
                for (t = 0; t < i.length; t++)
                    if ((n = i[t]).parsed && (n = n.el[0]),
                        n === e.el[0]) {
                        u.index = t;
                        break
                    }
            } else
                u.items = d.isArray(e.items) ? e.items : [e.items],
                    u.index = e.index || 0;
            if (!u.isOpen) {
                u.types = [],
                    f = "",
                    e.mainEl && e.mainEl.length ? u.ev = e.mainEl.eq(0) : u.ev = p,
                    e.key ? (u.popupsCache[e.key] || (u.popupsCache[e.key] = {}),
                        u.currTemplate = u.popupsCache[e.key]) : u.currTemplate = {},
                    u.st = d.extend(!0, {}, d.magnificPopup.defaults, e),
                    u.fixedContentPos = "auto" === u.st.fixedContentPos ? !u.probablyMobile : u.st.fixedContentPos,
                u.st.modal && (u.st.closeOnContentClick = !1,
                    u.st.closeOnBgClick = !1,
                    u.st.showCloseBtn = !1,
                    u.st.enableEscapeKey = !1),
                u.bgOverlay || (u.bgOverlay = b("bg").on("click" + h, function() {
                    u.close()
                }),
                    u.wrap = b("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                        u._checkIfClose(e.target) && u.close()
                    }),
                    u.container = b("container", u.wrap)),
                    u.contentContainer = b("content"),
                u.st.preloader && (u.preloader = b("preloader", u.container, u.st.tLoading));
                var o = d.magnificPopup.modules;
                for (t = 0; t < o.length; t++) {
                    var a = o[t];
                    a = a.charAt(0).toUpperCase() + a.slice(1),
                        u["init" + a].call(u)
                }
                I("BeforeOpen"),
                u.st.showCloseBtn && (u.st.closeBtnInside ? (w(m, function(e, t, n, i) {
                    n.close_replaceWith = x(i.type)
                }),
                    f += " mfp-close-btn-in") : u.wrap.append(x())),
                u.st.alignTop && (f += " mfp-align-top"),
                    u.fixedContentPos ? u.wrap.css({
                        overflow: u.st.overflowY,
                        overflowX: "hidden",
                        overflowY: u.st.overflowY
                    }) : u.wrap.css({
                        top: y.scrollTop(),
                        position: "absolute"
                    }),
                (!1 === u.st.fixedBgPos || "auto" === u.st.fixedBgPos && !u.fixedContentPos) && u.bgOverlay.css({
                    height: p.height(),
                    position: "absolute"
                }),
                u.st.enableEscapeKey && p.on("keyup" + h, function(e) {
                    27 === e.keyCode && u.close()
                }),
                    y.on("resize" + h, function() {
                        u.updateSize()
                    }),
                u.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && u.wrap.addClass(f);
                var r = u.wH = y.height()
                    , s = {};
                if (u.fixedContentPos && u._hasScrollBar(r)) {
                    var l = u._getScrollbarSize();
                    l && (s.marginRight = l)
                }
                u.fixedContentPos && (u.isIE7 ? d("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var c = u.st.mainClass;
                return u.isIE7 && (c += " mfp-ie7"),
                c && u._addClassToMFP(c),
                    u.updateItemHTML(),
                    I("BuildControls"),
                    d("html").css(s),
                    u.bgOverlay.add(u.wrap).prependTo(u.st.prependTo || d(document.body)),
                    u._lastFocusedEl = document.activeElement,
                    setTimeout(function() {
                        u.content ? (u._addClassToMFP(v),
                            u._setFocus()) : u.bgOverlay.addClass(v),
                            p.on("focusin" + h, u._onFocusIn)
                    }, 16),
                    u.isOpen = !0,
                    u.updateSize(r),
                    I(g),
                    e
            }
            u.updateItemHTML()
        },
        close: function() {
            u.isOpen && (I(c),
                u.isOpen = !1,
                u.st.removalDelay && !u.isLowIE && u.supportsTransition ? (u._addClassToMFP(a),
                    setTimeout(function() {
                        u._close()
                    }, u.st.removalDelay)) : u._close())
        },
        _close: function() {
            I(l);
            var e = a + " " + v + " ";
            if (u.bgOverlay.detach(),
                    u.wrap.detach(),
                    u.container.empty(),
                u.st.mainClass && (e += u.st.mainClass + " "),
                    u._removeClassFromMFP(e),
                    u.fixedContentPos) {
                var t = {
                    marginRight: ""
                };
                u.isIE7 ? d("body, html").css("overflow", "") : t.overflow = "",
                    d("html").css(t)
            }
            p.off("keyup.mfp focusin" + h),
                u.ev.off(h),
                u.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                u.bgOverlay.attr("class", "mfp-bg"),
                u.container.attr("class", "mfp-container"),
            !u.st.showCloseBtn || u.st.closeBtnInside && !0 !== u.currTemplate[u.currItem.type] || u.currTemplate.closeBtn && u.currTemplate.closeBtn.detach(),
            u.st.autoFocusLast && u._lastFocusedEl && d(u._lastFocusedEl).focus(),
                u.currItem = null,
                u.content = null,
                u.currTemplate = null,
                u.prevHeight = 0,
                I("AfterClose")
        },
        updateSize: function(e) {
            if (u.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth
                    , n = window.innerHeight * t;
                u.wrap.css("height", n),
                    u.wH = n
            } else
                u.wH = e || y.height();
            u.fixedContentPos || u.wrap.css("height", u.wH),
                I("Resize")
        },
        updateItemHTML: function() {
            var e = u.items[u.index];
            u.contentContainer.detach(),
            u.content && u.content.detach(),
            e.parsed || (e = u.parseEl(u.index));
            var t = e.type;
            if (I("BeforeChange", [u.currItem ? u.currItem.type : "", t]),
                    u.currItem = e,
                    !u.currTemplate[t]) {
                var n = !!u.st[t] && u.st[t].markup;
                I("FirstMarkupParse", n),
                    u.currTemplate[t] = !n || d(n)
            }
            o && o !== e.type && u.container.removeClass("mfp-" + o + "-holder");
            var i = u["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, u.currTemplate[t]);
            u.appendContent(i, t),
                e.preloaded = !0,
                I(r, e),
                o = e.type,
                u.container.prepend(u.contentContainer),
                I("AfterChange")
        },
        appendContent: function(e, t) {
            (u.content = e) ? u.st.showCloseBtn && u.st.closeBtnInside && !0 === u.currTemplate[t] ? u.content.find(".mfp-close").length || u.content.append(x()) : u.content = e : u.content = "",
                I("BeforeAppend"),
                u.container.addClass("mfp-" + t + "-holder"),
                u.contentContainer.append(u.content)
        },
        parseEl: function(e) {
            var t, n = u.items[e];
            if (n.tagName ? n = {
                    el: d(n)
                } : (t = n.type,
                    n = {
                        data: n,
                        src: n.src
                    }),
                    n.el) {
                for (var i = u.types, o = 0; o < i.length; o++)
                    if (n.el.hasClass("mfp-" + i[o])) {
                        t = i[o];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"),
                n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || u.st.type || "inline",
                n.index = e,
                n.parsed = !0,
                u.items[e] = n,
                I("ElementParse", n),
                u.items[e]
        },
        addGroup: function(t, n) {
            var e = function(e) {
                e.mfpEl = this,
                    u._openClick(e, t, n)
            };
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = t,
                n.items ? (n.isObj = !0,
                    t.off(i).on(i, e)) : (n.isObj = !1,
                    n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n.midClick : d.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var i = void 0 !== n.disableOn ? n.disableOn : d.magnificPopup.defaults.disableOn;
                if (i)
                    if (d.isFunction(i)) {
                        if (!i.call(u))
                            return !0
                    } else if (y.width() < i)
                        return !0;
                e.type && (e.preventDefault(),
                u.isOpen && e.stopPropagation()),
                    n.el = d(e.mfpEl),
                n.delegate && (n.items = t.find(n.delegate)),
                    u.open(n)
            }
        },
        updateStatus: function(e, t) {
            if (u.preloader) {
                i !== e && u.container.removeClass("mfp-s-" + i),
                t || "loading" !== e || (t = u.st.tLoading);
                var n = {
                    status: e,
                    text: t
                };
                I("UpdateStatus", n),
                    e = n.status,
                    t = n.text,
                    u.preloader.html(t),
                    u.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }),
                    u.container.addClass("mfp-s-" + e),
                    i = e
            }
        },
        _checkIfClose: function(e) {
            if (!d(e).hasClass(s)) {
                var t = u.st.closeOnContentClick
                    , n = u.st.closeOnBgClick;
                if (t && n)
                    return !0;
                if (!u.content || d(e).hasClass("mfp-close") || u.preloader && e === u.preloader[0])
                    return !0;
                if (e === u.content[0] || d.contains(u.content[0], e)) {
                    if (t)
                        return !0
                } else if (n && d.contains(document, e))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            u.bgOverlay.addClass(e),
                u.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
                u.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (u.isIE7 ? p.height() : document.body.scrollHeight) > (e || y.height())
        },
        _setFocus: function() {
            (u.st.focus ? u.content.find(u.st.focus).eq(0) : u.wrap).focus()
        },
        _onFocusIn: function(e) {
            return e.target === u.wrap[0] || d.contains(u.wrap[0], e.target) ? void 0 : (u._setFocus(),
                !1)
        },
        _parseMarkup: function(o, e, t) {
            var a;
            t.data && (e = d.extend(t.data, e)),
                I(m, [o, e, t]),
                d.each(e, function(e, t) {
                    if (void 0 === t || !1 === t)
                        return !0;
                    if (1 < (a = e.split("_")).length) {
                        var n = o.find(h + "-" + a[0]);
                        if (0 < n.length) {
                            var i = a[1];
                            "replaceWith" === i ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith('<img src="' + t + '" class="' + n.attr("class") + '" />') : n.attr(a[1], t)
                        }
                    } else
                        o.find(h + "-" + e).html(t)
                })
        },
        _getScrollbarSize: function() {
            if (void 0 === u.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                    document.body.appendChild(e),
                    u.scrollbarSize = e.offsetWidth - e.clientWidth,
                    document.body.removeChild(e)
            }
            return u.scrollbarSize
        }
    },
        d.magnificPopup = {
            instance: null,
            proto: e.prototype,
            modules: [],
            open: function(e, t) {
                return k(),
                    (e = e ? d.extend(!0, {}, e) : {}).isObj = !0,
                    e.index = t || 0,
                    this.instance.open(e)
            },
            close: function() {
                return d.magnificPopup.instance && d.magnificPopup.instance.close()
            },
            registerModule: function(e, t) {
                t.options && (d.magnificPopup.defaults[e] = t.options),
                    d.extend(this.proto, t.proto),
                    this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        },
        d.fn.magnificPopup = function(e) {
            k();
            var t = d(this);
            if ("string" == typeof e)
                if ("open" === e) {
                    var n, i = C ? t.data("magnificPopup") : t[0].magnificPopup, o = parseInt(arguments[1], 10) || 0;
                    i.items ? n = i.items[o] : (n = t,
                    i.delegate && (n = n.find(i.delegate)),
                        n = n.eq(o)),
                        u._openClick({
                            mfpEl: n
                        }, t, i)
                } else
                    u.isOpen && u[e].apply(u, Array.prototype.slice.call(arguments, 1));
            else
                e = d.extend(!0, {}, e),
                    C ? t.data("magnificPopup", e) : t[0].magnificPopup = e,
                    u.addGroup(t, e);
            return t
        }
    ;
    var T, E, _, S = "inline", P = function() {
        _ && (E.after(_.addClass(T)).detach(),
            _ = null)
    };
    d.magnificPopup.registerModule(S, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                u.types.push(S),
                    w(l + "." + S, function() {
                        P()
                    })
            },
            getInline: function(e, t) {
                if (P(),
                        e.src) {
                    var n = u.st.inline
                        , i = d(e.src);
                    if (i.length) {
                        var o = i[0].parentNode;
                        o && o.tagName && (E || (T = n.hiddenClass,
                            E = b(T),
                            T = "mfp-" + T),
                            _ = i.after(E).detach().removeClass(T)),
                            u.updateStatus("ready")
                    } else
                        u.updateStatus("error", n.tNotFound),
                            i = d("<div>");
                    return e.inlineElement = i
                }
                return u.updateStatus("ready"),
                    u._parseMarkup(t, {}, e),
                    t
            }
        }
    });
    var O, z = "ajax", M = function() {
        O && d(document.body).removeClass(O)
    }, B = function() {
        M(),
        u.req && u.req.abort()
    };
    d.magnificPopup.registerModule(z, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                u.types.push(z),
                    O = u.st.ajax.cursor,
                    w(l + "." + z, B),
                    w("BeforeChange." + z, B)
            },
            getAjax: function(o) {
                O && d(document.body).addClass(O),
                    u.updateStatus("loading");
                var e = d.extend({
                    url: o.src,
                    success: function(e, t, n) {
                        var i = {
                            data: e,
                            xhr: n
                        };
                        I("ParseAjax", i),
                            u.appendContent(d(i.data), z),
                            o.finished = !0,
                            M(),
                            u._setFocus(),
                            setTimeout(function() {
                                u.wrap.addClass(v)
                            }, 16),
                            u.updateStatus("ready"),
                            I("AjaxContentAdded")
                    },
                    error: function() {
                        M(),
                            o.finished = o.loadError = !0,
                            u.updateStatus("error", u.st.ajax.tError.replace("%url%", o.src))
                    }
                }, u.st.ajax.settings);
                return u.req = d.ajax(e),
                    ""
            }
        }
    });
    var F;
    d.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = u.st.image
                    , t = ".image";
                u.types.push("image"),
                    w(g + t, function() {
                        "image" === u.currItem.type && e.cursor && d(document.body).addClass(e.cursor)
                    }),
                    w(l + t, function() {
                        e.cursor && d(document.body).removeClass(e.cursor),
                            y.off("resize" + h)
                    }),
                    w("Resize" + t, u.resizeImage),
                u.isLowIE && w("AfterChange", u.resizeImage)
            },
            resizeImage: function() {
                var e = u.currItem;
                if (e && e.img && u.st.image.verticalFit) {
                    var t = 0;
                    u.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                        e.img.css("max-height", u.wH - t)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                F && clearInterval(F),
                    e.isCheckingImgSize = !1,
                    I("ImageHasSize", e),
                e.imgHidden && (u.content && u.content.removeClass("mfp-loading"),
                    e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0
                    , i = t.img[0]
                    , o = function(e) {
                    F && clearInterval(F),
                        F = setInterval(function() {
                            return 0 < i.naturalWidth ? void u._onImageHasSize(t) : (200 < n && clearInterval(F),
                                void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, e)
                };
                o(1)
            },
            getImage: function(e, t) {
                var n = 0
                    , i = function() {
                    e && (e.img[0].complete ? (e.img.off(".mfploader"),
                    e === u.currItem && (u._onImageHasSize(e),
                        u.updateStatus("ready")),
                        e.hasSize = !0,
                        e.loaded = !0,
                        I("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : o())
                }
                    , o = function() {
                    e && (e.img.off(".mfploader"),
                    e === u.currItem && (u._onImageHasSize(e),
                        u.updateStatus("error", a.tError.replace("%url%", e.src))),
                        e.hasSize = !0,
                        e.loaded = !0,
                        e.loadError = !0)
                }
                    , a = u.st.image
                    , r = t.find(".mfp-img");
                if (r.length) {
                    var s = document.createElement("img");
                    s.className = "mfp-img",
                    e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")),
                        e.img = d(s).on("load.mfploader", i).on("error.mfploader", o),
                        s.src = e.src,
                    r.is("img") && (e.img = e.img.clone()),
                        0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)
                }
                return u._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title)
                            return e.data.title;
                        var t = u.st.image.titleSrc;
                        if (t) {
                            if (d.isFunction(t))
                                return t.call(u, e);
                            if (e.el)
                                return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e),
                    u.resizeImage(),
                    e.hasSize ? (F && clearInterval(F),
                        e.loadError ? (t.addClass("mfp-loading"),
                            u.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"),
                            u.updateStatus("ready"))) : (u.updateStatus("loading"),
                        e.loading = !0,
                    e.hasSize || (e.imgHidden = !0,
                        t.addClass("mfp-loading"),
                        u.findImageSize(e))),
                    t
            }
        }
    });
    var L;
    d.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, a = u.st.zoom, t = ".zoom";
                if (a.enabled && u.supportsTransition) {
                    var n, i, o = a.duration, r = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                            , n = "all " + a.duration / 1e3 + "s " + a.easing
                            , i = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                            , o = "transition";
                        return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n,
                            t.css(i),
                            t
                    }, s = function() {
                        u.content.css("visibility", "visible")
                    };
                    w("BuildControls" + t, function() {
                        if (u._allowZoom()) {
                            if (clearTimeout(n),
                                    u.content.css("visibility", "hidden"),
                                    !(e = u._getItemToZoom()))
                                return void s();
                            (i = r(e)).css(u._getOffset()),
                                u.wrap.append(i),
                                n = setTimeout(function() {
                                    i.css(u._getOffset(!0)),
                                        n = setTimeout(function() {
                                            s(),
                                                setTimeout(function() {
                                                    i.remove(),
                                                        e = i = null,
                                                        I("ZoomAnimationEnded")
                                                }, 16)
                                        }, o)
                                }, 16)
                        }
                    }),
                        w(c + t, function() {
                            if (u._allowZoom()) {
                                if (clearTimeout(n),
                                        u.st.removalDelay = o,
                                        !e) {
                                    if (!(e = u._getItemToZoom()))
                                        return;
                                    i = r(e)
                                }
                                i.css(u._getOffset(!0)),
                                    u.wrap.append(i),
                                    u.content.css("visibility", "hidden"),
                                    setTimeout(function() {
                                        i.css(u._getOffset())
                                    }, 16)
                            }
                        }),
                        w(l + t, function() {
                            u._allowZoom() && (s(),
                            i && i.remove(),
                                e = null)
                        })
                }
            },
            _allowZoom: function() {
                return "image" === u.currItem.type
            },
            _getItemToZoom: function() {
                return !!u.currItem.hasSize && u.currItem.img
            },
            _getOffset: function(e) {
                var t, n = (t = e ? u.currItem.img : u.st.zoom.opener(u.currItem.el || u.currItem)).offset(), i = parseInt(t.css("padding-top"), 10), o = parseInt(t.css("padding-bottom"), 10);
                n.top -= d(window).scrollTop() - i;
                var a = {
                    width: t.width(),
                    height: (C ? t.innerHeight() : t[0].offsetHeight) - o - i
                };
                return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform),
                    L ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left,
                        a.top = n.top),
                    a
            }
        }
    });
    var H = "iframe"
        , A = function(e) {
        if (u.currTemplate[H]) {
            var t = u.currTemplate[H].find("iframe");
            t.length && (e || (t[0].src = "//about:blank"),
            u.isIE8 && t.css("display", e ? "block" : "none"))
        }
    };
    d.magnificPopup.registerModule(H, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                u.types.push(H),
                    w("BeforeChange", function(e, t, n) {
                        t !== n && (t === H ? A() : n === H && A(!0))
                    }),
                    w(l + "." + H, function() {
                        A()
                    })
            },
            getIframe: function(e, t) {
                var n = e.src
                    , i = u.st.iframe;
                d.each(i.patterns, function() {
                    return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)),
                        n = this.src.replace("%id%", n),
                        !1) : void 0
                });
                var o = {};
                return i.srcAction && (o[i.srcAction] = n),
                    u._parseMarkup(t, o, e),
                    u.updateStatus("ready"),
                    t
            }
        }
    });
    var j = function(e) {
        var t = u.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }
        , N = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    };
    d.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var a = u.st.gallery
                    , e = ".mfp-gallery"
                    , o = Boolean(d.fn.mfpFastClick);
                return u.direction = !0,
                !(!a || !a.enabled) && (f += " mfp-gallery",
                    w(g + e, function() {
                        a.navigateByImgClick && u.wrap.on("click" + e, ".mfp-img", function() {
                            return 1 < u.items.length ? (u.next(),
                                !1) : void 0
                        }),
                            p.on("keydown" + e, function(e) {
                                37 === e.keyCode ? u.prev() : 39 === e.keyCode && u.next()
                            })
                    }),
                    w("UpdateStatus" + e, function(e, t) {
                        t.text && (t.text = N(t.text, u.currItem.index, u.items.length))
                    }),
                    w(m + e, function(e, t, n, i) {
                        var o = u.items.length;
                        n.counter = 1 < o ? N(a.tCounter, i.index, o) : ""
                    }),
                    w("BuildControls" + e, function() {
                        if (1 < u.items.length && a.arrows && !u.arrowLeft) {
                            var e = a.arrowMarkup
                                , t = u.arrowLeft = d(e.replace(/%title%/gi, a.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                                , n = u.arrowRight = d(e.replace(/%title%/gi, a.tNext).replace(/%dir%/gi, "right")).addClass(s)
                                , i = o ? "mfpFastClick" : "click";
                            t[i](function() {
                                u.prev()
                            }),
                                n[i](function() {
                                    u.next()
                                }),
                            u.isIE7 && (b("b", t[0], !1, !0),
                                b("a", t[0], !1, !0),
                                b("b", n[0], !1, !0),
                                b("a", n[0], !1, !0)),
                                u.container.append(t.add(n))
                        }
                    }),
                    w(r + e, function() {
                        u._preloadTimeout && clearTimeout(u._preloadTimeout),
                            u._preloadTimeout = setTimeout(function() {
                                u.preloadNearbyImages(),
                                    u._preloadTimeout = null
                            }, 16)
                    }),
                    void w(l + e, function() {
                        p.off(e),
                            u.wrap.off("click" + e),
                        u.arrowLeft && o && u.arrowLeft.add(u.arrowRight).destroyMfpFastClick(),
                            u.arrowRight = u.arrowLeft = null
                    }))
            },
            next: function() {
                u.direction = !0,
                    u.index = j(u.index + 1),
                    u.updateItemHTML()
            },
            prev: function() {
                u.direction = !1,
                    u.index = j(u.index - 1),
                    u.updateItemHTML()
            },
            goTo: function(e) {
                u.direction = e >= u.index,
                    u.index = e,
                    u.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, t = u.st.gallery.preload, n = Math.min(t[0], u.items.length), i = Math.min(t[1], u.items.length);
                for (e = 1; e <= (u.direction ? i : n); e++)
                    u._preloadItem(u.index + e);
                for (e = 1; e <= (u.direction ? n : i); e++)
                    u._preloadItem(u.index - e)
            },
            _preloadItem: function(e) {
                if (e = j(e),
                        !u.items[e].preloaded) {
                    var t = u.items[e];
                    t.parsed || (t = u.parseEl(e)),
                        I("LazyLoad", t),
                    "image" === t.type && (t.img = d('<img class="mfp-img" />').on("load.mfploader", function() {
                        t.hasSize = !0
                    }).on("error.mfploader", function() {
                        t.hasSize = !0,
                            t.loadError = !0,
                            I("LazyLoadError", t)
                    }).attr("src", t.src)),
                        t.preloaded = !0
                }
            }
        }
    });
    var W, R, Z, q = "retina";
    d.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var n = u.st.retina
                        , i = n.ratio;
                    1 < (i = isNaN(i) ? i() : i) && (w("ImageHasSize." + q, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }),
                        w("ElementParse." + q, function(e, t) {
                            t.src = n.replaceSrc(t, i)
                        }))
                }
            }
        }
    }),
        W = "ontouchstart"in window,
        R = function() {
            y.off("touchmove" + Z + " touchend" + Z)
        }
        ,
        Z = ".mfpFastClick",
        d.fn.mfpFastClick = function(l) {
            return d(this).each(function() {
                var t, n, i, o, a, r, s, e = d(this);
                W && e.on("touchstart" + Z, function(e) {
                    a = !1,
                        s = 1,
                        r = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                        i = r.clientX,
                        o = r.clientY,
                        y.on("touchmove" + Z, function(e) {
                            r = e.originalEvent ? e.originalEvent.touches : e.touches,
                                s = r.length,
                                r = r[0],
                            (10 < Math.abs(r.clientX - i) || 10 < Math.abs(r.clientY - o)) && (a = !0,
                                R())
                        }).on("touchend" + Z, function(e) {
                            R(),
                            a || 1 < s || (t = !0,
                                e.preventDefault(),
                                clearTimeout(n),
                                n = setTimeout(function() {
                                    t = !1
                                }, 1e3),
                                l())
                        })
                }),
                    e.on("click" + Z, function() {
                        t || l()
                    })
            })
        }
        ,
        d.fn.destroyMfpFastClick = function() {
            d(this).off("touchstart" + Z + " click" + Z),
            W && y.off("touchmove" + Z + " touchend" + Z)
        }
        ,
        k()
});
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0,
        jQuery(document).trigger("YTAPIReady"))
}
function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}
function setUnit(e, r) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e
}
function setFilter(e, r, t) {
    var a = uncamel(r)
        , o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "",
        t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit),
        e[o + "filter"] += a + "(" + t + ") ",
        delete e[r]
}
var ytp = ytp || {}
    , getYTPVideoID = function(e) {
    var r, t;
    return 0 < e.indexOf("youtu.be") ? r = (t = 0 < (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : -1 < e.indexOf("http") ? (r = e.match(/[\\?&]v=([^&#]*)/)[1],
        t = 0 < e.indexOf("list=") ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : t = (r = 15 < e.length ? null : e) ? null : e,
        {
            videoID: r,
            playlistID: t
        }
};
!function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.7",
        build: "5748",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function(e) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this
                    , $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0,
                    YTPlayer.opt = {},
                    YTPlayer.state = {},
                    YTPlayer.filtersEnabled = !0,
                    YTPlayer.filters = {
                        grayscale: {
                            value: 0,
                            unit: "%"
                        },
                        hue_rotate: {
                            value: 0,
                            unit: "deg"
                        },
                        invert: {
                            value: 0,
                            unit: "%"
                        },
                        opacity: {
                            value: 0,
                            unit: "%"
                        },
                        saturate: {
                            value: 0,
                            unit: "%"
                        },
                        sepia: {
                            value: 0,
                            unit: "%"
                        },
                        brightness: {
                            value: 0,
                            unit: "%"
                        },
                        contrast: {
                            value: 0,
                            unit: "%"
                        },
                        blur: {
                            value: 0,
                            unit: "px"
                        }
                    },
                    $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                void 0 !== property && void 0 !== property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol),
                    jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property),
                YTPlayer.hasChanged || (YTPlayer.defaultOpt = {},
                    jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)),
                "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999),
                    YTPlayer.isRetina = window.retina || 1 < window.devicePixelRatio;
                var isIframe = function() {
                    var r = !1;
                    try {
                        self.location.href != top.location.href && (r = !0)
                    } catch (e) {
                        r = !0
                    }
                    return r
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()),
                YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1,
                    YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID
                    , playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                YTPlayer.videoID = videoID,
                    YTPlayer.playlistID = playlistID,
                    YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }),
                jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox")
                    , overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment,
                        YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment),
                        YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(),
                    !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length,
                            isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(),
                        jQuery.browser.mobile && !YTPlayer.canPlayOnMobile)
                        return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }),
                            playerBox.css({
                                position: "absolute",
                                zIndex: 0,
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                overflow: "hidden"
                            }),
                            wrapper.append(playerBox),
                            YTPlayer.opt.containment.children().not("script, style").each(function() {
                                "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                            }),
                            YTPlayer.isBackground ? (jQuery("body").css({
                                boxSizing: "border-box"
                            }),
                                wrapper.css({
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    zIndex: 0
                                }),
                                $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                                position: "relative"
                            }),
                            YTPlayer.opt.containment.prepend(wrapper),
                            YTPlayer.wrapper = wrapper,
                            playerBox.css({
                                opacity: 1
                            }),
                        jQuery.browser.mobile || (playerBox.after(overlay),
                            YTPlayer.overlay = overlay),
                        YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }),
                            ytp.YTAPIReady)
                        setTimeout(function() {
                            jQuery(document).trigger("YTAPIReady")
                        }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script><\/script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0),
                            YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay,
                            YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100,
                            jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),
                            jQuery(YTPlayer).on("YTPChanged", function() {
                                if (!YTPlayer.isInit) {
                                    if (YTPlayer.isInit = !0,
                                        jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                        if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                            YTPlayer.opt.containment.css({
                                                maxWidth: "100%"
                                            });
                                            var h = .6 * YTPlayer.opt.containment.outerWidth();
                                            YTPlayer.opt.containment.css({
                                                maxHeight: h
                                            })
                                        }
                                        return void new YT.Player(playerID,{
                                            videoId: YTPlayer.videoID.toString(),
                                            height: "100%",
                                            width: "100%",
                                            events: {
                                                onReady: function(e) {
                                                    YTPlayer.player = e.target,
                                                        playerBox.css({
                                                            opacity: 1
                                                        }),
                                                        YTPlayer.wrapper.css({
                                                            opacity: 1
                                                        })
                                                }
                                            }
                                        })
                                    }
                                    new YT.Player(playerID,{
                                        videoId: YTPlayer.videoID.toString(),
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target,
                                                YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay),
                                                    YTPlayer.playerEl = YTPlayer.player.getIframe(),
                                                    $(YTPlayer.playerEl).unselectable(),
                                                    $YTPlayer.optimizeDisplay(),
                                                    YTPlayer.videoID = videoID,
                                                    jQuery(window).on("resize.YTP", function() {
                                                        $YTPlayer.optimizeDisplay()
                                                    }),
                                                    jQuery.mbYTPlayer.checkForState(YTPlayer))
                                            },
                                            onStateChange: function(event) {
                                                if ("function" == typeof event.target.getPlayerState) {
                                                    var state = event.target.getPlayerState();
                                                    if (YTPlayer.state != state) {
                                                        if (YTPlayer.preventTrigger)
                                                            return void (YTPlayer.preventTrigger = !1);
                                                        var eventType;
                                                        switch (YTPlayer.state = state,
                                                            state) {
                                                            case -1:
                                                                eventType = "YTPUnstarted";
                                                                break;
                                                            case 0:
                                                                eventType = "YTPEnd";
                                                                break;
                                                            case 1:
                                                                eventType = "YTPPlay",
                                                                YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),
                                                                "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]),
                                                                "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                                break;
                                                            case 2:
                                                                eventType = "YTPPause",
                                                                YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                                break;
                                                            case 3:
                                                                YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),
                                                                    eventType = "YTPBuffering",
                                                                YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                                break;
                                                            case 5:
                                                                eventType = "YTPCued"
                                                        }
                                                        var YTPEvent = jQuery.Event(eventType);
                                                        YTPEvent.time = YTPlayer.player.time,
                                                        YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                                    }
                                                }
                                            },
                                            onPlaybackQualityChange: function(e) {
                                                var r = e.target.getPlaybackQuality()
                                                    , t = jQuery.Event("YTPQualityChange");
                                                t.quality = r,
                                                    jQuery(YTPlayer).trigger(t)
                                            },
                                            onError: function(e) {
                                                150 == e.data && (console.log("Embedding this video is restricted by Youtube."),
                                                YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
                                                2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(),
                                                "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                            }
                                        }
                                    })
                                }
                            }))
                    })
                }
            })
        },
        getDataFromAPI: function(o) {
            if (o.videoData = jQuery.mbStorage.get("YTPlayer_data_" + o.videoID),
                    jQuery(o).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                        if (o.hasData && o.isPlayer && !o.opt.autoPlay) {
                            var e = o.videoData.thumb_max || o.videoData.thumb_high || o.videoData.thumb_medium;
                            o.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + e + ") center center",
                                backgroundSize: "cover"
                            }),
                                o.opt.backgroundUrl = e
                        }
                    }),
                    o.videoData)
                setTimeout(function() {
                    o.opt.ratio = "auto" == o.opt.ratio ? "16/9" : o.opt.ratio,
                        o.dataReceived = !0,
                        jQuery(o).trigger("YTPChanged");
                    var e = jQuery.Event("YTPData");
                    for (var r in e.prop = {},
                        o.videoData)
                        e.prop[r] = o.videoData[r];
                    jQuery(o).trigger(e)
                }, 500),
                    o.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey)
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + o.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(e) {
                    var r;
                    o.dataReceived = !0,
                        jQuery(o).trigger("YTPChanged"),
                        r = e.items[0].snippet,
                        o.videoData = {},
                        o.videoData.id = o.videoID,
                        o.videoData.channelTitle = r.channelTitle,
                        o.videoData.title = r.title,
                        o.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...",
                        o.videoData.aspectratio = "auto" == o.opt.ratio ? "16/9" : o.opt.ratio,
                        o.opt.ratio = o.videoData.aspectratio,
                        o.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null,
                        o.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null,
                        o.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null,
                        jQuery.mbStorage.set("YTPlayer_data_" + o.videoID, o.videoData),
                        o.hasData = !0;
                    var t = jQuery.Event("YTPData");
                    for (var a in t.prop = {},
                        o.videoData)
                        t.prop[a] = o.videoData[a];
                    jQuery(o).trigger(t)
                });
            else {
                if (setTimeout(function() {
                        jQuery(o).trigger("YTPChanged")
                    }, 50),
                    o.isPlayer && !o.opt.autoPlay) {
                    var e = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + o.videoID + "/hqdefault.jpg";
                    o.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + e + ") center center",
                        backgroundSize: "cover"
                    }),
                        o.opt.backgroundUrl = e
                }
                o.videoData = null,
                    o.opt.ratio = "auto" == o.opt.ratio ? "16/9" : o.opt.ratio
            }
            o.isPlayer && !o.opt.autoPlay && (o.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(),
                jQuery(o).append(o.loading),
                o.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            return this.get(0).videoData
        },
        getVideoID: function() {
            return this.get(0).videoID || !1
        },
        setVideoQuality: function(e) {
            var r = this.get(0);
            jQuery.browser.chrome || r.player.setPlaybackQuality(e)
        },
        playlist: function(e, r, t) {
            var a = this.get(0);
            return a.isPlayList = !0,
            r && (e = jQuery.shuffle(e)),
            a.videoID || (a.videos = e,
                a.videoCounter = 0,
                a.videoLength = e.length,
                jQuery(a).data("property", e[0]),
                jQuery(a).mb_YTPlayer()),
            "function" == typeof t && jQuery(a).one("YTPChanged", function() {
                t(a)
            }),
                jQuery(a).on("YTPEnd", function() {
                    jQuery(a).playNext()
                }),
                this
        },
        playNext: function() {
            var e = this.get(0);
            return e.videoCounter++,
            e.videoCounter >= e.videoLength && (e.videoCounter = 0),
                jQuery(e).changeMovie(e.videos[e.videoCounter]),
                this
        },
        playPrev: function() {
            var e = this.get(0);
            return e.videoCounter--,
            e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1),
                jQuery(e).changeMovie(e.videos[e.videoCounter]),
                this
        },
        changeMovie: function(e) {
            var r = this.get(0);
            r.opt.startAt = 0,
                r.opt.stopAt = 0,
                r.opt.mute = !0,
                r.hasData = !1,
                r.hasChanged = !0,
                r.player.LoopTime = void 0,
            e && jQuery.extend(r.opt, r.defaultOpt, e),
                r.videoID = getYTPVideoID(r.opt.videoURL).videoID,
            "true" == r.opt.loop && (r.opt.loop = 9999),
                jQuery(r.playerEl).CSSAnimate({
                    opacity: 0
                }, 200, function() {
                    var e = jQuery.Event("YTPChangeMovie");
                    return e.time = r.player.time,
                        e.videoId = r.videoID,
                        jQuery(r).trigger(e),
                        jQuery(r).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + r.videoID), 1, r.opt.quality),
                        jQuery.mbYTPlayer.checkForState(r),
                        jQuery(r).optimizeDisplay(),
                        jQuery.mbYTPlayer.getDataFromAPI(r),
                        this
                })
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            return ytp.YTAPIReady = !1,
                ytp.backgroundIsInited = !1,
                e.isInit = !1,
                e.videoID = null,
                e.wrapper.remove(),
                jQuery("#controlBar_" + e.id).remove(),
                clearInterval(e.checkForStartAt),
                clearInterval(e.getState),
                this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }
            function RunPrefixMethod(e, r) {
                for (var t, a, o = ["webkit", "moz", "ms", "o", ""], i = 0; i < o.length && !e[t]; ) {
                    if (t = r,
                        "" == o[i] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)),
                        "undefined" != (a = typeof e[t = o[i] + t]))
                        return o = [o[i]],
                            "function" == a ? e[t]() : e[t];
                    i++
                }
            }
            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen),
                real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id)
                , fullScreenBtn = controls.find(".mb_OnlyYT")
                , videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                        jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1,
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                        jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                        videoWrapper.removeClass("fullscreen"),
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, 500),
                        videoWrapper.css({
                            zIndex: 0
                        }),
                        YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls),
                        jQuery(window).resize(),
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"),
                YTPlayer.overlay.css({
                    cursor: "auto"
                }),
                real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                    opacity: YTPlayer.opt.opacity
                }, 500),
                    videoWrapper.css({
                        zIndex: 0
                    })),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }),
                    clearTimeout(YTPlayer.hideCursor),
                jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }),
                hideMouse(),
                real ? (videoWrapper.css({
                    opacity: 0
                }),
                    videoWrapper.addClass("fullscreen"),
                    launchFullscreen(videoWrapper.get(0)),
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, 1e3),
                            YTPlayer.wrapper.append(controls),
                            jQuery(YTPlayer).optimizeDisplay(),
                            YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                    }, 500)) : videoWrapper.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 1e3),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
                YTPlayer.isAlone = !0),
                this
        },
        toggleLoops: function() {
            var e = this.get(0)
                , r = e.opt;
            return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(),
                r.loop = 1),
                this
        },
        play: function() {
            var e = this.get(0);
            if (e.isReady)
                return e.player.playVideo(),
                    e.wrapper.CSSAnimate({
                        opacity: e.isAlone ? 1 : e.opt.opacity
                    }, 2e3),
                    jQuery(e.playerEl).CSSAnimate({
                        opacity: 1
                    }, 1e3),
                    jQuery(e).css("background-image", "none"),
                    this
        },
        togglePlay: function(e) {
            var r = this.get(0);
            return 1 == r.state ? this.YTPPause() : this.YTPPlay(),
            "function" == typeof e && e(r.state),
                this
        },
        stop: function() {
            var e = this.get(0);
            return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play),
                e.player.stopVideo(),
                this
        },
        pause: function() {
            return this.get(0).player.pauseVideo(),
                this
        },
        seekTo: function(e) {
            return this.get(0).player.seekTo(e, !0),
                this
        },
        setVolume: function(e) {
            var r = this.get(0);
            return e || r.opt.vol || 0 != r.player.getVolume() ? !e && 0 < r.player.getVolume() || e && r.opt.vol == e ? r.isMute ? jQuery(r).YTPUnmute() : jQuery(r).YTPMute() : (r.opt.vol = e,
                r.player.setVolume(r.opt.vol),
            r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)) : jQuery(r).YTPUnmute(),
                this
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(),
                    e.isMute = !0,
                    e.player.setVolume(0),
                e.volumeBar && e.volumeBar.length && 10 < e.volumeBar.width() && e.volumeBar.updateSliderVal(0),
                    jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute),
                    jQuery(e).addClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var r = jQuery.Event("YTPMuted");
                return r.time = e.player.time,
                e.canTrigger && jQuery(e).trigger(r),
                    this
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(),
                    e.isMute = !1,
                    e.player.setVolume(e.opt.vol),
                e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(10 < e.opt.vol ? e.opt.vol : 10),
                    jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute),
                    jQuery(e).removeClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var r = jQuery.Event("YTPUnmuted");
                return r.time = e.player.time,
                e.canTrigger && jQuery(e).trigger(r),
                    this
            }
        },
        applyFilter: function(e, r) {
            var t = this.get(0);
            return t.filters[e].value = r,
            t.filtersEnabled && this.YTPEnableFilters(),
                this
        },
        applyFilters: function(r) {
            var t = this.get(0);
            return this.on("YTPReady", function() {
                for (var e in r)
                    t.filters[e].value = r[e],
                        jQuery(t).YTPApplyFilter(e, r[e]);
                jQuery(t).trigger("YTPFiltersApplied")
            }),
                this
        },
        toggleFilter: function(e, r) {
            return this.each(function() {
                this.filters[e].value ? this.filters[e].value = 0 : this.filters[e].value = r,
                this.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function(r) {
            return this.each(function() {
                var e = this;
                e.filtersEnabled ? (jQuery(e).trigger("YTPDisableFilters"),
                    jQuery(e).YTPDisableFilters()) : (jQuery(e).YTPEnableFilters(),
                    jQuery(e).trigger("YTPEnableFilters")),
                "function" == typeof r && r(e.filtersEnabled)
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var e = jQuery(this.playerEl);
                e.css("-webkit-filter", ""),
                    e.css("filter", ""),
                    this.filtersEnabled = !1
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var e = this
                    , r = jQuery(e.playerEl)
                    , t = "";
                for (var a in e.filters)
                    e.filters[a].value && (t += a.replace("_", "-") + "(" + e.filters[a].value + e.filters[a].unit + ") ");
                r.css("-webkit-filter", t),
                    r.css("filter", t),
                    e.filtersEnabled = !0
            })
        },
        removeFilter: function(r, t) {
            return this.each(function() {
                "function" == typeof r && (t = r,
                    r = null);
                if (r)
                    jQuery(this).YTPApplyFilter(r, 0),
                    "function" == typeof t && t(r);
                else
                    for (var e in this.filters)
                        jQuery(this).YTPApplyFilter(e, 0),
                        "function" == typeof t && t(e)
            })
        },
        manageProgress: function() {
            var e = this.get(0)
                , r = jQuery("#controlBar_" + e.id)
                , t = r.find(".mb_YTPProgress")
                , a = r.find(".mb_YTPLoaded")
                , o = r.find(".mb_YTPseekbar")
                , i = t.outerWidth()
                , l = Math.floor(e.player.getCurrentTime())
                , n = Math.floor(e.player.getDuration())
                , s = l * i / n
                , u = 100 * e.player.getVideoLoadedFraction();
            return a.css({
                left: 0,
                width: u + "%"
            }),
                o.css({
                    left: 0,
                    width: s
                }),
                {
                    totalTime: n,
                    currentTime: l
                }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl,
                    !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar")
                    , playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                    1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                })
                    , MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                    0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                })
                    , volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                    display: "inline-block"
                });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime")
                    , vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                    window.open(vURL, "viewOnYT")
                })
                    , onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                    jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                })
                    , progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                    timeBar.css({
                        width: e.clientX - timeBar.offset().left
                    }),
                        YTPlayer.timeW = e.clientX - timeBar.offset().left,
                        YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                    var r = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(),
                        YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
                        YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                })
                    , loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute")
                    , timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar),
                    buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),
                data.showYTLogo && buttonBar.append(movieUrl),
                (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
                    YTPlayer.controlBar.append(buttonBar).append(progressBar),
                    YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"),
                        YTPlayer.wrapper.before(YTPlayer.controlBar)),
                    volumeBar.simpleSlider({
                        initialval: YTPlayer.opt.vol,
                        scale: 100,
                        orientation: "h",
                        callback: function(e) {
                            0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(),
                                YTPlayer.player.setVolume(e.value),
                            YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                        }
                    })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            return clearInterval(YTPlayer.getState),
                jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer),
                    void (YTPlayer.getState = setInterval(function() {
                        var prog = jQuery(YTPlayer).YTPManageProgress()
                            , $YTPlayer = jQuery(YTPlayer)
                            , data = YTPlayer.opt
                            , startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1
                            , stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                        if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0,
                            YTPlayer.player.time != prog.currentTime) {
                            var YTPEvent = jQuery.Event("YTPTime");
                            YTPEvent.time = YTPlayer.player.time,
                                jQuery(YTPlayer).trigger(YTPEvent)
                        }
                        if (YTPlayer.player.time = prog.currentTime,
                                0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"),
                            YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),
                            eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0,
                                $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1,
                                $YTPlayer.YTPPause())),
                                YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"),
                                    YTPlayer.isCompact = !0,
                                !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && 400 < YTPlayer.controlBar.outerWidth() && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"),
                                    YTPlayer.isCompact = !1,
                                !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
                            1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || 0 < stopAt && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                            if (YTPlayer.isEnded)
                                return;
                            if (YTPlayer.isEnded = !0,
                                    setTimeout(function() {
                                        YTPlayer.isEnded = !1
                                    }, 1e3),
                                    YTPlayer.isPlayList) {
                                if (!data.loop || 0 < data.loop && YTPlayer.player.LoopTime === data.loop - 1) {
                                    YTPlayer.player.LoopTime = void 0,
                                        clearInterval(YTPlayer.getState);
                                    var YTPEnd = jQuery.Event("YTPEnd");
                                    return YTPEnd.time = YTPlayer.player.time,
                                        void jQuery(YTPlayer).trigger(YTPEnd)
                                }
                            } else if (!data.loop || 0 < data.loop && YTPlayer.player.LoopTime === data.loop - 1)
                                return YTPlayer.player.LoopTime = void 0,
                                    YTPlayer.preventTrigger = !0,
                                    $(YTPlayer).YTPPause(),
                                    void YTPlayer.wrapper.CSSAnimate({
                                        opacity: 0
                                    }, 1e3, function() {
                                        var e = jQuery.Event("YTPEnd");
                                        e.time = YTPlayer.player.time,
                                            jQuery(YTPlayer).trigger(e),
                                            YTPlayer.player.seekTo(startAt, !0),
                                        YTPlayer.isBackground || YTPlayer.opt.containment.css({
                                            background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                            backgroundSize: "cover"
                                        })
                                    });
                            YTPlayer.player.LoopTime = YTPlayer.player.LoopTime ? ++YTPlayer.player.LoopTime : 1,
                                startAt = startAt || 1,
                                YTPlayer.player.pauseVideo(),
                                YTPlayer.player.seekTo(startAt, !0),
                                $YTPlayer.YTPPlay()
                        }
                    }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(),
                    clearInterval(YTPlayer.getState),
                    void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(o) {
            var i = jQuery(o);
            if (jQuery.contains(document, o)) {
                if (jQuery.browser.chrome && (o.opt.quality = "default"),
                        jQuery(o).muteYTPVolume(),
                        jQuery("#controlBar_" + o.id).remove(),
                    o.opt.showControls && jQuery.mbYTPlayer.buildControls(o),
                        o.opt.addRaster) {
                    var e = "dot" == o.opt.addRaster ? "raster-dot" : "raster";
                    o.overlay.addClass(o.isRetina ? e + " retina" : e)
                } else
                    o.overlay.removeClass(function(e, r) {
                        var t = r.split(" ")
                            , a = [];
                        return jQuery.each(t, function(e, r) {
                            /raster.*/.test(r) && a.push(r)
                        }),
                            a.push("retina"),
                            a.join(" ")
                    });
                o.checkForStartAt = setInterval(function() {
                    jQuery(o).YTPMute();
                    var e = o.opt.startAt ? o.opt.startAt : 1
                        , r = o.player.getVideoLoadedFraction() > e / o.player.getDuration();
                    if (0 < o.player.getDuration() && o.player.getCurrentTime() >= e && r) {
                        clearInterval(o.checkForStartAt),
                            o.isReady = !0,
                        "function" == typeof o.opt.onReady && o.opt.onReady(o);
                        var t = jQuery.Event("YTPReady");
                        if (t.time = o.player.time,
                                jQuery(o).trigger(t),
                            o.opt.mute || jQuery(o).YTPUnmute(),
                                o.canTrigger = !0,
                                o.opt.autoPlay) {
                            i.YTPPlay();
                            var a = jQuery.Event("YTPStart");
                            a.time = o.player.time,
                                jQuery(o).trigger(a),
                                i.css("background-image", "none"),
                                jQuery(o.playerEl).CSSAnimate({
                                    opacity: 1
                                }, 1e3),
                                o.wrapper.CSSAnimate({
                                    opacity: o.isAlone ? 1 : o.opt.opacity
                                }, 1e3)
                        } else
                            o.player.pauseVideo(),
                            o.isPlayer || (jQuery(o.playerEl).CSSAnimate({
                                opacity: 1
                            }, 1e3),
                                o.wrapper.CSSAnimate({
                                    opacity: o.isAlone ? 1 : o.opt.opacity
                                }, 1e3));
                        o.isPlayer && !o.opt.autoPlay && (o.loading.html("Ready"),
                            setTimeout(function() {
                                o.loading.fadeOut()
                            }, 100)),
                        o.controlBar && o.controlBar.slideDown(1e3)
                    } else
                        0 <= e && o.player.seekTo(e, !0)
                }, 1e3)
            } else
                jQuery(o).YTPPlayerDestroy()
        },
        formatTime: function(e) {
            var r = Math.floor(e / 60)
                , t = Math.floor(e - 60 * r);
            return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t)
        }
    },
        jQuery.fn.toggleVolume = function() {
            var e = this.get(0);
            if (e)
                return e.player.isMuted() ? (jQuery(e).YTPUnmute(),
                    !0) : (jQuery(e).YTPMute(),
                    !1)
        }
        ,
        jQuery.fn.optimizeDisplay = function() {
            var e = this.get(0)
                , r = e.opt
                , t = jQuery(e.playerEl)
                , a = {}
                , o = e.wrapper;
            a.width = o.outerWidth(),
                a.height = o.outerHeight();
            var i = {};
            r.optimizeDisplay ? (i.width = a.width + 24 * a.width / 100,
                i.height = "16/9" == r.ratio ? Math.ceil(9 * a.width / 16) : Math.ceil(3 * a.width / 4),
                i.marginTop = -(i.height - a.height) / 2,
                i.marginLeft = -12 * a.width / 100,
            i.height < a.height && (i.height = a.height + 24 * a.height / 100,
                i.width = "16/9" == r.ratio ? Math.floor(16 * a.height / 9) : Math.floor(4 * a.height / 3),
                i.marginTop = -12 * a.height / 100,
                i.marginLeft = -(i.width - a.width) / 2),
                i.width += 100,
                i.height += 100,
                i.marginTop -= 50,
                i.marginLeft -= 50) : (i.width = "100%",
                i.height = "100%",
                i.marginTop = 0,
                i.marginLeft = 0),
                t.css({
                    width: i.width,
                    height: i.height,
                    marginTop: i.marginTop,
                    marginLeft: i.marginLeft
                })
        }
        ,
        jQuery.shuffle = function(e) {
            for (var r = e.slice(), t = r.length, a = t; a--; ) {
                var o = parseInt(Math.random() * t)
                    , i = r[a];
                r[a] = r[o],
                    r[o] = i
            }
            return r
        }
        ,
        jQuery.fn.unselectable = function() {
            return this.each(function() {
                jQuery(this).css({
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "user-select": "none"
                }).attr("unselectable", "on")
            })
        }
        ,
        jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
        jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
        jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
        jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie,
        jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
        jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
        jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
        jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
        jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
        jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
        jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
        jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
        jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
        jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
        jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
        jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
        jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
        jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
        jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
        jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
        jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
        jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
        jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
        jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
        jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
        jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
        jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
        jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
        jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
        jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
        jQuery.fn.playNext = jQuery.mbYTPlayer.playNext,
        jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev,
        jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie,
        jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID,
        jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer,
        jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy,
        jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen,
        jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls,
        jQuery.fn.playYTP = jQuery.mbYTPlayer.play,
        jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops,
        jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop,
        jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause,
        jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo,
        jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute,
        jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute,
        jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume,
        jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
        jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress,
        jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp),
    jQuery.support.CSStransition = function() {
        var e = (document.body || document.documentElement).style;
        return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
    }(),
    jQuery.CSS = {
        name: "mb.CSSAnimate",
        author: "Matteo Bicocchi",
        version: "2.0.0",
        transitionEnd: "transitionEnd",
        sfx: "",
        filters: {
            blur: {
                min: 0,
                max: 100,
                unit: "px"
            },
            brightness: {
                min: 0,
                max: 400,
                unit: "%"
            },
            contrast: {
                min: 0,
                max: 400,
                unit: "%"
            },
            grayscale: {
                min: 0,
                max: 100,
                unit: "%"
            },
            hueRotate: {
                min: 0,
                max: 360,
                unit: "deg"
            },
            invert: {
                min: 0,
                max: 100,
                unit: "%"
            },
            saturate: {
                min: 0,
                max: 400,
                unit: "%"
            },
            sepia: {
                min: 0,
                max: 100,
                unit: "%"
            }
        },
        normalizeCss: function(e) {
            var r = jQuery.extend(!0, {}, e);
            for (var t in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"),
                r) {
                "transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t],
                    delete r[t]),
                "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t],
                    delete r[t]),
                "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t],
                    delete r[t]),
                "blur" === t && setFilter(r, "blur", e[t]),
                "brightness" === t && setFilter(r, "brightness", e[t]),
                "contrast" === t && setFilter(r, "contrast", e[t]),
                "grayscale" === t && setFilter(r, "grayscale", e[t]),
                "hueRotate" === t && setFilter(r, "hueRotate", e[t]),
                "invert" === t && setFilter(r, "invert", e[t]),
                "saturate" === t && setFilter(r, "saturate", e[t]),
                "sepia" === t && setFilter(r, "sepia", e[t]);
                var a = "";
                "x" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " translateX(" + setUnit(e[t], "px") + ")",
                    delete r[t]),
                "y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " translateY(" + setUnit(e[t], "px") + ")",
                    delete r[t]),
                "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " translateZ(" + setUnit(e[t], "px") + ")",
                    delete r[t]),
                "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " rotate(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " rotateX(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " rotateY(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " scale(" + setUnit(e[t], "") + ")",
                    delete r[t]),
                "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " scaleX(" + setUnit(e[t], "") + ")",
                    delete r[t]),
                "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " scaleY(" + setUnit(e[t], "") + ")",
                    delete r[t]),
                "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " scaleZ(" + setUnit(e[t], "") + ")",
                    delete r[t]),
                "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " skew(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " skewX(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " skewY(" + setUnit(e[t], "deg") + ")",
                    delete r[t]),
                "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "",
                    r[a] += " perspective(" + setUnit(e[t], "px") + ")",
                    delete r[t])
            }
            return r
        },
        getProp: function(e) {
            var r = [];
            for (var t in e)
                r.indexOf(t) < 0 && r.push(uncamel(t));
            return r.join(",")
        },
        animate: function(y, p, d, c, P) {
            return this.each(function() {
                function e() {
                    r.called = !0,
                        r.CSSAIsRunning = !1,
                        t.off(jQuery.CSS.transitionEnd + "." + r.id),
                        clearTimeout(r.timeout),
                        t.css(jQuery.CSS.sfx + "transition", ""),
                    "function" == typeof P && P.apply(r),
                    "function" == typeof r.CSSqueue && (r.CSSqueue(),
                        r.CSSqueue = null)
                }
                var r = this
                    , t = jQuery(this);
                r.id = r.id || "CSSA_" + (new Date).getTime();
                var a = a || {
                    type: "noEvent"
                };
                if (r.CSSAIsRunning && r.eventType == a.type && !jQuery.browser.msie && jQuery.browser.version <= 9)
                    r.CSSqueue = function() {
                        t.CSSAnimate(y, p, d, c, P)
                    }
                    ;
                else if (r.CSSqueue = null,
                        r.eventType = a.type,
                    0 !== t.length && y) {
                    if (y = jQuery.normalizeCss(y),
                            r.CSSAIsRunning = !0,
                        "function" == typeof p && (P = p,
                            p = jQuery.fx.speeds._default),
                        "function" == typeof d && (c = d,
                            d = 0),
                        "string" == typeof d && (P = d,
                            d = 0),
                        "function" == typeof c && (P = c,
                            c = "cubic-bezier(0.65,0.03,0.36,0.72)"),
                        "string" == typeof p)
                        for (var o in jQuery.fx.speeds) {
                            if (p == o) {
                                p = jQuery.fx.speeds[o];
                                break
                            }
                            p = jQuery.fx.speeds._default
                        }
                    if (p || (p = jQuery.fx.speeds._default),
                        "string" == typeof P && (c = P,
                            P = null),
                            !jQuery.support.CSStransition) {
                        for (var i in y) {
                            if ("transform" === i && delete y[i],
                                "filter" === i && delete y[i],
                                "transform-origin" === i && delete y[i],
                                "auto" === y[i] && delete y[i],
                                "x" === i) {
                                var l = y[i];
                                y["left"] = l,
                                    delete y[i]
                            }
                            if ("y" === i) {
                                l = y[i];
                                y["top"] = l,
                                    delete y[i]
                            }
                            ("-ms-transform" === i || "-ms-filter" === i) && delete y[i]
                        }
                        return void t.delay(d).animate(y, p, P)
                    }
                    var n = {
                        default: "ease",
                        in: "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    n[c] && (c = n[c]),
                        t.off(jQuery.CSS.transitionEnd + "." + r.id);
                    var s = jQuery.CSS.getProp(y)
                        , u = {};
                    jQuery.extend(u, y),
                        u[jQuery.CSS.sfx + "transition-property"] = s,
                        u[jQuery.CSS.sfx + "transition-duration"] = p + "ms",
                        u[jQuery.CSS.sfx + "transition-delay"] = d + "ms",
                        u[jQuery.CSS.sfx + "transition-timing-function"] = c,
                        setTimeout(function() {
                            t.one(jQuery.CSS.transitionEnd + "." + r.id, e),
                                t.css(u)
                        }, 1),
                        r.timeout = setTimeout(function() {
                            return r.called || !P ? (r.called = !1,
                                void (r.CSSAIsRunning = !1)) : (t.css(jQuery.CSS.sfx + "transition", ""),
                                P.apply(r),
                                r.CSSAIsRunning = !1,
                                void ("function" == typeof r.CSSqueue && (r.CSSqueue(),
                                    r.CSSqueue = null)))
                        }, p + d + 10)
                }
            })
        }
    },
    jQuery.fn.CSSAnimate = jQuery.CSS.animate,
    jQuery.normalizeCss = jQuery.CSS.normalizeCss,
    jQuery.fn.css3 = function(t) {
        return this.each(function() {
            var e = jQuery(this)
                , r = jQuery.normalizeCss(t);
            e.css(r)
        })
    }
;
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    var nameOffset, verOffset, ix;
    if (jQuery.browser = {},
            jQuery.browser.mozilla = !1,
            jQuery.browser.webkit = !1,
            jQuery.browser.opera = !1,
            jQuery.browser.safari = !1,
            jQuery.browser.chrome = !1,
            jQuery.browser.msie = !1,
            jQuery.browser.ua = nAgt,
            jQuery.browser.name = navigator.appName,
            jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
            jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10),
        -1 != (verOffset = nAgt.indexOf("Opera")))
        jQuery.browser.opera = !0,
            jQuery.browser.name = "Opera",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR")))
        jQuery.browser.opera = !0,
            jQuery.browser.name = "Opera",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
        jQuery.browser.msie = !0,
            jQuery.browser.name = "Microsoft Internet Explorer",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident")) {
        jQuery.browser.msie = !0,
            jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3
            , end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else
        -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
            jQuery.browser.chrome = !0,
            jQuery.browser.name = "Chrome",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
            jQuery.browser.safari = !0,
            jQuery.browser.name = "Safari",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
            jQuery.browser.name = "Safari",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
            jQuery.browser.name = "Firefox",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
        jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
    -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
    -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
    isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
        jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt),
    jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
    jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
    jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
    jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
    jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
    jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
    jQuery.isMobile = jQuery.browser.mobile,
    jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(),
    jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
    function(l) {
        /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
        var i = "ontouchstart"in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
        l.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: i ? "touchstart" : "mousedown",
                end: i ? "touchend" : "mouseup",
                move: i ? "touchmove" : "mousemove"
            },
            init: function(o) {
                return this.each(function() {
                    var r = this
                        , t = l(r);
                    t.addClass("simpleSlider"),
                        r.opt = {},
                        l.extend(r.opt, l.simpleSlider.defaults, o),
                        l.extend(r.opt, t.data());
                    var e = "h" == r.opt.orientation ? "horizontal" : "vertical"
                        , a = l("<div/>").addClass("level").addClass(e);
                    t.prepend(a),
                        r.level = a,
                        t.css({
                            cursor: "default"
                        }),
                    "auto" == r.opt.scale && (r.opt.scale = l(r).outerWidth()),
                        t.updateSliderVal(),
                    r.opt.readonly || (t.on(l.simpleSlider.events.start, function(e) {
                        i && (e = e.changedTouches[0]),
                            r.canSlide = !0,
                            t.updateSliderVal(e),
                            t.css({
                                cursor: "col-resize"
                            }),
                            e.preventDefault(),
                            e.stopPropagation()
                    }),
                        l(document).on(l.simpleSlider.events.move, function(e) {
                            i && (e = e.changedTouches[0]),
                            r.canSlide && (l(document).css({
                                cursor: "default"
                            }),
                                t.updateSliderVal(e),
                                e.preventDefault(),
                                e.stopPropagation())
                        }).on(l.simpleSlider.events.end, function() {
                            l(document).css({
                                cursor: "auto"
                            }),
                                r.canSlide = !1,
                                t.css({
                                    cursor: "auto"
                                })
                        }))
                })
            },
            updateSliderVal: function(e) {
                function r(e, r) {
                    return Math.floor(100 * e / r)
                }
                var t = this
                    , a = t.get(0);
                a.opt.initialval = "number" == typeof a.opt.initialval ? a.opt.initialval : a.opt.initialval(a);
                var o = l(a).outerWidth()
                    , i = l(a).outerHeight();
                a.x = "object" == typeof e ? e.clientX + document.body.scrollLeft - t.offset().left : "number" == typeof e ? e * o / a.opt.scale : a.opt.initialval * o / a.opt.scale,
                    a.y = "object" == typeof e ? e.clientY + document.body.scrollTop - t.offset().top : "number" == typeof e ? (a.opt.scale - a.opt.initialval - e) * i / a.opt.scale : a.opt.initialval * i / a.opt.scale,
                    a.y = t.outerHeight() - a.y,
                    a.scaleX = a.x * a.opt.scale / o,
                    a.scaleY = a.y * a.opt.scale / i,
                    a.outOfRangeX = a.scaleX > a.opt.scale ? a.scaleX - a.opt.scale : a.scaleX < 0 ? a.scaleX : 0,
                    a.outOfRangeY = a.scaleY > a.opt.scale ? a.scaleY - a.opt.scale : a.scaleY < 0 ? a.scaleY : 0,
                    a.outOfRange = "h" == a.opt.orientation ? a.outOfRangeX : a.outOfRangeY,
                    a.value = void 0 !== e ? "h" == a.opt.orientation ? a.x >= t.outerWidth() ? a.opt.scale : a.x <= 0 ? 0 : a.scaleX : a.y >= t.outerHeight() ? a.opt.scale : a.y <= 0 ? 0 : a.scaleY : "h" == a.opt.orientation ? a.scaleX : a.scaleY,
                    "h" == a.opt.orientation ? a.level.width(r(a.x, o) + "%") : a.level.height(r(a.y, i)),
                "function" == typeof a.opt.callback && a.opt.callback(a)
            }
        },
            l.fn.simpleSlider = l.simpleSlider.init,
            l.fn.updateSliderVal = l.simpleSlider.updateSliderVal
    }(jQuery),
    function(r) {
        r.mbCookie = {
            set: function(e, r, t, a) {
                r = JSON.stringify(r),
                t || (t = 7),
                    a = a ? "; domain=" + a : "";
                var o, i = new Date;
                i.setTime(i.getTime() + 864e5 * t),
                    o = "; expires=" + i.toGMTString(),
                    document.cookie = e + "=" + r + o + "; path=/" + a
            },
            get: function(e) {
                for (var r = e + "=", t = document.cookie.split(";"), a = 0; a < t.length; a++) {
                    for (var o = t[a]; " " == o.charAt(0); )
                        o = o.substring(1, o.length);
                    if (0 == o.indexOf(r))
                        return JSON.parse(o.substring(r.length, o.length))
                }
                return null
            },
            remove: function(e) {
                r.mbCookie.set(e, "", -1)
            }
        },
            r.mbStorage = {
                set: function(e, r) {
                    r = JSON.stringify(r),
                        localStorage.setItem(e, r)
                },
                get: function(e) {
                    return localStorage[e] ? JSON.parse(localStorage[e]) : null
                },
                remove: function(e) {
                    e ? localStorage.removeItem(e) : localStorage.clear()
                }
            }
    }(jQuery);
!function(a, d, p) {
    "use strict";
    a.fn.scrollUp = function(l) {
        a.data(p.body, "scrollUp") || (a.data(p.body, "scrollUp", !0),
            a.fn.scrollUp.init(l))
    }
        ,
        a.fn.scrollUp.init = function(l) {
            var o, e, r, s, t, c, i = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, l), n = !1;
            switch (c = i.scrollTrigger ? a(i.scrollTrigger) : a("<a/>", {
                id: i.scrollName,
                href: "#top"
            }),
            i.scrollTitle && c.attr("title", i.scrollTitle),
                c.appendTo("body"),
            i.scrollImg || i.scrollTrigger || c.html(i.scrollText),
                c.css({
                    display: "none",
                    position: "fixed",
                    zIndex: i.zIndex
                }),
            i.activeOverlay && a("<div/>", {
                id: i.scrollName + "-active"
            }).css({
                position: "absolute",
                top: i.scrollDistance + "px",
                width: "100%",
                borderTop: "1px dotted" + i.activeOverlay,
                zIndex: i.zIndex
            }).appendTo("body"),
                i.animation) {
                case "fade":
                    o = "fadeIn",
                        e = "fadeOut",
                        r = i.animationSpeed;
                    break;
                case "slide":
                    o = "slideDown",
                        e = "slideUp",
                        r = i.animationSpeed;
                    break;
                default:
                    o = "show",
                        e = "hide",
                        r = 0
            }
            s = "top" === i.scrollFrom ? i.scrollDistance : a(p).height() - a(d).height() - i.scrollDistance,
                a(d).scroll(function() {
                    a(d).scrollTop() > s ? n || (c[o](r),
                        n = !0) : n && (c[e](r),
                        n = !1)
                }),
                i.scrollTarget ? "number" == typeof i.scrollTarget ? t = i.scrollTarget : "string" == typeof i.scrollTarget && (t = Math.floor(a(i.scrollTarget).offset().top)) : t = 0,
                c.click(function(l) {
                    l.preventDefault(),
                        a("html, body").animate({
                            scrollTop: t
                        }, i.scrollSpeed, i.easingType)
                })
        }
        ,
        a.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        },
        a.fn.scrollUp.destroy = function(l) {
            a.removeData(p.body, "scrollUp"),
                a("#" + a.fn.scrollUp.settings.scrollName).remove(),
                a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(),
                7 <= a.fn.jquery.split(".")[1] ? a(d).off("scroll", l) : a(d).unbind("scroll", l)
        }
        ,
        a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);
!function(h, i, n, o) {
    function l(t, e) {
        this.settings = null,
            this.options = h.extend({}, l.Defaults, e),
            this.$element = h(t),
            this._handlers = {},
            this._plugins = {},
            this._supress = {},
            this._current = null,
            this._speed = null,
            this._coordinates = [],
            this._breakpoint = null,
            this._width = null,
            this._items = [],
            this._clones = [],
            this._mergers = [],
            this._widths = [],
            this._invalidated = {},
            this._pipe = [],
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            },
            this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            },
            h.each(["onResize", "onThrottledResize"], h.proxy(function(t, e) {
                this._handlers[e] = h.proxy(this[e], this)
            }, this)),
            h.each(l.Plugins, h.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)),
            h.each(l.Workers, h.proxy(function(t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: h.proxy(e.run, this)
                })
            }, this)),
            this.setup(),
            this.initialize()
    }
    l.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
        l.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        },
        l.Type = {
            Event: "event",
            State: "state"
        },
        l.Plugins = {},
        l.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || ""
                    , i = !this.settings.autoWidth
                    , s = this.settings.rtl
                    , n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
                !i && this.$stage.children().css(n),
                    t.css = n
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
                    , i = null
                    , s = this._items.length
                    , n = !this.settings.autoWidth
                    , o = [];
                for (t.items = {
                    merge: !1,
                    width: e
                }; s--; )
                    i = this._mergers[s],
                        i = this.settings.mergeFit && Math.min(i, this.settings.items) || i,
                        t.items.merge = 1 < i || t.items.merge,
                        o[s] = n ? e * i : this._items[s].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = []
                    , e = this._items
                    , i = this.settings
                    , s = Math.max(2 * i.items, 4)
                    , n = 2 * Math.ceil(e.length / 2)
                    , o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0
                    , r = ""
                    , a = "";
                for (o /= 2; o--; )
                    t.push(this.normalize(t.length / 2, !0)),
                        r += e[t[t.length - 1]][0].outerHTML,
                        t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
                        a = e[t[t.length - 1]][0].outerHTML + a;
                this._clones = t,
                    h(r).addClass("cloned").appendTo(this.$stage),
                    h(a).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e; )
                    s = o[i - 1] || 0,
                        n = this._widths[this.relative(i)] + this.settings.margin,
                        o.push(s + n * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding
                    , e = this._coordinates
                    , i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length
                    , i = !this.settings.autoWidth
                    , s = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--; )
                        t.css.width = this._widths[this.relative(e)],
                            s.eq(e).css(t.css);
                else
                    i && (t.css.width = t.items.width,
                        s.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0,
                    t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
                    this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, s, n = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + o, a = r + this.width() * n, h = [];
                for (i = 0,
                         s = this._coordinates.length; i < s; i++)
                    t = this._coordinates[i - 1] || 0,
                        e = Math.abs(this._coordinates[i]) + o * n,
                    (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
                this.$stage.children(".active").removeClass("active"),
                    this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"),
                this.settings.center && (this.$stage.children(".center").removeClass("center"),
                    this.$stage.children().eq(this.current()).addClass("center"))
            }
        }],
        l.prototype.initialize = function() {
            var t, e, i;
            (this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
            this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"),
                e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o,
                i = this.$element.children(e).width(),
            t.length && i <= 0 && this.preloadAutoWidthImages(t));
            this.$element.addClass(this.options.loadingClass),
                this.$stage = h("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized")
        }
        ,
        l.prototype.setup = function() {
            var e = this.viewport()
                , t = this.options.responsive
                , i = -1
                , s = null;
            t ? (h.each(t, function(t) {
                t <= e && i < t && (i = Number(t))
            }),
            "function" == typeof (s = h.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()),
                delete s.responsive,
            s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : s = h.extend({}, this.options),
                this.trigger("change", {
                    property: {
                        name: "settings",
                        value: s
                    }
                }),
                this._breakpoint = i,
                this.settings = s,
                this.invalidate("settings"),
                this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                })
        }
        ,
        l.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1,
                this.settings.merge = !1)
        }
        ,
        l.prototype.prepare = function(t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
                this.trigger("prepared", {
                    content: e.data
                }),
                e.data
        }
        ,
        l.prototype.update = function() {
            for (var t = 0, e = this._pipe.length, i = h.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; t < e; )
                (this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s),
                    t++;
            this._invalidated = {},
            !this.is("valid") && this.enter("valid")
        }
        ,
        l.prototype.width = function(t) {
            switch (t = t || l.Width.Default) {
                case l.Width.Inner:
                case l.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }
        ,
        l.prototype.refresh = function() {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed")
        }
        ,
        l.prototype.onThrottledResize = function() {
            i.clearTimeout(this.resizeTimer),
                this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }
        ,
        l.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
                    !1) : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))
        }
        ,
        l.prototype.registerEventHandlers = function() {
            h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)),
            !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
                this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)),
                this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                    return !1
                })),
            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)),
                this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this)))
        }
        ,
        l.prototype.onDragStart = function(t) {
            var e = null;
            3 !== t.which && (h.support.transform ? e = {
                x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
                y: e[16 === e.length ? 13 : 5]
            } : (e = this.$stage.position(),
                e = {
                    x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
                    y: e.top
                }),
            this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(),
                this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
                this.speed(0),
                this._drag.time = (new Date).getTime(),
                this._drag.target = h(t.target),
                this._drag.stage.start = e,
                this._drag.stage.current = e,
                this._drag.pointer = this.pointer(t),
                h(n).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)),
                h(n).one("mousemove.owl.core touchmove.owl.core", h.proxy(function(t) {
                    var e = this.difference(this._drag.pointer, this.pointer(t));
                    h(n).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)),
                    Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(),
                        this.enter("dragging"),
                        this.trigger("drag"))
                }, this)))
        }
        ,
        l.prototype.onDragMove = function(t) {
            var e = null
                , i = null
                , s = null
                , n = this.difference(this._drag.pointer, this.pointer(t))
                , o = this.difference(this._drag.stage.start, n);
            this.is("dragging") && (t.preventDefault(),
                this.settings.loop ? (e = this.coordinates(this.minimum()),
                    i = this.coordinates(this.maximum() + 1) - e,
                    o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
                    i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
                    s = this.settings.pullDrag ? -1 * n.x / 5 : 0,
                    o.x = Math.max(Math.min(o.x, e + s), i + s)),
                this._drag.stage.current = o,
                this.animate(o.x))
        }
        ,
        l.prototype.onDragEnd = function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t))
                , i = this._drag.stage.current
                , s = 0 < e.x ^ this.settings.rtl ? "left" : "right";
            h(n).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
            (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)),
                this.invalidate("position"),
                this.update(),
                this._drag.direction = s,
            (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
                return !1
            })),
            this.is("dragging") && (this.leave("dragging"),
                this.trigger("dragged"))
        }
        ,
        l.prototype.closest = function(i, s) {
            var n = -1
                , o = this.width()
                , r = this.coordinates();
            return this.settings.freeDrag || h.each(r, h.proxy(function(t, e) {
                return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] || e - o) && (n = "left" === s ? t + 1 : t),
                -1 === n
            }, this)),
            this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
                n
        }
        ,
        l.prototype.animate = function(t) {
            var e = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(),
            e && (this.enter("animating"),
                this.trigger("translate")),
                h.support.transform3d && h.support.transition ? this.$stage.css({
                    transform: "translate3d(" + t + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s"
                }) : e ? this.$stage.animate({
                    left: t + "px"
                }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: t + "px"
                })
        }
        ,
        l.prototype.is = function(t) {
            return this._states.current[t] && 0 < this._states.current[t]
        }
        ,
        l.prototype.current = function(t) {
            if (t === o)
                return this._current;
            if (0 === this._items.length)
                return o;
            if (t = this.normalize(t),
                this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== o && (t = this.normalize(e.data)),
                    this._current = t,
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
            }
            return this._current
        }
        ,
        l.prototype.invalidate = function(t) {
            return "string" === h.type(t) && (this._invalidated[t] = !0,
            this.is("valid") && this.leave("valid")),
                h.map(this._invalidated, function(t, e) {
                    return e
                })
        }
        ,
        l.prototype.reset = function(t) {
            (t = this.normalize(t)) !== o && (this._speed = 0,
                this._current = t,
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(t)),
                this.release(["translate", "translated"]))
        }
        ,
        l.prototype.normalize = function(t, e) {
            var i = this._items.length
                , s = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = o : (t < 0 || i + s <= t) && (t = ((t - s / 2) % i + i) % i + s / 2),
                t
        }
        ,
        l.prototype.relative = function(t) {
            return t -= this._clones.length / 2,
                this.normalize(t, !0)
        }
        ,
        l.prototype.maximum = function(t) {
            var e, i, s, n = this.settings, o = this._coordinates.length;
            if (n.loop)
                o = this._clones.length / 2 + this._items.length - 1;
            else if (n.autoWidth || n.merge) {
                for (e = this._items.length,
                         i = this._items[--e].width(),
                         s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin)); )
                    ;
                o = e + 1
            } else
                o = n.center ? this._items.length - 1 : this._items.length - n.items;
            return t && (o -= this._clones.length / 2),
                Math.max(o, 0)
        }
        ,
        l.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }
        ,
        l.prototype.items = function(t) {
            return t === o ? this._items.slice() : (t = this.normalize(t, !0),
                this._items[t])
        }
        ,
        l.prototype.mergers = function(t) {
            return t === o ? this._mergers.slice() : (t = this.normalize(t, !0),
                this._mergers[t])
        }
        ,
        l.prototype.clones = function(i) {
            var e = this._clones.length / 2
                , s = e + this._items.length
                , n = function(t) {
                return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2
            };
            return i === o ? h.map(this._clones, function(t, e) {
                return n(e)
            }) : h.map(this._clones, function(t, e) {
                return t === i ? n(e) : null
            })
        }
        ,
        l.prototype.speed = function(t) {
            return t !== o && (this._speed = t),
                this._speed
        }
        ,
        l.prototype.coordinates = function(t) {
            var e, i = 1, s = t - 1;
            return t === o ? h.map(this._coordinates, h.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1,
                s = t + 1),
                e = this._coordinates[t],
                e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0,
                e = Math.ceil(e))
        }
        ,
        l.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }
        ,
        l.prototype.to = function(t, e) {
            var i = this.current()
                , s = null
                , n = t - this.relative(i)
                , o = (0 < n) - (n < 0)
                , r = this._items.length
                , a = this.minimum()
                , h = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
            (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && 0 < s - n && (i = s - n,
                t = s,
                this.reset(i))) : this.settings.rewind ? t = (t % (h += 1) + h) % h : t = Math.max(a, Math.min(h, t)),
                this.speed(this.duration(i, t, e)),
                this.current(t),
            this.$element.is(":visible") && this.update()
        }
        ,
        l.prototype.next = function(t) {
            t = t || !1,
                this.to(this.relative(this.current()) + 1, t)
        }
        ,
        l.prototype.prev = function(t) {
            t = t || !1,
                this.to(this.relative(this.current()) - 1, t)
        }
        ,
        l.prototype.onTransitionEnd = function(t) {
            if (t !== o && (t.stopPropagation(),
                (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
                return !1;
            this.leave("animating"),
                this.trigger("translated")
        }
        ,
        l.prototype.viewport = function() {
            var t;
            return this.options.responsiveBaseElement !== i ? t = h(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? t = n.documentElement.clientWidth : console.warn("Can not detect viewport width."),
                t
        }
        ,
        l.prototype.replace = function(t) {
            this.$stage.empty(),
                this._items = [],
            t && (t = t instanceof jQuery ? t : h(t)),
            this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)),
                t.filter(function() {
                    return 1 === this.nodeType
                }).each(h.proxy(function(t, e) {
                    e = this.prepare(e),
                        this.$stage.append(e),
                        this._items.push(e),
                        this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                }, this)),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items")
        }
        ,
        l.prototype.add = function(t, e) {
            var i = this.relative(this._current);
            e = e === o ? this._items.length : this.normalize(e, !0),
                t = t instanceof jQuery ? t : h(t),
                this.trigger("add", {
                    content: t,
                    position: e
                }),
                t = this.prepare(t),
                0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t),
                0 !== this._items.length && this._items[e - 1].after(t),
                    this._items.push(t),
                    this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t),
                    this._items.splice(e, 0, t),
                    this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
            this._items[i] && this.reset(this._items[i].index()),
                this.invalidate("items"),
                this.trigger("added", {
                    content: t,
                    position: e
                })
        }
        ,
        l.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== o && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }),
                this._items[t].remove(),
                this._items.splice(t, 1),
                this._mergers.splice(t, 1),
                this.invalidate("items"),
                this.trigger("removed", {
                    content: null,
                    position: t
                }))
        }
        ,
        l.prototype.preloadAutoWidthImages = function(t) {
            t.each(h.proxy(function(t, e) {
                this.enter("pre-loading"),
                    e = h(e),
                    h(new Image).one("load", h.proxy(function(t) {
                        e.attr("src", t.target.src),
                            e.css("opacity", 1),
                            this.leave("pre-loading"),
                        !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
            }, this))
        }
        ,
        l.prototype.destroy = function() {
            for (var t in this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                h(n).off(".owl.core"),
            !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer),
                this.off(i, "resize", this._handlers.onThrottledResize)),
                this._plugins)
                this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
        }
        ,
        l.prototype.op = function(t, e, i) {
            var s = this.settings.rtl;
            switch (e) {
                case "<":
                    return s ? i < t : t < i;
                case ">":
                    return s ? t < i : i < t;
                case ">=":
                    return s ? t <= i : i <= t;
                case "<=":
                    return s ? i <= t : t <= i
            }
        }
        ,
        l.prototype.on = function(t, e, i, s) {
            t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
        }
        ,
        l.prototype.off = function(t, e, i, s) {
            t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
        }
        ,
        l.prototype.trigger = function(t, e, i, s, n) {
            var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            }
                , r = h.camelCase(h.grep(["on", t, i], function(t) {
                return t
            }).join("-").toLowerCase())
                , a = h.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), h.extend({
                relatedTarget: this
            }, o, e));
            return this._supress[t] || (h.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(a)
            }),
                this.register({
                    type: l.Type.Event,
                    name: t
                }),
                this.$element.trigger(a),
            this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)),
                a
        }
        ,
        l.prototype.enter = function(t) {
            h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
                this._states.current[e] === o && (this._states.current[e] = 0),
                    this._states.current[e]++
            }, this))
        }
        ,
        l.prototype.leave = function(t) {
            h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }
        ,
        l.prototype.register = function(i) {
            if (i.type === l.Type.Event) {
                if (h.event.special[i.name] || (h.event.special[i.name] = {}),
                        !h.event.special[i.name].owl) {
                    var e = h.event.special[i.name]._default;
                    h.event.special[i.name]._default = function(t) {
                        return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                    }
                        ,
                        h.event.special[i.name].owl = !0
                }
            } else
                i.type === l.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags,
                    this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function(t, e) {
                        return h.inArray(t, this._states.tags[i.name]) === e
                    }, this)))
        }
        ,
        l.prototype.suppress = function(t) {
            h.each(t, h.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }
        ,
        l.prototype.release = function(t) {
            h.each(t, h.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }
        ,
        l.prototype.pointer = function(t) {
            var e = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX,
                e.y = t.pageY) : (e.x = t.clientX,
                e.y = t.clientY),
                e
        }
        ,
        l.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }
        ,
        l.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        ,
        h.fn.owlCarousel = function(e) {
            var s = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var t = h(this)
                    , i = t.data("owl.carousel");
                i || (i = new l(this,"object" == typeof e && e),
                    t.data("owl.carousel", i),
                    h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                        i.register({
                            type: l.Type.Event,
                            name: e
                        }),
                            i.$element.on(e + ".owl.carousel.core", h.proxy(function(t) {
                                t.namespace && t.relatedTarget !== this && (this.suppress([e]),
                                    i[e].apply(this, [].slice.call(arguments, 1)),
                                    this.release([e]))
                            }, i))
                    })),
                "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
            })
        }
        ,
        h.fn.owlCarousel.Constructor = l
}(window.Zepto || window.jQuery, window, document),
    function(e, i, t, s) {
        var n = function(t) {
            this._core = t,
                this._interval = null,
                this._visible = null,
                this._handlers = {
                    "initialized.owl.carousel": e.proxy(function(t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch()
                    }, this)
                },
                this._core.options = e.extend({}, n.Defaults, this._core.options),
                this._core.$element.on(this._handlers)
        };
        n.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        },
            n.prototype.watch = function() {
                this._interval || (this._visible = this._core.$element.is(":visible"),
                    this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
            }
            ,
            n.prototype.refresh = function() {
                this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
                    this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible && this._core.invalidate("width") && this._core.refresh())
            }
            ,
            n.prototype.destroy = function() {
                var t, e;
                for (t in i.clearInterval(this._interval),
                    this._handlers)
                    this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
    }(window.Zepto || window.jQuery, window, document),
    function(a, o, t, e) {
        var i = function(t) {
            this._core = t,
                this._loaded = [],
                this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                        if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                            for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, s = e.center && -1 * i || 0, n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s, o = this._core.clones().length, r = a.proxy(function(t, e) {
                                this.load(e)
                            }, this); s++ < i; )
                                this.load(o / 2 + this._core.relative(n)),
                                o && a.each(this._core.clones(this._core.relative(n)), r),
                                    n++
                    }, this)
                },
                this._core.options = a.extend({}, i.Defaults, this._core.options),
                this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            lazyLoad: !1
        },
            i.prototype.load = function(t) {
                var e = this._core.$stage.children().eq(t)
                    , i = e && e.find(".owl-lazy");
                !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
                    var i, s = a(e), n = 1 < o.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src");
                    this._core.trigger("load", {
                        element: s,
                        url: n
                    }, "lazy"),
                        s.is("img") ? s.one("load.owl.lazy", a.proxy(function() {
                            s.css("opacity", 1),
                                this._core.trigger("loaded", {
                                    element: s,
                                    url: n
                                }, "lazy")
                        }, this)).attr("src", n) : ((i = new Image).onload = a.proxy(function() {
                            s.css({
                                "background-image": 'url("' + n + '")',
                                opacity: "1"
                            }),
                                this._core.trigger("loaded", {
                                    element: s,
                                    url: n
                                }, "lazy")
                        }, this),
                            i.src = n)
                }, this)),
                    this._loaded.push(e.get(0)))
            }
            ,
            i.prototype.destroy = function() {
                var t, e;
                for (t in this.handlers)
                    this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function(o, t, e, i) {
        var s = function(t) {
            this._core = t,
                this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function(t) {
                        t.namespace && this._core.settings.autoHeight && this.update()
                    }, this),
                    "changed.owl.carousel": o.proxy(function(t) {
                        t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                    }, this),
                    "loaded.owl.lazy": o.proxy(function(t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                    }, this)
                },
                this._core.options = o.extend({}, s.Defaults, this._core.options),
                this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        },
            s.prototype.update = function() {
                var t, e = this._core._current, i = e + this._core.settings.items, s = this._core.$stage.children().toArray().slice(e, i), n = [];
                o.each(s, function(t, e) {
                    n.push(o(e).height())
                }),
                    t = Math.max.apply(null, n),
                    this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
            }
            ,
            s.prototype.destroy = function() {
                var t, e;
                for (t in this._handlers)
                    this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            o.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
    }(window.Zepto || window.jQuery, window, document),
    function(c, t, e, i) {
        var s = function(t) {
            this._core = t,
                this._videos = {},
                this._playing = null,
                this._handlers = {
                    "initialized.owl.carousel": c.proxy(function(t) {
                        t.namespace && this._core.register({
                            type: "state",
                            name: "playing",
                            tags: ["interacting"]
                        })
                    }, this),
                    "resize.owl.carousel": c.proxy(function(t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                    }, this),
                    "refreshed.owl.carousel": c.proxy(function(t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                    }, this),
                    "changed.owl.carousel": c.proxy(function(t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop()
                    }, this),
                    "prepared.owl.carousel": c.proxy(function(t) {
                        if (t.namespace) {
                            var e = c(t.content).find(".owl-video");
                            e.length && (e.css("display", "none"),
                                this.fetch(e, c(t.content)))
                        }
                    }, this)
                },
                this._core.options = c.extend({}, s.Defaults, this._core.options),
                this._core.$element.on(this._handlers),
                this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) {
                    this.play(t)
                }, this))
        };
        s.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        },
            s.prototype.fetch = function(t, e) {
                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
                    , s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
                    , n = t.attr("data-width") || this._core.settings.videoWidth
                    , o = t.attr("data-height") || this._core.settings.videoHeight
                    , r = t.attr("href");
                if (!r)
                    throw new Error("Missing video URL.");
                if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))
                    i = "youtube";
                else if (-1 < s[3].indexOf("vimeo"))
                    i = "vimeo";
                else {
                    if (!(-1 < s[3].indexOf("vzaar")))
                        throw new Error("Video URL not supported.");
                    i = "vzaar"
                }
                s = s[6],
                    this._videos[r] = {
                        type: i,
                        id: s,
                        width: n,
                        height: o
                    },
                    e.attr("data-video", r),
                    this.thumbnail(t, this._videos[r])
            }
            ,
            s.prototype.thumbnail = function(e, t) {
                var i, s, n = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "", o = e.find("img"), r = "src", a = "", h = this._core.settings, l = function(t) {
                    '<div class="owl-video-play-icon"></div>',
                        i = h.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + r + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                        e.after(i),
                        e.after('<div class="owl-video-play-icon"></div>')
                };
                if (e.wrap('<div class="owl-video-wrapper"' + n + "></div>"),
                    this._core.settings.lazyLoad && (r = "data-src",
                        a = "owl-lazy"),
                        o.length)
                    return l(o.attr(r)),
                        o.remove(),
                        !1;
                "youtube" === t.type ? (s = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg",
                    l(s)) : "vimeo" === t.type ? c.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(t) {
                        s = t[0].thumbnail_large,
                            l(s)
                    }
                }) : "vzaar" === t.type && c.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + t.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(t) {
                        s = t.framegrab_url,
                            l(s)
                    }
                })
            }
            ,
            s.prototype.stop = function() {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    this._playing = null,
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video")
            }
            ,
            s.prototype.play = function(t) {
                var e, i = c(t.target).closest("." + this._core.settings.itemClass), s = this._videos[i.attr("data-video")], n = s.width || "100%", o = s.height || this._core.$stage.height();
                this._playing || (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    i = this._core.items(this._core.relative(i.index())),
                    this._core.reset(i.index()),
                    "youtube" === s.type ? e = '<iframe width="' + n + '" height="' + o + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&rel=0&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? e = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + n + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (e = '<iframe frameborder="0"height="' + o + '"width="' + n + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'),
                    c('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")),
                    this._playing = i.addClass("owl-video-playing"))
            }
            ,
            s.prototype.isInFullScreen = function() {
                var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
                return t && c(t).parent().hasClass("owl-video-frame")
            }
            ,
            s.prototype.destroy = function() {
                var t, e;
                for (t in this._core.$element.off("click.owl.video"),
                    this._handlers)
                    this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            c.fn.owlCarousel.Constructor.Plugins.Video = s
    }(window.Zepto || window.jQuery, window, document),
    function(r, t, e, i) {
        var s = function(t) {
            this.core = t,
                this.core.options = r.extend({}, s.Defaults, this.core.options),
                this.swapping = !0,
                this.previous = void 0,
                this.next = void 0,
                this.handlers = {
                    "change.owl.carousel": r.proxy(function(t) {
                        t.namespace && "position" == t.property.name && (this.previous = this.core.current(),
                            this.next = t.property.value)
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function(t) {
                        t.namespace && (this.swapping = "translated" == t.type)
                    }, this),
                    "translate.owl.carousel": r.proxy(function(t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                    }, this)
                },
                this.core.$element.on(this.handlers)
        };
        s.Defaults = {
            animateOut: !1,
            animateIn: !1
        },
            s.prototype.swap = function() {
                if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
                    this.core.speed(0);
                    var t, e = r.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), s = this.core.$stage.children().eq(this.next), n = this.core.settings.animateIn, o = this.core.settings.animateOut;
                    this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                        i.one(r.support.animation.end, e).css({
                            left: t + "px"
                        }).addClass("animated owl-animated-out").addClass(o)),
                    n && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n))
                }
            }
            ,
            s.prototype.clear = function(t) {
                r(t.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
                    this.core.onTransitionEnd()
            }
            ,
            s.prototype.destroy = function() {
                var t, e;
                for (t in this.handlers)
                    this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            r.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document),
    function(i, s, n, t) {
        var e = function(t) {
            this._core = t,
                this._timeout = null,
                this._paused = !1,
                this._handlers = {
                    "changed.owl.carousel": i.proxy(function(t) {
                        t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                    }, this),
                    "initialized.owl.carousel": i.proxy(function(t) {
                        t.namespace && this._core.settings.autoplay && this.play()
                    }, this),
                    "play.owl.autoplay": i.proxy(function(t, e, i) {
                        t.namespace && this.play(e, i)
                    }, this),
                    "stop.owl.autoplay": i.proxy(function(t) {
                        t.namespace && this.stop()
                    }, this),
                    "mouseover.owl.autoplay": i.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "mouseleave.owl.autoplay": i.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                    }, this),
                    "touchstart.owl.core": i.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "touchend.owl.core": i.proxy(function() {
                        this._core.settings.autoplayHoverPause && this.play()
                    }, this)
                },
                this._core.$element.on(this._handlers),
                this._core.options = i.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        },
            e.prototype.play = function(t, e) {
                this._paused = !1,
                this._core.is("rotating") || (this._core.enter("rotating"),
                    this._setAutoPlayInterval())
            }
            ,
            e.prototype._getNextTimeout = function(t, e) {
                return this._timeout && s.clearTimeout(this._timeout),
                    s.setTimeout(i.proxy(function() {
                        this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
                    }, this), t || this._core.settings.autoplayTimeout)
            }
            ,
            e.prototype._setAutoPlayInterval = function() {
                this._timeout = this._getNextTimeout()
            }
            ,
            e.prototype.stop = function() {
                this._core.is("rotating") && (s.clearTimeout(this._timeout),
                    this._core.leave("rotating"))
            }
            ,
            e.prototype.pause = function() {
                this._core.is("rotating") && (this._paused = !0)
            }
            ,
            e.prototype.destroy = function() {
                var t, e;
                for (t in this.stop(),
                    this._handlers)
                    this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            i.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(o, t, e, i) {
        "use strict";
        var s = function(t) {
            this._core = t,
                this._initialized = !1,
                this._pages = [],
                this._controls = {},
                this._templates = [],
                this.$element = this._core.$element,
                this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to
                },
                this._handlers = {
                    "prepared.owl.carousel": o.proxy(function(t) {
                        t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                    }, this),
                    "added.owl.carousel": o.proxy(function(t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                    }, this),
                    "remove.owl.carousel": o.proxy(function(t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                    }, this),
                    "changed.owl.carousel": o.proxy(function(t) {
                        t.namespace && "position" == t.property.name && this.draw()
                    }, this),
                    "initialized.owl.carousel": o.proxy(function(t) {
                        t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                            this.initialize(),
                            this.update(),
                            this.draw(),
                            this._initialized = !0,
                            this._core.trigger("initialized", null, "navigation"))
                    }, this),
                    "refreshed.owl.carousel": o.proxy(function(t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                            this.update(),
                            this.draw(),
                            this._core.trigger("refreshed", null, "navigation"))
                    }, this)
                },
                this._core.options = o.extend({}, s.Defaults, this._core.options),
                this.$element.on(this._handlers)
        };
        s.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        },
            s.prototype.initialize = function() {
                var t, i = this._core.settings;
                for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),
                    this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(t) {
                        this.prev(i.navSpeed)
                    }, this)),
                    this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(t) {
                        this.next(i.navSpeed)
                    }, this)),
                i.dotsData || (this._templates = [o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),
                    this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),
                    this._controls.$absolute.on("click", "div", o.proxy(function(t) {
                        var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
                        t.preventDefault(),
                            this.to(e, i.dotsSpeed)
                    }, this)),
                    this._overrides)
                    this._core[t] = o.proxy(this[t], this)
            }
            ,
            s.prototype.destroy = function() {
                var t, e, i, s;
                for (t in this._handlers)
                    this.$element.off(t, this._handlers[t]);
                for (e in this._controls)
                    this._controls[e].remove();
                for (s in this.overides)
                    this._core[s] = this._overrides[s];
                for (i in Object.getOwnPropertyNames(this))
                    "function" != typeof this[i] && (this[i] = null)
            }
            ,
            s.prototype.update = function() {
                var t, e, i = this._core.clones().length / 2, s = i + this._core.items().length, n = this._core.maximum(!0), o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
                    o.dots || "page" == o.slideBy)
                    for (this._pages = [],
                             t = i,
                             e = 0; t < s; t++) {
                        if (r <= e || 0 === e) {
                            if (this._pages.push({
                                    start: Math.min(n, t - i),
                                    end: t - i + r - 1
                                }),
                                Math.min(n, t - i) === n)
                                break;
                            e = 0,
                                0
                        }
                        e += this._core.mergers(this._core.relative(t))
                    }
            }
            ,
            s.prototype.draw = function() {
                var t, e = this._core.settings, i = this._core.items().length <= e.items, s = this._core.relative(this._core.current()), n = e.loop || e.rewind;
                this._controls.$relative.toggleClass("disabled", !e.nav || i),
                e.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)),
                    this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !e.dots || i),
                e.dots && (t = this._pages.length - this._controls.$absolute.children().length,
                    e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(),
                    this._controls.$absolute.find(".active").removeClass("active"),
                    this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
            }
            ,
            s.prototype.onTrigger = function(t) {
                var e = this._core.settings;
                t.page = {
                    index: o.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
                }
            }
            ,
            s.prototype.current = function() {
                var i = this._core.relative(this._core.current());
                return o.grep(this._pages, o.proxy(function(t, e) {
                    return t.start <= i && t.end >= i
                }, this)).pop()
            }
            ,
            s.prototype.getPosition = function(t) {
                var e, i, s = this._core.settings;
                return "page" == s.slideBy ? (e = o.inArray(this.current(), this._pages),
                    i = this._pages.length,
                    t ? ++e : --e,
                    e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()),
                    i = this._core.items().length,
                    t ? e += s.slideBy : e -= s.slideBy),
                    e
            }
            ,
            s.prototype.next = function(t) {
                o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
            }
            ,
            s.prototype.prev = function(t) {
                o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
            }
            ,
            s.prototype.to = function(t, e, i) {
                var s;
                !i && this._pages.length ? (s = this._pages.length,
                    o.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
            }
            ,
            o.fn.owlCarousel.Constructor.Plugins.Navigation = s
    }(window.Zepto || window.jQuery, window, document),
    function(s, n, t, e) {
        "use strict";
        var i = function(t) {
            this._core = t,
                this._hashes = {},
                this.$element = this._core.$element,
                this._handlers = {
                    "initialized.owl.carousel": s.proxy(function(t) {
                        t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation")
                    }, this),
                    "prepared.owl.carousel": s.proxy(function(t) {
                        if (t.namespace) {
                            var e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!e)
                                return;
                            this._hashes[e] = t.content
                        }
                    }, this),
                    "changed.owl.carousel": s.proxy(function(t) {
                        if (t.namespace && "position" === t.property.name) {
                            var i = this._core.items(this._core.relative(this._core.current()))
                                , e = s.map(this._hashes, function(t, e) {
                                return t === i ? e : null
                            }).join();
                            if (!e || n.location.hash.slice(1) === e)
                                return;
                            n.location.hash = e
                        }
                    }, this)
                },
                this._core.options = s.extend({}, i.Defaults, this._core.options),
                this.$element.on(this._handlers),
                s(n).on("hashchange.owl.navigation", s.proxy(function(t) {
                    var e = n.location.hash.substring(1)
                        , i = this._core.$stage.children()
                        , s = this._hashes[e] && i.index(this._hashes[e]);
                    void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
                }, this))
        };
        i.Defaults = {
            URLhashListener: !1
        },
            i.prototype.destroy = function() {
                var t, e;
                for (t in s(n).off("hashchange.owl.navigation"),
                    this._handlers)
                    this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this))
                    "function" != typeof this[e] && (this[e] = null)
            }
            ,
            s.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, e, o) {
        function i(t, i) {
            var s = !1
                , e = t.charAt(0).toUpperCase() + t.slice(1);
            return n.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
                if (r[e] !== o)
                    return s = !i || e,
                        !1
            }),
                s
        }
        function s(t) {
            return i(t, !0)
        }
        var r = n("<support>").get(0).style
            , a = "Webkit Moz O ms".split(" ")
            , h = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        }
            , l = function() {
            return !!i("transform")
        }
            , c = function() {
            return !!i("perspective")
        }
            , p = function() {
            return !!i("animation")
        };
        (function() {
                return !!i("transition")
            }
        )() && (n.support.transition = new String(s("transition")),
            n.support.transition.end = h.transition.end[n.support.transition]),
        p() && (n.support.animation = new String(s("animation")),
            n.support.animation.end = h.animation.end[n.support.animation]),
        l() && (n.support.transform = new String(s("transform")),
            n.support.transform3d = c())
    }(window.Zepto || window.jQuery, window, document);
function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, i) {
        return t + t + a + a + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}
function clamp(e, t, a) {
    return Math.min(Math.max(e, t), a)
}
function isInArray(e, t) {
    return -1 < t.indexOf(e)
}
var pJS = function(e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: a,
            w: a.offsetWidth,
            h: a.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var m = this.pJS;
    t && Object.deepExtend(m, t),
        m.tmp.obj = {
            size_value: m.particles.size.value,
            size_anim_speed: m.particles.size.anim.speed,
            move_speed: m.particles.move.speed,
            line_linked_distance: m.particles.line_linked.distance,
            line_linked_width: m.particles.line_linked.width,
            mode_grab_distance: m.interactivity.modes.grab.distance,
            mode_bubble_distance: m.interactivity.modes.bubble.distance,
            mode_bubble_size: m.interactivity.modes.bubble.size,
            mode_repulse_distance: m.interactivity.modes.repulse.distance
        },
        m.fn.retinaInit = function() {
            m.retina_detect && 1 < window.devicePixelRatio ? (m.canvas.pxratio = window.devicePixelRatio,
                m.tmp.retina = !0) : (m.canvas.pxratio = 1,
                m.tmp.retina = !1),
                m.canvas.w = m.canvas.el.offsetWidth * m.canvas.pxratio,
                m.canvas.h = m.canvas.el.offsetHeight * m.canvas.pxratio,
                m.particles.size.value = m.tmp.obj.size_value * m.canvas.pxratio,
                m.particles.size.anim.speed = m.tmp.obj.size_anim_speed * m.canvas.pxratio,
                m.particles.move.speed = m.tmp.obj.move_speed * m.canvas.pxratio,
                m.particles.line_linked.distance = m.tmp.obj.line_linked_distance * m.canvas.pxratio,
                m.interactivity.modes.grab.distance = m.tmp.obj.mode_grab_distance * m.canvas.pxratio,
                m.interactivity.modes.bubble.distance = m.tmp.obj.mode_bubble_distance * m.canvas.pxratio,
                m.particles.line_linked.width = m.tmp.obj.line_linked_width * m.canvas.pxratio,
                m.interactivity.modes.bubble.size = m.tmp.obj.mode_bubble_size * m.canvas.pxratio,
                m.interactivity.modes.repulse.distance = m.tmp.obj.mode_repulse_distance * m.canvas.pxratio
        }
        ,
        m.fn.canvasInit = function() {
            m.canvas.ctx = m.canvas.el.getContext("2d")
        }
        ,
        m.fn.canvasSize = function() {
            m.canvas.el.width = m.canvas.w,
                m.canvas.el.height = m.canvas.h,
            m && m.interactivity.events.resize && window.addEventListener("resize", function() {
                m.canvas.w = m.canvas.el.offsetWidth,
                    m.canvas.h = m.canvas.el.offsetHeight,
                m.tmp.retina && (m.canvas.w *= m.canvas.pxratio,
                    m.canvas.h *= m.canvas.pxratio),
                    m.canvas.el.width = m.canvas.w,
                    m.canvas.el.height = m.canvas.h,
                m.particles.move.enable || (m.fn.particlesEmpty(),
                    m.fn.particlesCreate(),
                    m.fn.particlesDraw(),
                    m.fn.vendors.densityAutoParticles()),
                    m.fn.vendors.densityAutoParticles()
            })
        }
        ,
        m.fn.canvasPaint = function() {
            m.canvas.ctx.fillRect(0, 0, m.canvas.w, m.canvas.h)
        }
        ,
        m.fn.canvasClear = function() {
            m.canvas.ctx.clearRect(0, 0, m.canvas.w, m.canvas.h)
        }
        ,
        m.fn.particle = function(e, t, a) {
            if (this.radius = (m.particles.size.random ? Math.random() : 1) * m.particles.size.value,
                m.particles.size.anim.enable && (this.size_status = !1,
                    this.vs = m.particles.size.anim.speed / 100,
                m.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
                    this.x = a ? a.x : Math.random() * m.canvas.w,
                    this.y = a ? a.y : Math.random() * m.canvas.h,
                    this.x > m.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
                    this.y > m.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
                m.particles.move.bounce && m.fn.vendors.checkOverlap(this, a),
                    this.color = {},
                "object" == typeof e.value)
                if (e.value instanceof Array) {
                    var i = e.value[Math.floor(Math.random() * m.particles.color.value.length)];
                    this.color.rgb = hexToRgb(i)
                } else
                    null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                        r: e.value.r,
                        g: e.value.g,
                        b: e.value.b
                    }),
                    null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                        h: e.value.h,
                        s: e.value.s,
                        l: e.value.l
                    });
            else
                "random" == e.value ? this.color.rgb = {
                    r: Math.floor(256 * Math.random()) + 0,
                    g: Math.floor(256 * Math.random()) + 0,
                    b: Math.floor(256 * Math.random()) + 0
                } : "string" == typeof e.value && (this.color = e,
                    this.color.rgb = hexToRgb(this.color.value));
            this.opacity = (m.particles.opacity.random ? Math.random() : 1) * m.particles.opacity.value,
            m.particles.opacity.anim.enable && (this.opacity_status = !1,
                this.vo = m.particles.opacity.anim.speed / 100,
            m.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
            var s = {};
            switch (m.particles.move.direction) {
                case "top":
                    s = {
                        x: 0,
                        y: -1
                    };
                    break;
                case "top-right":
                    s = {
                        x: .5,
                        y: -.5
                    };
                    break;
                case "right":
                    s = {
                        x: 1,
                        y: -0
                    };
                    break;
                case "bottom-right":
                    s = {
                        x: .5,
                        y: .5
                    };
                    break;
                case "bottom":
                    s = {
                        x: 0,
                        y: 1
                    };
                    break;
                case "bottom-left":
                    s = {
                        x: -.5,
                        y: 1
                    };
                    break;
                case "left":
                    s = {
                        x: -1,
                        y: 0
                    };
                    break;
                case "top-left":
                    s = {
                        x: -.5,
                        y: -.5
                    };
                    break;
                default:
                    s = {
                        x: 0,
                        y: 0
                    }
            }
            m.particles.move.straight ? (this.vx = s.x,
                this.vy = s.y,
            m.particles.move.random && (this.vx = this.vx * Math.random(),
                this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5,
                this.vy = s.y + Math.random() - .5),
                this.vx_i = this.vx,
                this.vy_i = this.vy;
            var n = m.particles.shape.type;
            if ("object" == typeof n) {
                if (n instanceof Array) {
                    var r = n[Math.floor(Math.random() * n.length)];
                    this.shape = r
                }
            } else
                this.shape = n;
            if ("image" == this.shape) {
                var c = m.particles.shape;
                this.img = {
                    src: c.image.src,
                    ratio: c.image.width / c.image.height
                },
                this.img.ratio || (this.img.ratio = 1),
                "svg" == m.tmp.img_type && null != m.tmp.source_svg && (m.fn.vendors.createSvgImg(this),
                m.tmp.pushing && (this.img.loaded = !1))
            }
        }
        ,
        m.fn.particle.prototype.draw = function() {
            var e = this;
            if (null != e.radius_bubble)
                var t = e.radius_bubble;
            else
                t = e.radius;
            if (null != e.opacity_bubble)
                var a = e.opacity_bubble;
            else
                a = e.opacity;
            if (e.color.rgb)
                var i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + a + ")";
            else
                i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + a + ")";
            switch (m.canvas.ctx.fillStyle = i,
                m.canvas.ctx.beginPath(),
                e.shape) {
                case "circle":
                    m.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    m.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                    break;
                case "triangle":
                    m.fn.vendors.drawShape(m.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                    break;
                case "polygon":
                    m.fn.vendors.drawShape(m.canvas.ctx, e.x - t / (m.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (m.particles.shape.polygon.nb_sides / 3), m.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    m.fn.vendors.drawShape(m.canvas.ctx, e.x - 2 * t / (m.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (m.particles.shape.polygon.nb_sides / 3), m.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    if ("svg" == m.tmp.img_type)
                        var s = e.img.obj;
                    else
                        s = m.tmp.img_obj;
                    s && m.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
            }
            m.canvas.ctx.closePath(),
            0 < m.particles.shape.stroke.width && (m.canvas.ctx.strokeStyle = m.particles.shape.stroke.color,
                m.canvas.ctx.lineWidth = m.particles.shape.stroke.width,
                m.canvas.ctx.stroke()),
                m.canvas.ctx.fill()
        }
        ,
        m.fn.particlesCreate = function() {
            for (var e = 0; e < m.particles.number.value; e++)
                m.particles.array.push(new m.fn.particle(m.particles.color,m.particles.opacity.value))
        }
        ,
        m.fn.particlesUpdate = function() {
            for (var e = 0; e < m.particles.array.length; e++) {
                var t = m.particles.array[e];
                if (m.particles.move.enable) {
                    var a = m.particles.move.speed / 2;
                    t.x += t.vx * a,
                        t.y += t.vy * a
                }
                if (m.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= m.particles.opacity.value && (t.opacity_status = !1),
                        t.opacity += t.vo) : (t.opacity <= m.particles.opacity.anim.opacity_min && (t.opacity_status = !0),
                        t.opacity -= t.vo),
                    t.opacity < 0 && (t.opacity = 0)),
                    m.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= m.particles.size.value && (t.size_status = !1),
                        t.radius += t.vs) : (t.radius <= m.particles.size.anim.size_min && (t.size_status = !0),
                        t.radius -= t.vs),
                    t.radius < 0 && (t.radius = 0)),
                    "bounce" == m.particles.move.out_mode)
                    var i = {
                        x_left: t.radius,
                        x_right: m.canvas.w,
                        y_top: t.radius,
                        y_bottom: m.canvas.h
                    };
                else
                    i = {
                        x_left: -t.radius,
                        x_right: m.canvas.w + t.radius,
                        y_top: -t.radius,
                        y_bottom: m.canvas.h + t.radius
                    };
                switch (t.x - t.radius > m.canvas.w ? (t.x = i.x_left,
                    t.y = Math.random() * m.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right,
                    t.y = Math.random() * m.canvas.h),
                    t.y - t.radius > m.canvas.h ? (t.y = i.y_top,
                        t.x = Math.random() * m.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom,
                        t.x = Math.random() * m.canvas.w),
                    m.particles.move.out_mode) {
                    case "bounce":
                        t.x + t.radius > m.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx),
                            t.y + t.radius > m.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
                }
                if (isInArray("grab", m.interactivity.events.onhover.mode) && m.fn.modes.grabParticle(t),
                    (isInArray("bubble", m.interactivity.events.onhover.mode) || isInArray("bubble", m.interactivity.events.onclick.mode)) && m.fn.modes.bubbleParticle(t),
                    (isInArray("repulse", m.interactivity.events.onhover.mode) || isInArray("repulse", m.interactivity.events.onclick.mode)) && m.fn.modes.repulseParticle(t),
                    m.particles.line_linked.enable || m.particles.move.attract.enable)
                    for (var s = e + 1; s < m.particles.array.length; s++) {
                        var n = m.particles.array[s];
                        m.particles.line_linked.enable && m.fn.interact.linkParticles(t, n),
                        m.particles.move.attract.enable && m.fn.interact.attractParticles(t, n),
                        m.particles.move.bounce && m.fn.interact.bounceParticles(t, n)
                    }
            }
        }
        ,
        m.fn.particlesDraw = function() {
            m.canvas.ctx.clearRect(0, 0, m.canvas.w, m.canvas.h),
                m.fn.particlesUpdate();
            for (var e = 0; e < m.particles.array.length; e++) {
                m.particles.array[e].draw()
            }
        }
        ,
        m.fn.particlesEmpty = function() {
            m.particles.array = []
        }
        ,
        m.fn.particlesRefresh = function() {
            cancelRequestAnimFrame(m.fn.checkAnimFrame),
                cancelRequestAnimFrame(m.fn.drawAnimFrame),
                m.tmp.source_svg = void 0,
                m.tmp.img_obj = void 0,
                m.tmp.count_svg = 0,
                m.fn.particlesEmpty(),
                m.fn.canvasClear(),
                m.fn.vendors.start()
        }
        ,
        m.fn.interact.linkParticles = function(e, t) {
            var a = e.x - t.x
                , i = e.y - t.y
                , s = Math.sqrt(a * a + i * i);
            if (s <= m.particles.line_linked.distance) {
                var n = m.particles.line_linked.opacity - s / (1 / m.particles.line_linked.opacity) / m.particles.line_linked.distance;
                if (0 < n) {
                    var r = m.particles.line_linked.color_rgb_line;
                    m.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")",
                        m.canvas.ctx.lineWidth = m.particles.line_linked.width,
                        m.canvas.ctx.beginPath(),
                        m.canvas.ctx.moveTo(e.x, e.y),
                        m.canvas.ctx.lineTo(t.x, t.y),
                        m.canvas.ctx.stroke(),
                        m.canvas.ctx.closePath()
                }
            }
        }
        ,
        m.fn.interact.attractParticles = function(e, t) {
            var a = e.x - t.x
                , i = e.y - t.y;
            if (Math.sqrt(a * a + i * i) <= m.particles.line_linked.distance) {
                var s = a / (1e3 * m.particles.move.attract.rotateX)
                    , n = i / (1e3 * m.particles.move.attract.rotateY);
                e.vx -= s,
                    e.vy -= n,
                    t.vx += s,
                    t.vy += n
            }
        }
        ,
        m.fn.interact.bounceParticles = function(e, t) {
            var a = e.x - t.x
                , i = e.y - t.y;
            Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx,
                e.vy = -e.vy,
                t.vx = -t.vx,
                t.vy = -t.vy)
        }
        ,
        m.fn.modes.pushParticles = function(e, t) {
            m.tmp.pushing = !0;
            for (var a = 0; a < e; a++)
                m.particles.array.push(new m.fn.particle(m.particles.color,m.particles.opacity.value,{
                    x: t ? t.pos_x : Math.random() * m.canvas.w,
                    y: t ? t.pos_y : Math.random() * m.canvas.h
                })),
                a == e - 1 && (m.particles.move.enable || m.fn.particlesDraw(),
                    m.tmp.pushing = !1)
        }
        ,
        m.fn.modes.removeParticles = function(e) {
            m.particles.array.splice(0, e),
            m.particles.move.enable || m.fn.particlesDraw()
        }
        ,
        m.fn.modes.bubbleParticle = function(c) {
            function e() {
                c.opacity_bubble = c.opacity,
                    c.radius_bubble = c.radius
            }
            function t(e, t, a, i, s) {
                if (e != t)
                    if (m.tmp.bubble_duration_end) {
                        if (null != a)
                            r = e + (e - (i - v * (i - e) / m.interactivity.modes.bubble.duration)),
                            "size" == s && (c.radius_bubble = r),
                            "opacity" == s && (c.opacity_bubble = r)
                    } else if (l <= m.interactivity.modes.bubble.distance) {
                        if (null != a)
                            var n = a;
                        else
                            n = i;
                        if (n != e) {
                            var r = i - v * (i - e) / m.interactivity.modes.bubble.duration;
                            "size" == s && (c.radius_bubble = r),
                            "opacity" == s && (c.opacity_bubble = r)
                        }
                    } else
                        "size" == s && (c.radius_bubble = void 0),
                        "opacity" == s && (c.opacity_bubble = void 0)
            }
            if (m.interactivity.events.onhover.enable && isInArray("bubble", m.interactivity.events.onhover.mode)) {
                var a = c.x - m.interactivity.mouse.pos_x
                    , i = c.y - m.interactivity.mouse.pos_y
                    , s = 1 - (l = Math.sqrt(a * a + i * i)) / m.interactivity.modes.bubble.distance;
                if (l <= m.interactivity.modes.bubble.distance) {
                    if (0 <= s && "mousemove" == m.interactivity.status) {
                        if (m.interactivity.modes.bubble.size != m.particles.size.value)
                            if (m.interactivity.modes.bubble.size > m.particles.size.value) {
                                0 <= (r = c.radius + m.interactivity.modes.bubble.size * s) && (c.radius_bubble = r)
                            } else {
                                var n = c.radius - m.interactivity.modes.bubble.size
                                    , r = c.radius - n * s;
                                c.radius_bubble = 0 < r ? r : 0
                            }
                        if (m.interactivity.modes.bubble.opacity != m.particles.opacity.value)
                            if (m.interactivity.modes.bubble.opacity > m.particles.opacity.value) {
                                (o = m.interactivity.modes.bubble.opacity * s) > c.opacity && o <= m.interactivity.modes.bubble.opacity && (c.opacity_bubble = o)
                            } else {
                                var o;
                                (o = c.opacity - (m.particles.opacity.value - m.interactivity.modes.bubble.opacity) * s) < c.opacity && o >= m.interactivity.modes.bubble.opacity && (c.opacity_bubble = o)
                            }
                    }
                } else
                    e();
                "mouseleave" == m.interactivity.status && e()
            } else if (m.interactivity.events.onclick.enable && isInArray("bubble", m.interactivity.events.onclick.mode)) {
                if (m.tmp.bubble_clicking) {
                    a = c.x - m.interactivity.mouse.click_pos_x,
                        i = c.y - m.interactivity.mouse.click_pos_y;
                    var l = Math.sqrt(a * a + i * i)
                        , v = ((new Date).getTime() - m.interactivity.mouse.click_time) / 1e3;
                    v > m.interactivity.modes.bubble.duration && (m.tmp.bubble_duration_end = !0),
                    v > 2 * m.interactivity.modes.bubble.duration && (m.tmp.bubble_clicking = !1,
                        m.tmp.bubble_duration_end = !1)
                }
                m.tmp.bubble_clicking && (t(m.interactivity.modes.bubble.size, m.particles.size.value, c.radius_bubble, c.radius, "size"),
                    t(m.interactivity.modes.bubble.opacity, m.particles.opacity.value, c.opacity_bubble, c.opacity, "opacity"))
            }
        }
        ,
        m.fn.modes.repulseParticle = function(i) {
            if (m.interactivity.events.onhover.enable && isInArray("repulse", m.interactivity.events.onhover.mode) && "mousemove" == m.interactivity.status) {
                var e = i.x - m.interactivity.mouse.pos_x
                    , t = i.y - m.interactivity.mouse.pos_y
                    , a = Math.sqrt(e * e + t * t)
                    , s = e / a
                    , n = t / a
                    , r = clamp(1 / (o = m.interactivity.modes.repulse.distance) * (-1 * Math.pow(a / o, 2) + 1) * o * 100, 0, 50)
                    , c = {
                    x: i.x + s * r,
                    y: i.y + n * r
                };
                "bounce" == m.particles.move.out_mode ? (0 < c.x - i.radius && c.x + i.radius < m.canvas.w && (i.x = c.x),
                0 < c.y - i.radius && c.y + i.radius < m.canvas.h && (i.y = c.y)) : (i.x = c.x,
                    i.y = c.y)
            } else if (m.interactivity.events.onclick.enable && isInArray("repulse", m.interactivity.events.onclick.mode))
                if (m.tmp.repulse_finish || (m.tmp.repulse_count++,
                    m.tmp.repulse_count == m.particles.array.length && (m.tmp.repulse_finish = !0)),
                        m.tmp.repulse_clicking) {
                    var o = Math.pow(m.interactivity.modes.repulse.distance / 6, 3)
                        , l = m.interactivity.mouse.click_pos_x - i.x
                        , v = m.interactivity.mouse.click_pos_y - i.y
                        , p = l * l + v * v
                        , d = -o / p * 1;
                    p <= o && function() {
                        var e = Math.atan2(v, l);
                        if (i.vx = d * Math.cos(e),
                                i.vy = d * Math.sin(e),
                            "bounce" == m.particles.move.out_mode) {
                            var t = i.x + i.vx
                                , a = i.y + i.vy;
                            t + i.radius > m.canvas.w ? i.vx = -i.vx : t - i.radius < 0 && (i.vx = -i.vx),
                                a + i.radius > m.canvas.h ? i.vy = -i.vy : a - i.radius < 0 && (i.vy = -i.vy)
                        }
                    }()
                } else
                    0 == m.tmp.repulse_clicking && (i.vx = i.vx_i,
                        i.vy = i.vy_i)
        }
        ,
        m.fn.modes.grabParticle = function(e) {
            if (m.interactivity.events.onhover.enable && "mousemove" == m.interactivity.status) {
                var t = e.x - m.interactivity.mouse.pos_x
                    , a = e.y - m.interactivity.mouse.pos_y
                    , i = Math.sqrt(t * t + a * a);
                if (i <= m.interactivity.modes.grab.distance) {
                    var s = m.interactivity.modes.grab.line_linked.opacity - i / (1 / m.interactivity.modes.grab.line_linked.opacity) / m.interactivity.modes.grab.distance;
                    if (0 < s) {
                        var n = m.particles.line_linked.color_rgb_line;
                        m.canvas.ctx.strokeStyle = "rgba(" + n.r + "," + n.g + "," + n.b + "," + s + ")",
                            m.canvas.ctx.lineWidth = m.particles.line_linked.width,
                            m.canvas.ctx.beginPath(),
                            m.canvas.ctx.moveTo(e.x, e.y),
                            m.canvas.ctx.lineTo(m.interactivity.mouse.pos_x, m.interactivity.mouse.pos_y),
                            m.canvas.ctx.stroke(),
                            m.canvas.ctx.closePath()
                    }
                }
            }
        }
        ,
        m.fn.vendors.eventsListeners = function() {
            "window" == m.interactivity.detect_on ? m.interactivity.el = window : m.interactivity.el = m.canvas.el,
            (m.interactivity.events.onhover.enable || m.interactivity.events.onclick.enable) && (m.interactivity.el.addEventListener("mousemove", function(e) {
                if (m.interactivity.el == window)
                    var t = e.clientX
                        , a = e.clientY;
                else
                    t = e.offsetX || e.clientX,
                        a = e.offsetY || e.clientY;
                m.interactivity.mouse.pos_x = t,
                    m.interactivity.mouse.pos_y = a,
                m.tmp.retina && (m.interactivity.mouse.pos_x *= m.canvas.pxratio,
                    m.interactivity.mouse.pos_y *= m.canvas.pxratio),
                    m.interactivity.status = "mousemove"
            }),
                m.interactivity.el.addEventListener("mouseleave", function(e) {
                    m.interactivity.mouse.pos_x = null,
                        m.interactivity.mouse.pos_y = null,
                        m.interactivity.status = "mouseleave"
                })),
            m.interactivity.events.onclick.enable && m.interactivity.el.addEventListener("click", function() {
                if (m.interactivity.mouse.click_pos_x = m.interactivity.mouse.pos_x,
                        m.interactivity.mouse.click_pos_y = m.interactivity.mouse.pos_y,
                        m.interactivity.mouse.click_time = (new Date).getTime(),
                        m.interactivity.events.onclick.enable)
                    switch (m.interactivity.events.onclick.mode) {
                        case "push":
                            m.particles.move.enable ? m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb, m.interactivity.mouse) : 1 == m.interactivity.modes.push.particles_nb ? m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb, m.interactivity.mouse) : 1 < m.interactivity.modes.push.particles_nb && m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb);
                            break;
                        case "remove":
                            m.fn.modes.removeParticles(m.interactivity.modes.remove.particles_nb);
                            break;
                        case "bubble":
                            m.tmp.bubble_clicking = !0;
                            break;
                        case "repulse":
                            m.tmp.repulse_clicking = !0,
                                m.tmp.repulse_count = 0,
                                m.tmp.repulse_finish = !1,
                                setTimeout(function() {
                                    m.tmp.repulse_clicking = !1
                                }, 1e3 * m.interactivity.modes.repulse.duration)
                    }
            })
        }
        ,
        m.fn.vendors.densityAutoParticles = function() {
            if (m.particles.number.density.enable) {
                var e = m.canvas.el.width * m.canvas.el.height / 1e3;
                m.tmp.retina && (e /= 2 * m.canvas.pxratio);
                var t = e * m.particles.number.value / m.particles.number.density.value_area
                    , a = m.particles.array.length - t;
                a < 0 ? m.fn.modes.pushParticles(Math.abs(a)) : m.fn.modes.removeParticles(a)
            }
        }
        ,
        m.fn.vendors.checkOverlap = function(e, t) {
            for (var a = 0; a < m.particles.array.length; a++) {
                var i = m.particles.array[a]
                    , s = e.x - i.x
                    , n = e.y - i.y;
                Math.sqrt(s * s + n * n) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * m.canvas.w,
                    e.y = t ? t.y : Math.random() * m.canvas.h,
                    m.fn.vendors.checkOverlap(e))
            }
        }
        ,
        m.fn.vendors.createSvgImg = function(n) {
            var e = m.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, a, i) {
                if (n.color.rgb)
                    var s = "rgba(" + n.color.rgb.r + "," + n.color.rgb.g + "," + n.color.rgb.b + "," + n.opacity + ")";
                else
                    s = "hsla(" + n.color.hsl.h + "," + n.color.hsl.s + "%," + n.color.hsl.l + "%," + n.opacity + ")";
                return s
            })
                , t = new Blob([e],{
                type: "image/svg+xml;charset=utf-8"
            })
                , a = window.URL || window.webkitURL || window
                , i = a.createObjectURL(t)
                , s = new Image;
            s.addEventListener("load", function() {
                n.img.obj = s,
                    n.img.loaded = !0,
                    a.revokeObjectURL(i),
                    m.tmp.count_svg++
            }),
                s.src = i
        }
        ,
        m.fn.vendors.destroypJS = function() {
            cancelAnimationFrame(m.fn.drawAnimFrame),
                a.remove(),
                pJSDom = null
        }
        ,
        m.fn.vendors.drawShape = function(e, t, a, i, s, n) {
            var r = s * n
                , c = s / n
                , o = 180 * (c - 2) / c
                , l = Math.PI - Math.PI * o / 180;
            e.save(),
                e.beginPath(),
                e.translate(t, a),
                e.moveTo(0, 0);
            for (var v = 0; v < r; v++)
                e.lineTo(i, 0),
                    e.translate(i, 0),
                    e.rotate(l);
            e.fill(),
                e.restore()
        }
        ,
        m.fn.vendors.exportImg = function() {
            window.open(m.canvas.el.toDataURL("image/png"), "_blank")
        }
        ,
        m.fn.vendors.loadImg = function(e) {
            if (m.tmp.img_error = void 0,
                "" != m.particles.shape.image.src)
                if ("svg" == e) {
                    var t = new XMLHttpRequest;
                    t.open("GET", m.particles.shape.image.src),
                        t.onreadystatechange = function(e) {
                            4 == t.readyState && (200 == t.status ? (m.tmp.source_svg = e.currentTarget.response,
                                m.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                                m.tmp.img_error = !0))
                        }
                        ,
                        t.send()
                } else {
                    var a = new Image;
                    a.addEventListener("load", function() {
                        m.tmp.img_obj = a,
                            m.fn.vendors.checkBeforeDraw()
                    }),
                        a.src = m.particles.shape.image.src
                }
            else
                console.log("Error pJS - No image.src"),
                    m.tmp.img_error = !0
        }
        ,
        m.fn.vendors.draw = function() {
            "image" == m.particles.shape.type ? "svg" == m.tmp.img_type ? m.tmp.count_svg >= m.particles.number.value ? (m.fn.particlesDraw(),
                m.particles.move.enable ? m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw) : cancelRequestAnimFrame(m.fn.drawAnimFrame)) : m.tmp.img_error || (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw)) : null != m.tmp.img_obj ? (m.fn.particlesDraw(),
                m.particles.move.enable ? m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw) : cancelRequestAnimFrame(m.fn.drawAnimFrame)) : m.tmp.img_error || (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw)) : (m.fn.particlesDraw(),
                m.particles.move.enable ? m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw) : cancelRequestAnimFrame(m.fn.drawAnimFrame))
        }
        ,
        m.fn.vendors.checkBeforeDraw = function() {
            "image" == m.particles.shape.type ? "svg" == m.tmp.img_type && null == m.tmp.source_svg ? m.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(m.tmp.checkAnimFrame),
            m.tmp.img_error || (m.fn.vendors.init(),
                m.fn.vendors.draw())) : (m.fn.vendors.init(),
                m.fn.vendors.draw())
        }
        ,
        m.fn.vendors.init = function() {
            m.fn.retinaInit(),
                m.fn.canvasInit(),
                m.fn.canvasSize(),
                m.fn.canvasPaint(),
                m.fn.particlesCreate(),
                m.fn.vendors.densityAutoParticles(),
                m.particles.line_linked.color_rgb_line = hexToRgb(m.particles.line_linked.color)
        }
        ,
        m.fn.vendors.start = function() {
            isInArray("image", m.particles.shape.type) ? (m.tmp.img_type = m.particles.shape.image.src.substr(m.particles.shape.image.src.length - 3),
                m.fn.vendors.loadImg(m.tmp.img_type)) : m.fn.vendors.checkBeforeDraw()
        }
        ,
        m.fn.vendors.eventsListeners(),
        m.fn.vendors.start()
};
Object.deepExtend = function(e, t) {
    for (var a in t)
        t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {},
            arguments.callee(e[a], t[a])) : e[a] = t[a];
    return e
}
    ,
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    ,
    window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
    window.pJSDom = [],
    window.particlesJS = function(e, t) {
        "string" != typeof e && (t = e,
            e = "particles-js"),
        e || (e = "particles-js");
        var a = document.getElementById(e)
            , i = "particles-js-canvas-el"
            , s = a.getElementsByClassName(i);
        if (s.length)
            for (; 0 < s.length; )
                a.removeChild(s[0]);
        var n = document.createElement("canvas");
        n.className = i,
            n.style.width = "100%",
            n.style.height = "100%",
        null != document.getElementById(e).appendChild(n) && pJSDom.push(new pJS(e,t))
    }
    ,
    window.particlesJS.load = function(a, e, i) {
        var s = new XMLHttpRequest;
        s.open("GET", e),
            s.onreadystatechange = function(e) {
                if (4 == s.readyState)
                    if (200 == s.status) {
                        var t = JSON.parse(e.currentTarget.response);
                        window.particlesJS(a, t),
                        i && i()
                    } else
                        console.log("Error pJS - XMLHttpRequest status: " + s.status),
                            console.log("Error pJS - File config not found")
            }
            ,
            s.send()
    }
;
!function(c, w, x) {
    "use strict";
    function t(e) {
        if (S = w.documentElement,
                n = w.body,
                B(),
                te = this,
                ie = (e = e || {}).constants || {},
                e.easing)
            for (var t in e.easing)
                K[t] = e.easing[t];
        pe = e.edgeStrategy || "set",
            oe = {
                beforerender: e.beforerender,
                render: e.render,
                keyframe: e.keyframe
            },
        (ae = !1 !== e.forceHeight) && (He = e.scale || 1),
            le = e.mobileDeceleration || u,
            ce = !1 !== e.smoothScrolling,
            fe = e.smoothScrollingDuration || m,
            ue = {
                targetTop: te.getScrollTop()
            },
            (Le = (e.mobileCheck || function() {
                    return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || c.opera)
                }
            )()) ? ((ne = w.getElementById("skrollr-body")) && ee(),
                Y(),
                xe(S, [a, s], [i])) : xe(S, [a, l], [i]),
            te.refresh(),
            ve(c, "resize orientationchange", function() {
                var e = S.clientWidth
                    , t = S.clientHeight;
                (t !== Ve || e !== Oe) && (Ve = t,
                    Oe = e,
                    ze = !0)
            });
        var r = G();
        return function e() {
            R(),
                ge = r(e)
        }(),
            te
    }
    var S, n, E = {
        get: function() {
            return te
        },
        init: function(e) {
            return te || new t(e)
        },
        VERSION: "0.6.26"
    }, A = Object.prototype.hasOwnProperty, k = c.Math, o = c.getComputedStyle, F = "touchstart", C = "touchmove", D = "touchcancel", H = "touchend", I = "skrollable", P = I + "-before", N = I + "-between", O = I + "-after", a = "skrollr", i = "no-" + a, l = a + "-desktop", s = a + "-mobile", f = "linear", u = .004, m = 200, p = "center", d = "bottom", V = "___skrollable_id", z = /^(?:input|textarea|button|select)$/i, r = /^\s+|\s+$/g, q = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, g = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, v = /^(@?[a-z\-]+)\[(\w+)\]$/, L = /-([a-z0-9_])/g, M = function(e, t) {
        return t.toUpperCase()
    }, h = /[\-+]?[\d]*\.?[\d]+/g, y = /\{\?\}/g, T = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, b = /[a-z\-]+-gradient/g, $ = "", _ = "", B = function() {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (o) {
            var t = o(n, null);
            for (var r in t)
                if ($ = r.match(e) || +r == r && t[r].match(e))
                    break;
            if (!$)
                return $ = _ = "",
                    x;
            "-" === ($ = $[0]).slice(0, 1) ? $ = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[_ = $] : _ = "-" + $.toLowerCase() + "-"
        }
    }, G = function() {
        var e = c.requestAnimationFrame || c[$.toLowerCase() + "RequestAnimationFrame"]
            , n = Fe();
        return (Le || !e) && (e = function(e) {
                var t = Fe() - n
                    , r = k.max(0, 1e3 / 60 - t);
                return c.setTimeout(function() {
                    n = Fe(),
                        e()
                }, r)
            }
        ),
            e
    }, K = {
        begin: function() {
            return 0
        },
        end: function() {
            return 1
        },
        linear: function(e) {
            return e
        },
        quadratic: function(e) {
            return e * e
        },
        cubic: function(e) {
            return e * e * e
        },
        swing: function(e) {
            return -k.cos(e * k.PI) / 2 + .5
        },
        sqrt: function(e) {
            return k.sqrt(e)
        },
        outCubic: function(e) {
            return k.pow(e - 1, 3) + 1
        },
        bounce: function(e) {
            var t;
            if (e <= .5083)
                t = 3;
            else if (e <= .8489)
                t = 9;
            else if (e <= .96208)
                t = 27;
            else {
                if (!(e <= .99981))
                    return 1;
                t = 91
            }
            return 1 - k.abs(3 * k.cos(1.028 * e * t) / t)
        }
    };
    t.prototype.refresh = function(e) {
        var t, r, n = !1;
        for (e === x ? (n = !0,
            re = [],
            qe = 0,
            e = w.getElementsByTagName("*")) : e.length === x && (e = [e]),
                 t = 0,
                 r = e.length; t < r; t++) {
            var o = e[t]
                , a = o
                , i = []
                , l = ce
                , s = pe
                , c = !1;
            if (n && V in o && delete o[V],
                    o.attributes) {
                for (var f = 0, u = o.attributes.length; f < u; f++) {
                    var m = o.attributes[f];
                    if ("data-anchor-target" !== m.name)
                        if ("data-smooth-scrolling" !== m.name)
                            if ("data-edge-strategy" !== m.name)
                                if ("data-emit-events" !== m.name) {
                                    var p = m.name.match(q);
                                    if (null !== p) {
                                        var d = {
                                            props: m.value,
                                            element: o,
                                            eventType: m.name.replace(L, M)
                                        };
                                        i.push(d);
                                        var g = p[1];
                                        g && (d.constant = g.substr(1));
                                        var v = p[2];
                                        /p$/.test(v) ? (d.isPercentage = !0,
                                            d.offset = (0 | v.slice(0, -1)) / 100) : d.offset = 0 | v;
                                        var h = p[3]
                                            , y = p[4] || h;
                                        h && "start" !== h && "end" !== h ? (d.mode = "relative",
                                            d.anchors = [h, y]) : (d.mode = "absolute",
                                            "end" === h ? d.isEnd = !0 : d.isPercentage || (d.offset = d.offset * He))
                                    }
                                } else
                                    c = !0;
                            else
                                s = m.value;
                        else
                            l = "off" !== m.value;
                    else if (null === (a = w.querySelector(m.value)))
                        throw 'Unable to find anchor target "' + m.value + '"'
                }
                var T, b, S;
                if (i.length)
                    !n && V in o ? (S = o[V],
                        T = re[S].styleAttr,
                        b = re[S].classAttr) : (S = o[V] = qe++,
                        T = o.style.cssText,
                        b = we(o)),
                        re[S] = {
                            element: o,
                            styleAttr: T,
                            classAttr: b,
                            anchorTarget: a,
                            keyFrames: i,
                            smoothScrolling: l,
                            edgeStrategy: s,
                            emitEvents: c,
                            lastFrameIndex: -1
                        },
                        xe(o, [I], [])
            }
        }
        for (be(),
                 t = 0,
                 r = e.length; t < r; t++) {
            var k = re[e[t][V]];
            k !== x && (U(k),
                j(k))
        }
        return te
    }
        ,
        t.prototype.relativeToAbsolute = function(e, t, r) {
            var n = S.clientHeight
                , o = e.getBoundingClientRect()
                , a = o.top
                , i = o.bottom - o.top;
            return t === d ? a -= n : t === p && (a -= n / 2),
                r === d ? a += i : r === p && (a += i / 2),
            0 | (a += te.getScrollTop()) + .5
        }
        ,
        t.prototype.animateTo = function(e, t) {
            t = t || {};
            var r = Fe()
                , n = te.getScrollTop();
            return (se = {
                startTop: n,
                topDiff: e - n,
                targetTop: e,
                duration: t.duration || 1e3,
                startTime: r,
                endTime: r + (t.duration || 1e3),
                easing: K[t.easing || f],
                done: t.done
            }).topDiff || (se.done && se.done.call(te, !1),
                se = x),
                te
        }
        ,
        t.prototype.stopAnimateTo = function() {
            se && se.done && se.done.call(te, !0),
                se = x
        }
        ,
        t.prototype.isAnimatingTo = function() {
            return !!se
        }
        ,
        t.prototype.isMobile = function() {
            return Le
        }
        ,
        t.prototype.setScrollTop = function(e, t) {
            return me = !0 === t,
                Le ? Me = k.min(k.max(e, 0), De) : c.scrollTo(0, e),
                te
        }
        ,
        t.prototype.getScrollTop = function() {
            return Le ? Me : c.pageYOffset || S.scrollTop || n.scrollTop || 0
        }
        ,
        t.prototype.getMaxScrollTop = function() {
            return De
        }
        ,
        t.prototype.on = function(e, t) {
            return oe[e] = t,
                te
        }
        ,
        t.prototype.off = function(e) {
            return delete oe[e],
                te
        }
        ,
        t.prototype.destroy = function() {
            var e;
            (e = c.cancelAnimationFrame || c[$.toLowerCase() + "CancelAnimationFrame"],
            (Le || !e) && (e = function(e) {
                    return c.clearTimeout(e)
                }
            ),
                e)(ge),
                ye(),
                xe(S, [i], [a, l, s]);
            for (var t = 0, r = re.length; t < r; t++)
                Q(re[t].element);
            S.style.overflow = n.style.overflow = "",
                S.style.height = n.style.height = "",
            ne && E.setStyle(ne, "transform", "none"),
                Ie = "down",
                Le = ze = !(Pe = -(He = 1)),
                Me = qe = Ve = Oe = De = 0,
                de = pe = me = ue = fe = ce = se = le = ie = ae = oe = ne = te = x
        }
    ;
    var Y = function() {
        var f, u, m, p, d, g, v, h, y, T, b;
        ve(S, [F, C, D, H].join(" "), function(e) {
            var t = e.changedTouches[0];
            for (p = e.target; 3 === p.nodeType; )
                p = p.parentNode;
            switch (d = t.clientY,
                g = t.clientX,
                y = e.timeStamp,
            z.test(p.tagName) || e.preventDefault(),
                e.type) {
                case F:
                    f && f.blur(),
                        te.stopAnimateTo(),
                        f = p,
                        u = v = d,
                        m = g,
                        y;
                    break;
                case C:
                    z.test(p.tagName) && w.activeElement !== p && e.preventDefault(),
                        h = d - v,
                        b = y - T,
                        te.setScrollTop(Me - h, !0),
                        v = d,
                        T = y;
                    break;
                default:
                case D:
                case H:
                    var r = u - d
                        , n = m - g;
                    if (n * n + r * r < 49) {
                        if (!z.test(f.tagName)) {
                            f.focus();
                            var o = w.createEvent("MouseEvents");
                            o.initMouseEvent("click", !0, !0, e.view, 1, t.screenX, t.screenY, t.clientX, t.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
                                f.dispatchEvent(o)
                        }
                        return
                    }
                    f = x;
                    var a = h / b;
                    a = k.max(k.min(a, 3), -3);
                    var i = k.abs(a / le)
                        , l = a * i + .5 * le * i * i
                        , s = te.getScrollTop() - l
                        , c = 0;
                    De < s ? (c = (De - s) / l,
                        s = De) : s < 0 && (c = -s / l,
                        s = 0),
                        i *= 1 - c,
                        te.animateTo(0 | s + .5, {
                            easing: "outCubic",
                            duration: i
                        })
            }
        }),
            c.scrollTo(0, 0),
            S.style.overflow = n.style.overflow = "hidden"
    }
        , R = function() {
        ze && (ze = !1,
            be());
        var e, t, r = te.getScrollTop(), n = Fe();
        if (se)
            n >= se.endTime ? (r = se.targetTop,
                e = se.done,
                se = x) : (t = se.easing((n - se.startTime) / se.duration),
                r = 0 | se.startTop + t * se.topDiff),
                te.setScrollTop(r, !0);
        else if (!me) {
            ue.targetTop - r && (ue = {
                startTop: Pe,
                topDiff: r - Pe,
                targetTop: r,
                startTime: Ne,
                endTime: Ne + fe
            }),
            ue.endTime >= n && (t = K.sqrt((n - ue.startTime) / fe),
                r = 0 | ue.startTop + t * ue.topDiff)
        }
        if (Le && ne && E.setStyle(ne, "transform", "translate(0, " + -Me + "px) " + de),
            me || Pe !== r) {
            var o = {
                curTop: r,
                lastTop: Pe,
                maxTop: De,
                direction: Ie = Pe < r ? "down" : r < Pe ? "up" : Ie
            };
            (me = !1) !== (oe.beforerender && oe.beforerender.call(te, o)) && (function(e, t) {
                for (var r = 0, n = re.length; r < n; r++) {
                    var o, a, i = re[r], l = i.element, s = i.smoothScrolling ? e : t, c = i.keyFrames, f = c.length, u = c[0], m = c[c.length - 1], p = u.frame > s, d = s > m.frame, g = p ? u : m, v = i.emitEvents, h = i.lastFrameIndex;
                    if (p || d) {
                        if (p && -1 === i.edge || d && 1 === i.edge)
                            continue;
                        switch (p ? (xe(l, [P], [O, N]),
                        v && -1 < h && (Te(l, u.eventType, Ie),
                            i.lastFrameIndex = -1)) : (xe(l, [O], [P, N]),
                        v && h < f && (Te(l, m.eventType, Ie),
                            i.lastFrameIndex = f)),
                            i.edge = p ? -1 : 1,
                            i.edgeStrategy) {
                            case "reset":
                                Q(l);
                                continue;
                            case "ease":
                                s = g.frame;
                                break;
                            default:
                            case "set":
                                var y = g.props;
                                for (o in y)
                                    A.call(y, o) && (a = J(y[o].value),
                                        0 === o.indexOf("@") ? l.setAttribute(o.substr(1), a) : E.setStyle(l, o, a));
                                continue
                        }
                    } else
                        0 !== i.edge && (xe(l, [I, N], [P, O]),
                            i.edge = 0);
                    for (var T = 0; T < f - 1; T++)
                        if (s >= c[T].frame && c[T + 1].frame >= s) {
                            var b = c[T]
                                , S = c[T + 1];
                            for (o in b.props)
                                if (A.call(b.props, o)) {
                                    var k = (s - b.frame) / (S.frame - b.frame);
                                    k = b.props[o].easing(k),
                                        a = Z(b.props[o].value, S.props[o].value, k),
                                        a = J(a),
                                        0 === o.indexOf("@") ? l.setAttribute(o.substr(1), a) : E.setStyle(l, o, a)
                                }
                            v && h !== T && (Te(l, "down" === Ie ? b.eventType : S.eventType, Ie),
                                i.lastFrameIndex = T);
                            break
                        }
                }
            }(r, te.getScrollTop()),
                Pe = r,
            oe.render && oe.render.call(te, o)),
            e && e.call(te, !1)
        }
        Ne = n
    }
        , U = function(e) {
        for (var t = 0, r = e.keyFrames.length; t < r; t++) {
            for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = g.exec(l.props)); )
                a = i[1],
                    o = i[2],
                    null !== (n = a.match(v)) ? (a = n[1],
                        n = n[2]) : n = f,
                    o = o.indexOf("!") ? X(o) : [o.slice(1)],
                    s[a] = {
                        value: o,
                        easing: K[n]
                    };
            l.props = s
        }
    }
        , X = function(e) {
        var t = [];
        return T.lastIndex = 0,
            e = e.replace(T, function(e) {
                return e.replace(h, function(e) {
                    return e / 255 * 100 + "%"
                })
            }),
        _ && (b.lastIndex = 0,
            e = e.replace(b, function(e) {
                return _ + e
            })),
            e = e.replace(h, function(e) {
                return t.push(+e),
                    "{?}"
            }),
            t.unshift(e),
            t
    }
        , j = function(e) {
        var t, r, n = {};
        for (t = 0,
                 r = e.keyFrames.length; t < r; t++)
            W(e.keyFrames[t], n);
        for (n = {},
                 t = e.keyFrames.length - 1; 0 <= t; t--)
            W(e.keyFrames[t], n)
    }
        , W = function(e, t) {
        var r;
        for (r in t)
            A.call(e.props, r) || (e.props[r] = t[r]);
        for (r in e.props)
            t[r] = e.props[r]
    }
        , Z = function(e, t, r) {
        var n, o = e.length;
        if (o !== t.length)
            throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var a = [e[0]];
        for (n = 1; n < o; n++)
            a[n] = e[n] + (t[n] - e[n]) * r;
        return a
    }
        , J = function(e) {
        var t = 1;
        return y.lastIndex = 0,
            e[0].replace(y, function() {
                return e[t++]
            })
    }
        , Q = function(e, t) {
        for (var r, n, o = 0, a = (e = [].concat(e)).length; o < a; o++)
            n = e[o],
            (r = re[n[V]]) && (t ? (n.style.cssText = r.dirtyStyleAttr,
                xe(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText,
                r.dirtyClassAttr = we(n),
                n.style.cssText = r.styleAttr,
                xe(n, r.classAttr)))
    }
        , ee = function() {
        de = "translateZ(0)",
            E.setStyle(ne, "transform", de);
        var e = o(ne)
            , t = e.getPropertyValue("transform")
            , r = e.getPropertyValue(_ + "transform");
        t && "none" !== t || r && "none" !== r || (de = "")
    };
    E.setStyle = function(e, t, r) {
        var n = e.style;
        if ("zIndex" === (t = t.replace(L, M).replace("-", "")))
            n[t] = isNaN(r) ? r : "" + (0 | r);
        else if ("float" === t)
            n.styleFloat = n.cssFloat = r;
        else
            try {
                $ && (n[$ + t.slice(0, 1).toUpperCase() + t.slice(1)] = r),
                    n[t] = r
            } catch (e) {}
    }
    ;
    var te, re, ne, oe, ae, ie, le, se, ce, fe, ue, me, pe, de, ge, ve = E.addEvent = function(e, t, r) {
        for (var n, o = function(e) {
            return (e = e || c.event).target || (e.target = e.srcElement),
            e.preventDefault || (e.preventDefault = function() {
                    e.returnValue = !1,
                        e.defaultPrevented = !0
                }
            ),
                r.call(this, e)
        }, a = 0, i = (t = t.split(" ")).length; a < i; a++)
            n = t[a],
                e.addEventListener ? e.addEventListener(n, r, !1) : e.attachEvent("on" + n, o),
                $e.push({
                    element: e,
                    name: n,
                    listener: r
                })
    }
        , he = E.removeEvent = function(e, t, r) {
        for (var n = 0, o = (t = t.split(" ")).length; n < o; n++)
            e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
    }
        , ye = function() {
        for (var e, t = 0, r = $e.length; t < r; t++)
            e = $e[t],
                he(e.element, e.name, e.listener);
        $e = []
    }, Te = function(e, t, r) {
        oe.keyframe && oe.keyframe.call(te, e, t, r)
    }, be = function() {
        var e = te.getScrollTop();
        De = 0,
        ae && !Le && (n.style.height = ""),
            function() {
                var e, t, r, n, o, a, i, l, s, c, f, u = S.clientHeight, m = Se();
                for (l = 0,
                         s = re.length; l < s; l++)
                    for (t = (e = re[l]).element,
                             r = e.anchorTarget,
                             o = 0,
                             a = (n = e.keyFrames).length; o < a; o++)
                        c = (i = n[o]).offset,
                            f = m[i.constant] || 0,
                            i.frame = c,
                        i.isPercentage && (c *= u,
                            i.frame = c),
                        "relative" === i.mode && (Q(t),
                            i.frame = te.relativeToAbsolute(r, i.anchors[0], i.anchors[1]) - c,
                            Q(t, !0)),
                            i.frame += f,
                        ae && !i.isEnd && i.frame > De && (De = i.frame);
                for (De = k.max(De, ke()),
                         l = 0,
                         s = re.length; l < s; l++) {
                    for (o = 0,
                             a = (n = (e = re[l]).keyFrames).length; o < a; o++)
                        f = m[(i = n[o]).constant] || 0,
                        i.isEnd && (i.frame = De - i.offset + f);
                    e.keyFrames.sort(Ce)
                }
            }(),
        ae && !Le && (n.style.height = De + S.clientHeight + "px"),
            Le ? te.setScrollTop(k.min(te.getScrollTop(), De)) : te.setScrollTop(e, !0),
            me = !0
    }, Se = function() {
        var e, t, r = S.clientHeight, n = {};
        for (e in ie)
            "function" == typeof (t = ie[e]) ? t = t.call(te) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r),
                n[e] = t;
        return n
    }, ke = function() {
        var e = ne && ne.offsetHeight || 0;
        return k.max(e, n.scrollHeight, n.offsetHeight, S.scrollHeight, S.offsetHeight, S.clientHeight) - S.clientHeight
    }, we = function(e) {
        var t = "className";
        return c.SVGElement && e instanceof c.SVGElement && (e = e[t],
            t = "baseVal"),
            e[t]
    }, xe = function(e, t, r) {
        var n = "className";
        if (c.SVGElement && e instanceof c.SVGElement && (e = e[n],
                n = "baseVal"),
            r === x)
            return e[n] = t,
                x;
        for (var o = e[n], a = 0, i = r.length; a < i; a++)
            o = Ae(o).replace(Ae(r[a]), " ");
        o = Ee(o);
        for (var l = 0, s = t.length; l < s; l++)
            -1 === Ae(o).indexOf(Ae(t[l])) && (o += " " + t[l]);
        e[n] = Ee(o)
    }, Ee = function(e) {
        return e.replace(r, "")
    }, Ae = function(e) {
        return " " + e + " "
    }, Fe = Date.now || function() {
        return +new Date
    }
        , Ce = function(e, t) {
        return e.frame - t.frame
    }, De = 0, He = 1, Ie = "down", Pe = -1, Ne = Fe(), Oe = 0, Ve = 0, ze = !1, qe = 0, Le = !1, Me = 0, $e = [];
    "function" == typeof define && define.amd ? define("skrollr", function() {
        return E
    }) : "undefined" != typeof module && module.exports ? module.exports = E : c.skrollr = E
}(window, document);
!function(u, r) {
    function s(e, t) {
        var i, s, n, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = (i = e.parentNode).name,
        !(!e.href || !s || "map" !== i.nodeName.toLowerCase()) && (!!(n = u("img[usemap=#" + s + "]")[0]) && o(n))) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a && e.href || t) && o(e)
    }
    function o(e) {
        return u.expr.filters.visible(e) && !u(e).parents().andSelf().filter(function() {
            return "hidden" === u.css(this, "visibility")
        }).length
    }
    var e, t, i = 0, n = /^ui-id-\d+$/;
    u.ui = u.ui || {},
    u.ui.version || (u.extend(u.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
        u.fn.extend({
            _focus: u.fn.focus,
            focus: function(t, i) {
                return "number" == typeof t ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        u(e).focus(),
                        i && i.call(e)
                    }, t)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var e;
                return e = u.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(u.css(this, "position")) && /(auto|scroll)/.test(u.css(this, "overflow") + u.css(this, "overflow-y") + u.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(u.css(this, "overflow") + u.css(this, "overflow-y") + u.css(this, "overflow-x"))
                }).eq(0),
                    /fixed/.test(this.css("position")) || !e.length ? u(document) : e
            },
            zIndex: function(e) {
                if (e !== r)
                    return this.css("zIndex", e);
                if (this.length)
                    for (var t, i, s = u(this[0]); s.length && s[0] !== document; ) {
                        if (("absolute" === (t = s.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(s.css("zIndex"), 10),
                            !isNaN(i) && 0 !== i))
                            return i;
                        s = s.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++i)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    n.test(this.id) && u(this).removeAttr("id")
                })
            }
        }),
        u.extend(u.expr[":"], {
            data: u.expr.createPseudo ? u.expr.createPseudo(function(t) {
                return function(e) {
                    return !!u.data(e, t)
                }
            }) : function(e, t, i) {
                return !!u.data(e, i[3])
            }
            ,
            focusable: function(e) {
                return s(e, !isNaN(u.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var t = u.attr(e, "tabindex")
                    , i = isNaN(t);
                return (i || 0 <= t) && s(e, !i)
            }
        }),
        u(function() {
            var e = document.body
                , t = e.appendChild(t = document.createElement("div"));
            t.offsetHeight,
                u.extend(t.style, {
                    minHeight: "100px",
                    height: "auto",
                    padding: 0,
                    borderWidth: 0
                }),
                u.support.minHeight = 100 === t.offsetHeight,
                u.support.selectstart = "onselectstart"in t,
                e.removeChild(t).style.display = "none"
        }),
    u("<a>").outerWidth(1).jquery || u.each(["Width", "Height"], function(e, i) {
        function s(e, t, i, s) {
            return u.each(n, function() {
                t -= parseFloat(u.css(e, "padding" + this)) || 0,
                i && (t -= parseFloat(u.css(e, "border" + this + "Width")) || 0),
                s && (t -= parseFloat(u.css(e, "margin" + this)) || 0)
            }),
                t
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
            , a = i.toLowerCase()
            , o = {
            innerWidth: u.fn.innerWidth,
            innerHeight: u.fn.innerHeight,
            outerWidth: u.fn.outerWidth,
            outerHeight: u.fn.outerHeight
        };
        u.fn["inner" + i] = function(e) {
            return e === r ? o["inner" + i].call(this) : this.each(function() {
                u(this).css(a, s(this, e) + "px")
            })
        }
            ,
            u.fn["outer" + i] = function(e, t) {
                return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                    u(this).css(a, s(this, e, !0, t) + "px")
                })
            }
    }),
    u("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (u.fn.removeData = (t = u.fn.removeData,
            function(e) {
                return arguments.length ? t.call(this, u.camelCase(e)) : t.call(this)
            }
    )),
        e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [],
        u.ui.ie = !!e.length,
        u.ui.ie6 = 6 === parseFloat(e[1], 10),
        u.fn.extend({
            disableSelection: function() {
                return this.bind((u.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }),
        u.extend(u.ui, {
            plugin: {
                add: function(e, t, i) {
                    var s, n = u.ui[e].prototype;
                    for (s in i)
                        n.plugins[s] = n.plugins[s] || [],
                            n.plugins[s].push([t, i[s]])
                },
                call: function(e, t, i) {
                    var s, n = e.plugins[t];
                    if (n && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                        for (s = 0; n.length > s; s++)
                            e.options[n[s][0]] && n[s][1].apply(e.element, i)
                }
            },
            contains: u.contains,
            hasScroll: function(e, t) {
                if ("hidden" === u(e).css("overflow"))
                    return !1;
                var i = t && "left" === t ? "scrollLeft" : "scrollTop"
                    , s = !1;
                return 0 < e[i] || (e[i] = 1,
                    s = 0 < e[i],
                    e[i] = 0,
                    s)
            },
            isOverAxis: function(e, t, i) {
                return t < e && e < t + i
            },
            isOver: function(e, t, i, s, n, a) {
                return u.ui.isOverAxis(e, i, n) && u.ui.isOverAxis(t, s, a)
            }
        }))
}(jQuery),
    function(l, d) {
        var i = 0
            , u = Array.prototype.slice
            , s = l.cleanData;
        l.cleanData = function(e) {
            for (var t, i = 0; null != (t = e[i]); i++)
                try {
                    l(t).triggerHandler("remove")
                } catch (e) {}
            s(e)
        }
            ,
            l.widget = function(e, i, o) {
                var t, s, n, a, u = e.split(".")[0];
                e = e.split(".")[1],
                    t = u + "-" + e,
                o || (o = i,
                    i = l.Widget),
                    l.expr[":"][t.toLowerCase()] = function(e) {
                        return !!l.data(e, t)
                    }
                    ,
                    l[u] = l[u] || {},
                    s = l[u][e],
                    n = l[u][e] = function(e, t) {
                        return this._createWidget ? (arguments.length && this._createWidget(e, t),
                            d) : new n(e,t)
                    }
                    ,
                    l.extend(n, s, {
                        version: o.version,
                        _proto: l.extend({}, o),
                        _childConstructors: []
                    }),
                    (a = new i).options = l.widget.extend({}, a.options),
                    l.each(o, function(t, s) {
                        var n, a;
                        l.isFunction(s) && (o[t] = (n = function() {
                                return i.prototype[t].apply(this, arguments)
                            }
                                ,
                                a = function(e) {
                                    return i.prototype[t].apply(this, e)
                                }
                                ,
                                function() {
                                    var e, t = this._super, i = this._superApply;
                                    return this._super = n,
                                        this._superApply = a,
                                        e = s.apply(this, arguments),
                                        this._super = t,
                                        this._superApply = i,
                                        e
                                }
                        ))
                    }),
                    n.prototype = l.widget.extend(a, {
                        widgetEventPrefix: s ? a.widgetEventPrefix : e
                    }, o, {
                        constructor: n,
                        namespace: u,
                        widgetName: e,
                        widgetBaseClass: t,
                        widgetFullName: t
                    }),
                    s ? (l.each(s._childConstructors, function(e, t) {
                        var i = t.prototype;
                        l.widget(i.namespace + "." + i.widgetName, n, t._proto)
                    }),
                        delete s._childConstructors) : i._childConstructors.push(n),
                    l.widget.bridge(e, n)
            }
            ,
            l.widget.extend = function(e) {
                for (var t, i, s = u.call(arguments, 1), n = 0, a = s.length; n < a; n++)
                    for (t in s[n])
                        i = s[n][t],
                        s[n].hasOwnProperty(t) && i !== d && (e[t] = l.isPlainObject(i) ? l.isPlainObject(e[t]) ? l.widget.extend({}, e[t], i) : l.widget.extend({}, i) : i);
                return e
            }
            ,
            l.widget.bridge = function(a, t) {
                var o = t.prototype.widgetFullName || a;
                l.fn[a] = function(i) {
                    var e = "string" == typeof i
                        , s = u.call(arguments, 1)
                        , n = this;
                    return i = !e && s.length ? l.widget.extend.apply(null, [i].concat(s)) : i,
                        e ? this.each(function() {
                            var e, t = l.data(this, o);
                            return t ? l.isFunction(t[i]) && "_" !== i.charAt(0) ? (e = t[i].apply(t, s)) !== t && e !== d ? (n = e && e.jquery ? n.pushStack(e.get()) : e,
                                !1) : d : l.error("no such method '" + i + "' for " + a + " widget instance") : l.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'")
                        }) : this.each(function() {
                            var e = l.data(this, o);
                            e ? e.option(i || {})._init() : l.data(this, o, new t(i,this))
                        }),
                        n
                }
            }
            ,
            l.Widget = function() {}
            ,
            l.Widget._childConstructors = [],
            l.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, t) {
                    t = l(t || this.defaultElement || this)[0],
                        this.element = l(t),
                        this.uuid = i++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.options = l.widget.extend({}, this.options, this._getCreateOptions(), e),
                        this.bindings = l(),
                        this.hoverable = l(),
                        this.focusable = l(),
                    t !== this && (l.data(t, this.widgetName, this),
                        l.data(t, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function(e) {
                                e.target === t && this.destroy()
                            }
                        }),
                        this.document = l(t.style ? t.ownerDocument : t.document || t),
                        this.window = l(this.document[0].defaultView || this.document[0].parentWindow)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                },
                _getCreateOptions: l.noop,
                _getCreateEventData: l.noop,
                _create: l.noop,
                _init: l.noop,
                destroy: function() {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(l.camelCase(this.widgetFullName)),
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")
                },
                _destroy: l.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, t) {
                    var i, s, n, a = e;
                    if (0 === arguments.length)
                        return l.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (a = {},
                                e = (i = e.split(".")).shift(),
                                i.length) {
                            for (s = a[e] = l.widget.extend({}, this.options[e]),
                                     n = 0; i.length - 1 > n; n++)
                                s[i[n]] = s[i[n]] || {},
                                    s = s[i[n]];
                            if (e = i.pop(),
                                t === d)
                                return s[e] === d ? null : s[e];
                            s[e] = t
                        } else {
                            if (t === d)
                                return this.options[e] === d ? null : this.options[e];
                            a[e] = t
                        }
                    return this._setOptions(a),
                        this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e)
                        this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return this.options[e] = t,
                    "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")),
                        this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _on: function(o, u, e) {
                    var r, h = this;
                    "boolean" != typeof o && (e = u,
                        u = o,
                        o = !1),
                        e ? (u = r = l(u),
                            this.bindings = this.bindings.add(u)) : (e = u,
                            u = this.element,
                            r = this.widget()),
                        l.each(e, function(e, t) {
                            function i() {
                                return o || !0 !== h.options.disabled && !l(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? h[t] : t).apply(h, arguments) : d
                            }
                            "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || l.guid++);
                            var s = e.match(/^(\w+)\s*(.*)$/)
                                , n = s[1] + h.eventNamespace
                                , a = s[2];
                            a ? r.delegate(a, n, i) : u.bind(n, i)
                        })
                },
                _off: function(e, t) {
                    t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        e.unbind(t).undelegate(t)
                },
                _delay: function(e, t) {
                    var i = this;
                    return setTimeout(function() {
                        return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                    }, t || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e),
                        this._on(e, {
                            mouseenter: function(e) {
                                l(e.currentTarget).addClass("ui-state-hover")
                            },
                            mouseleave: function(e) {
                                l(e.currentTarget).removeClass("ui-state-hover")
                            }
                        })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e),
                        this._on(e, {
                            focusin: function(e) {
                                l(e.currentTarget).addClass("ui-state-focus")
                            },
                            focusout: function(e) {
                                l(e.currentTarget).removeClass("ui-state-focus")
                            }
                        })
                },
                _trigger: function(e, t, i) {
                    var s, n, a = this.options[e];
                    if (i = i || {},
                            (t = l.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
                            t.target = this.element[0],
                            n = t.originalEvent)
                        for (s in n)
                            s in t || (t[s] = n[s]);
                    return this.element.trigger(t, i),
                        !(l.isFunction(a) && !1 === a.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented())
                }
            },
            l.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(a, o) {
                l.Widget.prototype["_" + a] = function(t, e, i) {
                    "string" == typeof e && (e = {
                        effect: e
                    });
                    var s, n = e ? !0 === e || "number" == typeof e ? o : e.effect || o : a;
                    "number" == typeof (e = e || {}) && (e = {
                        duration: e
                    }),
                        s = !l.isEmptyObject(e),
                        e.complete = i,
                    e.delay && t.delay(e.delay),
                        s && l.effects && (l.effects.effect[n] || !1 !== l.uiBackCompat && l.effects[n]) ? t[a](e) : n !== a && t[n] ? t[n](e.duration, e.easing, i) : t.queue(function(e) {
                            l(this)[a](),
                            i && i.call(t[0]),
                                e()
                        })
                }
            }),
        !1 !== l.uiBackCompat && (l.Widget.prototype._getCreateOptions = function() {
                return l.metadata && l.metadata.get(this.element[0])[this.widgetName]
            }
        )
    }(jQuery),
    function(n) {
        var a = !1;
        n(document).mouseup(function() {
            a = !1
        }),
            n.widget("ui.mouse", {
                version: "1.9.2",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName, function(e) {
                        return t._mouseDown(e)
                    }).bind("click." + this.widgetName, function(e) {
                        return !0 === n.data(e.target, t.widgetName + ".preventClickEvent") ? (n.removeData(e.target, t.widgetName + ".preventClickEvent"),
                            e.stopImmediatePropagation(),
                            !1) : void 0
                    }),
                        this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName),
                    this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(e) {
                    if (!a) {
                        this._mouseStarted && this._mouseUp(e),
                            this._mouseDownEvent = e;
                        var t = this
                            , i = 1 === e.which
                            , s = !("string" != typeof this.options.cancel || !e.target.nodeName) && n(e.target).closest(this.options.cancel).length;
                        return i && !s && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay,
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            t.mouseDelayMet = !0
                        }, this.options.delay)),
                            this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e),
                                !this._mouseStarted) ? e.preventDefault() : (!0 === n.data(e.target, this.widgetName + ".preventClickEvent") && n.removeData(e.target, this.widgetName + ".preventClickEvent"),
                                this._mouseMoveDelegate = function(e) {
                                    return t._mouseMove(e)
                                }
                                ,
                                this._mouseUpDelegate = function(e) {
                                    return t._mouseUp(e)
                                }
                                ,
                                n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                                e.preventDefault(),
                                a = !0)),
                            !0
                    }
                },
                _mouseMove: function(e) {
                    return !n.ui.ie || 9 <= document.documentMode || e.button ? this._mouseStarted ? (this._mouseDrag(e),
                        e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
                        this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                        !this._mouseStarted) : this._mouseUp(e)
                },
                _mouseUp: function(e) {
                    return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1,
                    e.target === this._mouseDownEvent.target && n.data(e.target, this.widgetName + ".preventClickEvent", !0),
                        this._mouseStop(e)),
                        !1
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
    }(jQuery),
    function(l) {
        l.widget("ui.slider", l.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var e, t, i = this.options, s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), n = [];
                for (this._keySliding = !1,
                         this._mouseSliding = !1,
                         this._animateOff = !0,
                         this._handleIndex = null,
                         this._detectOrientation(),
                         this._mouseInit(),
                         this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")),
                         this.range = l([]),
                     i.range && (!0 === i.range && (i.values || (i.values = [this._valueMin(), this._valueMin()]),
                     i.values.length && 2 !== i.values.length && (i.values = [i.values[0], i.values[0]])),
                         this.range = l("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === i.range || "max" === i.range ? " ui-slider-range-" + i.range : ""))),
                         t = i.values && i.values.length || 1,
                         e = s.length; e < t; e++)
                    n.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
                this.handles = s.add(l(n.join("")).appendTo(this.element)),
                    this.handle = this.handles.eq(0),
                    this.handles.add(this.range).filter("a").click(function(e) {
                        e.preventDefault()
                    }).mouseenter(function() {
                        i.disabled || l(this).addClass("ui-state-hover")
                    }).mouseleave(function() {
                        l(this).removeClass("ui-state-hover")
                    }).focus(function() {
                        i.disabled ? l(this).blur() : (l(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),
                            l(this).addClass("ui-state-focus"))
                    }).blur(function() {
                        l(this).removeClass("ui-state-focus")
                    }),
                    this.handles.each(function(e) {
                        l(this).data("ui-slider-handle-index", e)
                    }),
                    this._on(this.handles, {
                        keydown: function(e) {
                            var t, i, s, n = l(e.target).data("ui-slider-handle-index");
                            switch (e.keyCode) {
                                case l.ui.keyCode.HOME:
                                case l.ui.keyCode.END:
                                case l.ui.keyCode.PAGE_UP:
                                case l.ui.keyCode.PAGE_DOWN:
                                case l.ui.keyCode.UP:
                                case l.ui.keyCode.RIGHT:
                                case l.ui.keyCode.DOWN:
                                case l.ui.keyCode.LEFT:
                                    if (e.preventDefault(),
                                        !this._keySliding && (this._keySliding = !0,
                                            l(e.target).addClass("ui-state-active"),
                                        !1 === this._start(e, n)))
                                        return
                            }
                            switch (s = this.options.step,
                                t = i = this.options.values && this.options.values.length ? this.values(n) : this.value(),
                                e.keyCode) {
                                case l.ui.keyCode.HOME:
                                    i = this._valueMin();
                                    break;
                                case l.ui.keyCode.END:
                                    i = this._valueMax();
                                    break;
                                case l.ui.keyCode.PAGE_UP:
                                    i = this._trimAlignValue(t + (this._valueMax() - this._valueMin()) / 5);
                                    break;
                                case l.ui.keyCode.PAGE_DOWN:
                                    i = this._trimAlignValue(t - (this._valueMax() - this._valueMin()) / 5);
                                    break;
                                case l.ui.keyCode.UP:
                                case l.ui.keyCode.RIGHT:
                                    if (t === this._valueMax())
                                        return;
                                    i = this._trimAlignValue(t + s);
                                    break;
                                case l.ui.keyCode.DOWN:
                                case l.ui.keyCode.LEFT:
                                    if (t === this._valueMin())
                                        return;
                                    i = this._trimAlignValue(t - s)
                            }
                            this._slide(e, n, i)
                        },
                        keyup: function(e) {
                            var t = l(e.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1,
                                this._stop(e, t),
                                this._change(e, t),
                                l(e.target).removeClass("ui-state-active"))
                        }
                    }),
                    this._refreshValue(),
                    this._animateOff = !1
            },
            _destroy: function() {
                this.handles.remove(),
                    this.range.remove(),
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),
                    this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var t, i, s, n, a, o, u, r = this, h = this.options;
                return !h.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                },
                    this.elementOffset = this.element.offset(),
                    t = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    i = this._normValueFromMouse(t),
                    s = this._valueMax() - this._valueMin() + 1,
                    this.handles.each(function(e) {
                        var t = Math.abs(i - r.values(e));
                        t < s && (s = t,
                            n = l(this),
                            a = e)
                    }),
                !0 === h.range && this.values(1) === h.min && (a += 1,
                    n = l(this.handles[a])),
                !1 !== this._start(e, a) && (this._mouseSliding = !0,
                    this._handleIndex = a,
                    n.addClass("ui-state-active").focus(),
                    o = n.offset(),
                    u = !l(e.target).parents().andSelf().is(".ui-slider-handle"),
                    this._clickOffset = u ? {
                        left: 0,
                        top: 0
                    } : {
                        left: e.pageX - o.left - n.width() / 2,
                        top: e.pageY - o.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                    },
                this.handles.hasClass("ui-state-hover") || this._slide(e, a, i),
                    this._animateOff = !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(e) {
                var t = {
                    x: e.pageX,
                    y: e.pageY
                }
                    , i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i),
                    !1
            },
            _mouseStop: function(e) {
                return this.handles.removeClass("ui-state-active"),
                    this._mouseSliding = !1,
                    this._stop(e, this._handleIndex),
                    this._change(e, this._handleIndex),
                    this._handleIndex = null,
                    this._clickOffset = null,
                    this._animateOff = !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(e) {
                var t, i, s, n, a;
                return "horizontal" === this.orientation ? (t = this.elementSize.width,
                    i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height,
                    i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                1 < (s = i / t) && (s = 1),
                s < 0 && (s = 0),
                "vertical" === this.orientation && (s = 1 - s),
                    n = this._valueMax() - this._valueMin(),
                    a = this._valueMin() + s * n,
                    this._trimAlignValue(a)
            },
            _start: function(e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t),
                    i.values = this.values()),
                    this._trigger("start", e, i)
            },
            _slide: function(e, t, i) {
                var s, n, a;
                this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1),
                2 === this.options.values.length && !0 === this.options.range && (0 === t && s < i || 1 === t && i < s) && (i = s),
                i !== this.values(t) && ((n = this.values())[t] = i,
                    a = this._trigger("slide", e, {
                        handle: this.handles[t],
                        value: i,
                        values: n
                    }),
                    s = this.values(t ? 0 : 1),
                !1 !== a && this.values(t, i, !0))) : i !== this.value() && (!1 !== (a = this._trigger("slide", e, {
                    handle: this.handles[t],
                    value: i
                })) && this.value(i))
            },
            _stop: function(e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t),
                    i.values = this.values()),
                    this._trigger("stop", e, i)
            },
            _change: function(e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t),
                        i.values = this.values()),
                        this._trigger("change", e, i)
                }
            },
            value: function(e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e),
                    this._refreshValue(),
                    void this._change(null, 0)) : this._value()
            },
            values: function(e, t) {
                var i, s, n;
                if (1 < arguments.length)
                    return this.options.values[e] = this._trimAlignValue(t),
                        this._refreshValue(),
                        void this._change(null, e);
                if (!arguments.length)
                    return this._values();
                if (!l.isArray(e))
                    return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (i = this.options.values,
                         s = e,
                         n = 0; i.length > n; n += 1)
                    i[n] = this._trimAlignValue(s[n]),
                        this._change(null, n);
                this._refreshValue()
            },
            _setOption: function(e, t) {
                var i, s = 0;
                switch (l.isArray(this.options.values) && (s = this.options.values.length),
                    l.Widget.prototype._setOption.apply(this, arguments),
                    e) {
                    case "disabled":
                        t ? (this.handles.filter(".ui-state-focus").blur(),
                            this.handles.removeClass("ui-state-hover"),
                            this.handles.prop("disabled", !0),
                            this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1),
                            this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._change(null, 0),
                            this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0,
                                 this._refreshValue(),
                                 i = 0; i < s; i += 1)
                            this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._animateOff = !1
                }
            },
            _value: function() {
                var e = this.options.value;
                return this._trimAlignValue(e)
            },
            _values: function(e) {
                var t, i, s;
                if (arguments.length)
                    return t = this.options.values[e],
                        this._trimAlignValue(t);
                for (i = this.options.values.slice(),
                         s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            },
            _trimAlignValue: function(e) {
                if (this._valueMin() >= e)
                    return this._valueMin();
                if (e >= this._valueMax())
                    return this._valueMax();
                var t = 0 < this.options.step ? this.options.step : 1
                    , i = (e - this._valueMin()) % t
                    , s = e - i;
                return 2 * Math.abs(i) >= t && (s += 0 < i ? t : -t),
                    parseFloat(s.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var t, i, e, s, n, a = this.options.range, o = this.options, u = this, r = !this._animateOff && o.animate, h = {};
                this.options.values && this.options.values.length ? this.handles.each(function(e) {
                    i = (u.values(e) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100,
                        h["horizontal" === u.orientation ? "left" : "bottom"] = i + "%",
                        l(this).stop(1, 1)[r ? "animate" : "css"](h, o.animate),
                    !0 === u.options.range && ("horizontal" === u.orientation ? (0 === e && u.range.stop(1, 1)[r ? "animate" : "css"]({
                        left: i + "%"
                    }, o.animate),
                    1 === e && u.range[r ? "animate" : "css"]({
                        width: i - t + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    })) : (0 === e && u.range.stop(1, 1)[r ? "animate" : "css"]({
                        bottom: i + "%"
                    }, o.animate),
                    1 === e && u.range[r ? "animate" : "css"]({
                        height: i - t + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    }))),
                        t = i
                }) : (e = this.value(),
                    s = this._valueMin(),
                    n = this._valueMax(),
                    i = n !== s ? (e - s) / (n - s) * 100 : 0,
                    h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
                    this.handle.stop(1, 1)[r ? "animate" : "css"](h, o.animate),
                "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    width: i + "%"
                }, o.animate),
                "max" === a && "horizontal" === this.orientation && this.range[r ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }),
                "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    height: i + "%"
                }, o.animate),
                "max" === a && "vertical" === this.orientation && this.range[r ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))
            }
        })
    }(jQuery);
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
;
!function(s) {
    "function" == typeof define && define.amd ? define(["jquery"], s) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(t, i) {
            return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
                s(i),
                i
        }
        : s(jQuery)
}(function(g) {
    return g.fn.tilt = function(i) {
        var s = function() {
            this.ticking || (requestAnimationFrame(t.bind(this)),
                this.ticking = !0)
        }
            , e = function() {
            var t = this;
            void 0 !== this.timeout && clearTimeout(this.timeout),
                g(this).css({
                    transition: this.settings.speed + "ms " + this.settings.easing
                }),
            this.settings.glare && this.glareElement.css({
                transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
            }),
                this.timeout = setTimeout(function() {
                    g(t).css({
                        transition: ""
                    }),
                    t.settings.glare && t.glareElement.css({
                        transition: ""
                    })
                }, this.settings.speed)
        }
            , n = function(t) {
            this.ticking = !1,
                g(this).css({
                    "will-change": "transform"
                }),
                e.call(this),
                g(this).trigger("tilt.mouseEnter")
        }
            , a = function(t) {
            return void 0 === t && (t = {
                pageX: g(this).offset().left + g(this).outerWidth() / 2,
                pageY: g(this).offset().top + g(this).outerHeight() / 2
            }),
                {
                    x: t.pageX,
                    y: t.pageY
                }
        }
            , r = function(t) {
            this.mousePositions = a(t),
                s.call(this)
        }
            , o = function() {
            e.call(this),
                this.reset = !0,
                s.call(this),
                g(this).trigger("tilt.mouseLeave")
        }
            , l = function() {
            var t = g(this).outerWidth()
                , i = g(this).outerHeight()
                , s = g(this).offset().left
                , e = g(this).offset().top
                , n = (this.mousePositions.x - s) / t
                , a = (this.mousePositions.y - e) / i;
            return {
                tiltX: (this.settings.maxTilt / 2 - n * this.settings.maxTilt).toFixed(2),
                tiltY: (a * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                percentageX: 100 * n,
                percentageY: 100 * a,
                angle: Math.atan2(this.mousePositions.x - (s + t / 2), -(this.mousePositions.y - (e + i / 2))) * (180 / Math.PI)
            }
        }
            , t = function() {
            return this.transforms = l.call(this),
                this.reset ? (this.reset = !1,
                    g(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
                    void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
                        this.glareElement.css("opacity", "0")))) : (g(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
                this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
                    this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
                    g(this).trigger("change", [this.transforms]),
                    void (this.ticking = !1))
        }
            , h = function() {
            this.glareElement.css({
                width: "" + 2 * g(this).outerWidth(),
                height: "" + 2 * g(this).outerWidth()
            })
        };
        return g.fn.tilt.destroy = function() {
            g(this).each(function() {
                g(this).find(".js-tilt-glare").remove(),
                    g(this).css({
                        "will-change": "",
                        transform: ""
                    }),
                    g(this).off("mousemove mouseenter mouseleave")
            })
        }
            ,
            g.fn.tilt.getValues = function() {
                var t = [];
                return g(this).each(function() {
                    this.mousePositions = a.call(this),
                        t.push(l.call(this))
                }),
                    t
            }
            ,
            g.fn.tilt.reset = function() {
                g(this).each(function() {
                    var t = this;
                    this.mousePositions = a.call(this),
                        this.settings = g(this).data("settings"),
                        o.call(this),
                        setTimeout(function() {
                            t.reset = !1
                        }, this.settings.transition)
                })
            }
            ,
            this.each(function() {
                var t = this;
                this.settings = g.extend({
                    maxTilt: g(this).is("[data-tilt-max]") ? g(this).data("tilt-max") : 20,
                    perspective: g(this).is("[data-tilt-perspective]") ? g(this).data("tilt-perspective") : 300,
                    easing: g(this).is("[data-tilt-easing]") ? g(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                    scale: g(this).is("[data-tilt-scale]") ? g(this).data("tilt-scale") : "1",
                    speed: g(this).is("[data-tilt-speed]") ? g(this).data("tilt-speed") : "400",
                    transition: !g(this).is("[data-tilt-transition]") || g(this).data("tilt-transition"),
                    disableAxis: g(this).is("[data-tilt-disable-axis]") ? g(this).data("tilt-disable-axis") : null,
                    axis: g(this).is("[data-tilt-axis]") ? g(this).data("tilt-axis") : null,
                    reset: !g(this).is("[data-tilt-reset]") || g(this).data("tilt-reset"),
                    glare: !!g(this).is("[data-tilt-glare]") && g(this).data("tilt-glare"),
                    maxGlare: g(this).is("[data-tilt-maxglare]") ? g(this).data("tilt-maxglare") : 1
                }, i),
                null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
                    this.settings.disableAxis = this.settings.axis),
                    this.init = function() {
                        g(t).data("settings", t.settings),
                        t.settings.glare && function() {
                            var t = this.settings.glarePrerender;
                            t || g(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                                this.glareElementWrapper = g(this).find(".js-tilt-glare"),
                                this.glareElement = g(this).find(".js-tilt-glare-inner"),
                            t || (this.glareElementWrapper.css({
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                            }).css({
                                overflow: "hidden",
                                "pointer-events": "none"
                            }),
                                this.glareElement.css({
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                                    width: "" + 2 * g(this).outerWidth(),
                                    height: "" + 2 * g(this).outerWidth(),
                                    transform: "rotate(180deg) translate(-50%, -50%)",
                                    "transform-origin": "0% 0%",
                                    opacity: "0"
                                }))
                        }
                            .call(t),
                            function() {
                                g(this).on("mousemove", r),
                                    g(this).on("mouseenter", n),
                                this.settings.reset && g(this).on("mouseleave", o),
                                this.settings.glare && g(window).on("resize", h.bind(this))
                            }
                                .call(t)
                    }
                    ,
                    this.init()
            })
    }
        ,
        g("[data-tilt]").tilt(),
        !0
});
(function() {
        var e, n, t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
            , S = [].slice;
        e = this,
            n = function(c, o) {
                var e, l, s, a, n, u, f, i, h, r, d, p, y, v, w, g;
                return e = c(o),
                    i = 0 <= t.call(o, "ontouchstart"),
                    a = {
                        horizontal: {},
                        vertical: {}
                    },
                    f = {},
                    u = "waypoints-context-id",
                    d = "resize.waypoints",
                    p = "scroll.waypoints",
                    y = n = 1,
                    v = "waypoints-waypoint-ids",
                    w = "waypoint",
                    g = "waypoints",
                    l = function() {
                        function t(t) {
                            var e = this;
                            this.$element = t,
                                this.element = t[0],
                                this.didResize = !1,
                                this.didScroll = !1,
                                this.id = "context" + n++,
                                this.oldScroll = {
                                    x: t.scrollLeft(),
                                    y: t.scrollTop()
                                },
                                this.waypoints = {
                                    horizontal: {},
                                    vertical: {}
                                },
                                t.data(u, this.id),
                                f[this.id] = this,
                                t.bind(p, function() {
                                    var t;
                                    if (!e.didScroll && !i)
                                        return e.didScroll = !0,
                                            t = function() {
                                                return e.doScroll(),
                                                    e.didScroll = !1
                                            }
                                            ,
                                            o.setTimeout(t, c[g].settings.scrollThrottle)
                                }),
                                t.bind(d, function() {
                                    var t;
                                    if (!e.didResize)
                                        return e.didResize = !0,
                                            t = function() {
                                                return c[g]("refresh"),
                                                    e.didResize = !1
                                            }
                                            ,
                                            o.setTimeout(t, c[g].settings.resizeThrottle)
                                })
                        }
                        return t.prototype.doScroll = function() {
                            var t, r = this;
                            return t = {
                                horizontal: {
                                    newScroll: this.$element.scrollLeft(),
                                    oldScroll: this.oldScroll.x,
                                    forward: "right",
                                    backward: "left"
                                },
                                vertical: {
                                    newScroll: this.$element.scrollTop(),
                                    oldScroll: this.oldScroll.y,
                                    forward: "down",
                                    backward: "up"
                                }
                            },
                            !i || t.vertical.oldScroll && t.vertical.newScroll || c[g]("refresh"),
                                c.each(t, function(t, i) {
                                    var n, e, o;
                                    return o = [],
                                        e = i.newScroll > i.oldScroll,
                                        n = e ? i.forward : i.backward,
                                        c.each(r.waypoints[t], function(t, e) {
                                            var n, r;
                                            return i.oldScroll < (n = e.offset) && n <= i.newScroll ? o.push(e) : i.newScroll < (r = e.offset) && r <= i.oldScroll ? o.push(e) : void 0
                                        }),
                                        o.sort(function(t, e) {
                                            return t.offset - e.offset
                                        }),
                                    e || o.reverse(),
                                        c.each(o, function(t, e) {
                                            if (e.options.continuous || t === o.length - 1)
                                                return e.trigger([n])
                                        })
                                }),
                                this.oldScroll = {
                                    x: t.horizontal.newScroll,
                                    y: t.vertical.newScroll
                                }
                        }
                            ,
                            t.prototype.refresh = function() {
                                var t, e, n, r = this;
                                return n = c.isWindow(this.element),
                                    e = this.$element.offset(),
                                    this.doScroll(),
                                    t = {
                                        horizontal: {
                                            contextOffset: n ? 0 : e.left,
                                            contextScroll: n ? 0 : this.oldScroll.x,
                                            contextDimension: this.$element.width(),
                                            oldScroll: this.oldScroll.x,
                                            forward: "right",
                                            backward: "left",
                                            offsetProp: "left"
                                        },
                                        vertical: {
                                            contextOffset: n ? 0 : e.top,
                                            contextScroll: n ? 0 : this.oldScroll.y,
                                            contextDimension: n ? c[g]("viewportHeight") : this.$element.height(),
                                            oldScroll: this.oldScroll.y,
                                            forward: "down",
                                            backward: "up",
                                            offsetProp: "top"
                                        }
                                    },
                                    c.each(t, function(t, s) {
                                        return c.each(r.waypoints[t], function(t, e) {
                                            var n, r, i, o, l;
                                            if (n = e.options.offset,
                                                    i = e.offset,
                                                    r = c.isWindow(e.element) ? 0 : e.$element.offset()[s.offsetProp],
                                                    c.isFunction(n) ? n = n.apply(e.element) : "string" == typeof n && (n = parseFloat(n),
                                                    -1 < e.options.offset.indexOf("%") && (n = Math.ceil(s.contextDimension * n / 100))),
                                                    e.offset = r - s.contextOffset + s.contextScroll - n,
                                                (!e.options.onlyOnScroll || null == i) && e.enabled)
                                                return null !== i && i < (o = s.oldScroll) && o <= e.offset ? e.trigger([s.backward]) : null !== i && i > (l = s.oldScroll) && l >= e.offset ? e.trigger([s.forward]) : null === i && s.oldScroll >= e.offset ? e.trigger([s.forward]) : void 0
                                        })
                                    })
                            }
                            ,
                            t.prototype.checkEmpty = function() {
                                if (c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical))
                                    return this.$element.unbind([d, p].join(" ")),
                                        delete f[this.id]
                            }
                            ,
                            t
                    }(),
                    s = function() {
                        function t(t, e, n) {
                            var r, i;
                            "bottom-in-view" === (n = c.extend({}, c.fn[w].defaults, n)).offset && (n.offset = function() {
                                    var t;
                                    return t = c[g]("viewportHeight"),
                                    c.isWindow(e.element) || (t = e.$element.height()),
                                    t - c(this).outerHeight()
                                }
                            ),
                                this.$element = t,
                                this.element = t[0],
                                this.axis = n.horizontal ? "horizontal" : "vertical",
                                this.callback = n.handler,
                                this.context = e,
                                this.enabled = n.enabled,
                                this.id = "waypoints" + y++,
                                this.offset = null,
                                this.options = n,
                                e.waypoints[this.axis][this.id] = this,
                                a[this.axis][this.id] = this,
                                (r = null != (i = t.data(v)) ? i : []).push(this.id),
                                t.data(v, r)
                        }
                        return t.prototype.trigger = function(t) {
                            if (this.enabled)
                                return null != this.callback && this.callback.apply(this.element, t),
                                    this.options.triggerOnce ? this.destroy() : void 0
                        }
                            ,
                            t.prototype.disable = function() {
                                return this.enabled = !1
                            }
                            ,
                            t.prototype.enable = function() {
                                return this.context.refresh(),
                                    this.enabled = !0
                            }
                            ,
                            t.prototype.destroy = function() {
                                return delete a[this.axis][this.id],
                                    delete this.context.waypoints[this.axis][this.id],
                                    this.context.checkEmpty()
                            }
                            ,
                            t.getWaypointsByElement = function(t) {
                                var e, n;
                                return (n = c(t).data(v)) ? (e = c.extend({}, a.horizontal, a.vertical),
                                    c.map(n, function(t) {
                                        return e[t]
                                    })) : []
                            }
                            ,
                            t
                    }(),
                    r = {
                        init: function(t, i) {
                            return null == i && (i = {}),
                            null == i.handler && (i.handler = t),
                                this.each(function() {
                                    var t, e, n, r;
                                    return t = c(this),
                                        n = null != (r = i.context) ? r : c.fn[w].defaults.context,
                                    c.isWindow(n) || (n = t.closest(n)),
                                        n = c(n),
                                    (e = f[n.data(u)]) || (e = new l(n)),
                                        new s(t,e,i)
                                }),
                                c[g]("refresh"),
                                this
                        },
                        disable: function() {
                            return r._invoke(this, "disable")
                        },
                        enable: function() {
                            return r._invoke(this, "enable")
                        },
                        destroy: function() {
                            return r._invoke(this, "destroy")
                        },
                        prev: function(t, e) {
                            return r._traverse.call(this, t, e, function(t, e, n) {
                                if (0 < e)
                                    return t.push(n[e - 1])
                            })
                        },
                        next: function(t, e) {
                            return r._traverse.call(this, t, e, function(t, e, n) {
                                if (e < n.length - 1)
                                    return t.push(n[e + 1])
                            })
                        },
                        _traverse: function(e, t, n) {
                            var r, i;
                            return null == e && (e = "vertical"),
                            null == t && (t = o),
                                i = h.aggregate(t),
                                r = [],
                                this.each(function() {
                                    var t;
                                    return t = c.inArray(this, i[e]),
                                        n(r, t, i[e])
                                }),
                                this.pushStack(r)
                        },
                        _invoke: function(t, n) {
                            return t.each(function() {
                                var t;
                                return t = s.getWaypointsByElement(this),
                                    c.each(t, function(t, e) {
                                        return e[n](),
                                            !0
                                    })
                            }),
                                this
                        }
                    },
                    c.fn[w] = function() {
                        var t, e;
                        return e = arguments[0],
                            t = 2 <= arguments.length ? S.call(arguments, 1) : [],
                            r[e] ? r[e].apply(this, t) : c.isFunction(e) ? r.init.apply(this, arguments) : c.isPlainObject(e) ? r.init.apply(this, [null, e]) : e ? c.error("The " + e + " method does not exist in jQuery Waypoints.") : c.error("jQuery Waypoints needs a callback function or handler option.")
                    }
                    ,
                    c.fn[w].defaults = {
                        context: o,
                        continuous: !0,
                        enabled: !0,
                        horizontal: !1,
                        offset: 0,
                        triggerOnce: !1
                    },
                    h = {
                        refresh: function() {
                            return c.each(f, function(t, e) {
                                return e.refresh()
                            })
                        },
                        viewportHeight: function() {
                            var t;
                            return null != (t = o.innerHeight) ? t : e.height()
                        },
                        aggregate: function(t) {
                            var e, r, n;
                            return e = a,
                            t && (e = null != (n = f[c(t).data(u)]) ? n.waypoints : void 0),
                                e ? (r = {
                                    horizontal: [],
                                    vertical: []
                                },
                                    c.each(r, function(t, n) {
                                        return c.each(e[t], function(t, e) {
                                            return n.push(e)
                                        }),
                                            n.sort(function(t, e) {
                                                return t.offset - e.offset
                                            }),
                                            r[t] = c.map(n, function(t) {
                                                return t.element
                                            }),
                                            r[t] = c.unique(r[t])
                                    }),
                                    r) : []
                        },
                        above: function(t) {
                            return null == t && (t = o),
                                h._filter(t, "vertical", function(t, e) {
                                    return e.offset <= t.oldScroll.y
                                })
                        },
                        below: function(t) {
                            return null == t && (t = o),
                                h._filter(t, "vertical", function(t, e) {
                                    return e.offset > t.oldScroll.y
                                })
                        },
                        left: function(t) {
                            return null == t && (t = o),
                                h._filter(t, "horizontal", function(t, e) {
                                    return e.offset <= t.oldScroll.x
                                })
                        },
                        right: function(t) {
                            return null == t && (t = o),
                                h._filter(t, "horizontal", function(t, e) {
                                    return e.offset > t.oldScroll.x
                                })
                        },
                        enable: function() {
                            return h._invoke("enable")
                        },
                        disable: function() {
                            return h._invoke("disable")
                        },
                        destroy: function() {
                            return h._invoke("destroy")
                        },
                        extendFn: function(t, e) {
                            return r[t] = e
                        },
                        _invoke: function(n) {
                            var t;
                            return t = c.extend({}, a.vertical, a.horizontal),
                                c.each(t, function(t, e) {
                                    return e[n](),
                                        !0
                                })
                        },
                        _filter: function(t, e, n) {
                            var r, i;
                            return (r = f[c(t).data(u)]) ? (i = [],
                                c.each(r.waypoints[e], function(t, e) {
                                    if (n(r, e))
                                        return i.push(e)
                                }),
                                i.sort(function(t, e) {
                                    return t.offset - e.offset
                                }),
                                c.map(i, function(t) {
                                    return t.element
                                })) : []
                        }
                    },
                    c[g] = function() {
                        var t, e;
                        return e = arguments[0],
                            t = 2 <= arguments.length ? S.call(arguments, 1) : [],
                            h[e] ? h[e].apply(null, t) : h.aggregate.call(null, e)
                    }
                    ,
                    c[g].settings = {
                        resizeThrottle: 100,
                        scrollThrottle: 30
                    },
                    e.load(function() {
                        return c[g]("refresh")
                    })
            }
            ,
            "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(t) {
                return n(t, e)
            }) : n(e.jQuery, e)
    }
).call(this);
