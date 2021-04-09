import{c as s}from"./createSpan-e8d911bd.js"
import{z as n,j as t,i as a,o as e,h as o,b as c,C as i,bc as f,W as r,X as l,bT as b,K as m}from"./calfSystem-7a1cce43.js"
import{g as h,s as x}from"./idb-c572d898.js"
function p(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function d(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=c("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${f}${n}">Ignore</a> ]</span> `))}(t)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
e(r,u),o(t,r)}function g(){const s=n("minibox-fsbox")
t()&&s&&d(s)}export default g
//# sourceMappingURL=injectFSBoxLog-c2aa5c82.js.map
