import{E as o,t as a,aA as f}from"./calfSystem-365d90f3.js"
import{g as t,m as c}from"./monkeyBp-9e1fa7bc.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-080aab6b.js.map
