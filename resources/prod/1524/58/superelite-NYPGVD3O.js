import{a as n,b as B,c as a,d as E}from"./chunk-7M3QWOX4.js";import{a as w,b as S}from"./chunk-GM7CCXOC.js";import{a as y}from"./chunk-RPWTFPDU.js";import{a as k}from"./chunk-3XWD52EV.js";import{a as b}from"./chunk-LM75YK3Q.js";import"./chunk-OOB63CZH.js";import{f as h}from"./chunk-GUAUZY4I.js";import"./chunk-CUGWZHY6.js";import"./chunk-6GFXSPHP.js";import"./chunk-JPA4PKRE.js";import{a as U}from"./chunk-RO77CKSJ.js";import"./chunk-5ABGN6TX.js";import"./chunk-7VEIRK6Q.js";import"./chunk-LI4VOE4A.js";import{a as g}from"./chunk-LM2VUNGX.js";import"./chunk-HGQBSNNF.js";import{b as p}from"./chunk-7KGOEIPC.js";import"./chunk-7QZ7K4JT.js";import"./chunk-JNMWULRZ.js";import"./chunk-5YYRQ4XP.js";import{a as d}from"./chunk-YK5YCIFI.js";import"./chunk-BOK6PI4C.js";import"./chunk-NSH7KROB.js";import"./chunk-TJGDVHS5.js";import"./chunk-RF7K337W.js";import{a as m}from"./chunk-V6QPYEQA.js";import"./chunk-E6LT46ZX.js";import"./chunk-KIPS4CXG.js";import"./chunk-RTVLQCU7.js";import"./chunk-PUMXFYDY.js";import"./chunk-QU2O5LW3.js";import"./chunk-XQHJD2OP.js";import"./chunk-RIMVOGPJ.js";import"./chunk-UJM3TQ4Q.js";import"./chunk-UUZRSBW7.js";import"./chunk-4HFYLTSA.js";import{a as T}from"./chunk-FSKHKHHU.js";import{a as f}from"./chunk-ZVRZUN6W.js";import"./chunk-CXH2ICGZ.js";import"./chunk-B4CACURR.js";import"./chunk-X3N42HIO.js";import"./chunk-EMXVU7FX.js";import{a as C}from"./chunk-PZET6DEP.js";import"./chunk-353SUQQH.js";import"./chunk-IKPUDF3E.js";import"./chunk-ICRHQMJP.js";import{a as r}from"./chunk-FJHRVDDP.js";import"./chunk-SVFIEWQV.js";import"./chunk-NEZAPTHY.js";import"./chunk-GTEPU6L3.js";import{a as u}from"./chunk-J6WQ3WGO.js";function L(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(y)}function N(e){return[e.getUTCFullYear().toString()].concat(L(e))}function i(e){if(S(e))return w(N(e))}var l="enableSeTracker",o;function P(e,t){d(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${i(new Date(t[1]*1e3))}</td></tr>`)}function D(e){let t=b({className:"fshTTracker"}),s=k({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return m(t,s),e.forEach(u(P,s)),t}function c(){let t=p.lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function R(e){let t=D(e);o=c(),m(o,t)}function x(e,t){return e[1]-t[1]}function H(){n&&n.se&&R(C(n.se).sort(x))}function F(){r.enableSeTracker?a().finally(H):(o&&(o.parentNode.remove(),o=!1),B())}function M(e){e.target.id===l&&(r.enableSeTracker=!r.enableSeTracker,g(l,r.enableSeTracker),F())}function j(){a().finally(H)}function v(){if(U())return;let e=c();e.height=20,e=c(),e.className="fshCenter",T(h(l),e),f(e,"change",M),r.enableSeTracker&&E().then(j)}export{v as default};
//# sourceMappingURL=superelite-NYPGVD3O.js.map