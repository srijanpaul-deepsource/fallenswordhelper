import{c as t}from"./closestTr-74f72fa1.js"
import{d as e}from"./daAjaxSendItemsToRecipient-5dff9944.js"
import{c as n,bx as s,at as i,l as o,T as a,C as r,E as c,a0 as u,aq as l,e as d,H as f,a as m,t as p,bv as h,aR as k,aI as g,bp as L,y as w,I as b,o as S,p as $}from"./calfSystem-01849445.js"
import{e as x}from"./errorDialog-e70faa9e.js"
import{g as D}from"./getInventoryById-275c3e5d.js"
import{d as E}from"./doStatTotal-20f2ac46.js"
import{S as v,i as Q,s as _,t as y,b as T,f as I,a as N,l as A,n as C,d as j,e as H,g as R,j as B,r as O,p as U}from"./index-2f0e5ca2.js"
import{b as G}from"./batch-367d6f7a.js"
let F,M,P
function q(){if(!M){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function V(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function Y(){const t=q()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function z(){return Y().filter((e=>!o("fshHide",t(e))))}function J(){return P||(P=D()),P}function K(e){return t(e.target).cells[0].children[0].value}async function W(e,n,s){!function(e){const n=t(e)
n.cells[0].children[0].disabled=!0,c(".actionButton",n).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),e.blur(),e.classList.add("fshSpinner","fshSpinner12")}(e.target)
const i=await n([K(e)])
i&&i.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(e,s):x(i)}const X=[["Check All",async function(t){const{items:e}=await J()
a("storeitems","Check All of Type"),z().filter((n=>e[n.value]&&e[n.value].item_id===e[K(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),W(t,e,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),W(t,V,"Dropped")}]]
function Z(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const e=X.find((([e])=>e===r(t.target)))
e&&e[1](t)}function tt(t){let e,s,i,o,a,r,c,u,l,d,f,m,p=t[2](t[0])+"",h=t[2](t[1])+"",k="storeitems"===n.subcmd2&&function(t){let e,n,s,i,o
return{c(){e=y("["),n=T("button"),n.textContent="Select All Guild Locked",s=y("]"),I(n,"class","svelte-h3aclh")},m(a,r){N(a,e,r),N(a,n,r),N(a,s,r),i||(o=A(n,"click",t[5]),i=!0)},p:C,d(t){t&&j(e),t&&j(n),t&&j(s),i=!1,o()}}}(t)
return{c(){e=y("["),s=T("button"),i=y(p),o=y(" AH and UFSG Links"),a=y("] \n["),r=T("button"),c=y(h),u=y(" Quick Drop links"),l=y("] \n"),k&&k.c(),d=H(),I(s,"class","svelte-h3aclh"),I(r,"class","svelte-h3aclh")},m(n,p){N(n,e,p),N(n,s,p),R(s,i),R(s,o),N(n,a,p),N(n,r,p),R(r,c),R(r,u),N(n,l,p),k&&k.m(n,p),N(n,d,p),f||(m=[A(s,"click",t[3]),A(r,"click",t[4])],f=!0)},p(t,[e]){1&e&&p!==(p=t[2](t[0])+"")&&B(i,p),2&e&&h!==(h=t[2](t[1])+"")&&B(c,h),"storeitems"===n.subcmd2&&k.p(t,e)},i:C,o:C,d(t){t&&j(e),t&&j(s),t&&j(a),t&&j(r),t&&j(l),k&&k.d(t),t&&j(d),f=!1,O(m)}}}function et(t,e,n){const s=U()
let{showExtraLinks:i=!1}=e,{showQuickDropLinks:o=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),n(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),n(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class nt extends v{constructor(t){super(),Q(this,t,et,tt,_,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?f(n.parentNode.parentNode.children[2]):e.item_name}async function ot(t){return st||(st=await async function(t){const e=await J()
return e&&e.items?l(d(e.items).map((([e,n])=>[e,{...n,item_name:it(t,n)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,e){return t[e]=(t[e]||0)+1,t}const ct=(t,e,n)=>`[<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,ut=(t,e,n)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`)}`,lt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
function dt(t,e){return e[0]()?t+e[1]():t}function ft(t,e,n){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${(t=>lt(`${k}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>((t,e,n)=>t[2]&&e[n.item_id]>1)(t,e,n),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,n),()=>ut("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,n),()=>ut("fshRed","DROP","Drop")]]}function mt(t,e,[n,s]){const i=n
t[1]&&(i.className=h[s.rarity].clas)
const o=ft(t,e,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function pt(e){const n=await async function(){const e=Y()
if(!e.length)return[]
const n=await ot(e)
return e.map((e=>[t(e).cells[2],n[e.value]])).filter((([,t])=>t))}(),s=e[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(n):[]
m(3,G,[[5,3,n,0,p(mt,e,s)]])}function ht(t){const e=function(t){const e=document.forms[0]
return new nt({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[0]=e.detail,pt(t)})),e.$on("showQuickDropLinks",(e=>{t[4]=e.detail,pt(t)})),e.$on("selectLocked",(()=>{!async function(){const t=z()
if(!t.length)return
const e=await J()
e&&e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}async function kt(){if(w())return
if(!q())return
const t=at.map((t=>b(t)))
E(),ht(t),t.some((t=>t))&&pt(t),S($,Z)}export{q as a,J as b,z as c,V as d,Y as g,kt as i}
//# sourceMappingURL=injectStoreItems-266cf7d6.js.map
