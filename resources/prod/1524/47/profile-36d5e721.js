import{C as t,b as i,p as o,z as e,bF as n,K as s,Z as c,J as a,I as r,aC as f,y as u,a as p}from"./calfSystem-a2fd9017.js"
import{c as m}from"./colouredDots-e6e48020.js"
import{d as l}from"./doStatTotal-7cdd55ce.js"
import{e as d}from"./executeAll-9ecb4cd8.js"
import{p as j}from"./playerName-fab1659b.js"
import{a as b}from"./asInt-bc42d23b.js"
import{i as h}from"./interceptSubmit-ce135195.js"
let k,y,B
function g(){return k||(k=t(i("h1",o)[0])),k}function P(){return y||(B=g()===j(),y=!0),B}function S(){const i=Number(t(e(n)));(t=>b(s)===t)(i)?c(a,""):c(a,i)}async function v(){const t=r("fastDebuff"),i=r("disableDeactivatePrompts")
if(t||i){(await import("./debuff-3e0aaca8.js")).default(t,i)}}function x(){r("countAllyEnemy")&&f(import("./profileAllyEnemy-e722c07c.js"))}function L(){r("enableQuickDrink")&&f(import("./fastWear-2ad15219.js"))}function A(){r("fixFolderImages")&&f(import("./fixFolders-8de30bc0.js"))}function D(){r("componentWidgets")&&f(import("./components-22c1e7e8.js"))}function I(){r("quickWearLink")&&f(import("./quickWearLink-8f581ed4.js"))}function W(){r("selectAllLink")&&f(import("./selectAllLink-539a2aa1.js"))}function w(){r("nekidButton")&&f(import("./nekidBtn-86c1c95e.js"))}function _(){r("ajaxifyProfileSections")&&f(import("./ajaxifyProfileSections-46cdc879.js"))}function C(){P()&&d([v,x,L,A,D,I,W,S,w,_])}function F(){const t=P()
return function(t){return t&&r("renderSelfBio")}(t)||function(t){return!t&&r("renderOtherBios")}(t)}function G(){r("showGuildRelationship")&&f(import("./profileInjectGuildRel-3fdf6f24.js"))}function Q(){r("showQuickButtons")&&f(import("./profileInjectQuickButton-7abfc2bb.js"))}function q(){r("injectBuffGuide")&&f(import("./updateBuffs-9cd90eb4.js"))}function z(){r("statisticsWrap")&&f(import("./updateStatistics-8bbc78c0.js"))}function E(){r("highlightPvpProtection")&&f(import("./highlightPvpProtection-4a2f11d6.js"))}function N(){F()&&f(import("./bio-a1e1aabd.js"))}function O(){r("enableBioCompressor")&&f(import("./compressBio-3f413ecb.js"))}function R(){r("showBuffLevel")&&f(import("./buffLevelDisplay-156b4833.js"))}var J=Object.freeze({__proto__:null,default:function(){u()||(d([C,G,Q,q,z,E,N,O,l,R]),p(3,m),P()||h())}})
export{g as a,P as g,J as p}
//# sourceMappingURL=profile-36d5e721.js.map
