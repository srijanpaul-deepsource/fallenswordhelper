import{a as B,b as O}from"./chunk-DETIXNU4.js";import"./chunk-OY6N4E47.js";import"./chunk-JYJDUK7M.js";import"./chunk-YJVBIGD3.js";import{B as D,D as I,R as L,Y as M,Z as q,a as _,d as C,o as s,p as m,q as d,s as h,t as b,u as U,v as E,w as N,z as p}from"./chunk-4MM6RLJ7.js";import"./chunk-XXE2FQRZ.js";import{a as v}from"./chunk-AMIV6VU6.js";import{a as z}from"./chunk-CQI4LTJC.js";import"./chunk-DREXNAOH.js";import{a as T}from"./chunk-PXUZLVKP.js";import"./chunk-ODQJYK6Y.js";import"./chunk-SMGTENZD.js";import"./chunk-EVSMFORE.js";import{a as $}from"./chunk-Q3PN54RS.js";import"./chunk-DO7SCVXY.js";import{a as w}from"./chunk-HNI63WVA.js";import"./chunk-KE767BLN.js";import"./chunk-TUVTWIHM.js";import"./chunk-4ATHPVF4.js";import"./chunk-RTMHI3L7.js";import"./chunk-IWE7LPGP.js";import{a as A}from"./chunk-VWFYI5BK.js";import"./chunk-QVWAWWED.js";import"./chunk-PYHGZC4L.js";import"./chunk-D76XH5RX.js";import"./chunk-MA3AC62H.js";import"./chunk-DTSXLBNB.js";import"./chunk-NCV3HP3S.js";import"./chunk-STY5NEH4.js";import"./chunk-M7Q5FD7X.js";import"./chunk-K2U7JEMX.js";import"./chunk-PUAVFQTB.js";import{L as G,M as S}from"./chunk-OHKPSLFK.js";import{a as g}from"./chunk-EJREXK3Y.js";function K(n){return w({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:n})}function k(n){return $(n.map(K))}function x(n){return B({subcmd2:"joinall",group:n})}function J(n){return z(x,k,n)}function Q(n){let t,o,e,l,c,f;return{c(){t=h("p"),o=b("Join all attack groups"),e=b(n[2]),l=b("."),p(t,"class","notification-content"),p(t,"style",n[3])},m(i,r){m(i,t,r),s(t,o),s(t,e),s(t,l),c||(f=N(t,"click",n[5],{once:!0}),c=!0)},p(i,r){r&4&&D(e,i[2]),r&8&&p(t,"style",i[3])},d(i){i&&d(t),c=!1,f()}}}function W(n){let t,o,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Z,then:Y,catch:X};return L(o=n[4](),e),{c(){t=E(),e.block.c()},m(l,c){m(l,t,c),e.block.m(l,e.anchor=c),e.mount=()=>t.parentNode,e.anchor=t},p(l,c){n=l},d(l){l&&d(t),e.block.d(l),e.token=null,e=null}}}function X(n){return{c:_,m:_,d:_}}function Y(n){let t;return{c(){t=h("p"),t.textContent="Joined.",p(t,"class","notification-content"),I(t,"line-height","32px")},m(o,e){m(o,t,e)},d(o){o&&d(t)}}}function Z(n){let t,o;return{c(){t=h("span"),o=b("'"),p(t,"class","notification-content fshSpinner fshRelative")},m(e,l){m(e,t,l),m(e,o,l)},d(e){e&&d(t),e&&d(o)}}}function tt(n){let t,o,e,l;function c(r,u){return r[0]?W:Q}let f=c(n,-1),i=f(n);return{c(){t=h("li"),o=h("a"),e=h("span"),l=U(),i.c(),p(e,"class","notification-icon"),p(o,"href",n[1]),p(t,"class","notification")},m(r,u){m(r,t,u),s(t,o),s(o,e),s(o,l),i.m(o,null)},p(r,[u]){f===(f=c(r,u))&&i?i.p(r,u):(i.d(1),i=f(r),i&&(i.c(),i.m(o,null))),u&2&&p(o,"href",r[1])},i:_,o:_,d(r){r&&d(t),i.d()}}}function nt(n,t,o){let e=a=>!g.enableMaxGroupSizeToJoin||a.members.length<g.maxGroupSizeToJoin,l=a=>a.name===T(),c=a=>!a.members.find(l),f=a=>a.id,i=0,r=G,u="",j="height: 24px; padding: 6px 2px 10px;";g.enableMaxGroupSizeToJoin&&(r=S,u=` less than size ${g.maxGroupSizeToJoin}`,j="height: 35px; padding: 3px 2px 2px;");async function V(a){let y=a.r.filter(e).filter(c).map(f);y.length&&await J(y)}async function F(){let a=await O();a.s&&await V(a)}function H(a){a.preventDefault(),v("notification","Join All"),o(0,i=1)}return[i,r,u,j,F,H]}var P=class extends q{constructor(t){super();M(this,t,nt,tt,C,{})}},R=P;function et(n){return new R({anchor:n,target:n.parentNode})}function ot(){let n=A("notification-guild-group");n&&et(n)}export{ot as default};
//# sourceMappingURL=injectJoinAllLink-BZW6JTQV.js.map