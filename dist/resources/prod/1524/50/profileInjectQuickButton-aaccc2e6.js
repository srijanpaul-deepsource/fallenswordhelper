import{S as t,i as o,s,b as e,t as a,f as i,a as n,g as c,l as r,n as l,d as u,c as p,r as m,v as f}from"./index-c31cc1d2.js"
import{I as d,c as b,R as j,aK as h,aA as g,cb as k,N as x,cc as y,aj as v,bH as T,s as S,S as $,D as q}from"./calfSystem-365d90f3.js"
import{c as G}from"./currentGuildId-605c07b2.js"
import{a as w}from"./getIsOwnGuild-d6e6b900.js"
import{a as A}from"./profile-bac01640.js"
import{o as B}from"./openQuickBuffByName-586c4bc1.js"
import"./colouredDots-89d37194.js"
import"./batch-c397b474.js"
import"./onlineDot-84e0098c.js"
import"./doStatTotal-26658dfb.js"
import"./executeAll-30735897.js"
import"./playerName-17f8d780.js"
import"./asInt-28c95ec4.js"
import"./intValue-76dfee09.js"
import"./valueText-790aad9b.js"
import"./interceptSubmit-ed906294.js"
import"./formToUrl-95d4fbda.js"
import"./fshOpen-90a0d847.js"
function I(t){let o,s,b,j,h,k,x,y,v,T,S,$,q,w,A,B,I=t[1]&&d("showAdmin"),J=t[1]&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),i(o,"class","fshTempleThree svelte-1xo8gqh"),i(o,"type","button"),i(o,"data-tooltip","Recall items from "+t[2])},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[7]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t),N=I&&function(t){let o,s,p,m
return{c(){o=e("button"),s=a(" "),f(o,"background-image","url('"+g+"guilds/"+G()+"_mini.png')"),i(o,"type","button"),i(o,"data-tooltip","Rank "+t[2]),i(o,"class","svelte-1xo8gqh")},m(e,a){n(e,o,a),c(o,s),p||(m=r(o,"click",t[8]),p=!0)},p:l,d(t){t&&u(o),p=!1,m()}}}(t)
return{c(){o=e("div"),s=e("button"),b=a(" "),j=p(),h=e("button"),k=a(" "),x=p(),y=e("button"),v=a(" "),T=p(),S=e("button"),$=a(" "),q=p(),J&&J.c(),w=p(),N&&N.c(),i(s,"class","fshQuickBuff svelte-1xo8gqh"),i(s,"type","button"),i(s,"data-tooltip","Buff "+t[2]),i(h,"class","fshJoin svelte-1xo8gqh"),i(h,"type","button"),i(h,"data-tooltip","Join All Groups"+t[0]),i(y,"class","fshGold svelte-1xo8gqh"),i(y,"type","button"),i(y,"data-tooltip","Go to "+t[2]+"'s auctions"),i(S,"class","fshTempleTwo svelte-1xo8gqh"),i(S,"type","button"),i(S,"data-tooltip","Create Secure Trade to "+t[2])},m(e,a){n(e,o,a),c(o,s),c(s,b),c(o,j),c(o,h),c(h,k),c(o,x),c(o,y),c(y,v),c(o,T),c(o,S),c(S,$),c(o,q),J&&J.m(o,null),c(o,w),N&&N.m(o,null),A||(B=[r(s,"click",t[3]),r(h,"click",t[4]),r(y,"click",t[5]),r(S,"click",t[6])],A=!0)},p(t,[o]){t[1]&&J.p(t,o),I&&N.p(t,o)},i:l,o:l,d(t){t&&u(o),J&&J.d(),N&&N.d(),A=!1,m(B)}}}function J(t){const o=b.enableMaxGroupSizeToJoin?` < ${b.maxGroupSizeToJoin} Members`:"",s=w(),e=j("player_id")||h(),a=A()
function i(t){$("profile","quick button",t)}return[o,s,a,function(t){t.target.blur(),i("quickbuff"),B(a)},function(){i("join groups"),k()},function(){i("auctions"),x(`${y}&type=-3&tid=${e}`)},function(){i("secure trade"),x(`${v}${a}`)},function(){i("recall items"),x(`${T}${a}`)},function(){i("rank"),x(`${S}members&subcmd2=changerank&member_id=${e}`)}]}class N extends t{constructor(t){super(),o(this,t,J,I,s,{})}}function D(){const t=q('#profileLeftColumn img[src*="/avatars/"][width="200"]')
t&&new N({anchor:t.nextElementSibling,target:t.parentNode})}export default D
//# sourceMappingURL=profileInjectQuickButton-aaccc2e6.js.map
