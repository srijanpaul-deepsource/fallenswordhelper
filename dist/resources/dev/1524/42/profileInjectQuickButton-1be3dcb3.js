import{S as t,i as o,s as e,e as s,t as a,g as i,a as n,b as c,l as r,n as l,d as u,f as p,r as m,q as f}from"./index-931013a9.js"
import{I as b,T as d,aG as h,ax as g,c as j,ca as x,O as k,cb as y,bO as T,bD as q,s as v,X as $,D as G}from"./calfSystem-4b6b865d.js"
import{c as S}from"./currentGuildId-830390c7.js"
import{a as w}from"./getIsOwnGuild-9ec53153.js"
import{a as B}from"./profile-65c8edec.js"
import{o as D}from"./openQuickBuffByName-390aeb1d.js"
import"./colouredDots-1101eb92.js"
import"./batch-49c32951.js"
import"./onlineDot-a8b83ea6.js"
import"./doStatTotal-7f8855af.js"
import"./executeAll-bd0a035e.js"
import"./playerName-64ba6f1f.js"
import"./intValue-9eb8a210.js"
import"./valueText-3b73f119.js"
import"./interceptSubmit-4558b472.js"
import"./formToUrl-c8d32791.js"
import"./fshOpen-cce15559.js"
function J(t){let o,e,d,h,j,x,k,y,T,q,v,$,G,w,B,D,J=t[1]&&b("showAdmin"),O=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+S()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),d=a(" "),h=p(),j=s("button"),x=a(" "),k=p(),y=s("button"),T=a(" "),q=p(),v=s("button"),$=a(" "),G=p(),O&&O.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(j,"class","fshJoin svelte-1xo8gqh"),i(j,"type","button"),i(j,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(v,"class","fshTempleTwo svelte-1xo8gqh"),i(v,"type","button"),i(v,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,d),c(o,h),c(o,j),c(j,x),c(o,k),c(o,y),c(y,T),c(o,q),c(o,v),c(v,$),c(o,G),O&&O.m(o,null),c(o,w),A&&A.m(o,null),B||(D=[r(e,"click",t[3]),r(j,"click",t[4]),r(y,"click",t[5]),r(v,"click",t[6])],B=!0)},p(t,[o]){t[1]&&O.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),O&&O.d(),A&&A.d(),B=!1,m(D)}}}function O(t){const o=j.enableMaxGroupSizeToJoin?` < ${j.maxGroupSizeToJoin} Members`:"",e=w(),s=d("player_id")||h(),a=B()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),D(a)},function(){i("join groups"),x()},function(){i("auctions"),k(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),k(`${T}${a}`)},function(){i("recall items"),k(`${q}${a}`)},function(){i("rank"),k(`${v}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,O,J,e,{})}}function I(){const t=G('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default I
//# sourceMappingURL=profileInjectQuickButton-1be3dcb3.js.map
