import{E as o,t as a,am as f}from"./calfSystem-71efcdd9.js"
import{g as t,m as c}from"./monkeyBp-dbba2f88.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-ac08e48c.js.map
