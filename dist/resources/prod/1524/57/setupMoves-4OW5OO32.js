import{d as f}from"./chunk-6PPF73AD.js";import{a}from"./chunk-6LUWYAHK.js";import"./chunk-JLIKN5T7.js";import{a as d}from"./chunk-WP75TXSA.js";import"./chunk-ZX6BQCBQ.js";import{a as l}from"./chunk-ZCBAMDZC.js";import{a as v}from"./chunk-V3D7ICIN.js";import"./chunk-LRUSX4KB.js";import"./chunk-WMSWBFUP.js";import{a as m}from"./chunk-EC3YZH5E.js";import"./chunk-RDOAH55S.js";import"./chunk-TBCMWPFS.js";import"./chunk-63VZJNBW.js";import"./chunk-V2KRM43J.js";import"./chunk-AKOYB2MJ.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import"./chunk-7QMLZEL5.js";import"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import{Ha as u,sa as i,z as s}from"./chunk-OPFEBT2F.js";import"./chunk-33VL7FGV.js";import{a as n}from"./chunk-7ZQZE7AG.js";var M=`
<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">
<select style="max-width: 50px;">
<option value="x">Basic Attack</option>
<option value="0">Block</option>
<option value="1">Counter Attack</option>
<option value="2">Critical Hit</option>
<option value="3">Defend</option>
<option value="4">Deflect</option>
<option value="5">Dodge</option>
<option value="6">Lunge</option>
<option value="7">Power Attack</option>
<option value="8">Spin Attack</option>
<option value="9">Piercing Strike</option>
<option value="10">Crush</option>
<option value="11">Weaken</option>
<option value="12">Ice Shard</option>
<option value="13">Fire Blast</option>
<option value="14">Poison</option>
</select></td>`,g=M;var p=[],e,h;function x(o,t){return m({cmd:"arena",subcmd:"dopickmove",move_id:o,slot_id:t})}function b(o){return o.value}function w(){return l("select",h).map(b)}function y(o,t){if(o!==p[t])return e.eq(t).attr({src:u,width:"25",height:"25"}),x("x",t)}function A(o,t){if(!(o==="x"||o===p[t]))return x(o,t)}function C(){v(`${s}setup`)}function D(o){let t=o.map(A);a(t,C)}function B(){let o=w(),t=o.map(y);a(t,n(D,o))}function P(o){let t=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",t).on("click",B),o.append(t)}function T(o){let t=$(o).attr("src").match(f);return t?t[1]:"x"}function j(o,t,k){let r=T(k);p.push(r);let c=$(g);$(`option[value=${r}]`,c).prop("selected",!0),o.append(c)}function N(o){let t=$("<tr/>");h=t.get(0),t.append("<td/>"),e.each(n(j,t)),o.append(t)}function S(){return e.eq(0).closest(i).parent().closest(i)}function R(o){$(o.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let t=S();N(t),$('img[src*="arena/bar_spacer."]',t).attr({width:"15",height:"50"}),P(t)}function O(){if(d())return;let o=$('#pCC b:contains("Setup Combat Moves")');o.length===1&&(o.addClass("fshLink fshGreen"),o.on("click",R))}export{O as default};
//# sourceMappingURL=setupMoves-4OW5OO32.js.map