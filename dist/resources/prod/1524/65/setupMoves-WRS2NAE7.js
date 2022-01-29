import{d as v}from"./chunk-M2DRNIQ4.js";import{a as p}from"./chunk-OGGEYMS7.js";import{a as f}from"./chunk-4MDBFMLM.js";import"./chunk-TIH6YU7D.js";import{a as l}from"./chunk-UZ5IF7X7.js";import"./chunk-BT4GCRJE.js";import{a as d}from"./chunk-X4OUUFVF.js";import"./chunk-55L4ZDU3.js";import"./chunk-QWDVXKTR.js";import"./chunk-KR2SDNOK.js";import{a as m}from"./chunk-OUF5VK2B.js";import"./chunk-UZF2DPM4.js";import"./chunk-PFETQSML.js";import{a as n}from"./chunk-E2LRFPD6.js";import"./chunk-OJ42IKEN.js";import"./chunk-YMWUQMPF.js";import"./chunk-RRWRGO3F.js";import"./chunk-3E35A5QB.js";import"./chunk-MIAGY67V.js";import"./chunk-2OH7AKYH.js";import"./chunk-LP5DJPCW.js";import"./chunk-R5WQFHT3.js";import{B as u,Ja as s,ua as i}from"./chunk-3IHZF2GE.js";import"./chunk-WZXZ6YXZ.js";var M=`
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
</select></td>`,g=M;var r=[],e,h;function k(t,o){return d({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function b(t){return t.value}function w(){return l("select",h).map(b)}function C(t,o){if(t!==r[o])return e.eq(o).attr({src:s,width:"25",height:"25"}),k("x",o)}function A(t,o){if(!(t==="x"||t===r[o]))return k(t,o)}function y(){f(`${u}setup`)}function D(t){let o=t.map(A);p(o,y)}function B(){let t=w(),o=t.map(C);p(o,n(D,t))}function P(t){let o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",o).on("click",B),t.append(o)}function S(t){let o=$(t).attr("src").match(v);return o?o[1]:"x"}function R(t,o,x){let a=S(x);r.push(a);let c=$(g);$(`option[value=${a}]`,c).prop("selected",!0),t.append(c)}function T(t){let o=$("<tr/>");h=o.get(0),o.append("<td/>"),e.each(n(R,o)),t.append(o)}function N(){return e.eq(0).closest(i).parent().closest(i)}function _(t){$(t.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let o=N();T(o),$('img[src*="arena/bar_spacer."]',o).attr({width:"15",height:"50"}),P(o)}function j(){if(m())return;let t=$('#pCC b:contains("Setup Combat Moves")');t.length===1&&(t.addClass("fshLink fshGreen"),t.on("click",_))}export{j as default};
//# sourceMappingURL=setupMoves-WRS2NAE7.js.map
