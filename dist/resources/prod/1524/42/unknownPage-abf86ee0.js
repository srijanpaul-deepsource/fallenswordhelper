import{I as t,bh as n,t as s,y as e,D as o,bi as a,bj as f,z as r,bk as i,ac as u,bl as m}from"./calfSystem-15b00143.js"
import{g as c,b}from"./getBuff-1d60a7be.js"
import{f as p}from"./formatLocalDateTime-7dbf592b.js"
import{g as d,s as j}from"./idb-1c9eb1ac.js"
import{x as l}from"./xPath-6006d2e0.js"
import"./buffObj-c023bfe0.js"
import"./isDate-0659c8ad.js"
import"./numberIsNaN-484c0124.js"
import"./padZ-babdd575.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
j(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(e())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-abf86ee0.js.map
