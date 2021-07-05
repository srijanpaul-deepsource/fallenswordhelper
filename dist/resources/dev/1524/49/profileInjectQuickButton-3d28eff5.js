import{S as t,i as o,s,b as a,t as e,f as i,a as n,g as c,l as r,n as l,d as u,c as f,r as p,v as m}from"./index-c7b13239.js"
import{I as d,c as b,S as h,aM as j,aC as g,cd as k,N as x,ce as y,al as T,bJ as v,s as S,T as $,D as q}from"./calfSystem-9ab64478.js"
import{c as G}from"./currentGuildId-c05147ac.js"
import{a as w}from"./getIsOwnGuild-e126ddfa.js"
import{a as J}from"./profile-1d773255.js"
import{o as B}from"./openQuickBuffByName-2b4b1ff5.js"
import"./colouredDots-b5509923.js"
import"./batch-53744af0.js"
import"./onlineDot-1df6212d.js"
import"./doStatTotal-d0bf467a.js"
import"./executeAll-779c0127.js"
import"./playerName-b4c2ff3f.js"
import"./asInt-61644392.js"
import"./intValue-f11572ef.js"
import"./valueText-99c24f27.js"
import"./interceptSubmit-ba23111a.js"
import"./formToUrl-6294f17c.js"
import"./fshOpen-c207a52b.js"
function I(t){let o,s,b,h,j,k,x,y,T,v,S,$,q,w,J,B,I=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,s,f,p
return{c(){o=a("button"),s=e(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,e){n(a,o,e),c(o,s),f||(p=r(o,"click",t[7]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t),A=I&&function(t){let o,s,f,p
return{c(){o=a("button"),s=e(" "),m(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,e){n(a,o,e),c(o,s),f||(p=r(o,"click",t[8]),f=!0)},p:l,d(t){t&&u(o),f=!1,p()}}}(t)
return{c(){o=a("div"),s=a("button"),b=e(" "),h=f(),j=a("button"),k=e(" "),x=f(),y=a("button"),T=e(" "),v=f(),S=a("button"),$=e(" "),q=f(),N&&N.c(),w=f(),A&&A.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(a,e){n(a,o,e),c(o,s),c(s,b),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,v),c(o,S),c(S,$),c(o,q),N&&N.m(o,null),c(o,w),A&&A.m(o,null),J||(B=[r(s,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],J=!0)},p(t,[o]){t[1]&&N.p(t,o),I&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),J=!1,p(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),a=h("player_id")||j(),e=J()
function i(t){$("profile","quick button",t)}return[o,s,e,function(t){t.target.blur(),i("quickbuff"),B(e)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${e}`)},function(){i("recall items"),x(`${v}${e}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${a}`)}]}class A extends t{constructor(t){super(),o(this,t,N,I,s,{})}}function C(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default C
//# sourceMappingURL=profileInjectQuickButton-3d28eff5.js.map
