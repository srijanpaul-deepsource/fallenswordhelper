import{a as c}from"./chunk-NETEH62C.js";import{a as f}from"./chunk-LU5L64RH.js";import{a as y}from"./chunk-NO65USSB.js";import"./chunk-ZVOORZ7V.js";import{a as p,b as g}from"./chunk-LRRGK32S.js";import"./chunk-V6YKLGSR.js";import{a as u}from"./chunk-7JO3I6YD.js";import"./chunk-LARETTHC.js";import"./chunk-EHLYPUDG.js";import"./chunk-USQ4I2P4.js";import{a as m}from"./chunk-VLL6MMT3.js";import"./chunk-QRPHAINE.js";import{a as l}from"./chunk-JUU6TIW3.js";import"./chunk-TMMBKVUE.js";import"./chunk-G6VG7VOM.js";import"./chunk-FBJQLDZK.js";import{a}from"./chunk-2BFYZNUH.js";import"./chunk-GRHMKKXW.js";import"./chunk-QGKEDUO2.js";import"./chunk-SHVFOAM5.js";import"./chunk-ISL3KEXS.js";import{a as s}from"./chunk-FE4PDZXL.js";import{b as d}from"./chunk-VMJ6DXBZ.js";import"./chunk-3PDILZ3R.js";import"./chunk-3WAX2TNR.js";import"./chunk-4P4O4YGO.js";import"./chunk-KTAAKVTB.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=y(e);return t?t.map(f).map(l):[]}function S(e){let t=G.map(([o,i])=>[M(o),i]),n=f(l(e)),r=t.find(([o])=>o.includes(n));if(r)return r[1]}function b(e){return g()?(m("guildSelf",s(e)),"self"):S(s(e))}function x(e,t){let[,n,r]=h.find(([i])=>i===t);e.parentNode.classList.add(n);let o=d(r);o&&o.length>0&&a(e.parentNode,`<br>${u(o)}`)}function A(e){let t=b(e);t&&x(e,t)}function I(){let e=p();e?A(e):c()&&m("guildSelf","")}export{I as default};
//# sourceMappingURL=profileInjectGuildRel-CPUZMCDR.js.map
