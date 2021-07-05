import{I as t,bo as s,t as n,y as o,D as a,bp as e,bq as f,z as r,br as i,ae as u,bs as m}from"./calfSystem-617f9a5d.js"
import{g as c,b as p}from"./getBuff-170bf92d.js"
import{f as b}from"./formatLocalDateTime-76d0f341.js"
import{g as d,s as j}from"./idb-443c992c.js"
import{x as g}from"./xPath-8c274ffb.js"
import"./buffObj-6a194f9f.js"
import"./isDate-c0f20234.js"
import"./numberIsNaN-bf55a311.js"
import"./padZ-a45d0ad0.js"
const l=t=>` ${t[0]} (${function(t){const s=c(t)
return s?s.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,s){let n
return n=s[1]?l(s):` <span class="fshRed">${s[0]}</span><br>`,t+n}function w(t){const o=b(new Date),a=p(document).map(n(k,o))
j(s,a.reverse().join("")+t)}const B=[[()=>a(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(s).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(o())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-9da4865b.js.map
