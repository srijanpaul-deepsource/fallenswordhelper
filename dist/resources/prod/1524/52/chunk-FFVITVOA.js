import{a as r}from"./chunk-BP3EKJNE.js";import{a as l}from"./chunk-SDA4FQMK.js";import{a as d}from"./chunk-5IIHJLHJ.js";import{b as o}from"./chunk-I7LLJIV6.js";import{ia as n}from"./chunk-RLOFFV7B.js";var e;function f(){e=o("sendGoldonWorld")}function m(a){let t=l(a);(t==="You successfully sent gold!"||t==="")&&(r("currentGoldSentTotal",parseInt(o("currentGoldSentTotal"),10)+parseInt(o("goldAmount"),10)),GameData.fetch(n))}function s(){!e||d({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")}).then(m)}export{e as a,f as b,s as c};
//# sourceMappingURL=chunk-FFVITVOA.js.map