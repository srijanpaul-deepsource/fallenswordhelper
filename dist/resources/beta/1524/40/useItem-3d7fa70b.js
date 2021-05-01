import{d as e}from"./dialog-17ce66e6.js"
import{i as r}from"./indexAjaxJson-e927e360.js"
import{d as o}from"./daUseItem-6360da18.js"
import{e as s}from"./errorDialog-58b05366.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const a=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-3d7fa70b.js.map
