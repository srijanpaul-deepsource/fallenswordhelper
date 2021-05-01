import{d as r}from"./dialog-17ce66e6.js"
import{i as e}from"./indexAjaxJson-9476707b.js"
import{d as o}from"./daUseItem-503dd9d9.js"
import{e as s}from"./errorDialog-58b05366.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const i=r=>({...r,r:r.s?0:1})
function a(r){return o(r).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-1853f7bb.js.map
