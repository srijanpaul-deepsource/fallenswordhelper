import{d as e}from"./dialog-1254e587.js"
import{i as r}from"./indexAjaxJson-a5185e0b.js"
import{d as o}from"./daUseItem-3c9708cb.js"
import{e as a}from"./errorDialog-864e4ba8.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-a2e891d1.js.map
