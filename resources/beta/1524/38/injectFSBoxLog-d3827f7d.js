import{c as s}from"./createSpan-cad7f112.js"
import{z as n,j as e,i as t,o as a,h as o,b as f,C as i,be as c,W as r,X as l,bW as b,K as m}from"./calfSystem-71efcdd9.js"
import{g as h,s as x}from"./idb-3de49256.js"
function d(s){let e=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
e.indexOf(t)<0&&(e=`<br>${t}${e}`),e.length>1e4&&(e=e.substring(0,1e4)),x("fsh_fsboxcontent",e)}function p(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function u(n){const e=n.lastElementChild
t(e,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(d),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(e)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
a(r,p),o(e,r)}function g(){const s=n("minibox-fsbox")
e()&&s&&u(s)}export default g
//# sourceMappingURL=injectFSBoxLog-d3827f7d.js.map
