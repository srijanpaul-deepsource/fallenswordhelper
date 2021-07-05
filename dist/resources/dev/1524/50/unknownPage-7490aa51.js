import{I as n,bq as s,t,y as o,D as a,br as e,bs as f,z as r,bt as u,af as i,bu as m}from"./calfSystem-b3667af8.js"
import{g as c,b as p}from"./getBuff-2af74fed.js"
import{f as l}from"./formatLocalDateTime-76d0f341.js"
import{g as b,s as d}from"./idb-22dd2687.js"
import{x as g}from"./xPath-c9d4c970.js"
import"./buffObj-6a194f9f.js"
import"./isDate-c0f20234.js"
import"./numberIsNaN-bf55a311.js"
import"./padZ-a45d0ad0.js"
const j=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=l(new Date),a=p(document).map(t(k,o))
d(s,a.reverse().join("")+n)}const h=[[()=>a(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&b(s).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-7490aa51.js.map
