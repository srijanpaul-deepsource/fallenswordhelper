import{r as e,y as t,I as o,i as s,p as a,o as n,z as i,l as r,_ as c,t as m,N as d,aG as p,aH as g}from"./calfSystem-617f9a5d.js"
import{p as l}from"./perfFilter-b9c83b1c.js"
import{s as b}from"./simpleCheckbox-af0b5ade.js"
import"./getArrayByClassName-3e46aa9a.js"
import"./getInventoryById-c970cb7e.js"
import"./getInventory-b6eae9c2.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./isChecked-8825c1a8.js"
let f
const u=[]
function h(e){e.hide()}function y(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,m(y,e,m(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):d(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,c("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-fef547e0.js.map
