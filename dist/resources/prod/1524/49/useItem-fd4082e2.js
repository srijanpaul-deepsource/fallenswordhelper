import{d as r}from"./dialog-cb76c307.js"
import{i as e}from"./indexAjaxJson-b5d4e9de.js"
import{d as o}from"./daUseItem-84f213fd.js"
import{e as s}from"./errorDialog-0c5c9521.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const i=r=>({...r,r:r.s?0:1})
function a(r){return o(r).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-fd4082e2.js.map
