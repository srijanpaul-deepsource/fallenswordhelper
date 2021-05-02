import{a as e}from"./allthen-3a0631ad.js"
import{y as a,p as t,z as n,aa as s,o as i,I as o,R as r,aw as l,u as c}from"./calfSystem-e76f1a7d.js"
import{c as d}from"./createSpan-c7e7a9e6.js"
import{d as m}from"./doStatTotal-eea0a3ad.js"
import{g as f}from"./getArrayByClassName-559d1877.js"
import{i as p}from"./insertElementAfterBegin-38aedae9.js"
import"./all-9f53e8b3.js"
import"./insertElementBefore-34b77984.js"
function u(){r(n("refresh"))}function h(e){const a=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,c({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(a.dataset.tipped)[1]})}function g(){const a=f("auctionCancel",n("resultRows"))
if(0===a.length)return
const t=a.map(h)
e(t,u)}function j(){!a()&&t&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),a=n("fill").parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),p(a,e),s(a,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-c03f232e.js.map
