import{I as e,a8 as n,D as t,bE as s,s as a,w as o,M as r,bO as i,bP as f,x as u,bQ as c,a7 as m,bR as l}from"./calfSystem-02ae8657.js"
import"./numberIsNaN-0b348b17.js"
import{g as p,s as b}from"./idb-ac1635f3.js"
import"./isDate-096ce629.js"
import"./padZ-ee453f37.js"
import{f as w}from"./formatLocalDateTime-4906ffbc.js"
import{x as d}from"./xPath-a12e1d13.js"
import{b as k}from"./buffObj-be32ed36.js"
let g
function h(e){return g.exec(e)}function j(t){g||(g=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return k.find(n=>n.name===e)}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var s
return t=n[1]?` ${(s=n)[0]} (${v(s[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function B(e){const n=w(new Date),t=j(document).map(a(x,n))
b(s,t.reverse().join("")+e)}const D=[[()=>r(".news_left_column"),()=>{i("unknown.news"),f()}],[()=>u("quickbuff-report"),()=>{i("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&p(s).then(B)}],[()=>d('//td[.="Quest Name"]'),()=>{i("unknown.questBook.injectQuestBookFull"),c()}],[()=>m('#pCC img[title="Inventing"]').length>0,()=>{i("unknown.recipes.inventing"),l()}]]
export default function(){if(o())return
const e=D.find(e=>e[0]())
e&&e[1]()}
//# sourceMappingURL=unknownPage-514ae7dd.js.map