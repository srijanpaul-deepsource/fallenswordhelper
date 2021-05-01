import{d as r}from"./dialog-17ce66e6.js"
import{i as e}from"./indexAjaxJson-8f18f901.js"
import{d as o}from"./daUseItem-22018080.js"
import{e as s}from"./errorDialog-58b05366.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const i=r=>({...r,r:r.s?0:1})
function a(r){return o(r).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-fbfe96d5.js.map
