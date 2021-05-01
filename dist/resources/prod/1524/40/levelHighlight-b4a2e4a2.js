import{I as t,J as n,K as r,L as s}from"./calfSystem-540da563.js"
import{i as o}from"./intValue-e485889b.js"
import{v as e}from"./valueText-87497ead.js"
let a
function u(){return a||(a=t(n)||o(e(r(s)))),a}function c(){const t=u()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function i(){const t=u()
let n=10
return t<200&&(n=5),t+n}const f=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=u()
return t-function(t){return f.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=u()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{c as a,m as b,l as c,i as g}
//# sourceMappingURL=levelHighlight-b4a2e4a2.js.map
