import{a as L}from"./chunk-6QDARWNG.js";import{a as tt}from"./chunk-VSWNSL6M.js";import{a as I}from"./chunk-GWQIAEUO.js";import"./chunk-VC2JQXCB.js";import{a as l,c as u}from"./chunk-OYWWZS4U.js";import{a as et}from"./chunk-QXUUHL7X.js";import{a as X}from"./chunk-HYNNYWWU.js";import{a as Y}from"./chunk-OROJHKPP.js";import{a as Z}from"./chunk-KM7CX52O.js";import{c as z}from"./chunk-TEC2ODHE.js";import{a as K}from"./chunk-VZUP227M.js";import{a as G}from"./chunk-CBOBD5IF.js";import{a as T}from"./chunk-MMMFRLVI.js";import"./chunk-ITOMCHW6.js";import{a as J}from"./chunk-WPRJRMRS.js";import{a as B}from"./chunk-IGQKMDGJ.js";import{a as j}from"./chunk-3PKKL4OY.js";import{a as M}from"./chunk-PGNGZ7BH.js";import{f as N}from"./chunk-XP7MEXYI.js";import"./chunk-GKC6CNA3.js";import{a as v}from"./chunk-ZKX2T3S6.js";import"./chunk-EWJFGUXI.js";import"./chunk-ZJPXXQSJ.js";import{a as R}from"./chunk-7H3CUBDO.js";import"./chunk-DHF6BJQI.js";import"./chunk-GWMHXCGO.js";import{a as F}from"./chunk-YZLKCQP2.js";import"./chunk-KXW7HYGX.js";import{b as Q}from"./chunk-IYHXDIFW.js";import{a as P}from"./chunk-HTLHARA4.js";import{a as U}from"./chunk-OFGKBPZY.js";import"./chunk-EQPMHYZD.js";import{a as f}from"./chunk-C34SKZ6F.js";import"./chunk-TMODYEZT.js";import{a as O,c as _}from"./chunk-PZDIN3T4.js";import"./chunk-H5GSZRCV.js";import"./chunk-AM443DK7.js";import{a as V}from"./chunk-PNCKZ23Z.js";import"./chunk-BR5BZ5EG.js";import"./chunk-GUIE3S4C.js";import{a as x}from"./chunk-FTXTFPQL.js";import"./chunk-4AN7KDFP.js";import"./chunk-WERDHZX6.js";import"./chunk-7RQZYKTJ.js";import{a as q}from"./chunk-UND2M5KJ.js";import{a as s}from"./chunk-XJ4CM2CH.js";import{a as m}from"./chunk-626NJWGF.js";import"./chunk-6LZRRVCI.js";import"./chunk-5OQCD7R7.js";import"./chunk-QNQWEJ2C.js";import"./chunk-KUIZLI6K.js";import"./chunk-LOSGOKOA.js";import"./chunk-2A4DWP7Z.js";import"./chunk-X7LACEVL.js";import"./chunk-UG6Q3XWI.js";import"./chunk-TBVFACB7.js";import"./chunk-D5AS4V7F.js";import"./chunk-WUYDXKAM.js";import"./chunk-5XAAMTXP.js";import"./chunk-O5LMDCSL.js";import"./chunk-T5PPVP6C.js";import"./chunk-4LLJDNLH.js";import{a}from"./chunk-J3KBZ4ZI.js";import{a as D}from"./chunk-Y27L7NRG.js";import"./chunk-PYNBBPHV.js";import{a as W}from"./chunk-5TZ7D23L.js";import"./chunk-BPFW3H66.js";import"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import{a as E}from"./chunk-EGDIV5JD.js";import"./chunk-A6IIWQBH.js";import"./chunk-MC5JUWDN.js";import{b as A}from"./chunk-AACPE6UD.js";import{a as k}from"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import{B as y,r as C}from"./chunk-7JEA3TWT.js";import{b as w}from"./chunk-5BRYW4V3.js";import{a as r}from"./chunk-MJT5TAYX.js";function mt(){k.sortBy="n",k.sortAsc=!0}function at(t){return[10,12,15,16].indexOf(t.t)!==-1||t.n==="Zombie Coffin"?"smallLink":"notLink"}function ct(t){let e=w;return t.b===13699?e+=`composing/${t.x.d}_${t.x.c}.png`:e+=`items/${t.b}.gif`,e}function ft(t,e,o){let n=t.insertRow(-1);o.dom=n;let i="fshEq ",h="fshUse ";o.t<9?i+="smallLink":i+="notLink",h+=at(o),a(`<td class="fshCenter"><span class="${i}" data-itemid="${o.a}">Wear</span>&nbsp;|&nbsp;<span class="${h}" data-itemid="${o.a}">Use/Ext</span></td><td><img src="${ct(o)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${o.b}&amp;inv_id=${o.a}&amp;t=1&amp;p=${e}&amp;currentPlayerId=${e}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${o.n}</td>`,n)}function lt(t){return L(String(t.id),t.name)}function ut(t){return L("0","All")+t.r.inventories.map(lt).join("")}function dt(t,e,o){o.items.sort(z).forEach(r(ft,t,e))}function pt(t){let e=M({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${ut(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=B();return s(e,o),mt(),t.r.inventories.forEach(r(dt,o,J())),e}function H(t){let e=pt(t),o=m();return s(o,e),o}var d=(t,e)=>t+String(e);function ht(t,e,o){return U({checked:o===0,id:d(t,o),name:t,type:"radio"})}function bt(t,e,o,n){let i=et({className:"ui-state-default ui-corner-top"});return s(i,P({htmlFor:d(t,n),innerHTML:o})),n!==0&&v(i,"click",()=>{l(d(t,n),e[n])}),i}function kt(t,e,o){let n=j({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"});return t.map(r(bt,e,o)).forEach(r(s,n)),n}var yt=()=>m({className:"ui-tabs-panel ui-corner-bottom"});function g(t,e,o){let n=m({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),i=r(s,n);e.map(r(ht,o)).forEach(i);let b=e.map(yt);l(d(o,0),b[0]);let S=kt(e,o,b);l(`${o}-header`,S),s(n,S),b.forEach(i),a("",t),s(t,n)}function Et(t,e){t[e]?t[e].count+=1:t[e]={count:1,nicknameList:[]}}function ot(t,e){return`<a href="${C}${t}">${e}</a>`}function Lt(t){return t[1].nicknameList.length>0}function It(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(r(ot,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function Ht(t){return E(t).filter(Lt).map(It).join("")}function gt(t){return t.displayOnAH&&!t.found}function $t(t){return ot(t.searchname,t.nickname)}function St(t){return t.filter(gt).map($t).join(", ")}function vt(t){return t[1].nicknameList.length===0}function wt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function Ct(t){return E(t).filter(vt).map(wt).join("")}function At(t,e){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${y}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${Ht(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${St(e)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${y}">AH Quick Search</a> found in your inventory</td></thead><tbody>${Ct(t)}</tbody></table>`}function Tt(t,e,o){e===o.searchname&&(o.found=!0,t[e].nicknameList.indexOf(o.nickname)<0&&t[e].nicknameList.push(o.nickname))}function xt(t,e,o){let n=o.n;Et(t,n),e.forEach(r(Tt,t,n))}function Qt(t,e,o){o.items.forEach(r(xt,t,e))}function $(t){let e={},o=T("quickSearchList")||[];t.r.inventories.forEach(r(Qt,e,o));let n=m();return f(n,At(e,o)),n}var p="disableQuickWearPrompts",c,rt;function qt(t,e,o){o.r===0&&a(`<span class="fastWorn">${e}</span>`,t.parentNode)}function nt(t,e,o){W("QuickWear",`doAction - ${o}`),V("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),e(t.dataset.itemid).then(r(qt,t,o))}function it(t){nt(t,_,"Used")}function Wt(t){c?it(t):K("Use/Extract Item","Are you sure you want to use/extract the item?",r(it,t))}function Ut(t){nt(t,O,"Worn")}function Dt(t,e,o){let n=o.dom;if(t==="0")n.classList.remove("fshHide");else{let i=t!==e.toString();Z(n,i)}}function Ft(t,e){let o=e.id;e.items.forEach(r(Dt,t,o))}function Pt(t){let e=t.dataset.folder;rt.r.inventories.forEach(r(Ft,e))}function jt(){c=!c,F(p,c)}function Nt(){return[[r(I,["smallLink","fshEq"]),Ut],[r(I,["smallLink","fshUse"]),Wt],[r(q,"fshFolder"),Pt],[Y(p),jt]]}function Bt(t){return t&&t.s&&x(t.r?.inventories)}function Mt(t){s(t,m({className:"qwPref",innerHTML:N(p)}))}function st(t,e,o){s(o,t(e))}function Rt(t,e){u("qwtab-header",Mt),u("qwtab0",r(st,H,e)),u("qwtab1",r(st,$,e)),g(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),D(t,X(Nt()))}function Ot(t,e){Bt(e)&&(rt=e,Rt(t,e))}function Vt(t){let e=t||Q;!e||(f(e,"Getting item list from backpack..."),tt().then(r(Ot,e)),c=A(p),G("ui-dialog-titlebar-close").forEach(o=>o.blur()))}function _t(t){R()&&Vt(t)}export{_t as default};
//# sourceMappingURL=quickWear-YOASXK4I.js.map