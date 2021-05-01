import{a as e}from"./allthen-7b3f20e7.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,av as l,u as c}from"./calfSystem-ab393688.js"
import{c as f}from"./createSpan-12f0c446.js"
import{d as m}from"./doStatTotal-35ff7e6d.js"
import{g as d}from"./getArrayByClassName-f0b57594.js"
import{i as p}from"./insertElementAfterBegin-925be257.js"
import"./all-be4763d3.js"
import"./insertElementBefore-6e80e0ff.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,c({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=d("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=f({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-c7895e17.js.map
