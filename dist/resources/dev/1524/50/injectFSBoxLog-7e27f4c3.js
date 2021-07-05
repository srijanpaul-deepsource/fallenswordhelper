import{c as s}from"./createSpan-a8a5c715.js"
import{z as n,j as a,i as t,o,h as e,b as i,C as f,ap as c,T as r,Y as l,b_ as b,M as m}from"./calfSystem-b3667af8.js"
import{g as h,s as p}from"./idb-22dd2687.js"
function x(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),p("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(x),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-7e27f4c3.js.map
