import{u as t,v as n,E as r,t as e,bn as c,b3 as u}from"./calfSystem-bfc1f6c0.js"
function a(t,n,r){return n+Math.round(Number(c[r].exec(t)[1])*u)}function s(t,n){return t.map(e(a,n.dataset.tipped))}function m(t){const e=n(t)
return function(t){return{attack:t[0],defense:t[1],armor:t[2],damage:t[3],hp:t[4]}}(function(t){return t.reduce(s,[0,0,0,0,0])}(r('#pCC img[src*="/merc/"]',e)))}function o(){return t({cmd:"guild",subcmd:"mercs"}).then(m)}export{o as g}
//# sourceMappingURL=getMercStats-9d0b043f.js.map
