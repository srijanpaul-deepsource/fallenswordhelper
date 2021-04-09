import{I as n,bj as s,t,y as o,D as e,bk as a,bl as f,z as r,bm as u,ad as i,bn as m}from"./calfSystem-d56087e1.js"
import{g as b,b as c}from"./getBuff-ffbbb102.js"
import{f as p}from"./formatLocalDateTime-206840d8.js"
import{g as l,s as d}from"./idb-a1e4e2c2.js"
import{x as g}from"./xPath-8fdf271b.js"
import"./buffObj-ba1e1602.js"
import"./isDate-d24d25bc.js"
import"./numberIsNaN-30cde299.js"
import"./padZ-8b68b081.js"
const j=n=>` ${n[0]} (${function(n){const s=b(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=p(new Date),e=c(document).map(t(k,o))
d(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-b27a8a31.js.map
