import{a as r}from"./chunk-WFD7HHBD.js";import{a as l}from"./chunk-RWQYBWLH.js";import{a as d}from"./chunk-EC3YZH5E.js";import{b as o}from"./chunk-R37CWEF4.js";import{ia as n}from"./chunk-OPFEBT2F.js";var e;function f(){e=o("sendGoldonWorld")}function m(a){let t=l(a);(t==="You successfully sent gold!"||t==="")&&(r("currentGoldSentTotal",parseInt(o("currentGoldSentTotal"),10)+parseInt(o("goldAmount"),10)),GameData.fetch(n))}function s(){!e||d({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")}).then(m)}export{e as a,f as b,s as c};
//# sourceMappingURL=chunk-JFVV5XDF.js.map