import{t,u as n,$ as r}from"./calfSystem-fe0ebf32.js"
import{b as e}from"./backpack-83452331.js"
import{a as u,e as o,u as i}from"./useItem-343a998b.js"
import{e as a}from"./errorDialog-f7744f6f.js"
import{h as s}from"./htmlResult-e09db9ad.js"
import{g as c,t as f}from"./takeItem-fac376b5.js"
function m(t){return t.match(/&id=(\d+)/)[1]}function d(t){return t}function l(n,r,e){return n(r).then(t(d,e))}function h(t,r,e){return n({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:e}).then(s)}function b(t,n,r){return c({subcmd2:"recall",id:t,player_id:n,mode:r})}function p(t,n,e){return function(t,n,e){return r(b,h,t,n,e)}(t,n,e).then(u)}function j(t,n,r){const e=r.items[r.items.length-1].a
return"wear"===t?l(o,e,n):"use"===t?l(i,e,n):void 0}function g(n,r){return 0===r.r&&"recall"!==n?e().then(t(j,n,r)):r}function k(n,r,e,u){return p(n,r,e).then(a).then(t(g,u))}function v(t,n){return 0===n.r&&"take"!==t?function(t,n){return"wear"===t?l(o,n.b,n):"use"===t?l(i,n.b,n):void 0}(t,n):n}function y(n,r){return f(n).then(t(v,r))}let w
function I(){return w||(w=Promise.resolve()),w}function _(n,r){return w=I().then(t(y,n,r)),w}function q(n,r,e,u){return w=I().then(t(k,n,r,e,u)),w}export{q as a,m as i,_ as q}
//# sourceMappingURL=queue-0a17d77a.js.map
