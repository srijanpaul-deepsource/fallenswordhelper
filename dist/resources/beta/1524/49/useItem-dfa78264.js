import{d as e}from"./dialog-4ff9c696.js"
import{i as r}from"./indexAjaxJson-4839dee4.js"
import{d as o}from"./daUseItem-d9b5fe40.js"
import{e as s}from"./errorDialog-d2cfbe26.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const i=e=>({...e,r:e.s?0:1})
function a(e){return o(e).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-dfa78264.js.map
