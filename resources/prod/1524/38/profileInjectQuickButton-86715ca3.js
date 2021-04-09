import{S as t,i as o,s as e,e as s,t as a,g as i,a as c,b as n,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-72f73b9a.js"
import{I as b,S as d,av as h,ak as g,c as j,c7 as k,O as x,c8 as y,bK as v,bz as T,s as q,W as S,D as $}from"./calfSystem-7a1cce43.js"
import{c as G}from"./currentGuildId-c3cf68bc.js"
import{a as w}from"./getIsOwnGuild-e9978140.js"
import{a as B}from"./profile-124ef118.js"
import{o as J}from"./openQuickBuffByName-18faab75.js"
import"./colouredDots-8c1eae3a.js"
import"./batch-895bb182.js"
import"./onlineDot-e58cc358.js"
import"./doStatTotal-0ed981ee.js"
import"./executeAll-13b3b7cf.js"
import"./playerName-1f8ebec9.js"
import"./intValue-ba9b9e5a.js"
import"./valueText-3ccfe58d.js"
import"./interceptSubmit-8bfb8c60.js"
import"./formToUrl-487e0bc3.js"
import"./fshOpen-ec83b065.js"
function z(t){let o,e,d,h,j,k,x,y,v,T,q,S,$,w,B,J,z=t[1]&&b("showAdmin"),A=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){c(s,o,a),n(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),D=z&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){c(s,o,a),n(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),d=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),q=s("button"),S=a(" "),$=p(),A&&A.c(),w=p(),D&&D.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(q,"class","fshTempleTwo svelte-1xo8gqh"),i(q,"type","button"),i(q,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){c(s,o,a),n(o,e),n(e,d),n(o,h),n(o,j),n(j,k),n(o,x),n(o,y),n(y,v),n(o,T),n(o,q),n(q,S),n(o,$),A&&A.m(o,null),n(o,w),D&&D.m(o,null),B||(J=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(q,"click",t[6])],B=!0)},p(t,[o]){t[1]&&A.p(t,o),z&&D.p(t,o)},i:l,o:l,d(t){t&&u(o),A&&A.d(),D&&D.d(),B=!1,m(J)}}}function A(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=d("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),J(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${q}members&subcmd2=changerank&member_id=${s}`)}]}class D extends t{constructor(t){super(),o(this,t,A,z,e,{})}}function I(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new D({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-86715ca3.js.map
