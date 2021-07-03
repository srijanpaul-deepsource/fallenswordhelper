import{d as a}from"./dialog-1a39a3d7.js"
import{i as r}from"./indexAjaxJson-6e1804ba.js"
import{d as o}from"./daUseItem-a412f1f6.js"
import{e}from"./errorDialog-7a4621a3.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(a)}const t=a=>({...a,r:a.s?0:1})
function i(a){return o(a).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-79c94283.js.map
