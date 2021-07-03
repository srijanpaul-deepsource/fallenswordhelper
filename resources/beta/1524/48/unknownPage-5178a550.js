import{I as t,bo as s,t as n,y as e,D as a,bp as o,bq as f,z as r,br as i,ae as u,bs as m}from"./calfSystem-8af1dca2.js"
import{g as c,b}from"./getBuff-d3b42e1e.js"
import{f as p}from"./formatLocalDateTime-4c03aab5.js"
import{g as j,s as d}from"./idb-30d71a28.js"
import{x as g}from"./xPath-39740b5f.js"
import"./buffObj-7ab8e1a0.js"
import"./isDate-5fc0e8bf.js"
import"./numberIsNaN-68797c81.js"
import"./padZ-b9e73e86.js"
const l=t=>` ${t[0]} (${function(t){const s=c(t)
return s?s.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,s){let n
return n=s[1]?l(s):` <span class="fshRed">${s[0]}</span><br>`,t+n}function w(t){const e=p(new Date),a=b(document).map(n(k,e))
d(s,a.reverse().join("")+t)}const B=[[()=>a(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(s).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-5178a550.js.map
