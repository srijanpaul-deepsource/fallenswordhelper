import{E as o,t as a,al as f}from"./calfSystem-fe0ebf32.js"
import{g as t,m as c}from"./monkeyBp-b2bd54ca.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-f8f58963.js.map
