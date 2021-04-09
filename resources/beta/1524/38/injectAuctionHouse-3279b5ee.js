import{a as e}from"./allthen-8480e63e.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,am as c,u as l}from"./calfSystem-71efcdd9.js"
import{c as d}from"./createSpan-cad7f112.js"
import{d as m}from"./doStatTotal-a5e68f3e.js"
import{g as f}from"./getArrayByClassName-0e4564de.js"
import{i as p}from"./insertElementAfterBegin-4d53c0af.js"
import"./all-edb79f43.js"
import"./insertElementBefore-71272774.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-3279b5ee.js.map
