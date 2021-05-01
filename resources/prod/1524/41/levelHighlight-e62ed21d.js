import{I as t,J as n,K as r,L as s}from"./calfSystem-030d7057.js"
import{i as o}from"./intValue-af3aed3f.js"
import{v as a}from"./valueText-f3659878.js"
let e
function f(){return e||(e=t(n)||o(a(r(s)))),e}function u(){const t=f()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function c(){const t=f()
let n=10
return t<200&&(n=5),t+n}const i=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=f()
return t-function(t){return i.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=f()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{u as a,m as b,l as c,c as g}
//# sourceMappingURL=levelHighlight-e62ed21d.js.map
