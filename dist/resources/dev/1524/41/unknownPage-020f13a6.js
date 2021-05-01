import{I as n,bk as s,t,y as o,D as e,bl as a,bm as f,z as r,bn as u,ad as i,bo as m}from"./calfSystem-817ceb25.js"
import{g as c,b}from"./getBuff-1bc393fe.js"
import{f as p}from"./formatLocalDateTime-cba4372d.js"
import{g as l,s as g}from"./idb-104727d0.js"
import{x as d}from"./xPath-185a5854.js"
import"./buffObj-b5ef6b0e.js"
import"./isDate-d214871f.js"
import"./numberIsNaN-9d4c441b.js"
import"./padZ-9d438f6a.js"
const j=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=p(new Date),e=b(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-020f13a6.js.map
