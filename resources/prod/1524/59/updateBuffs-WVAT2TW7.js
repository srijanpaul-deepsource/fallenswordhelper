import{a as u}from"./chunk-3N4UHWTK.js";import{a as d}from"./chunk-5HIH63DD.js";import{a as s}from"./chunk-HPL7UHIJ.js";import{a as f}from"./chunk-NH3HITNH.js";import{a as n}from"./chunk-RC4NT5JT.js";import"./chunk-AIP6BPK2.js";import"./chunk-EQPMHYZD.js";import"./chunk-H6KXMG2X.js";import{a as p}from"./chunk-626NJWGF.js";import"./chunk-6LZRRVCI.js";import{a as c}from"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import"./chunk-EGDIV5JD.js";import{a}from"./chunk-A6IIWQBH.js";import"./chunk-MC5JUWDN.js";import"./chunk-MJT5TAYX.js";function i(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}var N=98,T=85,l=60;function g(t){return Number(a(c(`stat-${t.toLowerCase()}`).childNodes).filter(i).map(n).join(""))}function y(t,o,e){let m=g(o[3]),r=Math.floor(e*(Number(o[1].replace(/[+%]/g,""))/100));u(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${o[2]}: ${String(e-r)}&nbsp;&nbsp;${o[3]}: ${String(m+r)}$&`),t)}function E(t){let o=p({innerHTML:t.dataset.tipped}),e=f("b",o).map(r=>n(r)),m=g(e[2]);s(m)||y(t,e,m)}function $(t){let o=d(`#profileRightColumn img[src$="/${String(t)}.png"]`);o&&E(o)}function B(){[N,T,l].forEach($)}export{B as default};
//# sourceMappingURL=updateBuffs-WVAT2TW7.js.map