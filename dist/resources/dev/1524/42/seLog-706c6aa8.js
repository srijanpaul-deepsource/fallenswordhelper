import{x as t,$ as n,t as e,V as o}from"./calfSystem-4b6b865d.js"
import{g as s,s as r}from"./idb-a46a6973.js"
function i(){return t({cmd:"superelite"})}let a,c,u
function f(){c&&(window.clearTimeout(c),c=!1),u&&(window.clearInterval(u),u=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!a.se[o]||a.se[o]<e)&&(a.se[o]=e)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
a||(a={lastUpdate:0,se:{}}),a.lastUpdate=n
const o=t.r
o&&(o.forEach(e(l,n)),r("fsh_seLog",a))}(t)}function d(){return n(i).then(m)}function p(){return f(),u=window.setInterval(d,3e5),d()}function w(){const t=o-(a&&a.lastUpdate||0)
t>=600?p():c=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(a=t)}function b(){return s("fsh_seLog").then(h)}function g(){b().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,b as getFshSeLog,a as oldLog,g as seLog}
//# sourceMappingURL=seLog-706c6aa8.js.map
