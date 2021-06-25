import{c as t}from"./createStyle-405c1e12.js"
import{d as n}from"./dataRows-75ebbe50.js"
import{a as e,d as o}from"./doBuffLinkClick-cd1af5e1.js"
import{D as a,I as s,o as r,Z as c,t as i,e as f,h as l,H as m,F as u}from"./calfSystem-db2edbef.js"
import{p as d}from"./parseDateAsTimestamp-099fe353.js"
function p(){return a("#pCC > table:last-of-type")}let C,h
function b(t,n){let e="old"
const o=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=h}((C-o)/6e4,o)||(e=o>h?"new":"seen"),[n,e]}function g(t,[n,e]){const o=n.rowIndex+1
return t[e]?t[e]={min:Math.min(t[e].min,o),max:Math.max(t[e].min,o)}:t[e]={min:o,max:o},t}function j(t,[n,{min:e,max:o}]){return`.fshLogColoring tr:nth-of-type(${t}n+${e}):nth-of-type(-${t}n+${o}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function x(e,s,r,c){const m=n(r.rows,c,0).map(i(b,s))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>a(u,t))).forEach(o)}(e,m)
const d=function(t,n){const e="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(g,{})).map(i(j,e))}(e,m)
d.length&&l(document.body,t(d.join("\n")))}function y(t,n,o,a){o.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const i=`last${t}Check`
h=function(t){return s(t)||C}(i),x(t,n,o,a),r(o,e),c(i,C)}function L(t,n,e){if(!s("enableLogColoring"))return
const o=function(t){return["Chat","Leader"].includes(t)?a("#pCC table table table table"):p()}(t)
o&&y(t,n,o,e)}export{L as a,p as g}
//# sourceMappingURL=addLogColoring-7837c482.js.map
