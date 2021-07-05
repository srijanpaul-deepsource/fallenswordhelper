import{a as t}from"./addLogColoring-86e27d9d.js"
import{a as e}from"./addLogWidgets-19bd3e96.js"
import{S as o,f as s,p as r,o as a,N as i,O as m}from"./calfSystem-b3667af8.js"
import"./createStyle-7b65d830.js"
import"./dataRows-f96281bd.js"
import"./doBuffLinkClick-cf8bd0f0.js"
import"./openQuickBuffByName-18de8163.js"
import"./fshOpen-90a0d847.js"
import"./parseDateAsTimestamp-b763f22d.js"
import"./insertHtmlAfterEnd-b696788c.js"
import"./currentGuildId-01980e74.js"
import"./getMembrList-1d170c53.js"
import"./cmdExport-31421fb2.js"
import"./indexAjaxJson-79cecebf.js"
import"./idb-22dd2687.js"
import"./closestTr-868b7fea.js"
import"./closest-06418423.js"
import"./addCommas-b66fde4c.js"
import"./myStats-dce07744.js"
import"./getProfile-61bb15d7.js"
import"./playerName-8bccbcca.js"
let p,d,c,f
const n=[["All",()=>""],["<",()=>`${c}${d}`],[">",()=>`${f}${d}`]]
function j(t){if("INPUT"!==t.target.tagName)return
const e=n.find((([e])=>e===t.target.value))
e&&(t.stopPropagation(),i(`${m}?cmd=log${e[1]()}`))}function b(t){t.preventDefault()
const e=new URLSearchParams(new FormData(t.target))
e.get("type")!==p&&e.delete("type"),i(`${m}?${e.toString()}`)}function g(){t("PlayerLog",1,3),e(),function(){p=o("type"),d=p?`&type=${p}`:""
const t=o("page")
c=t?"&page="+(Number(t)-1):"",f=t?`&page=${Number(t)+1}`:"&page=2",s(r,"submit",b),a(r,j,!0)}()}export default g
//# sourceMappingURL=playerLog-3c04134e.js.map
