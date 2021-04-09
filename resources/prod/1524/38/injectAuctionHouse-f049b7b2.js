import{a as e}from"./allthen-8480e63e.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,ak as c,u as l}from"./calfSystem-7a1cce43.js"
import{c as d}from"./createSpan-e8d911bd.js"
import{d as m}from"./doStatTotal-0ed981ee.js"
import{g as f}from"./getArrayByClassName-0cc51c94.js"
import{i as p}from"./insertElementAfterBegin-29d2f9c4.js"
import"./all-edb79f43.js"
import"./insertElementBefore-71272774.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-f049b7b2.js.map
