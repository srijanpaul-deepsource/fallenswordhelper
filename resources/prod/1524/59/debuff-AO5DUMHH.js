import{a as v}from"./chunk-3WBAVR6T.js";import{a as g}from"./chunk-XCF76CMD.js";import{a as k}from"./chunk-5OQCD7R7.js";import{a as d}from"./chunk-QNQWEJ2C.js";import{a as p}from"./chunk-KUIZLI6K.js";import"./chunk-LOSGOKOA.js";import{a as s}from"./chunk-2A4DWP7Z.js";import"./chunk-X7LACEVL.js";import"./chunk-UG6Q3XWI.js";import"./chunk-TBVFACB7.js";import"./chunk-D5AS4V7F.js";import{a as u}from"./chunk-WUYDXKAM.js";import"./chunk-5XAAMTXP.js";import"./chunk-O5LMDCSL.js";import"./chunk-T5PPVP6C.js";import"./chunk-4LLJDNLH.js";import{a as l}from"./chunk-J3KBZ4ZI.js";import{a as c}from"./chunk-Y27L7NRG.js";import"./chunk-PYNBBPHV.js";import{a}from"./chunk-5TZ7D23L.js";import"./chunk-BPFW3H66.js";import{a as n}from"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import"./chunk-EGDIV5JD.js";import"./chunk-AACPE6UD.js";import"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";import{a as r}from"./chunk-MJT5TAYX.js";async function i(o){let e=await u({cmd:"profile",subcmd:"removeskill",skill_id:o}),t=p(e);return t==="Skill de-activated successfully."?{s:!0}:{s:!1,e:{message:t}}}function f(o){return d({subcmd:"removeskill",skill_id:o})}function m(o){return s(f,i,o)}function b(o,e){e&&e.s&&l("",o.parentNode)}function h(o,e){if(o){a("profile","doDebuff");let t=e.href.match(/=(\d{1,3})$/)[1];m(t).then(k).then(r(b,e))}else g(e.href)}function x(o){let e=o;return e.tagName==="IMG"&&(v(o),e=e.parentNode),e}function D(o){o.eventPhase===1&&o.stopPropagation()}function A(o,e){if(!e.returnValue)return;let t=x(e.target);t.tagName==="A"&&(D(e),e.preventDefault(),h(o,t))}function I(o,e){let t=n("profileRightColumn");t&&c(t.lastElementChild,r(A,o),e)}export{I as default};
//# sourceMappingURL=debuff-AO5DUMHH.js.map