import{a as g}from"./chunk-RIVP5TTH.js";import{a as h}from"./chunk-JAAA6A3K.js";import{a as d}from"./chunk-PZZGI3D7.js";import"./chunk-5BHTKW3B.js";import{a as o}from"./chunk-7SMWPQOT.js";import{a as u}from"./chunk-R2ABASBL.js";import"./chunk-BQTQOQGW.js";import{a as r}from"./chunk-POEIU4DF.js";import"./chunk-JMJ2BOMP.js";import"./chunk-3DWHDW4D.js";import"./chunk-RVEJ4C26.js";import"./chunk-THUVFGD2.js";import{a as p}from"./chunk-3EONQEO2.js";import"./chunk-JDBXWYYY.js";import"./chunk-5GNYWTGT.js";import"./chunk-XG256B2T.js";import{a as f}from"./chunk-EUEELQXP.js";import{b as m}from"./chunk-P664PW54.js";import{a as n}from"./chunk-WM64FGHN.js";import"./chunk-LXVMDOGR.js";import"./chunk-GX4J242O.js";import"./chunk-X5N7OOVX.js";import"./chunk-MKQZLDMS.js";import"./chunk-55RTNKIA.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import{a}from"./chunk-SXGAQBQ6.js";import{a as s}from"./chunk-KM25KKJO.js";import{b as c}from"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import"./chunk-O24SBNSZ.js";import"./chunk-DW345X2O.js";import{b as l}from"./chunk-AWEYVB2J.js";import"./chunk-UUU5NSJN.js";function A(){o(n("refresh"))}function C(t){let e=t.parentNode.parentNode.children[0].children[0];return t.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,p({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function N(){let t=a("auctionCancel",n("resultRows"));if(t.length===0)return;let e=t.map(C);h(e,A)}function x(){let t=n("fill");if(!t)return;let e=d({className:"smallLink",textContent:"Cancel All"}),i=t.parentNode.parentNode.nextElementSibling.children[0];i.classList.add("fshCenter"),r(i,"]"),u(i,e),r(i,"["),s(e,N)}function B(){c("autoFillMinBidPrice")&&o(n("auto-fill"))}function k(){f()||!m||(x(),B(),g())}export{k as default};
//# sourceMappingURL=injectAuctionHouse-N5JEN3K7.js.map
