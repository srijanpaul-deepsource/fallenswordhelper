import{x as e,u as t,v as n,D as r,U as s,a7 as a,ad as o,H as u,$ as i,t as c}from"./calfSystem-fe0ebf32.js"
import{d as f}from"./dataRows-fe9c44ea.js"
import{g as l,s as m}from"./idb-b0de0ac7.js"
function p(){return e({cmd:"superelite"})}function d(e){const t=e.replace("<br>"," ").split(/[: /]/)
return Math.floor((a-Date.UTC(Number(t[2]),o.indexOf(t[1]),Number(t[0]),Number(t[3]),Number(t[4]),0))/1e3)}function b(e){return{time:d(e.cells[0].innerHTML),creature:{name:u(e.cells[1])}}}function w(e){const t=n(e),a=r("#pCC table table",t)
if(!a)return{s:!1}
return{r:f(a.rows,4,1).map(b),s:!0,t:`0 ${String(s)}`}}function h(){return t({cmd:"superelite"}).then(w)}let N,U,g
function T(){U&&(window.clearTimeout(U),U=!1),g&&(window.clearInterval(g),g=!1)}function j(e,t){const n=e-t.time,r=t.creature.name.replace(" (Super Elite)","");(!N.se[r]||N.se[r]<n)&&(N.se[r]=n)}function v(e){(function(e){return e&&e.t})(e)&&function(e){const t=Number(e.t.split(" ")[1])
N||(N={lastUpdate:0,se:{}}),N.lastUpdate=t
const n=e.r
n&&(n.forEach(c(j,t)),m("fsh_seLog",N))}(e)}function x(){return i(p,h).then(v)}function C(){return T(),g=window.setInterval(x,3e5),x()}function L(){const e=s-(N&&N.lastUpdate||0)
e>=600?C():U=window.setTimeout(C,1e3*(600-e))}function S(e){e&&(N=e)}function D(){return l("fsh_seLog").then(S)}function E(){D().then(L)}export{T as disableBackgroundChecks,C as doBackgroundCheck,D as getFshSeLog,N as oldLog,E as seLog}
//# sourceMappingURL=seLog-04f0b8ae.js.map
