import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as r,l as c,n as l,d as u,f as p,r as m,q as f}from"./index-5c81749d.js"
import{I as d,S as b,aD as h,au as g,c as j,c7 as k,O as x,c8 as y,bK as T,bz as q,s as v,W as S,D as $}from"./calfSystem-030d7057.js"
import{c as G}from"./currentGuildId-2c89c2be.js"
import{a as w}from"./getIsOwnGuild-406e6798.js"
import{a as B}from"./profile-44ab4181.js"
import{o as D}from"./openQuickBuffByName-df17ccef.js"
import"./colouredDots-054b6266.js"
import"./batch-45d4d781.js"
import"./onlineDot-29d4f3fa.js"
import"./doStatTotal-a31727af.js"
import"./executeAll-98e1edc5.js"
import"./playerName-3b098b7d.js"
import"./intValue-af3aed3f.js"
import"./valueText-f3659878.js"
import"./interceptSubmit-64615b22.js"
import"./formToUrl-63e8d7e7.js"
import"./fshOpen-2af77be9.js"
function J(t){let o,e,b,h,j,k,x,y,T,q,v,S,$,w,B,D,J=t[1]&&d("showAdmin"),z=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),r(o,e),p||(m=c(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),S=a(" "),$=p(),z&&z.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),r(o,e),r(e,b),r(o,h),r(o,j),r(j,k),r(o,x),r(o,y),r(y,T),r(o,q),r(o,v),r(v,S),r(o,$),z&&z.m(o,null),r(o,w),A&&A.m(o,null),B||(D=[c(e,"click",t[3]),c(j,"click",t[4]),c(y,"click",t[5]),c(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&z.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),z&&z.d(),A&&A.d(),B=!1,m(D)}}}function z(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){S("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,z,J,e,{})}}function I(){const t=$('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-c53f2fa5.js.map
