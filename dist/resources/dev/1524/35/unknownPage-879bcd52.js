import{I as n,bj as s,t,y as o,D as e,bk as a,bl as f,z as r,bm as u,ad as i,bn as m}from"./calfSystem-186455ab.js"
import{g as c,b as p}from"./getBuff-fc0cef8c.js"
import{f as l}from"./formatLocalDateTime-6ee91e08.js"
import{g as b,s as g}from"./idb-97f66b86.js"
import{x as j}from"./xPath-10218fff.js"
import"./buffObj-8137966e.js"
import"./isDate-37768d15.js"
import"./numberIsNaN-1e8b4508.js"
import"./padZ-3a7e6015.js"
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
//# sourceMappingURL=unknownPage-879bcd52.js.map
