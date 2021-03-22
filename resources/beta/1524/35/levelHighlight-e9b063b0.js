import{I as t,J as n,K as r,L as s}from"./calfSystem-03050396.js"
import{i as o}from"./intValue-1ce02c09.js"
import{v as e}from"./valueText-c92275e2.js"
let c
function a(){return c||(c=t(n)||o(e(r(s)))),c}function u(){const t=a()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function i(){const t=a()
let n=10
return t<200&&(n=5),t+n}const f=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=a()
return t-function(t){return f.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=a()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{u as a,m as b,l as c,i as g}
//# sourceMappingURL=levelHighlight-e9b063b0.js.map
