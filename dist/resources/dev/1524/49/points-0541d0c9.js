import{E as e,C as n,z as t,B as a,t as s,ab as i,ac as l,a0 as r,f as o,h as c,A as f,S as m}from"./calfSystem-9ab64478.js"
import{p as u}from"./parseGoldUpgrades-0a4af6ee.js"
import{c as p}from"./createSpan-7ce539c8.js"
import{i as d}from"./insertTextBeforeEnd-d4183c50.js"
import{i as b}from"./intValue-f11572ef.js"
import{n as x}from"./numberIsNaN-9a364388.js"
let E,S
const g={}
function h(e,t){return n(t).includes(e)}function N(e){return E.find(s(h,e))}function j(e,t,a){if(!g[e][a]){const s=function(e,n){return"amount"===n?new RegExp(`\\+(\\d+) ${e}`):/(\d+)\xA0/}(e,a),i=n(t).match(s)[1]
g[e][a]=i}return g[e][a]}function M(e,n,t,a){const s=function(e,n){return j(e,n,"amount")}(e,n),i=function(e,n){return j(e,n.nextElementSibling,"cost")}(e,n)
let l
t*i<=S?(l=t*s,a.className="fshBlue"):(l=Math.floor(S/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function y(e,n,t){const{target:a}=t,s=Number(a.value),i=function(e,n){if(g[e]||(g[e]={}),!g[e].span){const t=p()
d(n," "),c(n,t),g[e].span=t}return g[e].span}(e,n)
x(s)||0===s?i.className="fshHide":M(e,n,s,i)}function C(e){const n=N(e)
o(n.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,e,n))}function $(){S=b(n(t("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(e,n){const t=N(e).nextElementSibling.nextElementSibling
if(t){const e=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(n,e+5)}}function A(){"1"===m("type")?u():(E=e("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-0541d0c9.js.map
