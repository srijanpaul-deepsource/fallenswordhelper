import{v as t,s as e,Q as n}from"./calfSystem-02ae8657.js"
import{g as o,s}from"./idb-ac1635f3.js"
function r(){return t({cmd:"superelite"})}let i,c,u
function a(){c&&(window.clearTimeout(c),c=!1),u&&(window.clearInterval(u),u=!1)}function f(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<n)&&(i.se[o]=n)}function l(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=n
const o=t.r
o&&(o.forEach(e(f,n)),s("fsh_seLog",i))}(t)}function m(){return r().then(l)}function p(){return a(),u=window.setInterval(m,3e5),m()}function d(){const t=n-(i&&i.lastUpdate||0)
t>=600?p():c=window.setTimeout(p,1e3*(600-t))}function w(t){t&&(i=t)}function h(){return o("fsh_seLog").then(w)}function g(){h().then(d)}export{a as disableBackgroundChecks,p as doBackgroundCheck,h as getFshSeLog,i as oldLog,g as seLog}
//# sourceMappingURL=seLog-66f85535.js.map