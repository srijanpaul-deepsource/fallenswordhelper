import{I as t,J as n,K as r,L as s}from"./calfSystem-ab393688.js"
import{i as o}from"./intValue-e485889b.js"
import{v as a}from"./valueText-d39824a3.js"
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
//# sourceMappingURL=levelHighlight-99f5b27b.js.map
