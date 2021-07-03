import{E as o,t as a,aB as t}from"./calfSystem-8af1dca2.js"
import{g as c,m as f}from"./monkeyBp-7e4ed181.js"
function n(o,a){const c=`${t}ui/misc/${a}.png`
o.src!==c&&(o.src=c)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(t){o(".backpackFolderImage").forEach(a(r,String(t.folderId)))}function e(){const o=c()
o&&f(o,s)}export default e
//# sourceMappingURL=fixFolders-608e3925.js.map
