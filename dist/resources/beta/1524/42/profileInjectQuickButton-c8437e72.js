import{S as t,i as o,s as e,e as a,t as s,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-931013a9.js"
import{I as d,S as b,aF as h,aw as g,c as j,c9 as k,O as x,ca as y,bN as T,bC as q,s as v,W as S,D as $}from"./calfSystem-e76f1a7d.js"
import{c as G}from"./currentGuildId-b1971071.js"
import{a as w}from"./getIsOwnGuild-f4035eab.js"
import{a as B}from"./profile-e7a41e68.js"
import{o as J}from"./openQuickBuffByName-7ee8d6bd.js"
import"./colouredDots-5ef437c3.js"
import"./batch-64f65e71.js"
import"./onlineDot-887cc7ac.js"
import"./doStatTotal-eea0a3ad.js"
import"./executeAll-bd0a035e.js"
import"./playerName-957aed2f.js"
import"./intValue-9eb8a210.js"
import"./valueText-ffb2b814.js"
import"./interceptSubmit-cb7652f8.js"
import"./formToUrl-2b5b5569.js"
import"./fshOpen-cce15559.js"
function N(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,B,J,N=t[1]&&d("showAdmin"),A=t[1]&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),C=N&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=a("div"),e=a("button"),b=s(" "),h=p(),j=a("button"),k=s(" "),x=p(),y=a("button"),T=s(" "),q=p(),v=a("button"),S=s(" "),$=p(),A&&A.c(),w=p(),C&&C.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),A&&A.m(o,null),r(o,w),C&&C.m(o,null),B||(J=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),N&&C.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),C&&C.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),a=b("player_id")||h(),s=B()
function i(t){S("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),J(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${s}`)},function(){i("recall items"),x(`${q}${s}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class C extends t{constructor(t){super(),o(this,t,A,N,e,{})}}function D(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new C({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-c8437e72.js.map
