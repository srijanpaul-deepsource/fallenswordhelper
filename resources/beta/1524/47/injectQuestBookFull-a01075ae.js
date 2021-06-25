import{t,I as e,H as s,B as o,b as a,p as n,d as r,Z as i}from"./calfSystem-db2edbef.js"
import{d as c}from"./dataRows-75ebbe50.js"
import{g as l}from"./guideButtons-461486ae.js"
import{h as u}from"./hideElement-7486432a.js"
import{r as f}from"./replaceDoubleSpace-9eaa0aad.js"
import{s as m}from"./shouldBeArray-42b75ace.js"
import{i as d}from"./interceptSubmit-37405c90.js"
import"./csvSplit-e3b3e000.js"
import"./formToUrl-b338bcd1.js"
function p(t,e){const a=f(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
u(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,u(t)}}(t,a,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
o(l(n,a),e.cells[4])}function b(s){const o=e("hideQuests")?m("hideQuestNames"):[]
c(s.rows,5,0).forEach(t(p,o))}let g,h,Q,S,j,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){x(Q,t[e]),x(S,t[e+1]),x(j,t[e+2])}function E(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(h,e[P]),B(t,0)):(x(g,e[P]),B(t,3))}function y(){e("storeLastQuestPage")&&(!function(){const e=a("a",n);[g,h,Q,S,j]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
i("lastActiveQuestPage",t),i(N[P],t)}(),E())}function C(){d(),y()
const t=a(r,n)[5]
t&&b(t)}export default C
//# sourceMappingURL=injectQuestBookFull-a01075ae.js.map
