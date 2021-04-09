import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-72f73b9a.js"
import{I as b,T as d,ay as h,an as g,c as j,ca as k,O as x,cb as y,bO as T,bD as q,s as v,X as $,D as S}from"./calfSystem-d56087e1.js"
import{c as G}from"./currentGuildId-1893e725.js"
import{a as w}from"./getIsOwnGuild-1ae4044d.js"
import{a as B}from"./profile-f50b75a0.js"
import{o as D}from"./openQuickBuffByName-d6026140.js"
import"./colouredDots-d5bef308.js"
import"./batch-efcbbd95.js"
import"./onlineDot-0283d5c6.js"
import"./doStatTotal-9c318ece.js"
import"./executeAll-13b3b7cf.js"
import"./playerName-78fba94b.js"
import"./intValue-ba9b9e5a.js"
import"./valueText-72f14761.js"
import"./interceptSubmit-1b6b81ff.js"
import"./formToUrl-becb9cc8.js"
import"./fshOpen-ec83b065.js"
function J(t){let o,e,d,h,j,k,x,y,T,q,v,$,S,w,B,D,J=t[1]&&b("showAdmin"),O=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),d=a(" "),h=p(),j=s("button"),k=a(" "),x=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),$=a(" "),S=p(),O&&O.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,d),c(o,h),c(o,j),c(j,k),c(o,x),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,S),O&&O.m(o,null),c(o,w),A&&A.m(o,null),B||(D=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&O.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),O&&O.d(),A&&A.d(),B=!1,m(D)}}}function O(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=d("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${T}${a}`)},function(){i("recall items"),x(`${q}${a}`)},function(){i("rank"),x(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,O,J,e,{})}}function I(){const t=S('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-e85d33e4.js.map
