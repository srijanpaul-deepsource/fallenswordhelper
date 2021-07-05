import{m as t,h as n,t as e,aL as a,c as r,B as s,aB as i,P as o,bN as c,i as d,bO as f,e as m,bn as u,j as h,I as l,p,o as b,l as k,_ as j,S as $,A as L}from"./calfSystem-42f137cb.js"
import{c as g}from"./createTBody-0dd72dc5.js"
import{c as y}from"./createTable-05ee583d.js"
import{m as w}from"./makeFolderSpan-9d37144a.js"
import{a as E}from"./stringSort-d7a70299.js"
import{d as A}from"./daLoadInventory-58720c6d.js"
import{u as I,e as S}from"./useItem-dfa78264.js"
import{e as x}from"./eventHandler5-8eb850a7.js"
import{c as C}from"./createInput-b1d83433.js"
import{c as H}from"./createLabel-9da31bd9.js"
import{c as N}from"./createLi-588f30d7.js"
import{c as v}from"./createUl-d0e28a15.js"
import{p as P,a as Q}from"./pubsub-66ca7f23.js"
import{h as W}from"./hasClasses-e09e2306.js"
import{i as q}from"./isArray-be6d57af.js"
import{j as U}from"./jConfirm-70cb7f66.js"
import{s as T}from"./selfIdIs-b73660d3.js"
import{b as M}from"./simpleCheckbox-4ae878ed.js"
import{t as B}from"./toggleForce-d61da182.js"
import"./dialog-4ff9c696.js"
import"./indexAjaxJson-4839dee4.js"
import"./daUseItem-d9b5fe40.js"
import"./errorDialog-d2cfbe26.js"
import"./isChecked-ecfa0022.js"
function O(t,n,e){const a=t.insertRow(-1)
e.dom=a
let r="fshEq ",o="fshUse "
e.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(e),s(`<td class="fshCenter"><span class="${r}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,a)}function F(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(F).join("")}function D(t,n,a){a.items.sort(E).forEach(e(O,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=g()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(e(D,i,a())),s}function J(e){const a=G(e),r=t()
return n(r,a),r}const R=(t,n)=>t+String(n)
function Z(t,n,e){return C({checked:0===e,id:R(t,e),name:t,type:"radio"})}function z(t,e,a,r){const s=N({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:R(t,r),innerHTML:a})),0!==r&&o(s,"click",(()=>{P(R(t,r),e[r])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(a,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=e(n,o)
r.map(e(Z,i)).forEach(c)
const d=r.map(K)
P(R(i,0),d[0])
const f=function(t,a,r){const s=v({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(e(z,a,r)).forEach(e(n,s)),s}(r,i,d)
P(`${i}-header`,f),n(o,f),d.forEach(c),s("",a),n(a,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(e(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function et(t){return X(t.searchname,t.nickname)}function at(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${f}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(et).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${f}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(at).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,e){n===e.searchname&&(e.found=!0,t[n].nicknameList.indexOf(e.nickname)<0&&t[n].nicknameList.push(e.nickname))}function ot(t,n,a){const r=a.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(e(it,t,r))}function ct(t,n,a){a.items.forEach(e(ot,t,n))}function dt(n){const a={},r=c("quickSearchList")||[]
n.r.forEach(e(ct,a,r))
const s=t()
return d(s,st(a,r)),s}let ft,mt
function ut(t,n,e){0===e.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,a){$("QuickWear",`doAction - ${a}`),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(e(ut,t,a))}function lt(t){ht(t,I,"Used")}function pt(t){ft?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",e(lt,t))}function bt(t){ht(t,S,"Worn")}function kt(t,n,e){const a=e.dom
if("0"===t)a.classList.remove("fshHide")
else{const e=t!==n.toString()
B(a,e)}}function jt(t,n){const a=n.id
n.items.forEach(e(kt,t,a))}function $t(t){const n=t.dataset.folder
mt.r.forEach(e(jt,n))}function Lt(){ft=!ft,j("disableQuickWearPrompts",ft)}function gt(e){n(e,t({className:"qwPref",innerHTML:M("disableQuickWearPrompts")}))}function yt(t,e,a){n(a,t(e))}function wt(t,n){Q("qwtab-header",gt),Q("qwtab0",e(yt,J,n)),Q("qwtab1",e(yt,dt,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,x([[e(W,["smallLink","fshEq"]),bt],[e(W,["smallLink","fshUse"]),pt],[e(k,"fshFolder"),$t],[T("disableQuickWearPrompts"),Lt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){h()&&function(t){const n=t||p
n&&(d(n,"Getting item list from backpack..."),A().then(e(Et,n)),ft=l("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-0305220a.js.map
