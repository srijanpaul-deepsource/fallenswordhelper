import{t,u as e,$ as n}from"./calfSystem-01849445.js"
import{i as r}from"./indexAjaxJson-0f9790ea.js"
import{a as u,e as o,u as i}from"./useItem-167ebdfb.js"
import{e as s}from"./errorDialog-e70faa9e.js"
import{h as a}from"./htmlResult-d475b4cb.js"
import{g as c,t as f}from"./takeItem-54a44606.js"
function m(t){return t}function d(e,n,r){return e(n).then(t(m,r))}function l(t,n,r){return e({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:n,mode:r}).then(a)}function h(t,e,n){return c({subcmd2:"recall",id:t,player_id:e,mode:n})}function b(t,e,r){return function(t,e,r){return n(h,l,t,e,r)}(t,e,r).then(u)}function p(t,e,n){const r=n.items[n.items.length-1].a
return"wear"===t?d(o,r,e):"use"===t?d(i,r,e):void 0}function j(e,n){return 0===n.r&&"recall"!==e?r({cmd:"profile",subcmd:"fetchinv"}).then(t(p,e,n)):n}function v(e,n,r,u){return b(e,n,r).then(s).then(t(j,u))}function g(t,e){return 0===e.r&&"take"!==t?function(t,e){return"wear"===t?d(o,e.b,e):"use"===t?d(i,e.b,e):void 0}(t,e):e}function y(e,n){return f(e).then(t(g,n))}let x
function k(){return x||(x=Promise.resolve()),x}function w(e,n){return x=k().then(t(y,e,n)),x}function I(e,n,r,u){return x=k().then(t(v,e,n,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-db30fad8.js.map
