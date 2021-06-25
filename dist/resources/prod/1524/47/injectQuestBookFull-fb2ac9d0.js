import{t,I as e,H as s,B as a,b as o,p as n,d as r,Z as i}from"./calfSystem-a2fd9017.js"
import{d as c}from"./dataRows-15e7a209.js"
import{g as l}from"./guideButtons-2619e380.js"
import{h as u}from"./hideElement-7486432a.js"
import{r as f}from"./replaceDoubleSpace-9eaa0aad.js"
import{s as m}from"./shouldBeArray-830599fd.js"
import{i as d}from"./interceptSubmit-ce135195.js"
import"./csvSplit-e3b3e000.js"
import"./formToUrl-a8a254b6.js"
function p(t,e){const o=f(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
u(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,u(t)}}(t,o,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
a(l(n,o),e.cells[4])}function g(s){const a=e("hideQuests")?m("hideQuestNames"):[]
c(s.rows,5,0).forEach(t(p,a))}let h,Q,S,j,b,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){x(S,t[e]),x(j,t[e+1]),x(b,t[e+2])}function E(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(Q,e[P]),B(t,0)):(x(h,e[P]),B(t,3))}function y(){e("storeLastQuestPage")&&(!function(){const e=o("a",n);[h,Q,S,j,b]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
i("lastActiveQuestPage",t),i(N[P],t)}(),E())}function C(){d(),y()
const t=o(r,n)[5]
t&&g(t)}export default C
//# sourceMappingURL=injectQuestBookFull-fb2ac9d0.js.map
