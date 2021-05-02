import{r as e,y as t,I as o,i as s,p as n,o as i,z as a,l as r,a0 as c,t as d,O as m,aB as p,aC as g}from"./calfSystem-4b6b865d.js"
import{p as l}from"./perfFilter-4ff966c0.js"
import{s as b}from"./simpleCheckbox-90be58c0.js"
import"./getArrayByClassName-c0c751ca.js"
import"./getInventoryById-0d163274.js"
import"./getInventory-bd8c3f01.js"
import"./guildStore-be851561.js"
import"./cmdExport-bf6b936d.js"
import"./indexAjaxJson-9849e745.js"
import"./isChecked-cf65e779.js"
let f
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(j,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,c("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),i(a("breakdown-selected-items").parentNode,C,!0),i(a("composing-items"),B),i(a("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-94b8293a.js.map
