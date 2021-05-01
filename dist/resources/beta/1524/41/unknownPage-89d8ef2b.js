import{I as t,bj as n,t as s,y as e,D as o,bk as a,bl as f,z as r,bm as i,ac as u,bn as m}from"./calfSystem-587dd8d3.js"
import{g as c,b}from"./getBuff-56606306.js"
import{f as p}from"./formatLocalDateTime-cba4372d.js"
import{g as d,s as j}from"./idb-ce2f4bde.js"
import{x as l}from"./xPath-a9c030d4.js"
import"./buffObj-b5ef6b0e.js"
import"./isDate-d214871f.js"
import"./numberIsNaN-9d4c441b.js"
import"./padZ-9d438f6a.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
j(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-89d8ef2b.js.map
