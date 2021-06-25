import{E as o,t as a,aA as t}from"./calfSystem-db2edbef.js"
import{g as c,m as f}from"./monkeyBp-0ca16306.js"
function n(o,a){const c=`${t}ui/misc/${a}.png`
o.src!==c&&(o.src=c)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(t){o(".backpackFolderImage").forEach(a(r,String(t.folderId)))}function e(){const o=c()
o&&f(o,s)}export default e
//# sourceMappingURL=fixFolders-a747dbf7.js.map
