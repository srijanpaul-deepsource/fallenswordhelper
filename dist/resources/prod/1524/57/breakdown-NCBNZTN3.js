import{a as y}from"./chunk-7EVYGCWY.js";import"./chunk-4OR5BUCD.js";import"./chunk-XAKXF57Y.js";import"./chunk-7RQJQFDH.js";import"./chunk-SLDMTUNW.js";import"./chunk-RIZE2L5G.js";import"./chunk-547NZTJJ.js";import{g as x}from"./chunk-P4CZYMSD.js";import"./chunk-3YUDKRQK.js";import{a as h}from"./chunk-WP75TXSA.js";import"./chunk-ZX6BQCBQ.js";import"./chunk-TRWEOFLW.js";import{a as b}from"./chunk-WFD7HHBD.js";import"./chunk-FZKWNJGZ.js";import{b as g}from"./chunk-4UVID5BY.js";import{a as w}from"./chunk-V3D7ICIN.js";import"./chunk-XGZF3G52.js";import{a as f}from"./chunk-MKSWV7LK.js";import"./chunk-3ZXYCFKP.js";import"./chunk-7KF4EGG2.js";import"./chunk-Y52HR7PB.js";import"./chunk-WMSWBFUP.js";import{a as u}from"./chunk-6R2TD6BF.js";import"./chunk-QPWRUAE6.js";import"./chunk-ZYVZFCZ6.js";import"./chunk-UL2EF2NH.js";import"./chunk-NIAUHSKU.js";import{a as k}from"./chunk-RDOAH55S.js";import"./chunk-TBCMWPFS.js";import"./chunk-63VZJNBW.js";import"./chunk-ATQ2IISL.js";import{a as i}from"./chunk-WVMSJ4JS.js";import"./chunk-V2KRM43J.js";import"./chunk-AKOYB2MJ.js";import{a as r}from"./chunk-PCS24QV6.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import"./chunk-7QMLZEL5.js";import{b as l}from"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import{Q as d,n as p}from"./chunk-OPFEBT2F.js";import"./chunk-33VL7FGV.js";import{a as s}from"./chunk-7ZQZE7AG.js";function a(e){return k({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var m="disableBreakdownPrompts",t,n=[];function C(e){e.hide()}function P(e,o){e.animate({height:0},500,o)}function E(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,s(P,e,s(C,e)))}function T(e,o){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":o,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function B(e,o){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(T(e,o))),setTimeout(E,5e3)}function j(e){e.error!==0?B(`Error: ${e.msg}`,"rgb(164, 28, 28)"):w(`${d+p}breakdown&m=1`)}function v(){a(n).then(j)}function M(e){if(e.stopPropagation(),n.length===0){B("Error: No items selected.","rgb(164, 28, 28)");return}v()}function I(e){t&&e.target.id==="breakdown-selected-items"&&M(e)}function N(e){if(!u("selectable-item",e.target))return;let o=e.target.id.replace("composing-item-",""),c=n.indexOf(o);c===-1?n.push(o):n.splice(c,1)}function V(){t=!t,b(m,t)}function A(){f(g,`<table class="fshTblCenter"><tbody>${x(m)}</tbody></table>`)}function H(){i(r("breakdown-selected-items").parentNode,I,!0),i(r("composing-items"),N),i(r(m),V)}function D(){h()||(y("composing"),t=l(m),A(),H())}export{D as default};
//# sourceMappingURL=breakdown-NCBNZTN3.js.map