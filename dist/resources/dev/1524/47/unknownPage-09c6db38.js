import{I as n,bp as s,t,y as o,D as e,bq as a,br as f,z as r,bs as u,ae as i,bt as m}from"./calfSystem-bfc1f6c0.js"
import{g as c,b as p}from"./getBuff-6611bd1f.js"
import{f as b}from"./formatLocalDateTime-c49a8868.js"
import{g as l,s as g}from"./idb-d8a4a427.js"
import{x as d}from"./xPath-edbec341.js"
import"./buffObj-68975e43.js"
import"./isDate-3cdbefa8.js"
import"./numberIsNaN-2f104aa2.js"
import"./padZ-65ad9136.js"
const j=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-09c6db38.js.map
