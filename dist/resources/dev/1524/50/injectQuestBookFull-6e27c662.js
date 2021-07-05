import{t,I as e,H as s,B as a,b as o,p as n,d as r,a0 as i}from"./calfSystem-b3667af8.js"
import{d as c}from"./dataRows-f96281bd.js"
import{g as l}from"./guideButtons-af330eca.js"
import{h as u}from"./hideElement-e21a7422.js"
import{r as f}from"./replaceDoubleSpace-96b3a615.js"
import{s as m}from"./shouldBeArray-3d5b7aae.js"
import{i as d}from"./interceptSubmit-dd886fe1.js"
import"./csvSplit-68cab542.js"
import"./formToUrl-872022b8.js"
function p(t,e){const o=f(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
u(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,u(t)}}(t,o,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
a(l(n,o),e.cells[4])}function g(s){const a=e("hideQuests")?m("hideQuestNames"):[]
c(s.rows,5,0).forEach(t(p,a))}let b,h,Q,S,j,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){x(Q,t[e]),x(S,t[e+1]),x(j,t[e+2])}function E(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(h,e[P]),B(t,0)):(x(b,e[P]),B(t,3))}function y(){e("storeLastQuestPage")&&(!function(){const e=o("a",n);[b,h,Q,S,j]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
i("lastActiveQuestPage",t),i(N[P],t)}(),E())}function C(){d(),y()
const t=o(r,n)[5]
t&&g(t)}export default C
//# sourceMappingURL=injectQuestBookFull-6e27c662.js.map
