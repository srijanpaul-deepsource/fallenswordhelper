import{c as n}from"./createInput-0182b589.js"
import{n as t,x as e,u as s,w as i,$ as o,p as c,h as r,o as a,D as u,B as f,E as m,aE as l,at as p,j as d}from"./calfSystem-d56087e1.js"
import{c as v}from"./createSpan-65434787.js"
import{i as b}from"./insertTextBeforeEnd-9afa1c0c.js"
import{j as h,o as g}from"./jsonFail-f9e70d0f.js"
import{c as j}from"./createAnchor-cbb62427.js"
import{i as C}from"./insertElementBefore-71272774.js"
import{x as y}from"./xPath-8fdf271b.js"
function E(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function _(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function w(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(_)}let x,I,N
function $(n){h(n,N)||g(n.r.success_count>0?'<span class="fshGreen">You successfully invented.</span>':'<span class="fshRed">You have failed to invent.</span>',N)}function S(n){f(n,I),f("",N)}function k(){const n=Number(x.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(E,w,e)).then($)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
N=t("ol",e),r(n,N)}function T(n){!function(n){I=v(),r(n,I)}(n),R(n)}function Y(t){var e
e=B(t),b(e,"Select how many to quick invent"),x=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),r(e,x),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
r(t,e),a(e,k)}(B(t)),T(B(t))}function q(n){return`${l}items${p}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),r(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(D)}function G(){d()&&(F(),Y(c.lastElementChild))}export default G
//# sourceMappingURL=inventing-4fc21d1b.js.map
