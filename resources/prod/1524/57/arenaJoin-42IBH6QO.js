import{a as H}from"./chunk-XWCOBYKA.js";import{a as C}from"./chunk-5QHHZXGJ.js";import{a as x,b as B,c as w}from"./chunk-C6MIHO5X.js";import"./chunk-SG76QCJQ.js";import"./chunk-6PPF73AD.js";import"./chunk-3IPJFZFB.js";import"./chunk-JPHNH7B6.js";import"./chunk-VPACFVET.js";import{a as $}from"./chunk-DQL3KGKU.js";import"./chunk-I53MV4XR.js";import"./chunk-6LUWYAHK.js";import"./chunk-JLIKN5T7.js";import"./chunk-UCAEGY5G.js";import"./chunk-3SPZG643.js";import{a as E}from"./chunk-7GJVXUU6.js";import{a as S}from"./chunk-UBNFBDOF.js";import"./chunk-3UINQFXZ.js";import"./chunk-NGPV6SGF.js";import"./chunk-FDUOEL5N.js";import"./chunk-3HH6OK6J.js";import"./chunk-WP75TXSA.js";import"./chunk-ZX6BQCBQ.js";import{a as h}from"./chunk-EFBDFKZE.js";import"./chunk-CNT3YB5M.js";import{a as b}from"./chunk-BY3VYB7D.js";import"./chunk-6GHWLWMY.js";import"./chunk-4UVID5BY.js";import"./chunk-BW7Q2ZXG.js";import"./chunk-J3EQWWDK.js";import"./chunk-ZCBAMDZC.js";import"./chunk-V3D7ICIN.js";import{a as m}from"./chunk-MKSWV7LK.js";import"./chunk-3ZXYCFKP.js";import"./chunk-LRUSX4KB.js";import"./chunk-TMK7VANP.js";import"./chunk-ODHPFHKH.js";import"./chunk-WMSWBFUP.js";import{a}from"./chunk-QPWRUAE6.js";import{a as s}from"./chunk-ZYVZFCZ6.js";import"./chunk-UL2EF2NH.js";import"./chunk-A64OVPAW.js";import"./chunk-NIAUHSKU.js";import"./chunk-TBCMWPFS.js";import"./chunk-63VZJNBW.js";import"./chunk-ATQ2IISL.js";import{a as y}from"./chunk-R7NI253Q.js";import{a as v}from"./chunk-V2KRM43J.js";import"./chunk-2VODWHYJ.js";import"./chunk-AKOYB2MJ.js";import{a as g}from"./chunk-PCS24QV6.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import"./chunk-OEMG4KI7.js";import"./chunk-IW5EBVFR.js";import"./chunk-7QMLZEL5.js";import"./chunk-25C4ZULH.js";import"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import"./chunk-OPFEBT2F.js";import{b as i}from"./chunk-33VL7FGV.js";import{a as n}from"./chunk-7ZQZE7AG.js";var M=()=>Number(h("pvp_id")),T=M;function c(e){let t=T();return e.arenas.find(o=>o.id===t)}function f(e){return x({subcmd:"usesetup",set_id:e})}var l;function A(e){return l||(l=a(e,s())),l}function N(e,t){let o=String(t-1);t===0&&(o="x"),m(e,`<img src="${i}arena/${o}.png" class="moveImg">`)}function q(e,t){return`<option value="${String(t.id)}"${H(e.slots.join(),t.slots.join())}>${t.name}</option>`}function _(e,t){let o=A(t);y("",o),e.slots.forEach(n(N,o))}function P(e,t,o){f(t.target.value).then(r=>{r.s&&_(o,e)})}function j(e,t,o){let r=e.sets.find(I=>I.id===Number(o.target.value));r&&P(t,o,r)}function D(e,t){if(e.sets.length>0){let o=C({innerHTML:e.sets.map(n(q,e.current_set)).join("")});v(o,"change",n(j,e,t));let r=s({className:"flex"});a(r,o),E(t,r)}}function p(e,t,o){if(o.specials){let r=s({className:"flex"});D(e,r),_(e.current_set,r),a(t,r)}}var J=e=>String(Number(e));function d(e,t){return`<div><div>${e}</div><div><img src="${i}ui/arena/specials_${J(t)}.png"></div></div>`}function L(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${d("Specials",e.specials)}${d("Hell Forge",e.hellforge)}${d("Epic",e.epic)}<div><div>Max Equip Level</div><div>${S(e.equip_level)}</div></div></div>`}function u(e){let t=b("#pCC > form > table tr:nth-of-type(4) td");if(e.r&&t){t.setAttribute("align","center");let o=c(e.r);m(t,L(o)),p(e.r,t,o)}}function U(){g("arenaTypeTabs")?w():($(),B().catch(()=>({})).then(u))}export{U as default};
//# sourceMappingURL=arenaJoin-42IBH6QO.js.map
