import{a as k}from"./chunk-2P7TAVJE.js";import{a as O}from"./chunk-GNSNGI2K.js";import{a as B}from"./chunk-4HA4ZKCB.js";import"./chunk-Y2V52NMO.js";import{a as L,b as E}from"./chunk-LLCHJRIZ.js";import{a as N}from"./chunk-7WL35ONA.js";import"./chunk-NYSBNKOD.js";import"./chunk-W72PJQBX.js";import{b as T}from"./chunk-65WPNHIR.js";import"./chunk-32HY5QBO.js";import{a as C}from"./chunk-OSTU6BBQ.js";import{a as w}from"./chunk-6DEPOJJJ.js";import{b as u}from"./chunk-XQ5CNAXG.js";import{a as x}from"./chunk-7H3CUBDO.js";import"./chunk-DHF6BJQI.js";import{b as o}from"./chunk-IYHXDIFW.js";import"./chunk-KCQQXR3A.js";import{a as v}from"./chunk-OFGKBPZY.js";import{a as I}from"./chunk-ZACNRG5K.js";import"./chunk-MVBTKOHN.js";import"./chunk-NH3HITNH.js";import{a as S}from"./chunk-3WBAVR6T.js";import{a as n}from"./chunk-RC4NT5JT.js";import"./chunk-AIP6BPK2.js";import"./chunk-EQPMHYZD.js";import{a as d}from"./chunk-C34SKZ6F.js";import"./chunk-TMODYEZT.js";import{a as h}from"./chunk-H6KXMG2X.js";import"./chunk-BR5BZ5EG.js";import"./chunk-7RQZYKTJ.js";import"./chunk-XJ4CM2CH.js";import"./chunk-6LZRRVCI.js";import"./chunk-UG6Q3XWI.js";import"./chunk-5XAAMTXP.js";import"./chunk-O5LMDCSL.js";import"./chunk-T5PPVP6C.js";import"./chunk-4LLJDNLH.js";import{a as P}from"./chunk-Y27L7NRG.js";import"./chunk-PYNBBPHV.js";import{a as g}from"./chunk-5TZ7D23L.js";import"./chunk-BPFW3H66.js";import"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import"./chunk-EGDIV5JD.js";import{a as y}from"./chunk-SCZRPZMX.js";import"./chunk-MCETWLUS.js";import"./chunk-A6IIWQBH.js";import"./chunk-MC5JUWDN.js";import{b as f}from"./chunk-AACPE6UD.js";import"./chunk-SCZYWGQD.js";import{a as p}from"./chunk-AMPLIILU.js";import{Ka as c,h as a}from"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";import"./chunk-MJT5TAYX.js";var i,l;function H(){return i=f("highlightPlayersNearMyLvl"),i}function j(){return l=w(),l}var A=[()=>i||H(),e=>p(e)||e!==(l||j()),(e,t)=>t.last_login>=u-604800,(e,t)=>t.virtual_level>=L(),(e,t)=>t.virtual_level<=E()];function G(e){if(e.rows[0].cells[0].children[0])return Number(a.exec(e.rows[0].cells[0].children[0].href)[1])}function _(e,t){return A.every(r=>r(e,t))}function m(e,t){let r=G(e);d(e.rows[0],`<td>${T({last_login:t.last_login})}</td>`),_(r,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var F=e=>[I(e),n(e)];function M(e){S(e);let t=C({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function Q([e,t]){let r=await O(t);m(e,r)}async function R(){let e=y(c,o).map(F);await B(e.map(Q))}async function s(e){g("toprated","FindOnlinePlayers");let t=M(e.target);await R(),t.remove()}function U(){let e=h("td",o)[0];e.children[0].className="fshTopListWrap";let t=v({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});N(e,t),P(t,s)}var b=[()=>x(),()=>o,()=>o.children[0],()=>o.children[0].rows,()=>o.children[0].rows.length>2,()=>n(o.children[0].rows[1]).startsWith("Last Updated")];function q(){return b.every(k)}function D(){q()&&U()}export{D as default};
//# sourceMappingURL=toprated-FGCXZYPB.js.map