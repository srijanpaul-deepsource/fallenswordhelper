import{a as y,b as c}from"./chunk-AOJWTGO7.js";import"./chunk-QWOU26P4.js";import"./chunk-EW7YRYNW.js";import"./chunk-YDUJNKBK.js";import{a as m,b as p,c as d,d as g,e as o,f as v,g as h}from"./chunk-FO4FS5EM.js";import{a as u,b as f}from"./chunk-OOB63CZH.js";import"./chunk-44BWB3Q5.js";import"./chunk-6GFXSPHP.js";import"./chunk-5UCVWN2U.js";import{b as a}from"./chunk-JPA4PKRE.js";import"./chunk-KHYQYGSX.js";import"./chunk-7QZ7K4JT.js";import"./chunk-JNMWULRZ.js";import"./chunk-5YYRQ4XP.js";import"./chunk-PE2Z7ZIG.js";import{a as l}from"./chunk-NSH7KROB.js";import"./chunk-TJGDVHS5.js";import"./chunk-KIPS4CXG.js";import"./chunk-RTVLQCU7.js";import"./chunk-PUMXFYDY.js";import"./chunk-QU2O5LW3.js";import"./chunk-XQHJD2OP.js";import"./chunk-RIMVOGPJ.js";import"./chunk-UJM3TQ4Q.js";import"./chunk-UUZRSBW7.js";import"./chunk-4HFYLTSA.js";import"./chunk-ZVRZUN6W.js";import"./chunk-CXH2ICGZ.js";import"./chunk-B4CACURR.js";import"./chunk-X3N42HIO.js";import"./chunk-EMXVU7FX.js";import"./chunk-PZET6DEP.js";import"./chunk-353SUQQH.js";import"./chunk-IKPUDF3E.js";import"./chunk-ICRHQMJP.js";import"./chunk-FJHRVDDP.js";import"./chunk-SVFIEWQV.js";import"./chunk-NEZAPTHY.js";import"./chunk-GTEPU6L3.js";import{a as e}from"./chunk-J6WQ3WGO.js";var n,A;function _(t){n.members[t.name].push([c(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}function x(t){n.members[t.name]||(n.members[t.name]=[],_(t))}var M=[(t,i)=>i.current_stamina!==t[p],(t,i)=>i.max_stamina>t[g],(t,i)=>i.level!==t[d],(t,i)=>i.vl!==t[v],(t,i)=>i.guild_xp!==t[h]];function k(t,i,s){return s(t,i)}function w(t,i){return M.some(e(k,t,i))}function G(t,i){w(t,i)?_(i):(t[m]=c(i.last_activity),t[o]=a)}function T(t,i){x(i);let s=n.members[i.name],r=s[s.length-1];a-r[o]>=86100&&G(r,i),t.members[i.name]=n.members[i.name]}function U(t,i){i.members.forEach(e(T,t))}function C(){let t={lastUpdate:a,members:{}};A.r.ranks.forEach(e(U,t)),f("fsh_guildActivity",t)}function D(t){t&&t.r&&(A=t,C())}function E(t){t?n=t:n={lastUpdate:0,members:{}},a>l(n.lastUpdate,0)+300&&y().then(D)}function R(){u("fsh_guildActivity").then(E)}export{R as default};
//# sourceMappingURL=guildActivity-FMZBTPZF.js.map