/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/dt-1.11.3/af-2.3.7/b-2.0.1
 *
 * Included libraries:
 *  DataTables 1.11.3, AutoFill 2.3.7, Buttons 2.0.1
 */

/*!
   Copyright 2008-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.11.3
 ©2008-2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (l, z, A) {
    l instanceof String && (l = String(l));
    for (var q = l.length, E = 0; E < q; E++) {
        var P = l[E];
        if (z.call(A, P, E, l)) return { i: E, v: P };
    }
    return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (l, z, A) {
              if (l == Array.prototype || l == Object.prototype) return l;
              l[z] = A.value;
              return l;
          };
$jscomp.getGlobal = function (l) {
    l = ["object" == typeof globalThis && globalThis, l, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var z = 0; z < l.length; ++z) {
        var A = l[z];
        if (A && A.Math == Math) return A;
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (l, z) {
    var A = $jscomp.propertyToPolyfillSymbol[z];
    if (null == A) return l[z];
    A = l[A];
    return void 0 !== A ? A : l[z];
};
$jscomp.polyfill = function (l, z, A, q) {
    z && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(l, z, A, q) : $jscomp.polyfillUnisolated(l, z, A, q));
};
$jscomp.polyfillUnisolated = function (l, z, A, q) {
    A = $jscomp.global;
    l = l.split(".");
    for (q = 0; q < l.length - 1; q++) {
        var E = l[q];
        if (!(E in A)) return;
        A = A[E];
    }
    l = l[l.length - 1];
    q = A[l];
    z = z(q);
    z != q && null != z && $jscomp.defineProperty(A, l, { configurable: !0, writable: !0, value: z });
};
$jscomp.polyfillIsolated = function (l, z, A, q) {
    var E = l.split(".");
    l = 1 === E.length;
    q = E[0];
    q = !l && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var P = 0; P < E.length - 1; P++) {
        var ma = E[P];
        if (!(ma in q)) return;
        q = q[ma];
    }
    E = E[E.length - 1];
    A = $jscomp.IS_SYMBOL_NATIVE && "es6" === A ? q[E] : null;
    z = z(A);
    null != z &&
        (l
            ? $jscomp.defineProperty($jscomp.polyfills, E, { configurable: !0, writable: !0, value: z })
            : z !== A &&
              (($jscomp.propertyToPolyfillSymbol[E] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(E) : $jscomp.POLYFILL_PREFIX + E),
              (E = $jscomp.propertyToPolyfillSymbol[E]),
              $jscomp.defineProperty(q, E, { configurable: !0, writable: !0, value: z })));
};
$jscomp.polyfill(
    "Array.prototype.find",
    function (l) {
        return l
            ? l
            : function (z, A) {
                  return $jscomp.findInternal(this, z, A).v;
              };
    },
    "es6",
    "es3"
);
(function (l) {
    "function" === typeof define && define.amd
        ? define(["jquery"], function (z) {
              return l(z, window, document);
          })
        : "object" === typeof exports
        ? (module.exports = function (z, A) {
              z || (z = window);
              A || (A = "undefined" !== typeof window ? require("jquery") : require("jquery")(z));
              return l(A, z, z.document);
          })
        : (window.DataTable = l(jQuery, window, document));
})(function (l, z, A, q) {
    function E(a) {
        var b,
            c,
            d = {};
        l.each(a, function (e, h) {
            (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && ((c = e.replace(b[0], b[2].toLowerCase())), (d[c] = e), "o" === b[1] && E(a[e]));
        });
        a._hungarianMap = d;
    }
    function P(a, b, c) {
        a._hungarianMap || E(a);
        var d;
        l.each(b, function (e, h) {
            d = a._hungarianMap[e];
            d === q || (!c && b[d] !== q) || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), l.extend(!0, b[d], b[e]), P(a[d], b[d], c)) : (b[d] = b[e]));
        });
    }
    function ma(a) {
        var b = u.defaults.oLanguage,
            c = b.sDecimal;
        c && Wa(c);
        if (a) {
            var d = a.sZeroRecords;
            !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && X(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && X(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && c !== a && Wa(a);
        }
    }
    function zb(a) {
        S(a, "ordering", "bSort");
        S(a, "orderMulti", "bSortMulti");
        S(a, "orderClasses", "bSortClasses");
        S(a, "orderCellsTop", "bSortCellsTop");
        S(a, "order", "aaSorting");
        S(a, "orderFixed", "aaSortingFixed");
        S(a, "paging", "bPaginate");
        S(a, "pagingType", "sPaginationType");
        S(a, "pageLength", "iDisplayLength");
        S(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if ((a = a.aoSearchCols)) for (var b = 0, c = a.length; b < c; b++) a[b] && P(u.models.oSearch, a[b]);
    }
    function Ab(a) {
        S(a, "orderable", "bSortable");
        S(a, "orderData", "aDataSort");
        S(a, "orderSequence", "asSorting");
        S(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]);
    }
    function Bb(a) {
        if (!u.__browser) {
            var b = {};
            u.__browser = b;
            var c = l("<div/>")
                    .css({ position: "fixed", top: 0, left: -1 * l(z).scrollLeft(), height: 1, width: 1, overflow: "hidden" })
                    .append(
                        l("<div/>")
                            .css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" })
                            .append(l("<div/>").css({ width: "100%", height: 10 }))
                    )
                    .appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove();
        }
        l.extend(a.oBrowser, u.__browser);
        a.oScroll.iBarWidth = u.__browser.barWidth;
    }
    function Cb(a, b, c, d, e, h) {
        var f = !1;
        if (c !== q) {
            var g = c;
            f = !0;
        }
        for (; d !== e; ) a.hasOwnProperty(d) && ((g = f ? b(g, a[d], d, a) : a[d]), (f = !0), (d += h));
        return g;
    }
    function Xa(a, b) {
        var c = u.defaults.column,
            d = a.aoColumns.length;
        c = l.extend({}, u.models.oColumn, c, { nTh: b ? b : A.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = l.extend({}, u.models.oSearch, c[d]);
        Ga(a, d, l(b).data());
    }
    function Ga(a, b, c) {
        b = a.aoColumns[b];
        var d = a.oClasses,
            e = l(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            h && (b.sWidthOrig = h[1]);
        }
        c !== q &&
            null !== c &&
            (Ab(c),
            P(u.defaults.column, c, !0),
            c.mDataProp === q || c.mData || (c.mData = c.mDataProp),
            c.sType && (b._sManualType = c.sType),
            c.className && !c.sClass && (c.sClass = c.className),
            c.sClass && e.addClass(c.sClass),
            l.extend(b, c),
            X(b, c, "sWidth", "sWidthOrig"),
            c.iDataSort !== q && (b.aDataSort = [c.iDataSort]),
            X(b, c, "aDataSort"));
        var f = b.mData,
            g = na(f),
            k = b.mRender ? na(b.mRender) : null;
        c = function (m) {
            return "string" === typeof m && -1 !== m.indexOf("@");
        };
        b._bAttrSrc = l.isPlainObject(f) && (c(f.sort) || c(f.type) || c(f.filter));
        b._setter = null;
        b.fnGetData = function (m, n, p) {
            var t = g(m, n, q, p);
            return k && n ? k(t, n, m, p) : t;
        };
        b.fnSetData = function (m, n, p) {
            return ha(f)(m, n, p);
        };
        "number" !== typeof f && (a._rowReadObject = !0);
        a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
        a = -1 !== l.inArray("asc", b.asSorting);
        c = -1 !== l.inArray("desc", b.asSorting);
        b.bSortable && (a || c)
            ? a && !c
                ? ((b.sSortingClass = d.sSortableAsc), (b.sSortingClassJUI = d.sSortJUIAscAllowed))
                : !a && c
                ? ((b.sSortingClass = d.sSortableDesc), (b.sSortingClassJUI = d.sSortJUIDescAllowed))
                : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI))
            : ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""));
    }
    function ta(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ya(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth;
        }
        b = a.oScroll;
        ("" === b.sY && "" === b.sX) || Ha(a);
        F(a, null, "column-sizing", [a]);
    }
    function ua(a, b) {
        a = Ia(a, "bVisible");
        return "number" === typeof a[b] ? a[b] : null;
    }
    function va(a, b) {
        a = Ia(a, "bVisible");
        b = l.inArray(b, a);
        return -1 !== b ? b : null;
    }
    function oa(a) {
        var b = 0;
        l.each(a.aoColumns, function (c, d) {
            d.bVisible && "none" !== l(d.nTh).css("display") && b++;
        });
        return b;
    }
    function Ia(a, b) {
        var c = [];
        l.map(a.aoColumns, function (d, e) {
            d[b] && c.push(e);
        });
        return c;
    }
    function Za(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = u.ext.type.detect,
            e,
            h,
            f;
        var g = 0;
        for (e = b.length; g < e; g++) {
            var k = b[g];
            var m = [];
            if (!k.sType && k._sManualType) k.sType = k._sManualType;
            else if (!k.sType) {
                var n = 0;
                for (h = d.length; n < h; n++) {
                    var p = 0;
                    for (f = c.length; p < f; p++) {
                        m[p] === q && (m[p] = T(a, p, g, "type"));
                        var t = d[n](m[p], a);
                        if (!t && n !== d.length - 1) break;
                        if ("html" === t && !Z(m[p])) break;
                    }
                    if (t) {
                        k.sType = t;
                        break;
                    }
                }
                k.sType || (k.sType = "string");
            }
        }
    }
    function Db(a, b, c, d) {
        var e,
            h,
            f,
            g = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                var k = b[e];
                var m = k.targets !== q ? k.targets : k.aTargets;
                Array.isArray(m) || (m = [m]);
                var n = 0;
                for (h = m.length; n < h; n++)
                    if ("number" === typeof m[n] && 0 <= m[n]) {
                        for (; g.length <= m[n]; ) Xa(a);
                        d(m[n], k);
                    } else if ("number" === typeof m[n] && 0 > m[n]) d(g.length + m[n], k);
                    else if ("string" === typeof m[n]) {
                        var p = 0;
                        for (f = g.length; p < f; p++) ("_all" == m[n] || l(g[p].nTh).hasClass(m[n])) && d(p, k);
                    }
            }
        if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
    }
    function ia(a, b, c, d) {
        var e = a.aoData.length,
            h = l.extend(!0, {}, u.models.oRow, { src: c ? "dom" : "data", idx: e });
        h._aData = b;
        a.aoData.push(h);
        for (var f = a.aoColumns, g = 0, k = f.length; g < k; g++) f[g].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== q && (a.aIds[b] = h);
        (!c && a.oFeatures.bDeferRender) || $a(a, e, c, d);
        return e;
    }
    function Ja(a, b) {
        var c;
        b instanceof l || (b = l(b));
        return b.map(function (d, e) {
            c = ab(a, e);
            return ia(a, c.data, e, c.cells);
        });
    }
    function T(a, b, c, d) {
        "search" === d ? (d = "filter") : "order" === d && (d = "sort");
        var e = a.iDraw,
            h = a.aoColumns[c],
            f = a.aoData[b]._aData,
            g = h.sDefaultContent,
            k = h.fnGetData(f, d, { settings: a, row: b, col: c });
        if (k === q) return a.iDrawError != e && null === g && (da(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), (a.iDrawError = e)), g;
        if ((k === f || null === k) && null !== g && d !== q) k = g;
        else if ("function" === typeof k) return k.call(f);
        if (null === k && "display" === d) return "";
        "filter" === d && ((a = u.ext.type.search), a[h.sType] && (k = a[h.sType](k)));
        return k;
    }
    function Eb(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c });
    }
    function bb(a) {
        return l.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
            return b.replace(/\\\./g, ".");
        });
    }
    function cb(a) {
        return U(a.aoData, "_aData");
    }
    function Ka(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {};
    }
    function La(a, b, c) {
        for (var d = -1, e = 0, h = a.length; e < h; e++) a[e] == b ? (d = e) : a[e] > b && a[e]--;
        -1 != d && c === q && a.splice(d, 1);
    }
    function wa(a, b, c, d) {
        var e = a.aoData[b],
            h,
            f = function (k, m) {
                for (; k.childNodes.length; ) k.removeChild(k.firstChild);
                k.innerHTML = T(a, b, m, "display");
            };
        if ("dom" !== c && ((c && "auto" !== c) || "dom" !== e.src)) {
            var g = e.anCells;
            if (g)
                if (d !== q) f(g[d], d);
                else for (c = 0, h = g.length; c < h; c++) f(g[c], c);
        } else e._aData = ab(a, e, d, d === q ? q : e._aData).data;
        e._aSortData = null;
        e._aFilterData = null;
        f = a.aoColumns;
        if (d !== q) f[d].sType = null;
        else {
            c = 0;
            for (h = f.length; c < h; c++) f[c].sType = null;
            db(a, e);
        }
    }
    function ab(a, b, c, d) {
        var e = [],
            h = b.firstChild,
            f,
            g = 0,
            k,
            m = a.aoColumns,
            n = a._rowReadObject;
        d = d !== q ? d : n ? {} : [];
        var p = function (x, w) {
                if ("string" === typeof x) {
                    var r = x.indexOf("@");
                    -1 !== r && ((r = x.substring(r + 1)), ha(x)(d, w.getAttribute(r)));
                }
            },
            t = function (x) {
                if (c === q || c === g)
                    (f = m[g]), (k = x.innerHTML.trim()), f && f._bAttrSrc ? (ha(f.mData._)(d, k), p(f.mData.sort, x), p(f.mData.type, x), p(f.mData.filter, x)) : n ? (f._setter || (f._setter = ha(f.mData)), f._setter(d, k)) : (d[g] = k);
                g++;
            };
        if (h)
            for (; h; ) {
                var v = h.nodeName.toUpperCase();
                if ("TD" == v || "TH" == v) t(h), e.push(h);
                h = h.nextSibling;
            }
        else for (e = b.anCells, h = 0, v = e.length; h < v; h++) t(e[h]);
        (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && ha(a.rowId)(d, b);
        return { data: d, cells: e };
    }
    function $a(a, b, c, d) {
        var e = a.aoData[b],
            h = e._aData,
            f = [],
            g,
            k;
        if (null === e.nTr) {
            var m = c || A.createElement("tr");
            e.nTr = m;
            e.anCells = f;
            m._DT_RowIndex = b;
            db(a, e);
            var n = 0;
            for (g = a.aoColumns.length; n < g; n++) {
                var p = a.aoColumns[n];
                e = (k = c ? !1 : !0) ? A.createElement(p.sCellType) : d[n];
                e._DT_CellIndex = { row: b, column: n };
                f.push(e);
                if (k || !((!p.mRender && p.mData === n) || (l.isPlainObject(p.mData) && p.mData._ === n + ".display"))) e.innerHTML = T(a, b, n, "display");
                p.sClass && (e.className += " " + p.sClass);
                p.bVisible && !c ? m.appendChild(e) : !p.bVisible && c && e.parentNode.removeChild(e);
                p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, e, T(a, b, n), h, b, n);
            }
            F(a, "aoRowCreatedCallback", null, [m, h, b, f]);
        }
    }
    function db(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            if ((a = a.rowIdFn(d))) c.id = a;
            d.DT_RowClass && ((a = d.DT_RowClass.split(" ")), (b.__rowc = b.__rowc ? Ma(b.__rowc.concat(a)) : a), l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && l(c).attr(d.DT_RowAttr);
            d.DT_RowData && l(c).data(d.DT_RowData);
        }
    }
    function Fb(a) {
        var b,
            c,
            d = a.nTHead,
            e = a.nTFoot,
            h = 0 === l("th, td", d).length,
            f = a.oClasses,
            g = a.aoColumns;
        h && (c = l("<tr/>").appendTo(d));
        var k = 0;
        for (b = g.length; k < b; k++) {
            var m = g[k];
            var n = l(m.nTh).addClass(m.sClass);
            h && n.appendTo(c);
            a.oFeatures.bSort && (n.addClass(m.sSortingClass), !1 !== m.bSortable && (n.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), eb(a, m.nTh, k)));
            m.sTitle != n[0].innerHTML && n.html(m.sTitle);
            fb(a, "header")(a, n, m, f);
        }
        h && xa(a.aoHeader, d);
        l(d).children("tr").children("th, td").addClass(f.sHeaderTH);
        l(e).children("tr").children("th, td").addClass(f.sFooterTH);
        if (null !== e) for (a = a.aoFooter[0], k = 0, b = a.length; k < b; k++) (m = g[k]), (m.nTf = a[k].cell), m.sClass && l(m.nTf).addClass(m.sClass);
    }
    function ya(a, b, c) {
        var d,
            e,
            h = [],
            f = [],
            g = a.aoColumns.length;
        if (b) {
            c === q && (c = !1);
            var k = 0;
            for (d = b.length; k < d; k++) {
                h[k] = b[k].slice();
                h[k].nTr = b[k].nTr;
                for (e = g - 1; 0 <= e; e--) a.aoColumns[e].bVisible || c || h[k].splice(e, 1);
                f.push([]);
            }
            k = 0;
            for (d = h.length; k < d; k++) {
                if ((a = h[k].nTr)) for (; (e = a.firstChild); ) a.removeChild(e);
                e = 0;
                for (b = h[k].length; e < b; e++) {
                    var m = (g = 1);
                    if (f[k][e] === q) {
                        a.appendChild(h[k][e].cell);
                        for (f[k][e] = 1; h[k + g] !== q && h[k][e].cell == h[k + g][e].cell; ) (f[k + g][e] = 1), g++;
                        for (; h[k][e + m] !== q && h[k][e].cell == h[k][e + m].cell; ) {
                            for (c = 0; c < g; c++) f[k + c][e + m] = 1;
                            m++;
                        }
                        l(h[k][e].cell).attr("rowspan", g).attr("colspan", m);
                    }
                }
            }
        }
    }
    function ja(a, b) {
        var c = F(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== l.inArray(!1, c)) V(a, !1);
        else {
            c = [];
            var d = 0,
                e = a.asStripeClasses,
                h = e.length,
                f = a.oLanguage,
                g = a.iInitDisplayStart,
                k = "ssp" == Q(a),
                m = a.aiDisplay;
            a.bDrawing = !0;
            g !== q && -1 !== g && ((a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g), (a.iInitDisplayStart = -1));
            g = a._iDisplayStart;
            var n = a.fnDisplayEnd();
            if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, V(a, !1);
            else if (!k) a.iDraw++;
            else if (!a.bDestroying && !b) {
                Gb(a);
                return;
            }
            if (0 !== m.length)
                for (b = k ? a.aoData.length : n, f = k ? 0 : g; f < b; f++) {
                    k = m[f];
                    var p = a.aoData[k];
                    null === p.nTr && $a(a, k);
                    var t = p.nTr;
                    if (0 !== h) {
                        var v = e[d % h];
                        p._sRowStripe != v && (l(t).removeClass(p._sRowStripe).addClass(v), (p._sRowStripe = v));
                    }
                    F(a, "aoRowCallback", null, [t, p._aData, d, f, k]);
                    c.push(t);
                    d++;
                }
            else
                (d = f.sZeroRecords),
                    1 == a.iDraw && "ajax" == Q(a) ? (d = f.sLoadingRecords) : f.sEmptyTable && 0 === a.fnRecordsTotal() && (d = f.sEmptyTable),
                    (c[0] = l("<tr/>", { class: h ? e[0] : "" }).append(l("<td />", { valign: "top", colSpan: oa(a), class: a.oClasses.sRowEmpty }).html(d))[0]);
            F(a, "aoHeaderCallback", "header", [l(a.nTHead).children("tr")[0], cb(a), g, n, m]);
            F(a, "aoFooterCallback", "footer", [l(a.nTFoot).children("tr")[0], cb(a), g, n, m]);
            e = l(a.nTBody);
            e.children().detach();
            e.append(l(c));
            F(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1;
        }
    }
    function ka(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && Hb(a);
        d ? za(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        ja(a);
        a._drawHold = !1;
    }
    function Ib(a) {
        var b = a.oClasses,
            c = l(a.nTable);
        c = l("<div/>").insertBefore(c);
        var d = a.oFeatures,
            e = l("<div/>", { id: a.sTableId + "_wrapper", class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var h = a.sDom.split(""), f, g, k, m, n, p, t = 0; t < h.length; t++) {
            f = null;
            g = h[t];
            if ("<" == g) {
                k = l("<div/>")[0];
                m = h[t + 1];
                if ("'" == m || '"' == m) {
                    n = "";
                    for (p = 2; h[t + p] != m; ) (n += h[t + p]), p++;
                    "H" == n ? (n = b.sJUIHeader) : "F" == n && (n = b.sJUIFooter);
                    -1 != n.indexOf(".") ? ((m = n.split(".")), (k.id = m[0].substr(1, m[0].length - 1)), (k.className = m[1])) : "#" == n.charAt(0) ? (k.id = n.substr(1, n.length - 1)) : (k.className = n);
                    t += p;
                }
                e.append(k);
                e = l(k);
            } else if (">" == g) e = e.parent();
            else if ("l" == g && d.bPaginate && d.bLengthChange) f = Jb(a);
            else if ("f" == g && d.bFilter) f = Kb(a);
            else if ("r" == g && d.bProcessing) f = Lb(a);
            else if ("t" == g) f = Mb(a);
            else if ("i" == g && d.bInfo) f = Nb(a);
            else if ("p" == g && d.bPaginate) f = Ob(a);
            else if (0 !== u.ext.feature.length)
                for (k = u.ext.feature, p = 0, m = k.length; p < m; p++)
                    if (g == k[p].cFeature) {
                        f = k[p].fnInit(a);
                        break;
                    }
            f && ((k = a.aanFeatures), k[g] || (k[g] = []), k[g].push(f), e.append(f));
        }
        c.replaceWith(e);
        a.nHolding = null;
    }
    function xa(a, b) {
        b = l(b).children("tr");
        var c, d, e;
        a.splice(0, a.length);
        var h = 0;
        for (e = b.length; h < e; h++) a.push([]);
        h = 0;
        for (e = b.length; h < e; h++) {
            var f = b[h];
            for (c = f.firstChild; c; ) {
                if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
                    var g = 1 * c.getAttribute("colspan");
                    var k = 1 * c.getAttribute("rowspan");
                    g = g && 0 !== g && 1 !== g ? g : 1;
                    k = k && 0 !== k && 1 !== k ? k : 1;
                    var m = 0;
                    for (d = a[h]; d[m]; ) m++;
                    var n = m;
                    var p = 1 === g ? !0 : !1;
                    for (d = 0; d < g; d++) for (m = 0; m < k; m++) (a[h + m][n + d] = { cell: c, unique: p }), (a[h + m].nTr = f);
                }
                c = c.nextSibling;
            }
        }
    }
    function Na(a, b, c) {
        var d = [];
        c || ((c = a.aoHeader), b && ((c = []), xa(c, b)));
        b = 0;
        for (var e = c.length; b < e; b++) for (var h = 0, f = c[b].length; h < f; h++) !c[b][h].unique || (d[h] && a.bSortCellsTop) || (d[h] = c[b][h].cell);
        return d;
    }
    function Oa(a, b, c) {
        F(a, "aoServerParams", "serverParams", [b]);
        if (b && Array.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            l.each(b, function (n, p) {
                (n = p.name.match(e)) ? ((n = n[0]), d[n] || (d[n] = []), d[n].push(p.value)) : (d[p.name] = p.value);
            });
            b = d;
        }
        var h = a.ajax,
            f = a.oInstance,
            g = function (n) {
                var p = a.jqXhr ? a.jqXhr.status : null;
                if (null === n || ("number" === typeof p && 204 == p)) (n = {}), Aa(a, n, []);
                (p = n.error || n.sError) && da(a, 0, p);
                a.json = n;
                F(a, null, "xhr", [a, n, a.jqXHR]);
                c(n);
            };
        if (l.isPlainObject(h) && h.data) {
            var k = h.data;
            var m = "function" === typeof k ? k(b, a) : k;
            b = "function" === typeof k && m ? m : l.extend(!0, b, m);
            delete h.data;
        }
        m = {
            data: b,
            success: g,
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function (n, p, t) {
                t = F(a, null, "xhr", [a, null, a.jqXHR]);
                -1 === l.inArray(!0, t) && ("parsererror" == p ? da(a, 0, "Invalid JSON response", 1) : 4 === n.readyState && da(a, 0, "Ajax error", 7));
                V(a, !1);
            },
        };
        a.oAjaxData = b;
        F(a, null, "preXhr", [a, b]);
        a.fnServerData
            ? a.fnServerData.call(
                  f,
                  a.sAjaxSource,
                  l.map(b, function (n, p) {
                      return { name: p, value: n };
                  }),
                  g,
                  a
              )
            : a.sAjaxSource || "string" === typeof h
            ? (a.jqXHR = l.ajax(l.extend(m, { url: h || a.sAjaxSource })))
            : "function" === typeof h
            ? (a.jqXHR = h.call(f, b, g, a))
            : ((a.jqXHR = l.ajax(l.extend(m, h))), (h.data = k));
    }
    function Gb(a) {
        a.iDraw++;
        V(a, !0);
        Oa(a, Pb(a), function (b) {
            Qb(a, b);
        });
    }
    function Pb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            h = a.aoPreSearchCols,
            f = [],
            g = pa(a);
        var k = a._iDisplayStart;
        var m = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var n = function (x, w) {
            f.push({ name: x, value: w });
        };
        n("sEcho", a.iDraw);
        n("iColumns", c);
        n("sColumns", U(b, "sName").join(","));
        n("iDisplayStart", k);
        n("iDisplayLength", m);
        var p = { draw: a.iDraw, columns: [], order: [], start: k, length: m, search: { value: e.sSearch, regex: e.bRegex } };
        for (k = 0; k < c; k++) {
            var t = b[k];
            var v = h[k];
            m = "function" == typeof t.mData ? "function" : t.mData;
            p.columns.push({ data: m, name: t.sName, searchable: t.bSearchable, orderable: t.bSortable, search: { value: v.sSearch, regex: v.bRegex } });
            n("mDataProp_" + k, m);
            d.bFilter && (n("sSearch_" + k, v.sSearch), n("bRegex_" + k, v.bRegex), n("bSearchable_" + k, t.bSearchable));
            d.bSort && n("bSortable_" + k, t.bSortable);
        }
        d.bFilter && (n("sSearch", e.sSearch), n("bRegex", e.bRegex));
        d.bSort &&
            (l.each(g, function (x, w) {
                p.order.push({ column: w.col, dir: w.dir });
                n("iSortCol_" + x, w.col);
                n("sSortDir_" + x, w.dir);
            }),
            n("iSortingCols", g.length));
        b = u.ext.legacy.ajax;
        return null === b ? (a.sAjaxSource ? f : p) : b ? f : p;
    }
    function Qb(a, b) {
        var c = function (f, g) {
                return b[f] !== q ? b[f] : b[g];
            },
            d = Aa(a, b),
            e = c("sEcho", "draw"),
            h = c("iTotalRecords", "recordsTotal");
        c = c("iTotalDisplayRecords", "recordsFiltered");
        if (e !== q) {
            if (1 * e < a.iDraw) return;
            a.iDraw = 1 * e;
        }
        d || (d = []);
        Ka(a);
        a._iRecordsTotal = parseInt(h, 10);
        a._iRecordsDisplay = parseInt(c, 10);
        e = 0;
        for (h = d.length; e < h; e++) ia(a, d[e]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        ja(a, !0);
        a._bInitComplete || Pa(a, b);
        V(a, !1);
    }
    function Aa(a, b, c) {
        a = l.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp;
        if (!c) return "data" === a ? b.aaData || b[a] : "" !== a ? na(a)(b) : b;
        ha(a)(b, c);
    }
    function Kb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            h = a.aanFeatures,
            f = '<input type="search" class="' + b.sFilterInput + '"/>',
            g = d.sSearch;
        g = g.match(/_INPUT_/) ? g.replace("_INPUT_", f) : g + f;
        b = l("<div/>", { id: h.f ? null : c + "_filter", class: b.sFilter }).append(l("<label/>").append(g));
        var k = function (n) {
            var p = this.value ? this.value : "";
            (e.return && "Enter" !== n.key) || p == e.sSearch || (za(a, { sSearch: p, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive, return: e.return }), (a._iDisplayStart = 0), ja(a));
        };
        h = null !== a.searchDelay ? a.searchDelay : "ssp" === Q(a) ? 400 : 0;
        var m = l("input", b)
            .val(e.sSearch)
            .attr("placeholder", d.sSearchPlaceholder)
            .on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? gb(k, h) : k)
            .on("mouseup", function (n) {
                setTimeout(function () {
                    k.call(m[0], n);
                }, 10);
            })
            .on("keypress.DT", function (n) {
                if (13 == n.keyCode) return !1;
            })
            .attr("aria-controls", c);
        l(a.nTable).on("search.dt.DT", function (n, p) {
            if (a === p)
                try {
                    m[0] !== A.activeElement && m.val(e.sSearch);
                } catch (t) {}
        });
        return b[0];
    }
    function za(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            h = function (g) {
                d.sSearch = g.sSearch;
                d.bRegex = g.bRegex;
                d.bSmart = g.bSmart;
                d.bCaseInsensitive = g.bCaseInsensitive;
                d.return = g.return;
            },
            f = function (g) {
                return g.bEscapeRegex !== q ? !g.bEscapeRegex : g.bRegex;
            };
        Za(a);
        if ("ssp" != Q(a)) {
            Rb(a, b.sSearch, c, f(b), b.bSmart, b.bCaseInsensitive, b.return);
            h(b);
            for (b = 0; b < e.length; b++) Sb(a, e[b].sSearch, b, f(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
            Tb(a);
        } else h(b);
        a.bFiltered = !0;
        F(a, null, "search", [a]);
    }
    function Tb(a) {
        for (var b = u.ext.search, c = a.aiDisplay, d, e, h = 0, f = b.length; h < f; h++) {
            for (var g = [], k = 0, m = c.length; k < m; k++) (e = c[k]), (d = a.aoData[e]), b[h](a, d._aFilterData, e, d._aData, k) && g.push(e);
            c.length = 0;
            l.merge(c, g);
        }
    }
    function Sb(a, b, c, d, e, h) {
        if ("" !== b) {
            var f = [],
                g = a.aiDisplay;
            d = hb(b, d, e, h);
            for (e = 0; e < g.length; e++) (b = a.aoData[g[e]]._aFilterData[c]), d.test(b) && f.push(g[e]);
            a.aiDisplay = f;
        }
    }
    function Rb(a, b, c, d, e, h) {
        e = hb(b, d, e, h);
        var f = a.oPreviousSearch.sSearch,
            g = a.aiDisplayMaster;
        h = [];
        0 !== u.ext.search.length && (c = !0);
        var k = Ub(a);
        if (0 >= b.length) a.aiDisplay = g.slice();
        else {
            if (k || c || d || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
            a.aiDisplay = h;
        }
    }
    function hb(a, b, c, d) {
        a = b ? a : ib(a);
        c &&
            (a =
                "^(?=.*?" +
                l
                    .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
                        if ('"' === e.charAt(0)) {
                            var h = e.match(/^"(.*)"$/);
                            e = h ? h[1] : e;
                        }
                        return e.replace('"', "");
                    })
                    .join(")(?=.*?") +
                ").*$");
        return new RegExp(a, d ? "i" : "");
    }
    function Ub(a) {
        var b = a.aoColumns,
            c,
            d;
        var e = !1;
        var h = 0;
        for (c = a.aoData.length; h < c; h++) {
            var f = a.aoData[h];
            if (!f._aFilterData) {
                var g = [];
                e = 0;
                for (d = b.length; e < d; e++) {
                    var k = b[e];
                    k.bSearchable ? ((k = T(a, h, e, "filter")), null === k && (k = ""), "string" !== typeof k && k.toString && (k = k.toString())) : (k = "");
                    k.indexOf && -1 !== k.indexOf("&") && ((Qa.innerHTML = k), (k = sc ? Qa.textContent : Qa.innerText));
                    k.replace && (k = k.replace(/[\r\n\u2028]/g, ""));
                    g.push(k);
                }
                f._aFilterData = g;
                f._sFilterRow = g.join("  ");
                e = !0;
            }
        }
        return e;
    }
    function Vb(a) {
        return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive };
    }
    function Wb(a) {
        return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive };
    }
    function Nb(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = l("<div/>", { class: a.oClasses.sInfo, id: c ? null : b + "_info" });
        c || (a.aoDrawCallback.push({ fn: Xb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), l(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0];
    }
    function Xb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                h = a.fnRecordsTotal(),
                f = a.fnRecordsDisplay(),
                g = f ? c.sInfo : c.sInfoEmpty;
            f !== h && (g += " " + c.sInfoFiltered);
            g += c.sInfoPostFix;
            g = Yb(a, g);
            c = c.fnInfoCallback;
            null !== c && (g = c.call(a.oInstance, a, d, e, h, f, g));
            l(b).html(g);
        }
    }
    function Yb(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay(),
            f = -1 === e;
        return b
            .replace(/_START_/g, c.call(a, d))
            .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
            .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
            .replace(/_TOTAL_/g, c.call(a, h))
            .replace(/_PAGE_/g, c.call(a, f ? 1 : Math.ceil(d / e)))
            .replace(/_PAGES_/g, c.call(a, f ? 1 : Math.ceil(h / e)));
    }
    function Ba(a) {
        var b = a.iInitDisplayStart,
            c = a.aoColumns;
        var d = a.oFeatures;
        var e = a.bDeferLoading;
        if (a.bInitialised) {
            Ib(a);
            Fb(a);
            ya(a, a.aoHeader);
            ya(a, a.aoFooter);
            V(a, !0);
            d.bAutoWidth && Ya(a);
            var h = 0;
            for (d = c.length; h < d; h++) {
                var f = c[h];
                f.sWidth && (f.nTh.style.width = K(f.sWidth));
            }
            F(a, null, "preInit", [a]);
            ka(a);
            c = Q(a);
            if ("ssp" != c || e)
                "ajax" == c
                    ? Oa(
                          a,
                          [],
                          function (g) {
                              var k = Aa(a, g);
                              for (h = 0; h < k.length; h++) ia(a, k[h]);
                              a.iInitDisplayStart = b;
                              ka(a);
                              V(a, !1);
                              Pa(a, g);
                          },
                          a
                      )
                    : (V(a, !1), Pa(a));
        } else
            setTimeout(function () {
                Ba(a);
            }, 200);
    }
    function Pa(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && ta(a);
        F(a, null, "plugin-init", [a, b]);
        F(a, "aoInitComplete", "init", [a, b]);
    }
    function jb(a, b) {
        b = parseInt(b, 10);
        a._iDisplayLength = b;
        kb(a);
        F(a, null, "length", [a, b]);
    }
    function Jb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.aLengthMenu,
            e = Array.isArray(d[0]),
            h = e ? d[0] : d;
        d = e ? d[1] : d;
        e = l("<select/>", { name: c + "_length", "aria-controls": c, class: b.sLengthSelect });
        for (var f = 0, g = h.length; f < g; f++) e[0][f] = new Option("number" === typeof d[f] ? a.fnFormatNumber(d[f]) : d[f], h[f]);
        var k = l("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (k[0].id = c + "_length");
        k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        l("select", k)
            .val(a._iDisplayLength)
            .on("change.DT", function (m) {
                jb(a, l(this).val());
                ja(a);
            });
        l(a.nTable).on("length.dt.DT", function (m, n, p) {
            a === n && l("select", k).val(p);
        });
        return k[0];
    }
    function Ob(a) {
        var b = a.sPaginationType,
            c = u.ext.pager[b],
            d = "function" === typeof c,
            e = function (f) {
                ja(f);
            };
        b = l("<div/>").addClass(a.oClasses.sPaging + b)[0];
        var h = a.aanFeatures;
        d || c.fnInit(a, b, e);
        h.p ||
            ((b.id = a.sTableId + "_paginate"),
            a.aoDrawCallback.push({
                fn: function (f) {
                    if (d) {
                        var g = f._iDisplayStart,
                            k = f._iDisplayLength,
                            m = f.fnRecordsDisplay(),
                            n = -1 === k;
                        g = n ? 0 : Math.ceil(g / k);
                        k = n ? 1 : Math.ceil(m / k);
                        m = c(g, k);
                        var p;
                        n = 0;
                        for (p = h.p.length; n < p; n++) fb(f, "pageButton")(f, h.p[n], n, m, g, k);
                    } else c.fnUpdate(f, e);
                },
                sName: "pagination",
            }));
        return b;
    }
    function lb(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay();
        0 === h || -1 === e
            ? (d = 0)
            : "number" === typeof b
            ? ((d = b * e), d > h && (d = 0))
            : "first" == b
            ? (d = 0)
            : "previous " == b
            ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
            : "next" == b
            ? d + e < h && (d += e)
            : "last" == b
            ? (d = Math.floor((h - 1) / e) * e)
            : da(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (F(a, null, "page", [a]), c && ja(a));
        return b;
    }
    function Lb(a) {
        return l("<div/>", { id: a.aanFeatures.r ? null : a.sTableId + "_processing", class: a.oClasses.sProcessing })
            .html(a.oLanguage.sProcessing)
            .insertBefore(a.nTable)[0];
    }
    function V(a, b) {
        a.oFeatures.bProcessing && l(a.aanFeatures.r).css("display", b ? "block" : "none");
        F(a, null, "processing", [a, b]);
    }
    function Mb(a) {
        var b = l(a.nTable),
            c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            h = a.oClasses,
            f = b.children("caption"),
            g = f.length ? f[0]._captionSide : null,
            k = l(b[0].cloneNode(!1)),
            m = l(b[0].cloneNode(!1)),
            n = b.children("tfoot");
        n.length || (n = null);
        k = l("<div/>", { class: h.sScrollWrapper })
            .append(
                l("<div/>", { class: h.sScrollHead })
                    .css({ overflow: "hidden", position: "relative", border: 0, width: d ? (d ? K(d) : null) : "100%" })
                    .append(
                        l("<div/>", { class: h.sScrollHeadInner })
                            .css({ "box-sizing": "content-box", width: c.sXInner || "100%" })
                            .append(
                                k
                                    .removeAttr("id")
                                    .css("margin-left", 0)
                                    .append("top" === g ? f : null)
                                    .append(b.children("thead"))
                            )
                    )
            )
            .append(
                l("<div/>", { class: h.sScrollBody })
                    .css({ position: "relative", overflow: "auto", width: d ? K(d) : null })
                    .append(b)
            );
        n &&
            k.append(
                l("<div/>", { class: h.sScrollFoot })
                    .css({ overflow: "hidden", border: 0, width: d ? (d ? K(d) : null) : "100%" })
                    .append(
                        l("<div/>", { class: h.sScrollFootInner }).append(
                            m
                                .removeAttr("id")
                                .css("margin-left", 0)
                                .append("bottom" === g ? f : null)
                                .append(b.children("tfoot"))
                        )
                    )
            );
        b = k.children();
        var p = b[0];
        h = b[1];
        var t = n ? b[2] : null;
        if (d)
            l(h).on("scroll.DT", function (v) {
                v = this.scrollLeft;
                p.scrollLeft = v;
                n && (t.scrollLeft = v);
            });
        l(h).css("max-height", e);
        c.bCollapse || l(h).css("height", e);
        a.nScrollHead = p;
        a.nScrollBody = h;
        a.nScrollFoot = t;
        a.aoDrawCallback.push({ fn: Ha, sName: "scrolling" });
        return k[0];
    }
    function Ha(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY;
        b = b.iBarWidth;
        var h = l(a.nScrollHead),
            f = h[0].style,
            g = h.children("div"),
            k = g[0].style,
            m = g.children("table");
        g = a.nScrollBody;
        var n = l(g),
            p = g.style,
            t = l(a.nScrollFoot).children("div"),
            v = t.children("table"),
            x = l(a.nTHead),
            w = l(a.nTable),
            r = w[0],
            C = r.style,
            G = a.nTFoot ? l(a.nTFoot) : null,
            aa = a.oBrowser,
            L = aa.bScrollOversize;
        U(a.aoColumns, "nTh");
        var O = [],
            I = [],
            H = [],
            ea = [],
            Y,
            Ca = function (D) {
                D = D.style;
                D.paddingTop = "0";
                D.paddingBottom = "0";
                D.borderTopWidth = "0";
                D.borderBottomWidth = "0";
                D.height = 0;
            };
        var fa = g.scrollHeight > g.clientHeight;
        if (a.scrollBarVis !== fa && a.scrollBarVis !== q) (a.scrollBarVis = fa), ta(a);
        else {
            a.scrollBarVis = fa;
            w.children("thead, tfoot").remove();
            if (G) {
                var ba = G.clone().prependTo(w);
                var la = G.find("tr");
                ba = ba.find("tr");
            }
            var mb = x.clone().prependTo(w);
            x = x.find("tr");
            fa = mb.find("tr");
            mb.find("th, td").removeAttr("tabindex");
            c || ((p.width = "100%"), (h[0].style.width = "100%"));
            l.each(Na(a, mb), function (D, W) {
                Y = ua(a, D);
                W.style.width = a.aoColumns[Y].sWidth;
            });
            G &&
                ca(function (D) {
                    D.style.width = "";
                }, ba);
            h = w.outerWidth();
            "" === c
                ? ((C.width = "100%"), L && (w.find("tbody").height() > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(w.outerWidth() - b)), (h = w.outerWidth()))
                : "" !== d && ((C.width = K(d)), (h = w.outerWidth()));
            ca(Ca, fa);
            ca(function (D) {
                var W = z.getComputedStyle ? z.getComputedStyle(D).width : K(l(D).width());
                H.push(D.innerHTML);
                O.push(W);
            }, fa);
            ca(function (D, W) {
                D.style.width = O[W];
            }, x);
            l(fa).height(0);
            G &&
                (ca(Ca, ba),
                ca(function (D) {
                    ea.push(D.innerHTML);
                    I.push(K(l(D).css("width")));
                }, ba),
                ca(function (D, W) {
                    D.style.width = I[W];
                }, la),
                l(ba).height(0));
            ca(function (D, W) {
                D.innerHTML = '<div class="dataTables_sizing">' + H[W] + "</div>";
                D.childNodes[0].style.height = "0";
                D.childNodes[0].style.overflow = "hidden";
                D.style.width = O[W];
            }, fa);
            G &&
                ca(function (D, W) {
                    D.innerHTML = '<div class="dataTables_sizing">' + ea[W] + "</div>";
                    D.childNodes[0].style.height = "0";
                    D.childNodes[0].style.overflow = "hidden";
                    D.style.width = I[W];
                }, ba);
            w.outerWidth() < h
                ? ((la = g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y") ? h + b : h),
                  L && (g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(la - b)),
                  ("" !== c && "" === d) || da(a, 1, "Possible column misalignment", 6))
                : (la = "100%");
            p.width = K(la);
            f.width = K(la);
            G && (a.nScrollFoot.style.width = K(la));
            !e && L && (p.height = K(r.offsetHeight + b));
            c = w.outerWidth();
            m[0].style.width = K(c);
            k.width = K(c);
            d = w.height() > g.clientHeight || "scroll" == n.css("overflow-y");
            e = "padding" + (aa.bScrollbarLeft ? "Left" : "Right");
            k[e] = d ? b + "px" : "0px";
            G && ((v[0].style.width = K(c)), (t[0].style.width = K(c)), (t[0].style[e] = d ? b + "px" : "0px"));
            w.children("colgroup").insertBefore(w.children("thead"));
            n.trigger("scroll");
            (!a.bSorted && !a.bFiltered) || a._drawHold || (g.scrollTop = 0);
        }
    }
    function ca(a, b, c) {
        for (var d = 0, e = 0, h = b.length, f, g; e < h; ) {
            f = b[e].firstChild;
            for (g = c ? c[e].firstChild : null; f; ) 1 === f.nodeType && (c ? a(f, g, d) : a(f, d), d++), (f = f.nextSibling), (g = c ? g.nextSibling : null);
            e++;
        }
    }
    function Ya(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            h = d.sX,
            f = d.sXInner,
            g = c.length,
            k = Ia(a, "bVisible"),
            m = l("th", a.nTHead),
            n = b.getAttribute("width"),
            p = b.parentNode,
            t = !1,
            v,
            x = a.oBrowser;
        d = x.bScrollOversize;
        (v = b.style.width) && -1 !== v.indexOf("%") && (n = v);
        for (v = 0; v < k.length; v++) {
            var w = c[k[v]];
            null !== w.sWidth && ((w.sWidth = Zb(w.sWidthOrig, p)), (t = !0));
        }
        if (d || (!t && !h && !e && g == oa(a) && g == m.length)) for (v = 0; v < g; v++) (k = ua(a, v)), null !== k && (c[k].sWidth = K(m.eq(v).width()));
        else {
            g = l(b).clone().css("visibility", "hidden").removeAttr("id");
            g.find("tbody tr").remove();
            var r = l("<tr/>").appendTo(g.find("tbody"));
            g.find("thead, tfoot").remove();
            g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());
            g.find("tfoot th, tfoot td").css("width", "");
            m = Na(a, g.find("thead")[0]);
            for (v = 0; v < k.length; v++)
                (w = c[k[v]]),
                    (m[v].style.width = null !== w.sWidthOrig && "" !== w.sWidthOrig ? K(w.sWidthOrig) : ""),
                    w.sWidthOrig && h && l(m[v]).append(l("<div/>").css({ width: w.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
            if (a.aoData.length) for (v = 0; v < k.length; v++) (t = k[v]), (w = c[t]), l($b(a, t)).clone(!1).append(w.sContentPadding).appendTo(r);
            l("[name]", g).removeAttr("name");
            w = l("<div/>")
                .css(h || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {})
                .append(g)
                .appendTo(p);
            h && f ? g.width(f) : h ? (g.css("width", "auto"), g.removeAttr("width"), g.width() < p.clientWidth && n && g.width(p.clientWidth)) : e ? g.width(p.clientWidth) : n && g.width(n);
            for (v = e = 0; v < k.length; v++) (p = l(m[v])), (f = p.outerWidth() - p.width()), (p = x.bBounding ? Math.ceil(m[v].getBoundingClientRect().width) : p.outerWidth()), (e += p), (c[k[v]].sWidth = K(p - f));
            b.style.width = K(e);
            w.remove();
        }
        n && (b.style.width = K(n));
        (!n && !h) ||
            a._reszEvt ||
            ((b = function () {
                l(z).on(
                    "resize.DT-" + a.sInstance,
                    gb(function () {
                        ta(a);
                    })
                );
            }),
            d ? setTimeout(b, 1e3) : b(),
            (a._reszEvt = !0));
    }
    function Zb(a, b) {
        if (!a) return 0;
        a = l("<div/>")
            .css("width", K(a))
            .appendTo(b || A.body);
        b = a[0].offsetWidth;
        a.remove();
        return b;
    }
    function $b(a, b) {
        var c = ac(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return d.nTr ? d.anCells[b] : l("<td/>").html(T(a, c, b, "display"))[0];
    }
    function ac(a, b) {
        for (var c, d = -1, e = -1, h = 0, f = a.aoData.length; h < f; h++) (c = T(a, h, b, "display") + ""), (c = c.replace(tc, "")), (c = c.replace(/&nbsp;/g, " ")), c.length > d && ((d = c.length), (e = h));
        return e;
    }
    function K(a) {
        return null === a ? "0px" : "number" == typeof a ? (0 > a ? "0px" : a + "px") : a.match(/\d$/) ? a + "px" : a;
    }
    function pa(a) {
        var b = [],
            c = a.aoColumns;
        var d = a.aaSortingFixed;
        var e = l.isPlainObject(d);
        var h = [];
        var f = function (n) {
            n.length && !Array.isArray(n[0]) ? h.push(n) : l.merge(h, n);
        };
        Array.isArray(d) && f(d);
        e && d.pre && f(d.pre);
        f(a.aaSorting);
        e && d.post && f(d.post);
        for (a = 0; a < h.length; a++) {
            var g = h[a][0];
            f = c[g].aDataSort;
            d = 0;
            for (e = f.length; d < e; d++) {
                var k = f[d];
                var m = c[k].sType || "string";
                h[a]._idx === q && (h[a]._idx = l.inArray(h[a][1], c[k].asSorting));
                b.push({ src: g, col: k, dir: h[a][1], index: h[a]._idx, type: m, formatter: u.ext.type.order[m + "-pre"] });
            }
        }
        return b;
    }
    function Hb(a) {
        var b,
            c = [],
            d = u.ext.type.order,
            e = a.aoData,
            h = 0,
            f = a.aiDisplayMaster;
        Za(a);
        var g = pa(a);
        var k = 0;
        for (b = g.length; k < b; k++) {
            var m = g[k];
            m.formatter && h++;
            bc(a, m.col);
        }
        if ("ssp" != Q(a) && 0 !== g.length) {
            k = 0;
            for (b = f.length; k < b; k++) c[f[k]] = k;
            h === g.length
                ? f.sort(function (n, p) {
                      var t,
                          v = g.length,
                          x = e[n]._aSortData,
                          w = e[p]._aSortData;
                      for (t = 0; t < v; t++) {
                          var r = g[t];
                          var C = x[r.col];
                          var G = w[r.col];
                          C = C < G ? -1 : C > G ? 1 : 0;
                          if (0 !== C) return "asc" === r.dir ? C : -C;
                      }
                      C = c[n];
                      G = c[p];
                      return C < G ? -1 : C > G ? 1 : 0;
                  })
                : f.sort(function (n, p) {
                      var t,
                          v = g.length,
                          x = e[n]._aSortData,
                          w = e[p]._aSortData;
                      for (t = 0; t < v; t++) {
                          var r = g[t];
                          var C = x[r.col];
                          var G = w[r.col];
                          r = d[r.type + "-" + r.dir] || d["string-" + r.dir];
                          C = r(C, G);
                          if (0 !== C) return C;
                      }
                      C = c[n];
                      G = c[p];
                      return C < G ? -1 : C > G ? 1 : 0;
                  });
        }
        a.bSorted = !0;
    }
    function cc(a) {
        var b = a.aoColumns,
            c = pa(a);
        a = a.oLanguage.oAria;
        for (var d = 0, e = b.length; d < e; d++) {
            var h = b[d];
            var f = h.asSorting;
            var g = h.ariaTitle || h.sTitle.replace(/<.*?>/g, "");
            var k = h.nTh;
            k.removeAttribute("aria-sort");
            h.bSortable &&
                (0 < c.length && c[0].col == d ? (k.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), (h = f[c[0].index + 1] || f[0])) : (h = f[0]), (g += "asc" === h ? a.sSortAscending : a.sSortDescending));
            k.setAttribute("aria-label", g);
        }
    }
    function nb(a, b, c, d) {
        var e = a.aaSorting,
            h = a.aoColumns[b].asSorting,
            f = function (g, k) {
                var m = g._idx;
                m === q && (m = l.inArray(g[1], h));
                return m + 1 < h.length ? m + 1 : k ? null : 0;
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti
            ? ((c = l.inArray(b, U(e, "0"))), -1 !== c ? ((b = f(e[c], !0)), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : ((e[c][1] = h[b]), (e[c]._idx = b))) : (e.push([b, h[0], 0]), (e[e.length - 1]._idx = 0)))
            : e.length && e[0][0] == b
            ? ((b = f(e[0])), (e.length = 1), (e[0][1] = h[b]), (e[0]._idx = b))
            : ((e.length = 0), e.push([b, h[0]]), (e[0]._idx = 0));
        ka(a);
        "function" == typeof d && d(a);
    }
    function eb(a, b, c, d) {
        var e = a.aoColumns[c];
        ob(b, {}, function (h) {
            !1 !== e.bSortable &&
                (a.oFeatures.bProcessing
                    ? (V(a, !0),
                      setTimeout(function () {
                          nb(a, c, h.shiftKey, d);
                          "ssp" !== Q(a) && V(a, !1);
                      }, 0))
                    : nb(a, c, h.shiftKey, d));
        });
    }
    function Ra(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = pa(a),
            e = a.oFeatures,
            h;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (h = b.length; e < h; e++) {
                var f = b[e].src;
                l(U(a.aoData, "anCells", f)).removeClass(c + (2 > e ? e + 1 : 3));
            }
            e = 0;
            for (h = d.length; e < h; e++) (f = d[e].src), l(U(a.aoData, "anCells", f)).addClass(c + (2 > e ? e + 1 : 3));
        }
        a.aLastSort = d;
    }
    function bc(a, b) {
        var c = a.aoColumns[b],
            d = u.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, va(a, b)));
        for (var h, f = u.ext.type.order[c.sType + "-pre"], g = 0, k = a.aoData.length; g < k; g++)
            if (((c = a.aoData[g]), c._aSortData || (c._aSortData = []), !c._aSortData[b] || d)) (h = d ? e[g] : T(a, g, b, "sort")), (c._aSortData[b] = f ? f(h) : h);
    }
    function qa(a) {
        if (!a._bLoadingState) {
            var b = {
                time: +new Date(),
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: l.extend(!0, [], a.aaSorting),
                search: Vb(a.oPreviousSearch),
                columns: l.map(a.aoColumns, function (c, d) {
                    return { visible: c.bVisible, search: Vb(a.aoPreSearchCols[d]) };
                }),
            };
            a.oSavedState = b;
            F(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oFeatures.bStateSave && !a.bDestroying && a.fnStateSaveCallback.call(a.oInstance, a, b);
        }
    }
    function dc(a, b, c) {
        if (a.oFeatures.bStateSave)
            return (
                (b = a.fnStateLoadCallback.call(a.oInstance, a, function (d) {
                    pb(a, d, c);
                })),
                b !== q && pb(a, b, c),
                !0
            );
        c();
    }
    function pb(a, b, c) {
        var d,
            e = a.aoColumns;
        a._bLoadingState = !0;
        var h = a._bInitComplete ? new u.Api(a) : null;
        if (b && b.time) {
            var f = F(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
            if (-1 !== l.inArray(!1, f)) a._bLoadingState = !1;
            else if (((f = a.iStateDuration), 0 < f && b.time < +new Date() - 1e3 * f)) a._bLoadingState = !1;
            else if (b.columns && e.length !== b.columns.length) a._bLoadingState = !1;
            else {
                a.oLoadedState = l.extend(!0, {}, b);
                b.start !== q && ((a._iDisplayStart = b.start), null === h && (a.iInitDisplayStart = b.start));
                b.length !== q && (a._iDisplayLength = b.length);
                b.order !== q &&
                    ((a.aaSorting = []),
                    l.each(b.order, function (k, m) {
                        a.aaSorting.push(m[0] >= e.length ? [0, m[1]] : m);
                    }));
                b.search !== q && l.extend(a.oPreviousSearch, Wb(b.search));
                if (b.columns) {
                    f = 0;
                    for (d = b.columns.length; f < d; f++) {
                        var g = b.columns[f];
                        g.visible !== q && (h ? h.column(f).visible(g.visible, !1) : (e[f].bVisible = g.visible));
                        g.search !== q && l.extend(a.aoPreSearchCols[f], Wb(g.search));
                    }
                    h && h.columns.adjust();
                }
                a._bLoadingState = !1;
                F(a, "aoStateLoaded", "stateLoaded", [a, b]);
            }
        } else a._bLoadingState = !1;
        c();
    }
    function Sa(a) {
        var b = u.settings;
        a = l.inArray(a, U(b, "nTable"));
        return -1 !== a ? b[a] : null;
    }
    function da(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b) z.console && console.log && console.log(c);
        else if (((b = u.ext), (b = b.sErrMode || b.errMode), a && F(a, null, "error", [a, d, c]), "alert" == b)) alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c);
        }
    }
    function X(a, b, c, d) {
        Array.isArray(c)
            ? l.each(c, function (e, h) {
                  Array.isArray(h) ? X(a, b, h[0], h[1]) : X(a, b, h);
              })
            : (d === q && (d = c), b[c] !== q && (a[d] = b[c]));
    }
    function qb(a, b, c) {
        var d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                l.isPlainObject(e) ? (l.isPlainObject(a[d]) || (a[d] = {}), l.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && Array.isArray(e) ? (a[d] = e.slice()) : (a[d] = e);
            }
        return a;
    }
    function ob(a, b, c) {
        l(a)
            .on("click.DT", b, function (d) {
                l(a).trigger("blur");
                c(d);
            })
            .on("keypress.DT", b, function (d) {
                13 === d.which && (d.preventDefault(), c(d));
            })
            .on("selectstart.DT", function () {
                return !1;
            });
    }
    function R(a, b, c, d) {
        c && a[b].push({ fn: c, sName: d });
    }
    function F(a, b, c, d) {
        var e = [];
        b &&
            (e = l.map(a[b].slice().reverse(), function (h, f) {
                return h.fn.apply(a.oInstance, d);
            }));
        null !== c && ((b = l.Event(c + ".dt")), l(a.nTable).trigger(b, d), e.push(b.result));
        return e;
    }
    function kb(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b;
    }
    function fb(a, b) {
        a = a.renderer;
        var c = u.ext.renderer[b];
        return l.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._;
    }
    function Q(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
    }
    function Da(a, b) {
        var c = ec.numbers_length,
            d = Math.floor(c / 2);
        b <= c
            ? (a = ra(0, b))
            : a <= d
            ? ((a = ra(0, c - 2)), a.push("ellipsis"), a.push(b - 1))
            : (a >= b - 1 - d ? (a = ra(b - (c - 2), b)) : ((a = ra(a - d + 2, a + d - 1)), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
        a.DT_el = "span";
        return a;
    }
    function Wa(a) {
        l.each(
            {
                num: function (b) {
                    return Ta(b, a);
                },
                "num-fmt": function (b) {
                    return Ta(b, a, rb);
                },
                "html-num": function (b) {
                    return Ta(b, a, Ua);
                },
                "html-num-fmt": function (b) {
                    return Ta(b, a, Ua, rb);
                },
            },
            function (b, c) {
                M.type.order[b + a + "-pre"] = c;
                b.match(/^html\-/) && (M.type.search[b + a] = M.type.search.html);
            }
        );
    }
    function fc(a) {
        return function () {
            var b = [Sa(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return u.ext.internal[a].apply(this, b);
        };
    }
    var u = function (a, b) {
            if (this instanceof u) return l(a).DataTable(b);
            b = a;
            this.$ = function (f, g) {
                return this.api(!0).$(f, g);
            };
            this._ = function (f, g) {
                return this.api(!0).rows(f, g).data();
            };
            this.api = function (f) {
                return f ? new B(Sa(this[M.iApiIndex])) : new B(this);
            };
            this.fnAddData = function (f, g) {
                var k = this.api(!0);
                f = Array.isArray(f) && (Array.isArray(f[0]) || l.isPlainObject(f[0])) ? k.rows.add(f) : k.row.add(f);
                (g === q || g) && k.draw();
                return f.flatten().toArray();
            };
            this.fnAdjustColumnSizing = function (f) {
                var g = this.api(!0).columns.adjust(),
                    k = g.settings()[0],
                    m = k.oScroll;
                f === q || f ? g.draw(!1) : ("" !== m.sX || "" !== m.sY) && Ha(k);
            };
            this.fnClearTable = function (f) {
                var g = this.api(!0).clear();
                (f === q || f) && g.draw();
            };
            this.fnClose = function (f) {
                this.api(!0).row(f).child.hide();
            };
            this.fnDeleteRow = function (f, g, k) {
                var m = this.api(!0);
                f = m.rows(f);
                var n = f.settings()[0],
                    p = n.aoData[f[0][0]];
                f.remove();
                g && g.call(this, n, p);
                (k === q || k) && m.draw();
                return p;
            };
            this.fnDestroy = function (f) {
                this.api(!0).destroy(f);
            };
            this.fnDraw = function (f) {
                this.api(!0).draw(f);
            };
            this.fnFilter = function (f, g, k, m, n, p) {
                n = this.api(!0);
                null === g || g === q ? n.search(f, k, m, p) : n.column(g).search(f, k, m, p);
                n.draw();
            };
            this.fnGetData = function (f, g) {
                var k = this.api(!0);
                if (f !== q) {
                    var m = f.nodeName ? f.nodeName.toLowerCase() : "";
                    return g !== q || "td" == m || "th" == m ? k.cell(f, g).data() : k.row(f).data() || null;
                }
                return k.data().toArray();
            };
            this.fnGetNodes = function (f) {
                var g = this.api(!0);
                return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray();
            };
            this.fnGetPosition = function (f) {
                var g = this.api(!0),
                    k = f.nodeName.toUpperCase();
                return "TR" == k ? g.row(f).index() : "TD" == k || "TH" == k ? ((f = g.cell(f).index()), [f.row, f.columnVisible, f.column]) : null;
            };
            this.fnIsOpen = function (f) {
                return this.api(!0).row(f).child.isShown();
            };
            this.fnOpen = function (f, g, k) {
                return this.api(!0).row(f).child(g, k).show().child()[0];
            };
            this.fnPageChange = function (f, g) {
                f = this.api(!0).page(f);
                (g === q || g) && f.draw(!1);
            };
            this.fnSetColumnVis = function (f, g, k) {
                f = this.api(!0).column(f).visible(g);
                (k === q || k) && f.columns.adjust().draw();
            };
            this.fnSettings = function () {
                return Sa(this[M.iApiIndex]);
            };
            this.fnSort = function (f) {
                this.api(!0).order(f).draw();
            };
            this.fnSortListener = function (f, g, k) {
                this.api(!0).order.listener(f, g, k);
            };
            this.fnUpdate = function (f, g, k, m, n) {
                var p = this.api(!0);
                k === q || null === k ? p.row(g).data(f) : p.cell(g, k).data(f);
                (n === q || n) && p.columns.adjust();
                (m === q || m) && p.draw();
                return 0;
            };
            this.fnVersionCheck = M.fnVersionCheck;
            var c = this,
                d = b === q,
                e = this.length;
            d && (b = {});
            this.oApi = this.internal = M.internal;
            for (var h in u.ext.internal) h && (this[h] = fc(h));
            this.each(function () {
                var f = {},
                    g = 1 < e ? qb(f, b, !0) : b,
                    k = 0,
                    m;
                f = this.getAttribute("id");
                var n = !1,
                    p = u.defaults,
                    t = l(this);
                if ("table" != this.nodeName.toLowerCase()) da(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    zb(p);
                    Ab(p.column);
                    P(p, p, !0);
                    P(p.column, p.column, !0);
                    P(p, l.extend(g, t.data()), !0);
                    var v = u.settings;
                    k = 0;
                    for (m = v.length; k < m; k++) {
                        var x = v[k];
                        if (x.nTable == this || (x.nTHead && x.nTHead.parentNode == this) || (x.nTFoot && x.nTFoot.parentNode == this)) {
                            var w = g.bRetrieve !== q ? g.bRetrieve : p.bRetrieve;
                            if (d || w) return x.oInstance;
                            if (g.bDestroy !== q ? g.bDestroy : p.bDestroy) {
                                x.oInstance.fnDestroy();
                                break;
                            } else {
                                da(x, 0, "Cannot reinitialise DataTable", 3);
                                return;
                            }
                        }
                        if (x.sTableId == this.id) {
                            v.splice(k, 1);
                            break;
                        }
                    }
                    if (null === f || "" === f) this.id = f = "DataTables_Table_" + u.ext._unique++;
                    var r = l.extend(!0, {}, u.models.oSettings, { sDestroyWidth: t[0].style.width, sInstance: f, sTableId: f });
                    r.nTable = this;
                    r.oApi = c.internal;
                    r.oInit = g;
                    v.push(r);
                    r.oInstance = 1 === c.length ? c : t.dataTable();
                    zb(g);
                    ma(g.oLanguage);
                    g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                    g = qb(l.extend(!0, {}, p), g);
                    X(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    X(r, g, [
                        "asStripeClasses",
                        "ajax",
                        "fnServerData",
                        "fnFormatNumber",
                        "sServerMethod",
                        "aaSorting",
                        "aaSortingFixed",
                        "aLengthMenu",
                        "sPaginationType",
                        "sAjaxSource",
                        "sAjaxDataProp",
                        "iStateDuration",
                        "sDom",
                        "bSortCellsTop",
                        "iTabIndex",
                        "fnStateLoadCallback",
                        "fnStateSaveCallback",
                        "renderer",
                        "searchDelay",
                        "rowId",
                        ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                    ]);
                    X(r.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"],
                    ]);
                    X(r.oLanguage, g, "fnInfoCallback");
                    R(r, "aoDrawCallback", g.fnDrawCallback, "user");
                    R(r, "aoServerParams", g.fnServerParams, "user");
                    R(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                    R(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                    R(r, "aoStateLoaded", g.fnStateLoaded, "user");
                    R(r, "aoRowCallback", g.fnRowCallback, "user");
                    R(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                    R(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                    R(r, "aoFooterCallback", g.fnFooterCallback, "user");
                    R(r, "aoInitComplete", g.fnInitComplete, "user");
                    R(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                    r.rowIdFn = na(g.rowId);
                    Bb(r);
                    var C = r.oClasses;
                    l.extend(C, u.ext.classes, g.oClasses);
                    t.addClass(C.sTable);
                    r.iInitDisplayStart === q && ((r.iInitDisplayStart = g.iDisplayStart), (r._iDisplayStart = g.iDisplayStart));
                    null !== g.iDeferLoading && ((r.bDeferLoading = !0), (f = Array.isArray(g.iDeferLoading)), (r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading), (r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading));
                    var G = r.oLanguage;
                    l.extend(!0, G, g.oLanguage);
                    G.sUrl
                        ? (l.ajax({
                              dataType: "json",
                              url: G.sUrl,
                              success: function (I) {
                                  P(p.oLanguage, I);
                                  ma(I);
                                  l.extend(!0, G, I);
                                  F(r, null, "i18n", [r]);
                                  Ba(r);
                              },
                              error: function () {
                                  Ba(r);
                              },
                          }),
                          (n = !0))
                        : F(r, null, "i18n", [r]);
                    null === g.asStripeClasses && (r.asStripeClasses = [C.sStripeOdd, C.sStripeEven]);
                    f = r.asStripeClasses;
                    var aa = t.children("tbody").find("tr").eq(0);
                    -1 !==
                        l.inArray(
                            !0,
                            l.map(f, function (I, H) {
                                return aa.hasClass(I);
                            })
                        ) && (l("tbody tr", this).removeClass(f.join(" ")), (r.asDestroyStripes = f.slice()));
                    f = [];
                    v = this.getElementsByTagName("thead");
                    0 !== v.length && (xa(r.aoHeader, v[0]), (f = Na(r)));
                    if (null === g.aoColumns) for (v = [], k = 0, m = f.length; k < m; k++) v.push(null);
                    else v = g.aoColumns;
                    k = 0;
                    for (m = v.length; k < m; k++) Xa(r, f ? f[k] : null);
                    Db(r, g.aoColumnDefs, v, function (I, H) {
                        Ga(r, I, H);
                    });
                    if (aa.length) {
                        var L = function (I, H) {
                            return null !== I.getAttribute("data-" + H) ? H : null;
                        };
                        l(aa[0])
                            .children("th, td")
                            .each(function (I, H) {
                                var ea = r.aoColumns[I];
                                if (ea.mData === I) {
                                    var Y = L(H, "sort") || L(H, "order");
                                    H = L(H, "filter") || L(H, "search");
                                    if (null !== Y || null !== H) (ea.mData = { _: I + ".display", sort: null !== Y ? I + ".@data-" + Y : q, type: null !== Y ? I + ".@data-" + Y : q, filter: null !== H ? I + ".@data-" + H : q }), Ga(r, I);
                                }
                            });
                    }
                    var O = r.oFeatures;
                    f = function () {
                        if (g.aaSorting === q) {
                            var I = r.aaSorting;
                            k = 0;
                            for (m = I.length; k < m; k++) I[k][1] = r.aoColumns[k].asSorting[0];
                        }
                        Ra(r);
                        O.bSort &&
                            R(r, "aoDrawCallback", function () {
                                if (r.bSorted) {
                                    var Y = pa(r),
                                        Ca = {};
                                    l.each(Y, function (fa, ba) {
                                        Ca[ba.src] = ba.dir;
                                    });
                                    F(r, null, "order", [r, Y, Ca]);
                                    cc(r);
                                }
                            });
                        R(
                            r,
                            "aoDrawCallback",
                            function () {
                                (r.bSorted || "ssp" === Q(r) || O.bDeferRender) && Ra(r);
                            },
                            "sc"
                        );
                        I = t.children("caption").each(function () {
                            this._captionSide = l(this).css("caption-side");
                        });
                        var H = t.children("thead");
                        0 === H.length && (H = l("<thead/>").appendTo(t));
                        r.nTHead = H[0];
                        var ea = t.children("tbody");
                        0 === ea.length && (ea = l("<tbody/>").insertAfter(H));
                        r.nTBody = ea[0];
                        H = t.children("tfoot");
                        0 === H.length && 0 < I.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (H = l("<tfoot/>").appendTo(t));
                        0 === H.length || 0 === H.children().length ? t.addClass(C.sNoFooter) : 0 < H.length && ((r.nTFoot = H[0]), xa(r.aoFooter, r.nTFoot));
                        if (g.aaData) for (k = 0; k < g.aaData.length; k++) ia(r, g.aaData[k]);
                        else (r.bDeferLoading || "dom" == Q(r)) && Ja(r, l(r.nTBody).children("tr"));
                        r.aiDisplay = r.aiDisplayMaster.slice();
                        r.bInitialised = !0;
                        !1 === n && Ba(r);
                    };
                    R(r, "aoDrawCallback", qa, "state_save");
                    g.bStateSave ? ((O.bStateSave = !0), dc(r, g, f)) : f();
                }
            });
            c = null;
            return this;
        },
        M,
        y,
        J,
        sb = {},
        gc = /[\r\n\u2028]/g,
        Ua = /<.*?>/g,
        uc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        vc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
        rb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        Z = function (a) {
            return a && !0 !== a && "-" !== a ? !1 : !0;
        },
        hc = function (a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null;
        },
        ic = function (a, b) {
            sb[b] || (sb[b] = new RegExp(ib(b), "g"));
            return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(sb[b], ".") : a;
        },
        tb = function (a, b, c) {
            var d = "string" === typeof a;
            if (Z(a)) return !0;
            b && d && (a = ic(a, b));
            c && d && (a = a.replace(rb, ""));
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        jc = function (a, b, c) {
            return Z(a) ? !0 : Z(a) || "string" === typeof a ? (tb(a.replace(Ua, ""), b, c) ? !0 : null) : null;
        },
        U = function (a, b, c) {
            var d = [],
                e = 0,
                h = a.length;
            if (c !== q) for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else for (; e < h; e++) a[e] && d.push(a[e][b]);
            return d;
        },
        Ea = function (a, b, c, d) {
            var e = [],
                h = 0,
                f = b.length;
            if (d !== q) for (; h < f; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
            else for (; h < f; h++) e.push(a[b[h]][c]);
            return e;
        },
        ra = function (a, b) {
            var c = [];
            if (b === q) {
                b = 0;
                var d = a;
            } else (d = b), (b = a);
            for (a = b; a < d; a++) c.push(a);
            return c;
        },
        kc = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b;
        },
        Ma = function (a) {
            a: {
                if (!(2 > a.length)) {
                    var b = a.slice().sort();
                    for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                        if (b[d] === c) {
                            b = !1;
                            break a;
                        }
                        c = b[d];
                    }
                }
                b = !0;
            }
            if (b) return a.slice();
            b = [];
            e = a.length;
            var h,
                f = 0;
            d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (h = 0; h < f; h++) if (b[h] === c) continue a;
                b.push(c);
                f++;
            }
            return b;
        },
        lc = function (a, b) {
            if (Array.isArray(b)) for (var c = 0; c < b.length; c++) lc(a, b[c]);
            else a.push(b);
            return a;
        },
        mc = function (a, b) {
            b === q && (b = 0);
            return -1 !== this.indexOf(a, b);
        };
    Array.isArray ||
        (Array.isArray = function (a) {
            return "[object Array]" === Object.prototype.toString.call(a);
        });
    Array.prototype.includes || (Array.prototype.includes = mc);
    String.prototype.trim ||
        (String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        });
    String.prototype.includes || (String.prototype.includes = mc);
    u.util = {
        throttle: function (a, b) {
            var c = b !== q ? b : 200,
                d,
                e;
            return function () {
                var h = this,
                    f = +new Date(),
                    g = arguments;
                d && f < d + c
                    ? (clearTimeout(e),
                      (e = setTimeout(function () {
                          d = q;
                          a.apply(h, g);
                      }, c)))
                    : ((d = f), a.apply(h, g));
            };
        },
        escapeRegex: function (a) {
            return a.replace(vc, "\\$1");
        },
        set: function (a) {
            if (l.isPlainObject(a)) return u.util.set(a._);
            if (null === a) return function () {};
            if ("function" === typeof a)
                return function (c, d, e) {
                    a(c, "set", d, e);
                };
            if ("string" !== typeof a || (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")))
                return function (c, d) {
                    c[a] = d;
                };
            var b = function (c, d, e) {
                e = bb(e);
                var h = e[e.length - 1];
                for (var f, g, k = 0, m = e.length - 1; k < m; k++) {
                    if ("__proto__" === e[k] || "constructor" === e[k]) throw Error("Cannot set prototype values");
                    f = e[k].match(Fa);
                    g = e[k].match(sa);
                    if (f) {
                        e[k] = e[k].replace(Fa, "");
                        c[e[k]] = [];
                        h = e.slice();
                        h.splice(0, k + 1);
                        f = h.join(".");
                        if (Array.isArray(d)) for (g = 0, m = d.length; g < m; g++) (h = {}), b(h, d[g], f), c[e[k]].push(h);
                        else c[e[k]] = d;
                        return;
                    }
                    g && ((e[k] = e[k].replace(sa, "")), (c = c[e[k]](d)));
                    if (null === c[e[k]] || c[e[k]] === q) c[e[k]] = {};
                    c = c[e[k]];
                }
                if (h.match(sa)) c[h.replace(sa, "")](d);
                else c[h.replace(Fa, "")] = d;
            };
            return function (c, d) {
                return b(c, d, a);
            };
        },
        get: function (a) {
            if (l.isPlainObject(a)) {
                var b = {};
                l.each(a, function (d, e) {
                    e && (b[d] = u.util.get(e));
                });
                return function (d, e, h, f) {
                    var g = b[e] || b._;
                    return g !== q ? g(d, e, h, f) : d;
                };
            }
            if (null === a)
                return function (d) {
                    return d;
                };
            if ("function" === typeof a)
                return function (d, e, h, f) {
                    return a(d, e, h, f);
                };
            if ("string" !== typeof a || (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")))
                return function (d, e) {
                    return d[a];
                };
            var c = function (d, e, h) {
                if ("" !== h) {
                    var f = bb(h);
                    for (var g = 0, k = f.length; g < k; g++) {
                        h = f[g].match(Fa);
                        var m = f[g].match(sa);
                        if (h) {
                            f[g] = f[g].replace(Fa, "");
                            "" !== f[g] && (d = d[f[g]]);
                            m = [];
                            f.splice(0, g + 1);
                            f = f.join(".");
                            if (Array.isArray(d)) for (g = 0, k = d.length; g < k; g++) m.push(c(d[g], e, f));
                            d = h[0].substring(1, h[0].length - 1);
                            d = "" === d ? m : m.join(d);
                            break;
                        } else if (m) {
                            f[g] = f[g].replace(sa, "");
                            d = d[f[g]]();
                            continue;
                        }
                        if (null === d || d[f[g]] === q) return q;
                        d = d[f[g]];
                    }
                }
                return d;
            };
            return function (d, e) {
                return c(d, e, a);
            };
        },
    };
    var S = function (a, b, c) {
            a[b] !== q && (a[c] = a[b]);
        },
        Fa = /\[.*?\]$/,
        sa = /\(\)$/,
        na = u.util.get,
        ha = u.util.set,
        ib = u.util.escapeRegex,
        Qa = l("<div>")[0],
        sc = Qa.textContent !== q,
        tc = /<.*?>/g,
        gb = u.util.throttle,
        nc = [],
        N = Array.prototype,
        wc = function (a) {
            var b,
                c = u.settings,
                d = l.map(c, function (h, f) {
                    return h.nTable;
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                    var e = l.inArray(a, d);
                    return -1 !== e ? [c[e]] : null;
                }
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? (b = l(a)) : a instanceof l && (b = a);
            } else return [];
            if (b)
                return b
                    .map(function (h) {
                        e = l.inArray(this, d);
                        return -1 !== e ? c[e] : null;
                    })
                    .toArray();
        };
    var B = function (a, b) {
        if (!(this instanceof B)) return new B(a, b);
        var c = [],
            d = function (f) {
                (f = wc(f)) && c.push.apply(c, f);
            };
        if (Array.isArray(a)) for (var e = 0, h = a.length; e < h; e++) d(a[e]);
        else d(a);
        this.context = Ma(c);
        b && l.merge(this, b);
        this.selector = { rows: null, cols: null, opts: null };
        B.extend(this, this, nc);
    };
    u.Api = B;
    l.extend(B.prototype, {
        any: function () {
            return 0 !== this.count();
        },
        concat: N.concat,
        context: [],
        count: function () {
            return this.flatten().length;
        },
        each: function (a) {
            for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
            return this;
        },
        eq: function (a) {
            var b = this.context;
            return b.length > a ? new B(b[a], this[a]) : null;
        },
        filter: function (a) {
            var b = [];
            if (N.filter) b = N.filter.call(this, a, this);
            else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new B(this.context, b);
        },
        flatten: function () {
            var a = [];
            return new B(this.context, a.concat.apply(a, this.toArray()));
        },
        join: N.join,
        indexOf:
            N.indexOf ||
            function (a, b) {
                b = b || 0;
                for (var c = this.length; b < c; b++) if (this[b] === a) return b;
                return -1;
            },
        iterator: function (a, b, c, d) {
            var e = [],
                h,
                f,
                g = this.context,
                k,
                m = this.selector;
            "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
            var n = 0;
            for (h = g.length; n < h; n++) {
                var p = new B(g[n]);
                if ("table" === b) {
                    var t = c.call(p, g[n], n);
                    t !== q && e.push(t);
                } else if ("columns" === b || "rows" === b) (t = c.call(p, g[n], this[n], n)), t !== q && e.push(t);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    var v = this[n];
                    "column-rows" === b && (k = Va(g[n], m.opts));
                    var x = 0;
                    for (f = v.length; x < f; x++) (t = v[x]), (t = "cell" === b ? c.call(p, g[n], t.row, t.column, n, x) : c.call(p, g[n], t, n, x, k)), t !== q && e.push(t);
                }
            }
            return e.length || d ? ((a = new B(g, a ? e.concat.apply([], e) : e)), (b = a.selector), (b.rows = m.rows), (b.cols = m.cols), (b.opts = m.opts), a) : this;
        },
        lastIndexOf:
            N.lastIndexOf ||
            function (a, b) {
                return this.indexOf.apply(this.toArray.reverse(), arguments);
            },
        length: 0,
        map: function (a) {
            var b = [];
            if (N.map) b = N.map.call(this, a, this);
            else for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new B(this.context, b);
        },
        pluck: function (a) {
            return this.map(function (b) {
                return b[a];
            });
        },
        pop: N.pop,
        push: N.push,
        reduce:
            N.reduce ||
            function (a, b) {
                return Cb(this, a, b, 0, this.length, 1);
            },
        reduceRight:
            N.reduceRight ||
            function (a, b) {
                return Cb(this, a, b, this.length - 1, -1, -1);
            },
        reverse: N.reverse,
        selector: null,
        shift: N.shift,
        slice: function () {
            return new B(this.context, this);
        },
        sort: N.sort,
        splice: N.splice,
        toArray: function () {
            return N.slice.call(this);
        },
        to$: function () {
            return l(this);
        },
        toJQuery: function () {
            return l(this);
        },
        unique: function () {
            return new B(this.context, Ma(this));
        },
        unshift: N.unshift,
    });
    B.extend = function (a, b, c) {
        if (c.length && b && (b instanceof B || b.__dt_wrapper)) {
            var d,
                e = function (g, k, m) {
                    return function () {
                        var n = k.apply(g, arguments);
                        B.extend(n, n, m.methodExt);
                        return n;
                    };
                };
            var h = 0;
            for (d = c.length; h < d; h++) {
                var f = c[h];
                b[f.name] = "function" === f.type ? e(a, f.val, f) : "object" === f.type ? {} : f.val;
                b[f.name].__dt_wrapper = !0;
                B.extend(a, b[f.name], f.propExt);
            }
        }
    };
    B.register = y = function (a, b) {
        if (Array.isArray(a)) for (var c = 0, d = a.length; c < d; c++) B.register(a[c], b);
        else {
            d = a.split(".");
            var e = nc,
                h;
            a = 0;
            for (c = d.length; a < c; a++) {
                var f = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
                a: {
                    var g = 0;
                    for (var k = e.length; g < k; g++)
                        if (e[g].name === f) {
                            g = e[g];
                            break a;
                        }
                    g = null;
                }
                g || ((g = { name: f, val: {}, methodExt: [], propExt: [], type: "object" }), e.push(g));
                a === c - 1 ? ((g.val = b), (g.type = "function" === typeof b ? "function" : l.isPlainObject(b) ? "object" : "other")) : (e = h ? g.methodExt : g.propExt);
            }
        }
    };
    B.registerPlural = J = function (a, b, c) {
        B.register(a, c);
        B.register(b, function () {
            var d = c.apply(this, arguments);
            return d === this ? this : d instanceof B ? (d.length ? (Array.isArray(d[0]) ? new B(d.context, d[0]) : d[0]) : q) : d;
        });
    };
    var oc = function (a, b) {
        if (Array.isArray(a))
            return l.map(a, function (d) {
                return oc(d, b);
            });
        if ("number" === typeof a) return [b[a]];
        var c = l.map(b, function (d, e) {
            return d.nTable;
        });
        return l(c)
            .filter(a)
            .map(function (d) {
                d = l.inArray(this, c);
                return b[d];
            })
            .toArray();
    };
    y("tables()", function (a) {
        return a !== q && null !== a ? new B(oc(a, this.context)) : this;
    });
    y("table()", function (a) {
        a = this.tables(a);
        var b = a.context;
        return b.length ? new B(b[0]) : a;
    });
    J("tables().nodes()", "table().node()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTable;
            },
            1
        );
    });
    J("tables().body()", "table().body()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTBody;
            },
            1
        );
    });
    J("tables().header()", "table().header()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTHead;
            },
            1
        );
    });
    J("tables().footer()", "table().footer()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTFoot;
            },
            1
        );
    });
    J("tables().containers()", "table().container()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTableWrapper;
            },
            1
        );
    });
    y("draw()", function (a) {
        return this.iterator("table", function (b) {
            "page" === a ? ja(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), ka(b, !1 === a));
        });
    });
    y("page()", function (a) {
        return a === q
            ? this.page.info().page
            : this.iterator("table", function (b) {
                  lb(b, a);
              });
    });
    y("page.info()", function (a) {
        if (0 === this.context.length) return q;
        a = this.context[0];
        var b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === Q(a) };
    });
    y("page.len()", function (a) {
        return a === q
            ? 0 !== this.context.length
                ? this.context[0]._iDisplayLength
                : q
            : this.iterator("table", function (b) {
                  jb(b, a);
              });
    });
    var pc = function (a, b, c) {
        if (c) {
            var d = new B(a);
            d.one("draw", function () {
                c(d.ajax.json());
            });
        }
        if ("ssp" == Q(a)) ka(a, b);
        else {
            V(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            Oa(a, [], function (h) {
                Ka(a);
                h = Aa(a, h);
                for (var f = 0, g = h.length; f < g; f++) ia(a, h[f]);
                ka(a, b);
                V(a, !1);
            });
        }
    };
    y("ajax.json()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].json;
    });
    y("ajax.params()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData;
    });
    y("ajax.reload()", function (a, b) {
        return this.iterator("table", function (c) {
            pc(c, !1 === b, a);
        });
    });
    y("ajax.url()", function (a) {
        var b = this.context;
        if (a === q) {
            if (0 === b.length) return q;
            b = b[0];
            return b.ajax ? (l.isPlainObject(b.ajax) ? b.ajax.url : b.ajax) : b.sAjaxSource;
        }
        return this.iterator("table", function (c) {
            l.isPlainObject(c.ajax) ? (c.ajax.url = a) : (c.ajax = a);
        });
    });
    y("ajax.url().load()", function (a, b) {
        return this.iterator("table", function (c) {
            pc(c, !1 === b, a);
        });
    });
    var ub = function (a, b, c, d, e) {
            var h = [],
                f,
                g,
                k;
            var m = typeof b;
            (b && "string" !== m && "function" !== m && b.length !== q) || (b = [b]);
            m = 0;
            for (g = b.length; m < g; m++) {
                var n = b[m] && b[m].split && !b[m].match(/[\[\(:]/) ? b[m].split(",") : [b[m]];
                var p = 0;
                for (k = n.length; p < k; p++) (f = c("string" === typeof n[p] ? n[p].trim() : n[p])) && f.length && (h = h.concat(f));
            }
            a = M.selector[a];
            if (a.length) for (m = 0, g = a.length; m < g; m++) h = a[m](d, e, h);
            return Ma(h);
        },
        vb = function (a) {
            a || (a = {});
            a.filter && a.search === q && (a.search = a.filter);
            return l.extend({ search: "none", order: "current", page: "all" }, a);
        },
        wb = function (a) {
            for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return (a[0] = a[b]), (a[0].length = 1), (a.length = 1), (a.context = [a.context[b]]), a;
            a.length = 0;
            return a;
        },
        Va = function (a, b) {
            var c = [],
                d = a.aiDisplay;
            var e = a.aiDisplayMaster;
            var h = b.search;
            var f = b.order;
            b = b.page;
            if ("ssp" == Q(a)) return "removed" === h ? [] : ra(0, e.length);
            if ("current" == b) for (f = a._iDisplayStart, a = a.fnDisplayEnd(); f < a; f++) c.push(d[f]);
            else if ("current" == f || "applied" == f)
                if ("none" == h) c = e.slice();
                else if ("applied" == h) c = d.slice();
                else {
                    if ("removed" == h) {
                        var g = {};
                        f = 0;
                        for (a = d.length; f < a; f++) g[d[f]] = null;
                        c = l.map(e, function (k) {
                            return g.hasOwnProperty(k) ? null : k;
                        });
                    }
                }
            else if ("index" == f || "original" == f) for (f = 0, a = a.aoData.length; f < a; f++) "none" == h ? c.push(f) : ((e = l.inArray(f, d)), ((-1 === e && "removed" == h) || (0 <= e && "applied" == h)) && c.push(f));
            return c;
        },
        xc = function (a, b, c) {
            var d;
            return ub(
                "row",
                b,
                function (e) {
                    var h = hc(e),
                        f = a.aoData;
                    if (null !== h && !c) return [h];
                    d || (d = Va(a, c));
                    if (null !== h && -1 !== l.inArray(h, d)) return [h];
                    if (null === e || e === q || "" === e) return d;
                    if ("function" === typeof e)
                        return l.map(d, function (k) {
                            var m = f[k];
                            return e(k, m._aData, m.nTr) ? k : null;
                        });
                    if (e.nodeName) {
                        h = e._DT_RowIndex;
                        var g = e._DT_CellIndex;
                        if (h !== q) return f[h] && f[h].nTr === e ? [h] : [];
                        if (g) return f[g.row] && f[g.row].nTr === e.parentNode ? [g.row] : [];
                        h = l(e).closest("*[data-dt-row]");
                        return h.length ? [h.data("dt-row")] : [];
                    }
                    if ("string" === typeof e && "#" === e.charAt(0) && ((h = a.aIds[e.replace(/^#/, "")]), h !== q)) return [h.idx];
                    h = kc(Ea(a.aoData, d, "nTr"));
                    return l(h)
                        .filter(e)
                        .map(function () {
                            return this._DT_RowIndex;
                        })
                        .toArray();
                },
                a,
                c
            );
        };
    y("rows()", function (a, b) {
        a === q ? (a = "") : l.isPlainObject(a) && ((b = a), (a = ""));
        b = vb(b);
        var c = this.iterator(
            "table",
            function (d) {
                return xc(d, a, b);
            },
            1
        );
        c.selector.rows = a;
        c.selector.opts = b;
        return c;
    });
    y("rows().nodes()", function () {
        return this.iterator(
            "row",
            function (a, b) {
                return a.aoData[b].nTr || q;
            },
            1
        );
    });
    y("rows().data()", function () {
        return this.iterator(
            !0,
            "rows",
            function (a, b) {
                return Ea(a.aoData, b, "_aData");
            },
            1
        );
    });
    J("rows().cache()", "row().cache()", function (a) {
        return this.iterator(
            "row",
            function (b, c) {
                b = b.aoData[c];
                return "search" === a ? b._aFilterData : b._aSortData;
            },
            1
        );
    });
    J("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            wa(b, c, a);
        });
    });
    J("rows().indexes()", "row().index()", function () {
        return this.iterator(
            "row",
            function (a, b) {
                return b;
            },
            1
        );
    });
    J("rows().ids()", "row().id()", function (a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var h = 0, f = this[d].length; h < f; h++) {
                var g = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
                b.push((!0 === a ? "#" : "") + g);
            }
        return new B(c, b);
    });
    J("rows().remove()", "row().remove()", function () {
        var a = this;
        this.iterator("row", function (b, c, d) {
            var e = b.aoData,
                h = e[c],
                f,
                g;
            e.splice(c, 1);
            var k = 0;
            for (f = e.length; k < f; k++) {
                var m = e[k];
                var n = m.anCells;
                null !== m.nTr && (m.nTr._DT_RowIndex = k);
                if (null !== n) for (m = 0, g = n.length; m < g; m++) n[m]._DT_CellIndex.row = k;
            }
            La(b.aiDisplayMaster, c);
            La(b.aiDisplay, c);
            La(a[d], c, !1);
            0 < b._iRecordsDisplay && b._iRecordsDisplay--;
            kb(b);
            c = b.rowIdFn(h._aData);
            c !== q && delete b.aIds[c];
        });
        this.iterator("table", function (b) {
            for (var c = 0, d = b.aoData.length; c < d; c++) b.aoData[c].idx = c;
        });
        return this;
    });
    y("rows.add()", function (a) {
        var b = this.iterator(
                "table",
                function (d) {
                    var e,
                        h = [];
                    var f = 0;
                    for (e = a.length; f < e; f++) {
                        var g = a[f];
                        g.nodeName && "TR" === g.nodeName.toUpperCase() ? h.push(Ja(d, g)[0]) : h.push(ia(d, g));
                    }
                    return h;
                },
                1
            ),
            c = this.rows(-1);
        c.pop();
        l.merge(c, b);
        return c;
    });
    y("row()", function (a, b) {
        return wb(this.rows(a, b));
    });
    y("row().data()", function (a) {
        var b = this.context;
        if (a === q) return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
        var c = b[0].aoData[this[0]];
        c._aData = a;
        Array.isArray(a) && c.nTr && c.nTr.id && ha(b[0].rowId)(a, c.nTr.id);
        wa(b[0], this[0], "data");
        return this;
    });
    y("row().node()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
    });
    y("row.add()", function (a) {
        a instanceof l && a.length && (a = a[0]);
        var b = this.iterator("table", function (c) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? Ja(c, a)[0] : ia(c, a);
        });
        return this.row(b[0]);
    });
    l(A).on("plugin-init.dt", function (a, b) {
        var c = new B(b);
        c.on("stateSaveParams", function (d, e, h) {
            d = c.rows().iterator("row", function (f, g) {
                return f.aoData[g]._detailsShow ? g : q;
            });
            h.childRows = c.rows(d).ids(!0).toArray();
        });
        (a = c.state.loaded()) &&
            a.childRows &&
            c.rows(a.childRows).every(function () {
                F(b, null, "requestChild", [this]);
            });
    });
    var yc = function (a, b, c, d) {
            var e = [],
                h = function (f, g) {
                    if (Array.isArray(f) || f instanceof l) for (var k = 0, m = f.length; k < m; k++) h(f[k], g);
                    else f.nodeName && "tr" === f.nodeName.toLowerCase() ? e.push(f) : ((k = l("<tr><td></td></tr>").addClass(g)), (l("td", k).addClass(g).html(f)[0].colSpan = oa(a)), e.push(k[0]));
                };
            h(c, d);
            b._details && b._details.detach();
            b._details = l(e);
            b._detailsShow && b._details.insertAfter(b.nTr);
        },
        xb = function (a, b) {
            var c = a.context;
            c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(), (a._detailsShow = q), (a._details = q), l(a.nTr).removeClass("dt-hasChild"), qa(c[0]));
        },
        qc = function (a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                d._details &&
                    ((d._detailsShow = b) ? (d._details.insertAfter(d.nTr), l(d.nTr).addClass("dt-hasChild")) : (d._details.detach(), l(d.nTr).removeClass("dt-hasChild")), F(c[0], null, "childRow", [b, a.row(a[0])]), zc(c[0]), qa(c[0]));
            }
        },
        zc = function (a) {
            var b = new B(a),
                c = a.aoData;
            b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
            0 < U(c, "_details").length &&
                (b.on("draw.dt.DT_details", function (d, e) {
                    a === e &&
                        b
                            .rows({ page: "current" })
                            .eq(0)
                            .each(function (h) {
                                h = c[h];
                                h._detailsShow && h._details.insertAfter(h.nTr);
                            });
                }),
                b.on("column-visibility.dt.DT_details", function (d, e, h, f) {
                    if (a === e) for (e = oa(e), h = 0, f = c.length; h < f; h++) (d = c[h]), d._details && d._details.children("td[colspan]").attr("colspan", e);
                }),
                b.on("destroy.dt.DT_details", function (d, e) {
                    if (a === e) for (d = 0, e = c.length; d < e; d++) c[d]._details && xb(b, d);
                }));
        };
    y("row().child()", function (a, b) {
        var c = this.context;
        if (a === q) return c.length && this.length ? c[0].aoData[this[0]]._details : q;
        !0 === a ? this.child.show() : !1 === a ? xb(this) : c.length && this.length && yc(c[0], c[0].aoData[this[0]], a, b);
        return this;
    });
    y(["row().child.show()", "row().child().show()"], function (a) {
        qc(this, !0);
        return this;
    });
    y(["row().child.hide()", "row().child().hide()"], function () {
        qc(this, !1);
        return this;
    });
    y(["row().child.remove()", "row().child().remove()"], function () {
        xb(this);
        return this;
    });
    y("row().child.isShown()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
    });
    var Ac = /^([^:]+):(name|visIdx|visible)$/,
        rc = function (a, b, c, d, e) {
            c = [];
            d = 0;
            for (var h = e.length; d < h; d++) c.push(T(a, e[d], b));
            return c;
        },
        Bc = function (a, b, c) {
            var d = a.aoColumns,
                e = U(d, "sName"),
                h = U(d, "nTh");
            return ub(
                "column",
                b,
                function (f) {
                    var g = hc(f);
                    if ("" === f) return ra(d.length);
                    if (null !== g) return [0 <= g ? g : d.length + g];
                    if ("function" === typeof f) {
                        var k = Va(a, c);
                        return l.map(d, function (p, t) {
                            return f(t, rc(a, t, 0, 0, k), h[t]) ? t : null;
                        });
                    }
                    var m = "string" === typeof f ? f.match(Ac) : "";
                    if (m)
                        switch (m[2]) {
                            case "visIdx":
                            case "visible":
                                g = parseInt(m[1], 10);
                                if (0 > g) {
                                    var n = l.map(d, function (p, t) {
                                        return p.bVisible ? t : null;
                                    });
                                    return [n[n.length + g]];
                                }
                                return [ua(a, g)];
                            case "name":
                                return l.map(e, function (p, t) {
                                    return p === m[1] ? t : null;
                                });
                            default:
                                return [];
                        }
                    if (f.nodeName && f._DT_CellIndex) return [f._DT_CellIndex.column];
                    g = l(h)
                        .filter(f)
                        .map(function () {
                            return l.inArray(this, h);
                        })
                        .toArray();
                    if (g.length || !f.nodeName) return g;
                    g = l(f).closest("*[data-dt-column]");
                    return g.length ? [g.data("dt-column")] : [];
                },
                a,
                c
            );
        };
    y("columns()", function (a, b) {
        a === q ? (a = "") : l.isPlainObject(a) && ((b = a), (a = ""));
        b = vb(b);
        var c = this.iterator(
            "table",
            function (d) {
                return Bc(d, a, b);
            },
            1
        );
        c.selector.cols = a;
        c.selector.opts = b;
        return c;
    });
    J("columns().header()", "column().header()", function (a, b) {
        return this.iterator(
            "column",
            function (c, d) {
                return c.aoColumns[d].nTh;
            },
            1
        );
    });
    J("columns().footer()", "column().footer()", function (a, b) {
        return this.iterator(
            "column",
            function (c, d) {
                return c.aoColumns[d].nTf;
            },
            1
        );
    });
    J("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", rc, 1);
    });
    J("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
            "column",
            function (a, b) {
                return a.aoColumns[b].mData;
            },
            1
        );
    });
    J("columns().cache()", "column().cache()", function (a) {
        return this.iterator(
            "column-rows",
            function (b, c, d, e, h) {
                return Ea(b.aoData, h, "search" === a ? "_aFilterData" : "_aSortData", c);
            },
            1
        );
    });
    J("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
            "column-rows",
            function (a, b, c, d, e) {
                return Ea(a.aoData, e, "anCells", b);
            },
            1
        );
    });
    J("columns().visible()", "column().visible()", function (a, b) {
        var c = this,
            d = this.iterator("column", function (e, h) {
                if (a === q) return e.aoColumns[h].bVisible;
                var f = e.aoColumns,
                    g = f[h],
                    k = e.aoData,
                    m;
                if (a !== q && g.bVisible !== a) {
                    if (a) {
                        var n = l.inArray(!0, U(f, "bVisible"), h + 1);
                        f = 0;
                        for (m = k.length; f < m; f++) {
                            var p = k[f].nTr;
                            e = k[f].anCells;
                            p && p.insertBefore(e[h], e[n] || null);
                        }
                    } else l(U(e.aoData, "anCells", h)).detach();
                    g.bVisible = a;
                }
            });
        a !== q &&
            this.iterator("table", function (e) {
                ya(e, e.aoHeader);
                ya(e, e.aoFooter);
                e.aiDisplay.length || l(e.nTBody).find("td[colspan]").attr("colspan", oa(e));
                qa(e);
                c.iterator("column", function (h, f) {
                    F(h, null, "column-visibility", [h, f, a, b]);
                });
                (b === q || b) && c.columns.adjust();
            });
        return d;
    });
    J("columns().indexes()", "column().index()", function (a) {
        return this.iterator(
            "column",
            function (b, c) {
                return "visible" === a ? va(b, c) : c;
            },
            1
        );
    });
    y("columns.adjust()", function () {
        return this.iterator(
            "table",
            function (a) {
                ta(a);
            },
            1
        );
    });
    y("column.index()", function (a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return ua(c, b);
            if ("fromData" === a || "toVisible" === a) return va(c, b);
        }
    });
    y("column()", function (a, b) {
        return wb(this.columns(a, b));
    });
    var Cc = function (a, b, c) {
        var d = a.aoData,
            e = Va(a, c),
            h = kc(Ea(d, e, "anCells")),
            f = l(lc([], h)),
            g,
            k = a.aoColumns.length,
            m,
            n,
            p,
            t,
            v,
            x;
        return ub(
            "cell",
            b,
            function (w) {
                var r = "function" === typeof w;
                if (null === w || w === q || r) {
                    m = [];
                    n = 0;
                    for (p = e.length; n < p; n++) for (g = e[n], t = 0; t < k; t++) (v = { row: g, column: t }), r ? ((x = d[g]), w(v, T(a, g, t), x.anCells ? x.anCells[t] : null) && m.push(v)) : m.push(v);
                    return m;
                }
                if (l.isPlainObject(w)) return w.column !== q && w.row !== q && -1 !== l.inArray(w.row, e) ? [w] : [];
                r = f
                    .filter(w)
                    .map(function (C, G) {
                        return { row: G._DT_CellIndex.row, column: G._DT_CellIndex.column };
                    })
                    .toArray();
                if (r.length || !w.nodeName) return r;
                x = l(w).closest("*[data-dt-row]");
                return x.length ? [{ row: x.data("dt-row"), column: x.data("dt-column") }] : [];
            },
            a,
            c
        );
    };
    y("cells()", function (a, b, c) {
        l.isPlainObject(a) && (a.row === q ? ((c = a), (a = null)) : ((c = b), (b = null)));
        l.isPlainObject(b) && ((c = b), (b = null));
        if (null === b || b === q)
            return this.iterator("table", function (n) {
                return Cc(n, a, vb(c));
            });
        var d = c ? { page: c.page, order: c.order, search: c.search } : {},
            e = this.columns(b, d),
            h = this.rows(a, d),
            f,
            g,
            k,
            m;
        d = this.iterator(
            "table",
            function (n, p) {
                n = [];
                f = 0;
                for (g = h[p].length; f < g; f++) for (k = 0, m = e[p].length; k < m; k++) n.push({ row: h[p][f], column: e[p][k] });
                return n;
            },
            1
        );
        d = c && c.selected ? this.cells(d, c) : d;
        l.extend(d.selector, { cols: b, rows: a, opts: c });
        return d;
    });
    J("cells().nodes()", "cell().node()", function () {
        return this.iterator(
            "cell",
            function (a, b, c) {
                return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q;
            },
            1
        );
    });
    y("cells().data()", function () {
        return this.iterator(
            "cell",
            function (a, b, c) {
                return T(a, b, c);
            },
            1
        );
    });
    J("cells().cache()", "cell().cache()", function (a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator(
            "cell",
            function (b, c, d) {
                return b.aoData[c][a][d];
            },
            1
        );
    });
    J("cells().render()", "cell().render()", function (a) {
        return this.iterator(
            "cell",
            function (b, c, d) {
                return T(b, c, d, a);
            },
            1
        );
    });
    J("cells().indexes()", "cell().index()", function () {
        return this.iterator(
            "cell",
            function (a, b, c) {
                return { row: b, column: c, columnVisible: va(a, c) };
            },
            1
        );
    });
    J("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            wa(b, c, a, d);
        });
    });
    y("cell()", function (a, b, c) {
        return wb(this.cells(a, b, c));
    });
    y("cell().data()", function (a) {
        var b = this.context,
            c = this[0];
        if (a === q) return b.length && c.length ? T(b[0], c[0].row, c[0].column) : q;
        Eb(b[0], c[0].row, c[0].column, a);
        wa(b[0], c[0].row, "data", c[0].column);
        return this;
    });
    y("order()", function (a, b) {
        var c = this.context;
        if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
        "number" === typeof a ? (a = [[a, b]]) : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function (d) {
            d.aaSorting = a.slice();
        });
    });
    y("order.listener()", function (a, b, c) {
        return this.iterator("table", function (d) {
            eb(d, a, b, c);
        });
    });
    y("order.fixed()", function (a) {
        if (!a) {
            var b = this.context;
            b = b.length ? b[0].aaSortingFixed : q;
            return Array.isArray(b) ? { pre: b } : b;
        }
        return this.iterator("table", function (c) {
            c.aaSortingFixed = l.extend(!0, {}, a);
        });
    });
    y(["columns().order()", "column().order()"], function (a) {
        var b = this;
        return this.iterator("table", function (c, d) {
            var e = [];
            l.each(b[d], function (h, f) {
                e.push([f, a]);
            });
            c.aaSorting = e;
        });
    });
    y("search()", function (a, b, c, d) {
        var e = this.context;
        return a === q
            ? 0 !== e.length
                ? e[0].oPreviousSearch.sSearch
                : q
            : this.iterator("table", function (h) {
                  h.oFeatures.bFilter && za(h, l.extend({}, h.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1);
              });
    });
    J("columns().search()", "column().search()", function (a, b, c, d) {
        return this.iterator("column", function (e, h) {
            var f = e.aoPreSearchCols;
            if (a === q) return f[h].sSearch;
            e.oFeatures.bFilter && (l.extend(f[h], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), za(e, e.oPreviousSearch, 1));
        });
    });
    y("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
    });
    y("state.clear()", function () {
        return this.iterator("table", function (a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {});
        });
    });
    y("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
    });
    y("state.save()", function () {
        return this.iterator("table", function (a) {
            qa(a);
        });
    });
    u.versionCheck = u.fnVersionCheck = function (a) {
        var b = u.version.split(".");
        a = a.split(".");
        for (var c, d, e = 0, h = a.length; e < h; e++) if (((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)) return c > d;
        return !0;
    };
    u.isDataTable = u.fnIsDataTable = function (a) {
        var b = l(a).get(0),
            c = !1;
        if (a instanceof u.Api) return !0;
        l.each(u.settings, function (d, e) {
            d = e.nScrollHead ? l("table", e.nScrollHead)[0] : null;
            var h = e.nScrollFoot ? l("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || d === b || h === b) c = !0;
        });
        return c;
    };
    u.tables = u.fnTables = function (a) {
        var b = !1;
        l.isPlainObject(a) && ((b = a.api), (a = a.visible));
        var c = l.map(u.settings, function (d) {
            if (!a || (a && l(d.nTable).is(":visible"))) return d.nTable;
        });
        return b ? new B(c) : c;
    };
    u.camelToHungarian = P;
    y("$()", function (a, b) {
        b = this.rows(b).nodes();
        b = l(b);
        return l([].concat(b.filter(a).toArray(), b.find(a).toArray()));
    });
    l.each(["on", "one", "off"], function (a, b) {
        y(b + "()", function () {
            var c = Array.prototype.slice.call(arguments);
            c[0] = l
                .map(c[0].split(/\s/), function (e) {
                    return e.match(/\.dt\b/) ? e : e + ".dt";
                })
                .join(" ");
            var d = l(this.tables().nodes());
            d[b].apply(d, c);
            return this;
        });
    });
    y("clear()", function () {
        return this.iterator("table", function (a) {
            Ka(a);
        });
    });
    y("settings()", function () {
        return new B(this.context, this.context);
    });
    y("init()", function () {
        var a = this.context;
        return a.length ? a[0].oInit : null;
    });
    y("data()", function () {
        return this.iterator("table", function (a) {
            return U(a.aoData, "_aData");
        }).flatten();
    });
    y("destroy()", function (a) {
        a = a || !1;
        return this.iterator("table", function (b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                h = b.nTBody,
                f = b.nTHead,
                g = b.nTFoot,
                k = l(e);
            h = l(h);
            var m = l(b.nTableWrapper),
                n = l.map(b.aoData, function (t) {
                    return t.nTr;
                }),
                p;
            b.bDestroying = !0;
            F(b, "aoDestroyCallback", "destroy", [b]);
            a || new B(b).columns().visible(!0);
            m.off(".DT").find(":not(tbody *)").off(".DT");
            l(z).off(".DT-" + b.sInstance);
            e != f.parentNode && (k.children("thead").detach(), k.append(f));
            g && e != g.parentNode && (k.children("tfoot").detach(), k.append(g));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            Ra(b);
            l(n).removeClass(b.asStripeClasses.join(" "));
            l("th, td", f).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            h.children().detach();
            h.append(n);
            f = a ? "remove" : "detach";
            k[f]();
            m[f]();
            !a &&
                c &&
                (c.insertBefore(e, b.nTableReinsertBefore),
                k.css("width", b.sDestroyWidth).removeClass(d.sTable),
                (p = b.asDestroyStripes.length) &&
                    h.children().each(function (t) {
                        l(this).addClass(b.asDestroyStripes[t % p]);
                    }));
            c = l.inArray(b, u.settings);
            -1 !== c && u.settings.splice(c, 1);
        });
    });
    l.each(["column", "row", "cell"], function (a, b) {
        y(b + "s().every()", function (c) {
            var d = this.selector.opts,
                e = this;
            return this.iterator(b, function (h, f, g, k, m) {
                c.call(e[b](f, "cell" === b ? g : d, "cell" === b ? d : q), f, g, k, m);
            });
        });
    });
    y("i18n()", function (a, b, c) {
        var d = this.context[0];
        a = na(a)(d.oLanguage);
        a === q && (a = b);
        c !== q && l.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
        return a.replace("%d", c);
    });
    u.version = "1.11.3";
    u.settings = [];
    u.models = {};
    u.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0, return: !1 };
    u.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 };
    u.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
    };
    u.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
            } catch (b) {
                return {};
            }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
            oPaginate: { sFirst: "First", sLast: "Last", sNext: "القادم", sPrevious: "السابق" },
            sEmptyTable: "لا يوجد بيانات متاحة فى الجدول",
            sInfo: "اظهار  _START_ الى _END_ من  _TOTAL_ المدخلات",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "اظهار _MENU_ مدخلات",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "بحث",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "لا يوجد نتائج بحث",
        },
        oSearch: l.extend({}, u.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
    };
    E(u.defaults);
    u.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
    };
    E(u.defaults.column);
    u.models.oSettings = {
        oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
        oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null },
        oLanguage: { fnInfoCallback: null },
        oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        jqXHR: null,
        json: q,
        oAjaxData: q,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == Q(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
            return "ssp" == Q(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
            var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                h = e.bPaginate;
            return e.bServerSide ? (!1 === h || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay)) : !h || c > d || -1 === a ? d : c;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
    };
    u.ext = M = {
        buttons: {},
        classes: {},
        builder: "bs4/dt-1.11.3/af-2.3.7/b-2.0.1",
        errMode: "alert",
        feature: [],
        search: [],
        selector: { cell: [], column: [], row: [] },
        internal: {},
        legacy: { ajax: null },
        pager: {},
        renderer: { pageButton: {}, header: {} },
        order: {},
        type: { detect: [], search: {}, order: {} },
        _unique: 0,
        fnVersionCheck: u.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: u.version,
    };
    l.extend(M, { afnFiltering: M.search, aTypes: M.type.detect, ofnSearch: M.type.search, oSort: M.type.order, afnSortData: M.order, aoFeatures: M.feature, oApi: M.internal, oStdClasses: M.classes, oPagination: M.pager });
    l.extend(u.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: "",
    });
    var ec = u.ext.pager;
    l.extend(ec, {
        simple: function (a, b) {
            return ["previous", "next"];
        },
        full: function (a, b) {
            return ["first", "previous", "next", "last"];
        },
        numbers: function (a, b) {
            return [Da(a, b)];
        },
        simple_numbers: function (a, b) {
            return ["previous", Da(a, b), "next"];
        },
        full_numbers: function (a, b) {
            return ["first", "previous", Da(a, b), "next", "last"];
        },
        first_last_numbers: function (a, b) {
            return ["first", Da(a, b), "last"];
        },
        _numbers: Da,
        numbers_length: 7,
    });
    l.extend(!0, u.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e, h) {
                var f = a.oClasses,
                    g = a.oLanguage.oPaginate,
                    k = a.oLanguage.oAria.paginate || {},
                    m,
                    n,
                    p = 0,
                    t = function (x, w) {
                        var r,
                            C = f.sPageButtonDisabled,
                            G = function (I) {
                                lb(a, I.data.action, !0);
                            };
                        var aa = 0;
                        for (r = w.length; aa < r; aa++) {
                            var L = w[aa];
                            if (Array.isArray(L)) {
                                var O = l("<" + (L.DT_el || "div") + "/>").appendTo(x);
                                t(O, L);
                            } else {
                                m = null;
                                n = L;
                                O = a.iTabIndex;
                                switch (L) {
                                    case "ellipsis":
                                        x.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        m = g.sFirst;
                                        0 === e && ((O = -1), (n += " " + C));
                                        break;
                                    case "previous":
                                        m = g.sPrevious;
                                        0 === e && ((O = -1), (n += " " + C));
                                        break;
                                    case "next":
                                        m = g.sNext;
                                        if (0 === h || e === h - 1) (O = -1), (n += " " + C);
                                        break;
                                    case "last":
                                        m = g.sLast;
                                        if (0 === h || e === h - 1) (O = -1), (n += " " + C);
                                        break;
                                    default:
                                        (m = a.fnFormatNumber(L + 1)), (n = e === L ? f.sPageButtonActive : "");
                                }
                                null !== m &&
                                    ((O = l("<a>", { class: f.sPageButton + " " + n, "aria-controls": a.sTableId, "aria-label": k[L], "data-dt-idx": p, tabindex: O, id: 0 === c && "string" === typeof L ? a.sTableId + "_" + L : null })
                                        .html(m)
                                        .appendTo(x)),
                                    ob(O, { action: L }, G),
                                    p++);
                            }
                        }
                    };
                try {
                    var v = l(b).find(A.activeElement).data("dt-idx");
                } catch (x) {}
                t(l(b).empty(), d);
                v !== q &&
                    l(b)
                        .find("[data-dt-idx=" + v + "]")
                        .trigger("focus");
            },
        },
    });
    l.extend(u.ext.type.detect, [
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return tb(a, b) ? "num" + b : null;
        },
        function (a, b) {
            if (a && !(a instanceof Date) && !uc.test(a)) return null;
            b = Date.parse(a);
            return (null !== b && !isNaN(b)) || Z(a) ? "date" : null;
        },
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return tb(a, b, !0) ? "num-fmt" + b : null;
        },
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return jc(a, b) ? "html-num" + b : null;
        },
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return jc(a, b, !0) ? "html-num-fmt" + b : null;
        },
        function (a, b) {
            return Z(a) || ("string" === typeof a && -1 !== a.indexOf("<")) ? "html" : null;
        },
    ]);
    l.extend(u.ext.type.search, {
        html: function (a) {
            return Z(a) ? a : "string" === typeof a ? a.replace(gc, " ").replace(Ua, "") : "";
        },
        string: function (a) {
            return Z(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a;
        },
    });
    var Ta = function (a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = ic(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a;
    };
    l.extend(M.type.order, {
        "date-pre": function (a) {
            a = Date.parse(a);
            return isNaN(a) ? -Infinity : a;
        },
        "html-pre": function (a) {
            return Z(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
        },
        "string-pre": function (a) {
            return Z(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : "";
        },
        "string-asc": function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        },
        "string-desc": function (a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        },
    });
    Wa("");
    l.extend(!0, u.ext.renderer, {
        header: {
            _: function (a, b, c, d) {
                l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
                    a === h && ((e = c.idx), b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass));
                });
            },
            jqueryui: function (a, b, c, d) {
                l("<div/>")
                    .addClass(d.sSortJUIWrapper)
                    .append(b.contents())
                    .append(l("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
                    .appendTo(b);
                l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
                    a === h &&
                        ((e = c.idx),
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass),
                        b
                            .find("span." + d.sSortIcon)
                            .removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed)
                            .addClass("asc" == g[e] ? d.sSortJUIAsc : "desc" == g[e] ? d.sSortJUIDesc : c.sSortingClassJUI));
                });
            },
        },
    });
    var yb = function (a) {
        Array.isArray(a) && (a = a.join(","));
        return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
    };
    u.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (h) {
                    if ("number" !== typeof h && "string" !== typeof h) return h;
                    var f = 0 > h ? "-" : "",
                        g = parseFloat(h);
                    if (isNaN(g)) return yb(h);
                    g = g.toFixed(c);
                    h = Math.abs(g);
                    g = parseInt(h, 10);
                    h = c ? b + (h - g).toFixed(c).substring(2) : "";
                    0 === g && 0 === parseFloat(h) && (f = "");
                    return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + h + (e || "");
                },
            };
        },
        text: function () {
            return { display: yb, filter: yb };
        },
    };
    l.extend(u.ext.internal, {
        _fnExternApiFunc: fc,
        _fnBuildAjax: Oa,
        _fnAjaxUpdate: Gb,
        _fnAjaxParameters: Pb,
        _fnAjaxUpdateDraw: Qb,
        _fnAjaxDataSrc: Aa,
        _fnAddColumn: Xa,
        _fnColumnOptions: Ga,
        _fnAdjustColumnSizing: ta,
        _fnVisibleToColumnIndex: ua,
        _fnColumnIndexToVisible: va,
        _fnVisbleColumns: oa,
        _fnGetColumns: Ia,
        _fnColumnTypes: Za,
        _fnApplyColumnDefs: Db,
        _fnHungarianMap: E,
        _fnCamelToHungarian: P,
        _fnLanguageCompat: ma,
        _fnBrowserDetect: Bb,
        _fnAddData: ia,
        _fnAddTr: Ja,
        _fnNodeToDataIndex: function (a, b) {
            return b._DT_RowIndex !== q ? b._DT_RowIndex : null;
        },
        _fnNodeToColumnIndex: function (a, b, c) {
            return l.inArray(c, a.aoData[b].anCells);
        },
        _fnGetCellData: T,
        _fnSetCellData: Eb,
        _fnSplitObjNotation: bb,
        _fnGetObjectDataFn: na,
        _fnSetObjectDataFn: ha,
        _fnGetDataMaster: cb,
        _fnClearTable: Ka,
        _fnDeleteIndex: La,
        _fnInvalidate: wa,
        _fnGetRowElements: ab,
        _fnCreateTr: $a,
        _fnBuildHead: Fb,
        _fnDrawHead: ya,
        _fnDraw: ja,
        _fnReDraw: ka,
        _fnAddOptionsHtml: Ib,
        _fnDetectHeader: xa,
        _fnGetUniqueThs: Na,
        _fnFeatureHtmlFilter: Kb,
        _fnFilterComplete: za,
        _fnFilterCustom: Tb,
        _fnFilterColumn: Sb,
        _fnFilter: Rb,
        _fnFilterCreateSearch: hb,
        _fnEscapeRegex: ib,
        _fnFilterData: Ub,
        _fnFeatureHtmlInfo: Nb,
        _fnUpdateInfo: Xb,
        _fnInfoMacros: Yb,
        _fnInitialise: Ba,
        _fnInitComplete: Pa,
        _fnLengthChange: jb,
        _fnFeatureHtmlLength: Jb,
        _fnFeatureHtmlPaginate: Ob,
        _fnPageChange: lb,
        _fnFeatureHtmlProcessing: Lb,
        _fnProcessingDisplay: V,
        _fnFeatureHtmlTable: Mb,
        _fnScrollDraw: Ha,
        _fnApplyToChildren: ca,
        _fnCalculateColumnWidths: Ya,
        _fnThrottle: gb,
        _fnConvertToWidth: Zb,
        _fnGetWidestNode: $b,
        _fnGetMaxLenString: ac,
        _fnStringToCss: K,
        _fnSortFlatten: pa,
        _fnSort: Hb,
        _fnSortAria: cc,
        _fnSortListener: nb,
        _fnSortAttachListener: eb,
        _fnSortingClasses: Ra,
        _fnSortData: bc,
        _fnSaveState: qa,
        _fnLoadState: dc,
        _fnImplementState: pb,
        _fnSettingsFromNode: Sa,
        _fnLog: da,
        _fnMap: X,
        _fnBindAction: ob,
        _fnCallbackReg: R,
        _fnCallbackFire: F,
        _fnLengthOverflow: kb,
        _fnRenderer: fb,
        _fnDataSource: Q,
        _fnRowAttributes: db,
        _fnExtend: qb,
        _fnCalculateEnd: function () {},
    });
    l.fn.dataTable = u;
    u.$ = l;
    l.fn.dataTableSettings = u.settings;
    l.fn.dataTableExt = u.ext;
    l.fn.DataTable = function (a) {
        return l(this).dataTable(a).api();
    };
    l.each(u, function (a, b) {
        l.fn.DataTable[a] = b;
    });
    return u;
});

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var e = a.length, d = 0; d < e; d++) {
        var f = a[d];
        if (b.call(c, f, d, a)) return { i: d, v: f };
    }
    return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
              if (a == Array.prototype || a == Object.prototype) return a;
              a[b] = c.value;
              return a;
          };
$jscomp.getGlobal = function (a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
    var c = $jscomp.propertyToPolyfillSymbol[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function (a, b, c, e) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e));
};
$jscomp.polyfillUnisolated = function (a, b, c, e) {
    c = $jscomp.global;
    a = a.split(".");
    for (e = 0; e < a.length - 1; e++) {
        var d = a[e];
        if (!(d in c)) return;
        c = c[d];
    }
    a = a[a.length - 1];
    e = c[a];
    b = b(e);
    b != e && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b });
};
$jscomp.polyfillIsolated = function (a, b, c, e) {
    var d = a.split(".");
    a = 1 === d.length;
    e = d[0];
    e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var f = 0; f < d.length - 1; f++) {
        var l = d[f];
        if (!(l in e)) return;
        e = e[l];
    }
    d = d[d.length - 1];
    c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
    b = b(c);
    null != b &&
        (a
            ? $jscomp.defineProperty($jscomp.polyfills, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d),
              (d = $jscomp.propertyToPolyfillSymbol[d]),
              $jscomp.defineProperty(e, d, { configurable: !0, writable: !0, value: b })));
};
$jscomp.polyfill(
    "Array.prototype.find",
    function (a) {
        return a
            ? a
            : function (b, c) {
                  return $jscomp.findInternal(this, b, c).v;
              };
    },
    "es6",
    "es3"
);
(function (a) {
    "function" === typeof define && define.amd
        ? define(["jquery", "datatables.net"], function (b) {
              return a(b, window, document);
          })
        : "object" === typeof exports
        ? (module.exports = function (b, c) {
              b || (b = window);
              (c && c.fn.dataTable) || (c = require("datatables.net")(b, c).$);
              return a(c, b, b.document);
          })
        : a(jQuery, window, document);
})(function (a, b, c, e) {
    var d = a.fn.dataTable;
    a.extend(!0, d.defaults, { dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", renderer: "bootstrap" });
    a.extend(d.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item",
    });
    d.ext.renderer.pageButton.bootstrap = function (f, l, A, B, m, t) {
        var u = new d.Api(f),
            C = f.oClasses,
            n = f.oLanguage.oPaginate,
            D = f.oLanguage.oAria.paginate || {},
            h,
            k,
            v = 0,
            y = function (q, w) {
                var x,
                    E = function (p) {
                        p.preventDefault();
                        a(p.currentTarget).hasClass("disabled") || u.page() == p.data.action || u.page(p.data.action).draw("page");
                    };
                var r = 0;
                for (x = w.length; r < x; r++) {
                    var g = w[r];
                    if (Array.isArray(g)) y(q, g);
                    else {
                        k = h = "";
                        switch (g) {
                            case "ellipsis":
                                h = "&#x2026;";
                                k = "disabled";
                                break;
                            case "first":
                                h = n.sFirst;
                                k = g + (0 < m ? "" : " disabled");
                                break;
                            case "previous":
                                h = n.sPrevious;
                                k = g + (0 < m ? "" : " disabled");
                                break;
                            case "next":
                                h = n.sNext;
                                k = g + (m < t - 1 ? "" : " disabled");
                                break;
                            case "last":
                                h = n.sLast;
                                k = g + (m < t - 1 ? "" : " disabled");
                                break;
                            default:
                                (h = g + 1), (k = m === g ? "active" : "");
                        }
                        if (h) {
                            var F = a("<li>", { class: C.sPageButton + " " + k, id: 0 === A && "string" === typeof g ? f.sTableId + "_" + g : null })
                                .append(a("<a>", { href: "#", "aria-controls": f.sTableId, "aria-label": D[g], "data-dt-idx": v, tabindex: f.iTabIndex, class: "page-link" }).html(h))
                                .appendTo(q);
                            f.oApi._fnBindAction(F, { action: g }, E);
                            v++;
                        }
                    }
                }
            };
        try {
            var z = a(l).find(c.activeElement).data("dt-idx");
        } catch (q) {}
        y(a(l).empty().html('<ul class="pagination"/>').children("ul"), B);
        z !== e &&
            a(l)
                .find("[data-dt-idx=" + z + "]")
                .trigger("focus");
    };
    return d;
});

/*!
   Copyright 2010-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 AutoFill 2.3.7
 ©2008-2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (c) {
    var h = 0;
    return function () {
        return h < c.length ? { done: !1, value: c[h++] } : { done: !0 };
    };
};
$jscomp.arrayIterator = function (c) {
    return { next: $jscomp.arrayIteratorImpl(c) };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (c, h, g) {
              if (c == Array.prototype || c == Object.prototype) return c;
              c[h] = g.value;
              return c;
          };
$jscomp.getGlobal = function (c) {
    c = ["object" == typeof globalThis && globalThis, c, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var h = 0; h < c.length; ++h) {
        var g = c[h];
        if (g && g.Math == Math) return g;
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (c, h) {
    var g = $jscomp.propertyToPolyfillSymbol[h];
    if (null == g) return c[h];
    g = c[g];
    return void 0 !== g ? g : c[h];
};
$jscomp.polyfill = function (c, h, g, k) {
    h && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(c, h, g, k) : $jscomp.polyfillUnisolated(c, h, g, k));
};
$jscomp.polyfillUnisolated = function (c, h, g, k) {
    g = $jscomp.global;
    c = c.split(".");
    for (k = 0; k < c.length - 1; k++) {
        var l = c[k];
        if (!(l in g)) return;
        g = g[l];
    }
    c = c[c.length - 1];
    k = g[c];
    h = h(k);
    h != k && null != h && $jscomp.defineProperty(g, c, { configurable: !0, writable: !0, value: h });
};
$jscomp.polyfillIsolated = function (c, h, g, k) {
    var l = c.split(".");
    c = 1 === l.length;
    k = l[0];
    k = !c && k in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var y = 0; y < l.length - 1; y++) {
        var r = l[y];
        if (!(r in k)) return;
        k = k[r];
    }
    l = l[l.length - 1];
    g = $jscomp.IS_SYMBOL_NATIVE && "es6" === g ? k[l] : null;
    h = h(g);
    null != h &&
        (c
            ? $jscomp.defineProperty($jscomp.polyfills, l, { configurable: !0, writable: !0, value: h })
            : h !== g &&
              (($jscomp.propertyToPolyfillSymbol[l] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(l) : $jscomp.POLYFILL_PREFIX + l),
              (l = $jscomp.propertyToPolyfillSymbol[l]),
              $jscomp.defineProperty(k, l, { configurable: !0, writable: !0, value: h })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
    "Symbol",
    function (c) {
        if (c) return c;
        var h = function (l, y) {
            this.$jscomp$symbol$id_ = l;
            $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: y });
        };
        h.prototype.toString = function () {
            return this.$jscomp$symbol$id_;
        };
        var g = 0,
            k = function (l) {
                if (this instanceof k) throw new TypeError("Symbol is not a constructor");
                return new h("jscomp_symbol_" + (l || "") + "_" + g++, l);
            };
        return k;
    },
    "es6",
    "es3"
);
$jscomp.initSymbolIterator = function () {};
$jscomp.polyfill(
    "Symbol.iterator",
    function (c) {
        if (c) return c;
        c = Symbol("Symbol.iterator");
        for (var h = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), g = 0; g < h.length; g++) {
            var k = $jscomp.global[h[g]];
            "function" === typeof k &&
                "function" != typeof k.prototype[c] &&
                $jscomp.defineProperty(k.prototype, c, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
                    },
                });
        }
        return c;
    },
    "es6",
    "es3"
);
$jscomp.initSymbolAsyncIterator = function () {};
$jscomp.iteratorPrototype = function (c) {
    c = { next: c };
    c[Symbol.iterator] = function () {
        return this;
    };
    return c;
};
$jscomp.iteratorFromArray = function (c, h) {
    c instanceof String && (c += "");
    var g = 0,
        k = {
            next: function () {
                if (g < c.length) {
                    var l = g++;
                    return { value: h(l, c[l]), done: !1 };
                }
                k.next = function () {
                    return { done: !0, value: void 0 };
                };
                return k.next();
            },
        };
    k[Symbol.iterator] = function () {
        return k;
    };
    return k;
};
$jscomp.polyfill(
    "Array.prototype.keys",
    function (c) {
        return c
            ? c
            : function () {
                  return $jscomp.iteratorFromArray(this, function (h) {
                      return h;
                  });
              };
    },
    "es6",
    "es3"
);
(function (c) {
    "function" === typeof define && define.amd
        ? define(["jquery", "datatables.net"], function (h) {
              return c(h, window, document);
          })
        : "object" === typeof exports
        ? (module.exports = function (h, g) {
              h || (h = window);
              (g && g.fn.dataTable) || (g = require("datatables.net")(h, g).$);
              return c(g, h, h.document);
          })
        : c(jQuery, window, document);
})(function (c, h, g, k) {
    var l = c.fn.dataTable,
        y = 0,
        r = function (a, d) {
            if (!l.versionCheck || !l.versionCheck("1.10.8")) throw "Warning: AutoFill requires DataTables 1.10.8 or greater";
            this.c = c.extend(!0, {}, l.defaults.autoFill, r.defaults, d);
            this.s = { dt: new l.Api(a), namespace: ".autoFill" + y++, scroll: {}, scrollInterval: null, handle: { height: 0, width: 0 }, enabled: !1 };
            this.dom = {
                handle: c('<div class="dt-autofill-handle"/>'),
                select: { top: c('<div class="dt-autofill-select top"/>'), right: c('<div class="dt-autofill-select right"/>'), bottom: c('<div class="dt-autofill-select bottom"/>'), left: c('<div class="dt-autofill-select left"/>') },
                background: c('<div class="dt-autofill-background"/>'),
                list: c('<div class="dt-autofill-list">' + this.s.dt.i18n("autoFill.info", "") + "<ul/></div>"),
                dtScroll: null,
                offsetParent: null,
            };
            this._constructor();
        };
    c.extend(r.prototype, {
        enabled: function () {
            return this.s.enabled;
        },
        enable: function (a) {
            var d = this;
            if (!1 === a) return this.disable();
            this.s.enabled = !0;
            this._focusListener();
            this.dom.handle.on("mousedown", function (b) {
                d._mousedown(b);
                return !1;
            });
            return this;
        },
        disable: function () {
            this.s.enabled = !1;
            this._focusListenerRemove();
            return this;
        },
        _constructor: function () {
            var a = this,
                d = this.s.dt,
                b = c("div.dataTables_scrollBody", this.s.dt.table().container());
            d.settings()[0].autoFill = this;
            b.length && ((this.dom.dtScroll = b), "static" === b.css("position") && b.css("position", "relative"));
            !1 !== this.c.enable && this.enable();
            d.on("destroy.autoFill", function () {
                a._focusListenerRemove();
            });
        },
        _attach: function (a) {
            var d = this.s.dt,
                b = d.cell(a).index(),
                e = this.dom.handle,
                f = this.s.handle;
            b && -1 !== d.columns(this.c.columns).indexes().indexOf(b.column)
                ? (this.dom.offsetParent || (this.dom.offsetParent = c(d.table().node()).offsetParent()),
                  (f.height && f.width) || (e.appendTo("body"), (f.height = e.outerHeight()), (f.width = e.outerWidth())),
                  (d = this._getPosition(a, this.dom.offsetParent)),
                  (this.dom.attachedTo = a),
                  e.css({ top: d.top + a.offsetHeight - f.height, left: d.left + a.offsetWidth - f.width }).appendTo(this.dom.offsetParent))
                : this._detach();
        },
        _actionSelector: function (a) {
            var d = this,
                b = this.s.dt,
                e = r.actions,
                f = [];
            c.each(e, function (p, q) {
                q.available(b, a) && f.push(p);
            });
            if (1 === f.length && !1 === this.c.alwaysAsk) {
                var m = e[f[0]].execute(b, a);
                this._update(m, a);
            } else if (1 < f.length) {
                var n = this.dom.list.children("ul").empty();
                f.push("cancel");
                c.each(f, function (p, q) {
                    n.append(
                        c("<li/>")
                            .append('<div class="dt-autofill-question">' + e[q].option(b, a) + "<div>")
                            .append(
                                c('<div class="dt-autofill-button">').append(
                                    c('<button class="' + r.classes.btn + '">' + b.i18n("autoFill.button", "&gt;") + "</button>").on("click", function () {
                                        var v = e[q].execute(b, a, c(this).closest("li"));
                                        d._update(v, a);
                                        d.dom.background.remove();
                                        d.dom.list.remove();
                                    })
                                )
                            )
                    );
                });
                this.dom.background.appendTo("body");
                this.dom.list.appendTo("body");
                this.dom.list.css("margin-top", (this.dom.list.outerHeight() / 2) * -1);
            }
        },
        _detach: function () {
            this.dom.attachedTo = null;
            this.dom.handle.detach();
        },
        _drawSelection: function (a, d) {
            var b = this.s.dt;
            d = this.s.start;
            var e = c(this.dom.start),
                f = { row: this.c.vertical ? b.rows({ page: "current" }).nodes().indexOf(a.parentNode) : d.row, column: this.c.horizontal ? c(a).index() : d.column };
            a = b.column.index("toData", f.column);
            var m = b.row(":eq(" + f.row + ")", { page: "current" });
            m = c(b.cell(m.index(), a).node());
            if (b.cell(m).any() && -1 !== b.columns(this.c.columns).indexes().indexOf(a)) {
                this.s.end = f;
                b = d.row < f.row ? e : m;
                var n = d.row < f.row ? m : e;
                a = d.column < f.column ? e : m;
                e = d.column < f.column ? m : e;
                b = this._getPosition(b.get(0)).top;
                a = this._getPosition(a.get(0)).left;
                d = this._getPosition(n.get(0)).top + n.outerHeight() - b;
                e = this._getPosition(e.get(0)).left + e.outerWidth() - a;
                f = this.dom.select;
                f.top.css({ top: b, left: a, width: e });
                f.left.css({ top: b, left: a, height: d });
                f.bottom.css({ top: b + d, left: a, width: e });
                f.right.css({ top: b, left: a + e, height: d });
            }
        },
        _editor: function (a) {
            var d = this.s.dt,
                b = this.c.editor;
            if (b) {
                for (var e = {}, f = [], m = b.fields(), n = 0, p = a.length; n < p; n++)
                    for (var q = 0, v = a[n].length; q < v; q++) {
                        var u = a[n][q],
                            w = d.settings()[0].aoColumns[u.index.column],
                            t = w.editField;
                        if (t === k) {
                            w = w.mData;
                            for (var x = 0, z = m.length; x < z; x++) {
                                var A = b.field(m[x]);
                                if (A.dataSrc() === w) {
                                    t = A.name();
                                    break;
                                }
                            }
                        }
                        if (!t) throw "Could not automatically determine field data. Please see https://datatables.net/tn/11";
                        e[t] || (e[t] = {});
                        w = d.row(u.index.row).id();
                        e[t][w] = u.set;
                        f.push(u.index);
                    }
                b.bubble(f, !1).multiSet(e).submit();
            }
        },
        _emitEvent: function (a, d) {
            this.s.dt.iterator("table", function (b, e) {
                c(b.nTable).triggerHandler(a + ".dt", d);
            });
        },
        _focusListener: function () {
            var a = this,
                d = this.s.dt,
                b = this.s.namespace,
                e = null !== this.c.focus ? this.c.focus : d.init().keys || d.settings()[0].keytable ? "focus" : "hover";
            if ("focus" === e)
                d.on("key-focus.autoFill", function (f, m, n) {
                    a._attach(n.node());
                }).on("key-blur.autoFill", function (f, m, n) {
                    a._detach();
                });
            else if ("click" === e)
                c(d.table().body()).on("click" + b, "td, th", function (f) {
                    a._attach(this);
                }),
                    c(g.body).on("click" + b, function (f) {
                        c(f.target).parents().filter(d.table().body()).length || a._detach();
                    });
            else
                c(d.table().body())
                    .on("mouseenter" + b, "td, th", function (f) {
                        a._attach(this);
                    })
                    .on("mouseleave" + b, function (f) {
                        c(f.relatedTarget).hasClass("dt-autofill-handle") || a._detach();
                    });
        },
        _focusListenerRemove: function () {
            var a = this.s.dt;
            a.off(".autoFill");
            c(a.table().body()).off(this.s.namespace);
            c(g.body).off(this.s.namespace);
        },
        _getPosition: function (a, d) {
            var b = 0,
                e = 0;
            d || (d = c(c(this.s.dt.table().node())[0].offsetParent));
            do {
                var f = a.offsetTop,
                    m = a.offsetLeft;
                var n = c(a.offsetParent);
                b += f + 1 * parseInt(n.css("border-top-width") || 0);
                e += m + 1 * parseInt(n.css("border-left-width") || 0);
                if ("body" === a.nodeName.toLowerCase()) break;
                a = n.get(0);
            } while (n.get(0) !== d.get(0));
            return { top: b, left: e };
        },
        _mousedown: function (a) {
            var d = this,
                b = this.s.dt;
            this.dom.start = this.dom.attachedTo;
            this.s.start = { row: b.rows({ page: "current" }).nodes().indexOf(c(this.dom.start).parent()[0]), column: c(this.dom.start).index() };
            c(g.body)
                .on("mousemove.autoFill", function (f) {
                    d._mousemove(f);
                })
                .on("mouseup.autoFill", function (f) {
                    d._mouseup(f);
                });
            var e = this.dom.select;
            b = c(b.table().node()).offsetParent();
            e.top.appendTo(b);
            e.left.appendTo(b);
            e.right.appendTo(b);
            e.bottom.appendTo(b);
            this._drawSelection(this.dom.start, a);
            this.dom.handle.css("display", "none");
            a = this.dom.dtScroll;
            this.s.scroll = { windowHeight: c(h).height(), windowWidth: c(h).width(), dtTop: a ? a.offset().top : null, dtLeft: a ? a.offset().left : null, dtHeight: a ? a.outerHeight() : null, dtWidth: a ? a.outerWidth() : null };
        },
        _mousemove: function (a) {
            var d = a.target.nodeName.toLowerCase();
            if ("td" === d || "th" === d) this._drawSelection(a.target, a), this._shiftScroll(a);
        },
        _mouseup: function (a) {
            c(g.body).off(".autoFill");
            var d = this,
                b = this.s.dt,
                e = this.dom.select;
            e.top.remove();
            e.left.remove();
            e.right.remove();
            e.bottom.remove();
            this.dom.handle.css("display", "block");
            e = this.s.start;
            var f = this.s.end;
            if (e.row !== f.row || e.column !== f.column) {
                var m = b.cell(":eq(" + e.row + ")", e.column + ":visible", { page: "current" });
                if (c("div.DTE", m.node()).length) {
                    var n = b.editor();
                    n.on("submitSuccess.dtaf close.dtaf", function () {
                        n.off(".dtaf");
                        setTimeout(function () {
                            d._mouseup(a);
                        }, 100);
                    }).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf", function () {
                        n.off(".dtaf");
                    });
                    n.submit();
                } else {
                    var p = this._range(e.row, f.row);
                    e = this._range(e.column, f.column);
                    f = [];
                    for (var q = b.settings()[0], v = q.aoColumns, u = b.columns(this.c.columns).indexes(), w = 0; w < p.length; w++)
                        f.push(
                            c.map(e, function (t) {
                                var x = b.row(":eq(" + p[w] + ")", { page: "current" });
                                t = b.cell(x.index(), t + ":visible");
                                x = t.data();
                                var z = t.index(),
                                    A = v[z.column].editField;
                                A !== k && (x = q.oApi._fnGetObjectDataFn(A)(b.row(z.row).data()));
                                if (-1 !== u.indexOf(z.column)) return { cell: t, data: x, label: t.data(), index: z };
                            })
                        );
                    this._actionSelector(f);
                    clearInterval(this.s.scrollInterval);
                    this.s.scrollInterval = null;
                }
            }
        },
        _range: function (a, d) {
            var b = [];
            if (a <= d) for (; a <= d; a++) b.push(a);
            else for (; a >= d; a--) b.push(a);
            return b;
        },
        _shiftScroll: function (a) {
            var d = this,
                b = this.s.scroll,
                e = !1,
                f = a.pageY - g.body.scrollTop,
                m = a.pageX - g.body.scrollLeft,
                n,
                p,
                q,
                v;
            65 > f ? (n = -5) : f > b.windowHeight - 65 && (n = 5);
            65 > m ? (p = -5) : m > b.windowWidth - 65 && (p = 5);
            null !== b.dtTop && a.pageY < b.dtTop + 65 ? (q = -5) : null !== b.dtTop && a.pageY > b.dtTop + b.dtHeight - 65 && (q = 5);
            null !== b.dtLeft && a.pageX < b.dtLeft + 65 ? (v = -5) : null !== b.dtLeft && a.pageX > b.dtLeft + b.dtWidth - 65 && (v = 5);
            n || p || q || v ? ((b.windowVert = n), (b.windowHoriz = p), (b.dtVert = q), (b.dtHoriz = v), (e = !0)) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), (this.s.scrollInterval = null));
            !this.s.scrollInterval &&
                e &&
                (this.s.scrollInterval = setInterval(function () {
                    b.windowVert && (g.body.scrollTop += b.windowVert);
                    b.windowHoriz && (g.body.scrollLeft += b.windowHoriz);
                    if (b.dtVert || b.dtHoriz) {
                        var u = d.dom.dtScroll[0];
                        b.dtVert && (u.scrollTop += b.dtVert);
                        b.dtHoriz && (u.scrollLeft += b.dtHoriz);
                    }
                }, 20));
        },
        _update: function (a, d) {
            if (!1 !== a) {
                a = this.s.dt;
                var b = a.columns(this.c.columns).indexes();
                this._emitEvent("preAutoFill", [a, d]);
                this._editor(d);
                if (null !== this.c.update ? this.c.update : !this.c.editor) {
                    for (var e = 0, f = d.length; e < f; e++)
                        for (var m = 0, n = d[e].length; m < n; m++) {
                            var p = d[e][m];
                            -1 !== b.indexOf(p.index.column) && p.cell.data(p.set);
                        }
                    a.draw(!1);
                }
                this._emitEvent("autoFill", [a, d]);
            }
        },
    });
    r.actions = {
        increment: {
            available: function (a, d) {
                a = d[0][0].label;
                return !isNaN(a - parseFloat(a));
            },
            option: function (a, d) {
                return a.i18n("autoFill.increment", 'Increment / decrement each cell by: <input type="number" value="1">');
            },
            execute: function (a, d, b) {
                a = 1 * d[0][0].data;
                b = 1 * c("input", b).val();
                for (var e = 0, f = d.length; e < f; e++) for (var m = 0, n = d[e].length; m < n; m++) (d[e][m].set = a), (a += b);
            },
        },
        fill: {
            available: function (a, d) {
                return !0;
            },
            option: function (a, d) {
                return a.i18n("autoFill.fill", "Fill all cells with <i>%d</i>", d[0][0].label);
            },
            execute: function (a, d, b) {
                a = d[0][0].data;
                b = 0;
                for (var e = d.length; b < e; b++) for (var f = 0, m = d[b].length; f < m; f++) d[b][f].set = a;
            },
        },
        fillHorizontal: {
            available: function (a, d) {
                return 1 < d.length && 1 < d[0].length;
            },
            option: function (a, d) {
                return a.i18n("autoFill.fillHorizontal", "Fill cells horizontally");
            },
            execute: function (a, d, b) {
                a = 0;
                for (b = d.length; a < b; a++) for (var e = 0, f = d[a].length; e < f; e++) d[a][e].set = d[a][0].data;
            },
        },
        fillVertical: {
            available: function (a, d) {
                return 1 < d.length;
            },
            option: function (a, d) {
                return a.i18n("autoFill.fillVertical", "Fill cells vertically");
            },
            execute: function (a, d, b) {
                a = 0;
                for (b = d.length; a < b; a++) for (var e = 0, f = d[a].length; e < f; e++) d[a][e].set = d[0][e].data;
            },
        },
        cancel: {
            available: function () {
                return !1;
            },
            option: function (a) {
                return a.i18n("autoFill.cancel", "Cancel");
            },
            execute: function () {
                return !1;
            },
        },
    };
    r.version = "2.3.6";
    r.defaults = { alwaysAsk: !1, focus: null, columns: "", enable: !0, update: null, editor: null, vertical: !0, horizontal: !0 };
    r.classes = { btn: "btn" };
    var B = c.fn.dataTable.Api;
    B.register("autoFill()", function () {
        return this;
    });
    B.register("autoFill().enabled()", function () {
        var a = this.context[0];
        return a.autoFill ? a.autoFill.enabled() : !1;
    });
    B.register("autoFill().enable()", function (a) {
        return this.iterator("table", function (d) {
            d.autoFill && d.autoFill.enable(a);
        });
    });
    B.register("autoFill().disable()", function () {
        return this.iterator("table", function (a) {
            a.autoFill && a.autoFill.disable();
        });
    });
    c(g).on("preInit.dt.autofill", function (a, d, b) {
        "dt" === a.namespace && ((a = d.oInit.autoFill), (b = l.defaults.autoFill), a || b) && ((b = c.extend({}, a, b)), !1 !== a && new r(d, b));
    });
    l.AutoFill = r;
    return (l.AutoFill = r);
});

/*!
 Bootstrap integration for DataTables' AutoFill
 ©2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
    "function" === typeof define && define.amd
        ? define(["jquery", "datatables.net-bs4", "datatables.net-autofill"], function (a) {
              return b(a, window, document);
          })
        : "object" === typeof exports
        ? (module.exports = function (a, c) {
              a || (a = window);
              (c && c.fn.dataTable) || (c = require("datatables.net-bs4")(a, c).$);
              c.fn.dataTable.AutoFill || require("datatables.net-autofill")(a, c);
              return b(c, a, a.document);
          })
        : b(jQuery, window, document);
})(function (b, a, c, d) {
    b = b.fn.dataTable;
    b.AutoFill.classes.btn = "btn btn-primary";
    return b;
});

/*!
 Buttons for DataTables 2.0.1
 ©2016-2021 SpryMedia Ltd - datatables.net/license
*/
(function (e) {
    "function" === typeof define && define.amd
        ? define(["jquery", "datatables.net"], function (C) {
              return e(C, window, document);
          })
        : "object" === typeof exports
        ? (module.exports = function (C, y) {
              C || (C = window);
              (y && y.fn.dataTable) || (y = require("datatables.net")(C, y).$);
              return e(y, C, C.document);
          })
        : e(jQuery, window, document);
})(function (e, C, y, p) {
    function I(a, b, c) {
        e.fn.animate ? a.stop().fadeIn(b, c) : (a.css("display", "block"), c && c.call(a));
    }
    function J(a, b, c) {
        e.fn.animate ? a.stop().fadeOut(b, c) : (a.css("display", "none"), c && c.call(a));
    }
    function L(a, b) {
        a = new u.Api(a);
        b = b ? b : a.init().buttons || u.defaults.buttons;
        return new v(a, b).container();
    }
    var u = e.fn.dataTable,
        O = 0,
        P = 0,
        z = u.ext.buttons,
        v = function (a, b) {
            if (!(this instanceof v))
                return function (c) {
                    return new v(c, a).container();
                };
            "undefined" === typeof b && (b = {});
            !0 === b && (b = {});
            Array.isArray(b) && (b = { buttons: b });
            this.c = e.extend(!0, {}, v.defaults, b);
            b.buttons && (this.c.buttons = b.buttons);
            this.s = { dt: new u.Api(a), buttons: [], listenKeys: "", namespace: "dtb" + O++ };
            this.dom = { container: e("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className) };
            this._constructor();
        };
    e.extend(v.prototype, {
        action: function (a, b) {
            a = this._nodeToButton(a);
            if (b === p) return a.conf.action;
            a.conf.action = b;
            return this;
        },
        active: function (a, b) {
            var c = this._nodeToButton(a);
            a = this.c.dom.button.active;
            c = e(c.node);
            if (b === p) return c.hasClass(a);
            c.toggleClass(a, b === p ? !0 : b);
            return this;
        },
        add: function (a, b) {
            var c = this.s.buttons;
            if ("string" === typeof b) {
                b = b.split("-");
                var d = this.s;
                c = 0;
                for (var l = b.length - 1; c < l; c++) d = d.buttons[1 * b[c]];
                c = d.buttons;
                b = 1 * b[b.length - 1];
            }
            this._expandButton(c, a, a !== p ? a.split : p, (a === p || a.split === p || 0 === a.split.length) && d !== p, !1, b);
            this._draw();
            return this;
        },
        collectionRebuild: function (a, b) {
            a = this._nodeToButton(a);
            if (b !== p) {
                var c;
                for (c = a.buttons.length - 1; 0 <= c; c--) this.remove(a.buttons[c].node);
                for (c = 0; c < b.length; c++) this._expandButton(a.buttons, b[c], b[c] !== p && b[c].config !== p && b[c].config.split !== p, !0, b[c].parentConf !== p && b[c].parentConf.split !== p, c, b[c].parentConf);
            }
            this._draw(a.collection, a.buttons);
        },
        container: function () {
            return this.dom.container;
        },
        disable: function (a) {
            a = this._nodeToButton(a);
            e(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0);
            return this;
        },
        destroy: function () {
            e("body").off("keyup." + this.s.namespace);
            var a = this.s.buttons.slice(),
                b;
            var c = 0;
            for (b = a.length; c < b; c++) this.remove(a[c].node);
            this.dom.container.remove();
            a = this.s.dt.settings()[0];
            c = 0;
            for (b = a.length; c < b; c++)
                if (a.inst === this) {
                    a.splice(c, 1);
                    break;
                }
            return this;
        },
        enable: function (a, b) {
            if (!1 === b) return this.disable(a);
            a = this._nodeToButton(a);
            e(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");
            return this;
        },
        name: function () {
            return this.c.name;
        },
        node: function (a) {
            if (!a) return this.dom.container;
            a = this._nodeToButton(a);
            return e(a.node);
        },
        processing: function (a, b) {
            var c = this.s.dt,
                d = this._nodeToButton(a);
            if (b === p) return e(d.node).hasClass("processing");
            e(d.node).toggleClass("processing", b);
            e(c.table().node()).triggerHandler("buttons-processing.dt", [b, c.button(a), c, e(a), d.conf]);
            return this;
        },
        remove: function (a) {
            var b = this._nodeToButton(a),
                c = this._nodeToHost(a),
                d = this.s.dt;
            if (b.buttons.length) for (var l = b.buttons.length - 1; 0 <= l; l--) this.remove(b.buttons[l].node);
            b.conf.destroying = !0;
            b.conf.destroy && b.conf.destroy.call(d.button(a), d, e(a), b.conf);
            this._removeKey(b.conf);
            e(b.node).remove();
            a = e.inArray(b, c);
            c.splice(a, 1);
            return this;
        },
        text: function (a, b) {
            var c = this._nodeToButton(a);
            a = this.c.dom.collection.buttonLiner;
            a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
            var d = this.s.dt,
                l = e(c.node),
                f = function (k) {
                    return "function" === typeof k ? k(d, l, c.conf) : k;
                };
            if (b === p) return f(c.conf.text);
            c.conf.text = b;
            a ? l.children(a).filter(":not(.dt-down-arrow)").html(f(b)) : l.html(f(b));
            return this;
        },
        _constructor: function () {
            var a = this,
                b = this.s.dt,
                c = b.settings()[0],
                d = this.c.buttons;
            c._buttons || (c._buttons = []);
            c._buttons.push({ inst: this, name: this.c.name });
            for (var l = 0, f = d.length; l < f; l++) this.add(d[l]);
            b.on("destroy", function (k, h) {
                h === c && a.destroy();
            });
            e("body").on("keyup." + this.s.namespace, function (k) {
                if (!y.activeElement || y.activeElement === y.body) {
                    var h = String.fromCharCode(k.keyCode).toLowerCase();
                    -1 !== a.s.listenKeys.toLowerCase().indexOf(h) && a._keypress(h, k);
                }
            });
        },
        _addKey: function (a) {
            a.key && (this.s.listenKeys += e.isPlainObject(a.key) ? a.key.key : a.key);
        },
        _draw: function (a, b) {
            a || ((a = this.dom.container), (b = this.s.buttons));
            a.children().detach();
            for (var c = 0, d = b.length; c < d; c++) a.append(b[c].inserter), a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons);
        },
        _expandButton: function (a, b, c, d, l, f, k) {
            var h = this.s.dt,
                n = 0,
                q = Array.isArray(b) ? b : [b];
            b === p && (q = Array.isArray(c) ? c : [c]);
            c = 0;
            for (var r = q.length; c < r; c++) {
                var m = this._resolveExtends(q[c]);
                if (m)
                    if (((b = m.config !== p && m.config.split ? !0 : !1), Array.isArray(m))) this._expandButton(a, m, g !== p && g.conf !== p ? g.conf.split : p, d, k !== p && k.split !== p, f, k);
                    else {
                        var g = this._buildButton(m, d, m.split !== p || (m.config !== p && m.config.split !== p), l);
                        if (g) {
                            f !== p && null !== f ? (a.splice(f, 0, g), f++) : a.push(g);
                            if (g.conf.buttons || g.conf.split) {
                                g.collection = e("<" + (b ? this.c.dom.splitCollection.tag : this.c.dom.collection.tag) + "/>");
                                g.conf._collection = g.collection;
                                if (g.conf.split)
                                    for (var t = 0; t < g.conf.split.length; t++)
                                        "object" === typeof g.conf.split[t] &&
                                            ((g.conf.split[c].parent = k),
                                            g.conf.split[t].collectionLayout === p && (g.conf.split[t].collectionLayout = g.conf.collectionLayout),
                                            g.conf.split[t].dropup === p && (g.conf.split[t].dropup = g.conf.dropup),
                                            g.conf.split[t].fade === p && (g.conf.split[t].fade = g.conf.fade));
                                else e(g.node).append(e('<span class="dt-down-arrow">' + this.c.dom.splitDropdown.text + "</span>"));
                                this._expandButton(g.buttons, g.conf.buttons, g.conf.split, !b, b, f, g.conf);
                            }
                            g.conf.parent = k;
                            m.init && m.init.call(h.button(g.node), h, e(g.node), m);
                            n++;
                        }
                    }
            }
        },
        _buildButton: function (a, b, c, d) {
            var l = this.c.dom.button,
                f = this.c.dom.buttonLiner,
                k = this.c.dom.collection,
                h = this.c.dom.splitCollection,
                n = this.c.dom.splitDropdownButton,
                q = this.s.dt,
                r = function (w) {
                    return "function" === typeof w ? w(q, m, a) : w;
                };
            !c && d && h ? (l = n) : !c && b && k.button && (l = k.button);
            !c && d && h.buttonLiner ? (f = h.buttonLiner) : !c && b && k.buttonLiner && (f = k.buttonLiner);
            if (a.available && !a.available(q, a) && !a.hasOwnProperty("html")) return !1;
            if (a.hasOwnProperty("html")) var m = e(a.html);
            else {
                var g = function (w, B, E, F) {
                    F.action.call(B.button(E), w, B, E, F);
                    e(B.table().node()).triggerHandler("buttons-action.dt", [B.button(E), B, E, F]);
                };
                k = a.tag || l.tag;
                var t = a.clickBlurs === p ? !1 : a.clickBlurs;
                m = e("<" + k + "/>")
                    .addClass(l.className)
                    .addClass(d ? this.c.dom.splitDropdownButton.className : "")
                    .attr("tabindex", this.s.dt.settings()[0].iTabIndex)
                    .attr("aria-controls", this.s.dt.table().node().id)
                    .on("click.dtb", function (w) {
                        w.preventDefault();
                        !m.hasClass(l.disabled) && a.action && g(w, q, m, a);
                        t && m.trigger("blur");
                    })
                    .on("keyup.dtb", function (w) {
                        13 === w.keyCode && !m.hasClass(l.disabled) && a.action && g(w, q, m, a);
                    });
                "a" === k.toLowerCase() && m.attr("href", "#");
                "button" === k.toLowerCase() && m.attr("type", "button");
                f.tag
                    ? ((k = e("<" + f.tag + "/>")
                          .html(r(a.text))
                          .addClass(f.className)),
                      "a" === f.tag.toLowerCase() && k.attr("href", "#"),
                      m.append(k))
                    : m.html(r(a.text));
                !1 === a.enabled && m.addClass(l.disabled);
                a.className && m.addClass(a.className);
                a.titleAttr && m.attr("title", r(a.titleAttr));
                a.attr && m.attr(a.attr);
                a.namespace || (a.namespace = ".dt-button-" + P++);
                a.config !== p && a.config.split && (a.split = a.config.split);
            }
            f =
                (f = this.c.dom.buttonContainer) && f.tag
                    ? e("<" + f.tag + "/>")
                          .addClass(f.className)
                          .append(m)
                    : m;
            this._addKey(a);
            this.c.buttonCreated && (f = this.c.buttonCreated(a, f));
            if (c) {
                var x = e("<div/>").addClass(this.c.dom.splitWrapper.className);
                x.append(m);
                var A = e.extend(a, {
                    text: this.c.dom.splitDropdown.text,
                    className: this.c.dom.splitDropdown.className,
                    attr: { "aria-haspopup": !0, "aria-expanded": !1 },
                    align: this.c.dom.splitDropdown.align,
                    splitAlignClass: this.c.dom.splitDropdown.splitAlignClass,
                });
                this._addKey(A);
                var G = function (w, B, E, F) {
                        z.split.action.call(B.button(e("div.dt-btn-split-wrapper")[0]), w, B, E, F);
                        e(B.table().node()).triggerHandler("buttons-action.dt", [B.button(E), B, E, F]);
                        E.attr("aria-expanded", !0);
                    },
                    D = e('<button class="' + this.c.dom.splitDropdown.className + ' dt-button"><span class="dt-btn-split-drop-arrow">' + this.c.dom.splitDropdown.text + "</span></button>")
                        .on("click.dtb", function (w) {
                            w.preventDefault();
                            w.stopPropagation();
                            !D.hasClass(l.disabled) && A.action && G(w, q, D, A);
                            t && D.trigger("blur");
                        })
                        .on("keyup.dtb", function (w) {
                            13 === w.keyCode && !D.hasClass(l.disabled) && A.action && G(w, q, D, A);
                        });
                0 === a.split.length && D.addClass("dtb-hide-drop");
                x.append(D).attr(A.attr);
            }
            return { conf: a, node: c ? x.get(0) : m.get(0), inserter: c ? x : f, buttons: [], inCollection: b, isSplit: c, inSplit: d, collection: null };
        },
        _nodeToButton: function (a, b) {
            b || (b = this.s.buttons);
            for (var c = 0, d = b.length; c < d; c++) {
                if (b[c].node === a) return b[c];
                if (b[c].buttons.length) {
                    var l = this._nodeToButton(a, b[c].buttons);
                    if (l) return l;
                }
            }
        },
        _nodeToHost: function (a, b) {
            b || (b = this.s.buttons);
            for (var c = 0, d = b.length; c < d; c++) {
                if (b[c].node === a) return b;
                if (b[c].buttons.length) {
                    var l = this._nodeToHost(a, b[c].buttons);
                    if (l) return l;
                }
            }
        },
        _keypress: function (a, b) {
            if (!b._buttonsHandled) {
                var c = function (d) {
                    for (var l = 0, f = d.length; l < f; l++) {
                        var k = d[l].conf,
                            h = d[l].node;
                        k.key &&
                            (k.key === a
                                ? ((b._buttonsHandled = !0), e(h).click())
                                : !e.isPlainObject(k.key) ||
                                  k.key.key !== a ||
                                  (k.key.shiftKey && !b.shiftKey) ||
                                  (k.key.altKey && !b.altKey) ||
                                  (k.key.ctrlKey && !b.ctrlKey) ||
                                  (k.key.metaKey && !b.metaKey) ||
                                  ((b._buttonsHandled = !0), e(h).click()));
                        d[l].buttons.length && c(d[l].buttons);
                    }
                };
                c(this.s.buttons);
            }
        },
        _removeKey: function (a) {
            if (a.key) {
                var b = e.isPlainObject(a.key) ? a.key.key : a.key;
                a = this.s.listenKeys.split("");
                b = e.inArray(b, a);
                a.splice(b, 1);
                this.s.listenKeys = a.join("");
            }
        },
        _resolveExtends: function (a) {
            var b = this.s.dt,
                c,
                d = function (h) {
                    for (var n = 0; !e.isPlainObject(h) && !Array.isArray(h); ) {
                        if (h === p) return;
                        if ("function" === typeof h) {
                            if (((h = h(b, a)), !h)) return !1;
                        } else if ("string" === typeof h) {
                            if (!z[h]) return { html: h };
                            h = z[h];
                        }
                        n++;
                        if (30 < n) throw "Buttons: Too many iterations";
                    }
                    return Array.isArray(h) ? h : e.extend({}, h);
                };
            for (a = d(a); a && a.extend; ) {
                if (!z[a.extend]) throw "Cannot extend unknown button type: " + a.extend;
                var l = d(z[a.extend]);
                if (Array.isArray(l)) return l;
                if (!l) return !1;
                var f = l.className;
                a.config !== p && l.config !== p && (a.config = e.extend({}, l.config, a.config));
                a = e.extend({}, l, a);
                f && a.className !== f && (a.className = f + " " + a.className);
                var k = a.postfixButtons;
                if (k) {
                    a.buttons || (a.buttons = []);
                    f = 0;
                    for (c = k.length; f < c; f++) a.buttons.push(k[f]);
                    a.postfixButtons = null;
                }
                if ((k = a.prefixButtons)) {
                    a.buttons || (a.buttons = []);
                    f = 0;
                    for (c = k.length; f < c; f++) a.buttons.splice(f, 0, k[f]);
                    a.prefixButtons = null;
                }
                a.extend = l.extend;
            }
            return a;
        },
        _popover: function (a, b, c, d) {
            d = this.c;
            var l = !1,
                f = e.extend(
                    {
                        align: "button-left",
                        autoClose: !1,
                        background: !0,
                        backgroundClassName: "dt-button-background",
                        contentClassName: d.dom.collection.className,
                        collectionLayout: "",
                        collectionTitle: "",
                        dropup: !1,
                        fade: 400,
                        popoverTitle: "",
                        rightAlignClassName: "dt-button-right",
                        splitRightAlignClassName: "dt-button-split-right",
                        splitLeftAlignClassName: "dt-button-split-left",
                        tag: d.dom.collection.tag,
                    },
                    c
                ),
                k = b.node(),
                h = function () {
                    l = !0;
                    J(e(".dt-button-collection"), f.fade, function () {
                        e(this).detach();
                    });
                    e(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false");
                    e("div.dt-button-background").off("click.dtb-collection");
                    v.background(!1, f.backgroundClassName, f.fade, k);
                    e("body").off(".dtb-collection");
                    b.off("buttons-action.b-internal");
                    b.off("destroy");
                };
            !1 === a && h();
            c = e(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());
            c.length && ((k = c.eq(0)), h());
            c = e("<div/>").addClass("dt-button-collection").addClass(f.collectionLayout).addClass(f.splitAlignClass).css("display", "none");
            a = e(a).addClass(f.contentClassName).attr("role", "menu").appendTo(c);
            k.attr("aria-expanded", "true");
            k.parents("body")[0] !== y.body && (k = y.body.lastChild);
            f.popoverTitle ? c.prepend('<div class="dt-button-collection-title">' + f.popoverTitle + "</div>") : f.collectionTitle && c.prepend('<div class="dt-button-collection-title">' + f.collectionTitle + "</div>");
            I(c.insertAfter(k), f.fade);
            var n = e(b.table().container());
            d = c.css("position");
            "dt-container" === f.align && ((k = k.parent()), c.css("width", n.width()));
            if ("absolute" === d) {
                var q = k.position();
                d = e(b.node()).position();
                c.css({ top: e(e(b[0].node).parent()[0]).hasClass("dt-buttons") ? d.top + k.outerHeight() : q.top + k.outerHeight(), left: q.left });
                q = c.outerHeight();
                var r = n.offset().top + n.height();
                r = d.top + k.outerHeight() + q - r;
                var m = d.top - q,
                    g = n.offset().top;
                d = d.top - q - 5;
                (r > g - m || f.dropup) && -d < g && c.css("top", d);
                d = n.offset().left;
                n = n.width();
                n = d + n;
                q = c.offset().left;
                r = c.outerWidth();
                0 === r && 0 < c.children().length && (r = e(c.children()[0]).outerWidth());
                r = q + r;
                var t = k.offset().left;
                g = k.outerWidth();
                m = t + g;
                if (c.hasClass(f.rightAlignClassName) || c.hasClass(f.leftAlignClassName) || c.hasClass(f.splitAlignClass) || "dt-container" === f.align) {
                    var x = m;
                    k.hasClass("dt-btn-split-wrapper") &&
                        0 < k.children("button.dt-btn-split-drop").length &&
                        ((t = k.children("button.dt-btn-split-drop").offset().left), (g = k.children("button.dt-btn-split-drop").outerWidth()), (x = t + g));
                    g = 0;
                    if (c.hasClass(f.rightAlignClassName)) (g = m - r), d > q + g && ((d -= q + g), (n -= r + g), (g = d > n ? g + n : g + d));
                    else if (c.hasClass(f.splitRightAlignClassName)) (g = x - r), d > q + g && ((d -= q + g), (n -= r + g), (g = d > n ? g + n : g + d));
                    else if (c.hasClass(f.splitLeftAlignClassName)) {
                        if (((g = t - q), n < r + g || d > q + g)) (d -= q + g), (n -= r + g), (g = d > n ? g + n : g + d);
                    } else (g = d - q), n < r + g && ((d -= q + g), (n -= r + g), (g = d > n ? g + n : g + d));
                } else (d = k.offset().top), (g = 0), (g = "button-right" === f.align ? m - r : t - q);
                c.css("left", c.position().left + g);
            } else (d = c.height() / 2), d > e(C).height() / 2 && (d = e(C).height() / 2), c.css("marginTop", -1 * d);
            f.background && v.background(!0, f.backgroundClassName, f.fade, k);
            e("div.dt-button-background").on("click.dtb-collection", function () {});
            f.autoClose &&
                setTimeout(function () {
                    b.on("buttons-action.b-internal", function (A, G, D, w) {
                        w[0] !== k[0] && h();
                    });
                }, 0);
            e(c).trigger("buttons-popover.dt");
            b.on("destroy", h);
            setTimeout(function () {
                l = !1;
                e("body")
                    .on("click.dtb-collection", function (A) {
                        if (!l) {
                            var G = e.fn.addBack ? "addBack" : "andSelf",
                                D = e(A.target).parent()[0];
                            ((!e(A.target).parents()[G]().filter(a).length && !e(D).hasClass("dt-buttons")) || e(A.target).hasClass("dt-button-background")) && h();
                        }
                    })
                    .on("keyup.dtb-collection", function (A) {
                        27 === A.keyCode && h();
                    });
            }, 0);
        },
    });
    v.background = function (a, b, c, d) {
        c === p && (c = 400);
        d || (d = y.body);
        a
            ? I(e("<div/>").addClass(b).css("display", "none").insertAfter(d), c)
            : J(e("div." + b), c, function () {
                  e(this).removeClass(b).remove();
              });
    };
    v.instanceSelector = function (a, b) {
        if (a === p || null === a)
            return e.map(b, function (f) {
                return f.inst;
            });
        var c = [],
            d = e.map(b, function (f) {
                return f.name;
            }),
            l = function (f) {
                if (Array.isArray(f)) for (var k = 0, h = f.length; k < h; k++) l(f[k]);
                else "string" === typeof f ? (-1 !== f.indexOf(",") ? l(f.split(",")) : ((f = e.inArray(f.trim(), d)), -1 !== f && c.push(b[f].inst))) : "number" === typeof f && c.push(b[f].inst);
            };
        l(a);
        return c;
    };
    v.buttonSelector = function (a, b) {
        for (
            var c = [],
                d = function (h, n, q) {
                    for (var r, m, g = 0, t = n.length; g < t; g++) if ((r = n[g])) (m = q !== p ? q + g : g + ""), h.push({ node: r.node, name: r.conf.name, idx: m }), r.buttons && d(h, r.buttons, m + "-");
                },
                l = function (h, n) {
                    var q,
                        r = [];
                    d(r, n.s.buttons);
                    var m = e.map(r, function (g) {
                        return g.node;
                    });
                    if (Array.isArray(h) || h instanceof e) for (m = 0, q = h.length; m < q; m++) l(h[m], n);
                    else if (null === h || h === p || "*" === h) for (m = 0, q = r.length; m < q; m++) c.push({ inst: n, node: r[m].node });
                    else if ("number" === typeof h) c.push({ inst: n, node: n.s.buttons[h].node });
                    else if ("string" === typeof h)
                        if (-1 !== h.indexOf(",")) for (r = h.split(","), m = 0, q = r.length; m < q; m++) l(r[m].trim(), n);
                        else if (h.match(/^\d+(\-\d+)*$/))
                            (m = e.map(r, function (g) {
                                return g.idx;
                            })),
                                c.push({ inst: n, node: r[e.inArray(h, m)].node });
                        else if (-1 !== h.indexOf(":name")) for (h = h.replace(":name", ""), m = 0, q = r.length; m < q; m++) r[m].name === h && c.push({ inst: n, node: r[m].node });
                        else
                            e(m)
                                .filter(h)
                                .each(function () {
                                    c.push({ inst: n, node: this });
                                });
                    else "object" === typeof h && h.nodeName && ((r = e.inArray(h, m)), -1 !== r && c.push({ inst: n, node: m[r] }));
                },
                f = 0,
                k = a.length;
            f < k;
            f++
        )
            l(b, a[f]);
        return c;
    };
    v.stripData = function (a, b) {
        if ("string" !== typeof a) return a;
        a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
        a = a.replace(/<!\-\-.*?\-\->/g, "");
        if (!b || b.stripHtml) a = a.replace(/<[^>]*>/g, "");
        if (!b || b.trim) a = a.replace(/^\s+|\s+$/g, "");
        if (!b || b.stripNewlines) a = a.replace(/\n/g, " ");
        if (!b || b.decodeEntities) (M.innerHTML = a), (a = M.value);
        return a;
    };
    v.defaults = {
        buttons: ["copy", "excel", "csv", "pdf", "print"],
        name: "main",
        tabIndex: 0,
        dom: {
            container: { tag: "div", className: "dt-buttons" },
            collection: { tag: "div", className: "" },
            button: { tag: "button", className: "dt-button", active: "active", disabled: "disabled" },
            buttonLiner: { tag: "span", className: "" },
            split: { tag: "div", className: "dt-button-split" },
            splitWrapper: { tag: "div", className: "dt-btn-split-wrapper" },
            splitDropdown: { tag: "button", text: "&#x25BC;", className: "dt-btn-split-drop", align: "split-right", splitAlignClass: "dt-button-split-left" },
            splitDropdownButton: { tag: "button", className: "dt-btn-split-drop-button dt-button" },
            splitCollection: { tag: "div", className: "dt-button-split-collection" },
        },
    };
    v.version = "2.0.1";
    e.extend(z, {
        collection: {
            text: function (a) {
                return a.i18n("buttons.collection", "Collection");
            },
            className: "buttons-collection",
            init: function (a, b, c) {
                b.attr("aria-expanded", !1);
            },
            action: function (a, b, c, d) {
                d._collection.parents("body").length ? this.popover(!1, d) : this.popover(d._collection, d);
            },
            attr: { "aria-haspopup": !0 },
        },
        split: {
            text: function (a) {
                return a.i18n("buttons.split", "Split");
            },
            className: "buttons-split",
            init: function (a, b, c) {
                return b.attr("aria-expanded", !1);
            },
            action: function (a, b, c, d) {
                this.popover(d._collection, d);
            },
            attr: { "aria-haspopup": !0 },
        },
        copy: function (a, b) {
            if (z.copyHtml5) return "copyHtml5";
        },
        csv: function (a, b) {
            if (z.csvHtml5 && z.csvHtml5.available(a, b)) return "csvHtml5";
        },
        excel: function (a, b) {
            if (z.excelHtml5 && z.excelHtml5.available(a, b)) return "excelHtml5";
        },
        pdf: function (a, b) {
            if (z.pdfHtml5 && z.pdfHtml5.available(a, b)) return "pdfHtml5";
        },
        pageLength: function (a) {
            a = a.settings()[0].aLengthMenu;
            var b = [],
                c = [];
            if (Array.isArray(a[0])) (b = a[0]), (c = a[1]);
            else
                for (var d = 0; d < a.length; d++) {
                    var l = a[d];
                    e.isPlainObject(l) ? (b.push(l.value), c.push(l.label)) : (b.push(l), c.push(l));
                }
            return {
                extend: "collection",
                text: function (f) {
                    return f.i18n("buttons.pageLength", { "-1": "Show all rows", _: "Show %d rows" }, f.page.len());
                },
                className: "buttons-page-length",
                autoClose: !0,
                buttons: e.map(b, function (f, k) {
                    return {
                        text: c[k],
                        className: "button-page-length",
                        action: function (h, n) {
                            n.page.len(f).draw();
                        },
                        init: function (h, n, q) {
                            var r = this;
                            n = function () {
                                r.active(h.page.len() === f);
                            };
                            h.on("length.dt" + q.namespace, n);
                            n();
                        },
                        destroy: function (h, n, q) {
                            h.off("length.dt" + q.namespace);
                        },
                    };
                }),
                init: function (f, k, h) {
                    var n = this;
                    f.on("length.dt" + h.namespace, function () {
                        n.text(h.text);
                    });
                },
                destroy: function (f, k, h) {
                    f.off("length.dt" + h.namespace);
                },
            };
        },
    });
    u.Api.register("buttons()", function (a, b) {
        b === p && ((b = a), (a = p));
        this.selector.buttonGroup = a;
        var c = this.iterator(
            !0,
            "table",
            function (d) {
                if (d._buttons) return v.buttonSelector(v.instanceSelector(a, d._buttons), b);
            },
            !0
        );
        c._groupSelector = a;
        return c;
    });
    u.Api.register("button()", function (a, b) {
        a = this.buttons(a, b);
        1 < a.length && a.splice(1, a.length);
        return a;
    });
    u.Api.registerPlural("buttons().active()", "button().active()", function (a) {
        return a === p
            ? this.map(function (b) {
                  return b.inst.active(b.node);
              })
            : this.each(function (b) {
                  b.inst.active(b.node, a);
              });
    });
    u.Api.registerPlural("buttons().action()", "button().action()", function (a) {
        return a === p
            ? this.map(function (b) {
                  return b.inst.action(b.node);
              })
            : this.each(function (b) {
                  b.inst.action(b.node, a);
              });
    });
    u.Api.registerPlural("buttons().collectionRebuild()", "button().collectionRebuild()", function (a) {
        return this.each(function (b) {
            for (var c = 0; c < a.length; c++) "object" === typeof a[c] && (a[c].parentConf = b);
            b.inst.collectionRebuild(b.node, a);
        });
    });
    u.Api.register(["buttons().enable()", "button().enable()"], function (a) {
        return this.each(function (b) {
            b.inst.enable(b.node, a);
        });
    });
    u.Api.register(["buttons().disable()", "button().disable()"], function () {
        return this.each(function (a) {
            a.inst.disable(a.node);
        });
    });
    u.Api.registerPlural("buttons().nodes()", "button().node()", function () {
        var a = e();
        e(
            this.each(function (b) {
                a = a.add(b.inst.node(b.node));
            })
        );
        return a;
    });
    u.Api.registerPlural("buttons().processing()", "button().processing()", function (a) {
        return a === p
            ? this.map(function (b) {
                  return b.inst.processing(b.node);
              })
            : this.each(function (b) {
                  b.inst.processing(b.node, a);
              });
    });
    u.Api.registerPlural("buttons().text()", "button().text()", function (a) {
        return a === p
            ? this.map(function (b) {
                  return b.inst.text(b.node);
              })
            : this.each(function (b) {
                  b.inst.text(b.node, a);
              });
    });
    u.Api.registerPlural("buttons().trigger()", "button().trigger()", function () {
        return this.each(function (a) {
            a.inst.node(a.node).trigger("click");
        });
    });
    u.Api.register("button().popover()", function (a, b) {
        return this.map(function (c) {
            return c.inst._popover(a, this.button(this[0].node), b);
        });
    });
    u.Api.register("buttons().containers()", function () {
        var a = e(),
            b = this._groupSelector;
        this.iterator(!0, "table", function (c) {
            if (c._buttons) {
                c = v.instanceSelector(b, c._buttons);
                for (var d = 0, l = c.length; d < l; d++) a = a.add(c[d].container());
            }
        });
        return a;
    });
    u.Api.register("buttons().container()", function () {
        return this.containers().eq(0);
    });
    u.Api.register("button().add()", function (a, b) {
        var c = this.context;
        c.length && ((c = v.instanceSelector(this._groupSelector, c[0]._buttons)), c.length && c[0].add(b, a));
        return this.button(this._groupSelector, a);
    });
    u.Api.register("buttons().destroy()", function () {
        this.pluck("inst")
            .unique()
            .each(function (a) {
                a.destroy();
            });
        return this;
    });
    u.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
        this.each(function (a) {
            a.inst.remove(a.node);
        });
        return this;
    });
    var H;
    u.Api.register("buttons.info()", function (a, b, c) {
        var d = this;
        if (!1 === a)
            return (
                this.off("destroy.btn-info"),
                J(e("#datatables_buttons_info"), 400, function () {
                    e(this).remove();
                }),
                clearTimeout(H),
                (H = null),
                this
            );
        H && clearTimeout(H);
        e("#datatables_buttons_info").length && e("#datatables_buttons_info").remove();
        a = a ? "<h2>" + a + "</h2>" : "";
        I(
            e('<div id="datatables_buttons_info" class="dt-button-info"/>')
                .html(a)
                .append(e("<div/>")["string" === typeof b ? "html" : "append"](b))
                .css("display", "none")
                .appendTo("body")
        );
        c !== p &&
            0 !== c &&
            (H = setTimeout(function () {
                d.buttons.info(!1);
            }, c));
        this.on("destroy.btn-info", function () {
            d.buttons.info(!1);
        });
        return this;
    });
    u.Api.register("buttons.exportData()", function (a) {
        if (this.context.length) return Q(new u.Api(this.context[0]), a);
    });
    u.Api.register("buttons.exportInfo()", function (a) {
        a || (a = {});
        var b = a;
        var c = "*" === b.filename && "*" !== b.title && b.title !== p && null !== b.title && "" !== b.title ? b.title : b.filename;
        "function" === typeof c && (c = c());
        c === p || null === c ? (c = null) : (-1 !== c.indexOf("*") && (c = c.replace("*", e("head > title").text()).trim()), (c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "")), (b = K(b.extension)) || (b = ""), (c += b));
        b = K(a.title);
        b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", e("head > title").text() || "Exported data") : b;
        return { filename: c, title: b, messageTop: N(this, a.message || a.messageTop, "top"), messageBottom: N(this, a.messageBottom, "bottom") };
    });
    var K = function (a) {
            return null === a || a === p ? null : "function" === typeof a ? a() : a;
        },
        N = function (a, b, c) {
            b = K(b);
            if (null === b) return null;
            a = e("caption", a.table().container()).eq(0);
            return "*" === b ? (a.css("caption-side") !== c ? null : a.length ? a.text() : "") : b;
        },
        M = e("<textarea/>")[0],
        Q = function (a, b) {
            var c = e.extend(
                !0,
                {},
                {
                    rows: null,
                    columns: "",
                    modifier: { search: "applied", order: "applied" },
                    orthogonal: "display",
                    stripHtml: !0,
                    stripNewlines: !0,
                    decodeEntities: !0,
                    trim: !0,
                    format: {
                        header: function (t) {
                            return v.stripData(t, c);
                        },
                        footer: function (t) {
                            return v.stripData(t, c);
                        },
                        body: function (t) {
                            return v.stripData(t, c);
                        },
                    },
                    customizeData: null,
                },
                b
            );
            b = a
                .columns(c.columns)
                .indexes()
                .map(function (t) {
                    var x = a.column(t).header();
                    return c.format.header(x.innerHTML, t, x);
                })
                .toArray();
            var d = a.table().footer()
                    ? a
                          .columns(c.columns)
                          .indexes()
                          .map(function (t) {
                              var x = a.column(t).footer();
                              return c.format.footer(x ? x.innerHTML : "", t, x);
                          })
                          .toArray()
                    : null,
                l = e.extend({}, c.modifier);
            a.select && "function" === typeof a.select.info && l.selected === p && a.rows(c.rows, e.extend({ selected: !0 }, l)).any() && e.extend(l, { selected: !0 });
            l = a.rows(c.rows, l).indexes().toArray();
            var f = a.cells(l, c.columns);
            l = f.render(c.orthogonal).toArray();
            f = f.nodes().toArray();
            for (var k = b.length, h = [], n = 0, q = 0, r = 0 < k ? l.length / k : 0; q < r; q++) {
                for (var m = [k], g = 0; g < k; g++) (m[g] = c.format.body(l[n], q, g, f[n])), n++;
                h[q] = m;
            }
            b = { header: b, footer: d, body: h };
            c.customizeData && c.customizeData(b);
            return b;
        };
    e.fn.dataTable.Buttons = v;
    e.fn.DataTable.Buttons = v;
    e(y).on("init.dt plugin-init.dt", function (a, b) {
        "dt" === a.namespace && (a = b.oInit.buttons || u.defaults.buttons) && !b._buttons && new v(b, a).container();
    });
    u.ext.feature.push({ fnInit: L, cFeature: "B" });
    u.ext.features && u.ext.features.register("buttons", L);
    return v;
});

/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
    "function" === typeof define && define.amd
        ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function (a) {
              return c(a, window, document);
          })
        : "object" === typeof exports
        ? (module.exports = function (a, b) {
              a || (a = window);
              (b && b.fn.dataTable) || (b = require("datatables.net-bs4")(a, b).$);
              b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b);
              return c(b, a, a.document);
          })
        : c(jQuery, window, document);
})(function (c, a, b, f) {
    a = c.fn.dataTable;
    c.extend(!0, a.Buttons.defaults, {
        dom: {
            container: { className: "dt-buttons btn-group flex-wrap" },
            button: { className: "btn btn-secondary" },
            collection: { tag: "div", className: "dropdown-menu", button: { tag: "a", className: "dt-button dropdown-item", active: "active", disabled: "disabled" } },
            splitWrapper: { tag: "div", className: "dt-btn-split-wrapper btn-group" },
            splitDropdown: { tag: "button", text: "", className: "btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split", align: "split-left", splitAlignClass: "dt-button-split-left" },
            splitDropdownButton: { tag: "button", className: "dt-btn-split-drop-button btn btn-secondary" },
        },
        buttonCreated: function (e, d) {
            return e.buttons ? c('<div class="btn-group"/>').append(d) : d;
        },
    });
    a.ext.buttons.collection.className += " dropdown-toggle";
    a.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
    return a.Buttons;
});
