import{I as t,bi as n,t as s,y as a,D as e,bj as o,bk as f,z as r,bl as i,ac as u,bm as m}from"./calfSystem-ab393688.js"
import{g as c,b}from"./getBuff-dcbedff2.js"
import{f as p}from"./formatLocalDateTime-7acb75ce.js"
import{g as j,s as l}from"./idb-4a088c10.js"
import{x as d}from"./xPath-93b05a8f.js"
import"./buffObj-df8ba59f.js"
import"./isDate-497a3429.js"
import"./numberIsNaN-2764ce9c.js"
import"./padZ-827c036e.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=p(new Date),e=b(document).map(s(k,a))
l(n,e.reverse().join("")+t)}const B=[[()=>e(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-5426574b.js.map
