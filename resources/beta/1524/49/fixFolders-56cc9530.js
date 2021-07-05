import{E as o,t as a,aB as c}from"./calfSystem-42f137cb.js"
import{g as f,m as t}from"./monkeyBp-41ca98af.js"
function n(o,a){const f=`${c}ui/misc/${a}.png`
o.src!==f&&(o.src=f)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(c){o(".backpackFolderImage").forEach(a(r,String(c.folderId)))}function e(){const o=f()
o&&t(o,s)}export default e
//# sourceMappingURL=fixFolders-56cc9530.js.map
