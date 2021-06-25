import{I as t,bn as n,t as s,y as a,D as e,bo as o,bp as f,z as r,bq as i,ad as u,br as m}from"./calfSystem-db2edbef.js"
import{g as c,b as p}from"./getBuff-7461d500.js"
import{f as b}from"./formatLocalDateTime-c49a8868.js"
import{g as d,s as j}from"./idb-937dea46.js"
import{x as g}from"./xPath-bea550cb.js"
import"./buffObj-68975e43.js"
import"./isDate-3cdbefa8.js"
import"./numberIsNaN-2f104aa2.js"
import"./padZ-65ad9136.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),e=p(document).map(s(k,a))
j(n,e.reverse().join("")+t)}const B=[[()=>e(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-cf716395.js.map
