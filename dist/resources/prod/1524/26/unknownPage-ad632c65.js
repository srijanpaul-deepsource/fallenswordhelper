import{D as e,G as n,H as t,bs as s,t as a,x as o,C as r,bC as i,bD as f,y as u,bE as c,a9 as m,bF as l}from"./calfSystem-a5fc99d4.js"
import"./numberIsNaN-a6bcb044.js"
import{g as p,s as b}from"./idb-b13ab254.js"
import"./isDate-622067da.js"
import"./padZ-f9e33f92.js"
import{f as d}from"./formatLocalDateTime-09429320.js"
import{x as w}from"./xPath-80caec36.js"
import{b as k}from"./buffObj-edd5c6f3.js"
let g
function h(e){return g.exec(e)}function j(t){g||(g=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return k.find(n=>n.name===e)}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var s
return t=n[1]?` ${(s=n)[0]} (${v(s[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function D(e){const n=d(new Date),t=j(document).map(a(x,n))
b(s,t.reverse().join("")+e)}const y=[[()=>r(".news_left_column"),()=>{i("unknown.news"),f()}],[()=>u("quickbuff-report"),()=>{i("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&p(s).then(D)}],[()=>w('//td[.="Quest Name"]'),()=>{i("unknown.questBook.injectQuestBookFull"),c()}],[()=>m('#pCC img[title="Inventing"]').length>0,()=>{i("unknown.recipes.inventing"),l()}]]
function B(){if(o())return
const e=y.find(e=>e[0]())
e&&e[1]()}export default B
//# sourceMappingURL=unknownPage-ad632c65.js.map
