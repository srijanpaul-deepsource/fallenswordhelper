import{I as t,bh as n,t as s,y as e,D as o,bi as a,bj as f,z as r,bk as i,ac as u,bl as m}from"./calfSystem-030d7057.js"
import{g as c,b}from"./getBuff-0dc05702.js"
import{f as p}from"./formatLocalDateTime-cba4372d.js"
import{g as d,s as j}from"./idb-ab72cbe2.js"
import{x as l}from"./xPath-7e956333.js"
import"./buffObj-b5ef6b0e.js"
import"./isDate-d214871f.js"
import"./numberIsNaN-9d4c441b.js"
import"./padZ-9d438f6a.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
j(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(e())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-a7c7c60c.js.map
