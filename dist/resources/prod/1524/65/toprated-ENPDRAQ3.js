import{a as _}from"./chunk-MUWGTARO.js";import"./chunk-P77B3UDN.js";import{a as x}from"./chunk-GE4YEU5P.js";import{a as S}from"./chunk-T73GBUT5.js";import{a as E}from"./chunk-NZEWGVM5.js";import{a as O}from"./chunk-KPTYACHH.js";import{a as k}from"./chunk-SYSW5LZX.js";import"./chunk-LQQTECLM.js";import"./chunk-TGZKSQRP.js";import{a as C}from"./chunk-EF2M573K.js";import{a as I}from"./chunk-F3VUN2ON.js";import"./chunk-YNVS32OD.js";import{a as c}from"./chunk-6F7QE44M.js";import"./chunk-DLQ3WG6P.js";import"./chunk-U2VGMJIO.js";import"./chunk-7YFKPLW2.js";import{b as P}from"./chunk-XDVBPMJH.js";import{a as g}from"./chunk-5RI7URZ5.js";import"./chunk-ZQNAMEFH.js";import{a as i}from"./chunk-SGEJ7TQZ.js";import"./chunk-FPDB6HHT.js";import{a as L,b as T}from"./chunk-FE6KWMWP.js";import"./chunk-LXIXLVQZ.js";import"./chunk-TB3K6PDT.js";import{a as w}from"./chunk-PIOZIY5L.js";import{a as N}from"./chunk-TIH6YU7D.js";import"./chunk-ZVBGTPU7.js";import"./chunk-UZ5IF7X7.js";import{a as h}from"./chunk-BT4GCRJE.js";import{b as u}from"./chunk-XJYFC7TB.js";import"./chunk-55L4ZDU3.js";import"./chunk-QWDVXKTR.js";import"./chunk-ABZ54ON2.js";import"./chunk-KR2SDNOK.js";import"./chunk-KM3BDUKX.js";import"./chunk-LHBSBOBO.js";import{b as r}from"./chunk-ALGYGCJU.js";import"./chunk-2COHD5H3.js";import"./chunk-2AO2GDV5.js";import"./chunk-UZF2DPM4.js";import"./chunk-PFETQSML.js";import"./chunk-E2LRFPD6.js";import{a as y}from"./chunk-OJ42IKEN.js";import"./chunk-YMWUQMPF.js";import"./chunk-RRWRGO3F.js";import"./chunk-3E35A5QB.js";import{a as v}from"./chunk-3ODBLJBA.js";import{b as d}from"./chunk-MIAGY67V.js";import{a as f}from"./chunk-2OH7AKYH.js";import"./chunk-LP5DJPCW.js";import"./chunk-AMNKKFPI.js";import"./chunk-R5WQFHT3.js";import{Ma as m,j as p}from"./chunk-3IHZF2GE.js";import"./chunk-WZXZ6YXZ.js";var n,l;function B(){return n=d("highlightPlayersNearMyLvl"),n}function F(){return l=w(),l}var G=[()=>n||B(),e=>f(e)||e!==(l||F()),(e,t)=>t.last_login>=u-604800,(e,t)=>t.virtual_level>=L(),(e,t)=>t.virtual_level<=T()];function H(e){if(e.rows[0].cells[0].children[0])return Number(p.exec(e.rows[0].cells[0].children[0].href)[1])}function M(e,t){return G.every(o=>o(e,t))}function s(e,t){let o=H(e);c(e.rows[0],`<td>${P({last_login:t.last_login})}</td>`),M(o,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var R=e=>[_(e),i(e)];function j(e){k(e);let t=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function A([e,t]){let o=await S(t);s(e,o)}async function U(){let e=g(m,r).map(R);await N(e.map(A))}async function a(e){C("toprated","FindOnlinePlayers");let t=j(e.target);await U(),t.remove()}function b(){let e=h("td",r)[0];e.children[0].className="fshTopListWrap";let t=x({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});I(e,t),v(t,a)}var Q=[()=>y(),()=>r,()=>r.children[0],()=>r.children[0].rows,()=>r.children[0].rows.length>2,()=>i(r.children[0].rows[1]).startsWith("Last Updated")];function W(){return Q.every(E)}function q(){W()&&b()}export{q as default};
//# sourceMappingURL=toprated-ENPDRAQ3.js.map
