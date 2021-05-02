import{I as n,bk as s,t,y as o,D as a,bl as e,bm as f,z as r,bn as u,ad as i,bo as m}from"./calfSystem-4b6b865d.js"
import{g as c,b}from"./getBuff-1faf4a88.js"
import{f as p}from"./formatLocalDateTime-7dbf592b.js"
import{g as l,s as g}from"./idb-a46a6973.js"
import{x as d}from"./xPath-2059ae9a.js"
import"./buffObj-c023bfe0.js"
import"./isDate-0659c8ad.js"
import"./numberIsNaN-484c0124.js"
import"./padZ-babdd575.js"
const j=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=p(new Date),a=b(document).map(t(k,o))
g(s,a.reverse().join("")+n)}const h=[[()=>a(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-55567cca.js.map
