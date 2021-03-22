import{d as e}from"./dialog-bd85dd64.js"
import{i as r}from"./indexAjaxJson-d9ed18eb.js"
import{d as o}from"./daUseItem-1cbe13aa.js"
import{e as a}from"./errorDialog-f7744f6f.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-d974c16e.js.map
