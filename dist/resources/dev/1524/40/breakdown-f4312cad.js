import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,a0 as c,t as d,O as m,aA as p,aB as g}from"./calfSystem-c464cb1d.js"
import{p as f}from"./perfFilter-655ade8e.js"
import{s as l}from"./simpleCheckbox-1b81e8e2.js"
import"./getArrayByClassName-fe0fed4e.js"
import"./getInventoryById-dc2e97f5.js"
import"./getInventory-609e6eb9.js"
import"./guildStore-3f19a00f.js"
import"./cmdExport-5edaf067.js"
import"./indexAjaxJson-9476707b.js"
import"./isChecked-a9c3c9fe.js"
let b
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(j,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function B(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function C(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,c("disableBreakdownPrompts",b)}function v(){t()||(f("composing"),b=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,B,!0),a(i("composing-items"),C),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-f4312cad.js.map
