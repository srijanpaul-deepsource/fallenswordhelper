import{E as o,t,au as a}from"./calfSystem-030d7057.js"
import{g as f,m as n}from"./monkeyBp-f8e349de.js"
function r(o,t){const f=`${a}ui/misc/${t}.png`
o.src!==f&&(o.src=f)}function s(o,t){t.dataset.folder===o?r(t,"folder_on"):r(t,"folder")}function c(a){o(".backpackFolderImage").forEach(t(s,String(a.folderId)))}function e(){const o=f()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-212def5b.js.map
