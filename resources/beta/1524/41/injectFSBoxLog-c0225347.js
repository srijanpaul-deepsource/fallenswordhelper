import{c as s}from"./createSpan-f508c88b.js"
import{z as n,j as t,i as a,o as e,h as o,b as f,C as i,aj as c,W as r,X as l,bW as b,K as m}from"./calfSystem-587dd8d3.js"
import{g as h,s as x}from"./idb-ce2f4bde.js"
function d(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function p(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function u(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(d),n=i(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(t)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
e(r,p),o(t,r)}function g(){const s=n("minibox-fsbox")
t()&&s&&u(s)}export default g
//# sourceMappingURL=injectFSBoxLog-c0225347.js.map
