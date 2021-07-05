import{c as t}from"./closestTr-bf59743f.js"
import{d as n}from"./daAjaxSendItemsToRecipient-d47f27f4.js"
import{c as e,bv as s,as as i,l as o,S as a,C as r,E as c,_ as u,ap as l,e as d,H as f,a as m,t as p,bt as h,aQ as k,aH as g,bn as L,y as b,I as w,o as S,p as $}from"./calfSystem-617f9a5d.js"
import{e as x}from"./errorDialog-b76ba3fb.js"
import{g as D}from"./getInventoryById-c970cb7e.js"
import{d as E}from"./doStatTotal-0ef44207.js"
import{S as Q,i as _,s as v,t as y,b as N,f as T,a as A,l as I,n as C,d as H,e as j,g as R,j as B,r as O,p as U}from"./index-c31cc1d2.js"
import{b as G}from"./batch-4134d884.js"
let F,M,P
function V(){if(!M){const t="dropitems"===e.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function Y(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function q(){const t=V()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function z(){return q().filter((n=>!o("fshHide",t(n))))}function J(){return P||(P=D()),P}function K(n){return t(n.target).cells[0].children[0].value}async function W(n,e,s){!function(n){const e=t(n)
e.cells[0].children[0].disabled=!0,c(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),n.blur(),n.classList.add("fshSpinner","fshSpinner12")}(n.target)
const i=await e([K(n)])
i&&i.s?function(t,n){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=n}(n,s):x(i)}const X=[["Check All",async function(t){const{items:n}=await J()
a("storeitems","Check All of Type"),z().filter((e=>n[e.value]&&n[e.value].item_id===n[K(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),W(t,n,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),W(t,Y,"Dropped")}]]
function Z(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const n=X.find((([n])=>n===r(t.target)))
n&&n[1](t)}function tt(t){let n,s,i,o,a,r,c,u,l,d,f,m,p=t[2](t[0])+"",h=t[2](t[1])+"",k="storeitems"===e.subcmd2&&function(t){let n,e,s,i,o
return{c(){n=y("["),e=N("button"),e.textContent="Select All Guild Locked",s=y("]"),T(e,"class","svelte-h3aclh")},m(a,r){A(a,n,r),A(a,e,r),A(a,s,r),i||(o=I(e,"click",t[5]),i=!0)},p:C,d(t){t&&H(n),t&&H(e),t&&H(s),i=!1,o()}}}(t)
return{c(){n=y("["),s=N("button"),i=y(p),o=y(" AH and UFSG Links"),a=y("] \n["),r=N("button"),c=y(h),u=y(" Quick Drop links"),l=y("] \n"),k&&k.c(),d=j(),T(s,"class","svelte-h3aclh"),T(r,"class","svelte-h3aclh")},m(e,p){A(e,n,p),A(e,s,p),R(s,i),R(s,o),A(e,a,p),A(e,r,p),R(r,c),R(r,u),A(e,l,p),k&&k.m(e,p),A(e,d,p),f||(m=[I(s,"click",t[3]),I(r,"click",t[4])],f=!0)},p(t,[n]){1&n&&p!==(p=t[2](t[0])+"")&&B(i,p),2&n&&h!==(h=t[2](t[1])+"")&&B(c,h),"storeitems"===e.subcmd2&&k.p(t,n)},i:C,o:C,d(t){t&&H(n),t&&H(s),t&&H(a),t&&H(r),t&&H(l),k&&k.d(t),t&&H(d),f=!1,O(m)}}}function nt(t,n,e){const s=U()
let{showExtraLinks:i=!1}=n,{showQuickDropLinks:o=!1}=n
return t.$$set=t=>{"showExtraLinks"in t&&e(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&e(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),e(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),e(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class et extends Q{constructor(t){super(),_(this,t,nt,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,n){if(13699!==n.item_id)return n.item_name
const e=t.find((t=>t.value===String(n.inv_id)))
return e?f(e.parentNode.parentNode.children[2]):n.item_name}async function ot(t){return st||(st=await async function(t){const n=await J()
return n&&n.items?l(d(n.items).map((([n,e])=>[n,{...e,item_name:it(t,e)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,n){return t[n]=(t[n]||0)+1,t}const ct=(t,n,e)=>`[<button class="fshStoreItemsButton ${t}"${n}>${e}</button>]`,ut=(t,n,e)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(n),`Quick ${e}`)}`,lt=(t,n,e)=>`[<a href="${t}"${n}>${e}</a>]`
function dt(t,n){return n[0]()?t+n[1]():t}function ft(t,n,e){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(e)} ${(t=>lt(`${k}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(e)}`],[()=>!0,()=>`&nbsp;${e.item_name}`],[()=>((t,n,e)=>t[2]&&n[e.item_id]>1)(t,n,e),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,n)=>t[3]&&(!n.bound||-1!==n.guild_tag))(t,e),()=>ut("fshBlue","SENDS","Send")],[()=>((t,n)=>t[4]&&-1===n.guild_tag)(t,e),()=>ut("fshRed","DROP","Drop")]]}function mt(t,n,[e,s]){const i=e
t[1]&&(i.className=h[s.rarity].clas)
const o=ft(t,n,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function pt(n){const e=await async function(){const n=q()
if(!n.length)return[]
const e=await ot(n)
return n.map((n=>[t(n).cells[2],e[n.value]])).filter((([,t])=>t))}(),s=n[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(e):[]
m(3,G,[[5,3,e,0,p(mt,n,s)]])}function ht(t){const n=function(t){const n=document.forms[0]
return new et({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:n.parentNode.children[5].children[0]})}(t)
n.$on("showExtraLinks",(n=>{t[0]=n.detail,pt(t)})),n.$on("showQuickDropLinks",(n=>{t[4]=n.detail,pt(t)})),n.$on("selectLocked",(()=>{!async function(){const t=z()
if(!t.length)return
const n=await J()
n&&n.items&&t.map((t=>[t,n.items[t.value]])).filter((([,t])=>t)).forEach((([t,n])=>{t.checked=!t.disabled&&-1!==n.guild_tag}))}()}))}async function kt(){if(b())return
if(!V())return
const t=at.map((t=>w(t)))
E(),ht(t),t.some((t=>t))&&pt(t),S($,Z)}export{V as a,J as b,z as c,Y as d,q as g,kt as i}
//# sourceMappingURL=injectStoreItems-c3efb4fd.js.map
