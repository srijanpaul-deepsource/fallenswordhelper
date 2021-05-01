import{I as t,bg as n,t as s,y as a,D as o,bh as e,bi as f,z as r,bj as i,ac as u,bk as c}from"./calfSystem-540da563.js"
import{g as m,b as p}from"./getBuff-0c387534.js"
import{f as b}from"./formatLocalDateTime-7acb75ce.js"
import{g as j,s as g}from"./idb-62a50947.js"
import{x as l}from"./xPath-acaa6539.js"
import"./buffObj-df8ba59f.js"
import"./isDate-497a3429.js"
import"./numberIsNaN-2764ce9c.js"
import"./padZ-827c036e.js"
const d=t=>` ${t[0]} (${function(t){const n=m(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?d(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),o=p(document).map(s(k,a))
g(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),c()}]]
function B(){if(a())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-b58ad164.js.map
