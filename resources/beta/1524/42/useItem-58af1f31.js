import{d as a}from"./dialog-aad1c6e1.js"
import{i as r}from"./indexAjaxJson-77d0e468.js"
import{d as e}from"./daUseItem-1a98abfb.js"
import{e as o}from"./errorDialog-14a51b34.js"
function s(e){return r({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1}).then(a)}const t=a=>({...a,r:a.s?0:1})
function i(a){return e(a).then(o).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-58af1f31.js.map
