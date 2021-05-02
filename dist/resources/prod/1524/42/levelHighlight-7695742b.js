import{I as t,J as n,K as r,L as s}from"./calfSystem-15b00143.js"
import{i as o}from"./intValue-9eb8a210.js"
import{v as a}from"./valueText-7a9b207a.js"
let e
function u(){return e||(e=t(n)||o(a(r(s)))),e}function c(){const t=u()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function i(){const t=u()
let n=10
return t<200&&(n=5),t+n}const f=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=u()
return t-function(t){return f.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=u()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{c as a,m as b,l as c,i as g}
//# sourceMappingURL=levelHighlight-7695742b.js.map
