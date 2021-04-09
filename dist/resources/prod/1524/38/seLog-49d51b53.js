import{x as t,$ as e,t as n,U as o}from"./calfSystem-7a1cce43.js"
import{g as s,s as r}from"./idb-c572d898.js"
function c(){return t({cmd:"superelite"})}let i,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<n)&&(i.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",i))}(t)}function d(){return e(c).then(m)}function p(){return f(),a=window.setInterval(d,3e5),d()}function w(){const t=o-(i&&i.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(i=t)}function U(){return s("fsh_seLog").then(h)}function g(){U().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,U as getFshSeLog,i as oldLog,g as seLog}
//# sourceMappingURL=seLog-49d51b53.js.map
