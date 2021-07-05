import{I as t,bn as n,t as s,y as a,D as o,bo as e,bp as f,z as r,bq as i,ad as u,br as m}from"./calfSystem-365d90f3.js"
import{g as c,b as p}from"./getBuff-b9b603ba.js"
import{f as b}from"./formatLocalDateTime-76d0f341.js"
import{g as d,s as j}from"./idb-62f64cd2.js"
import{x as g}from"./xPath-d659dac7.js"
import"./buffObj-6a194f9f.js"
import"./isDate-c0f20234.js"
import"./numberIsNaN-bf55a311.js"
import"./padZ-a45d0ad0.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),o=p(document).map(s(k,a))
j(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-cfe711f6.js.map
