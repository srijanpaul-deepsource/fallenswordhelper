import{I as t,bg as n,t as s,y as e,D as o,bh as a,bi as f,z as r,bj as i,ac as u,bk as m}from"./calfSystem-fe0ebf32.js"
import{g as c,b}from"./getBuff-4d87556a.js"
import{f as p}from"./formatLocalDateTime-6ee91e08.js"
import{g as j,s as d}from"./idb-b0de0ac7.js"
import{x as g}from"./xPath-dfb7ca5b.js"
import"./buffObj-8137966e.js"
import"./isDate-37768d15.js"
import"./numberIsNaN-1e8b4508.js"
import"./padZ-3a7e6015.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
d(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(e())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-c86d19be.js.map
