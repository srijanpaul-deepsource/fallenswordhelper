import{a as E}from"./chunk-B5ZQ56HE.js";import{a as u}from"./chunk-MF5UI2DL.js";import{a as h}from"./chunk-D6BL5IS3.js";import{a as c}from"./chunk-22YAZV3W.js";import{a as d}from"./chunk-ND3XCMOS.js";import{a as g}from"./chunk-G3O526VI.js";import{a as m}from"./chunk-GHQYBWLT.js";import{a as l}from"./chunk-2B42SRXB.js";import{a as p}from"./chunk-TDNJGM62.js";import{a}from"./chunk-DEDCEYVR.js";var r=[],f,i;function I(o){u(o.row)}function w(o){o.rows.forEach(I),o.open=!1}function b(o){o.open&&w(o)}function x(){r.forEach(b)}function y(o){E(o.row,!1)}function k(o){o.rows.forEach(y),o.open=!0}function P(o){o.open||k(o)}function T(){r.forEach(P)}function H(o){if(o.rowIndex%i==0)return o}function F(o){if(o.tagName==="TR")return H(o);if(o.tagName!=="TABLE")return F(o.parentNode)}function N(o){let e=F(o.target);if(!e)return;let n=e.rowIndex/i,t=r[n];t.open===!1?(x(),k(t)):w(t)}function R(o){f&&N(o)}function C(o){f&&o.classList.add("fshPoint")}function L(o,e){f?(u(o),e.open=!1):e.open=!0}function V(o,e){d(o)&&o(e)}function v(o,e,n,t){e===0&&(n.header=o,C(o),V(t.extraFn,o)),t.articleTest(e)&&(n.rows[e]=c(n[e],{}),n.rows[e].row=o,L(o,n))}function A(o,e){let n=e.rowIndex%i,t=(e.rowIndex-n)/i;r[t]=c(r[t],{});let s=r[t];s.rows=s.rows||[],v(e,n,s,o)}function B(o){o.header.classList.toggle("fshPoint")}function D(){r.forEach(B)}function j(o){f=!f,h(o,f),f?x():T(),D()}function q(o){f=l(o).checked,m(l(o),"change",a(j,o))}function z(o){i=o.headInd,q(o.prefName),p(o.theTable.rows).forEach(a(A,o)),g(o.theTable,R)}export{z as a};
//# sourceMappingURL=chunk-FIVXI4HL.js.map