import{a as B,c as v}from"./chunk-PZDIN3T4.js";import"./chunk-H5GSZRCV.js";import"./chunk-AM443DK7.js";import{a as I,b as h}from"./chunk-EDSBJSB2.js";import{a as g}from"./chunk-PNCKZ23Z.js";import"./chunk-BR5BZ5EG.js";import{a as k}from"./chunk-GUIE3S4C.js";import"./chunk-FTXTFPQL.js";import"./chunk-4AN7KDFP.js";import"./chunk-WERDHZX6.js";import"./chunk-7RQZYKTJ.js";import{a as m}from"./chunk-UND2M5KJ.js";import{a as c}from"./chunk-XJ4CM2CH.js";import{a as y}from"./chunk-626NJWGF.js";import"./chunk-6LZRRVCI.js";import"./chunk-5OQCD7R7.js";import"./chunk-QNQWEJ2C.js";import"./chunk-KUIZLI6K.js";import"./chunk-LOSGOKOA.js";import"./chunk-2A4DWP7Z.js";import"./chunk-X7LACEVL.js";import"./chunk-UG6Q3XWI.js";import"./chunk-TBVFACB7.js";import"./chunk-D5AS4V7F.js";import"./chunk-WUYDXKAM.js";import"./chunk-5XAAMTXP.js";import"./chunk-O5LMDCSL.js";import"./chunk-T5PPVP6C.js";import"./chunk-4LLJDNLH.js";import{a as b}from"./chunk-J3KBZ4ZI.js";import{a as E}from"./chunk-Y27L7NRG.js";import"./chunk-PYNBBPHV.js";import{a as x}from"./chunk-5TZ7D23L.js";import"./chunk-BPFW3H66.js";import{a as s}from"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import"./chunk-EGDIV5JD.js";import{a as d}from"./chunk-SCZRPZMX.js";import"./chunk-MCETWLUS.js";import"./chunk-A6IIWQBH.js";import{a as u}from"./chunk-MC5JUWDN.js";import"./chunk-AACPE6UD.js";import"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";import{a as r}from"./chunk-MJT5TAYX.js";function C(t,e){let o=t.srcData.findIndex(n=>n.a===e);o!==-1&&t.srcData.splice(o,1)}function N([t,e,o,n],a){if(a.r!==0){o.remove();return}C(t,n),o.classList.remove("fshSpinner"),b(`<span class="fastWorn">${e}</span>`,o.parentNode)}function W(t,e,o,n){x("profile",`fastAction - ${n}`);let{target:a}=e,l=a.parentNode.parentNode.children[0].dataset.inv;g("",a),a.blur(),a.className="fastAction fshBl fshSpinner fshSpinner12",o(l).then(r(N,[t,n,a,l]))}function f(t,e){m("fastWear",e.target)&&W(t,e,B,"Worn"),m("fastUse",e.target)&&W(t,e,v,"Used")}function T(t){return t?"fastUse":"fastWear"}function A(t){return t?"Use":"Wear"}function S(t,e){let o=m("backpackContextMenuUsable",e),n=y({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${T(o)}">${A(o)}</button>`});t.options.checkboxesEnabled&&c(n,e.parentNode.nextElementSibling.nextElementSibling),c(e.parentNode.parentNode,n)}function i(t){d(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(r(S,t))}function p(){let t=s("backpack");t.className="fshBackpack",t.removeAttribute("style")}function U(t){p(),h(t,i),u(s("backpack_current")).length!==0&&k(3,i,[t]),E(s("backpackContainer"),r(f,t))}function D(){let t=I();t&&U(t)}export{D as default};
//# sourceMappingURL=fastWear-AZZOVJWK.js.map