import{E as o,t as a,ak as c}from"./calfSystem-7a1cce43.js"
import{g as t,m as n}from"./monkeyBp-ad12ac1a.js"
function r(o,a){const t=`${c}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function f(c){o(".backpackFolderImage").forEach(a(s,String(c.folderId)))}function e(){const o=t()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-f29ea2df.js.map
