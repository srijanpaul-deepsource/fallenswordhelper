import{I as t,bn as n,t as s,y as a,D as o,bo as e,bp as r,z as f,bq as i,ad as u,br as m}from"./calfSystem-2172498b.js"
import{g as p,b as c}from"./getBuff-b44926e6.js"
import{f as b}from"./formatLocalDateTime-8cffb23d.js"
import{g as j,s as g}from"./idb-35c610a0.js"
import{x as l}from"./xPath-551a088a.js"
import"./buffObj-01088e9a.js"
import"./isDate-06316630.js"
import"./numberIsNaN-9a364388.js"
import"./padZ-3a27e144.js"
const d=t=>` ${t[0]} (${function(t){const n=p(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?d(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),o=c(document).map(s(k,a))
g(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{e("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-92a1fed4.js.map
