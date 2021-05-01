import{a as e}from"./allthen-7b3f20e7.js"
import{y as t,p as a,z as n,ab as s,o as i,I as o,S as r,aw as c,u as l}from"./calfSystem-c464cb1d.js"
import{c as f}from"./createSpan-79ff8b4f.js"
import{d}from"./doStatTotal-ddf4bb8a.js"
import{g as m}from"./getArrayByClassName-fe0fed4e.js"
import{i as p}from"./insertElementAfterBegin-1e95816f.js"
import"./all-be4763d3.js"
import"./insertElementBefore-6e80e0ff.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=m("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function g(){!t()&&a&&(!function(){const e=f({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default g
//# sourceMappingURL=injectAuctionHouse-f65702ba.js.map
