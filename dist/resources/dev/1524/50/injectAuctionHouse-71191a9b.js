import{a as t}from"./allthen-2ff5fddb.js"
import{y as e,p as a,z as n,ad as s,o as i,I as r,R as o,aC as c,u as l}from"./calfSystem-b3667af8.js"
import{c as f}from"./createSpan-a8a5c715.js"
import{d}from"./doStatTotal-7dac1b93.js"
import{g as m}from"./getArrayByClassName-2345f1a3.js"
import{i as u}from"./insertElementAfterBegin-f84b0883.js"
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
//# sourceMappingURL=injectAuctionHouse-71191a9b.js.map
