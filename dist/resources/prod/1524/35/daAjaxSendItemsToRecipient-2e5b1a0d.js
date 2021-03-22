import{x as e,I as t,u as n,$ as r}from"./calfSystem-fe0ebf32.js"
import{h as s}from"./htmlResult-e09db9ad.js"
function i(n){return function(t,n){return e({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:n})}(t("itemRecipient"),n)}function a(e){return function(e,t){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,sendItemList:t}).then(s)}(t("itemRecipient"),e)}function m(e){return r(i,a,e)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-2e5b1a0d.js.map
