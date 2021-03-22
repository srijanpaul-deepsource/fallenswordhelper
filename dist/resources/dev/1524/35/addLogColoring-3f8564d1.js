import{c as t}from"./createStyle-8a0701e7.js"
import{d as n}from"./dataRows-f1e5d572.js"
import{a as o,d as a}from"./doBuffLinkClick-8148641b.js"
import{I as e,D as s,o as r,a0 as i,t as c,e as f,h as m,H as l,F as u}from"./calfSystem-186455ab.js"
import{p}from"./parseDateAsTimestamp-6b94bab0.js"
let d,C
function b(t,n){let o="old"
const a=p(l(n.cells[t]))
return function(t,n){return t>20&&n<=C}((d-a)/6e4,a)||(o=a>C?"new":"seen"),[n,o]}function h(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function g(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,e,r){const i=n(r.rows,3,0).map(c(b,e))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(a)}(o,i)
const l=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(h,{})).map(c(g,o))}(o,i)
l.length&&m(document.body,t(l.join("\n")))}function x(t,n,a){a.classList.add("fshLogColoring"),d=(new Date).setUTCSeconds(0,0)-1
const s=`last${t}Check`
C=function(t){return e(t)||d}(s),j(t,n,a),r(a,o),i(s,d)}function y(t,n){if(!e("enableLogColoring"))return
const o=function(t){return s("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(t)
o&&x(t,n,o)}export{y as a}
//# sourceMappingURL=addLogColoring-3f8564d1.js.map
