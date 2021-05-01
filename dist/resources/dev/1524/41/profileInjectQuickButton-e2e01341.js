import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-5c81749d.js"
import{I as d,T as b,aG as h,ax as g,c as j,ca as x,O as k,cb as y,bO as T,bD as q,s as v,X as $,D as G}from"./calfSystem-817ceb25.js"
import{c as S}from"./currentGuildId-0741b5a4.js"
import{a as w}from"./getIsOwnGuild-75cadbb0.js"
import{a as B}from"./profile-36780d1e.js"
import{o as D}from"./openQuickBuffByName-82ae0d1d.js"
import"./colouredDots-bbf8c556.js"
import"./batch-cdbfc7ea.js"
import"./onlineDot-9e87e4ee.js"
import"./doStatTotal-546d5c63.js"
import"./executeAll-98e1edc5.js"
import"./playerName-43ee76fa.js"
import"./intValue-af3aed3f.js"
import"./valueText-35bd586a.js"
import"./interceptSubmit-b5f83dc2.js"
import"./formToUrl-0f02df3e.js"
import"./fshOpen-2af77be9.js"
function J(t){let o,e,b,h,j,x,k,y,T,q,v,$,G,w,B,D,J=t[1]&&d("showAdmin"),O=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+S()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),h=p(),j=s("button"),x=a(" "),k=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),$=a(" "),G=p(),O&&O.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,h),c(o,j),c(j,x),c(o,k),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,G),O&&O.m(o,null),c(o,w),A&&A.m(o,null),B||(D=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&O.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),O&&O.d(),A&&A.d(),B=!1,m(D)}}}function O(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=b("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),x()},function(){i("auctions"),k(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),k(`${T}${a}`)},function(){i("recall items"),k(`${q}${a}`)},function(){i("rank"),k(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,O,J,e,{})}}function I(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-e2e01341.js.map
