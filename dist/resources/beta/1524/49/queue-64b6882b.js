import{t,u as e,$ as n}from"./calfSystem-42f137cb.js"
import{i as r}from"./indexAjaxJson-4839dee4.js"
import{a as u,e as o,u as i}from"./useItem-dfa78264.js"
import{e as s}from"./errorDialog-d2cfbe26.js"
import{h as c}from"./htmlResult-f9d001db.js"
import{g as a,t as f}from"./takeItem-3509c4be.js"
function m(t){return t}function d(e,n,r){return e(n).then(t(m,r))}function l(t,n,r){return e({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:n,mode:r}).then(c)}function h(t,e,n){return a({subcmd2:"recall",id:t,player_id:e,mode:n})}function b(t,e,r){return function(t,e,r){return n(h,l,t,e,r)}(t,e,r).then(u)}function p(t,e,n){const r=n.items[n.items.length-1].a
return"wear"===t?d(o,r,e):"use"===t?d(i,r,e):void 0}function j(e,n){return 0===n.r&&"recall"!==e?r({cmd:"profile",subcmd:"fetchinv"}).then(t(p,e,n)):n}function v(e,n,r,u){return b(e,n,r).then(s).then(t(j,u))}function g(t,e){return 0===e.r&&"take"!==t?function(t,e){return"wear"===t?d(o,e.b,e):"use"===t?d(i,e.b,e):void 0}(t,e):e}function y(e,n){return f(e).then(t(g,n))}let x
function k(){return x||(x=Promise.resolve()),x}function w(e,n){return x=k().then(t(y,e,n)),x}function I(e,n,r,u){return x=k().then(t(v,e,n,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-64b6882b.js.map
