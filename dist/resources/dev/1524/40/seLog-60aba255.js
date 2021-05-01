import{x as t,$ as e,t as n,V as o}from"./calfSystem-c464cb1d.js"
import{g as s,s as r}from"./idb-870991e0.js"
function c(){return t({cmd:"superelite"})}let i,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<n)&&(i.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",i))}(t)}function d(){return e(c).then(m)}function p(){return f(),a=window.setInterval(d,3e5),d()}function w(){const t=o-(i&&i.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(i=t)}function b(){return s("fsh_seLog").then(h)}function g(){b().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,b as getFshSeLog,i as oldLog,g as seLog}
//# sourceMappingURL=seLog-60aba255.js.map
