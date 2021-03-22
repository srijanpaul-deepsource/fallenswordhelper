import{c as n}from"./createInput-c4b18abd.js"
import{n as t,x as e,u as s,w as i,$ as o,p as r,h as a,o as c,D as u,B as m,E as f,aD as l,at as p,j as d}from"./calfSystem-03050396.js"
import{c as v}from"./createSpan-8d9e047a.js"
import{i as h}from"./insertTextBeforeEnd-2526ea52.js"
import{j as b,o as g}from"./jsonFail-70c458b9.js"
import{c as j}from"./createAnchor-9c8b8998.js"
import{i as C}from"./insertElementBefore-9228b012.js"
import{x as y}from"./xPath-a88d3938.js"
function $(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function w(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function x(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(w)}let E,I,N
function _(n){var t
b(n,N)||g((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',N)}function S(n){m(n,I),m("",N)}function k(){const n=Number(E.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o($,x,e)).then(_)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function D(n){var e
N=t("ol",e),a(n,N)}function R(n){!function(n){I=v(),a(n,I)}(n),D(n)}function T(t){var e
e=B(t),h(e,"Select how many to quick invent"),E=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),a(e,E),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
a(t,e),c(e,k)}(B(t)),R(B(t))}function Y(n){return`${l}items${p}view&item_id=${n}`}function q(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:Y(n),target:"_blank"})}(e)
C(s,n),a(s,n)}function A(n){q(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
q(u("#pCC b"),n)}(),f('#pCC img[src*="/items/"]').forEach(A)}function G(){d()&&(F(),T(r.lastElementChild))}export default G
//# sourceMappingURL=inventing-9c8be29a.js.map
