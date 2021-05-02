import{x as t,$ as e,t as n,U as o}from"./calfSystem-15b00143.js"
import{g as s,s as r}from"./idb-1c9eb1ac.js"
function c(){return t({cmd:"superelite"})}let i,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<n)&&(i.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",i))}(t)}function p(){return e(c).then(m)}function d(){return f(),a=window.setInterval(p,3e5),p()}function w(){const t=o-(i&&i.lastUpdate||0)
t>=600?d():u=window.setTimeout(d,1e3*(600-t))}function h(t){t&&(i=t)}function b(){return s("fsh_seLog").then(h)}function U(){b().then(w)}export{f as disableBackgroundChecks,d as doBackgroundCheck,b as getFshSeLog,i as oldLog,U as seLog}
//# sourceMappingURL=seLog-d7d1b797.js.map
