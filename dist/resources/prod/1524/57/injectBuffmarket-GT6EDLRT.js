import{a as x}from"./chunk-R2FCBVIS.js";import{a as n}from"./chunk-BY3VYB7D.js";import{b as l}from"./chunk-4UVID5BY.js";import{a as k}from"./chunk-RWQYBWLH.js";import"./chunk-P3CVZFX5.js";import{a as y}from"./chunk-JSZH6HFF.js";import{a as B}from"./chunk-A64OVPAW.js";import"./chunk-NIAUHSKU.js";import{a as b}from"./chunk-QLGZDBRM.js";import{a as f}from"./chunk-EC3YZH5E.js";import"./chunk-RDOAH55S.js";import"./chunk-TBCMWPFS.js";import"./chunk-63VZJNBW.js";import"./chunk-ATQ2IISL.js";import{a as r}from"./chunk-R7NI253Q.js";import{a as d}from"./chunk-WVMSJ4JS.js";import{a as i}from"./chunk-V2KRM43J.js";import"./chunk-AKOYB2MJ.js";import"./chunk-PCS24QV6.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import"./chunk-OPFEBT2F.js";import"./chunk-33VL7FGV.js";import{a as p}from"./chunk-7ZQZE7AG.js";async function s(t){let a=await f({cmd:"buffmarket",subcmd:"buy",id:t}),e=k(a);return e==="Request accepted - buffs have automatically been cast."?{s:!0}:{s:!1,e:{message:e}}}function m(t){return B({cmd:"buffmarket",...t})}function c(t){return m({subcmd:"buy",id:t})}function u(t){return y(c,s,t)}async function h(t,a){a.preventDefault(),r('<div class="fshWaiting">Loading...</div>',t);let e=x(new FormData(a.target)),o=b(await f(e)),g=n("#buff-results",o).parentElement.innerHTML;r(g,t)}function A(t){let a=document.forms[0];i(a,"submit",p(h,t.parentNode))}async function v(t){t.stopPropagation();let a=t.target.getAttribute("onclick").match(/id=([0-9]+)/)?.[1];if(a){let e=t.target.parentNode;e.className="fshActionRow",r('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let o=await u(a);o.s?r('<span class="fshBuffSuccess">Buffs have been applied</span>',e):r(`<span class="fshBuffFail">${o.e.message}</span>`,e)}}function D(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&v(t)}function j(){let t=n("#buff-results");!t||(A(t),d(l,D,!0))}export{j as default};
//# sourceMappingURL=injectBuffmarket-GT6EDLRT.js.map