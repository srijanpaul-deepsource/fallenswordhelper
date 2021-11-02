import{a as h}from"./chunk-65SQLHIT.js";import{a as p}from"./chunk-T2ZDCBP4.js";import{a as e}from"./chunk-D6JVYHKE.js";import{b as o}from"./chunk-ZPKDX2TA.js";import"./chunk-V7EDYNK5.js";import"./chunk-AU7HVVRL.js";import"./chunk-GZ5MHZSO.js";import"./chunk-ECTWXQFU.js";import"./chunk-ARNYHQX3.js";import{a}from"./chunk-5YV4PH6I.js";import"./chunk-HVC7S5PE.js";import"./chunk-NC4XYYGB.js";import"./chunk-E5FOTTRM.js";import"./chunk-HVPMEAYK.js";import{b as f}from"./chunk-VEFZUGNI.js";import"./chunk-FJEDYAWH.js";import"./chunk-WV7FHD63.js";import{I as u,V as c,n as d}from"./chunk-OOFTOHPO.js";import"./chunk-L5TVV64R.js";import{a as n}from"./chunk-TQN6MN4F.js";function m(t,i,r){let s={subcmd:"reliclist",offset:i,limit:r};return t&&(s.guild_id=t),h(s)}async function l(t=0,i=100){let r=await m(null,t,i);return r.r.remaining_relics?r.r.relics.concat(await l(t+r.r.relics.length,Math.min(100,r.r.remaining_relics))):r.r.relics}function g(t){return`<a href="${c}relics${d}view&relic_id=${t.id}">${t.name}</a>`}function $(t){return t?`<a href="${u}${t.id}">${t.name}</a>`:""}function b(t,i){return i.id===t}function y(t){return t.attributes&&t.attributes.find(n(b,6))}function x(t,i){if(t){let r=t.find(n(b,i));if(r)return r.value}return""}function _(t){return[6,0,4,5,7,8].map(n(x,t)).join("</td><td>")}function k(t){if(!t)return"";let i=p(t);return`${e(i[0])}d ${e(i[1])}h ${e(i[2])}m ${e(i[3])}s`}function v(t){return`<tr><td>${t.min_level}</td><td>${g(t)}</td><td>${$(t.guild)}</td><td>${_(t.attributes)}</td><td>${k(t.time)}</td></tr>`}function w(t){return`<style>#pCC .reliclist {
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
      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(y).map(v).join("")}</tbody></table>`}function C(t){t.sort((i,r)=>i.min_level-r.min_level),a(w(t),o)}function L(){!f("betaOptIn")||(a("Loading...",o),l().then(C))}export{L as default};
//# sourceMappingURL=reliclist-VWDWPWEK.js.map
