import{I as t,bo as s,t as n,y as e,D as a,bp as o,bq as f,z as r,br as i,ae as u,bs as m}from"./calfSystem-42f137cb.js"
import{g as c,b as p}from"./getBuff-ff78a0c8.js"
import{f as b}from"./formatLocalDateTime-8cffb23d.js"
import{g as j,s as g}from"./idb-6beadc2c.js"
import{x as l}from"./xPath-eb9672ae.js"
import"./buffObj-01088e9a.js"
import"./isDate-06316630.js"
import"./numberIsNaN-9a364388.js"
import"./padZ-3a27e144.js"
const d=t=>` ${t[0]} (${function(t){const s=c(t)
return s?s.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,s){let n
return n=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,t+n}function w(t){const e=b(new Date),a=p(document).map(n(k,e))
g(s,a.reverse().join("")+t)}const B=[[()=>a(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(s).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-44e44e59.js.map
