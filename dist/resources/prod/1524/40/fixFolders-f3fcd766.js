import{E as o,t,at as a}from"./calfSystem-540da563.js"
import{g as f,m as n}from"./monkeyBp-6f352474.js"
function r(o,t){const f=`${a}ui/misc/${t}.png`
o.src!==f&&(o.src=f)}function s(o,t){t.dataset.folder===o?r(t,"folder_on"):r(t,"folder")}function c(a){o(".backpackFolderImage").forEach(t(s,String(a.folderId)))}function e(){const o=f()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-f3fcd766.js.map
