import{a as t}from"./allthen-f7cedfa7.js"
import{y as e,p as a,z as n,ab as s,o as i,I as r,Q as o,aA as c,u as l}from"./calfSystem-2172498b.js"
import{c as m}from"./createSpan-b3281070.js"
import{d as f}from"./doStatTotal-c56a956c.js"
import{g as d}from"./getArrayByClassName-c230ba3d.js"
import{i as u}from"./insertElementAfterBegin-538ae729.js"
import"./all-bb953856.js"
import"./insertElementBefore-c7161beb.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function g(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=m({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,b)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-d82a0bf6.js.map
