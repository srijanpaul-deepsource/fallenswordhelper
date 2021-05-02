import{I as t,bj as n,t as s,y as o,D as e,bk as a,bl as f,z as r,bm as i,ac as u,bn as m}from"./calfSystem-e76f1a7d.js"
import{g as c,b}from"./getBuff-f0670089.js"
import{f as p}from"./formatLocalDateTime-7dbf592b.js"
import{g as d,s as j}from"./idb-fb8483d2.js"
import{x as l}from"./xPath-6c15378e.js"
import"./buffObj-c023bfe0.js"
import"./isDate-0659c8ad.js"
import"./numberIsNaN-484c0124.js"
import"./padZ-babdd575.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const o=p(new Date),e=b(document).map(s(k,o))
j(n,e.reverse().join("")+t)}const B=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(o())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-3da7c6f7.js.map
