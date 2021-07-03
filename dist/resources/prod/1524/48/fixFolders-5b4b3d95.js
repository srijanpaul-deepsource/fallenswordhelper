import{E as o,t as a,aA as f}from"./calfSystem-85fa6364.js"
import{g as t,m as n}from"./monkeyBp-f212e716.js"
function r(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function c(f){o(".backpackFolderImage").forEach(a(s,String(f.folderId)))}function e(){const o=t()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-5b4b3d95.js.map
