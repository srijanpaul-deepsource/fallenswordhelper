import{d as e}from"./dialog-a2e04cf7.js"
import{i as r}from"./indexAjaxJson-79cecebf.js"
import{d as o}from"./daUseItem-cfee4b1b.js"
import{e as s}from"./errorDialog-991fe014.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const a=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-1747cd0d.js.map
