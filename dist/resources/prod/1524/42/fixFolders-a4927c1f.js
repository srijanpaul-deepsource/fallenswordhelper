import{E as o,t as a,au as t}from"./calfSystem-15b00143.js"
import{g as f,m as n}from"./monkeyBp-07dba7f9.js"
function r(o,a){const f=`${t}ui/misc/${a}.png`
o.src!==f&&(o.src=f)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function c(t){o(".backpackFolderImage").forEach(a(s,String(t.folderId)))}function e(){const o=f()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-a4927c1f.js.map
