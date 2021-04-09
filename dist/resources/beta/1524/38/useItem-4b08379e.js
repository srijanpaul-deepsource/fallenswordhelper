import{d as e}from"./dialog-e89b7ecf.js"
import{i as r}from"./indexAjaxJson-9e9c7404.js"
import{d as o}from"./daUseItem-f2e72443.js"
import{e as s}from"./errorDialog-f60f17b2.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const i=e=>({...e,r:e.s?0:1})
function a(e){return o(e).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-4b08379e.js.map
