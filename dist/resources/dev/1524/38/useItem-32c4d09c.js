import{d as r}from"./dialog-e89b7ecf.js"
import{i as e}from"./indexAjaxJson-976f4bdd.js"
import{d as o}from"./daUseItem-b6042302.js"
import{e as s}from"./errorDialog-f60f17b2.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const i=r=>({...r,r:r.s?0:1})
function a(r){return o(r).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-32c4d09c.js.map
