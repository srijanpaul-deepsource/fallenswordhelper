import{c as s}from"./createSpan-56de4e57.js"
import{z as n,j as e,i as t,o as a,h as o,b as i,C as f,ak as c,X as r,Y as l,bX as b,K as m}from"./calfSystem-817ceb25.js"
import{g as h,s as x}from"./idb-104727d0.js"
function p(s){let e=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
e.indexOf(t)<0&&(e=`<br>${t}${e}`),e.length>1e4&&(e=e.substring(0,1e4)),x("fsh_fsboxcontent",e)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const e=n.lastElementChild
t(e,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(e)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
a(r,u),o(e,r)}function d(){const s=n("minibox-fsbox")
e()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-ae0a0c90.js.map
