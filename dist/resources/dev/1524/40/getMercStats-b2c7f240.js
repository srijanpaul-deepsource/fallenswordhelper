import{u as t,v as r,E as e,t as n,bh as a,aZ as c}from"./calfSystem-c464cb1d.js"
function u(t,r,e){return r+Math.round(Number(a[e].exec(t)[1])*c)}function s(t,r){return t.map(n(u,r.dataset.tipped))}function m(t){const n=r(t)
return function(t){return{attack:t[0],defense:t[1],armor:t[2],damage:t[3],hp:t[4]}}(function(t){return t.reduce(s,[0,0,0,0,0])}(e('#pCC img[src*="/merc/"]',n)))}function o(){return t({cmd:"guild",subcmd:"mercs"}).then(m)}export{o as g}
//# sourceMappingURL=getMercStats-b2c7f240.js.map
