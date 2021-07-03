import{I as t,bn as n,t as s,y as a,D as o,bo as e,bp as f,z as r,bq as i,ad as u,br as m}from"./calfSystem-85fa6364.js"
import{g as c,b as p}from"./getBuff-5d394ff5.js"
import{f as b}from"./formatLocalDateTime-4c03aab5.js"
import{g as d,s as j}from"./idb-160add45.js"
import{x as g}from"./xPath-a616db48.js"
import"./buffObj-7ab8e1a0.js"
import"./isDate-5fc0e8bf.js"
import"./numberIsNaN-68797c81.js"
import"./padZ-b9e73e86.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),o=p(document).map(s(k,a))
j(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-a631a86a.js.map
