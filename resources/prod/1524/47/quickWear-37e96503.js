import{m as t,h as n,t as a,aI as e,c as r,B as s,ay as i,P as o,bJ as c,i as f,bK as d,e as m,bk as u,j as h,I as l,p,o as b,l as k,Z as j,S as $,A as g}from"./calfSystem-a2fd9017.js"
import{c as y}from"./createTBody-6cf259c5.js"
import{c as L}from"./createTable-fb7a908d.js"
import{m as w}from"./makeFolderSpan-e7682381.js"
import{a as E}from"./stringSort-a1f3c520.js"
import{d as I}from"./daLoadInventory-eedfd206.js"
import{u as A,e as S}from"./useItem-4eadd293.js"
import{e as x}from"./eventHandler5-cfda59d1.js"
import{c as C}from"./createInput-ca1e27eb.js"
import{c as H}from"./createLabel-16999105.js"
import{c as N}from"./createLi-053a1346.js"
import{c as v}from"./createUl-2391781a.js"
import{p as P,a as Q}from"./pubsub-6e5687ef.js"
import{h as W}from"./hasClasses-ab01454a.js"
import{i as q}from"./isArray-fb536e29.js"
import{j as U}from"./jConfirm-0aac63cf.js"
import{s as M}from"./selfIdIs-4b2f735e.js"
import{b as T}from"./simpleCheckbox-d5d2e0cb.js"
import{t as B}from"./toggleForce-41b0f4ee.js"
import"./dialog-a4dfa31d.js"
import"./dialogMsg-edbc265b.js"
import"./indexAjaxJson-9619f1ba.js"
import"./daUseItem-61492157.js"
import"./errorDialog-1238d963.js"
import"./isChecked-5c7617f4.js"
function F(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",o="fshUse "
a.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,e){e.items.sort(E).forEach(a(F,t,n))}function J(t){const s=L({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=y()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,i,e())),s}function Z(a){const e=J(a),r=t()
return n(r,e),r}const G=(t,n)=>t+String(n)
function K(t,n,a){return C({checked:0===a,id:G(t,a),name:t,type:"radio"})}function R(t,a,e,r){const s=N({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:G(t,r),innerHTML:e})),0!==r&&o(s,"click",(()=>{P(G(t,r),a[r])})),s}const z=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(e,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,o)
r.map(a(K,i)).forEach(c)
const f=r.map(z)
P(G(i,0),f[0])
const d=function(t,e,r){const s=v({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(R,e,r)).forEach(a(n,s)),s}(r,i,f)
P(`${i}-header`,d),n(o,d),f.forEach(c),s("",e),n(e,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(it,t,r))}function ct(t,n,e){e.items.forEach(a(ot,t,n))}function ft(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,e){$("QuickWear",`doAction - ${e}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function lt(t){ht(t,A,"Used")}function pt(t){dt?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(lt,t))}function bt(t){ht(t,S,"Worn")}function kt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
B(e,a)}}function jt(t,n){const e=n.id
n.items.forEach(a(kt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(jt,n))}function gt(){dt=!dt,j("disableQuickWearPrompts",dt)}function yt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function Lt(t,a,e){n(e,t(a))}function wt(t,n){Q("qwtab-header",yt),Q("qwtab0",a(Lt,Z,n)),Q("qwtab1",a(Lt,ft,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,x([[a(W,["smallLink","fshEq"]),bt],[a(W,["smallLink","fshUse"]),pt],[a(k,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){h()&&function(t){const n=t||p
n&&(f(n,"Getting item list from backpack..."),I().then(a(Et,n)),dt=l("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-37e96503.js.map
