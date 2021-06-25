import{E as o,t as c,aB as f}from"./calfSystem-bfc1f6c0.js"
import{g as t,m as a}from"./monkeyBp-b08569d1.js"
function n(o,c){const t=`${f}ui/misc/${c}.png`
o.src!==t&&(o.src=t)}function r(o,c){c.dataset.folder===o?n(c,"folder_on"):n(c,"folder")}function s(f){o(".backpackFolderImage").forEach(c(r,String(f.folderId)))}function e(){const o=t()
o&&a(o,s)}export default e
//# sourceMappingURL=fixFolders-95c989b0.js.map
