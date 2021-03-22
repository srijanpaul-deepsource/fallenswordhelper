import{t,u as n,$ as r}from"./calfSystem-03050396.js"
import{b as e}from"./backpack-9260425d.js"
import{a as u,e as o,u as i}from"./useItem-d974c16e.js"
import{e as s}from"./errorDialog-f7744f6f.js"
import{h as a}from"./htmlResult-c1deb73a.js"
import{g as c,t as f}from"./takeItem-094b39bf.js"
function m(t){return t.match(/&id=(\d+)/)[1]}function d(t){return t}function l(n,r,e){return n(r).then(t(d,e))}function h(t,r,e){return n({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:e}).then(a)}function b(t,n,r){return c({subcmd2:"recall",id:t,player_id:n,mode:r})}function p(t,n,e){return function(t,n,e){return r(b,h,t,n,e)}(t,n,e).then(u)}function j(t,n,r){const e=r.items[r.items.length-1].a
return"wear"===t?l(o,e,n):"use"===t?l(i,e,n):void 0}function g(n,r){return 0===r.r&&"recall"!==n?e().then(t(j,n,r)):r}function k(n,r,e,u){return p(n,r,e).then(s).then(t(g,u))}function v(t,n){return 0===n.r&&"take"!==t?function(t,n){return"wear"===t?l(o,n.b,n):"use"===t?l(i,n.b,n):void 0}(t,n):n}function y(n,r){return f(n).then(t(v,r))}let w
function I(){return w||(w=Promise.resolve()),w}function _(n,r){return w=I().then(t(y,n,r)),w}function q(n,r,e,u){return w=I().then(t(k,n,r,e,u)),w}export{q as a,m as i,_ as q}
//# sourceMappingURL=queue-b16256f2.js.map
