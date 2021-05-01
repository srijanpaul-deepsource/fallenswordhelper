import{E as o,t as c,aw as t}from"./calfSystem-c464cb1d.js"
import{g as a,m as n}from"./monkeyBp-388dc5e1.js"
function r(o,c){const a=`${t}ui/misc/${c}.png`
o.src!==a&&(o.src=a)}function s(o,c){c.dataset.folder===o?r(c,"folder_on"):r(c,"folder")}function f(t){o(".backpackFolderImage").forEach(c(s,String(t.folderId)))}function e(){const o=a()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-5daa1ebe.js.map
