import{a as n}from"./chunk-HNPK2KOO.js";import{a as w}from"./chunk-ZMDWDZOQ.js";import{a as L}from"./chunk-M2B4L5S5.js";import"./chunk-BTRKHT5E.js";import"./chunk-7EO74QGS.js";import"./chunk-YCZA3THB.js";import{a as T}from"./chunk-4FRE2TLY.js";import{a as C}from"./chunk-VHI5XX6M.js";import{a as S}from"./chunk-5ABGN6TX.js";import{b as I}from"./chunk-7KGOEIPC.js";import{a as v}from"./chunk-CGNMARMZ.js";import"./chunk-KIGZSTQN.js";import{a as B}from"./chunk-6NNTO4LI.js";import{a as F}from"./chunk-KHYQYGSX.js";import{a as l}from"./chunk-YK5YCIFI.js";import"./chunk-BOK6PI4C.js";import{a as y}from"./chunk-PE2Z7ZIG.js";import"./chunk-CI7BPN4C.js";import{a as p}from"./chunk-CLH6HBBH.js";import"./chunk-HDTIWYV4.js";import"./chunk-NSH7KROB.js";import"./chunk-TJGDVHS5.js";import"./chunk-RF7K337W.js";import{a as N}from"./chunk-2ALTJLAZ.js";import{a as o}from"./chunk-V6QPYEQA.js";import{a as d}from"./chunk-26WEU6C7.js";import"./chunk-E6LT46ZX.js";import"./chunk-PUMXFYDY.js";import"./chunk-RIMVOGPJ.js";import"./chunk-UJM3TQ4Q.js";import"./chunk-UUZRSBW7.js";import"./chunk-4HFYLTSA.js";import{a as b}from"./chunk-OBGXUIQG.js";import{a as g}from"./chunk-ZVRZUN6W.js";import"./chunk-CXH2ICGZ.js";import"./chunk-B4CACURR.js";import"./chunk-X3N42HIO.js";import"./chunk-EMXVU7FX.js";import{a as k}from"./chunk-PZET6DEP.js";import"./chunk-353SUQQH.js";import"./chunk-ICRHQMJP.js";import{a as s}from"./chunk-FJHRVDDP.js";import"./chunk-SVFIEWQV.js";import{g as h,sa as E}from"./chunk-NEZAPTHY.js";import"./chunk-GTEPU6L3.js";import"./chunk-J6WQ3WGO.js";function j(e){return e?n("-2","Worn"):""}function x(e){return n(e[0],e[1])}function u(e,t){return n("0","All")+j(t)+n("-1","Main")+k(e).map(x).join("")}var r,i,A,c=0,m,a;function D(){let e=y(E,I.lastElementChild);return s.cmd==="crafting"?e[1]:e[0]}function H(e){let t=d(),f=e[0].parentNode;o(t,f),o(a,t)}function M(){a||(a=d({className:"fshItemGrid"}),i.forEach(H),T(r.parentNode,a),C(r))}function G(e){return c!==0&&e[2]!==c}function Q(e){return m.checked&&e[3]!=="Perfect"}function V(e){let t=e[0].parentNode.parentNode;w(t,G(e)||Q(e))}function P(){M(),i.forEach(V)}function W(e){if(!N("fshFolder",e.target))return;let t=Number(e.target.dataset.folder);t!==c&&(c=t,P())}function q(e){return e.equipped?-2:e.folder_id}function R(e){let t=A[e[1]];t&&e.push(q(t),t.craft)}function _(){i.forEach(R)}function z(e){let t=r.parentNode.parentNode.previousElementSibling.children[0];return t.classList.add("fshCenter"),b(t,W),l(t,u(e,!0)),t}function J(e){if(s.cmd==="crafting"){m={checked:!1};return}let t=v({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '});m=B({className:"fshVMid",type:"checkbox"}),g(m,"change",P),o(t,m),l(e," &ensp;"),o(e,t)}function K(e){if(e.items&&r){A=e.items,p(4,_);let t=z(e.folders);J(t)}}function O(e){let{tipped:t}=e.dataset,f=t.match(h);return[e,f[2]]}function U(){r=D(),i=F("img",r).map(O)}function X(){S()&&(L().then(K),p(3,U))}export{X as default};
//# sourceMappingURL=craftForge-ROAWP545.js.map