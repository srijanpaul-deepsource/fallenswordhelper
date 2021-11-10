import{d as f}from"./chunk-73XBPN4K.js";import{a}from"./chunk-Y6WQRSAL.js";import{a as v}from"./chunk-S3NYSGME.js";import"./chunk-G3X3JRPI.js";import{a as l}from"./chunk-P32LYIQC.js";import"./chunk-3A25HTZJ.js";import{a as d}from"./chunk-W5YL3QSG.js";import"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import"./chunk-RZ3TV2NA.js";import{a as m}from"./chunk-CDBYAPQM.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import{a as n}from"./chunk-3XARJZUK.js";import"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-A2JPUMZD.js";import{B as s,Ja as u,ua as i}from"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";var M=`
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
</select></td>`,g=M;var p=[],e,h;function x(o,t){return d({cmd:"arena",subcmd:"dopickmove",move_id:o,slot_id:t})}function b(o){return o.value}function w(){return l("select",h).map(b)}function y(o,t){if(o!==p[t])return e.eq(t).attr({src:u,width:"25",height:"25"}),x("x",t)}function A(o,t){if(!(o==="x"||o===p[t]))return x(o,t)}function C(){v(`${s}setup`)}function D(o){let t=o.map(A);a(t,C)}function B(){let o=w(),t=o.map(y);a(t,n(D,o))}function P(o){let t=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",t).on("click",B),o.append(t)}function T(o){let t=$(o).attr("src").match(f);return t?t[1]:"x"}function j(o,t,k){let r=T(k);p.push(r);let c=$(g);$(`option[value=${r}]`,c).prop("selected",!0),o.append(c)}function N(o){let t=$("<tr/>");h=t.get(0),t.append("<td/>"),e.each(n(j,t)),o.append(t)}function S(){return e.eq(0).closest(i).parent().closest(i)}function R(o){$(o.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let t=S();N(t),$('img[src*="arena/bar_spacer."]',t).attr({width:"15",height:"50"}),P(t)}function O(){if(m())return;let o=$('#pCC b:contains("Setup Combat Moves")');o.length===1&&(o.addClass("fshLink fshGreen"),o.on("click",R))}export{O as default};
//# sourceMappingURL=setupMoves-NDAZKEES.js.map
