import{a as t}from"./allthen-2719c129.js"
import{y as e,p as a,z as n,ac as s,o as i,I as r,R as o,aB as c,u as l}from"./calfSystem-bfc1f6c0.js"
import{c as f}from"./createSpan-009a409b.js"
import{d as m}from"./doStatTotal-b8475745.js"
import{g as d}from"./getArrayByClassName-2fc630c7.js"
import{i as u}from"./insertElementAfterBegin-8e0b3cdc.js"
import"./all-ceaf9817.js"
import"./insertElementBefore-165ce171.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-0f2db755.js.map
