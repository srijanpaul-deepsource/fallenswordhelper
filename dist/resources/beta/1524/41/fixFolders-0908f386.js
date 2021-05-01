import{E as o,t as a,aw as t}from"./calfSystem-587dd8d3.js"
import{g as n,m as r}from"./monkeyBp-27ea8d93.js"
function s(o,a){const n=`${t}ui/misc/${a}.png`
o.src!==n&&(o.src=n)}function c(o,a){a.dataset.folder===o?s(a,"folder_on"):s(a,"folder")}function f(t){o(".backpackFolderImage").forEach(a(c,String(t.folderId)))}function d(){const o=n()
o&&r(o,f)}export default d
//# sourceMappingURL=fixFolders-0908f386.js.map
