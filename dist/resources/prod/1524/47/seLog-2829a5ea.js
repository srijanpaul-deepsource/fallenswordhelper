import{x as t,$ as e,t as n,U as o}from"./calfSystem-a2fd9017.js"
import{g as s,s as r}from"./idb-09e8fa3a.js"
function i(){return t({cmd:"superelite"})}let a,c,u
function f(){c&&(window.clearTimeout(c),c=!1),u&&(window.clearInterval(u),u=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!a.se[o]||a.se[o]<n)&&(a.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
a||(a={lastUpdate:0,se:{}}),a.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",a))}(t)}function d(){return e(i).then(m)}function p(){return f(),u=window.setInterval(d,3e5),d()}function w(){const t=o-(a&&a.lastUpdate||0)
t>=600?p():c=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(a=t)}function U(){return s("fsh_seLog").then(h)}function g(){U().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,U as getFshSeLog,a as oldLog,g as seLog}
//# sourceMappingURL=seLog-2829a5ea.js.map
