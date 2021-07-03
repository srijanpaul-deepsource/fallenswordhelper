import{r as e,y as t,I as o,i as s,p as a,o as n,z as i,l as r,a0 as d,t as m,N as p,aH as c,aI as g}from"./calfSystem-01849445.js"
import{p as l}from"./perfFilter-7b060ea2.js"
import{s as b}from"./simpleCheckbox-7471ae0f.js"
import"./getArrayByClassName-da632221.js"
import"./getInventoryById-275c3e5d.js"
import"./getInventory-b274a32e.js"
import"./guildStore-899ed4eb.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./isChecked-b16dd421.js"
let f
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,m(j,e,m(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):p(`${c+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,d("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-aa583c25.js.map
