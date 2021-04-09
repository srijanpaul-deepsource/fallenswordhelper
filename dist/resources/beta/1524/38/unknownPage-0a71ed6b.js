import{I as t,bi as n,t as s,y as e,D as o,bj as a,bk as f,z as r,bl as i,ac as u,bm as m}from"./calfSystem-71efcdd9.js"
import{g as c,b}from"./getBuff-ffe4545c.js"
import{f as p}from"./formatLocalDateTime-206840d8.js"
import{g as d,s as j}from"./idb-3de49256.js"
import{x as l}from"./xPath-bb0cec42.js"
import"./buffObj-ba1e1602.js"
import"./isDate-d24d25bc.js"
import"./numberIsNaN-30cde299.js"
import"./padZ-8b68b081.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
j(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-0a71ed6b.js.map
