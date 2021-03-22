import{$ as r,V as t}from"./calfSystem-186455ab.js"
import{g as o}from"./guild-7919b015.js"
import{c as n}from"./currentGuildId-7dd95943.js"
import{g as i}from"./guildView-bd6f17b6.js"
let a
function e(){return a||(a=o({subcmd:"manage"})),a}function s(){return n()?i(n()):Promise.reject(new Error("no guild id"))}function u(){return r(e,s)}function m(r){return Math.floor(Math.max(0,t-r)/86400)}export{u as d,m as l}
//# sourceMappingURL=lastActivityToDays-8e09feb5.js.map
