import{I as n,bq as s,t,y as o,D as e,br as a,bs as f,z as r,bt as u,af as i,bu as m}from"./calfSystem-9ab64478.js"
import{g as c,b as p}from"./getBuff-8f664a72.js"
import{f as l}from"./formatLocalDateTime-8cffb23d.js"
import{g as b,s as g}from"./idb-9da90398.js"
import{x as j}from"./xPath-e166d860.js"
import"./buffObj-01088e9a.js"
import"./isDate-06316630.js"
import"./numberIsNaN-9a364388.js"
import"./padZ-3a27e144.js"
const d=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=l(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&b(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-1e9f40ea.js.map
