import{a as t}from"./allthen-2ff5fddb.js"
import{y as e,p as a,z as n,ab as s,o as i,I as r,Q as o,aA as c,u as l}from"./calfSystem-365d90f3.js"
import{c as f}from"./createSpan-8a3a7e34.js"
import{d}from"./doStatTotal-26658dfb.js"
import{g as m}from"./getArrayByClassName-27cf973a.js"
import{i as u}from"./insertElementAfterBegin-91a0ceb3.js"
import"./all-9b215cd1.js"
import"./insertElementBefore-784d4581.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=m("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-99b5bfcd.js.map
