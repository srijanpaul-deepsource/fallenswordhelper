import{a as e}from"./allthen-3a0631ad.js"
import{y as t,p as a,z as n,ab as s,o as i,I as o,S as r,ax as c,u as l}from"./calfSystem-4b6b865d.js"
import{c as m}from"./createSpan-dab32f7a.js"
import{d as f}from"./doStatTotal-7f8855af.js"
import{g as d}from"./getArrayByClassName-c0c751ca.js"
import{i as p}from"./insertElementAfterBegin-4ec7552e.js"
import"./all-9f53e8b3.js"
import"./insertElementBefore-34b77984.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=d("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function g(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-7b268781.js.map
