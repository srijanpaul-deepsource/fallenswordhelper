import{C as t,b as i,p as o,z as e,bI as n,K as s,Z as a,J as f,I as r,aE as c,y as u,a as p}from"./calfSystem-db2edbef.js"
import{c as m}from"./colouredDots-6c1de22d.js"
import{d as l}from"./doStatTotal-3ad45754.js"
import{e as d}from"./executeAll-9ecb4cd8.js"
import{p as j}from"./playerName-70d3d303.js"
import{a as b}from"./asInt-48dcc84c.js"
import{i as h}from"./interceptSubmit-37405c90.js"
let k,y,B
function g(){return k||(k=t(i("h1",o)[0])),k}function P(){return y||(B=g()===j(),y=!0),B}function S(){const i=Number(t(e(n)));(t=>b(s)===t)(i)?a(f,""):a(f,i)}async function v(){const t=r("fastDebuff"),i=r("disableDeactivatePrompts")
if(t||i){(await import("./debuff-6b6c01ae.js")).default(t,i)}}function x(){r("countAllyEnemy")&&c(import("./profileAllyEnemy-97821949.js"))}function I(){r("enableQuickDrink")&&c(import("./fastWear-e69f5e8b.js"))}function L(){r("fixFolderImages")&&c(import("./fixFolders-a747dbf7.js"))}function A(){r("componentWidgets")&&c(import("./components-0362e9fc.js"))}function D(){r("quickWearLink")&&c(import("./quickWearLink-fa97a5e9.js"))}function W(){r("selectAllLink")&&c(import("./selectAllLink-a9524e1f.js"))}function w(){r("nekidButton")&&c(import("./nekidBtn-61f0f72d.js"))}function _(){r("ajaxifyProfileSections")&&c(import("./ajaxifyProfileSections-6ef11ac2.js"))}function E(){P()&&d([v,x,I,L,A,D,W,S,w,_])}function G(){const t=P()
return function(t){return t&&r("renderSelfBio")}(t)||function(t){return!t&&r("renderOtherBios")}(t)}function Q(){r("showGuildRelationship")&&c(import("./profileInjectGuildRel-6b7f33ed.js"))}function q(){r("showQuickButtons")&&c(import("./profileInjectQuickButton-1aa03a1b.js"))}function z(){r("injectBuffGuide")&&c(import("./updateBuffs-8cdaf16b.js"))}function C(){r("statisticsWrap")&&c(import("./updateStatistics-07666db0.js"))}function F(){r("highlightPvpProtection")&&c(import("./highlightPvpProtection-47deaf77.js"))}function N(){G()&&c(import("./bio-8bb5021b.js"))}function O(){r("enableBioCompressor")&&c(import("./compressBio-56b3da9b.js"))}function R(){r("showBuffLevel")&&c(import("./buffLevelDisplay-37d3a455.js"))}var J=Object.freeze({__proto__:null,default:function(){u()||(d([E,Q,q,z,C,F,N,O,l,R]),p(3,m),P()||h())}})
export{g as a,P as g,J as p}
//# sourceMappingURL=profile-ee1ef306.js.map
