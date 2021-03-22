import{c as n}from"./createInput-d71226f9.js"
import{n as t,x as e,u as s,w as i,$ as o,p as r,h as a,o as c,D as u,B as f,E as m,aE as l,au as p,j as d}from"./calfSystem-186455ab.js"
import{c as v}from"./createSpan-8048fffb.js"
import{i as h}from"./insertTextBeforeEnd-2ef03822.js"
import{j as b,o as g}from"./jsonFail-c0661a61.js"
import{c as j}from"./createAnchor-df8b6e0b.js"
import{i as C}from"./insertElementBefore-9228b012.js"
import{x as y}from"./xPath-10218fff.js"
function E(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function $(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function w(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then($)}let x,I,N
function _(n){var t
b(n,N)||g((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',N)}function S(n){f(n,I),f("",N)}function k(){const n=Number(x.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(E,w,e)).then(_)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
N=t("ol",e),a(n,N)}function T(n){!function(n){I=v(),a(n,I)}(n),R(n)}function Y(t){var e
e=B(t),h(e,"Select how many to quick invent"),x=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),a(e,x),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
a(t,e),c(e,k)}(B(t)),T(B(t))}function q(n){return`${l}items${p}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),a(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(D)}function G(){d()&&(F(),Y(r.lastElementChild))}export default G
//# sourceMappingURL=inventing-ae6aefbe.js.map
