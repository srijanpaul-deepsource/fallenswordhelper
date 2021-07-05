import{a as t}from"./addLogColoring-d11047f8.js"
import{a as e}from"./addLogWidgets-1765e219.js"
import{R as o,f as a,p as s,o as r,N as i,O as m}from"./calfSystem-365d90f3.js"
import"./createStyle-ed7b9ea6.js"
import"./dataRows-be19a2f8.js"
import"./doBuffLinkClick-d299b76c.js"
import"./openQuickBuffByName-586c4bc1.js"
import"./fshOpen-90a0d847.js"
import"./parseDateAsTimestamp-89678ec4.js"
import"./insertHtmlAfterEnd-f8bb4356.js"
import"./currentGuildId-605c07b2.js"
import"./getMembrList-4826cb4a.js"
import"./cmdExport-16d6b4f1.js"
import"./indexAjaxJson-81a9c061.js"
import"./idb-62f64cd2.js"
import"./closestTr-75f82cf0.js"
import"./closest-06418423.js"
import"./addCommas-b66fde4c.js"
import"./myStats-3aa6ebcb.js"
import"./getProfile-21cc29b6.js"
import"./playerName-17f8d780.js"
let p,c,f,d
const n=[["All",()=>""],["<",()=>`${f}${c}`],[">",()=>`${d}${c}`]]
function j(t){if("INPUT"!==t.target.tagName)return
const e=n.find((([e])=>e===t.target.value))
e&&(t.stopPropagation(),i(`${m}?cmd=log${e[1]()}`))}function g(t){t.preventDefault()
const e=new URLSearchParams(new FormData(t.target))
e.get("type")!==p&&e.delete("type"),i(`${m}?${e.toString()}`)}function l(){t("PlayerLog",1,3),e(),function(){p=o("type"),c=p?`&type=${p}`:""
const t=o("page")
f=t?"&page="+(Number(t)-1):"",d=t?`&page=${Number(t)+1}`:"&page=2",a(s,"submit",g),r(s,j,!0)}()}export default l
//# sourceMappingURL=playerLog-93456ce7.js.map
