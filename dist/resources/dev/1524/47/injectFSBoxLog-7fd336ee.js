import{c as s}from"./createSpan-009a409b.js"
import{z as n,j as a,i as o,o as t,h as e,b as f,C as i,ao as c,T as r,X as l,b_ as b,M as m}from"./calfSystem-bfc1f6c0.js"
import{g as h,s as x}from"./idb-d8a4a427.js"
function p(s){let a=function(s){return s||""}(s)
const o=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(o)<0&&(a=`<br>${o}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
o(a,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),o(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-7fd336ee.js.map
