import{a as e}from"./chunk-DC5ZFAIU.js";import{a as d}from"./chunk-6WXDQZ7M.js";import{a as i}from"./chunk-I4D4CXXN.js";import{a as f}from"./chunk-VML6VTTW.js";import{a as p}from"./chunk-TTIL6Q2Q.js";import{a as s}from"./chunk-57Z3RMCJ.js";import{a as u}from"./chunk-7XTGUVW5.js";import{a as c}from"./chunk-CF4P6XS2.js";import{a}from"./chunk-SWDYJ63E.js";function o(r){return d(a({subcmd:"groups"},r))}function m(){return o({subcmd2:"view"})}var l=r=>p('#pCC img[src$="/icon_action_view.png"]',r),g=r=>Number(i(r.parentElement.href,"group_id")),w=r=>e(r).cells[0].children[0].textContent,x=r=>r.split(",").map(s).filter(Boolean),b=r=>e(r).cells[1].firstChild.textContent,G=r=>x(b(r)).map(t=>({name:t})),v=r=>[{name:w(r)},...G(r)],C=r=>({id:g(r),members:v(r)}),h=r=>l(r).map(C);function y(r){let t=u(r);return{r:h(t),s:!0}}async function n(){let r=await c({cmd:"guild",subcmd:"groups"});return y(r)}function A(){return f(m,n)}export{o as a,A as b};
//# sourceMappingURL=chunk-BWL3J5LP.js.map
