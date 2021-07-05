import{x as t,$ as n,U as e,t as o}from"./calfSystem-365d90f3.js"
import{g as s,s as r}from"./idb-62f64cd2.js"
function i(){return t({cmd:"superelite"})}let c,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<e)&&(c.se[o]=e)}function d(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=n
const e=t.r
e&&(e.forEach(o(l,n)),r("fsh_seLog",c))}(t)}function m(){return n(i).then(d)}function p(){return f(),a=window.setInterval(m,3e5),m()}function w(){const t=e-(c&&c.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(c=t)}function U(){return s("fsh_seLog").then(h)}function g(){U().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,U as getFshSeLog,c as oldLog,g as seLog}
//# sourceMappingURL=seLog-0c42547a.js.map
