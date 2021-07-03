import{I as n,bq as s,t,y as o,D as e,br as a,bs as f,z as r,bt as u,af as i,bu as m}from"./calfSystem-01849445.js"
import{g as c,b as p}from"./getBuff-cad0e6af.js"
import{f as b}from"./formatLocalDateTime-4c03aab5.js"
import{g as l,s as g}from"./idb-72291501.js"
import{x as j}from"./xPath-4a745563.js"
import"./buffObj-7ab8e1a0.js"
import"./isDate-5fc0e8bf.js"
import"./numberIsNaN-68797c81.js"
import"./padZ-b9e73e86.js"
const d=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-37fd35ea.js.map
