import{a as d}from"./chunk-AFCJ6IYJ.js";import"./chunk-YRH7FGLK.js";import{a as rt}from"./chunk-ANRQZDQO.js";import{a as nt}from"./chunk-LPKRTEX4.js";import{a as P}from"./chunk-WEJ5TY4L.js";import"./chunk-K2UZRIJQ.js";import"./chunk-WPNBOM6T.js";import{a as mt}from"./chunk-QMISOJLX.js";import{p as at}from"./chunk-EQQSZCPL.js";import"./chunk-7GRH74NF.js";import{a as ot}from"./chunk-LKGTIIZH.js";import{a as et}from"./chunk-2XOPDOAO.js";import{a as F}from"./chunk-NN4F7SZH.js";import{a as G}from"./chunk-2SJYIFN7.js";import{a as W}from"./chunk-MAJELCYM.js";import{a as X}from"./chunk-HCYDYHQ4.js";import{a as v}from"./chunk-4GNRWF5F.js";import{a as Y}from"./chunk-FOEXXIS5.js";import{a as K}from"./chunk-63EULCQA.js";import{a as J}from"./chunk-EHLYPUDG.js";import{a as O}from"./chunk-JUU6TIW3.js";import{a as b}from"./chunk-G6VG7VOM.js";import{a as p}from"./chunk-2BFYZNUH.js";import"./chunk-GRHMKKXW.js";import"./chunk-QGKEDUO2.js";import{a as l}from"./chunk-3P332KR6.js";import{a as tt}from"./chunk-R3QPGR5M.js";import"./chunk-LWPHQG2H.js";import{a as B}from"./chunk-AQKFNZOY.js";import{a as g}from"./chunk-C27IPPK7.js";import{a as k}from"./chunk-6R6RPTTO.js";import{a as E}from"./chunk-UU6HXUOC.js";import"./chunk-4KMRATSZ.js";import"./chunk-BI6EF352.js";import{a as m}from"./chunk-BM4FUEFL.js";import{a as D}from"./chunk-JW2UKJSK.js";import"./chunk-PKECKIP5.js";import"./chunk-BSKCRAT3.js";import"./chunk-MDOXDTXF.js";import{a as Z}from"./chunk-JRUXHFF5.js";import{a as N}from"./chunk-KCR5MNHI.js";import"./chunk-FLC7HS56.js";import"./chunk-N3R6MXRE.js";import"./chunk-C3VYBY3D.js";import{a as M}from"./chunk-PX7MLT6T.js";import"./chunk-QPRB5F5E.js";import"./chunk-NOLCAT6N.js";import{a}from"./chunk-I7NTXRDN.js";import{a as z}from"./chunk-TO3QNLYY.js";import"./chunk-QHU4ICCH.js";import{a as s}from"./chunk-OOUI3CKV.js";import"./chunk-JROAODNJ.js";import{a as V}from"./chunk-SHVFOAM5.js";import"./chunk-N56IAE2U.js";import{a as x}from"./chunk-O5NIYLDT.js";import"./chunk-EEHLAE3S.js";import"./chunk-ISL3KEXS.js";import{a as T}from"./chunk-FE4PDZXL.js";import"./chunk-VMJ6DXBZ.js";import"./chunk-3PDILZ3R.js";import"./chunk-3WAX2TNR.js";import{g as h}from"./chunk-4P4O4YGO.js";import{b as C}from"./chunk-KTAAKVTB.js";import{a as r}from"./chunk-RH5336H4.js";var ct=/\?item_id=(\d+)&inv_id=(\d+)&.*&vcode=([0-9a-f]+)/;function pt(t){let o=t.children[0].dataset.tipped.match(ct);return{a:Number(o[2]),b:Number(o[1]),v:o[3]}}var st=t=>x('a[href*="=destroycomponent&"]',t).map(pt),lt=t=>x('td[background*="1x1mini"]',t).length;function dt(t){let o=t.map(k),e=o.map(st),n=[].concat(...e);return{h:{cm:o.map(lt).reduce(G,0)},r:n}}function ft(t){let o=k(t),n=x('a[href*="profile&component_page="]',o).map(c=>M(c.href));return d(n,dt)}function I(){return E({cmd:"profile"}).then(ft)}function H(){return N({subcmd:"loadcomponents"})}function $(){return B(H,I)}var f;function ut(t,o){return t[o.b]=t[o.b]||{a:o.a,b:o.b,count:0,del:[],v:o.v},t[o.b].count+=1,t[o.b].del.push(o.a),t}function it(t){f=t.r.reduce(ut,{})}function yt(t,o){return`${t}<tr><td><img src="${C}items/${o.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${o.b}&inv_id=${o.a}&t=2&p=${et()}&vcode=${o.v}"></td><td>${o.count}</td><td>[<span class="sendLink compDelType" data-compid="${o.b}">Del</span>]</td></tr>`}function Ct(t){let o=W();return it(t),p(o,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(f).reduce(yt,"")}`),o}function ht(t){let o=t.insertRow(-1);p(o,"<td>Total:</td>");let e=o.insertCell(-1);return e.colSpan=2,e}function gt(t){let o=t.r.length,e=v();return a(o,e),e}function bt(t,o){let e=ht(t);m(e,gt(o)),F(e," / TODO")}function Tt(t){let o=X({className:"fshTblCenter",id:"fshTally"});return m(o,Ct(t)),bt(o,t),o}function xt(t,o){if(!g(o.r))return;let e=t.parentNode;e&&(a("",e),m(e,Tt(o)))}function S(t){s("components","countComponent"),$().then(r(xt,t))}function A(t){let o=D(),e=v({className:`sendLink ${O(t).replace(/ /g,"-")}`,textContent:t});return l("[",o),m(o,e),p(o,"]"),o}function L(t){return N({subcmd:"destroycomponent",removeIndex:t})}function Dt(t,o){let e=tt(o),n=1;return e==="Component destroyed."&&(n=0),{r:n,m:e,c:t}}function Et(t){return E({cmd:"profile",subcmd:"destroycomponent",component_id:t}).then(r(Dt,t))}function vt(t){let o=t.filter(n=>n.r===0),e=t.filter(n=>n.r===1);return o.length>0?{r:o.map(n=>n.c),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function j(t){return d(t.map(Et),vt)}function u(t){return B(L,j,t)}var R;function i(){if(!R){let t=K("inventory-table",V("profileRightColumn"));t.length===2&&([,R]=t)}return R}var q;function Nt(t,o){let e=o.dataset.tipped.match(h);return t[e[2]]=o.parentNode.parentNode,t}function Bt(){return q||(q=b("img",i()).reduce(Nt,{})),q}function At(t,o){t[o]&&a("",t[o])}function w(t){t.forEach(r(At,Bt()))}function y(t){let o=i().parentNode;if(!o)return;let e=o.children[2].children[1].children[0];if(!e||e.tagName!=="TABLE")return;let n=e.rows,c=n[n.length-1].cells[1].children[0],U=Number(T(c));U-=t,l(U,c)}function kt(t){a("",t),t.className="guildTagSpinner",t.style.backgroundImage=`url('${C}ui/misc/spinner.gif')`}function It(t){t.s&&g(t.r)&&(w(t.r),y(t.r.length))}function Ht(t){t.parentNode.remove()}function $t(t){return u(t).then(It)}function _(t){let o=f[t.dataset.compid].del,e=t.parentNode;kt(e);let n=nt(30,o).map($t);d(n,r(Ht,e))}function St(t){let o=J(`#fshTally [data-compid="${t}"]`);if(!o)return;let e=o.parentNode.parentNode.children[1],n=Number(T(e))-1;l(n,e)}function Lt(t,o,e){e.s&&(St(o),y(1),t.parentNode&&a("",t.parentNode))}function Q(t){let{tipped:o}=t.parentNode.children[0].children[0].dataset,e=o.match(h),n=e[1],c=e[2];u([c]).then(Z).then(r(Lt,t,n))}var jt=["Enable Quick Del","Count Components","Quick Extract Components"];function Rt(t,o){return m(t,A(o)),t}function qt(){return jt.reduce(Rt,D({className:"fshCenter"}))}function wt(){s("components","insertQuickExtract"),mt(at)}function _t(t){p(t.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}function Qt(t){s("components","enableDelComponent");let o=t.parentNode;Y(o);let e=o.parentNode;m(e,A("Delete All Visible")),b("img",i()).forEach(_t)}function Ut(t){s("components","delAllComponent");let o=t.parentNode.parentNode.parentNode.children[0];rt("compDelBtn",o).forEach(ot)}var Vt=[["quick-extract-components",wt],["enable-quick-del",Qt],["delete-all-visible",Ut],["compDelBtn",Q],["count-components",S],["compDelType",_]];function Pt(t){let o=t.parentNode;m(o,qt()),z(o,P(Vt))}function Ot(){let t=i();!t||Pt(t)}export{Ot as default};
//# sourceMappingURL=components-CSF5S5KC.js.map
