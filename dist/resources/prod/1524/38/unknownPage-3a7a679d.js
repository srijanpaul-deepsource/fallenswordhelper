import{I as t,bg as n,t as s,y as e,D as o,bh as a,bi as f,z as r,bj as i,ac as u,bk as c}from"./calfSystem-7a1cce43.js"
import{g as m,b}from"./getBuff-bdfce3d1.js"
import{f as p}from"./formatLocalDateTime-206840d8.js"
import{g as d,s as j}from"./idb-c572d898.js"
import{x as g}from"./xPath-fc232c7b.js"
import"./buffObj-ba1e1602.js"
import"./isDate-d24d25bc.js"
import"./numberIsNaN-30cde299.js"
import"./padZ-8b68b081.js"
const l=t=>` ${t[0]} (${function(t){const n=m(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
j(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),c()}]]
function B(){if(e())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-3a7a679d.js.map
