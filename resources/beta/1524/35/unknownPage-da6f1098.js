import{I as t,bi as n,t as s,y as e,D as o,bj as a,bk as f,z as r,bl as i,ac as u,bm as m}from"./calfSystem-03050396.js"
import{g as p,b as c}from"./getBuff-b69df2e6.js"
import{f as b}from"./formatLocalDateTime-6ee91e08.js"
import{g as j,s as l}from"./idb-02fb3250.js"
import{x as d}from"./xPath-a88d3938.js"
import"./buffObj-8137966e.js"
import"./isDate-37768d15.js"
import"./numberIsNaN-1e8b4508.js"
import"./padZ-3a7e6015.js"
const g=t=>` ${t[0]} (${function(t){const n=p(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=b(new Date),o=c(document).map(s(k,e))
l(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-da6f1098.js.map
