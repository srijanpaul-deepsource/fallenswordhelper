import{a as r}from"./chunk-LM2VUNGX.js";import{a as l}from"./chunk-SVSEFRER.js";import{a as d}from"./chunk-XQHJD2OP.js";import{b as o}from"./chunk-ICRHQMJP.js";import{ia as n}from"./chunk-NEZAPTHY.js";var e;function f(){e=o("sendGoldonWorld")}function m(a){let t=l(a);(t==="You successfully sent gold!"||t==="")&&(r("currentGoldSentTotal",parseInt(o("currentGoldSentTotal"),10)+parseInt(o("goldAmount"),10)),GameData.fetch(n))}function s(){!e||d({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")}).then(m)}export{e as a,f as b,s as c};
//# sourceMappingURL=chunk-JHNFNOXN.js.map