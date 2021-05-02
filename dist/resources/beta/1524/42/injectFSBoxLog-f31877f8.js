import{c as s}from"./createSpan-c7e7a9e6.js"
import{z as n,j as a,i as e,o as t,h as o,b as f,C as i,aj as c,W as r,X as l,bW as b,K as m}from"./calfSystem-e76f1a7d.js"
import{g as h,s as x}from"./idb-fb8483d2.js"
function p(s){let a=function(s){return s||""}(s)
const e=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(e)<0&&(a=`<br>${e}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
e(a,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),e(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(r,u),o(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-f31877f8.js.map
