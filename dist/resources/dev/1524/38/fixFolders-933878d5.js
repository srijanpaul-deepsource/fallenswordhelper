import{E as o,t as a,an as n}from"./calfSystem-d56087e1.js"
import{g as t,m as r}from"./monkeyBp-da09b960.js"
function s(o,a){const t=`${n}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function c(o,a){a.dataset.folder===o?s(a,"folder_on"):s(a,"folder")}function f(n){o(".backpackFolderImage").forEach(a(c,String(n.folderId)))}function e(){const o=t()
o&&r(o,f)}export default e
//# sourceMappingURL=fixFolders-933878d5.js.map
