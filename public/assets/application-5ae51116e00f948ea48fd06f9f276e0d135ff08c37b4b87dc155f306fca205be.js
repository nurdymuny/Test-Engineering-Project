/*!
 * jQuery JavaScript Library v1.12.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T19:56Z
 */
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length, n = fe.type(e);
        return "function" === n || fe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (fe.isFunction(t))return fe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return fe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (De.test(t))return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function (e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }

    function a(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function i(e) {
        var t = {};
        return fe.each(e.match(Ee) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (o(), fe.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Le, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Fe.test(n) ? fe.parseJSON(n) : n
                } catch (a) {
                }
                fe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function d(e, t, n, r) {
        if (_e(e)) {
            var a, i, o = fe.expando, s = e.nodeType, u = s ? fe.cache : e, l = s ? e[o] : e[o] && o;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)return l || (l = s ? e[o] = ne.pop() || fe.guid++ : o), u[l] || (u[l] = s ? {} : {toJSON: fe.noop}), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = fe.extend(u[l], t) : u[l].data = fe.extend(u[l].data, t)), i = u[l], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[fe.camelCase(t)] = n), "string" == typeof t ? (a = i[t], null == a && (a = i[fe.camelCase(t)])) : a = i, a
        }
    }

    function c(e, t, n) {
        if (_e(e)) {
            var r, a, i = e.nodeType, o = i ? fe.cache : e, s = i ? e[fe.expando] : fe.expando;
            if (o[s]) {
                if (t && (r = n ? o[s] : o[s].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in r ? t = [t] : (t = fe.camelCase(t), t = t in r ? [t] : t.split(" ")), a = t.length;
                    for (; a--;)delete r[t[a]];
                    if (n ? !l(r) : !fe.isEmptyObject(r))return
                }
                (n || (delete o[s].data, l(o[s]))) && (i ? fe.cleanData([e], !0) : ce.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
            }
        }
    }

    function h(e, t, n, r) {
        var a, i = 1, o = 20, s = r ? function () {
            return r.cur()
        } : function () {
            return fe.css(e, t, "")
        }, u = s(), l = n && n[3] || (fe.cssNumber[t] ? "" : "px"), d = (fe.cssNumber[t] || "px" !== l && +u) && He.exec(fe.css(e, t));
        if (d && d[3] !== l) {
            l = l || d[3], n = n || [], d = +u || 1;
            do i = i || ".5", d /= i, fe.style(e, t, d + l); while (i !== (i = s() / u) && 1 !== i && --o)
        }
        return n && (d = +d || +u || 0, a = n[1] ? d + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = d, r.end = a)), a
    }

    function f(e) {
        var t = We.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        var n, r, a = 0, i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!i)for (i = [], n = e.childNodes || e; null != (r = n[a]); a++)!t || fe.nodeName(r, t) ? i.push(r) : fe.merge(i, p(r, t));
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], i) : i
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)fe._data(n, "globalEval", !t || fe._data(t[r], "globalEval"))
    }

    function y(e) {
        Re.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t, n, r, a) {
        for (var i, o, s, u, l, d, c, h = e.length, g = f(t), v = [], b = 0; h > b; b++)if (o = e[b], o || 0 === o)if ("object" === fe.type(o))fe.merge(v, o.nodeType ? [o] : o); else if (Ve.test(o)) {
            for (u = u || g.appendChild(t.createElement("div")), l = (Ie.exec(o) || ["", ""])[1].toLowerCase(), c = Be[l] || Be._default, u.innerHTML = c[1] + fe.htmlPrefilter(o) + c[2], i = c[0]; i--;)u = u.lastChild;
            if (!ce.leadingWhitespace && qe.test(o) && v.push(t.createTextNode(qe.exec(o)[0])), !ce.tbody)for (o = "table" !== l || Qe.test(o) ? "<table>" !== c[1] || Qe.test(o) ? 0 : u : u.firstChild, i = o && o.childNodes.length; i--;)fe.nodeName(d = o.childNodes[i], "tbody") && !d.childNodes.length && o.removeChild(d);
            for (fe.merge(v, u.childNodes), u.textContent = ""; u.firstChild;)u.removeChild(u.firstChild);
            u = g.lastChild
        } else v.push(t.createTextNode(o));
        for (u && g.removeChild(u), ce.appendChecked || fe.grep(p(v, "input"), y), b = 0; o = v[b++];)if (r && fe.inArray(o, r) > -1)a && a.push(o); else if (s = fe.contains(o.ownerDocument, o), u = p(g.appendChild(o), "script"), s && m(u), n)for (i = 0; o = u[i++];)ze.test(o.type || "") && n.push(o);
        return u = null, g
    }

    function v() {
        return !0
    }

    function b() {
        return !1
    }

    function k() {
        try {
            return re.activeElement
        } catch (e) {
        }
    }

    function w(e, t, n, r, a, i) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t)w(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), a === !1)a = b; else if (!a)return e;
        return 1 === i && (o = a, a = function (e) {
            return fe().off(e), o.apply(this, arguments)
        }, a.guid = o.guid || (o.guid = fe.guid++)), e.each(function () {
            fe.event.add(this, t, a, r, n)
        })
    }

    function S(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function D(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = at.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function T(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, r, a, i = fe._data(e), o = fe._data(t, i), s = i.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)for (r = 0, a = s[n].length; a > r; r++)fe.event.add(t, n, s[n][r])
            }
            o.data && (o.data = fe.extend({}, o.data))
        }
    }

    function M(e, t) {
        var n, r, a;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ce.noCloneEvent && t[fe.expando]) {
                a = fe._data(t);
                for (r in a.events)fe.removeEvent(t, r, a.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (D(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Re.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(e, t, n, r) {
        t = ie.apply([], t);
        var a, i, o, s, u, l, d = 0, c = e.length, h = c - 1, f = t[0], m = fe.isFunction(f);
        if (m || c > 1 && "string" == typeof f && !ce.checkClone && rt.test(f))return e.each(function (a) {
            var i = e.eq(a);
            m && (t[0] = f.call(this, a, i.html())), C(i, t, n, r)
        });
        if (c && (l = g(t, e[0].ownerDocument, !1, e, r), a = l.firstChild, 1 === l.childNodes.length && (l = a), a || r)) {
            for (s = fe.map(p(l, "script"), D), o = s.length; c > d; d++)i = l, d !== h && (i = fe.clone(i, !0, !0), o && fe.merge(s, p(i, "script"))), n.call(e[d], i, d);
            if (o)for (u = s[s.length - 1].ownerDocument, fe.map(s, x), d = 0; o > d; d++)i = s[d], ze.test(i.type || "") && !fe._data(i, "globalEval") && fe.contains(u, i) && (i.src ? fe._evalUrl && fe._evalUrl(i.src) : fe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(it, "")));
            l = a = null
        }
        return e
    }

    function j(e, t, n) {
        for (var r, a = t ? fe.filter(t, e) : e, i = 0; null != (r = a[i]); i++)n || 1 !== r.nodeType || fe.cleanData(p(r)), r.parentNode && (n && fe.contains(r.ownerDocument, r) && m(p(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function E(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body), r = fe.css(n[0], "display");
        return n.detach(), r
    }

    function A(e) {
        var t = re, n = lt[e];
        return n || (n = E(e, t), "none" !== n && n || (ut = (ut || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = E(e, t), ut.detach()), lt[e] = n), n
    }

    function N(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function _(e) {
        if (e in xt)return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Dt.length; n--;)if (e = Dt[n] + t, e in xt)return e
    }

    function F(e, t) {
        for (var n, r, a, i = [], o = 0, s = e.length; s > o; o++)r = e[o], r.style && (i[o] = fe._data(r, "olddisplay"), n = r.style.display, t ? (i[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Je(r) && (i[o] = fe._data(r, "olddisplay", A(r.nodeName)))) : (a = Je(r), (n && "none" !== n || !a) && fe._data(r, "olddisplay", a ? n : fe.css(r, "display"))));
        for (o = 0; s > o; o++)r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[o] || "" : "none"));
        return e
    }

    function L(e, t, n) {
        var r = kt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function O(e, t, n, r, a) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2)"margin" === n && (o += fe.css(e, n + Pe[i], !0, a)), r ? ("content" === n && (o -= fe.css(e, "padding" + Pe[i], !0, a)), "margin" !== n && (o -= fe.css(e, "border" + Pe[i] + "Width", !0, a))) : (o += fe.css(e, "padding" + Pe[i], !0, a), "padding" !== n && (o += fe.css(e, "border" + Pe[i] + "Width", !0, a)));
        return o
    }

    function H(t, n, r) {
        var a = !0, i = "width" === n ? t.offsetWidth : t.offsetHeight, o = pt(t), s = ce.boxSizing && "border-box" === fe.css(t, "boxSizing", !1, o);
        if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (i = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= i || null == i) {
            if (i = mt(t, n, o), (0 > i || null == i) && (i = t.style[n]), ct.test(i))return i;
            a = s && (ce.boxSizingReliable() || i === t.style[n]), i = parseFloat(i) || 0
        }
        return i + O(t, n, r || (s ? "border" : "content"), a, o) + "px"
    }

    function P(e, t, n, r, a) {
        return new P.prototype.init(e, t, n, r, a)
    }

    function J() {
        return e.setTimeout(function () {
            Tt = void 0
        }), Tt = fe.now()
    }

    function U(e, t) {
        var n, r = {height: e}, a = 0;
        for (t = t ? 1 : 0; 4 > a; a += 2 - t)n = Pe[a], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function R(e, t, n) {
        for (var r, a = (q.tweeners[t] || []).concat(q.tweeners["*"]), i = 0, o = a.length; o > i; i++)if (r = a[i].call(n, t, e))return r
    }

    function I(e, t, n) {
        var r, a, i, o, s, u, l, d, c = this, h = {}, f = e.style, p = e.nodeType && Je(e), m = fe._data(e, "fxshow");
        n.queue || (s = fe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, c.always(function () {
            c.always(function () {
                s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = fe.css(e, "display"), d = "none" === l ? fe._data(e, "olddisplay") || A(e.nodeName) : l, "inline" === d && "none" === fe.css(e, "float") && (ce.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ce.shrinkWrapBlocks() || c.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)if (a = t[r], Ct.exec(a)) {
            if (delete t[r], i = i || "toggle" === a, a === (p ? "hide" : "show")) {
                if ("show" !== a || !m || void 0 === m[r])continue;
                p = !0
            }
            h[r] = m && m[r] || fe.style(e, r)
        } else l = void 0;
        if (fe.isEmptyObject(h))"inline" === ("none" === l ? A(e.nodeName) : l) && (f.display = l); else {
            m ? "hidden"in m && (p = m.hidden) : m = fe._data(e, "fxshow", {}), i && (m.hidden = !p), p ? fe(e).show() : c.done(function () {
                fe(e).hide()
            }), c.done(function () {
                var t;
                fe._removeData(e, "fxshow");
                for (t in h)fe.style(e, t, h[t])
            });
            for (r in h)o = R(p ? m[r] : 0, r, c), r in m || (m[r] = o.start, p && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function z(e, t) {
        var n, r, a, i, o;
        for (n in e)if (r = fe.camelCase(n), a = t[r], i = e[n], fe.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), o = fe.cssHooks[r], o && "expand"in o) {
            i = o.expand(i), delete e[r];
            for (n in i)n in e || (e[n] = i[n], t[n] = a)
        } else t[r] = a
    }

    function q(e, t, n) {
        var r, a, i = 0, o = q.prefilters.length, s = fe.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a)return !1;
            for (var t = Tt || J(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, u = l.tweens.length; u > o; o++)l.tweens[o].run(i);
            return s.notifyWith(e, [l, i, n]), 1 > i && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {specialEasing: {}, easing: fe.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Tt || J(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = fe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (a)return this;
                for (a = !0; r > n; n++)l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), d = l.props;
        for (z(d, l.opts.specialEasing); o > i; i++)if (r = q.prefilters[i].call(l, e, d, l.opts))return fe.isFunction(r.stop) && (fe._queueHooks(l.elem, l.opts.queue).stop = fe.proxy(r.stop, r)), r;
        return fe.map(d, R, l), fe.isFunction(l.opts.start) && l.opts.start.call(e, l), fe.fx.timer(fe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function W(e) {
        return fe.attr(e, "class") || ""
    }

    function B(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, a = 0, i = t.toLowerCase().match(Ee) || [];
            if (fe.isFunction(n))for (; r = i[a++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function V(e, t, n, r) {
        function a(s) {
            var u;
            return i[s] = !0, fe.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }

        var i = {}, o = e === Gt;
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Q(e, t) {
        var n, r, a = fe.ajaxSettings.flatOptions || {};
        for (r in t)void 0 !== t[r] && ((a[r] ? e : n || (n = {}))[r] = t[r]);
        return n && fe.extend(!0, e, n), e
    }

    function Y(e, t, n) {
        for (var r, a, i, o, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)for (o in s)if (s[o] && s[o].test(a)) {
            u.unshift(o);
            break
        }
        if (u[0]in n)i = u[0]; else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break
                }
                r || (r = o)
            }
            i = i || r
        }
        return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
    }

    function $(e, t, n, r) {
        var a, i, o, s, u, l = {}, d = e.dataTypes.slice();
        if (d[1])for (o in e.converters)l[o.toLowerCase()] = e.converters[o];
        for (i = d.shift(); i;)if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = d.shift())if ("*" === i)i = u; else if ("*" !== u && u !== i) {
            if (o = l[u + " " + i] || l["* " + i], !o)for (a in l)if (s = a.split(" "), s[1] === i && (o = l[u + " " + s[0]] || l["* " + s[0]])) {
                o === !0 ? o = l[a] : l[a] !== !0 && (i = s[0], d.unshift(s[1]));
                break
            }
            if (o !== !0)if (o && e["throws"])t = o(t); else try {
                t = o(t)
            } catch (c) {
                return {state: "parsererror", error: o ? c : "No conversion from " + u + " to " + i}
            }
        }
        return {state: "success", data: t}
    }

    function X(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }

    function G(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === X(e) || "hidden" === e.type)return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(e, t, n, r) {
        var a;
        if (fe.isArray(t))fe.each(t, function (t, a) {
            n || nn.test(e) ? r(e, a) : K(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, r)
        }); else if (n || "object" !== fe.type(t))r(e, t); else for (a in t)K(e + "[" + a + "]", t[a], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var ne = [], re = e.document, ae = ne.slice, ie = ne.concat, oe = ne.push, se = ne.indexOf, ue = {}, le = ue.toString, de = ue.hasOwnProperty, ce = {}, he = "1.12.0", fe = function (e, t) {
        return new fe.fn.init(e, t)
    }, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ye = /-([\da-z])/gi, ge = function (e, t) {
        return t.toUpperCase()
    };
    fe.fn = fe.prototype = {
        jquery: he, constructor: fe, selector: "", length: 0, toArray: function () {
            return ae.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ae.call(this)
        }, pushStack: function (e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return fe.each(this, e)
        }, map: function (e) {
            return this.pushStack(fe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(ae.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: oe, sort: ne.sort, splice: ne.splice
    }, fe.extend = fe.fn.extend = function () {
        var e, t, n, r, a, i, o = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || fe.isFunction(o) || (o = {}), s === u && (o = this, s--); u > s; s++)if (null != (a = arguments[s]))for (r in a)e = o[r], n = a[r], o !== n && (l && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, i = e && fe.isArray(e) ? e : []) : i = e && fe.isPlainObject(e) ? e : {}, o[r] = fe.extend(l, i, n)) : void 0 !== n && (o[r] = n));
        return o
    }, fe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === fe.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === fe.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))return !1;
            try {
                if (e.constructor && !de.call(e, "constructor") && !de.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            if (!ce.ownFirst)for (t in e)return de.call(e, t);
            for (t in e);
            return void 0 === t || de.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && fe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(me, "ms-").replace(ye, ge)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var r, a = 0;
            if (n(e))for (r = e.length; r > a && t.call(e[a], a, e[a]) !== !1; a++); else for (a in e)if (t.call(e[a], a, e[a]) === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(pe, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? fe.merge(r, "string" == typeof e ? [e] : e) : oe.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (se)return se.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, a = e.length; n > r;)e[a++] = t[r++];
            if (n !== n)for (; void 0 !== t[r];)e[a++] = t[r++];
            return e.length = a, e
        }, grep: function (e, t, n) {
            for (var r, a = [], i = 0, o = e.length, s = !n; o > i; i++)r = !t(e[i], i), r !== s && a.push(e[i]);
            return a
        }, map: function (e, t, r) {
            var a, i, o = 0, s = [];
            if (n(e))for (a = e.length; a > o; o++)i = t(e[o], o, r), null != i && s.push(i); else for (o in e)i = t(e[o], o, r), null != i && s.push(i);
            return ie.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, a;
            return "string" == typeof t && (a = e[t], t = e, e = a), fe.isFunction(e) ? (n = ae.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(ae.call(arguments)))
            }, r.guid = e.guid = e.guid || fe.guid++, r) : void 0
        }, now: function () {
            return +new Date
        }, support: ce
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
        function (e) {
            function t(e, t, n, r) {
                var a, i, o, s, u, l, c, f, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
                if (!r && ((t ? t.ownerDocument || t : R) !== _ && N(t), t = t || _, L)) {
                    if (11 !== m && (l = ge.exec(e)))if (a = l[1]) {
                        if (9 === m) {
                            if (!(o = t.getElementById(a)))return n;
                            if (o.id === a)return n.push(o), n
                        } else if (p && (o = p.getElementById(a)) && J(t, o) && o.id === a)return n.push(o), n
                    } else {
                        if (l[2])return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return K.apply(n, t.getElementsByClassName(a)), n
                    }
                    if (w.qsa && !B[e + " "] && (!O || !O.test(e))) {
                        if (1 !== m)p = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = U), c = T(e), i = c.length, u = he.test(s) ? "#" + s : "[id='" + s + "']"; i--;)c[i] = u + " " + h(c[i]);
                            f = c.join(","), p = ve.test(e) && d(t.parentNode) || t
                        }
                        if (f)try {
                            return K.apply(n, p.querySelectorAll(f)), n
                        } catch (y) {
                        } finally {
                            s === U && t.removeAttribute("id")
                        }
                    }
                }
                return C(e.replace(se, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r
                }

                var t = [];
                return e
            }

            function r(e) {
                return e[U] = !0, e
            }

            function a(e) {
                var t = _.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function i(e, t) {
                for (var n = e.split("|"), r = n.length; r--;)S.attrHandle[n[r]] = t
            }

            function o(e, t) {
                var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                if (r)return r;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return r(function (t) {
                    return t = +t, r(function (n, r) {
                        for (var a, i = e([], n.length, t), o = i.length; o--;)n[a = i[o]] && (n[a] = !(r[a] = n[a]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function c() {
            }

            function h(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
                return r
            }

            function f(e, t, n) {
                var r = t.dir, a = n && "parentNode" === r, i = z++;
                return t.first ? function (t, n, i) {
                    for (; t = t[r];)if (1 === t.nodeType || a)return e(t, n, i)
                } : function (t, n, o) {
                    var s, u, l, d = [I, i];
                    if (o) {
                        for (; t = t[r];)if ((1 === t.nodeType || a) && e(t, n, o))return !0
                    } else for (; t = t[r];)if (1 === t.nodeType || a) {
                        if (l = t[U] || (t[U] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === I && s[1] === i)return d[2] = s[2];
                        if (u[r] = d, d[2] = e(t, n, o))return !0
                    }
                }
            }

            function p(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var a = e.length; a--;)if (!e[a](t, n, r))return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var a = 0, i = n.length; i > a; a++)t(e, n[a], r);
                return r
            }

            function y(e, t, n, r, a) {
                for (var i, o = [], s = 0, u = e.length, l = null != t; u > s; s++)(i = e[s]) && (!n || n(i, r, a)) && (o.push(i), l && t.push(s));
                return o
            }

            function g(e, t, n, a, i, o) {
                return a && !a[U] && (a = g(a)), i && !i[U] && (i = g(i, o)), r(function (r, o, s, u) {
                    var l, d, c, h = [], f = [], p = o.length, g = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? g : y(g, h, e, s, u), b = n ? i || (r ? e : p || a) ? [] : o : v;
                    if (n && n(v, b, s, u), a)for (l = y(b, f), a(l, [], s, u), d = l.length; d--;)(c = l[d]) && (b[f[d]] = !(v[f[d]] = c));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (l = [], d = b.length; d--;)(c = b[d]) && l.push(v[d] = c);
                                i(null, b = [], l, u)
                            }
                            for (d = b.length; d--;)(c = b[d]) && (l = i ? ee(r, c) : h[d]) > -1 && (r[l] = !(o[l] = c))
                        }
                    } else b = y(b === o ? b.splice(p, b.length) : b), i ? i(null, o, b, u) : K.apply(o, b)
                })
            }

            function v(e) {
                for (var t, n, r, a = e.length, i = S.relative[e[0].type], o = i || S.relative[" "], s = i ? 1 : 0, u = f(function (e) {
                    return e === t
                }, o, !0), l = f(function (e) {
                    return ee(t, e) > -1
                }, o, !0), d = [function (e, n, r) {
                    var a = !i && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, a
                }]; a > s; s++)if (n = S.relative[e[s].type])d = [f(p(d), n)]; else {
                    if (n = S.filter[e[s].type].apply(null, e[s].matches), n[U]) {
                        for (r = ++s; a > r && !S.relative[e[r].type]; r++);
                        return g(s > 1 && p(d), s > 1 && h(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, r > s && v(e.slice(s, r)), a > r && v(e = e.slice(r)), a > r && h(e))
                    }
                    d.push(n)
                }
                return p(d)
            }

            function b(e, n) {
                var a = n.length > 0, i = e.length > 0, o = function (r, o, s, u, l) {
                    var d, c, h, f = 0, p = "0", m = r && [], g = [], v = j, b = r || i && S.find.TAG("*", l), k = I += null == v ? 1 : Math.random() || .1, w = b.length;
                    for (l && (j = o === _ || o || l); p !== w && null != (d = b[p]); p++) {
                        if (i && d) {
                            for (c = 0, o || d.ownerDocument === _ || (N(d), s = !L); h = e[c++];)if (h(d, o || _, s)) {
                                u.push(d);
                                break
                            }
                            l && (I = k)
                        }
                        a && ((d = !h && d) && f--, r && m.push(d))
                    }
                    if (f += p, a && p !== f) {
                        for (c = 0; h = n[c++];)h(m, g, o, s);
                        if (r) {
                            if (f > 0)for (; p--;)m[p] || g[p] || (g[p] = X.call(u));
                            g = y(g)
                        }
                        K.apply(u, g), l && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (I = k, j = v), m
                };
                return a ? r(o) : o
            }

            var k, w, S, D, x, T, M, C, j, E, A, N, _, F, L, O, H, P, J, U = "sizzle" + 1 * new Date, R = e.document, I = 0, z = 0, q = n(), W = n(), B = n(), V = function (e, t) {
                return e === t && (A = !0), 0
            }, Q = 1 << 31, Y = {}.hasOwnProperty, $ = [], X = $.pop, G = $.push, K = $.push, Z = $.slice, ee = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ae = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", oe = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), ce = new RegExp(ie), he = new RegExp("^" + re + "$"), fe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, be = /'|\\/g, ke = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, Se = function () {
                N()
            };
            try {
                K.apply($ = Z.call(R.childNodes), R.childNodes), $[R.childNodes.length].nodeType
            } catch (De) {
                K = {
                    apply: $.length ? function (e, t) {
                        G.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, x = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, N = t.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : R;
                return r !== _ && 9 === r.nodeType && r.documentElement ? (_ = r, F = _.documentElement, L = !x(_), (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), w.attributes = a(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = a(function (e) {
                    return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ye.test(_.getElementsByClassName), w.getById = a(function (e) {
                    return F.appendChild(e).id = U, !_.getElementsByName || !_.getElementsByName(U).length
                }), w.getById ? (S.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, S.filter.ID = function (e) {
                    var t = e.replace(ke, we);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete S.find.ID, S.filter.ID = function (e) {
                    var t = e.replace(ke, we);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), S.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [], a = 0, i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[a++];)1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, S.find.CLASS = w.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
                    }, H = [], O = [], (w.qsa = ye.test(_.querySelectorAll)) && (a(function (e) {
                    F.appendChild(e).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + U + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + U + "+*").length || O.push(".#.+[+~]")
                }), a(function (e) {
                    var t = _.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = ye.test(P = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && a(function (e) {
                    w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", ie)
                }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), t = ye.test(F.compareDocumentPosition), J = t || ye.test(F.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, V = t ? function (e, t) {
                    if (e === t)return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === R && J(R, e) ? -1 : t === _ || t.ownerDocument === R && J(R, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return A = !0, 0;
                    var n, r = 0, a = e.parentNode, i = t.parentNode, s = [e], u = [t];
                    if (!a || !i)return e === _ ? -1 : t === _ ? 1 : a ? -1 : i ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                    if (a === i)return o(e, t);
                    for (n = e; n = n.parentNode;)s.unshift(n);
                    for (n = t; n = n.parentNode;)u.unshift(n);
                    for (; s[r] === u[r];)r++;
                    return r ? o(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0
                }, _) : _
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== _ && N(e), n = n.replace(de, "='$1']"), w.matchesSelector && L && !B[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n)))try {
                    var r = P.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                } catch (a) {
                }
                return t(n, _, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== _ && N(e), J(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== _ && N(e);
                var n = S.attrHandle[t.toLowerCase()], r = n && Y.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                return void 0 !== r ? r : w.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], r = 0, a = 0;
                if (A = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(V), A) {
                    for (; t = e[a++];)t === e[a] && (r = n.push(a));
                    for (; r--;)e.splice(n[r], 1)
                }
                return E = null, e
            }, D = t.getText = function (e) {
                var t, n = "", r = 0, a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += D(e)
                    } else if (3 === a || 4 === a)return e.nodeValue
                } else for (; t = e[r++];)n += D(t);
                return n
            }, S = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ke, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ke, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ke, we).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = q[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, r) {
                        return function (a) {
                            var i = t.attr(a, e);
                            return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    }, CHILD: function (e, t, n, r, a) {
                        var i = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                        return 1 === r && 0 === a ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var l, d, c, h, f, p, m = i !== o ? "nextSibling" : "previousSibling", y = t.parentNode, g = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
                            if (y) {
                                if (i) {
                                    for (; m;) {
                                        for (h = t; h = h[m];)if (s ? h.nodeName.toLowerCase() === g : 1 === h.nodeType)return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [o ? y.firstChild : y.lastChild], o && v) {
                                    for (h = y, c = h[U] || (h[U] = {}), d = c[h.uniqueID] || (c[h.uniqueID] = {}), l = d[e] || [], f = l[0] === I && l[1], b = f && l[2], h = f && y.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)if (1 === h.nodeType && ++b && h === t) {
                                        d[e] = [I, f, b];
                                        break
                                    }
                                } else if (v && (h = t, c = h[U] || (h[U] = {}), d = c[h.uniqueID] || (c[h.uniqueID] = {}), l = d[e] || [], f = l[0] === I && l[1], b = f), b === !1)for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++b || (v && (c = h[U] || (h[U] = {}), d = c[h.uniqueID] || (c[h.uniqueID] = {}), d[e] = [I, b]), h !== t)););
                                return b -= a, b === r || b % r === 0 && b / r >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var a, i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return i[U] ? i(n) : i.length > 1 ? (a = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                            for (var r, a = i(e, n), o = a.length; o--;)r = ee(e, a[o]), e[r] = !(t[r] = a[o])
                        }) : function (e) {
                            return i(e, 0, a)
                        }) : i
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [], n = [], a = M(e.replace(se, "$1"));
                        return a[U] ? r(function (e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function (e, r, i) {
                            return t[0] = e, a(t, null, i, n), t[0] = null, !n.pop()
                        }
                    }), has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: r(function (e) {
                        return e = e.replace(ke, we), function (t) {
                            return (t.textContent || t.innerText || D(t)).indexOf(e) > -1
                        }
                    }), lang: r(function (e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ke, we).toLowerCase(), function (t) {
                            var n;
                            do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === F
                    }, focus: function (e) {
                        return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !S.pseudos.empty(e)
                    }, header: function (e) {
                        return me.test(e.nodeName)
                    }, input: function (e) {
                        return pe.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (e, t) {
                        return [t - 1]
                    }), eq: l(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: l(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e
                    }), odd: l(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                        return e
                    }), gt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                        return e
                    })
                }
            }, S.pseudos.nth = S.pseudos.eq;
            for (k in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})S.pseudos[k] = s(k);
            for (k in{submit: !0, reset: !0})S.pseudos[k] = u(k);
            return c.prototype = S.filters = S.pseudos, S.setFilters = new c, T = t.tokenize = function (e, n) {
                var r, a, i, o, s, u, l, d = W[e + " "];
                if (d)return n ? 0 : d.slice(0);
                for (s = e, u = [], l = S.preFilter; s;) {
                    (!r || (a = ue.exec(s))) && (a && (s = s.slice(a[0].length) || s), u.push(i = [])), r = !1, (a = le.exec(s)) && (r = a.shift(), i.push({
                        value: r,
                        type: a[0].replace(se, " ")
                    }), s = s.slice(r.length));
                    for (o in S.filter)!(a = fe[o].exec(s)) || l[o] && !(a = l[o](a)) || (r = a.shift(), i.push({
                        value: r,
                        type: o,
                        matches: a
                    }), s = s.slice(r.length));
                    if (!r)break
                }
                return n ? s.length : s ? t.error(e) : W(e, u).slice(0)
            }, M = t.compile = function (e, t) {
                var n, r = [], a = [], i = B[e + " "];
                if (!i) {
                    for (t || (t = T(e)), n = t.length; n--;)i = v(t[n]), i[U] ? r.push(i) : a.push(i);
                    i = B(e, b(a, r)), i.selector = e
                }
                return i
            }, C = t.select = function (e, t, n, r) {
                var a, i, o, s, u, l = "function" == typeof e && e, c = !r && T(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (o = i[0]).type && w.getById && 9 === t.nodeType && L && S.relative[i[1].type]) {
                        if (t = (S.find.ID(o.matches[0].replace(ke, we), t) || [])[0], !t)return n;
                        l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (a = fe.needsContext.test(e) ? 0 : i.length; a-- && (o = i[a], !S.relative[s = o.type]);)if ((u = S.find[s]) && (r = u(o.matches[0].replace(ke, we), ve.test(i[0].type) && d(t.parentNode) || t))) {
                        if (i.splice(a, 1), e = r.length && h(i), !e)return K.apply(n, r), n;
                        break
                    }
                }
                return (l || M(e, c))(r, t, !L, n, !t || ve.test(e) && d(t.parentNode) || t), n
            }, w.sortStable = U.split("").sort(V).join("") === U, w.detectDuplicates = !!A, N(), w.sortDetached = a(function (e) {
                return 1 & e.compareDocumentPosition(_.createElement("div"))
            }), a(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && a(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || i("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), a(function (e) {
                return null == e.getAttribute("disabled")
            }) || i(te, function (e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
    fe.find = ve, fe.expr = ve.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ve.uniqueSort, fe.text = ve.getText, fe.isXMLDoc = ve.isXML, fe.contains = ve.contains;
    var be = function (e, t, n) {
        for (var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
            if (a && fe(e).is(n))break;
            r.push(e)
        }
        return r
    }, ke = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, we = fe.expr.match.needsContext, Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, De = /^.[^:#\[\.,]*$/;
    fe.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function (e) {
            var t, n = [], r = this, a = r.length;
            if ("string" != typeof e)return this.pushStack(fe(e).filter(function () {
                for (t = 0; a > t; t++)if (fe.contains(r[t], this))return !0
            }));
            for (t = 0; a > t; t++)fe.find(e, r[t], n);
            return n = this.pushStack(a > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var xe, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Me = fe.fn.init = function (e, t, n) {
        var r, a;
        if (!e)return this;
        if (n = n || xe, "string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Se.test(r[1]) && fe.isPlainObject(t))for (r in t)fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (a = re.getElementById(r[2]), a && a.parentNode) {
                if (a.id !== r[2])return xe.find(e);
                this.length = 1, this[0] = a
            }
            return this.context = re, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
    };
    Me.prototype = fe.fn, xe = fe(re);
    var Ce = /^(?:parents|prev(?:Until|All))/, je = {children: !0, contents: !0, next: !0, prev: !0};
    fe.fn.extend({
        has: function (e) {
            var t, n = fe(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (fe.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, a = this.length, i = [], o = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; a > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                i.push(n);
                break
            }
            return this.pushStack(i.length > 1 ? fe.uniqueSort(i) : i)
        }, index: function (e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return be(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        }, next: function (e) {
            return a(e, "nextSibling")
        }, prev: function (e) {
            return a(e, "previousSibling")
        }, nextAll: function (e) {
            return be(e, "nextSibling")
        }, prevAll: function (e) {
            return be(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        }, siblings: function (e) {
            return ke((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ke(e.firstChild)
        }, contents: function (e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function (e, t) {
        fe.fn[e] = function (n, r) {
            var a = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = fe.filter(r, a)), this.length > 1 && (je[e] || (a = fe.uniqueSort(a)), Ce.test(e) && (a = a.reverse())), this.pushStack(a)
        }
    });
    var Ee = /\S+/g;
    fe.Callbacks = function (e) {
        e = "string" == typeof e ? i(e) : fe.extend({}, e);
        var t, n, r, a, o = [], s = [], u = -1, l = function () {
            for (a = e.once, r = t = !0; s.length; u = -1)for (n = s.shift(); ++u < o.length;)o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
            e.memory || (n = !1), t = !1, a && (o = n ? [] : "")
        }, d = {
            add: function () {
                return o && (n && !t && (u = o.length - 1, s.push(n)), function r(t) {
                    fe.each(t, function (t, n) {
                        fe.isFunction(n) ? e.unique && d.has(n) || o.push(n) : n && n.length && "string" !== fe.type(n) && r(n)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return fe.each(arguments, function (e, t) {
                    for (var n; (n = fe.inArray(t, o, n)) > -1;)o.splice(n, 1), u >= n && u--
                }), this
            }, has: function (e) {
                return e ? fe.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return a = s = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return a = !0, n || d.disable(), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, n) {
                return a || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return d
    }, fe.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return a.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return fe.Deferred(function (n) {
                        fe.each(t, function (t, i) {
                            var o = fe.isFunction(e[t]) && e[t];
                            a[i[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? fe.extend(e, r) : r
                }
            }, a = {};
            return r.pipe = r.then, fe.each(t, function (e, i) {
                var o = i[2], s = i[3];
                r[i[1]] = o.add, s && o.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), a[i[0]] = function () {
                    return a[i[0] + "With"](this === a ? r : this, arguments), this
                }, a[i[0] + "With"] = o.fireWith
            }), r.promise(a), e && e.call(a, a), a
        }, when: function (e) {
            var t, n, r, a = 0, i = ae.call(arguments), o = i.length, s = 1 !== o || e && fe.isFunction(e.promise) ? o : 0, u = 1 === s ? e : fe.Deferred(), l = function (e, n, r) {
                return function (a) {
                    n[e] = this, r[e] = arguments.length > 1 ? ae.call(arguments) : a, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (o > 1)for (t = new Array(o), n = new Array(o), r = new Array(o); o > a; a++)i[a] && fe.isFunction(i[a].promise) ? i[a].promise().progress(l(a, n, t)).done(l(a, r, i)).fail(u.reject) : --s;
            return s || u.resolveWith(r, i), u.promise()
        }
    });
    var Ae;
    fe.fn.ready = function (e) {
        return fe.ready.promise().done(e), this
    }, fe.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? fe.readyWait++ : fe.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || (Ae.resolveWith(re, [fe]), fe.fn.triggerHandler && (fe(re).triggerHandler("ready"), fe(re).off("ready"))))
        }
    }), fe.ready.promise = function (t) {
        if (!Ae)if (Ae = fe.Deferred(), "complete" === re.readyState)e.setTimeout(fe.ready); else if (re.addEventListener)re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s); else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (r) {
            }
            n && n.doScroll && !function a() {
                if (!fe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return e.setTimeout(a, 50)
                    }
                    o(), fe.ready()
                }
            }()
        }
        return Ae.promise(t)
    }, fe.ready.promise();
    var Ne;
    for (Ne in fe(ce))break;
    ce.ownFirst = "0" === Ne, ce.inlineBlockNeedsLayout = !1, fe(function () {
        var e, t, n, r;
        n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ce.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = re.createElement("div");
        ce.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            ce.deleteExpando = !1
        }
        e = null
    }();
    var _e = function (e) {
        var t = fe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }, Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Le = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !l(e)
        },
        data: function (e, t, n) {
            return d(e, t, n)
        },
        removeData: function (e, t) {
            return c(e, t)
        },
        _data: function (e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return c(e, t, !0)
        }
    }), fe.fn.extend({
        data: function (e, t) {
            var n, r, a, i = this[0], o = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (a = fe.data(i), 1 === i.nodeType && !fe._data(i, "parsedAttrs"))) {
                    for (n = o.length; n--;)o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = fe.camelCase(r.slice(5)), u(i, r, a[r])));
                    fe._data(i, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function () {
                fe.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                fe.data(this, e, t)
            }) : i ? u(i, e, fe.data(i, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                fe.removeData(this, e)
            })
        }
    }), fe.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = fe._data(e, t), n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = fe.queue(e, t), r = n.length, a = n.shift(), i = fe._queueHooks(e, t), o = function () {
                fe.dequeue(e, t)
            };
            "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, o, i)), !r && i && i.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                    empty: fe.Callbacks("once memory").add(function () {
                        fe._removeData(e, t + "queue"), fe._removeData(e, n)
                    })
                })
        }
    }), fe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                fe.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, a = fe.Deferred(), i = this, o = this.length, s = function () {
                --r || a.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)n = fe._data(i[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), a.promise(t)
        }
    }), function () {
        var e;
        ce.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, r;
            return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, He = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"), Pe = ["Top", "Right", "Bottom", "Left"], Je = function (e, t) {
        return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
    }, Ue = function (e, t, n, r, a, i, o) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === fe.type(n)) {
            a = !0;
            for (s in n)Ue(e, t, s, n[s], !0, i, o)
        } else if (void 0 !== r && (a = !0, fe.isFunction(r) || (o = !0), l && (o ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(fe(e), n)
            })), t))for (; u > s; s++)t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
        return a ? e : l ? t.call(e) : u ? t(e[0], n) : i
    }, Re = /^(?:checkbox|radio)$/i, Ie = /<([\w:-]+)/, ze = /^$|\/(?:java|ecma)script/i, qe = /^\s+/, We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var e = re.createElement("div"), t = re.createDocumentFragment(), n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ce.leadingWhitespace = 3 === e.firstChild.nodeType, ce.tbody = !e.getElementsByTagName("tbody").length, ce.htmlSerialize = !!e.getElementsByTagName("link").length, ce.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ce.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, ce.attributes = !e.getAttribute(fe.expando)
    }();
    var Be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ce.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
    var Ve = /<|&#?\w+;/, Qe = /<tbody/i;
    !function () {
        var t, n, r = re.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (ce[t] = n in e) || (r.setAttribute(n, "t"), ce[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Ye = /^(?:input|select|textarea)$/i, $e = /^key/, Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ge = /^(?:focusinfocus|focusoutblur)$/, Ke = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function (e, t, n, r, a) {
            var i, o, s, u, l, d, c, h, f, p, m, y = fe._data(e);
            if (y) {
                for (n.handler && (u = n, n = u.handler, a = u.selector), n.guid || (n.guid = fe.guid++), (o = y.events) || (o = y.events = {}), (d = y.handle) || (d = y.handle = function (e) {
                    return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), t = (t || "").match(Ee) || [""], s = t.length; s--;)i = Ke.exec(t[s]) || [], f = m = i[1], p = (i[2] || "").split(".").sort(), f && (l = fe.event.special[f] || {}, f = (a ? l.delegateType : l.bindType) || f, l = fe.event.special[f] || {}, c = fe.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: a,
                    needsContext: a && fe.expr.match.needsContext.test(a),
                    namespace: p.join(".")
                }, u), (h = o[f]) || (h = o[f] = [], h.delegateCount = 0, l.setup && l.setup.call(e, r, p, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), l.add && (l.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, c) : h.push(c), fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, a) {
            var i, o, s, u, l, d, c, h, f, p, m, y = fe.hasData(e) && fe._data(e);
            if (y && (d = y.events)) {
                for (t = (t || "").match(Ee) || [""], l = t.length; l--;)if (s = Ke.exec(t[l]) || [], f = m = s[1], p = (s[2] || "").split(".").sort(), f) {
                    for (c = fe.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, h = d[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = i = h.length; i--;)o = h[i], !a && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(i, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                    u && !h.length && (c.teardown && c.teardown.call(e, p, y.handle) !== !1 || fe.removeEvent(e, f, y.handle), delete d[f])
                } else for (f in d)fe.event.remove(e, f + t[l], n, r, !0);
                fe.isEmptyObject(d) && (delete y.handle, fe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, a) {
            var i, o, s, u, l, d, c, h = [r || re], f = de.call(t, "type") ? t.type : t, p = de.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ge.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : fe.makeArray(n, [t]), l = fe.event.special[f] || {}, a || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!a && !l.noBubble && !fe.isWindow(r)) {
                    for (u = l.delegateType || f, Ge.test(u + f) || (s = s.parentNode); s; s = s.parentNode)h.push(s), d = s;
                    d === (r.ownerDocument || re) && h.push(d.defaultView || d.parentWindow || e)
                }
                for (c = 0; (s = h[c++]) && !t.isPropagationStopped();)t.type = c > 1 ? u : l.bindType || f, i = (fe._data(s, "events") || {})[t.type] && fe._data(s, "handle"), i && i.apply(s, n), i = o && s[o], i && i.apply && _e(s) && (t.result = i.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !a && !t.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && _e(r) && o && r[f] && !fe.isWindow(r)) {
                    d = r[o], d && (r[o] = null), fe.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {
                    }
                    fe.event.triggered = void 0, d && (r[o] = d)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = fe.event.fix(e);
            var t, n, r, a, i, o = [], s = ae.call(arguments), u = (fe._data(this, "events") || {})[e.type] || [], l = fe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (o = fe.event.handlers.call(this, e, u), t = 0; (a = o[t++]) && !e.isPropagationStopped();)for (e.currentTarget = a.elem, n = 0; (i = a.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((fe.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, a, i, o = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (r = [], n = 0; s > n; n++)i = t[n], a = i.selector + " ", void 0 === r[a] && (r[a] = i.needsContext ? fe(a, this).index(u) > -1 : fe.find(a, this, null, [u]).length), r[a] && r.push(i);
                r.length && o.push({elem: u, handlers: r})
            }
            return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
        },
        fix: function (e) {
            if (e[fe.expando])return e;
            var t, n, r, a = e.type, i = e, o = this.fixHooks[a];
            for (o || (this.fixHooks[a] = o = Xe.test(a) ? this.mouseHooks : $e.test(a) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new fe.Event(i), t = r.length; t--;)n = r[t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, a, i = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, a = r.documentElement, n = r.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== k() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === k() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return fe.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var r = fe.extend(new fe.Event, n, {type: e, isSimulated: !0});
            fe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, fe.removeEvent = re.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, fe.Event = function (e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        fe.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, a = e.relatedTarget, i = e.handleObj;
                return (!a || a !== r && !fe.contains(r, a)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ce.submit || (fe.event.special.submit = {
        setup: function () {
            return fe.nodeName(this, "form") ? !1 : void fe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            return fe.nodeName(this, "form") ? !1 : void fe.event.remove(this, "._submit")
        }
    }), ce.change || (fe.event.special.change = {
        setup: function () {
            return Ye.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
            })), !1) : void fe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ye.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }), fe._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return fe.event.remove(this, "._change"), !Ye.test(this.nodeName)
        }
    }), ce.focusin || fe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, a = fe._data(r, t);
                a || r.addEventListener(e, n, !0), fe._data(r, t, (a || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, a = fe._data(r, t) - 1;
                a ? fe._data(r, t, a) : (r.removeEventListener(e, n, !0), fe._removeData(r, t))
            }
        }
    }), fe.fn.extend({
        on: function (e, t, n, r) {
            return w(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return w(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, a;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (a in e)this.off(a, t, e[a]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = b), this.each(function () {
                fe.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                fe.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? fe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g, et = new RegExp("<(?:" + We + ")[\\s/>]", "i"), tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, nt = /<script|<style|<link/i, rt = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ot = f(re), st = ot.appendChild(re.createElement("div"));
    fe.extend({
        htmlPrefilter: function (e) {
            return e.replace(tt, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, a, i, o, s, u = fe.contains(e.ownerDocument, e);
            if (ce.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(i = st.firstChild)), !(ce.noCloneEvent && ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))for (r = p(i), s = p(e), o = 0; null != (a = s[o]); ++o)r[o] && M(a, r[o]);
            if (t)if (n)for (s = s || p(e), r = r || p(i), o = 0; null != (a = s[o]); o++)T(a, r[o]); else T(e, i);
            return r = p(i, "script"), r.length > 0 && m(r, !u && p(e, "script")), r = s = a = null, i
        }, cleanData: function (e, t) {
            for (var n, r, a, i, o = 0, s = fe.expando, u = fe.cache, l = ce.attributes, d = fe.event.special; null != (n = e[o]); o++)if ((t || _e(n)) && (a = n[s], i = a && u[a])) {
                if (i.events)for (r in i.events)d[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, i.handle);
                u[a] && (delete u[a], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(a))
            }
        }
    }), fe.fn.extend({
        domManip: C, detach: function (e) {
            return j(this, e, !0)
        }, remove: function (e) {
            return j(this, e)
        }, text: function (e) {
            return Ue(this, function (e) {
                return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return C(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return C(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return C(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return C(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(p(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return fe.clone(this, e, t)
            })
        }, html: function (e) {
            return Ue(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (ce.htmlSerialize || !et.test(e)) && (ce.leadingWhitespace || !qe.test(e)) && !Be[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (a) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return C(this, arguments, function (t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(p(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        fe.fn[e] = function (e) {
            for (var n, r = 0, a = [], i = fe(e), o = i.length - 1; o >= r; r++)n = r === o ? this : this.clone(!0), fe(i[r])[t](n), oe.apply(a, n.get());
            return this.pushStack(a)
        }
    });
    var ut, lt = {
        HTML: "block",
        BODY: "block"
    }, dt = /^margin/, ct = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"), ht = function (e, t, n, r) {
        var a, i, o = {};
        for (i in t)o[i] = e.style[i], e.style[i] = t[i];
        a = n.apply(e, r || []);
        for (i in t)e.style[i] = o[i];
        return a
    }, ft = re.documentElement;
    !function () {
        function t() {
            var t, d, c = re.documentElement;
            c.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, e.getComputedStyle && (d = e.getComputedStyle(l), n = "1%" !== (d || {}).top, s = "2px" === (d || {}).marginLeft, a = "4px" === (d || {width: "4px"}).width, l.style.marginRight = "50%", r = "4px" === (d || {marginRight: "4px"}).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", o = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", i = 0 === l.getClientRects().length, i && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === t[0].offsetHeight, i && (t[0].style.display = "", t[1].style.display = "none", i = 0 === t[0].offsetHeight)), c.removeChild(u)
        }

        var n, r, a, i, o, s, u = re.createElement("div"), l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", ce.opacity = "0.5" === l.style.opacity, ce.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), ce.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, fe.extend(ce, {
            reliableHiddenOffsets: function () {
                return null == n && t(), i
            }, boxSizingReliable: function () {
                return null == n && t(), a
            }, pixelMarginRight: function () {
                return null == n && t(), r
            }, pixelPosition: function () {
                return null == n && t(), n
            }, reliableMarginRight: function () {
                return null == n && t(), o
            }, reliableMarginLeft: function () {
                return null == n && t(), s
            }
        }))
    }();
    var pt, mt, yt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function (t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function (e, t, n) {
        var r, a, i, o, s = e.style;
        return n = n || pt(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || fe.contains(e.ownerDocument, e) || (o = fe.style(e, t)), !ce.pixelMarginRight() && ct.test(o) && dt.test(t) && (r = s.width, a = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = a, s.maxWidth = i)), void 0 === o ? o : o + ""
    }) : ft.currentStyle && (pt = function (e) {
        return e.currentStyle
    }, mt = function (e, t, n) {
        var r, a, i, o, s = e.style;
        return n = n || pt(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), ct.test(o) && !yt.test(t) && (r = s.left, a = e.runtimeStyle, i = a && a.left, i && (a.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = r, i && (a.left = i)), void 0 === o ? o : o + "" || "auto"
    });
    var gt = /alpha\([^)]*\)/i, vt = /opacity\s*=\s*([^)]*)/i, bt = /^(none|table(?!-c[ea]).+)/, kt = new RegExp("^(" + Oe + ")(.*)$", "i"), wt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, St = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Dt = ["Webkit", "O", "Moz", "ms"], xt = re.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
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
        cssProps: {"float": ce.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, i, o, s = fe.camelCase(t), u = e.style;
                if (t = fe.cssProps[s] || (fe.cssProps[s] = _(s) || s), o = fe.cssHooks[t] || fe.cssHooks[s], void 0 === n)return o && "get"in o && void 0 !== (a = o.get(e, !1, r)) ? a : u[t];
                if (i = typeof n, "string" === i && (a = He.exec(n)) && a[1] && (n = h(e, t, a), i = "number"), null != n && n === n && ("number" === i && (n += a && a[3] || (fe.cssNumber[s] ? "" : "px")), ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(o && "set"in o && void 0 === (n = o.set(e, n, r)))))try {
                    u[t] = n
                } catch (l) {
                }
            }
        },
        css: function (e, t, n, r) {
            var a, i, o, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = _(s) || s), o = fe.cssHooks[t] || fe.cssHooks[s], o && "get"in o && (i = o.get(e, !0, n)), void 0 === i && (i = mt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i
        }
    }), fe.each(["height", "width"], function (e, t) {
        fe.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, wt, function () {
                    return H(e, t, r)
                }) : H(e, t, r) : void 0
            }, set: function (e, n, r) {
                var a = r && pt(e);
                return L(e, n, r ? O(e, t, r, ce.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, a), a) : 0)
            }
        }
    }), ce.opacity || (fe.cssHooks.opacity = {
        get: function (e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, a = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", i = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(i.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = gt.test(i) ? i.replace(gt, a) : i + " " + a)
        }
    }), fe.cssHooks.marginRight = N(ce.reliableMarginRight, function (e, t) {
        return t ? ht(e, {display: "inline-block"}, mt, [e, "marginRight"]) : void 0
    }), fe.cssHooks.marginLeft = N(ce.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), fe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        fe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, a = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)a[e + Pe[r] + t] = i[r] || i[r - 2] || i[0];
                return a
            }
        }, dt.test(e) || (fe.cssHooks[e + t].set = L)
    }), fe.fn.extend({
        css: function (e, t) {
            return Ue(this, function (e, t, n) {
                var r, a, i = {}, o = 0;
                if (fe.isArray(t)) {
                    for (r = pt(e), a = t.length; a > o; o++)i[t[o]] = fe.css(e, t[o], !1, r);
                    return i
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return F(this, !0)
        }, hide: function () {
            return F(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Je(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }), fe.Tween = P, P.prototype = {
        constructor: P, init: function (e, t, n, r, a, i) {
            this.elem = e, this.prop = n, this.easing = a || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (fe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, fe.fx = P.prototype.init, fe.fx.step = {};
    var Tt, Mt, Ct = /^(?:toggle|show|hide)$/, jt = /queueHooks$/;
    fe.Animation = fe.extend(q, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, He.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
            for (var n, r = 0, a = e.length; a > r; r++)n = e[r], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t)
        }, prefilters: [I], prefilter: function (e, t) {
            t ? q.prefilters.unshift(e) : q.prefilters.push(e)
        }
    }), fe.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return r.duration = fe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            fe.isFunction(r.old) && r.old.call(this), r.queue && fe.dequeue(this, r.queue)
        }, r
    }, fe.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Je).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var a = fe.isEmptyObject(e), i = fe.speed(t, n, r), o = function () {
                var t = q(this, fe.extend({}, e), i);
                (a || fe._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, a || i.queue === !1 ? this.each(o) : this.queue(i.queue, o)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, a = null != e && e + "queueHooks", i = fe.timers, o = fe._data(this);
                if (a)o[a] && o[a].stop && r(o[a]); else for (a in o)o[a] && o[a].stop && jt.test(a) && r(o[a]);
                for (a = i.length; a--;)i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                (t || !n) && fe.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = fe._data(this), r = n[e + "queue"], a = n[e + "queueHooks"], i = fe.timers, o = r ? r.length : 0;
                for (n.finish = !0, fe.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = i.length; t--;)i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; o > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), fe.each(["toggle", "show", "hide"], function (e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function (e, r, a) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, a)
        }
    }), fe.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        fe.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), fe.timers = [], fe.fx.tick = function () {
        var e, t = fe.timers, n = 0;
        for (Tt = fe.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || fe.fx.stop(), Tt = void 0
    }, fe.fx.timer = function (e) {
        fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
    }, fe.fx.interval = 13, fe.fx.start = function () {
        Mt || (Mt = e.setInterval(fe.fx.tick, fe.fx.interval))
    }, fe.fx.stop = function () {
        e.clearInterval(Mt), Mt = null
    }, fe.fx.speeds = {slow: 600, fast: 200, _default: 400}, fe.fn.delay = function (t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var a = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(a)
            }
        })
    }, function () {
        var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), a = r.appendChild(re.createElement("option"));
        n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ce.getSetAttribute = "t" !== n.className, ce.style = /top/.test(e.getAttribute("style")), ce.hrefNormalized = "/a" === e.getAttribute("href"), ce.checkOn = !!t.value, ce.optSelected = a.selected, ce.enctype = !!re.createElement("form").enctype, r.disabled = !0, ce.optDisabled = !a.disabled, t = re.createElement("input"), t.setAttribute("value", ""), ce.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ce.radioValue = "t" === t.value
    }();
    var Et = /\r/g;
    fe.fn.extend({
        val: function (e) {
            var t, n, r, a = this[0];
            {
                if (arguments.length)return r = fe.isFunction(e), this.each(function (n) {
                    var a;
                    1 === this.nodeType && (a = r ? e.call(this, n, fe(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : fe.isArray(a) && (a = fe.map(a, function (e) {
                        return null == e ? "" : e + ""
                    })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                });
                if (a)return t = fe.valHooks[a.type] || fe.valHooks[a.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)
            }
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, a = e.selectedIndex, i = "select-one" === e.type || 0 > a, o = i ? null : [], s = i ? a + 1 : r.length, u = 0 > a ? s : i ? a : 0; s > u; u++)if (n = r[u], (n.selected || u === a) && (ce.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = fe(n).val(), i)return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, r, a = e.options, i = fe.makeArray(t), o = a.length; o--;)if (r = a[o], fe.inArray(fe.valHooks.option.get(r), i) >= 0)try {
                        r.selected = n = !0
                    } catch (s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function () {
        fe.valHooks[this] = {
            set: function (e, t) {
                return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0
            }
        }, ce.checkOn || (fe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var At, Nt, _t = fe.expr.attrHandle, Ft = /^(?:checked|selected)$/i, Lt = ce.getSetAttribute, Ot = ce.input;
    fe.fn.extend({
        attr: function (e, t) {
            return Ue(this, fe.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function (e, t, n) {
            var r, a, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === i && fe.isXMLDoc(e) || (t = t.toLowerCase(), a = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Nt : At)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : a && "set"in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get"in a && null !== (r = a.get(e, t)) ? r : (r = fe.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ce.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r, a = 0, i = t && t.match(Ee);
            if (i && 1 === e.nodeType)for (; n = i[a++];)r = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Ot && Lt || !Ft.test(n) ? e[r] = !1 : e[fe.camelCase("default-" + n)] = e[r] = !1 : fe.attr(e, n, ""), e.removeAttribute(Lt ? n : r)
        }
    }), Nt = {
        set: function (e, t, n) {
            return t === !1 ? fe.removeAttr(e, n) : Ot && Lt || !Ft.test(n) ? e.setAttribute(!Lt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = _t[t] || fe.find.attr;
        Ot && Lt || !Ft.test(t) ? _t[t] = function (e, t, r) {
            var a, i;
            return r || (i = _t[t], _t[t] = a, a = null != n(e, t, r) ? t.toLowerCase() : null, _t[t] = i), a
        } : _t[t] = function (e, t, n) {
            return n ? void 0 : e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ot && Lt || (fe.attrHooks.value = {
        set: function (e, t, n) {
            return fe.nodeName(e, "input") ? void(e.defaultValue = t) : At && At.set(e, t, n)
        }
    }), Lt || (At = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, _t.id = _t.name = _t.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, fe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: At.set
    }, fe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            At.set(e, "" === t ? !1 : t, n)
        }
    }, fe.each(["width", "height"], function (e, t) {
        fe.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ce.style || (fe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ht = /^(?:input|select|textarea|button|object)$/i, Pt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function (e, t) {
            return Ue(this, fe.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = fe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), fe.extend({
        prop: function (e, t, n) {
            var r, a, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)return 1 === i && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, a = fe.propHooks[t]), void 0 !== n ? a && "set"in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get"in a && null !== (r = a.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ht.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), ce.hrefNormalized || fe.each(["href", "src"], function (e, t) {
        fe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ce.optSelected || (fe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fe.propFix[this.toLowerCase()] = this
    }), ce.enctype || (fe.propFix.enctype = "encoding");
    var Jt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function (e) {
            var t, n, r, a, i, o, s, u = 0;
            if (fe.isFunction(e))return this.each(function (t) {
                fe(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)for (t = e.match(Ee) || []; n = this[u++];)if (a = W(n), r = 1 === n.nodeType && (" " + a + " ").replace(Jt, " ")) {
                for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = fe.trim(r), a !== s && fe.attr(n, "class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, a, i, o, s, u = 0;
            if (fe.isFunction(e))return this.each(function (t) {
                fe(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e)for (t = e.match(Ee) || []; n = this[u++];)if (a = W(n), r = 1 === n.nodeType && (" " + a + " ").replace(Jt, " ")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") > -1;)r = r.replace(" " + i + " ", " ");
                s = fe.trim(r), a !== s && fe.attr(n, "class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function (n) {
                fe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function () {
                var t, r, a, i;
                if ("string" === n)for (r = 0, a = fe(this), i = e.match(Ee) || []; t = i[r++];)a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else(void 0 === e || "boolean" === n) && (t = W(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + W(n) + " ").replace(Jt, " ").indexOf(t) > -1)return !0;
            return !1
        }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        fe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ut = e.location, Rt = fe.now(), It = /\?/, zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, r = null, a = fe.trim(t + "");
        return a && !fe.trim(a.replace(zt, function (e, t, a, i) {
            return n && t && (r = 0), 0 === r ? e : (n = a || t, r += !i - !a, "")
        })) ? Function("return " + a)() : fe.error("Invalid JSON: " + t)
    }, fe.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (a) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
    };
    var qt = /#.*$/, Wt = /([?&])_=[^&]*/, Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qt = /^(?:GET|HEAD)$/, Yt = /^\/\//, $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Xt = {}, Gt = {}, Kt = "*/".concat("*"), Zt = Ut.href, en = $t.exec(Zt.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Vt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": fe.parseJSON, "text xml": fe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Q(Q(e, fe.ajaxSettings), t) : Q(fe.ajaxSettings, e)
        },
        ajaxPrefilter: B(Xt),
        ajaxTransport: B(Gt),
        ajax: function (t, n) {
            function r(t, n, r, a) {
                var i, c, v, b, w, D = n;
                2 !== k && (k = 2, u && e.clearTimeout(u), d = void 0, s = a || "", S.readyState = t > 0 ? 4 : 0, i = t >= 200 && 300 > t || 304 === t, r && (b = Y(h, S, r)), b = $(h, b, S, i), i ? (h.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (fe.lastModified[o] = w), w = S.getResponseHeader("etag"), w && (fe.etag[o] = w)), 204 === t || "HEAD" === h.type ? D = "nocontent" : 304 === t ? D = "notmodified" : (D = b.state, c = b.data, v = b.error, i = !v)) : (v = D, (t || !D) && (D = "error", 0 > t && (t = 0))), S.status = t, S.statusText = (n || D) + "", i ? m.resolveWith(f, [c, D, S]) : m.rejectWith(f, [S, D, v]), S.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [S, h, i ? c : v]), y.fireWith(f, [S, D]), l && (p.trigger("ajaxComplete", [S, h]), --fe.active || fe.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var a, i, o, s, u, l, d, c, h = fe.ajaxSetup({}, n), f = h.context || h, p = h.context && (f.nodeType || f.jquery) ? fe(f) : fe.event, m = fe.Deferred(), y = fe.Callbacks("once memory"), g = h.statusCode || {}, v = {}, b = {}, k = 0, w = "canceled", S = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === k) {
                        if (!c)for (c = {}; t = Bt.exec(s);)c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === k ? s : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return k || (e = b[n] = b[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return k || (h.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > k)for (t in e)g[t] = [g[t], e[t]]; else S.always(e[S.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return d && d.abort(t), r(0, t), this
                }
            };
            if (m.promise(S).complete = y.add, S.success = S.done, S.error = S.fail, h.url = ((t || h.url || Zt) + "").replace(qt, "").replace(Yt, en[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = fe.trim(h.dataType || "*").toLowerCase().match(Ee) || [""], null == h.crossDomain && (a = $t.exec(h.url.toLowerCase()), h.crossDomain = !(!a || a[1] === en[1] && a[2] === en[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)), V(Xt, h, n, S), 2 === k)return S;
            l = fe.event && h.global, l && 0 === fe.active++ && fe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qt.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (It.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Wt.test(o) ? o.replace(Wt, "$1_=" + Rt++) : o + (It.test(o) ? "&" : "?") + "_=" + Rt++)), h.ifModified && (fe.lastModified[o] && S.setRequestHeader("If-Modified-Since", fe.lastModified[o]), fe.etag[o] && S.setRequestHeader("If-None-Match", fe.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : h.accepts["*"]);
            for (i in h.headers)S.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (h.beforeSend.call(f, S, h) === !1 || 2 === k))return S.abort();
            w = "abort";
            for (i in{success: 1, error: 1, complete: 1})S[i](h[i]);
            if (d = V(Gt, h, n, S)) {
                if (S.readyState = 1, l && p.trigger("ajaxSend", [S, h]), 2 === k)return S;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    k = 1, d.send(v, r)
                } catch (D) {
                    if (!(2 > k))throw D;
                    r(-1, D)
                }
            } else r(-1, "No Transport");
            return S
        },
        getJSON: function (e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function (e, t) {
        fe[t] = function (e, n, r, a) {
            return fe.isFunction(n) && (a = a || r, r = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: a,
                data: n,
                success: r
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function (e) {
        return fe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, fe.fn.extend({
        wrapAll: function (e) {
            if (fe.isFunction(e))return this.each(function (t) {
                fe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return fe.isFunction(e) ? this.each(function (t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = fe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = fe.isFunction(e);
            return this.each(function (n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fe.expr.filters.hidden = function (e) {
        return ce.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : G(e)
    }, fe.expr.filters.visible = function (e) {
        return !fe.expr.filters.hidden(e)
    };
    var tn = /%20/g, nn = /\[\]$/, rn = /\r?\n/g, an = /^(?:submit|button|image|reset|file)$/i, on = /^(?:input|select|textarea|keygen)/i;
    fe.param = function (e, t) {
        var n, r = [], a = function (e, t) {
            t = fe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e))fe.each(e, function () {
            a(this.name, this.value)
        }); else for (n in e)K(n, e[n], t, a);
        return r.join("&").replace(tn, "+")
    }, fe.fn.extend({
        serialize: function () {
            return fe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && on.test(this.nodeName) && !an.test(e) && (this.checked || !Re.test(e))
            }).map(function (e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function (e) {
                    return {name: t.name, value: e.replace(rn, "\r\n")}
                }) : {name: t.name, value: n.replace(rn, "\r\n")}
            }).get()
        }
    }), fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var sn = 0, un = {}, ln = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in un)un[e](void 0, !0)
    }), ce.cors = !!ln && "withCredentials"in ln, ln = ce.ajax = !!ln, ln && fe.ajaxTransport(function (t) {
        if (!t.crossDomain || ce.cors) {
            var n;
            return {
                send: function (r, a) {
                    var i, o = t.xhr(), s = ++sn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (i in t.xhrFields)o[i] = t.xhrFields[i];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (i in r)void 0 !== r[i] && o.setRequestHeader(i, r[i] + "");
                    o.send(t.hasContent && t.data || null), n = function (e, r) {
                        var i, u, l;
                        if (n && (r || 4 === o.readyState))if (delete un[s], n = void 0, o.onreadystatechange = fe.noop, r)4 !== o.readyState && o.abort(); else {
                            l = {}, i = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                            try {
                                u = o.statusText
                            } catch (d) {
                                u = ""
                            }
                            i || !t.isLocal || t.crossDomain ? 1223 === i && (i = 204) : i = l.text ? 200 : 404
                        }
                        l && a(i, u, l, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = un[s] = n : n()
                }, abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }), fe.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), fe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = re.head || fe("head")[0] || re.documentElement;
            return {
                send: function (r, a) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var dn = [], cn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = dn.pop() || fe.expando + "_" + Rt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function (t, n, r) {
        var a, i, o, s = t.jsonp !== !1 && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(cn, "$1" + a) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function () {
            return o || fe.error(a + " was not called"), o[0]
        }, t.dataTypes[0] = "json", i = e[a], e[a] = function () {
            o = arguments
        }, r.always(function () {
            void 0 === i ? fe(e).removeProp(a) : e[a] = i, t[a] && (t.jsonpCallback = n.jsonpCallback, dn.push(a)), o && fe.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), ce.createHTMLDocument = function () {
        if (!re.implementation.createHTMLDocument)return !1;
        var e = re.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), fe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (ce.createHTMLDocument ? re.implementation.createHTMLDocument("") : re);
        var r = Se.exec(e), a = !n && [];
        return r ? [t.createElement(r[1])] : (r = g([e], t, a), a && a.length && fe(a).remove(), fe.merge([], r.childNodes))
    };
    var hn = fe.fn.load;
    fe.fn.load = function (e, t, n) {
        if ("string" != typeof e && hn)return hn.apply(this, arguments);
        var r, a, i, o = this, s = e.indexOf(" ");
        return s > -1 && (r = fe.trim(e.slice(s, e.length)), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && fe.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, o.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
                o.each(function () {
                    n.apply(o, i || [e.responseText, t, e])
                })
            }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        fe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), fe.expr.filters.animated = function (e) {
        return fe.grep(fe.timers, function (t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function (e, t, n) {
            var r, a, i, o, s, u, l, d = fe.css(e, "position"), c = fe(e), h = {};
            "static" === d && (e.style.position = "relative"), s = c.offset(), i = fe.css(e, "top"), u = fe.css(e, "left"), l = ("absolute" === d || "fixed" === d) && fe.inArray("auto", [i, u]) > -1, l ? (r = c.position(), o = r.top, a = r.left) : (o = parseFloat(i) || 0, a = parseFloat(u) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (h.top = t.top - s.top + o), null != t.left && (h.left = t.left - s.left + a), "using"in t ? t.using.call(e, h) : c.css(h)
        }
    }, fe.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, n, r = {top: 0, left: 0}, a = this[0], i = a && a.ownerDocument;
            if (i)return t = i.documentElement, fe.contains(t, a) ? ("undefined" != typeof a.getBoundingClientRect && (r = a.getBoundingClientRect()), n = te(i), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === fe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += fe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - n.top - fe.css(r, "marginTop", !0),
                    left: t.left - n.left - fe.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");)e = e.offsetParent;
                return e || ft
            })
        }
    }), fe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function (r) {
            return Ue(this, function (e, r, a) {
                var i = te(e);
                return void 0 === a ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? fe(i).scrollLeft() : a, n ? a : fe(i).scrollTop()) : e[r] = a)
            }, e, r, arguments.length, null)
        }
    }), fe.each(["top", "left"], function (e, t) {
        fe.cssHooks[t] = N(ce.pixelPosition, function (e, n) {
            return n ? (n = mt(e, t), ct.test(n) ? fe(e).position()[t] + "px" : n) : void 0
        })
    }), fe.each({Height: "height", Width: "width"}, function (e, t) {
        fe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            fe.fn[r] = function (r, a) {
                var i = arguments.length && (n || "boolean" != typeof r), o = n || (r === !0 || a === !0 ? "margin" : "border");
                return Ue(this, function (t, n, r) {
                    var a;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? fe.css(t, n, o) : fe.style(t, n, r, o)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), fe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.fn.size = function () {
        return this.length
    }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return fe
    });
    var fn = e.jQuery, pn = e.$;
    return fe.noConflict = function (t) {
        return e.$ === fe && (e.$ = pn), t && e.jQuery === fe && (e.jQuery = fn), fe
    }, t || (e.jQuery = e.$ = fe), fe
}), function (e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, r = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function () {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function (t, n, r) {
            var a = e.Event(n);
            return t.trigger(a, r), a.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e[0].href
        },
        isRemote: function (e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function (r) {
            var a, i, o, s, u, l;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("with-credentials") || null, u = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                    a = r.data("ujs:submit-button-formmethod") || r.attr("method"), i = r.data("ujs:submit-button-formaction") || r.attr("action"), o = e(r[0].elements).serializeArray();
                    var d = r.data("ujs:submit-button");
                    d && (o.push(d), r.data("ujs:submit-button", null)), r.data("ujs:submit-button-formmethod", null), r.data("ujs:submit-button-formaction", null)
                } else r.is(n.inputChangeSelector) ? (a = r.data("method"), i = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (a = r.data("method") || "get", i = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : (a = r.data("method"), i = n.href(r), o = r.data("params") || null);
                return l = {
                    type: a || "GET", data: o, dataType: u, beforeSend: function (e, a) {
                        return a.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + a.accepts.script), n.fire(r, "ajax:beforeSend", [e, a]) ? void r.trigger("ajax:send", e) : !1
                    }, success: function (e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    }, complete: function (e, t) {
                        r.trigger("ajax:complete", [e, t])
                    }, error: function (e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    }, crossDomain: n.isCrossDomain(i)
                }, s && (l.xhrFields = {withCredentials: s}), i && (l.url = i), n.ajax(l)
            }
            return !1
        },
        isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (r) {
                return !0
            }
        },
        handleMethod: function (r) {
            var a = n.href(r), i = r.data("method"), o = r.attr("target"), s = n.csrfToken(), u = n.csrfParam(), l = e('<form method="post" action="' + a + '"></form>'), d = '<input name="_method" value="' + i + '" type="hidden" />';
            u === t || s === t || n.isCrossDomain(a) || (d += '<input name="' + u + '" value="' + s + '" type="hidden" />'), o && l.attr("target", o), l.hide().append(d).appendTo("body"), l.submit()
        },
        formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var n, r;
            n = e.is("button") ? "html" : "val", r = e.data("disable-with"), r !== t && (e.data("ujs:enable-with", e[n]()), e[n](r)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function (e) {
            var t, r = e.data("confirm"), a = !1;
            if (!r)return !0;
            if (n.fire(e, "confirm")) {
                try {
                    a = n.confirm(r)
                } catch (i) {
                    (console.error || console.log).call(console, i.stack || i)
                }
                t = n.fire(e, "confirm:complete", [a])
            }
            return a && t
        },
        blankInputs: function (t, n, r) {
            var a, i, o = e(), s = n || "input,textarea", u = t.find(s);
            return u.each(function () {
                if (a = e(this), i = a.is("input[type=checkbox],input[type=radio]") ? a.is(":checked") : !!a.val(), i === r) {
                    if (a.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + a.attr("name") + '"]').length)return !0;
                    o = o.add(a)
                }
            }), o.length ? o : !1
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var r = e.data("disable-with");
            r !== t && (e.data("ujs:enable-with", e.html()), e.html(r)), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(window).on("pageshow.rails", function () {
        e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), r.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), r.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(e(this))
    }), r.delegate(n.linkClickSelector, "click.rails", function (t) {
        var r = e(this), a = r.data("method"), i = r.data("params"), o = t.metaKey || t.ctrlKey;
        if (!n.allowAction(r))return n.stopEverything(t);
        if (!o && r.is(n.linkDisableSelector) && n.disableElement(r), n.isRemote(r)) {
            if (o && (!a || "GET" === a) && !i)return !0;
            var s = n.handleRemote(r);
            return s === !1 ? n.enableElement(r) : s.fail(function () {
                n.enableElement(r)
            }), !1
        }
        return a ? (n.handleMethod(r), !1) : void 0
    }), r.delegate(n.buttonClickSelector, "click.rails", function (t) {
        var r = e(this);
        if (!n.allowAction(r) || !n.isRemote(r))return n.stopEverything(t);
        r.is(n.buttonDisableSelector) && n.disableFormElement(r);
        var a = n.handleRemote(r);
        return a === !1 ? n.enableFormElement(r) : a.fail(function () {
            n.enableFormElement(r)
        }), !1
    }), r.delegate(n.inputChangeSelector, "change.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), r.delegate(n.formSubmitSelector, "submit.rails", function (r) {
        var a, i, o = e(this), s = n.isRemote(o);
        if (!n.allowAction(o))return n.stopEverything(r);
        if (o.attr("novalidate") === t)if (o.data("ujs:formnovalidate-button") === t) {
            if (a = n.blankInputs(o, n.requiredInputSelector, !1), a && n.fire(o, "ajax:aborted:required", [a]))return n.stopEverything(r)
        } else o.data("ujs:formnovalidate-button", t);
        if (s) {
            if (i = n.nonBlankInputs(o, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(o)
                }, 13);
                var u = n.fire(o, "ajax:aborted:file", [i]);
                return u || setTimeout(function () {
                    n.enableFormElements(o)
                }, 13), u
            }
            return n.handleRemote(o), !1
        }
        setTimeout(function () {
            n.disableFormElements(o)
        }, 13)
    }), r.delegate(n.formInputClickSelector, "click.rails", function (t) {
        var r = e(this);
        if (!n.allowAction(r))return n.stopEverything(t);
        var a = r.attr("name"), i = a ? {name: a, value: r.val()} : null, o = r.closest("form");
        0 === o.length && (o = e("#" + r.attr("form"))), o.data("ujs:submit-button", i), o.data("ujs:formnovalidate-button", r.attr("formnovalidate")), o.data("ujs:submit-button-formaction", r.attr("formaction")), o.data("ujs:submit-button-formmethod", r.attr("formmethod"))
    }), r.delegate(n.formSubmitSelector, "ajax:send.rails", function (t) {
        this === t.target && n.disableFormElements(e(this))
    }), r.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery), function () {
    var e, t, n, r, a, i, o, s, u, l, d, c, h, f, p, m, y, g, v, b, k, w, S, D, x, T, M, C, j, E, A, N, _, F, L, O, H, P, J, U, R, I, z, q, W, B, V, Q, Y, $, X, G, K, Z, ee, te, ne = [].indexOf || function (e) {
            for (var t = 0, n = this.length; n > t; t++)if (t in this && this[t] === e)return t;
            return -1
        }, re = function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var r in t)ae.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    }, ae = {}.hasOwnProperty, ie = [].slice, oe = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    F = {}, h = 10, G = !1, J = null, v = null, N = null, I = null, te = null, r = {
        BEFORE_CHANGE: "page:before-change",
        FETCH: "page:fetch",
        RECEIVE: "page:receive",
        CHANGE: "page:change",
        UPDATE: "page:update",
        LOAD: "page:load",
        RESTORE: "page:restore",
        BEFORE_UNLOAD: "page:before-unload",
        EXPIRE: "page:expire"
    }, D = function (e) {
        var t;
        return e = new n(e), V(), c(), null != J && J.start(), G && (t = K(e.absolute)) ? (x(t), T(e, null, !1)) : T(e, $)
    }, K = function (e) {
        var t;
        return t = F[e], t && !t.transitionCacheDisabled ? t : void 0
    }, k = function (e) {
        return null == e && (e = !0), G = e
    }, b = function (e) {
        return null == e && (e = !0), l ? e ? null != J ? J : J = new i("html") : (null != J && J.uninstall(), J = null) : void 0
    }, T = function (e, t, n) {
        return null == n && (n = !0), Z(r.FETCH, {url: e.absolute}), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", e.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", I), te.onload = function () {
            var n;
            return Z(r.RECEIVE, {url: e.absolute}), (n = P()) ? (z(e), q(), f.apply(null, S(n)), _(), "function" == typeof t && t(), Z(r.LOAD)) : document.location.href = g() || e.absolute
        }, J && n && (te.onprogress = function (e) {
            return function (e) {
                var t;
                return t = e.lengthComputable ? e.loaded / e.total * 100 : J.value + (100 - J.value) / 10, J.advanceTo(t)
            }
        }(this)), te.onloadend = function () {
            return te = null
        }, te.onerror = function () {
            return document.location.href = e.absolute
        }, te.send()
    }, x = function (e) {
        return null != te && te.abort(), f(e.title, e.body), U(e), Z(r.RESTORE)
    }, c = function () {
        var e;
        return e = new n(v.url), F[e.absolute] = {
            url: e.relative,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset,
            cachedAt: (new Date).getTime(),
            transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
        }, m(h)
    }, O = function (e) {
        return null == e && (e = h), /^[\d]+$/.test(e) ? h = parseInt(e) : void 0
    }, m = function (e) {
        var t, n, a, i, o, s;
        for (o = Object.keys(F), t = o.map(function (e) {
            return F[e].cachedAt
        }).sort(function (e, t) {
            return t - e
        }), s = [], n = 0, i = o.length; i > n; n++)a = o[n], F[a].cachedAt <= t[e] && (Z(r.EXPIRE, F[a]), s.push(delete F[a]));
        return s
    }, f = function (t, n, a, i) {
        return Z(r.BEFORE_UNLOAD), document.title = t, document.documentElement.replaceChild(n, document.body), null != a && e.update(a), X(), i && w(), v = window.history.state, null != J && J.done(), Z(r.CHANGE), Z(r.UPDATE)
    }, w = function () {
        var e, t, n, r, a, i, o, s, u, l, d, c;
        for (c = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, a = c.length; a > n; n++)if (d = c[n], "" === (u = d.type) || "text/javascript" === u) {
            for (t = document.createElement("script"), l = d.attributes, r = 0, i = l.length; i > r; r++)e = l[r], t.setAttribute(e.name, e.value);
            d.hasAttribute("async") || (t.async = !1), t.appendChild(document.createTextNode(d.innerHTML)), s = d.parentNode, o = d.nextSibling, s.removeChild(d), s.insertBefore(t, o)
        }
    }, Q = function (e) {
        return e.innerHTML = e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), e
    }, X = function () {
        var e, t;
        return e = (t = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length - 1], e && document.activeElement !== e ? e.focus() : void 0
    }, z = function (e) {
        return (e = new n(e)).absolute !== I ? window.history.pushState({
            turbolinks: !0,
            url: e.absolute
        }, "", e.absolute) : void 0
    }, q = function () {
        var e, t;
        return (e = te.getResponseHeader("X-XHR-Redirected-To")) ? (e = new n(e), t = e.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", e.href + t)) : void 0
    }, g = function () {
        var e;
        return null != (e = te.getResponseHeader("Location")) && new n(e).crossOrigin() ? e : void 0
    }, V = function () {
        return I = document.location.href
    }, B = function () {
        return window.history.replaceState({turbolinks: !0, url: document.location.href}, "", document.location.href)
    }, W = function () {
        return v = window.history.state
    }, _ = function () {
        var e;
        return navigator.userAgent.match(/Firefox/) && !(e = new n).hasNoHash() ? (window.history.replaceState(v, "", e.withoutHash()), document.location.hash = e.hash) : void 0
    }, U = function (e) {
        return window.scrollTo(e.positionX, e.positionY)
    }, $ = function () {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, p = function (e) {
        var t, n, r;
        if (null == e || "object" != typeof e)return e;
        t = new e.constructor;
        for (n in e)r = e[n], t[n] = p(r);
        return t
    }, H = function (e) {
        var t, n;
        return n = (null != (t = document.cookie.match(new RegExp(e + "=(\\w+)"))) ? t[1].toUpperCase() : void 0) || "", document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n
    }, Z = function (e, t) {
        var n;
        return "undefined" != typeof Prototype && Event.fire(document, e, t, !0), n = document.createEvent("Events"), t && (n.data = t), n.initEvent(e, !0, !0), document.dispatchEvent(n)
    }, L = function (e) {
        return !Z(r.BEFORE_CHANGE, {url: e})
    }, P = function () {
        var e, t, n, r, a, i;
        return t = function () {
            var e;
            return 400 <= (e = te.status) && 600 > e
        }, i = function () {
            var e;
            return null != (e = te.getResponseHeader("Content-Type")) && e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, r = function (e) {
            var t, n, r, a, i;
            for (a = e.querySelector("head").childNodes, i = [], t = 0, n = a.length; n > t; t++)r = a[t], null != ("function" == typeof r.getAttribute ? r.getAttribute("data-turbolinks-track") : void 0) && i.push(r.getAttribute("src") || r.getAttribute("href"));
            return i
        }, e = function (e) {
            var t;
            return N || (N = r(document)), t = r(e), t.length !== N.length || a(t, N).length !== N.length
        }, a = function (e, t) {
            var n, r, a, i, o;
            for (e.length > t.length && (a = [t, e], e = a[0], t = a[1]), i = [], n = 0, r = e.length; r > n; n++)o = e[n], ne.call(t, o) >= 0 && i.push(o);
            return i
        }, !t() && i() && (n = y(te.responseText), n && !e(n)) ? n : void 0
    }, S = function (t) {
        var n;
        return n = t.querySelector("title"), [null != n ? n.textContent : void 0, Q(t.querySelector("body")), e.get(t).token, "runScripts"]
    }, e = {
        get: function (e) {
            var t;
            return null == e && (e = document), {
                node: t = e.querySelector('meta[name="csrf-token"]'),
                token: null != t && "function" == typeof t.getAttribute ? t.getAttribute("content") : void 0
            }
        }, update: function (e) {
            var t;
            return t = this.get(), null != t.token && null != e && t.token !== e ? t.node.setAttribute("content", e) : void 0
        }
    }, y = function (e) {
        var t;
        return t = document.documentElement.cloneNode(), t.innerHTML = e, t.head = t.querySelector("head"), t.body = t.querySelector("body"), t
    }, n = function () {
        function e(t) {
            return this.original = null != t ? t : document.location.href, this.original.constructor === e ? this.original : void this._parse()
        }

        return e.prototype.withoutHash = function () {
            return this.href.replace(this.hash, "").replace("#", "")
        }, e.prototype.withoutHashForIE10compatibility = function () {
            return this.withoutHash()
        }, e.prototype.hasNoHash = function () {
            return 0 === this.hash.length
        }, e.prototype.crossOrigin = function () {
            return this.origin !== (new e).origin
        }, e.prototype._parse = function () {
            var e;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, e = this.link, this.href = e.href, this.protocol = e.protocol, this.host = e.host, this.hostname = e.hostname, this.port = e.port, this.pathname = e.pathname, this.search = e.search, this.hash = e.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, e
    }(), a = function (e) {
        function t(e) {
            return this.link = e, this.link.constructor === t ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void t.__super__.constructor.apply(this, arguments))
        }

        return re(t, e), t.HTML_EXTENSIONS = ["html"], t.allowExtensions = function () {
            var e, n, r, a;
            for (n = 1 <= arguments.length ? ie.call(arguments, 0) : [], r = 0, a = n.length; a > r; r++)e = n[r], t.HTML_EXTENSIONS.push(e);
            return t.HTML_EXTENSIONS
        }, t.prototype.shouldIgnore = function () {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, t.prototype._anchored = function () {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
        }, t.prototype._nonHtml = function () {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + t.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, t.prototype._optOut = function () {
            var e, t;
            for (t = this.originalElement; !e && t !== document;)e = null != t.getAttribute("data-no-turbolink"), t = t.parentNode;
            return e
        }, t.prototype._target = function () {
            return 0 !== this.link.target.length
        }, t
    }(n), t = function () {
        function e(e) {
            this.event = e, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (L(this.link.absolute) || ee(this.link.href), this.event.preventDefault()))
        }

        return e.installHandlerLast = function (t) {
            return t.defaultPrevented ? void 0 : (document.removeEventListener("click", e.handle, !1), document.addEventListener("click", e.handle, !1))
        }, e.handle = function (t) {
            return new e(t)
        }, e.prototype._extractLink = function () {
            var e;
            for (e = this.event.target; e.parentNode && "A" !== e.nodeName;)e = e.parentNode;
            return "A" === e.nodeName && 0 !== e.href.length ? this.link = new a(e) : void 0
        }, e.prototype._validForTurbolinks = function () {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, e.prototype._nonStandardClick = function () {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, e
    }(), i = function () {
        function e(e) {
            this.elementSelector = e, this._trickle = oe(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
        }

        var t;
        return t = "turbolinks-progress-bar", e.prototype.install = function () {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(t), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, e.prototype.uninstall = function () {
            return this.element.classList.remove(t), document.head.removeChild(this.styleElement)
        }, e.prototype.start = function () {
            return this.advanceTo(5)
        }, e.prototype.advanceTo = function (e) {
            var t;
            if (e > (t = this.value) && 100 >= t) {
                if (this.value = e, this._updateStyle(), 100 === this.value)return this._stopTrickle();
                if (this.value > 0)return this._startTrickle()
            }
        }, e.prototype.done = function () {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, e.prototype._reset = function () {
            var e;
            return e = this.opacity, setTimeout(function (e) {
                return function () {
                    return e.opacity = 0, e._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function (t) {
                return function () {
                    return t.value = 0, t.opacity = e, t._withSpeed(0, function () {
                        return t._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, e.prototype._startTrickle = function () {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, e.prototype._stopTrickle = function () {
            return delete this.trickling
        }, e.prototype._trickle = function () {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, e.prototype._withSpeed = function (e, t) {
            var n, r;
            return n = this.speed, this.speed = e, r = t(), this.speed = n, r
        }, e.prototype._updateStyle = function (e) {
            return null == e && (e = !1), e && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, e.prototype._changeContentToForceRepaint = function () {
            return this.content = "" === this.content ? " " : ""
        }, e.prototype._createCSSRule = function () {
            return this.elementSelector + "." + t + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, e
    }(), d = function (e) {
        return setTimeout(e, 500)
    }, j = function () {
        return document.addEventListener("DOMContentLoaded", function () {
            return Z(r.CHANGE), Z(r.UPDATE)
        }, !0)
    }, A = function () {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (e, t, n) {
            return jQuery.trim(t.responseText) ? Z(r.UPDATE) : void 0
        }) : void 0
    }, E = function (e) {
        var t, r;
        return (null != (r = e.state) ? r.turbolinks : void 0) ? (t = F[new n(e.state.url).absolute]) ? (c(), x(t)) : ee(e.target.location.href) : void 0
    }, C = function () {
        return B(), W(), document.addEventListener("click", t.installHandlerLast, !0), window.addEventListener("hashchange", function (e) {
            return B(), W()
        }, !1), d(function () {
            return window.addEventListener("popstate", E, !1)
        })
    }, M = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), u = window.history && window.history.pushState && window.history.replaceState && M, o = !navigator.userAgent.match(/CriOS\//), Y = "GET" === (R = H("request_method")) || "" === R, l = u && o && Y, s = document.addEventListener && document.createEvent, s && (j(), A()), l ? (ee = D, C()) : ee = function (e) {
        return document.location.href = e
    }, this.Turbolinks = {
        visit: ee,
        pagesCached: O,
        enableTransitionCache: k,
        enableProgressBar: b,
        allowLinkExtensions: a.allowExtensions,
        supported: l,
        EVENTS: p(r)
    }
}.call(this), /*
 jQuery.Turbolinks ~ https://github.com/kossnocorp/jquery.turbolinks
 jQuery plugin for drop-in fix binded events problem caused by Turbolinks

 The MIT License
 Copyright (c) 2012-2013 Sasha Koss & Rico Sta. Cruz
 */
    function () {
        var e, t;
        e = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), t = e(document), e.turbo = {
            version: "2.1.0",
            isReady: !1,
            use: function (e, n) {
                return t.off(".turbo").on("" + e + ".turbo", this.onLoad).on("" + n + ".turbo", this.onFetch)
            },
            addCallback: function (n) {
                return e.turbo.isReady && n(e), t.on("turbo:ready", function () {
                    return n(e)
                })
            },
            onLoad: function () {
                return e.turbo.isReady = !0, t.trigger("turbo:ready")
            },
            onFetch: function () {
                return e.turbo.isReady = !1
            },
            register: function () {
                return e(this.onLoad), e.fn.ready = this.addCallback
            }
        }, e.turbo.register(), e.turbo.use("page:load", "page:fetch")
    }.call(this), /*!
 * Datepicker for Bootstrap v1.5.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function (e, t) {
        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function r() {
            var e = new Date;
            return n(e.getFullYear(), e.getMonth(), e.getDate())
        }

        function a(e, t) {
            return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
        }

        function i(e) {
            return function () {
                return this[e].apply(this, arguments)
            }
        }

        function o(e) {
            return e && !isNaN(e.getTime())
        }

        function s(t, n) {
            function r(e, t) {
                return t.toLowerCase()
            }

            var a, i = e(t).data(), o = {}, s = new RegExp("^" + n.toLowerCase() + "([A-Z])");
            n = new RegExp("^" + n.toLowerCase());
            for (var u in i)n.test(u) && (a = u.replace(s, r), o[a] = i[u]);
            return o
        }

        function u(t) {
            var n = {};
            if (y[t] || (t = t.split("-")[0], y[t])) {
                var r = y[t];
                return e.each(m, function (e, t) {
                    t in r && (n[t] = r[t])
                }), n
            }
        }

        var l = function () {
            var t = {
                get: function (e) {
                    return this.slice(e)[0]
                }, contains: function (e) {
                    for (var t = e && e.valueOf(), n = 0, r = this.length; r > n; n++)if (this[n].valueOf() === t)return n;
                    return -1
                }, remove: function (e) {
                    this.splice(e, 1)
                }, replace: function (t) {
                    t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                }, clear: function () {
                    this.length = 0
                }, copy: function () {
                    var e = new l;
                    return e.replace(this), e
                }
            };
            return function () {
                var n = [];
                return n.push.apply(n, arguments), e.extend(n, t), n
            }
        }(), d = function (t, n) {
            this._process_options(n), this.dates = new l, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = e(g.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function (e, t) {
                return parseInt(t) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
        d.prototype = {
            constructor: d, _process_options: function (a) {
                this._o = e.extend({}, this._o, a);
                var i = this.o = e.extend({}, this._o), o = i.language;
                switch (y[o] || (o = o.split("-")[0], y[o] || (o = p.language)), i.language = o, i.startView) {
                    case 2:
                    case"decade":
                        i.startView = 2;
                        break;
                    case 1:
                    case"year":
                        i.startView = 1;
                        break;
                    default:
                        i.startView = 0
                }
                switch (i.minViewMode) {
                    case 1:
                    case"months":
                        i.minViewMode = 1;
                        break;
                    case 2:
                    case"years":
                        i.minViewMode = 2;
                        break;
                    default:
                        i.minViewMode = 0
                }
                switch (i.maxViewMode) {
                    case 0:
                    case"days":
                        i.maxViewMode = 0;
                        break;
                    case 1:
                    case"months":
                        i.maxViewMode = 1;
                        break;
                    default:
                        i.maxViewMode = 2
                }
                i.startView = Math.min(i.startView, i.maxViewMode), i.startView = Math.max(i.startView, i.minViewMode), i.multidate !== !0 && (i.multidate = Number(i.multidate) || !1, i.multidate !== !1 && (i.multidate = Math.max(0, i.multidate))), i.multidateSeparator = String(i.multidateSeparator), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;
                var s = g.parseFormat(i.format);
                if (i.startDate !== -(1 / 0) && (i.startDate ? i.startDate instanceof Date ? i.startDate = this._local_to_utc(this._zero_time(i.startDate)) : i.startDate = g.parseDate(i.startDate, s, i.language) : i.startDate = -(1 / 0)), i.endDate !== 1 / 0 && (i.endDate ? i.endDate instanceof Date ? i.endDate = this._local_to_utc(this._zero_time(i.endDate)) : i.endDate = g.parseDate(i.endDate, s, i.language) : i.endDate = 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], e.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = e.map(i.daysOfWeekDisabled, function (e) {
                        return parseInt(e, 10)
                    }), i.daysOfWeekHighlighted = i.daysOfWeekHighlighted || [], e.isArray(i.daysOfWeekHighlighted) || (i.daysOfWeekHighlighted = i.daysOfWeekHighlighted.split(/[,\s]*/)), i.daysOfWeekHighlighted = e.map(i.daysOfWeekHighlighted, function (e) {
                        return parseInt(e, 10)
                    }), i.datesDisabled = i.datesDisabled || [], !e.isArray(i.datesDisabled)) {
                    var u = [];
                    u.push(g.parseDate(i.datesDisabled, s, i.language)), i.datesDisabled = u
                }
                i.datesDisabled = e.map(i.datesDisabled, function (e) {
                    return g.parseDate(e, s, i.language)
                });
                var l = String(i.orientation).toLowerCase().split(/\s+/g), d = i.orientation.toLowerCase();
                if (l = e.grep(l, function (e) {
                        return /^auto|left|right|top|bottom$/.test(e)
                    }), i.orientation = {x: "auto", y: "auto"}, d && "auto" !== d)if (1 === l.length)switch (l[0]) {
                    case"top":
                    case"bottom":
                        i.orientation.y = l[0];
                        break;
                    case"left":
                    case"right":
                        i.orientation.x = l[0]
                } else d = e.grep(l, function (e) {
                    return /^left|right$/.test(e)
                }), i.orientation.x = d[0] || "auto", d = e.grep(l, function (e) {
                    return /^top|bottom$/.test(e)
                }), i.orientation.y = d[0] || "auto"; else;
                if (i.defaultViewDate) {
                    var c = i.defaultViewDate.year || (new Date).getFullYear(), h = i.defaultViewDate.month || 0, f = i.defaultViewDate.day || 1;
                    i.defaultViewDate = n(c, h, f)
                } else i.defaultViewDate = r();
                i.showOnFocus = i.showOnFocus !== t ? i.showOnFocus : !0, i.zIndexOffset = i.zIndexOffset !== t ? i.zIndexOffset : 10
            }, _events: [], _secondaryEvents: [], _applyEvents: function (e) {
                for (var n, r, a, i = 0; i < e.length; i++)n = e[i][0], 2 === e[i].length ? (r = t, a = e[i][1]) : 3 === e[i].length && (r = e[i][1], a = e[i][2]), n.on(a, r)
            }, _unapplyEvents: function (e) {
                for (var n, r, a, i = 0; i < e.length; i++)n = e[i][0], 2 === e[i].length ? (a = t, r = e[i][1]) : 3 === e[i].length && (a = e[i][1], r = e[i][2]), n.off(r, a)
            }, _buildEvents: function () {
                var t = {
                    keyup: e.proxy(function (t) {
                        -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this), keydown: e.proxy(this.keydown, this), paste: e.proxy(this.paste, this)
                };
                this.o.showOnFocus === !0 && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [[this.element, t]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), t], [this.component, {click: e.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: e.proxy(this.show, this)}]], this._events.push([this.element, "*", {
                    blur: e.proxy(function (e) {
                        this._focused_from = e.target
                    }, this)
                }], [this.element, {
                    blur: e.proxy(function (e) {
                        this._focused_from = e.target
                    }, this)
                }]), this.o.immediateUpdates && this._events.push([this.element, {
                    "changeYear changeMonth": e.proxy(function (e) {
                        this.update(e.date)
                    }, this)
                }]), this._secondaryEvents = [[this.picker, {click: e.proxy(this.click, this)}], [e(window), {resize: e.proxy(this.place, this)}], [e(document), {
                    mousedown: e.proxy(function (e) {
                        this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
                    }, this)
                }]]
            }, _attachEvents: function () {
                this._detachEvents(), this._applyEvents(this._events)
            }, _detachEvents: function () {
                this._unapplyEvents(this._events)
            }, _attachSecondaryEvents: function () {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            }, _detachSecondaryEvents: function () {
                this._unapplyEvents(this._secondaryEvents)
            }, _trigger: function (t, n) {
                var r = n || this.dates.get(-1), a = this._utc_to_local(r);
                this.element.trigger({
                    type: t,
                    date: a,
                    dates: e.map(this.dates, this._utc_to_local),
                    format: e.proxy(function (e, t) {
                        0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
                        var n = this.dates.get(e);
                        return g.formatDate(n, t, this.o.language)
                    }, this)
                })
            }, show: function () {
                return this.element.attr("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart"in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this)
            }, hide: function () {
                return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
            }, remove: function () {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            }, paste: function (t) {
                var n;
                if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types))n = t.originalEvent.clipboardData.getData("text/plain"); else {
                    if (!window.clipboardData)return;
                    n = window.clipboardData.getData("Text")
                }
                this.setDate(n), this.update(), t.preventDefault()
            }, _utc_to_local: function (e) {
                return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
            }, _local_to_utc: function (e) {
                return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
            }, _zero_time: function (e) {
                return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
            }, _zero_utc_time: function (e) {
                return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
            }, getDates: function () {
                return e.map(this.dates, this._utc_to_local)
            }, getUTCDates: function () {
                return e.map(this.dates, function (e) {
                    return new Date(e)
                })
            }, getDate: function () {
                return this._utc_to_local(this.getUTCDate())
            }, getUTCDate: function () {
                var e = this.dates.get(-1);
                return "undefined" != typeof e ? new Date(e) : null
            }, clearDates: function () {
                var e;
                this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            }, setDates: function () {
                var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
            }, setUTCDates: function () {
                var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
            }, setDate: i("setDates"), setUTCDate: i("setUTCDates"), setValue: function () {
                var e = this.getFormattedDate();
                return this.isInput ? this.element.val(e) : this.component && this.element.find("input").val(e), this
            }, getFormattedDate: function (n) {
                n === t && (n = this.o.format);
                var r = this.o.language;
                return e.map(this.dates, function (e) {
                    return g.formatDate(e, n, r)
                }).join(this.o.multidateSeparator)
            }, setStartDate: function (e) {
                return this._process_options({startDate: e}), this.update(), this.updateNavArrows(), this
            }, setEndDate: function (e) {
                return this._process_options({endDate: e}), this.update(), this.updateNavArrows(), this
            }, setDaysOfWeekDisabled: function (e) {
                return this._process_options({daysOfWeekDisabled: e}), this.update(), this.updateNavArrows(), this
            }, setDaysOfWeekHighlighted: function (e) {
                return this._process_options({daysOfWeekHighlighted: e}), this.update(), this
            }, setDatesDisabled: function (e) {
                this._process_options({datesDisabled: e}), this.update(), this.updateNavArrows()
            }, place: function () {
                if (this.isInline)return this;
                var t = this.picker.outerWidth(), n = this.picker.outerHeight(), r = 10, a = e(this.o.container), i = a.width(), o = a.scrollTop(), s = a.offset(), u = [];
                this.element.parents().each(function () {
                    var t = e(this).css("z-index");
                    "auto" !== t && 0 !== t && u.push(parseInt(t))
                });
                var l = Math.max.apply(Math, u) + this.o.zIndexOffset, d = this.component ? this.component.parent().offset() : this.element.offset(), c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), f = d.left - s.left, p = d.top - s.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (f -= t - h)) : d.left < 0 ? (this.picker.addClass("datepicker-orient-left"), f -= d.left - r) : f + t > i ? (this.picker.addClass("datepicker-orient-right"), f = d.left + h - t) : this.picker.addClass("datepicker-orient-left");
                var m, y = this.o.orientation.y;
                if ("auto" === y && (m = -o + p - n, y = 0 > m ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + y), "top" === y ? p -= n + parseInt(this.picker.css("padding-top")) : p += c, this.o.rtl) {
                    var g = i - (f + h);
                    this.picker.css({top: p, right: g, zIndex: l})
                } else this.picker.css({top: p, left: f, zIndex: l});
                return this
            }, _allow_update: !0, update: function () {
                if (!this._allow_update)return this;
                var t = this.dates.copy(), n = [], r = !1;
                return arguments.length ? (e.each(arguments, e.proxy(function (e, t) {
                    t instanceof Date && (t = this._local_to_utc(t)), n.push(t)
                }, this)), r = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = e.map(n, e.proxy(function (e) {
                    return g.parseDate(e, this.o.format, this.o.language)
                }, this)), n = e.grep(n, e.proxy(function (e) {
                    return e < this.o.startDate || e > this.o.endDate || !e
                }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, r ? this.setValue() : n.length && String(t) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && t.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
            }, fillDow: function () {
                var e = this.o.weekStart, t = "<tr>";
                for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (e, t) {
                    return parseInt(t) + 1
                }), t += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;)t += '<th class="dow">' + y[this.o.language].daysMin[e++ % 7] + "</th>";
                t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
            }, fillMonths: function () {
                for (var e = "", t = 0; 12 > t;)e += '<span class="month">' + y[this.o.language].monthsShort[t++] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            }, setRange: function (t) {
                t && t.length ? this.range = e.map(t, function (e) {
                    return e.valueOf()
                }) : delete this.range, this.fill()
            }, getClassNames: function (t) {
                var n = [], r = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), o = new Date;
                return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < i ? n.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > i) && n.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === o.getFullYear() && t.getUTCMonth() === o.getMonth() && t.getUTCDate() === o.getDate() && n.push("today"), -1 !== this.dates.contains(t) && n.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push("disabled"), -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.o.datesDisabled.length > 0 && e.grep(this.o.datesDisabled, function (e) {
                    return a(t, e)
                }).length > 0 && n.push("disabled", "disabled-date"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && n.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && n.push("selected"), t.valueOf() === this.range[0] && n.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n
            }, fill: function () {
                var r, a = new Date(this.viewDate), i = a.getUTCFullYear(), o = a.getUTCMonth(), s = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), u = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, c = y[this.o.language].today || y.en.today || "", h = y[this.o.language].clear || y.en.clear || "", f = y[this.o.language].titleFormat || y.en.titleFormat;
                if (!isNaN(i) && !isNaN(o)) {
                    this.picker.find(".datepicker-days thead .datepicker-switch").text(g.formatDate(new n(i, o), f, this.o.language)), this.picker.find("tfoot .today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(h).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                    var p = n(i, o - 1, 28), m = g.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                    p.setUTCDate(m), p.setUTCDate(m - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                    var v = new Date(p);
                    p.getUTCFullYear() < 100 && v.setUTCFullYear(p.getUTCFullYear()), v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
                    for (var b, k = []; p.valueOf() < v;) {
                        if (p.getUTCDay() === this.o.weekStart && (k.push("<tr>"), this.o.calendarWeeks)) {
                            var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5), S = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5), D = new Date(Number(D = n(S.getUTCFullYear(), 0, 1)) + (11 - D.getUTCDay()) % 7 * 864e5), x = (S - D) / 864e5 / 7 + 1;
                            k.push('<td class="cw">' + x + "</td>")
                        }
                        if (b = this.getClassNames(p), b.push("day"), this.o.beforeShowDay !== e.noop) {
                            var T = this.o.beforeShowDay(this._utc_to_local(p));
                            T === t ? T = {} : "boolean" == typeof T ? T = {enabled: T} : "string" == typeof T && (T = {classes: T}), T.enabled === !1 && b.push("disabled"), T.classes && (b = b.concat(T.classes.split(/\s+/))), T.tooltip && (r = T.tooltip)
                        }
                        b = e.unique(b), k.push('<td class="' + b.join(" ") + '"' + (r ? ' title="' + r + '"' : "") + ">" + p.getUTCDate() + "</td>"), r = null, p.getUTCDay() === this.o.weekEnd && k.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").empty().append(k.join(""));
                    var M = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? "Months" : i).end().find("span").removeClass("active");
                    if (e.each(this.dates, function (e, t) {
                            t.getUTCFullYear() === i && M.eq(t.getUTCMonth()).addClass("active")
                        }), (s > i || i > l) && M.addClass("disabled"), i === s && M.slice(0, u).addClass("disabled"), i === l && M.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
                        var C = this;
                        e.each(M, function (t, n) {
                            if (!e(n).hasClass("disabled")) {
                                var r = new Date(i, t, 1), a = C.o.beforeShowMonth(r);
                                a === !1 && e(n).addClass("disabled")
                            }
                        })
                    }
                    k = "", i = 10 * parseInt(i / 10, 10);
                    var j = this.picker.find(".datepicker-years").find(".datepicker-switch").text(i + "-" + (i + 9)).end().find("td");
                    i -= 1;
                    for (var E, A = e.map(this.dates, function (e) {
                        return e.getUTCFullYear()
                    }), N = -1; 11 > N; N++) {
                        if (E = ["year"], r = null, -1 === N ? E.push("old") : 10 === N && E.push("new"), -1 !== e.inArray(i, A) && E.push("active"), (s > i || i > l) && E.push("disabled"), this.o.beforeShowYear !== e.noop) {
                            var _ = this.o.beforeShowYear(new Date(i, 0, 1));
                            _ === t ? _ = {} : "boolean" == typeof _ ? _ = {enabled: _} : "string" == typeof _ && (_ = {classes: _}), _.enabled === !1 && E.push("disabled"), _.classes && (E = E.concat(_.classes.split(/\s+/))), _.tooltip && (r = _.tooltip)
                        }
                        k += '<span class="' + E.join(" ") + '"' + (r ? ' title="' + r + '"' : "") + ">" + i + "</span>", i += 1
                    }
                    j.html(k)
                }
            }, updateNavArrows: function () {
                if (this._allow_update) {
                    var e = new Date(this.viewDate), t = e.getUTCFullYear(), n = e.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -(1 / 0) && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -(1 / 0) && t <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                    }
                }
            }, click: function (t) {
                t.preventDefault(), t.stopPropagation();
                var r, a, i, o = e(t.target).closest("span, td, th");
                if (1 === o.length)switch (o[0].nodeName.toLowerCase()) {
                    case"th":
                        switch (o[0].className) {
                            case"datepicker-switch":
                                this.showMode(1);
                                break;
                            case"prev":
                            case"next":
                                var s = g.modes[this.viewMode].navStep * ("prev" === o[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                                }
                                this.fill();
                                break;
                            case"today":
                                var u = new Date;
                                u = n(u.getFullYear(), u.getMonth(), u.getDate(), 0, 0, 0), this.showMode(-2);
                                var l = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(u, l);
                                break;
                            case"clear":
                                this.clearDates()
                        }
                        break;
                    case"span":
                        o.hasClass("disabled") || (this.viewDate.setUTCDate(1), o.hasClass("month") ? (i = 1, a = o.parent().find("span").index(o), r = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(n(r, a, i)), this.showMode()) : this.showMode(-1)) : (i = 1, a = 0, r = parseInt(o.text(), 10) || 0, this.viewDate.setUTCFullYear(r), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(r, a, i)), this.showMode(-1)), this.fill());
                        break;
                    case"td":
                        o.hasClass("day") && !o.hasClass("disabled") && (i = parseInt(o.text(), 10) || 1, r = this.viewDate.getUTCFullYear(), a = this.viewDate.getUTCMonth(), o.hasClass("old") ? 0 === a ? (a = 11, r -= 1) : a -= 1 : o.hasClass("new") && (11 === a ? (a = 0, r += 1) : a += 1), this._setDate(n(r, a, i)))
                }
                this.picker.is(":visible") && this._focused_from && e(this._focused_from).focus(), delete this._focused_from
            }, _toggle_multidate: function (e) {
                var t = this.dates.contains(e);
                if (e || this.dates.clear(), -1 !== t ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate)for (; this.dates.length > this.o.multidate;)this.dates.remove(0)
            }, _setDate: function (e, t) {
                t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate");
                var n;
                this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || t && "date" !== t || this.hide()
            }, moveMonth: function (e, t) {
                if (!o(e))return this.o.defaultViewDate;
                if (!t)return e;
                var n, r, a = new Date(e.valueOf()), i = a.getUTCDate(), s = a.getUTCMonth(), u = Math.abs(t);
                if (t = t > 0 ? 1 : -1, 1 === u)r = -1 === t ? function () {
                    return a.getUTCMonth() === s
                } : function () {
                    return a.getUTCMonth() !== n
                }, n = s + t, a.setUTCMonth(n), (0 > n || n > 11) && (n = (n + 12) % 12); else {
                    for (var l = 0; u > l; l++)a = this.moveMonth(a, t);
                    n = a.getUTCMonth(), a.setUTCDate(i), r = function () {
                        return n !== a.getUTCMonth()
                    }
                }
                for (; r();)a.setUTCDate(--i), a.setUTCMonth(n);
                return a
            }, moveYear: function (e, t) {
                return this.moveMonth(e, 12 * t)
            }, dateWithinRange: function (e) {
                return e >= this.o.startDate && e <= this.o.endDate
            }, keydown: function (e) {
                if (!this.picker.is(":visible"))return void((40 === e.keyCode || 27 === e.keyCode) && (this.show(), e.stopPropagation()));
                var t, n, a, i = !1, o = this.focusDate || this.viewDate;
                switch (e.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
                        break;
                    case 37:
                    case 39:
                        if (!this.o.keyboardNavigation)break;
                        t = 37 === e.keyCode ? -1 : 1, e.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || r(), t), a = this.moveYear(o, t), this._trigger("changeYear", this.viewDate)) : e.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || r(), t), a = this.moveMonth(o, t), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || r()), n.setUTCDate(n.getUTCDate() + t), a = new Date(o), a.setUTCDate(o.getUTCDate() + t)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), e.preventDefault());
                        break;
                    case 38:
                    case 40:
                        if (!this.o.keyboardNavigation)break;
                        t = 38 === e.keyCode ? -1 : 1, e.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || r(), t), a = this.moveYear(o, t), this._trigger("changeYear", this.viewDate)) : e.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || r(), t), a = this.moveMonth(o, t), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || r()), n.setUTCDate(n.getUTCDate() + 7 * t), a = new Date(o), a.setUTCDate(o.getUTCDate() + 7 * t)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), e.preventDefault());
                        break;
                    case 32:
                        break;
                    case 13:
                        if (!this.o.forceParse)break;
                        o = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(o), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), "function" == typeof e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                if (i) {
                    this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                    var s;
                    this.isInput ? s = this.element : this.component && (s = this.element.find("input")), s && s.change()
                }
            }, showMode: function (e) {
                e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + g.modes[this.viewMode].clsName).show(), this.updateNavArrows()
            }
        };
        var c = function (t, n) {
            this.element = e(t), this.inputs = e.map(n.inputs, function (e) {
                return e.jquery ? e[0] : e
            }), delete n.inputs, f.call(e(this.inputs), n).on("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function (t) {
                return e(t).data("datepicker")
            }), this.updateDates()
        };
        c.prototype = {
            updateDates: function () {
                this.dates = e.map(this.pickers, function (e) {
                    return e.getUTCDate()
                }), this.updateRanges()
            }, updateRanges: function () {
                var t = e.map(this.dates, function (e) {
                    return e.valueOf()
                });
                e.each(this.pickers, function (e, n) {
                    n.setRange(t)
                })
            }, dateUpdated: function (t) {
                if (!this.updating) {
                    this.updating = !0;
                    var n = e(t.target).data("datepicker");
                    if ("undefined" != typeof n) {
                        var r = n.getUTCDate(), a = e.inArray(t.target, this.inputs), i = a - 1, o = a + 1, s = this.inputs.length;
                        if (-1 !== a) {
                            if (e.each(this.pickers, function (e, t) {
                                    t.getUTCDate() || t.setUTCDate(r)
                                }), r < this.dates[i])for (; i >= 0 && r < this.dates[i];)this.pickers[i--].setUTCDate(r); else if (r > this.dates[o])for (; s > o && r > this.dates[o];)this.pickers[o++].setUTCDate(r);
                            this.updateDates(), delete this.updating
                        }
                    }
                }
            }, remove: function () {
                e.map(this.pickers, function (e) {
                    e.remove()
                }), delete this.element.data().datepicker
            }
        };
        var h = e.fn.datepicker, f = function (n) {
            var r = Array.apply(null, arguments);
            r.shift();
            var a;
            if (this.each(function () {
                    var t = e(this), i = t.data("datepicker"), o = "object" == typeof n && n;
                    if (!i) {
                        var l = s(this, "date"), h = e.extend({}, p, l, o), f = u(h.language), m = e.extend({}, p, f, l, o);
                        if (t.hasClass("input-daterange") || m.inputs) {
                            var y = {inputs: m.inputs || t.find("input").toArray()};
                            t.data("datepicker", i = new c(this, e.extend(m, y)))
                        } else t.data("datepicker", i = new d(this, m))
                    }
                    "string" == typeof n && "function" == typeof i[n] && (a = i[n].apply(i, r))
                }), a === t || a instanceof d || a instanceof c)return this;
            if (this.length > 1)throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
            return a
        };
        e.fn.datepicker = f;
        var p = e.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: e.noop,
            beforeShowMonth: e.noop,
            beforeShowYear: e.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            daysOfWeekHighlighted: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            maxViewMode: 2,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -(1 / 0),
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            enableOnReadonly: !0,
            container: "body",
            immediateUpdates: !1,
            title: ""
        }, m = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        e.fn.datepicker.Constructor = d;
        var y = e.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy"
            }
        }, g = {
            modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
            isLeapYear: function (e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            },
            getDaysInMonth: function (e, t) {
                return [31, g.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function (e) {
                if ("function" == typeof e.toValue && "function" == typeof e.toDisplay)return e;
                var t = e.replace(this.validParts, "\x00").split("\x00"), n = e.match(this.validParts);
                if (!t || !t.length || !n || 0 === n.length)throw new Error("Invalid date format.");
                return {separators: t, parts: n}
            },
            parseDate: function (r, a, i) {
                function o() {
                    var e = this.slice(0, h[l].length), t = h[l].slice(0, e.length);
                    return e.toLowerCase() === t.toLowerCase()
                }

                if (!r)return t;
                if (r instanceof Date)return r;
                if ("string" == typeof a && (a = g.parseFormat(a)), a.toValue)return a.toValue(r, a, i);
                var s, u, l, c = /([\-+]\d+)([dmwy])/, h = r.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(r)) {
                    for (r = new Date, l = 0; l < h.length; l++)switch (s = c.exec(h[l]), u = parseInt(s[1]), s[2]) {
                        case"d":
                            r.setUTCDate(r.getUTCDate() + u);
                            break;
                        case"m":
                            r = d.prototype.moveMonth.call(d.prototype, r, u);
                            break;
                        case"w":
                            r.setUTCDate(r.getUTCDate() + 7 * u);
                            break;
                        case"y":
                            r = d.prototype.moveYear.call(d.prototype, r, u)
                    }
                    return n(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), 0, 0, 0)
                }
                h = r && r.match(this.nonpunctuation) || [], r = new Date;
                var f, p, m = {}, v = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], b = {
                    yyyy: function (e, t) {
                        return e.setUTCFullYear(t)
                    }, yy: function (e, t) {
                        return e.setUTCFullYear(2e3 + t)
                    }, m: function (e, t) {
                        if (isNaN(e))return e;
                        for (t -= 1; 0 > t;)t += 12;
                        for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;)e.setUTCDate(e.getUTCDate() - 1);
                        return e
                    }, d: function (e, t) {
                        return e.setUTCDate(t)
                    }
                };
                b.M = b.MM = b.mm = b.m, b.dd = b.d, r = n(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0);
                var k = a.parts.slice();
                if (h.length !== k.length && (k = e(k).filter(function (t, n) {
                        return -1 !== e.inArray(n, v)
                    }).toArray()), h.length === k.length) {
                    var w;
                    for (l = 0, w = k.length; w > l; l++) {
                        if (f = parseInt(h[l], 10), s = k[l], isNaN(f))switch (s) {
                            case"MM":
                                p = e(y[i].months).filter(o), f = e.inArray(p[0], y[i].months) + 1;
                                break;
                            case"M":
                                p = e(y[i].monthsShort).filter(o), f = e.inArray(p[0], y[i].monthsShort) + 1
                        }
                        m[s] = f
                    }
                    var S, D;
                    for (l = 0; l < v.length; l++)D = v[l], D in m && !isNaN(m[D]) && (S = new Date(r), b[D](S, m[D]), isNaN(S) || (r = S))
                }
                return r
            },
            formatDate: function (t, n, r) {
                if (!t)return "";
                if ("string" == typeof n && (n = g.parseFormat(n)), n.toDisplay)return n.toDisplay(t, n, r);
                var a = {
                    d: t.getUTCDate(),
                    D: y[r].daysShort[t.getUTCDay()],
                    DD: y[r].days[t.getUTCDay()],
                    m: t.getUTCMonth() + 1,
                    M: y[r].monthsShort[t.getUTCMonth()],
                    MM: y[r].months[t.getUTCMonth()],
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear()
                };
                a.dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m, t = [];
                for (var i = e.extend([], n.separators), o = 0, s = n.parts.length; s >= o; o++)i.length && t.push(i.shift()), t.push(a[n.parts[o]]);
                return t.join("")
            },
            headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
        g.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = g, e.fn.datepicker.noConflict = function () {
            return e.fn.datepicker = h, this
        }, e.fn.datepicker.version = "1.5.0", e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
            var n = e(this);
            n.data("datepicker") || (t.preventDefault(), f.call(n, "show"))
        }), e(function () {
            f.call(e('[data-provide="datepicker-inline"]'))
        })
    }), function (e) {
    e.fn.datepicker.dates.ar = {
        days: ["\u0627\u0644\u0623\u062d\u062f", "\u0627\u0644\u0627\u062b\u0646\u064a\u0646", "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062e\u0645\u064a\u0633", "\u0627\u0644\u062c\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062a", "\u0627\u0644\u0623\u062d\u062f"],
        daysShort: ["\u0623\u062d\u062f", "\u0627\u062b\u0646\u064a\u0646", "\u062b\u0644\u0627\u062b\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639\u0629", "\u0633\u0628\u062a", "\u0623\u062d\u062f"],
        daysMin: ["\u062d", "\u0646", "\u062b", "\u0639", "\u062e", "\u062c", "\u0633", "\u062d"],
        months: ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"],
        monthsShort: ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"],
        today: "\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645",
        rtl: !0
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.az = {
        days: ["Bazar", "Bazar ert\u0259si", "\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131", "\xc7\u0259r\u015f\u0259nb\u0259", "C\xfcm\u0259 ax\u015fam\u0131", "C\xfcm\u0259", "\u015e\u0259nb\u0259"],
        daysShort: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."],
        daysMin: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."],
        months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
        monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "\u0130yun", "\u0130yul", "Avq", "Sen", "Okt", "Noy", "Dek"],
        today: "Bu g\xfcn",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.bg = {
        days: ["\u041d\u0435\u0434\u0435\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u044f\u0434\u0430", "\u0427\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a", "\u041f\u0435\u0442\u044a\u043a", "\u0421\u044a\u0431\u043e\u0442\u0430"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0412\u0442\u043e", "\u0421\u0440\u044f", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u044a\u0431"],
        daysMin: ["\u041d", "\u041f", "\u0412", "\u0421", "\u0427", "\u041f", "\u0421"],
        months: ["\u042f\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],
        monthsShort: ["\u042f\u043d", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0435", "\u0414\u0435\u043a"],
        today: "\u0434\u043d\u0435\u0441"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.bs = {
        days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"],
        daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
        daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"],
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        today: "Danas",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ca = {
        days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        daysShort: ["Diu", "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"],
        daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
        months: ["Gener", "Febrer", "Mar\xe7", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
        today: "Avui",
        clear: "Esborrar",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.cs = {
        days: ["Ned\u011ble", "Pond\u011bl\xed", "\xdater\xfd", "St\u0159eda", "\u010ctvrtek", "P\xe1tek", "Sobota"],
        daysShort: ["Ned", "Pon", "\xdate", "St\u0159", "\u010ctv", "P\xe1t", "Sob"],
        daysMin: ["Ne", "Po", "\xdat", "St", "\u010ct", "P\xe1", "So"],
        months: ["Leden", "\xdanor", "B\u0159ezen", "Duben", "Kv\u011bten", "\u010cerven", "\u010cervenec", "Srpen", "Z\xe1\u0159\xed", "\u0158\xedjen", "Listopad", "Prosinec"],
        monthsShort: ["Led", "\xdano", "B\u0159e", "Dub", "Kv\u011b", "\u010cer", "\u010cnc", "Srp", "Z\xe1\u0159", "\u0158\xedj", "Lis", "Pro"],
        today: "Dnes",
        clear: "Vymazat",
        weekStart: 1,
        format: "dd.m.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.cy = {
        days: ["Sul", "Llun", "Mawrth", "Mercher", "Iau", "Gwener", "Sadwrn"],
        daysShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"],
        daysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gwe", "Sa"],
        months: ["Ionawr", "Chewfror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorfennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
        monthsShort: ["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rha"],
        today: "Heddiw"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.da = {
        days: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"],
        daysShort: ["s\xf8n", "man", "tir", "ons", "tor", "fre", "l\xf8r"],
        daysMin: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"],
        months: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
        monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        today: "I Dag",
        clear: "Nulstil"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.de = {
        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
        daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        months: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthsShort: ["Jan", "Feb", "M\xe4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        today: "Heute",
        clear: "L\xf6schen",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.el = {
        days: ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"],
        daysShort: ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"],
        daysMin: ["\u039a\u03c5", "\u0394\u03b5", "\u03a4\u03c1", "\u03a4\u03b5", "\u03a0\u03b5", "\u03a0\u03b1", "\u03a3\u03b1"],
        months: ["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"],
        monthsShort: ["\u0399\u03b1\u03bd", "\u03a6\u03b5\u03b2", "\u039c\u03b1\u03c1", "\u0391\u03c0\u03c1", "\u039c\u03ac\u03b9", "\u0399\u03bf\u03c5\u03bd", "\u0399\u03bf\u03c5\u03bb", "\u0391\u03c5\u03b3", "\u03a3\u03b5\u03c0", "\u039f\u03ba\u03c4", "\u039d\u03bf\u03b5", "\u0394\u03b5\u03ba"],
        today: "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1",
        clear: "\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2",
        weekStart: 1,
        format: "d/m/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["en-GB"] = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.eo = {
        days: ["diman\u0109o", "lundo", "mardo", "merkredo", "\u0135a\u016ddo", "vendredo", "sabato"],
        daysShort: ["dim.", "lun.", "mar.", "mer.", "\u0135a\u016d.", "ven.", "sam."],
        daysMin: ["d", "l", "ma", "me", "\u0135", "v", "s"],
        months: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a\u016dgusto", "septembro", "oktobro", "novembro", "decembro"],
        monthsShort: ["jan.", "feb.", "mar.", "apr.", "majo", "jun.", "jul.", "a\u016dg.", "sep.", "okt.", "nov.", "dec."],
        today: "Hodia\u016d",
        clear: "Nuligi",
        weekStart: 1,
        format: "yyyy-mm-dd"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.es = {
        days: ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"],
        daysShort: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy",
        clear: "Borrar",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.et = {
        days: ["P\xfchap\xe4ev", "Esmasp\xe4ev", "Teisip\xe4ev", "Kolmap\xe4ev", "Neljap\xe4ev", "Reede", "Laup\xe4ev"],
        daysShort: ["P\xfchap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
        daysMin: ["P", "E", "T", "K", "N", "R", "L"],
        months: ["Jaanuar", "Veebruar", "M\xe4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        monthsShort: ["Jaan", "Veebr", "M\xe4rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        today: "T\xe4na",
        clear: "T\xfchjenda",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.eu = {
        days: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"],
        daysShort: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"],
        daysMin: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"],
        months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
        monthsShort: ["Urt", "Ots", "Mar", "Api", "Mai", "Eka", "Uzt", "Abu", "Ira", "Urr", "Aza", "Abe"],
        today: "Gaur"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.fa = {
        days: ["\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200c\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647"],
        daysShort: ["\u06cc\u06a9", "\u062f\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067e\u0646\u062c", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9"],
        daysMin: ["\u06cc", "\u062f", "\u0633", "\u0686", "\u067e", "\u062c", "\u0634", "\u06cc"],
        months: ["\u0698\u0627\u0646\u0648\u06cc\u0647", "\u0641\u0648\u0631\u06cc\u0647", "\u0645\u0627\u0631\u0633", "\u0622\u0648\u0631\u06cc\u0644", "\u0645\u0647", "\u0698\u0648\u0626\u0646", "\u0698\u0648\u0626\u06cc\u0647", "\u0627\u0648\u062a", "\u0633\u067e\u062a\u0627\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0628\u0631", "\u0646\u0648\u0627\u0645\u0628\u0631", "\u062f\u0633\u0627\u0645\u0628\u0631"],
        monthsShort: ["\u0698\u0627\u0646", "\u0641\u0648\u0631", "\u0645\u0627\u0631", "\u0622\u0648\u0631", "\u0645\u0647", "\u0698\u0648\u0646", "\u0698\u0648\u06cc", "\u0627\u0648\u062a", "\u0633\u067e\u062a", "\u0627\u06a9\u062a", "\u0646\u0648\u0627", "\u062f\u0633\u0627"],
        today: "\u0627\u0645\u0631\u0648\u0632",
        clear: "\u067e\u0627\u06a9 \u06a9\u0646",
        weekStart: 1,
        format: "yyyy/mm/dd"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.fi = {
        days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
        daysShort: ["sun", "maa", "tii", "kes", "tor", "per", "lau"],
        daysMin: ["su", "ma", "ti", "ke", "to", "pe", "la"],
        months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xe4kuu", "hein\xe4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
        monthsShort: ["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"],
        today: "t\xe4n\xe4\xe4n",
        clear: "Tyhjenn\xe4",
        weekStart: 1,
        format: "d.m.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.fo = {
        days: ["Sunnudagur", "M\xe1nadagur", "T\xfdsdagur", "Mikudagur", "H\xf3sdagur", "Fr\xedggjadagur", "Leygardagur"],
        daysShort: ["Sun", "M\xe1n", "T\xfds", "Mik", "H\xf3s", "Fr\xed", "Ley"],
        daysMin: ["Su", "M\xe1", "T\xfd", "Mi", "H\xf3", "Fr", "Le"],
        months: ["Januar", "Februar", "Marts", "Apr\xedl", "Mei", "Juni", "Juli", "August", "Septembur", "Oktobur", "Novembur", "Desembur"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        today: "\xcd Dag",
        clear: "Reinsa"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.fr = {
        days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        daysMin: ["D", "L", "Ma", "Me", "J", "V", "S"],
        months: ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre", "Octobre", "Novembre", "D\xe9cembre"],
        monthsShort: ["Jan", "F\xe9v", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "D\xe9c"],
        today: "Aujourd'hui",
        clear: "Effacer",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.fr = {
        days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
        months: ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"],
        monthsShort: ["janv.", "f\xe9vr.", "mars", "avril", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."],
        today: "Aujourd'hui",
        clear: "Effacer",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.gl = {
        days: ["Domingo", "Luns", "Martes", "M\xe9rcores", "Xoves", "Venres", "S\xe1bado"],
        daysShort: ["Dom", "Lun", "Mar", "M\xe9r", "Xov", "Ven", "S\xe1b"],
        daysMin: ["Do", "Lu", "Ma", "Me", "Xo", "Ve", "Sa"],
        months: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xu\xf1o", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"],
        monthsShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "Xun", "Xul", "Ago", "Sep", "Out", "Nov", "Dec"],
        today: "Hoxe",
        clear: "Limpar",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.he = {
        days: ["\u05e8\u05d0\u05e9\u05d5\u05df", "\u05e9\u05e0\u05d9", "\u05e9\u05dc\u05d9\u05e9\u05d9", "\u05e8\u05d1\u05d9\u05e2\u05d9", "\u05d7\u05de\u05d9\u05e9\u05d9", "\u05e9\u05d9\u05e9\u05d9", "\u05e9\u05d1\u05ea", "\u05e8\u05d0\u05e9\u05d5\u05df"],
        daysShort: ["\u05d0", "\u05d1", "\u05d2", "\u05d3", "\u05d4", "\u05d5", "\u05e9", "\u05d0"],
        daysMin: ["\u05d0", "\u05d1", "\u05d2", "\u05d3", "\u05d4", "\u05d5", "\u05e9", "\u05d0"],
        months: ["\u05d9\u05e0\u05d5\u05d0\u05e8", "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8\u05d9\u05dc", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0\u05d9", "\u05d9\u05d5\u05dc\u05d9", "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8", "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8", "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8", "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8", "\u05d3\u05e6\u05de\u05d1\u05e8"],
        monthsShort: ["\u05d9\u05e0\u05d5", "\u05e4\u05d1\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0", "\u05d9\u05d5\u05dc", "\u05d0\u05d5\u05d2", "\u05e1\u05e4\u05d8", "\u05d0\u05d5\u05e7", "\u05e0\u05d5\u05d1", "\u05d3\u05e6\u05de"],
        today: "\u05d4\u05d9\u05d5\u05dd",
        rtl: !0
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.hr = {
        days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"],
        daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
        daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"],
        months: ["Sije\u010danj", "Velja\u010da", "O\u017eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        monthsShort: ["Sij", "Velj", "O\u017eu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        today: "Danas"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.hu = {
        days: ["vas\xe1rnap", "h\xe9tf\u0151", "kedd", "szerda", "cs\xfct\xf6rt\xf6k", "p\xe9ntek", "szombat"],
        daysShort: ["vas", "h\xe9t", "ked", "sze", "cs\xfc", "p\xe9n", "szo"],
        daysMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
        months: ["janu\xe1r", "febru\xe1r", "m\xe1rcius", "\xe1prilis", "m\xe1jus", "j\xfanius", "j\xfalius", "augusztus", "szeptember", "okt\xf3ber", "november", "december"],
        monthsShort: ["jan", "feb", "m\xe1r", "\xe1pr", "m\xe1j", "j\xfan", "j\xfal", "aug", "sze", "okt", "nov", "dec"],
        today: "ma",
        weekStart: 1,
        clear: "t\xf6r\xf6l",
        titleFormat: "yyyy. MM",
        format: "yyyy.mm.dd"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.hy = {
        days: ["\u053f\u056b\u0580\u0561\u056f\u056b", "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b", "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b", "\u0548\u0582\u0580\u0562\u0561\u0569", "\u0547\u0561\u0562\u0561\u0569"],
        daysShort: ["\u053f\u056b\u0580", "\u0535\u0580\u056f", "\u0535\u0580\u0584", "\u0549\u0578\u0580", "\u0540\u0576\u0563", "\u0548\u0582\u0580", "\u0547\u0561\u0562"],
        daysMin: ["\u053f\u056b", "\u0535\u056f", "\u0535\u0584", "\u0549\u0578", "\u0540\u056b", "\u0548\u0582", "\u0547\u0561"],
        months: ["\u0540\u0578\u0582\u0576\u057e\u0561\u0580", "\u0553\u0565\u057f\u0580\u057e\u0561\u0580", "\u0544\u0561\u0580\u057f", "\u0531\u057a\u0580\u056b\u056c", "\u0544\u0561\u0575\u056b\u057d", "\u0540\u0578\u0582\u0576\u056b\u057d", "\u0540\u0578\u0582\u056c\u056b\u057d", "\u0555\u0563\u0578\u057d\u057f\u0578\u057d", "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580", "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580", "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"],
        monthsShort: ["\u0540\u0576\u057e", "\u0553\u0565\u057f", "\u0544\u0561\u0580", "\u0531\u057a\u0580", "\u0544\u0561\u0575", "\u0540\u0578\u0582\u0576", "\u0540\u0578\u0582\u056c", "\u0555\u0563\u057d", "\u054d\u0565\u057a", "\u0540\u0578\u056f", "\u0546\u0578\u0575", "\u0534\u0565\u056f"],
        today: "\u0531\u0575\u057d\u0585\u0580",
        clear: "\u054b\u0576\u057b\u0565\u056c",
        format: "dd.mm.yyyy",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.id = {
        days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"],
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
        today: "Hari Ini",
        clear: "Kosongkan"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.is = {
        days: ["Sunnudagur", "M\xe1nudagur", "\xderi\xf0judagur", "Mi\xf0vikudagur", "Fimmtudagur", "F\xf6studagur", "Laugardagur"],
        daysShort: ["Sun", "M\xe1n", "\xderi", "Mi\xf0", "Fim", "F\xf6s", "Lau"],
        daysMin: ["Su", "M\xe1", "\xder", "Mi", "Fi", "F\xf6", "La"],
        months: ["Jan\xfaar", "Febr\xfaar", "Mars", "Apr\xedl", "Ma\xed", "J\xfan\xed", "J\xfal\xed", "\xc1g\xfast", "September", "Okt\xf3ber", "N\xf3vember", "Desember"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Ma\xed", "J\xfan", "J\xfal", "\xc1g\xfa", "Sep", "Okt", "N\xf3v", "Des"],
        today: "\xcd Dag"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.it = {
        days: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"],
        daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        today: "Oggi",
        clear: "Cancella",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.it = {
        days: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"],
        daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        today: "Oggi",
        clear: "Cancella",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ja = {
        days: ["\u65e5\u66dc", "\u6708\u66dc", "\u706b\u66dc", "\u6c34\u66dc", "\u6728\u66dc", "\u91d1\u66dc", "\u571f\u66dc"],
        daysShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
        daysMin: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
        months: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        today: "\u4eca\u65e5",
        format: "yyyy/mm/dd",
        titleFormat: "yyyy\u5e74mm\u6708",
        clear: "\u30af\u30ea\u30a2"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ka = {
        days: ["\u10d9\u10d5\u10d8\u10e0\u10d0", "\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8", "\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"],
        daysShort: ["\u10d9\u10d5\u10d8", "\u10dd\u10e0\u10e8", "\u10e1\u10d0\u10db", "\u10dd\u10d7\u10ee", "\u10ee\u10e3\u10d7", "\u10de\u10d0\u10e0", "\u10e8\u10d0\u10d1"],
        daysMin: ["\u10d9\u10d5", "\u10dd\u10e0", "\u10e1\u10d0", "\u10dd\u10d7", "\u10ee\u10e3", "\u10de\u10d0", "\u10e8\u10d0"],
        months: ["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8", "\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8", "\u10db\u10d0\u10e0\u10e2\u10d8", "\u10d0\u10de\u10e0\u10d8\u10da\u10d8", "\u10db\u10d0\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10da\u10d8\u10e1\u10d8", "\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd", "\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10dd\u10e5\u10e2\u10dd\u10db\u10d4\u10d1\u10d8", "\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"],
        monthsShort: ["\u10d8\u10d0\u10dc", "\u10d7\u10d4\u10d1", "\u10db\u10d0\u10e0", "\u10d0\u10de\u10e0", "\u10db\u10d0\u10d8", "\u10d8\u10d5\u10dc", "\u10d8\u10d5\u10da", "\u10d0\u10d2\u10d5", "\u10e1\u10d4\u10e5", "\u10dd\u10e5\u10e2", "\u10dc\u10dd\u10d4", "\u10d3\u10d4\u10d9"],
        today: "\u10d3\u10e6\u10d4\u10e1",
        clear: "\u10d2\u10d0\u10e1\u10e3\u10e4\u10d7\u10d0\u10d5\u10d4\u10d1\u10d0",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.kh = {
        days: ["\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd", "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799"],
        daysShort: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd", "\u17a2\u17b6.\u1791\u17b7"],
        daysMin: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd", "\u17a2\u17b6.\u1791\u17b7"],
        months: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"],
        monthsShort: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"],
        today: "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7",
        clear: "\u179f\u17c6\u17a2\u17b6\u178f"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.kk = {
        days: ["\u0416\u0435\u043a\u0441\u0435\u043d\u0431\u0456", "\u0414\u04af\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u04d9\u0440\u0441\u0435\u043d\u0431\u0456", "\u0411\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0416\u04b1\u043c\u0430", "\u0421\u0435\u043d\u0431\u0456"],
        daysShort: ["\u0416\u0435\u043a", "\u0414\u04af\u0439", "\u0421\u0435\u0439", "\u0421\u04d9\u0440", "\u0411\u0435\u0439", "\u0416\u04b1\u043c", "\u0421\u0435\u043d"],
        daysMin: ["\u0416\u043a", "\u0414\u0441", "\u0421\u0441", "\u0421\u0440", "\u0411\u0441", "\u0416\u043c", "\u0421\u043d"],
        months: ["\u049a\u0430\u04a3\u0442\u0430\u0440", "\u0410\u049b\u043f\u0430\u043d", "\u041d\u0430\u0443\u0440\u044b\u0437", "\u0421\u04d9\u0443\u0456\u0440", "\u041c\u0430\u043c\u044b\u0440", "\u041c\u0430\u0443\u0441\u044b\u043c", "\u0428\u0456\u043b\u0434\u0435", "\u0422\u0430\u043c\u044b\u0437", "\u049a\u044b\u0440\u043a\u04af\u0439\u0435\u043a", "\u049a\u0430\u0437\u0430\u043d", "\u049a\u0430\u0440\u0430\u0448\u0430", "\u0416\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"],
        monthsShort: ["\u049a\u0430\u04a3", "\u0410\u049b\u043f", "\u041d\u0430\u0443", "\u0421\u04d9\u0443", "\u041c\u0430\u043c\u044b\u0440", "\u041c\u0430\u0443", "\u0428\u043b\u0434", "\u0422\u043c\u0437", "\u049a\u044b\u0440", "\u049a\u0437\u043d", "\u049a\u0430\u0440", "\u0416\u0435\u043b"],
        today: "\u0411\u04af\u0433\u0456\u043d",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ko = {
        days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"],
        daysShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
        daysMin: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
        months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
        monthsShort: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
        today: "\uc624\ub298",
        clear: "\uc0ad\uc81c",
        format: "YYYY-MM-DD",
        titleFormat: "yyyy\ub144mm\uc6d4",
        weekStart: 0
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.kr = {
        days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"],
        daysShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
        daysMin: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
        months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
        monthsShort: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"]
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.lt = {
        days: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre\u010diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis"],
        daysShort: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"],
        daysMin: ["Sk", "Pr", "An", "Tr", "Ke", "Pn", "\u0160t"],
        months: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu\u017e\u0117", "Bir\u017eelis", "Liepa", "Rugpj\u016btis", "Rugs\u0117jis", "Spalis", "Lapkritis", "Gruodis"],
        monthsShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
        today: "\u0160iandien",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.lv = {
        days: ["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
        daysShort: ["Sv", "P", "O", "T", "C", "Pk", "S"],
        daysMin: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
        months: ["Janv\u0101ris", "Febru\u0101ris", "Marts", "Apr\u012blis", "Maijs", "J\u016bnijs", "J\u016blijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "J\u016bn", "J\u016bl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        today: "\u0160odien",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.me = {
        days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"],
        daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
        daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"],
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        today: "Danas",
        weekStart: 1,
        clear: "Izbri\u0161i",
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.mk = {
        days: ["\u041d\u0435\u0434\u0435\u043b\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a", "\u041f\u0435\u0442\u043e\u043a", "\u0421\u0430\u0431\u043e\u0442\u0430"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0412\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0430\u0431"],
        daysMin: ["\u041d\u0435", "\u041f\u043e", "\u0412\u0442", "\u0421\u0440", "\u0427\u0435", "\u041f\u0435", "\u0421\u0430"],
        months: ["\u0408\u0430\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d\u0438", "\u0408\u0443\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],
        monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0435", "\u0414\u0435\u043a"],
        today: "\u0414\u0435\u043d\u0435\u0441",
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.mn = {
        days: ["\u041d\u044f\u043c", "\u0414\u0430\u0432\u0430\u0430", "\u041c\u044f\u0433\u043c\u0430\u0440", "\u041b\u0445\u0430\u0433\u0432\u0430", "\u041f\u04af\u0440\u044d\u0432", "\u0411\u0430\u0430\u0441\u0430\u043d", "\u0411\u044f\u043c\u0431\u0430"],
        daysShort: ["\u041d\u044f\u043c", "\u0414\u0430\u0432", "\u041c\u044f\u0433", "\u041b\u0445\u0430", "\u041f\u04af\u0440", "\u0411\u0430\u0430", "\u0411\u044f\u043c"],
        daysMin: ["\u041d\u044f", "\u0414\u0430", "\u041c\u044f", "\u041b\u0445", "\u041f\u04af", "\u0411\u0430", "\u0411\u044f"],
        months: ["\u0425\u0443\u043b\u0433\u0430\u043d\u0430", "\u04ae\u0445\u044d\u0440", "\u0411\u0430\u0440", "\u0422\u0443\u0443\u043b\u0430\u0439", "\u041b\u0443\u0443", "\u041c\u043e\u0433\u043e\u0439", "\u041c\u043e\u0440\u044c", "\u0425\u043e\u043d\u044c", "\u0411\u0438\u0447", "\u0422\u0430\u0445\u0438\u0430", "\u041d\u043e\u0445\u043e\u0439", "\u0413\u0430\u0445\u0430\u0439"],
        monthsShort: ["\u0425\u0443\u043b", "\u04ae\u0445\u044d", "\u0411\u0430\u0440", "\u0422\u0443\u0443", "\u041b\u0443\u0443", "\u041c\u043e\u0433", "\u041c\u043e\u0440", "\u0425\u043e\u043d", "\u0411\u0438\u0447", "\u0422\u0430\u0445", "\u041d\u043e\u0445", "\u0413\u0430\u0445"],
        today: "\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440",
        clear: "\u0422\u043e\u0434\u043e\u0440\u0445\u043e\u0439",
        format: "yyyy.mm.dd",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ms = {
        days: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
        daysShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
        daysMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
        months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
        today: "Hari Ini",
        clear: "Bersihkan"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.nb = {
        days: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"],
        daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
        daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"],
        months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        today: "I Dag"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["nl-BE"] = {
        days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        today: "Vandaag",
        clear: "Leegmaken",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.nl = {
        days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        today: "Vandaag",
        clear: "Wissen",
        weekStart: 1,
        format: "dd-mm-yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.no = {
        days: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"],
        daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
        daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"],
        months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        today: "I dag",
        clear: "Nullstill",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.pl = {
        days: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015broda", "czwartek", "pi\u0105tek", "sobota"],
        daysShort: ["niedz.", "pon.", "wt.", "\u015br.", "czw.", "pi\u0105t.", "sob."],
        daysMin: ["ndz.", "pn.", "wt.", "\u015br.", "czw.", "pt.", "sob."],
        months: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017adziernik", "listopad", "grudzie\u0144"],
        monthsShort: ["sty.", "lut.", "mar.", "kwi.", "maj", "cze.", "lip.", "sie.", "wrz.", "pa\u017a.", "lis.", "gru."],
        today: "dzisiaj",
        weekStart: 1,
        clear: "wyczy\u015b\u0107",
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["pt-BR"] = {
        days: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
        months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        clear: "Limpar",
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.pt = {
        days: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
        months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        clear: "Limpar",
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ro = {
        days: ["Duminic\u0103", "Luni", "Mar\u0163i", "Miercuri", "Joi", "Vineri", "S\xe2mb\u0103t\u0103"],
        daysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xe2m"],
        daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S\xe2"],
        months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        monthsShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Ast\u0103zi",
        clear: "\u0218terge",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["rs-latin"] = {
        days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"],
        daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"],
        daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"],
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        today: "Danas",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.rs = {
        days: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0423\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0443\u0431"],
        daysMin: ["\u041d", "\u041f\u043e", "\u0423", "\u0421\u0440", "\u0427", "\u041f\u0435", "\u0421\u0443"],
        months: ["\u0408\u0430\u043d\u0443\u0430\u0440", "\u0424\u0435\u0431\u0440\u0443\u0430\u0440", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u041e\u043a\u0442\u043e\u0431\u0430\u0440", "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440"],
        monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0431", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0432", "\u0414\u0435\u0446"],
        today: "\u0414\u0430\u043d\u0430\u0441",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ru = {
        days: ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],
        daysShort: ["\u0412\u0441\u043a", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431"],
        daysMin: ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
        months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],
        monthsShort: ["\u042f\u043d\u0432", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u0418\u044e\u043d", "\u0418\u044e\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043d", "\u041e\u043a\u0442", "\u041d\u043e\u044f", "\u0414\u0435\u043a"],
        today: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f",
        clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
        format: "dd.mm.yyyy",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.sk = {
        days: ["Nede\u013ea", "Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota"],
        daysShort: ["Ned", "Pon", "Uto", "Str", "\u0160tv", "Pia", "Sob"],
        daysMin: ["Ne", "Po", "Ut", "St", "\u0160t", "Pia", "So"],
        months: ["Janu\xe1r", "Febru\xe1r", "Marec", "Apr\xedl", "M\xe1j", "J\xfan", "J\xfal", "August", "September", "Okt\xf3ber", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "M\xe1j", "J\xfan", "J\xfal", "Aug", "Sep", "Okt", "Nov", "Dec"],
        today: "Dnes",
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.sl = {
        days: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010cetrtek", "Petek", "Sobota"],
        daysShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"],
        daysMin: ["Ne", "Po", "To", "Sr", "\u010ce", "Pe", "So"],
        months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        today: "Danes"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.sq = {
        days: ["E Diel", "E H\xebn\xeb", "E Mart\u0113", "E M\xebrkur\xeb", "E Enjte", "E Premte", "E Shtun\xeb"],
        daysShort: ["Die", "H\xebn", "Mar", "M\xebr", "Enj", "Pre", "Shtu"],
        daysMin: ["Di", "H\xeb", "Ma", "M\xeb", "En", "Pr", "Sht"],
        months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xebntor", "Dhjetor"],
        monthsShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Korr", "Gu", "Sht", "Tet", "N\xebn", "Dhjet"],
        today: "Sot"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["sr-latin"] = {
        days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"],
        daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"],
        daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"],
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        today: "Danas",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.sr = {
        days: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0423\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0443\u0431"],
        daysMin: ["\u041d", "\u041f\u043e", "\u0423", "\u0421\u0440", "\u0427", "\u041f\u0435", "\u0421\u0443"],
        months: ["\u0408\u0430\u043d\u0443\u0430\u0440", "\u0424\u0435\u0431\u0440\u0443\u0430\u0440", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u041e\u043a\u0442\u043e\u0431\u0430\u0440", "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440"],
        monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0431", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0432", "\u0414\u0435\u0446"],
        today: "\u0414\u0430\u043d\u0430\u0441",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.sv = {
        days: ["S\xf6ndag", "M\xe5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\xf6rdag"],
        daysShort: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"],
        daysMin: ["S\xf6", "M\xe5", "Ti", "On", "To", "Fr", "L\xf6"],
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        today: "Idag",
        format: "yyyy-mm-dd",
        weekStart: 1,
        clear: "Rensa"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.sw = {
        days: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
        daysShort: ["J2", "J3", "J4", "J5", "Alh", "Ij", "J1"],
        daysMin: ["2", "3", "4", "5", "A", "I", "1"],
        months: ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"],
        monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"],
        today: "Leo"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.th = {
        days: ["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c", "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23", "\u0e1e\u0e38\u0e18", "\u0e1e\u0e24\u0e2b\u0e31\u0e2a", "\u0e28\u0e38\u0e01\u0e23\u0e4c", "\u0e40\u0e2a\u0e32\u0e23\u0e4c", "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"],
        daysShort: ["\u0e2d\u0e32", "\u0e08", "\u0e2d", "\u0e1e", "\u0e1e\u0e24", "\u0e28", "\u0e2a", "\u0e2d\u0e32"],
        daysMin: ["\u0e2d\u0e32", "\u0e08", "\u0e2d", "\u0e1e", "\u0e1e\u0e24", "\u0e28", "\u0e2a", "\u0e2d\u0e32"],
        months: ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21", "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19", "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21", "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21", "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19", "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21", "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"],
        monthsShort: ["\u0e21.\u0e04.", "\u0e01.\u0e1e.", "\u0e21\u0e35.\u0e04.", "\u0e40\u0e21.\u0e22.", "\u0e1e.\u0e04.", "\u0e21\u0e34.\u0e22.", "\u0e01.\u0e04.", "\u0e2a.\u0e04.", "\u0e01.\u0e22.", "\u0e15.\u0e04.", "\u0e1e.\u0e22.", "\u0e18.\u0e04."],
        today: "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.tr = {
        days: ["Pazar", "Pazartesi", "Sal\u0131", "\xc7ar\u015famba", "Per\u015fembe", "Cuma", "Cumartesi"],
        daysShort: ["Pz", "Pzt", "Sal", "\xc7r\u015f", "Pr\u015f", "Cu", "Cts"],
        daysMin: ["Pz", "Pzt", "Sa", "\xc7r", "Pr", "Cu", "Ct"],
        months: ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\xfcl", "Ekim", "Kas\u0131m", "Aral\u0131k"],
        monthsShort: ["Oca", "\u015eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011fu", "Eyl", "Eki", "Kas", "Ara"],
        today: "Bug\xfcn",
        clear: "Temizle",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.ua = {
        days: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u043e\u0442\u0430", "\u041d\u0435\u0434\u0456\u043b\u044f"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431", "\u041d\u0435\u0434"],
        daysMin: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431", "\u041d\u0434"],
        months: ["C\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],
        monthsShort: ["\u0421\u0456\u0447", "\u041b\u044e\u0442", "\u0411\u0435\u0440", "\u041a\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041b\u0438\u043f", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043e\u0432", "\u041b\u0438\u0441", "\u0413\u0440\u0443"],
        today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.uk = {
        days: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u044f", "\u0421\u0443\u0431\u043e\u0442\u0430"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431"],
        daysMin: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
        months: ["C\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],
        monthsShort: ["\u0421\u0456\u0447", "\u041b\u044e\u0442", "\u0411\u0435\u0440", "\u041a\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041b\u0438\u043f", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043e\u0432", "\u041b\u0438\u0441", "\u0413\u0440\u0443"],
        today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
        clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
        format: "dd.mm.yyyy",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates.vi = {
        days: ["Ch\u1ee7 nh\u1eadt", "Th\u1ee9 hai", "Th\u1ee9 ba", "Th\u1ee9 t\u01b0", "Th\u1ee9 n\u0103m", "Th\u1ee9 s\xe1u", "Th\u1ee9 b\u1ea3y"],
        daysShort: ["CN", "Th\u1ee9 2", "Th\u1ee9 3", "Th\u1ee9 4", "Th\u1ee9 5", "Th\u1ee9 6", "Th\u1ee9 7"],
        daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        months: ["Th\xe1ng 1", "Th\xe1ng 2", "Th\xe1ng 3", "Th\xe1ng 4", "Th\xe1ng 5", "Th\xe1ng 6", "Th\xe1ng 7", "Th\xe1ng 8", "Th\xe1ng 9", "Th\xe1ng 10", "Th\xe1ng 11", "Th\xe1ng 12"],
        monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        today: "H\xf4m nay",
        clear: "X\xf3a",
        format: "dd/mm/yyyy"
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["zh-CN"] = {
        days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
        daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],
        daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
        months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
        monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        today: "\u4eca\u65e5",
        clear: "\u6e05\u9664",
        format: "yyyy\u5e74mm\u6708dd\u65e5",
        titleFormat: "yyyy\u5e74mm\u6708",
        weekStart: 1
    }
}(jQuery), function (e) {
    e.fn.datepicker.dates["zh-TW"] = {
        days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
        daysShort: ["\u9031\u65e5", "\u9031\u4e00", "\u9031\u4e8c", "\u9031\u4e09", "\u9031\u56db", "\u9031\u4e94", "\u9031\u516d"],
        daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
        months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
        monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        today: "\u4eca\u5929",
        format: "yyyy\u5e74mm\u6708dd\u65e5",
        weekStart: 1,
        clear: "\u6e05\u9664"
    }
}(jQuery), function () {
}.call(this), function () {
}.call(this), function () {
}.call(this), function () {
}.call(this);