import{a as C}from"./chunk-PUMEMIM2.js";import"./chunk-U2XOR54D.js";import"./chunk-GIMTJSG2.js";import"./chunk-7SMWPQOT.js";import{a as x}from"./chunk-3T6V376U.js";import"./chunk-ERDCWAX2.js";import"./chunk-C7T6VCNC.js";import"./chunk-JXL4HPF6.js";import{a as l}from"./chunk-6HFP56UB.js";import"./chunk-JMJ2BOMP.js";import"./chunk-NFDSTU22.js";import"./chunk-3DWHDW4D.js";import"./chunk-RVEJ4C26.js";import{g as h}from"./chunk-V3SGRUIJ.js";import"./chunk-2I2Z33ZT.js";import{a as w}from"./chunk-JDBXWYYY.js";import"./chunk-5GNYWTGT.js";import"./chunk-XG256B2T.js";import{a as k}from"./chunk-XWCLQVCM.js";import"./chunk-GNGPRTAS.js";import"./chunk-EBLMPFV5.js";import{a as b}from"./chunk-EUEELQXP.js";import{a as u}from"./chunk-PP2OWSJ3.js";import"./chunk-QS7J5TMD.js";import{b as g}from"./chunk-P664PW54.js";import{a as n}from"./chunk-WM64FGHN.js";import"./chunk-GQGCY7E7.js";import"./chunk-CU7PBPNO.js";import"./chunk-LXVMDOGR.js";import"./chunk-GX4J242O.js";import{a as s}from"./chunk-X5N7OOVX.js";import"./chunk-MKQZLDMS.js";import"./chunk-55RTNKIA.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import"./chunk-SXGAQBQ6.js";import{a as i}from"./chunk-KM25KKJO.js";import{b as f}from"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import"./chunk-O24SBNSZ.js";import"./chunk-DW345X2O.js";import{S as c,p as d}from"./chunk-AWEYVB2J.js";import"./chunk-UUU5NSJN.js";function m(e){return w({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var a="disableBreakdownPrompts",t,r=[];function B(e){e.hide()}function P(e,o){e.animate({height:0},500,o)}function T(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,s(P,e,s(B,e)))}function E(e,o){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":o,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function y(e,o){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(E(e,o))),setTimeout(T,5e3)}function M(e){e.error!==0?y(`Error: ${e.msg}`,"rgb(164, 28, 28)"):x(`${c+d}breakdown&m=1`)}function v(){m(r).then(M)}function j(e){if(e.stopPropagation(),r.length===0){y("Error: No items selected.","rgb(164, 28, 28)");return}v()}function I(e){t&&e.target.id==="breakdown-selected-items"&&j(e)}function N(e){if(!u("selectable-item",e.target))return;let o=e.target.id.replace("composing-item-",""),p=r.indexOf(o);p===-1?r.push(o):r.splice(p,1)}function A(){t=!t,k(a,t)}function D(){l(g,`<table class="fshTblCenter"><tbody>${h(a)}</tbody></table>`)}function H(){i(n("breakdown-selected-items").parentNode,I,!0),i(n("composing-items"),N),i(n(a),A)}function O(){b()||(C("composing"),t=f(a),D(),H())}export{O as default};
//# sourceMappingURL=breakdown-OT5JUIAV.js.map
