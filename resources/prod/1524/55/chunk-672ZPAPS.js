function $(){}var ot=t=>t;function st(t,e){for(let n in e)t[n]=e[n];return t}function ct(t){return t&&typeof t=="object"&&typeof t.then=="function"}function j(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(j)}function T(t){return typeof t=="function"}function jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}var E;function Tt(t,e){return E||(E=document.createElement("a")),E.href=e,t===E.href}function W(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return $;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Nt(t){let e;return G(t,n=>e=n)(),e}function Rt(t,e,n){t.$$.on_destroy.push(G(e,n))}function qt(t,e,n,i){if(t){let r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){let r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){let s=[],o=Math.max(e.dirty.length,r.length);for(let u=0;u<o;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,s){if(r){let o=Y(e,n,i,s);t.p(o,r)}}function It(t){if(t.ctx.length>32){let e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Pt(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n))}}function zt(t,e,n){return t.set(n),e}var J=typeof window!="undefined",lt=J?()=>window.performance.now():()=>Date.now(),N=J?t=>requestAnimationFrame(t):$;var w=new Set;function U(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&N(U)}function ut(t){let e;return w.size===0&&N(U),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}var V=!1;function at(){V=!0}function ft(){V=!1}function dt(t,e){t.appendChild(e)}function K(t){if(!t)return document;let e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){let e=mt("style");return ht(K(t),e),e}function ht(t,e){dt(t.head||t,e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function pt(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function mt(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function Gt(){return Q(" ")}function Yt(){return Q("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kt(t){return t===""?null:+t}function yt(t){return Array.from(t.childNodes)}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e){t.value=e??""}function Zt(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function te(t,e){for(let n=0;n<t.options.length;n+=1){let i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ee(t){let e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function X(t,e,n=!1){let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}var R=new Set,S=0;function gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Z(t,e,n,i,r,s,o,u=0){let f=16.666/i,c=`{
`;for(let m=0;m<=1;m+=f){let F=e+(n-e)*s(m);c+=m*100+`%{${o(F,1-F)}}
`}let h=c+`100% {${o(n,1-n)}}
}`,a=`__svelte_${gt(h)}_${u}`,l=K(t);R.add(l);let d=l.__svelte_stylesheet||(l.__svelte_stylesheet=_t(t).sheet),_=l.__svelte_rules||(l.__svelte_rules={});_[a]||(_[a]=!0,d.insertRule(`@keyframes ${a} ${h}`,d.cssRules.length));let b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${a} ${i}ms linear ${r}ms 1 both`,S+=1,a}function bt(t,e){let n=(t.style.animation||"").split(", "),i=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),S-=r,S||Ft())}function Ft(){N(()=>{S||(R.forEach(t=>{let e=t.__svelte_stylesheet,n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),R.clear())})}var C;function y(t){C=t}function q(){if(!C)throw new Error("Function called outside component initialization");return C}function ne(t){q().$$.on_destroy.push(t)}function ie(){let t=q();return(e,n)=>{let i=t.$$.callbacks[e];if(i){let r=X(e,n);i.slice().forEach(s=>{s.call(t,r)})}}}function re(t,e){let n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}var v=[];var tt=[],D=[],et=[],$t=Promise.resolve(),L=!1;function wt(){L||(L=!0,$t.then(P))}function O(t){D.push(t)}var B=!1,I=new Set;function P(){if(!B){B=!0;do{for(let t=0;t<v.length;t+=1){let e=v[t];y(e),vt(e.$$)}for(y(null),v.length=0;tt.length;)tt.pop()();for(let t=0;t<D.length;t+=1){let e=D[t];I.has(e)||(I.add(e),e())}D.length=0}while(v.length);for(;et.length;)et.pop()();L=!1,B=!1,I.clear()}}function vt(t){if(t.fragment!==null){t.update(),g(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}var x;function xt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function z(t,e,n){t.dispatchEvent(X(`${e?"intro":"outro"}${n}`))}var A=new Set,p;function kt(){p={r:0,c:[],p}}function Et(){p.r||g(p.c),p=p.p}function nt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function St(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),p.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}var Ct={duration:0};function oe(t,e,n,i){let r=e(t,n),s=i?0:1,o=null,u=null,f=null;function c(){f&&bt(t,f)}function h(l,d){let _=l.b-s;return d*=Math.abs(_),{a:s,b:l.b,d:_,duration:d,start:l.start,end:l.start+d,group:l.group}}function a(l){let{delay:d=0,duration:_=300,easing:b=ot,tick:m=$,css:F}=r||Ct,M={start:lt()+d,b:l};l||(M.group=p,p.r+=1),o||u?u=M:(F&&(c(),f=Z(t,s,l,_,d,b,F)),l&&m(0,1),o=h(M,_),O(()=>z(t,l,"start")),ut(k=>{if(u&&k>u.start&&(o=h(u,_),u=null,z(t,o.b,"start"),F&&(c(),f=Z(t,s,o.b,o.duration,0,b,r.css))),o){if(k>=o.end)m(s=o.b,1-s),z(t,o.b,"end"),u||(o.b?c():--o.group.r||g(o.group.c)),o=null;else if(k>=o.start){let rt=k-o.start;s=o.a+o.d*b(rt/o.duration),m(s,1-s)}}return!!(o||u)}))}return{run(l){T(r)?xt().then(()=>{r=r(),a(l)}):a(l)},end(){c(),o=u=null}}}function se(t,e){let n=e.token={};function i(r,s,o,u){if(e.token!==n)return;e.resolved=u;let f=e.ctx;o!==void 0&&(f=f.slice(),f[o]=u);let c=r&&(e.current=r)(f),h=!1;e.block&&(e.blocks?e.blocks.forEach((a,l)=>{l!==s&&a&&(kt(),St(a,1,1,()=>{e.blocks[l]===a&&(e.blocks[l]=null)}),Et())}):e.block.d(1),c.c(),nt(c,1),c.m(e.mount(),e.anchor),h=!0),e.block=c,e.blocks&&(e.blocks[s]=c),h&&P()}if(ct(t)){let r=q();if(t.then(s=>{y(r),i(e.then,1,e.value,s),y(null)},s=>{if(y(r),i(e.catch,2,e.error,s),y(null),!e.hasCatch)throw s}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ce(t,e,n){let i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}var le=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;var ue=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);function ae(t){t&&t.c()}function Dt(t,e,n,i){let{fragment:r,on_mount:s,on_destroy:o,after_update:u}=t.$$;r&&r.m(e,n),i||O(()=>{let f=s.map(j).filter(T);o?o.push(...f):g(f),t.$$.on_mount=[]}),u.forEach(O)}function it(t,e){let n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(v.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,s,o,u=[-1]){let f=C;y(t);let c=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(a,l,...d)=>{let _=d.length?d[0]:l;return c.ctx&&r(c.ctx[a],c.ctx[a]=_)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](_),h&&Ot(t,a)),l}):[],c.update(),h=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){at();let a=yt(e.target);c.fragment&&c.fragment.l(a),a.forEach(pt)}else c.fragment&&c.fragment.c();e.intro&&nt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),ft(),P()}y(f)}var At;typeof HTMLElement=="function"&&(At=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(j).filter(T);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){g(this.$$.on_disconnect)}$destroy(){it(this,1),this.$destroy=$}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!W(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var Mt=class{$destroy(){it(this,1),this.$destroy=$}$on(e,n){let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};export{$ as a,g as b,T as c,jt as d,Tt as e,G as f,Nt as g,Rt as h,qt as i,Lt as j,Bt as k,It as l,Pt as m,zt as n,dt as o,Ht as p,pt as q,Wt as r,mt as s,Q as t,Gt as u,Yt as v,Jt as w,Ut as x,Vt as y,Kt as z,Qt as A,Xt as B,Zt as C,te as D,ee as E,ne as F,ie as G,re as H,O as I,kt as J,Et as K,nt as L,St as M,oe as N,se as O,ce as P,ae as Q,Dt as R,it as S,fe as T,Mt as U};
//# sourceMappingURL=chunk-672ZPAPS.js.map
