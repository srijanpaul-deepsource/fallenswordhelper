import{E as o,t as a,aC as t}from"./calfSystem-b3667af8.js"
import{g as f,m as n}from"./monkeyBp-4a7b6497.js"
function r(o,a){const f=`${t}ui/misc/${a}.png`
o.src!==f&&(o.src=f)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function c(t){o(".backpackFolderImage").forEach(a(s,String(t.folderId)))}function e(){const o=f()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-4bfa5adc.js.map
