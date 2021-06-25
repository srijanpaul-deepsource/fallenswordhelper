import{c as t}from"./chunk-c0e724c2.js"
import{x as e,$ as n,y as s,p as i,g as a,P as r,t as c,k as o,m as f,h as m,o as u,e as d,l,B as p,z as h}from"./calfSystem-db2edbef.js"
import{c as k}from"./createInput-93c1d447.js"
import{c as b}from"./createLabel-213b60f2.js"
import{c as g}from"./createUl-32b5e5b9.js"
import{a as j}from"./allthen-2719c129.js"
import{i as v}from"./indexAjaxJson-acd1a794.js"
import{i as x}from"./insertElementBefore-165ce171.js"
import{i as T}from"./isArray-fb536e29.js"
import{j as y,o as B}from"./jsonFail-7e9e8f19.js"
import"./all-ceaf9817.js"
function E(t){return v({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function I(t){const e=t.filter((t=>0===t.r)),n=t.filter((t=>0!==t.r))
return e.length>0?{r:e.map((t=>({id:t.temp_id}))),s:!0}:n.length>0?{e:{message:n[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function L(t){return j(t.map(E),I)}function M(t){return e({cmd:"tempinv",subcmd:"takeitems",item:t})}function q(t,e,n){const s=b({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${e}`})
return x(s,n),s}function Q(t,e){const n=e.children[0],{tipped:s}=n.dataset,i=o.exec(s)
if(!i)return t
const a=i[1],r=i[2]
return t[a]?t[a].invIds.push(r):t[a]={invIds:[r],tipped:s.replace(/&extra=\d/,""),src:n.src},t}function A(t,e){const n=e[1],s=f(),i=f({innerHTML:`<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">`})
m(s,i)
const a=f({innerHTML:`<button class="fshBl fshBls" data-id="${e[0]}">Take All ${n.invIds.length}</button>`})
m(s,a),m(t,s)}function C(t){!function(t){const e=$(`#temp-inv-img-${t}`).qtip("api")
e&&e.destroy(!0)}(t.id)
const e=h(`temp-inv-${t.id}`)
e&&p("",e)}function H(t,e){y(e,t)||T(e.r)&&function(t,e){e.r.forEach(C),B(`${e.r.length.toString()} item(s) taken.`,t)}(t,e)}function N(t,e){var s;(s=e,n(M,L,s)).then(c(H,t))}function S(e,n,s){l("fshBls",s.target)&&function(e,n,s){const i=s.dataset.id,{invIds:a}=e[i]
p(`taking all ${a.length} items`,s.parentNode),t(40,a).forEach(c(N,n))}(e,n,s.target)}function z(t,e,n){const s=f({className:"fshTakeGrid"})
!function(t,e){d(e).forEach(c(A,t))}(s,t),m(e,s),u(s,c(S,t,n))}function F(t){const e=f({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),n=function(t){const e=f(),n=g()
return m(e,n),m(t,e),n}(e)
m(e,f()),z(t,e,n),m(i,e)}function O(t,e){q("qtOn","Mailbox",e)
F(t.reduce(Q,{}))}function _(){if(s()||!i)return
const t=a("a",i)
if(0===t.length)return
const e=i.lastElementChild
!function(t,e){const n=k({id:"fshQuickTake",type:"checkbox"})
x(n,e),r(n,"change",c(O,t,e))}(t,e),q("qtOff","Quick Take",e)}export default _
//# sourceMappingURL=mailbox-7af1c52d.js.map
