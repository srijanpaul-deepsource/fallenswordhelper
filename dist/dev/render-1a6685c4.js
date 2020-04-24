import{v as t,G as n,ay as s,e,a1 as o,b as a,p as f,D as c,ad as u,C as r,A as i,q as l}from"./calfSystem-9b1fa4ca.js"
import{r as b}from"./roundToString-ccdc9ea9.js"
import{t as d}from"./toLowerCase-cb0a8722.js"
const p=[[t=>t.fsp>0,t=>`${b(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${b(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function m(t,n){return n[0](t)?n[1](t):""}const g=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function h(t,n){return n[0](t)}function k(r){"-"===e.subcmd&&o("profile","formatBuffsToBuy")
const i=function(){let t=a("h1",f)
return t=0!==t.length?c(t[0]):u(),t}()
let l=n("buyBuffsGreeting").trim()
l=l.replace(/{playername}/g,i),l=function(n,e){return g.find(t(h,n))[1](n,s(e.buffs).join(", "),e)}(l,r),window.openQuickMsgDialog(i,l,"")}const $=/[^a-zA-Z0-9.,+\- ]/g,w=/([+-]{0,1}[.\d]+ *k)|([+-]{0,1}[.\d]+ *fsp)|([+-]{0,1}[.\d]+ *stam)/
function B(t){return t&&"BR"!==t.nodeName}function T(t){return d(t.replace($,"")).match(w)}function C(t){let n=function(t){let n="",s=t
for(;B(s);){const t=c(s)
s=s.nextSibling,n+=t}return T(n)}(t)
return n||(n=function(t){let n="",s=t
for(;B(s);){const t=c(s)
s=s.previousSibling,n=t+n}return T(n)}(t)),n}const S={count:0,buffs:{}}
function L(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function j(t,n){return t[n[1][1]]+=n[1][0],t}function v(){const n=l(S.buffs),s=(e=n.reduce(j,{k:0,fsp:0,stam:0,unknown:0}),p.map(t(m,e)).join(""))
var e
r('<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, '+`please use with discretion.<br><hr><table border=0>${n.map(L).join("")}</table><b>Total: ${s}</b>">Estimated Cost: <b>${s}</b></span>`,i("buffCost")),S.buffCostTotalText=s}function x(t){const n=t.classList.contains("fshBlue")
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=c(t)
n?function(t){const n=C(t)
let s,e
n?(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=n[0].match(/([+-]?[.\d]+)/)):(s="unknown",e="1"),S.buffs[c(t)]=[parseFloat(e),s],S.count+=1}(t):(S.count-=1,delete S.buffs[s]),S.count>0?v():(r("&nbsp;",i("buffCost")),S.buffCostTotalText="")}function y(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&k(t)}(S)
const n=function t(n){return n.tagName&&"SPAN"!==n.tagName?t(n.parentNode):n}(t.target);(function(t){return t.classList&&t.classList.contains("buffLink")})(n)&&x(n)}function N(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function A(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
return s?(n=s.reduce(N,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n):t}export{y as b,A as r}
//# sourceMappingURL=render-1a6685c4.js.map
