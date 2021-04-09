import{m as t,h as n,t as a,ay as e,c as r,B as s,an as o,Q as i,bI as c,i as f,bJ as d,e as m,bc as u,j as h,I as l,R as p,p as b,o as j,l as k,a0 as $,X as g,A as L}from"./calfSystem-d56087e1.js"
import{c as y}from"./createTBody-921c0ab9.js"
import{c as w}from"./createTable-5e7fa021.js"
import{m as E}from"./makeFolderSpan-300fb339.js"
import{a as I}from"./stringSort-bac95b5e.js"
import{d as x}from"./daLoadInventory-18f5733c.js"
import{u as A,e as C}from"./useItem-32c4d09c.js"
import{e as S}from"./eventHandler5-f385c55a.js"
import{c as H}from"./createInput-0182b589.js"
import{c as N}from"./createLabel-abb72e31.js"
import{c as v}from"./createLi-1603aded.js"
import{c as Q}from"./createUl-3d5c471f.js"
import{p as W,a as q}from"./pubsub-6238033b.js"
import{h as P}from"./hasClasses-18497cfa.js"
import{j as U}from"./jConfirm-69fcfc62.js"
import{s as M}from"./selfIdIs-3b8add88.js"
import{b as T}from"./simpleCheckbox-8b0bdf14.js"
import{t as B}from"./toggleForce-6fbd75e0.js"
import"./alpha-f430aa22.js"
import"./toLowerCase-b0c4634d.js"
import"./dialog-e89b7ecf.js"
import"./dialogMsg-a0c49d9a.js"
import"./indexAjaxJson-976f4bdd.js"
import"./daUseItem-b6042302.js"
import"./errorDialog-f60f17b2.js"
import"./isChecked-16fc7684.js"
function F(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",i="fshUse "
a.t<9?r+="smallLink":r+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=o
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function O(t){return E(String(t.id),t.name)}function _(t){return E("0","All")+t.r.map(O).join("")}function D(t,n,e){e.items.sort(I).forEach(a(F,t,n))}function J(t){const s=w({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=y()
return n(s,o),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,o,e())),s}function R(a){const e=J(a),r=t()
return n(r,e),r}const G=(t,n)=>t+String(n)
function X(t,n,a){return H({checked:0===a,id:G(t,a),name:t,type:"radio"})}function Z(t,a,e,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,N({htmlFor:G(t,r),innerHTML:e})),0!==r&&i(s,"click",(()=>{W(G(t,r),a[r])})),s}const z=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function K(e,r,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,i)
r.map(a(X,o)).forEach(c)
const f=r.map(z)
W(G(o,0),f[0])
const d=function(t,e,r){const s=Q({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(Z,e,r)).forEach(a(n,s)),s}(r,o,f)
W(`${o}-header`,d),n(i,d),f.forEach(c),s("",e),n(e,i)}function V(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(V,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return V(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function ot(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function it(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(ot,t,r))}function ct(t,n,e){e.items.forEach(a(it,t,n))}function ft(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,e){g("QuickWear",`doAction - ${e}`),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function lt(t){ht(t,A,"Used")}function pt(t){dt?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(lt,t))}function bt(t){ht(t,C,"Worn")}function jt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
B(e,a)}}function kt(t,n){const e=n.id
n.items.forEach(a(jt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,$("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,e){n(e,t(a))}function wt(t,n){q("qwtab-header",Lt),q("qwtab0",a(yt,R,n)),q("qwtab1",a(yt,ft,n)),K(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),j(t,S([[a(P,["smallLink","fshEq"]),bt],[a(P,["smallLink","fshUse"]),pt],[a(k,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&p(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){h()&&function(t){const n=t||b
n&&(f(n,"Getting item list from backpack..."),x().then(a(Et,n)),dt=l("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-507c0c92.js.map
