import{u as t,v as e,E as r,t as n,b8 as a,aO as c}from"./calfSystem-7a1cce43.js"
function u(t,e,r){return e+Math.round(Number(a[r].exec(t)[1])*c)}function s(t,e){return t.map(n(u,e.dataset.tipped))}function m(t){const n=e(t)
return function(t){return{attack:t[0],defense:t[1],armor:t[2],damage:t[3],hp:t[4]}}(function(t){return t.reduce(s,[0,0,0,0,0])}(r('#pCC img[src*="/merc/"]',n)))}function o(){return t({cmd:"guild",subcmd:"mercs"}).then(m)}export{o as g}
//# sourceMappingURL=getMercStats-c85b3b96.js.map
