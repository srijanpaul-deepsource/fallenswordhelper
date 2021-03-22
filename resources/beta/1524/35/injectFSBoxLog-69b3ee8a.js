import{c as s}from"./createSpan-8d9e047a.js"
import{z as n,j as t,i as a,o as e,h as o,b as i,C as f,be as c,W as r,X as l,bW as b,K as m}from"./calfSystem-03050396.js"
import{g as h,s as x}from"./idb-02fb3250.js"
function p(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(t)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
e(r,u),o(t,r)}function d(){const s=n("minibox-fsbox")
t()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-69b3ee8a.js.map
