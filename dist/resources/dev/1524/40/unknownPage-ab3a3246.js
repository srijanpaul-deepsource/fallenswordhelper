import{I as n,bj as s,t,y as o,D as e,bk as a,bl as r,z as f,bm as u,ad as i,bn as c}from"./calfSystem-c464cb1d.js"
import{g as m,b as p}from"./getBuff-b26386c9.js"
import{f as b}from"./formatLocalDateTime-7acb75ce.js"
import{g as l,s as g}from"./idb-870991e0.js"
import{x as j}from"./xPath-31894e4a.js"
import"./buffObj-df8ba59f.js"
import"./isDate-497a3429.js"
import"./numberIsNaN-2764ce9c.js"
import"./padZ-827c036e.js"
const d=n=>` ${n[0]} (${function(n){const s=m(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),c()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-ab3a3246.js.map
