import{u as t,v as r,E as e,t as n,bo as a,b4 as u}from"./calfSystem-b3667af8.js"
function c(t,r,e){return r+Math.round(Number(a[e].exec(t)[1])*u)}function s(t,r){return t.map(n(c,r.dataset.tipped))}function o(t){const n=r(t)
return function(t){return{attack:t[0],defense:t[1],armor:t[2],damage:t[3],hp:t[4]}}(function(t){return t.reduce(s,[0,0,0,0,0])}(e('#pCC img[src*="/merc/"]',n)))}function m(){return t({cmd:"guild",subcmd:"mercs"}).then(o)}export{m as g}
//# sourceMappingURL=getMercStats-6a32d864.js.map
