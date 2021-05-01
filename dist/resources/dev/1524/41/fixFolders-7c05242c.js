import{E as o,t,ax as a}from"./calfSystem-817ceb25.js"
import{g as c,m as n}from"./monkeyBp-92063698.js"
function r(o,t){const c=`${a}ui/misc/${t}.png`
o.src!==c&&(o.src=c)}function s(o,t){t.dataset.folder===o?r(t,"folder_on"):r(t,"folder")}function f(a){o(".backpackFolderImage").forEach(t(s,String(a.folderId)))}function e(){const o=c()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-7c05242c.js.map
