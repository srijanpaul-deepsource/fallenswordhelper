import{c as t}from"./chunk-e04f591f.js"
import{x as e,$ as n,y as s,g as i,p as a,Q as r,t as o,k as c,m as f,h as m,o as u,e as l,l as d,B as p,z as h}from"./calfSystem-fe0ebf32.js"
import{c as k}from"./createInput-47702c1d.js"
import{c as b}from"./createLabel-616c04a1.js"
import{c as g}from"./createUl-995f97e4.js"
import{a as j}from"./allthen-e8de2991.js"
import{i as v}from"./indexAjaxJson-a9fbc5f9.js"
import{i as x}from"./insertElementBefore-9228b012.js"
import{i as T}from"./isArray-c05157b9.js"
import{j as y,o as B}from"./jsonFail-4ae9e9c9.js"
import"./all-3be74659.js"
function E(t){return v({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function I(t){const e=t.filter((t=>0===t.r)),n=t.filter((t=>0!==t.r))
return e.length>0?{r:e.map((t=>({id:t.temp_id}))),s:!0}:n.length>0?{e:{message:n[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function L(t){return j(t.map(E),I)}function M(t){return e({cmd:"tempinv",subcmd:"takeitems",item:t})}function Q(t,e,n){const s=b({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${e}`})
return x(s,n),s}function q(t,e){const n=e.children[0],{tipped:s}=n.dataset,i=c.exec(s)
if(!i)return t
const a=i[1],r=i[2]
return t[a]?t[a].invIds.push(r):t[a]={invIds:[r],tipped:s.replace(/&extra=\d/,""),src:n.src},t}function A(t,e){const n=e[1],s=f(),i=f({innerHTML:`<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">`})
m(s,i)
const a=f({innerHTML:`<button class="fshBl fshBls" data-id="${e[0]}">Take All ${n.invIds.length}</button>`})
m(s,a),m(t,s)}function C(t){!function(t){const e=$(`#temp-inv-img-${t}`).qtip("api")
e&&e.destroy(!0)}(t.id)
const e=h(`temp-inv-${t.id}`)
e&&p("",e)}function H(t,e){y(e,t)||T(e.r)&&function(t,e){e.r.forEach(C),B(`${e.r.length.toString()} item(s) taken.`,t)}(t,e)}function N(t,e){var s;(s=e,n(M,L,s)).then(o(H,t))}function S(e,n,s){d("fshBls",s.target)&&function(e,n,s){const i=s.dataset.id,{invIds:a}=e[i]
p(`taking all ${a.length} items`,s.parentNode),t(40,a).forEach(o(N,n))}(e,n,s.target)}function z(t,e,n){const s=f({className:"fshTakeGrid"})
!function(t,e){l(e).forEach(o(A,t))}(s,t),m(e,s),u(s,o(S,t,n))}function F(t){const e=f({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),n=function(t){const e=f(),n=g()
return m(e,n),m(t,e),n}(e)
m(e,f()),z(t,e,n),m(a,e)}function O(t,e){Q("qtOn","Mailbox",e)
F(t.reduce(q,{}))}function _(){if(s())return
const t=i("a",a)
if(0===t.length)return
const e=a.lastElementChild
!function(t,e){const n=k({id:"fshQuickTake",type:"checkbox"})
x(n,e),r(n,"change",o(O,t,e))}(t,e),Q("qtOff","Quick Take",e)}export default _
//# sourceMappingURL=mailbox-fac4fd7a.js.map
