import{S as t,i as o,s as e,b as s,t as a,f as i,a as n,g as c,l as r,n as l,d as u,c as p,r as m,v as f}from"./index-6ed75119.js"
import{I as d,c as b,R as j,aI as h,ay as g,c9 as k,N as x,ca as y,aj as v,bE as T,s as S,S as $,D as q}from"./calfSystem-a2fd9017.js"
import{c as G}from"./currentGuildId-871ea013.js"
import{a as w}from"./getIsOwnGuild-0df57003.js"
import{a as I}from"./profile-36d5e721.js"
import{o as B}from"./openQuickBuffByName-713316ef.js"
import"./colouredDots-e6e48020.js"
import"./batch-0f132e33.js"
import"./onlineDot-20a56643.js"
import"./doStatTotal-7cdd55ce.js"
import"./executeAll-9ecb4cd8.js"
import"./playerName-fab1659b.js"
import"./asInt-bc42d23b.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-8b6ccd61.js"
import"./interceptSubmit-ce135195.js"
import"./formToUrl-a8a254b6.js"
import"./fshOpen-a2455e89.js"
function J(t){let o,e,b,j,h,k,x,y,v,T,S,$,q,w,I,B,J=t[1]&&d("showAdmin"),N=t[1]&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),A=J&&function(t){let o,e,p,m
return{c(){o=s("button"),e=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(s,a){n(s,o,a),c(o,e),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=s("div"),e=s("button"),b=a(" "),j=p(),h=s("button"),k=a(" "),x=p(),y=s("button"),v=a(" "),T=p(),S=s("button"),$=a(" "),q=p(),N&&N.c(),w=p(),A&&A.c(),i(e,"class","fshQuickBuff svelte-1xo8gqh"),i(e,"type","button"),i(e,"data-tooltip","Buff "+t[2]),i(h,"class","fshJoin svelte-1xo8gqh"),i(h,"type","button"),i(h,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(s,a){n(s,o,a),c(o,e),c(e,b),c(o,j),c(o,h),c(h,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,S),c(S,$),c(o,q),N&&N.m(o,null),c(o,w),A&&A.m(o,null),I||(B=[r(e,"click",t[3]),r(h,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],I=!0)},p(t,[o]){t[1]&&N.p(t,o),J&&A.p(t,o)},i:l,o:l,d(t){t&&u(o),N&&N.d(),A&&A.d(),I=!1,m(B)}}}function N(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",e=w(),s=j("player_id")||h(),a=I()
function i(t){$("profile","quick button",t)}return[o,e,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${s}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${s}`)}]}class A extends t{constructor(t){super(),o(this,t,N,J,e,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new A({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-7abfc2bb.js.map
