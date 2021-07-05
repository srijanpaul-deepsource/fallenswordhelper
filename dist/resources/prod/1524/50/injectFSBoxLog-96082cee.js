import{c as s}from"./createSpan-8a3a7e34.js"
import{z as n,j as a,i as t,o,h as e,b as f,C as i,an as c,S as r,W as l,bY as b,M as m}from"./calfSystem-365d90f3.js"
import{g as h,s as x}from"./idb-62f64cd2.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-96082cee.js.map
