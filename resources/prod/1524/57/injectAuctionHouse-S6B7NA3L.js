import{a as h}from"./chunk-4OR5BUCD.js";import{a as d}from"./chunk-X4SBWRRC.js";import{a as g}from"./chunk-6LUWYAHK.js";import"./chunk-JLIKN5T7.js";import{a as i}from"./chunk-UGW7BDSE.js";import"./chunk-4MT32RNI.js";import{a as r}from"./chunk-547NZTJJ.js";import{a as f}from"./chunk-7GJVXUU6.js";import{a as u}from"./chunk-OUFH7AQR.js";import{a as p}from"./chunk-WP75TXSA.js";import"./chunk-ZX6BQCBQ.js";import"./chunk-TRWEOFLW.js";import{b as l}from"./chunk-4UVID5BY.js";import"./chunk-BW7Q2ZXG.js";import"./chunk-3ZXYCFKP.js";import"./chunk-WMSWBFUP.js";import"./chunk-QPWRUAE6.js";import"./chunk-UL2EF2NH.js";import{a as s}from"./chunk-EC3YZH5E.js";import"./chunk-RDOAH55S.js";import"./chunk-TBCMWPFS.js";import"./chunk-63VZJNBW.js";import{a}from"./chunk-WVMSJ4JS.js";import"./chunk-V2KRM43J.js";import"./chunk-AKOYB2MJ.js";import{a as o}from"./chunk-PCS24QV6.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import"./chunk-7QMLZEL5.js";import{b as c}from"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import"./chunk-OPFEBT2F.js";import{b as m}from"./chunk-33VL7FGV.js";import"./chunk-7ZQZE7AG.js";function A(){r(o("refresh"))}function y(e){let t=e.parentNode.parentNode.children[0].children[0];return e.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,s({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function C(){let e=h("auctionCancel",o("resultRows"));if(e.length===0)return;let t=e.map(y);g(t,A)}function x(){let e=o("fill");if(!e)return;let t=u({className:"smallLink",textContent:"Cancel All"}),n=e.parentNode.parentNode.nextElementSibling.children[0];n.classList.add("fshCenter"),i(n,"]"),f(n,t),i(n,"["),a(t,C)}function B(){c("autoFillMinBidPrice")&&r(o("auto-fill"))}function N(){p()||!l||(x(),B(),d())}export{N as default};
//# sourceMappingURL=injectAuctionHouse-S6B7NA3L.js.map
