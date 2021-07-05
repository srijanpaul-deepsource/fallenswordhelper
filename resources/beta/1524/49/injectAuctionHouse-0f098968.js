import{a as t}from"./allthen-f7cedfa7.js"
import{y as e,p as a,z as n,ac as s,o as i,I as r,Q as o,aB as c,u as l}from"./calfSystem-42f137cb.js"
import{c as f}from"./createSpan-54af063c.js"
import{d as m}from"./doStatTotal-10fb589c.js"
import{g as d}from"./getArrayByClassName-97a5b37d.js"
import{i as u}from"./insertElementAfterBegin-c46ad05b.js"
import"./all-bb953856.js"
import"./insertElementBefore-c7161beb.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function g(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,b)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-0f098968.js.map
