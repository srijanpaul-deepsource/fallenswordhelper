import{E as o,t,ax as a}from"./calfSystem-4b6b865d.js"
import{g as c,m as n}from"./monkeyBp-76667c39.js"
function r(o,t){const c=`${a}ui/misc/${t}.png`
o.src!==c&&(o.src=c)}function s(o,t){t.dataset.folder===o?r(t,"folder_on"):r(t,"folder")}function f(a){o(".backpackFolderImage").forEach(t(s,String(a.folderId)))}function e(){const o=c()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-e31ad3bf.js.map
