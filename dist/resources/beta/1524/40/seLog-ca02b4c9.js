import{x as t,$ as n,t as e,U as o}from"./calfSystem-ab393688.js"
import{g as s,s as r}from"./idb-4a088c10.js"
function i(){return t({cmd:"superelite"})}let c,a,u
function f(){a&&(window.clearTimeout(a),a=!1),u&&(window.clearInterval(u),u=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<e)&&(c.se[o]=e)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=n
const o=t.r
o&&(o.forEach(e(l,n)),r("fsh_seLog",c))}(t)}function p(){return n(i).then(m)}function d(){return f(),u=window.setInterval(p,3e5),p()}function w(){const t=o-(c&&c.lastUpdate||0)
t>=600?d():a=window.setTimeout(d,1e3*(600-t))}function h(t){t&&(c=t)}function U(){return s("fsh_seLog").then(h)}function b(){U().then(w)}export{f as disableBackgroundChecks,d as doBackgroundCheck,U as getFshSeLog,c as oldLog,b as seLog}
//# sourceMappingURL=seLog-ca02b4c9.js.map
