import{c as t}from"./closestTr-5bde6959.js"
import{d as e}from"./daAjaxSendItemsToRecipient-d620e175.js"
import{c as n,bo as s,N as i,l as o,W as a,C as r,E as c,_ as u,ak as d,e as l,H as m,a as f,t as k,bm as h,aI as p,az as g,bg as L,y as w,I as b,o as S,p as $}from"./calfSystem-030d7057.js"
import{e as x}from"./errorDialog-864e4ba8.js"
import{g as D}from"./getInventoryById-4d1a7058.js"
import{d as E}from"./doStatTotal-a31727af.js"
import{S as _,i as Q,s as v,t as y,e as N,p as I,g as T,a as A,b as C,l as H,c as j,n as R,d as B,r as O,k as U}from"./index-5c81749d.js"
import{b as G}from"./batch-45d4d781.js"
let F,M,P
function z(){if(!M){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function V(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function W(){const t=z()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function Y(){return W().filter((e=>!o("fshHide",t(e))))}function q(){return P||(P=D()),P}function J(e){return t(e.target).cells[0].children[0].value}async function K(e,n,s){!function(e){const n=t(e)
n.cells[0].children[0].disabled=!0,c(".actionButton",n).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),e.blur(),e.classList.add("fshSpinner","fshSpinner12")}(e.target)
const i=await n([J(e)])
i&&i.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(e,s):x(i)}const X=[["Check All",async function(t){const{items:e}=await q()
a("storeitems","Check All of Type"),Y().filter((n=>e[n.value]&&e[n.value].item_id===e[J(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),K(t,e,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),K(t,V,"Dropped")}]]
function Z(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const e=X.find((([e])=>e===r(t.target)))
e&&e[1](t)}function tt(t){let e,s,i,o,a,r,c,u,d,l,m,f,k=t[2](t[0])+"",h=t[2](t[1])+"",p="storeitems"===n.subcmd2&&function(t){let e,n,s,i,o
return{c(){e=y("["),n=N("button"),n.textContent="Select All Guild Locked",s=y("]"),T(n,"class","svelte-h3aclh")},m(a,r){A(a,e,r),A(a,n,r),A(a,s,r),i||(o=H(n,"click",t[5]),i=!0)},p:R,d(t){t&&B(e),t&&B(n),t&&B(s),i=!1,o()}}}(t)
return{c(){e=y("["),s=N("button"),i=y(k),o=y(" AH and UFSG Links"),a=y("] \n["),r=N("button"),c=y(h),u=y(" Quick Drop links"),d=y("] \n"),p&&p.c(),l=I(),T(s,"class","svelte-h3aclh"),T(r,"class","svelte-h3aclh")},m(n,k){A(n,e,k),A(n,s,k),C(s,i),C(s,o),A(n,a,k),A(n,r,k),C(r,c),C(r,u),A(n,d,k),p&&p.m(n,k),A(n,l,k),m||(f=[H(s,"click",t[3]),H(r,"click",t[4])],m=!0)},p(t,[e]){1&e&&k!==(k=t[2](t[0])+"")&&j(i,k),2&e&&h!==(h=t[2](t[1])+"")&&j(c,h),"storeitems"===n.subcmd2&&p.p(t,e)},i:R,o:R,d(t){t&&B(e),t&&B(s),t&&B(a),t&&B(r),t&&B(d),p&&p.d(t),t&&B(l),m=!1,O(f)}}}function et(t,e,n){const s=U()
let{showExtraLinks:i=!1}=e,{showQuickDropLinks:o=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),n(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),n(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class nt extends _{constructor(t){super(),Q(this,t,et,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?m(n.parentNode.parentNode.children[2]):e.item_name}async function ot(t){return st||(st=await async function(t){const e=await q()
return e&&e.items?d(l(e.items).map((([e,n])=>[e,{...n,item_name:it(t,n)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,e){return t[e]=(t[e]||0)+1,t}const ct=(t,e,n)=>`[<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,ut=(t,e,n)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`)}`,dt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
function lt(t,e){return e[0]()?t+e[1]():t}function mt(t,e,n){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':dt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${(t=>dt(`${p}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>((t,e,n)=>t[2]&&e[n.item_id]>1)(t,e,n),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,n),()=>ut("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,n),()=>ut("fshRed","DROP","Drop")]]}function ft(t,e,[n,s]){const i=n
t[1]&&(i.className=h[s.rarity].clas)
const o=mt(t,e,s).reduce(lt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function kt(e){const n=await async function(){const e=W()
if(!e.length)return[]
const n=await ot(e)
return e.map((e=>[t(e).cells[2],n[e.value]])).filter((([,t])=>t))}(),s=e[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(n):[]
f(3,G,[[5,3,n,0,k(ft,e,s)]])}function ht(t){const e=function(t){const e=document.forms[0]
return new nt({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[0]=e.detail,kt(t)})),e.$on("showQuickDropLinks",(e=>{t[4]=e.detail,kt(t)})),e.$on("selectLocked",(()=>{!async function(){const t=Y()
if(!t.length)return
const e=await q()
e&&e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}async function pt(){if(w())return
if(!z())return
const t=at.map((t=>b(t)))
E(),ht(t),t.some((t=>t))&&kt(t),S($,Z)}export{z as a,q as b,Y as c,V as d,W as g,pt as i}
//# sourceMappingURL=injectStoreItems-d65b4c71.js.map
