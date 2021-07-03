import{c as s}from"./createSpan-0e686680.js"
import{z as n,j as a,i as o,o as t,h as e,b as i,C as f,ao as c,S as r,X as l,bZ as b,M as m}from"./calfSystem-8af1dca2.js"
import{g as h,s as x}from"./idb-30d71a28.js"
function p(s){let a=function(s){return s||""}(s)
const o=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(o)<0&&(a=`<br>${o}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
o(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),o(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-ce5d5d4e.js.map
