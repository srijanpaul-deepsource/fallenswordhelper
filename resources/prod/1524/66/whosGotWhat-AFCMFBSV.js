import{a as lt}from"./chunk-5KQNYLBM.js";import{a as A}from"./chunk-TLDKSKZ6.js";import{a as at}from"./chunk-WGWK6A3A.js";import{a as ct}from"./chunk-YQ4BED3J.js";import{a as it}from"./chunk-GT5TUHAG.js";import{b as ot}from"./chunk-DD7SUWQK.js";import"./chunk-OY6N4E47.js";import"./chunk-JYJDUK7M.js";import"./chunk-YJVBIGD3.js";import{a as et}from"./chunk-CUU6FQF7.js";import{a as rt}from"./chunk-BGI5E2EP.js";import{a as nt}from"./chunk-ZGJUBLOJ.js";import"./chunk-6TB3RDXS.js";import{a as st}from"./chunk-E4LGDQH2.js";import"./chunk-MED54ICD.js";import"./chunk-IRVI43RT.js";import"./chunk-CQI4LTJC.js";import"./chunk-DREXNAOH.js";import{a as h}from"./chunk-VOWLBX22.js";import{a as m}from"./chunk-GMERTW32.js";import"./chunk-IPCPLARM.js";import"./chunk-YWK2ANWC.js";import"./chunk-ODQJYK6Y.js";import"./chunk-SMGTENZD.js";import"./chunk-XFT6LK7P.js";import{a as tt}from"./chunk-EVSMFORE.js";import"./chunk-4X4NY56W.js";import"./chunk-Q3PN54RS.js";import"./chunk-LZ2L2TIX.js";import"./chunk-EUWXZKWZ.js";import"./chunk-DO7SCVXY.js";import"./chunk-HNI63WVA.js";import{b as j}from"./chunk-LL4JRT35.js";import"./chunk-KE767BLN.js";import"./chunk-TUVTWIHM.js";import"./chunk-4ATHPVF4.js";import"./chunk-RTMHI3L7.js";import"./chunk-ER7X2LNC.js";import{a as B}from"./chunk-LSTE36AK.js";import"./chunk-IWE7LPGP.js";import{a as I}from"./chunk-W5T3PU55.js";import{b as T}from"./chunk-SBFBOIF5.js";import{a as S}from"./chunk-M5RMVAY3.js";import"./chunk-VWFYI5BK.js";import"./chunk-QVWAWWED.js";import"./chunk-PYHGZC4L.js";import"./chunk-D76XH5RX.js";import{a as N}from"./chunk-MA3AC62H.js";import"./chunk-DTSXLBNB.js";import"./chunk-NCV3HP3S.js";import{a as y}from"./chunk-YG74QOJP.js";import"./chunk-STY5NEH4.js";import"./chunk-M7Q5FD7X.js";import{a as K}from"./chunk-K2U7JEMX.js";import"./chunk-PUAVFQTB.js";import{x as Z}from"./chunk-OHKPSLFK.js";import"./chunk-EJREXK3Y.js";function It(t){return`<td>${t.slot}</td><td><a href="${Z}${t.id}">${t.name}</a></td><td>${t.level}</td><td>${t.rank_name}</td><td>${t.gxp}</td><td>${t.activity}</td><td>${t.pack}</td><td>${t.stam}</td>`}function Bt(t){return t.dom||(t.dom=lt({innerHTML:It(t)})),t.dom}function $(t,e,r){let n=t.tBodies[0],s=et();for(let o of r)s.appendChild(Bt(o.value));t.replaceChild(s,n)}function $t(t,e){return e.equipped||(t[e.player_id]=t[e.player_id]||[],t[e.player_id].push(e)),t}function Ft(t,e){return{...e,rank_name:t}}function Ut(t){return t.members.map(N(Ft,t.name))}function zt(t){return t.r.flatMap(Ut)}function Yt(t,e,r){return{...e,slot:r+1,name_lower:I(e.name),lvl_reverse:0-e.level,rank_lower:I(tt(e.rank_name)),gxp:B(e.guild_xp),gxp_reverse:0-e.guild_xp,activity:it(e.last_activity),act:e.last_activity-j,pack:(t[e.id]||[]).length,pack_reverse:0-(t[e.id]||[]).length,stam:B(e.max_stamina),stam_reverse:0-e.max_stamina}}function F([t,e]){let r=t.items.reduce($t,{});return zt(e).map(N(Yt,r))}var ut=t=>(e,r)=>t(r,e),p=(t,...e)=>(...r)=>e.reduce((n,s)=>s(n),t(...r)),L=(t,e)=>{let r=e||t.length;return(...n)=>{let s=n.length||1;return r===s?t(...n):L((...i)=>t(...n,...i),r-n.length)}};var U=t=>e=>(t(e),e);var E=t=>{let e=t.split("."),r=(s={},o=[])=>{let i=o.shift(),c=s[i];return c==null||o.length===0?c:r(c,o)};return{get(s){return r(s,[...e])},set:(s,o)=>{let i=s,[c,...a]=e.reverse();for(let l of a.reverse())i[l]===void 0&&(i[l]={},i=i[l]);return i[c]=o,s}}};var qt=(t,e)=>t===e?0:t===void 0?1:e===void 0||t<e?-1:1,z;(function(t){t.ASC="asc",t.DESC="desc",t.NONE="none"})(z||(z={}));var Xt=(t,e)=>{let r=E(t).get;return(n,s)=>e(r(n),r(s))},Y=t=>{let{pointer:e,direction:r="asc",comparator:n=qt}=t;if(!e||r==="none")return i=>[...i];let s=Xt(e,n),o=r==="desc"?ut(s):s;return i=>[...i].sort(o)};var x;(function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"})(x||(x={}));var Wt=t=>{switch(t){case x.BOOLEAN:return Boolean;case x.NUMBER:return Number;case x.DATE:return e=>new Date(e);case x.STRING:return p(String,e=>e.toLowerCase());default:return e=>e}},q;(function(t){t.INCLUDES="includes",t.IS="is",t.IS_NOT="isNot",t.LOWER_THAN="lt",t.GREATER_THAN="gt",t.GREATER_THAN_OR_EQUAL="gte",t.LOWER_THAN_OR_EQUAL="lte",t.EQUALS="equals",t.NOT_EQUALS="notEquals",t.ANY_OF="anyOf"})(q||(q={}));var G=t=>e=>!t(e),mt=t=>e=>Object.is(t,e),pt=t=>e=>e<t,ft=t=>e=>e>t,dt=t=>e=>t===e,Qt=t=>e=>e.includes(t),Jt=t=>e=>t.includes(e),Vt={includes:Qt,is:mt,isNot:p(mt,G),lt:pt,gte:p(pt,G),gt:ft,lte:p(ft,G),equals:dt,notEquals:p(dt,G),anyOf:Jt},gt=t=>(...e)=>t.every(r=>r(...e)),Kt=({value:t="",operator:e="includes",type:r})=>{let n=Wt(r),o=p(n,Vt[e])(t);return p(n,o)},Zt=t=>{let e={};return Object.keys(t).filter(n=>Array.isArray(t[n])).forEach(n=>{let s=t[n].filter(o=>o.value!=="");s.length>0&&(e[n]=s)}),e},X=t=>{let e=Zt(t),r=Object.keys(e).map(s=>{let o=E(s).get,i=e[s].map(Kt);return p(o,gt(i))}),n=gt(r);return s=>s.filter(n)};function jt(t,...e){let r=ht(t.raw[0]);for(let[s,o]of e.entries()){if(o instanceof RegExp)r+=o.source;else if(typeof o=="string")r+=te(o);else throw new Error("Illegal substitution: "+o);r+=ht(t.raw[s+1])}let n="";if(r.startsWith("/")){let s=r.lastIndexOf("/");if(s===0)throw new Error("If the `re` string starts with a slash, it must end with a second slash and zero or more flags: "+r);n=r.slice(s+1),r=r.slice(1,s)}return new RegExp(r,n)}function ht(t){return t.replace(/\\`/g,"`")}function te(t){return t.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g,"\\$&")}var W=t=>{let{value:e,scope:r=[],escape:n=!1,flags:s=""}=t,o=r.map(c=>E(c).get);if(r.length===0||!e)return c=>c;let i=n===!0?jt`/${e}/${s}`:new RegExp(e,s);return c=>c.filter(a=>o.some(l=>i.test(String(l(a)))))};var Et=()=>{let t={},e={on(r,...n){return t[r]=(t[r]||[]).concat(n),e},dispatch(r,...n){let s=t[r]||[];for(let o of s)o(...n);return e},off(r,...n){if(r===void 0)Object.keys(t).forEach(s=>e.off(s));else{let s=t[r]||[];t[r]=n.length?s.filter(o=>!n.includes(o)):[]}return e}};return e},C=t=>({emitter:e})=>{let r={},n={off(s){return s||Object.keys(r).forEach(o=>n.off(o)),r[s]&&e.off(s,...r[s]),n}};for(let s of Object.keys(t)){let o=t[s];r[s]=[],n[o]=function(...i){return r[s]=r[s].concat(i),e.on(s,...i),n}}return n};var vt=({page:t=1,size:e}={page:1})=>(r=[])=>{let n=e||r.length,s=(t-1)*n;return r.slice(s,s+n)},At;(function(t){t.TOGGLE_SORT="TOGGLE_SORT",t.DISPLAY_CHANGED="DISPLAY_CHANGED",t.PAGE_CHANGED="CHANGE_PAGE",t.EXEC_CHANGED="EXEC_CHANGED",t.FILTER_CHANGED="FILTER_CHANGED",t.SUMMARY_CHANGED="SUMMARY_CHANGED",t.SEARCH_CHANGED="SEARCH_CHANGED",t.EXEC_ERROR="EXEC_ERROR"})(At||(At={}));var P=t=>{let{get:e,set:r}=E(t);return{get:e,set:L(r)}},ee=({sortFactory:t,tableState:e,data:r,filterFactory:n,searchFactory:s})=>{let o=r.length,i=r,c=Et(),a=P("sort"),l=P("slice"),f=P("filter"),d=P("search");c.on("SUMMARY_CHANGED",({filteredCount:u})=>{o=u});let R=u=>Object.assign({},u),Q=L(c.dispatch,2),bt=u=>(i=u,Q("SUMMARY_CHANGED",{page:e.slice.page,size:e.slice.size,filteredCount:u.length})),Rt=({processingDelay:u=20}={processingDelay:20})=>{c.dispatch("EXEC_CHANGED",{working:!0}),setTimeout(()=>{try{let g=n(f.get(e)),v=s(d.get(e)),_=t(a.get(e)),k=vt(l.get(e)),D=p(g,v,U(bt),_,k)(r);c.dispatch("DISPLAY_CHANGED",D.map(V=>({index:r.indexOf(V),value:V})))}catch(g){c.dispatch("EXEC_ERROR",g)}finally{c.dispatch("EXEC_CHANGED",{working:!1})}},u)},w=L((u,g,v)=>p(R,U(Q(g)),u.set(e))(v)),wt=()=>w(l,"CHANGE_PAGE",Object.assign({},l.get(e),{page:1})),M=(u,g)=>{let v=p(w(u,g),wt,()=>c.exec());return(_={})=>v(_)},Mt={sort:M(a,"TOGGLE_SORT"),filter:M(f,"FILTER_CHANGED"),search:M(d,"SEARCH_CHANGED"),slice:p(w(l,"CHANGE_PAGE"),()=>c.exec()),exec:Rt,async eval(u=e){let g=t(a.get(u)),v=s(d.get(u)),_=n(f.get(u)),k=vt(l.get(u));return p(_,v,g,k)(r).map(D=>({index:r.indexOf(D),value:D}))},onDisplayChange(u){c.on("DISPLAY_CHANGED",u)},getTableState(){return JSON.parse(JSON.stringify(e))},getMatchingItems(){return[...i]}},J=Object.assign(c,Mt);return Object.defineProperties(J,{filteredCount:{get(){return o}},length:{get(){return r.length}}}),J},re=C({FILTER_CHANGED:"onFilterChange"}),Ct;(function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"})(Ct||(Ct={}));var _t=({table:t,pointer:e,operator:r="includes",type:n="string"})=>{let s=re({emitter:t});return Object.assign({filter(o){let i=this.state();return o===void 0?delete i[e]:Object.assign(i,{[e]:[{value:o,operator:r,type:n}]}),t.filter(i)},state(){return t.getTableState().filter||{}}},s)},ne=C({SEARCH_CHANGED:"onSearchChange"}),H=({table:t,scope:e=[]})=>{let r=ne({emitter:t});return Object.assign(r,{search(n,s={}){return t.search(Object.assign({},{value:n,scope:e},s))},state(){return t.getTableState().search}},r)},se=C({CHANGE_PAGE:"onPageChange",SUMMARY_CHANGED:"onSummaryChange"}),O=({table:t})=>{let{slice:{page:e,size:r}}=t.getTableState(),n=t.filteredCount,s=r?Math.ceil(n/r):1,o=se({emitter:t}),i={selectPage(a){return t.slice({page:a,size:r})},selectNextPage(){return i.selectPage(e+1)},selectPreviousPage(){return i.selectPage(e-1)},changePageSize(a){return t.slice({page:1,size:a})},isPreviousPageEnabled(){return e>1},isNextPageEnabled(){return s>e},state(){return Object.assign(t.getTableState().slice,{filteredCount:n,pageCount:s})}},c=Object.assign(i,o);return c.onSummaryChange(({page:a,size:l,filteredCount:f})=>{e=a,r=l,n=f,s=r?Math.ceil(n/r):1}),c},oe=(t,e)=>{let r=null;return(...n)=>{r!==null&&clearTimeout(r),r=setTimeout(()=>t(...n),e)}},ie=C({TOGGLE_SORT:"onSortToggle"}),yt=["asc","desc"],Nt=({pointer:t,table:e,cycle:r=!1,debounceTime:n=0})=>{let s=r===!0?["none"].concat(yt):[...yt].reverse(),o=oe(e.sort,n),i=0,c=ie({emitter:e}),a=Object.assign({toggle(){i++;let d=s[i%s.length];return o({pointer:t,direction:d})},state(){return e.getTableState().sort}},c);a.onSortToggle(({pointer:d})=>{i=t!==d?0:i});let{pointer:l,direction:f="asc"}=a.state();return i=l===t?f==="asc"?1:2:0,a},Xe=C({SUMMARY_CHANGED:"onSummaryChange"});var ce=C({EXEC_CHANGED:"onExecutionChange"}),St=({table:t})=>ce({emitter:t}),xt=()=>({sort:{},slice:{page:1},filter:{},search:{}}),Lt=({sortFactory:t=Y,filterFactory:e=X,searchFactory:r=W,tableState:n=xt(),data:s=[]}={sortFactory:Y,filterFactory:X,searchFactory:W,tableState:xt(),data:[]},...o)=>{let i=ee({sortFactory:t,filterFactory:e,tableState:n,data:s,searchFactory:r});return o.reduce((c,a)=>Object.assign(c,a({sortFactory:t,filterFactory:e,searchFactory:r,tableState:n,data:s,table:i})),i)};var Dt=({table:t,el:e})=>{let r=St({table:t});return r.onExecutionChange(function({working:n}){e.classList.remove("st-working"),n===!0&&e.classList.add("st-working")}),r};var Tt=({el:t,table:e,conf:r={}})=>{let n=r.pointer||t.getAttribute("data-st-sort"),s=r.cycle||t.hasAttribute("data-st-sort-cycle"),o=Nt({pointer:n,table:e,cycle:s});o.onSortToggle(({pointer:c,direction:a})=>{if(t.classList.remove("st-sort-asc","st-sort-desc"),n===c&&a!=="none"){let l=a==="asc"?"st-sort-asc":"st-sort-desc";t.classList.add(l)}});let i=()=>o.toggle();return t.addEventListener("click",i),o};function b(t,e){let r;return n=>{r&&clearTimeout(r),r=setTimeout(function(){t(n)},e)}}var Gt=({table:t,el:e,delay:r=400,conf:n={}})=>{let s=n.pointer||e.getAttribute("data-st-filter"),o=n.operator||e.getAttribute("data-st-filter-operator")||"includes",i=e.hasAttribute("type")?e.getAttribute("type"):"string",c=n.type||e.getAttribute("data-st-filter-type");c||(c=["date","number"].includes(i)?i:"string");let a=_t({table:t,pointer:s,type:c,operator:o}),l=b(f=>a.filter(e.value),r);return e.addEventListener("input",l),e.tagName==="SELECT"&&e.addEventListener("change",l),a};var Pt=({el:t,table:e,delay:r=400,conf:n={}})=>{let s=n.scope||(t.getAttribute("data-st-search")||"").split(",").map(a=>a.trim()),o=n.flags||t.getAttribute("data-st-search-flags")||"",i=H({table:e,scope:s}),c=b(()=>{i.search(t.value,{flags:o})},r);t.addEventListener("input",c)};var Ht=({el:t,table:e})=>{let r=(n,s)=>Array.from(t.querySelectorAll(s)).forEach(o=>n({el:o,table:e}));return r(Tt,"[data-st-sort]"),r(Dt,"[data-st-loading-indicator]"),r(Pt,"[data-st-search]"),r(Gt,"[data-st-filter]"),e};var ae='<thead><tr><th data-st-sort="slot" class="st-sort-asc">Slot</th><th data-st-sort="name_lower">Name</th><th class="st-sort-reverse" data-st-sort="lvl_reverse">Level</th><th data-st-sort="rank_lower">Rank</th><th class="st-sort-reverse" data-st-sort="gxp_reverse">GXP</th><th class="st-sort-reverse" data-st-sort="act">Activity</th><th class="st-sort-reverse" data-st-sort="pack_reverse">Pack</th><th class="st-sort-reverse" data-st-sort="stam_reverse">Stam</th></tr></thead><tbody></tbody>',Ot=ae;function le(t){return m(t,rt({className:"whosGotWhat",innerHTML:Ot}))}function ue(t,e){let r=at({innerHTML:'<option value="25">25</option><option value="50">50</option><option value="0" selected>All</option>'}),n=h();m(n,r),m(t,n);let s=O({table:e});K(r,"change",o=>{s.changePageSize(Number(o.target.value))})}function me(t,e){let r=h({className:"fsh-search-wrapper"}),n=nt({dataset:{stSearch:"name, rank_name",stSearchFlags:"i"},placeholder:"Enter search term",required:!0,type:"text"}),s=A({innerHTML:"&times;",type:"button"}),o=H({table:e});y(s,()=>{n.value="",n.focus(),o.search("")}),m(r,n),m(r,s),m(t,r)}function pe(t,e,r){let n=h();m(t,n),O({table:e}).onSummaryChange(({page:o,size:i,filteredCount:c})=>{let a=0;c&&(a=1),S(`showing ${(o-1)*i+a} - ${Math.min(c,o*i)} of ${c} (${r.length} total)`,n)})}function fe(t,e){let r=h(),n=A({innerHTML:"\xAB"}),s=A({innerHTML:"\u2039"}),o=A({disabled:!0,innerHTML:"1"}),i=A({innerHTML:"\u203A"}),c=A({innerHTML:"\xBB"}),a=1,l=O({table:e});l.onSummaryChange(({page:f,size:d,filteredCount:R})=>{n.disabled=!l.isPreviousPageEnabled(),s.disabled=!l.isPreviousPageEnabled(),i.disabled=!l.isNextPageEnabled(),c.disabled=!l.isNextPageEnabled(),S(f,o),a=Math.ceil(R/d)}),y(n,()=>l.selectPage(1)),y(s,()=>l.selectPreviousPage()),y(i,()=>l.selectNextPage()),y(c,()=>l.selectPage(a)),m(r,n),m(r,s),m(r,o),m(r,i),m(r,c),m(t,r)}function de(t){let e=F(t);S("",T);let r=m(T,h()),n=m(r,h({className:"st-top-container"})),s=m(r,h()),o=le(s),i=m(r,h({className:"st-bottom-container"})),a=Lt({data:e,tableState:{sort:{pointer:"slot",direction:"asc"},slice:{page:1,size:0},filter:{},search:{}}});ue(n,a),me(n,a),pe(i,a,e),fe(i,a);let l=Ht({el:r,table:a});l.onDisplayChange(N($,o,a)),l.exec()}function ge(){S("Loading...",T),ct([st(),ot()],de)}export{ge as default};
//# sourceMappingURL=whosGotWhat-AFCMFBSV.js.map
