import{c as s}from"./createSpan-8048fffb.js"
import{z as n,j as t,i as a,o,h as e,b as f,C as i,bf as c,X as r,Y as b,bX as l,K as m}from"./calfSystem-186455ab.js"
import{g as h,s as x}from"./idb-97f66b86.js"
function p(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){r("injectFSBoxLog","injectFsBoxContent"),b(l)}function g(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(t)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(t,r)}function j(){const s=n("minibox-fsbox")
t()&&s&&g(s)}export default j
//# sourceMappingURL=injectFSBoxLog-143d0c8a.js.map
