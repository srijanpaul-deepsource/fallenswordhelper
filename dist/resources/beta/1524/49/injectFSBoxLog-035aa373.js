import{c as s}from"./createSpan-54af063c.js"
import{z as n,j as a,i as o,o as t,h as e,b as c,C as f,ao as i,S as r,X as l,bZ as b,M as m}from"./calfSystem-42f137cb.js"
import{g as h,s as x}from"./idb-6beadc2c.js"
function p(s){let a=function(s){return s||""}(s)
const o=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(o)<0&&(a=`<br>${o}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
o(a,"<br>"),function(s){let n=c("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),o(s,`<span class="fshPaleVioletRed">[ <a href="${i}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-035aa373.js.map
