import{d as r}from"./dialog-a0295936.js"
import{i as a}from"./indexAjaxJson-1f941a45.js"
import{d as o}from"./daUseItem-5ffa2995.js"
import{e}from"./errorDialog-b76ba3fb.js"
function s(o){return a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-e820b42f.js.map
