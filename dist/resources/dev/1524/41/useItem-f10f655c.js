import{d as e}from"./dialog-1254e587.js"
import{i as r}from"./indexAjaxJson-50c9cfe2.js"
import{d as o}from"./daUseItem-09700284.js"
import{e as s}from"./errorDialog-864e4ba8.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const a=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-f10f655c.js.map
