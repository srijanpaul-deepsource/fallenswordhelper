import{m as t,h as n,t as a,aF as e,c as r,B as s,aw as i,Q as o,bH as c,i as f,bI as d,e as m,bi as u,j as h,I as l,R as p,p as b,o as j,l as k,a0 as $,X as g,A as L}from"./calfSystem-c464cb1d.js"
import{c as y}from"./createTBody-4b5f03a3.js"
import{c as w}from"./createTable-8b5b7f23.js"
import{m as E}from"./makeFolderSpan-b092137d.js"
import{a as I}from"./stringSort-b6283018.js"
import{d as x}from"./daLoadInventory-19f58a7f.js"
import{u as A,e as C}from"./useItem-1853f7bb.js"
import{e as H}from"./eventHandler5-00bcdb12.js"
import{c as S}from"./createInput-8ffbb09b.js"
import{c as N}from"./createLabel-7af63863.js"
import{c as v}from"./createLi-0e1c7c51.js"
import{c as Q}from"./createUl-c835db54.js"
import{p as W,a as q}from"./pubsub-bd8cf9a4.js"
import{h as P}from"./hasClasses-075926f9.js"
import{j as U}from"./jConfirm-35063120.js"
import{s as M}from"./selfIdIs-6d227f88.js"
import{b as T}from"./simpleCheckbox-1b81e8e2.js"
import{t as F}from"./toggleForce-4ff42c01.js"
import"./alpha-9ef10f70.js"
import"./toLowerCase-d053e281.js"
import"./dialog-17ce66e6.js"
import"./dialogMsg-3d2031b8.js"
import"./indexAjaxJson-9476707b.js"
import"./daUseItem-503dd9d9.js"
import"./errorDialog-58b05366.js"
import"./isChecked-a9c3c9fe.js"
function B(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",o="fshUse "
a.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function O(t){return E(String(t.id),t.name)}function _(t){return E("0","All")+t.r.map(O).join("")}function D(t,n,e){e.items.sort(I).forEach(a(B,t,n))}function R(t){const s=w({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=y()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,i,e())),s}function G(a){const e=R(a),r=t()
return n(r,e),r}const J=(t,n)=>t+String(n)
function X(t,n,a){return S({checked:0===a,id:J(t,a),name:t,type:"radio"})}function Z(t,a,e,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,N({htmlFor:J(t,r),innerHTML:e})),0!==r&&o(s,"click",(()=>{W(J(t,r),a[r])})),s}const z=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function K(e,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,o)
r.map(a(X,i)).forEach(c)
const f=r.map(z)
W(J(i,0),f[0])
const d=function(t,e,r){const s=Q({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(Z,e,r)).forEach(a(n,s)),s}(r,i,f)
W(`${i}-header`,d),n(o,d),f.forEach(c),s("",e),n(e,o)}function V(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(V,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return V(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(it,t,r))}function ct(t,n,e){e.items.forEach(a(ot,t,n))}function ft(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,e){g("QuickWear",`doAction - ${e}`),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function lt(t){ht(t,A,"Used")}function pt(t){dt?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(lt,t))}function bt(t){ht(t,C,"Worn")}function jt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
F(e,a)}}function kt(t,n){const e=n.id
n.items.forEach(a(jt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,$("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,e){n(e,t(a))}function wt(t,n){q("qwtab-header",Lt),q("qwtab0",a(yt,G,n)),q("qwtab1",a(yt,ft,n)),K(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),j(t,H([[a(P,["smallLink","fshEq"]),bt],[a(P,["smallLink","fshUse"]),pt],[a(k,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&p(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){h()&&function(t){const n=t||b
n&&(f(n,"Getting item list from backpack..."),x().then(a(Et,n)),dt=l("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-3daa2782.js.map
