import{S as t,i as o,s as e,b as a,t as s,f as i,a as n,g as r,l as c,n as l,d as u,c as p,r as m,v as f}from"./index-2f0e5ca2.js"
import{I as d,c as b,S as h,aM as j,aC as g,cd as k,N as x,ce as y,al as T,bJ as v,s as S,T as $,D as q}from"./calfSystem-01849445.js"
import{c as G}from"./currentGuildId-8dd620e8.js"
import{a as w}from"./getIsOwnGuild-78e4ca08.js"
import{a as J}from"./profile-16dd8ed6.js"
import{o as B}from"./openQuickBuffByName-a7eecc9f.js"
import"./colouredDots-8ac6ff2e.js"
import"./batch-367d6f7a.js"
import"./onlineDot-807eb365.js"
import"./doStatTotal-20f2ac46.js"
import"./executeAll-ff401d51.js"
import"./playerName-b318da41.js"
import"./asInt-0acbfe32.js"
import"./intValue-9eb5015a.js"
import"./valueText-5e8600b8.js"
import"./interceptSubmit-12207649.js"
import"./formToUrl-01a5ba54.js"
import"./fshOpen-b549d330.js"
function I(t){let o,e,b,h,j,k,x,y,T,v,S,$,q,w,J,B,I=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=I&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=a("div"),e=a("button"),b=s(" "),h=p(),j=a("button"),k=s(" "),x=p(),y=a("button"),T=s(" "),v=p(),S=a("button"),$=s(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,v),r(o,S),r(S,$),r(o,q),N&&N.m(o,null),r(o,w),A&&A.m(o,null),J||(B=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(S,"click",t[6])],J=!0)},p(t,[o]){t[1]&&N.p(t,o),I&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),J=!1,m(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),a=h("player_id")||j(),s=J()
function i(t){$("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),B(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${s}`)},function(){i("recall items"),x(`${v}${s}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${a}`)}]}class A extends t{constructor(t){super(),o(this,t,N,I,e,{})}}function C(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default C
//# sourceMappingURL=profileInjectQuickButton-b9ef3c84.js.map
