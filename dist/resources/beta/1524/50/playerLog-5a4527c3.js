import{a as t}from"./addLogColoring-6257b1c4.js"
import{a as e}from"./addLogWidgets-28c48264.js"
import{R as a,f as o,p as s,o as r,N as i,O as m}from"./calfSystem-617f9a5d.js"
import"./createStyle-b99b7d2e.js"
import"./dataRows-525495e8.js"
import"./doBuffLinkClick-c2f64080.js"
import"./openQuickBuffByName-a794d2ad.js"
import"./fshOpen-90a0d847.js"
import"./parseDateAsTimestamp-874ef6fd.js"
import"./insertHtmlAfterEnd-b1e65dcb.js"
import"./currentGuildId-3b40ad81.js"
import"./getMembrList-331ed151.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./idb-443c992c.js"
import"./closestTr-bf59743f.js"
import"./closest-06418423.js"
import"./addCommas-b66fde4c.js"
import"./myStats-a71050f1.js"
import"./getProfile-50ff6571.js"
import"./playerName-90c8eb43.js"
let p,f,d,n
const c=[["All",()=>""],["<",()=>`${d}${f}`],[">",()=>`${n}${f}`]]
function j(t){if("INPUT"!==t.target.tagName)return
const e=c.find((([e])=>e===t.target.value))
e&&(t.stopPropagation(),i(`${m}?cmd=log${e[1]()}`))}function g(t){t.preventDefault()
const e=new URLSearchParams(new FormData(t.target))
e.get("type")!==p&&e.delete("type"),i(`${m}?${e.toString()}`)}function l(){t("PlayerLog",1,3),e(),function(){p=a("type"),f=p?`&type=${p}`:""
const t=a("page")
d=t?"&page="+(Number(t)-1):"",n=t?`&page=${Number(t)+1}`:"&page=2",o(s,"submit",g),r(s,j,!0)}()}export default l
//# sourceMappingURL=playerLog-5a4527c3.js.map
