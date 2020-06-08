import{G as t,b2 as e,A as n,y as i,g as r,v as s,i as a,t as o,B as c,bz as d,ax as p,I as u,l as f,f as m,u as h,x as l,o as g,p as b}from"./calfSystem-05554bae.js"
import"./toLowerCase-4d1a2136.js"
import{s as $,g as v}from"./idb-862da886.js"
import"./alpha-48a506ea.js"
import"./csvSplit-d1d5e8a8.js"
import{s as x}from"./shouldBeArray-28316d52.js"
import{d as _}from"./doSortParams-fa9e390d.js"
import{a as y}from"./stringSort-0537ee36.js"
import{a as N}from"./all-e13706ab.js"
let j,k=[]
function w(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function C(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function S(t){return!k.includes(t.name)}function T(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${function(t){return t.items?t.items.map(w).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.components?t.components.map(C).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${j}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}(t)}</td></tr>`}function B(i,r){r&&(t("hideRecipes")&&(k=x("hideRecipeNames")),function(t,i){j=e()
let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>'
r+=i.recipe.filter(S).map(T).join(""),r+="</table>",n(r,t),$("fsh_recipeBook",i)}(i,r))}function I(t){const e=i("pCC",t).children[0].rows[4].cells[0].children[0]
return r("img",e)}const A=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i
function P(t,e){const n=e.getAttribute("background")
return n&&n.includes(t)}function R(t){const e=t.children[0].children[0],n=function(t){return t.dataset.tipped.match(A)}(e),i=function(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}(e,n)
return function(t,e){if(e){const n=c(e).split("/")
t.amountPresent=parseInt(n[0],10),t.amountNeeded=parseInt(n[1],10)}}(i,t.parentNode.nextElementSibling),i}function E(t,e){return t.filter(o(P,e)).map(R)}function F(t,e,n,o){const c=s(o)
a(t,`Parsing blueprint ${n.name}...<br>`)
const d=function(t){return r("td",i("pCC",t))}(c)
n.items=E(d,"/inventory/2x3."),n.components=E(d,"/inventory/1x1mini."),[n.target]=E(d,"/hellforge/2x3."),e.recipe.push(n)}function L(t,e,n){a(t,`Found blueprint "${c(n)}".<br>`)
const i=function(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:c(t),id:d(t.href,"recipe_id")}}(n)
return p(n.href).then(o(F,t,e,i))}function q(t,e,n){const a=function(t){const e=i("pCC",t).children[0].rows[6].cells[0].children[0]
return r("a",e)}(s(n)).map(o(L,t,e))
return N(a)}function z(t){return/\/folder_on\./.test(t.getAttribute("src"))}function G(t,e){return 0!==e}function M(t){return t.value}function D(t,e,n){return p(`${t}&page=${n}`).then(e)}function H(t,e,n){return function(t){return r("option",u("customselect",i("pCC",t))[0]).filter(G).map(M)}(t).map(o(D,e,n))}function J(t,e,n){const i=s(n),r=function(t){return I(t).find(z).parentNode.href}(i),a=o(q,t,e),c=H(i,r,a)
return c.push(a(n)),N(c)}function K(t){return"-1"!==d(t.parentNode.href,"folder_id")}function O(t,e){const n=c(e.parentNode.nextElementSibling.nextElementSibling.firstChild),i=/quest/i.test(n)
return i&&a(t,`Skipping folder "${n}"  as it has the word "quest" in folder name.<br>`),!i}function Q(t,e){return p(e.parentNode.href).then(t)}function U(t,e,n){const i=o(J,t,e),r=function(t,e,n){return I(s(e)).filter(K).filter(o(O,t)).map(o(Q,n))}(t,n,i)
return r.push(i(n)),N(r)}let V,W
function X(){a(W,"Finished parsing ... formatting ..."),$("fsh_recipeBook",V),B(W,V)}function Y(){V={},V.recipe=[],n("<br>Parsing inventing screen ...<br>",W),h({cmd:"inventing"}).then(o(U,W,V)).then(X)}function Z(t,e){V=e,n('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),W=f(),m(t,W),V?B(W,V):Y()}function tt(t){"rfsh"===t.target.id&&Y(),"sortName"===t.target.id&&function(t){_(t.target),V.recipe.sort(y),B(W,V)}(t)}export default function(t){if(l())return
const e=t||b
v("fsh_recipeBook").then(o(Z,e)),g(e,tt)}
//# sourceMappingURL=recipeMgr-d0ff5e71.js.map
