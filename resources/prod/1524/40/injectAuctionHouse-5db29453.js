import{a as e}from"./allthen-7b3f20e7.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,at as c,u as l}from"./calfSystem-540da563.js"
import{c as d}from"./createSpan-8477dde4.js"
import{d as f}from"./doStatTotal-a78f8d49.js"
import{g as m}from"./getArrayByClassName-58503ecd.js"
import{i as p}from"./insertElementAfterBegin-873997cf.js"
import"./all-be4763d3.js"
import"./insertElementBefore-6e80e0ff.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=m("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default j
//# sourceMappingURL=injectAuctionHouse-5db29453.js.map
