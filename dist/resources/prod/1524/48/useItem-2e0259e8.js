import{d as r}from"./dialog-8ce28e39.js"
import{i as e}from"./indexAjaxJson-4fb780dc.js"
import{d as o}from"./daUseItem-1dd23308.js"
import{e as s}from"./errorDialog-f5ff5027.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const i=r=>({...r,r:r.s?0:1})
function a(r){return o(r).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-2e0259e8.js.map
