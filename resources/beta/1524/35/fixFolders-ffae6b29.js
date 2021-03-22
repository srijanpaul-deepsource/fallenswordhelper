import{E as o,t as a,an as n}from"./calfSystem-03050396.js"
import{g as t,m as r}from"./monkeyBp-e1a50e09.js"
function s(o,a){const t=`${n}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function c(o,a){a.dataset.folder===o?s(a,"folder_on"):s(a,"folder")}function e(n){o(".backpackFolderImage").forEach(a(c,String(n.folderId)))}function f(){const o=t()
o&&r(o,e)}export default f
//# sourceMappingURL=fixFolders-ffae6b29.js.map
