import{I as t,bl as n,t as s,y as a,D as o,bm as e,bn as f,z as r,bo as i,ad as u,bp as m}from"./calfSystem-a2fd9017.js"
import{g as p,b as c}from"./getBuff-30791aa6.js"
import{f as b}from"./formatLocalDateTime-c49a8868.js"
import{g as d,s as j}from"./idb-09e8fa3a.js"
import{x as l}from"./xPath-ab263bb7.js"
import"./buffObj-68975e43.js"
import"./isDate-3cdbefa8.js"
import"./numberIsNaN-2f104aa2.js"
import"./padZ-65ad9136.js"
const g=t=>` ${t[0]} (${function(t){const n=p(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),o=c(document).map(s(k,a))
j(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-f36b1bb3.js.map
