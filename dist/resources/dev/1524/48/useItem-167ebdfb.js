import{d as e}from"./dialog-6e4d0a83.js"
import{i as a}from"./indexAjaxJson-0f9790ea.js"
import{d as r}from"./daUseItem-ba7c7669.js"
import{e as o}from"./errorDialog-e70faa9e.js"
function s(r){return a({cmd:"profile",subcmd:"equipitem",inventory_id:r,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return r(e).then(o).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-167ebdfb.js.map
