import{a as e}from"./chunk-FVHC5KKT.js";import{a as p}from"./chunk-H7UOMZZR.js";import{a as h}from"./chunk-J3ZHJNYS.js";import"./chunk-TEFHJKMD.js";import"./chunk-MBEIWHXP.js";import"./chunk-2E6AQY2R.js";import{b as a}from"./chunk-ONUVRTHQ.js";import{a as o}from"./chunk-VMDTPM4Q.js";import"./chunk-XSMZ46A3.js";import"./chunk-4CSILNZE.js";import"./chunk-H5HEKC7D.js";import{a as n}from"./chunk-UD6FQZRC.js";import"./chunk-QFIFYPCN.js";import"./chunk-L7RMPRB5.js";import{b as f}from"./chunk-55VGZ4O3.js";import"./chunk-ZVMTR3BU.js";import"./chunk-IGVUSJ47.js";import{K as u,X as s,p as c}from"./chunk-TD2HJ4A4.js";import"./chunk-PMRPPTTZ.js";function m(t,i,r){let d={subcmd:"reliclist",offset:i,limit:r};return t&&(d.guild_id=t),p(d)}async function l(t=0,i=100){let r=await m(null,t,i);return r.r.remaining_relics?r.r.relics.concat(await l(t+r.r.relics.length,Math.min(100,r.r.remaining_relics))):r.r.relics}function $(t){return`<a href="${s}relics${c}view&relic_id=${t.id}">${t.name}</a>`}function g(t){return t?`<a href="${u}${t.id}">${t.name}</a>`:""}function b(t,i){return i.id===t}function y(t){return t.attributes&&t.attributes.find(n(b,6))}function x(t,i){if(t){let r=t.find(n(b,i));if(r)return r.value}return""}function _(t){return[6,0,4,5,7,8].map(n(x,t)).join("</td><td>")}function k(t){if(!t)return"";let i=h(t);return`${e(i[0])}d ${e(i[1])}h ${e(i[2])}m ${e(i[3])}s`}function v(t){return`<tr><td>${t.location.realm.min_level}</td><td>${$(t)}</td><td>${g(t.guild)}</td><td>${_(t.attributes)}</td><td>${k(t.time)}</td></tr>`}function w(t){return`<style>#pCC .reliclist {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
      }
      .reliclist, .reliclist th, .reliclist td {
        border: 1px solid black;
      }
      .reliclist th, .reliclist td {
        padding: 5px;
      }
      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {
        width: 100px;
      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(y).map(v).join("")}</tbody></table>`}function C(t){t.sort((i,r)=>i.location.realm.min_level-r.location.realm.min_level),o(w(t),a)}function A(){!f("betaOptIn")||(o("Loading...",a),l().then(C))}export{A as default};
//# sourceMappingURL=reliclist-3TXTAT6C.js.map
