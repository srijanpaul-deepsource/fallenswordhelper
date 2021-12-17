import{a as e}from"./chunk-P36P56D4.js";import{a as p}from"./chunk-6WXDQZ7M.js";import{a as h}from"./chunk-JLHZQS42.js";import"./chunk-73BUZD3L.js";import"./chunk-CQ3PZTYF.js";import"./chunk-SWDYJ63E.js";import{b as a}from"./chunk-QOWOSZRG.js";import{a as o}from"./chunk-3WYOJJSD.js";import"./chunk-FM7OJ7NO.js";import"./chunk-HA7HK2NF.js";import"./chunk-U546IVLZ.js";import{a as n}from"./chunk-JQPK3YVC.js";import"./chunk-WHLURLGI.js";import"./chunk-M6FQTS4T.js";import{b as f}from"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import"./chunk-UWALNOSV.js";import{K as u,X as s,p as c}from"./chunk-M72CYKCS.js";import"./chunk-ZP7KCDX3.js";function m(t,i,r){let d={subcmd:"reliclist",offset:i,limit:r};return t&&(d.guild_id=t),p(d)}async function l(t=0,i=100){let r=await m(null,t,i);return r.r.remaining_relics?r.r.relics.concat(await l(t+r.r.relics.length,Math.min(100,r.r.remaining_relics))):r.r.relics}function $(t){return`<a href="${s}relics${c}view&relic_id=${t.id}">${t.name}</a>`}function g(t){return t?`<a href="${u}${t.id}">${t.name}</a>`:""}function b(t,i){return i.id===t}function y(t){return t.attributes&&t.attributes.find(n(b,6))}function x(t,i){if(t){let r=t.find(n(b,i));if(r)return r.value}return""}function _(t){return[6,0,4,5,7,8].map(n(x,t)).join("</td><td>")}function k(t){if(!t)return"";let i=h(t);return`${e(i[0])}d ${e(i[1])}h ${e(i[2])}m ${e(i[3])}s`}function v(t){return`<tr><td>${t.location.realm.min_level}</td><td>${$(t)}</td><td>${g(t.guild)}</td><td>${_(t.attributes)}</td><td>${k(t.time)}</td></tr>`}function w(t){return`<style>#pCC .reliclist {
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
//# sourceMappingURL=reliclist-IWBI4DI3.js.map
