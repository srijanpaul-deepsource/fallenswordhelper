import{t,H as e,G as s,A as o,b as a,p as n,d as r,Y as i}from"./calfSystem-a5fc99d4.js"
import{d as c}from"./dataRows-27d1816d.js"
import{h as l}from"./hideElement-891c9603.js"
import"./formToUrl-287ebfb7.js"
import{i as u}from"./interceptSubmit-1ba9df73.js"
import{g as f}from"./guideButtons-00d2daab.js"
import{r as m}from"./replaceDoubleSpace-3242d7f7.js"
import"./csvSplit-653f6227.js"
import{s as d}from"./shouldBeArray-920759e1.js"
function p(t,e){const a=m(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
l(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,l(t)}}(t,a,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
o(f(n,a),e.cells[4])}function g(s){const o=e("hideQuests")?d("hideQuestNames"):[]
c(s.rows,5,0).forEach(t(p,o))}let b,h,Q,S,j,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function E(t,e){x(Q,t[e]),x(S,t[e+1]),x(j,t[e+2])}function y(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(h,e[P]),E(t,0)):(x(b,e[P]),E(t,3))}function B(){e("storeLastQuestPage")&&(!function(){const e=a("a",n);[b,h,Q,S,j]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
i("lastActiveQuestPage",t),i(N[P],t)}(),y())}function C(){u(),B()
const t=a(r,n)[5]
t&&g(t)}export default C
//# sourceMappingURL=injectQuestBookFull-76dda762.js.map
