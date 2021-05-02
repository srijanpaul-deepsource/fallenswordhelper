import{S as t,i as o,s as e,e as a,t as s,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-931013a9.js"
import{I as d,S as b,aD as h,au as g,c as j,c7 as k,O as x,c8 as y,bK as T,bz as q,s as v,W as S,D as $}from"./calfSystem-15b00143.js"
import{c as G}from"./currentGuildId-ad15ffa8.js"
import{a as w}from"./getIsOwnGuild-67ae9c9d.js"
import{a as B}from"./profile-0bcfd729.js"
import{o as D}from"./openQuickBuffByName-62891ff5.js"
import"./colouredDots-04756ade.js"
import"./batch-37795904.js"
import"./onlineDot-4297be27.js"
import"./doStatTotal-01cde801.js"
import"./executeAll-bd0a035e.js"
import"./playerName-41a4004e.js"
import"./intValue-9eb8a210.js"
import"./valueText-7a9b207a.js"
import"./interceptSubmit-a16f18a6.js"
import"./formToUrl-d1bb7512.js"
import"./fshOpen-cce15559.js"
function J(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,B,D,J=t[1]&&d("showAdmin"),z=t[1]&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=a("button"),e=s(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(a,s){n(a,o,s),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=a("div"),e=a("button"),b=s(" "),h=p(),j=a("button"),k=s(" "),x=p(),y=a("button"),T=s(" "),q=p(),v=a("button"),S=s(" "),$=p(),z&&z.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(a,s){n(a,o,s),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),z&&z.m(o,null),r(o,w),A&&A.m(o,null),B||(D=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&z.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),z&&z.d(),A&&A.d(),B=!1,m(D)}}}function z(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),a=b("player_id")||h(),s=B()
function i(t){S("profile","quick button",t)}return[o,e,s,function(t){t.target.blur(),i("quickbuff"),D(s)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${a}`)},function(){i("secure trade"),x(`${T}${s}`)},function(){i("recall items"),x(`${q}${s}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${a}`)}]}class A extends t{constructor(t){super(),o(this,t,z,J,e,{})}}function I(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-771f7804.js.map
