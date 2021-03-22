import{m as t,h as n,t as a,av as r,c as e,B as s,al as o,Q as i,bE as c,i as f,bF as d,e as m,b9 as u,j as l,I as p,p as h,o as b,l as j,_ as k,W as $,A as g}from"./calfSystem-fe0ebf32.js"
import{c as L}from"./createTBody-d4cc74f9.js"
import{c as y}from"./createTable-94e6d4a8.js"
import{m as w}from"./makeFolderSpan-1c36a4a5.js"
import{a as E}from"./stringSort-f9e3342b.js"
import{d as A}from"./daLoadInventory-74df7d80.js"
import{u as I,e as x}from"./useItem-343a998b.js"
import{e as C}from"./eventHandler5-b489b45c.js"
import{c as S}from"./createInput-47702c1d.js"
import{c as H}from"./createLabel-616c04a1.js"
import{c as v}from"./createLi-1136f028.js"
import{c as N}from"./createUl-995f97e4.js"
import{p as Q,a as W}from"./pubsub-96260b4b.js"
import{h as q}from"./hasClasses-2723c406.js"
import{i as P}from"./isArray-c05157b9.js"
import{j as U}from"./jConfirm-5ea2b231.js"
import{s as M}from"./selfIdIs-47818e07.js"
import{b as T}from"./simpleCheckbox-a56939b2.js"
import{t as F}from"./toggleForce-e38cb2b0.js"
import"./alpha-5123f505.js"
import"./toLowerCase-5dc9e42d.js"
import"./backpack-83452331.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./dialog-bd85dd64.js"
import"./dialogMsg-eb4e9d8f.js"
import"./daUseItem-c593464f.js"
import"./errorDialog-f7744f6f.js"
import"./isChecked-36c474a7.js"
function B(t,n,a){const r=t.insertRow(-1)
a.dom=r
let e="fshEq ",i="fshUse "
a.t<9?e+="smallLink":e+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${e}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=o
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,r)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,r){r.items.sort(E).forEach(a(B,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=L()
return n(s,o),e.sortBy="n",e.sortAsc=!0,t.r.forEach(a(D,o,r())),s}function J(a){const r=G(a),e=t()
return n(e,r),e}const R=(t,n)=>t+String(n)
function Z(t,n,a){return S({checked:0===a,id:R(t,a),name:t,type:"radio"})}function z(t,a,r,e){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:R(t,e),innerHTML:r})),0!==e&&i(s,"click",(()=>{Q(R(t,e),a[e])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(r,e,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,i)
e.map(a(Z,o)).forEach(c)
const f=e.map(K)
Q(R(o,0),f[0])
const d=function(t,r,e){const s=N({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(z,r,e)).forEach(a(n,s)),s}(e,o,f)
Q(`${o}-header`,d),n(i,d),f.forEach(c),s("",r),n(r,i)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function rt(t){return 0===t[1].nicknameList.length}function et(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(rt).map(et).join("")}(t)}</tbody></table>`}function ot(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function it(t,n,r){const e=r.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,e),n.forEach(a(ot,t,e))}function ct(t,n,r){r.items.forEach(a(it,t,n))}function ft(n){const r={},e=c("quickSearchList")||[]
n.r.forEach(a(ct,r,e))
const s=t()
return f(s,st(r,e)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,n,r){$("QuickWear",`doAction - ${r}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,r))}function pt(t){lt(t,I,"Used")}function ht(t){dt?pt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(pt,t))}function bt(t){lt(t,x,"Worn")}function jt(t,n,a){const r=a.dom
if("0"===t)r.classList.remove("fshHide")
else{const a=t!==n.toString()
F(r,a)}}function kt(t,n){const r=n.id
n.items.forEach(a(jt,t,r))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,r){n(r,t(a))}function wt(t,n){W("qwtab-header",Lt),W("qwtab0",a(yt,J,n)),W("qwtab1",a(yt,ft,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,C([[a(q,["smallLink","fshEq"]),bt],[a(q,["smallLink","fshUse"]),ht],[a(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&P(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){l()&&function(t){const n=t||h
n&&(f(n,"Getting item list from backpack..."),A().then(a(Et,n)),dt=p("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-bbc0af60.js.map
