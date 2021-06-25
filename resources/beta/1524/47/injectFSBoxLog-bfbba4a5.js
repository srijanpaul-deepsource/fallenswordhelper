import{c as s}from"./createSpan-8ddb7122.js"
import{z as n,j as a,i as e,o as t,h as o,b as i,C as f,an as c,S as r,W as l,bZ as b,M as m}from"./calfSystem-db2edbef.js"
import{g as h,s as d}from"./idb-937dea46.js"
function x(s){let a=function(s){return s||""}(s)
const e=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(e)<0&&(a=`<br>${e}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),d("fsh_fsboxcontent",a)}function p(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function u(n){const a=n.lastElementChild
e(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(x),n=f(n[0]),e(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(r,p),o(a,r)}function g(){const s=n("minibox-fsbox")
a()&&s&&u(s)}export default g
//# sourceMappingURL=injectFSBoxLog-bfbba4a5.js.map
