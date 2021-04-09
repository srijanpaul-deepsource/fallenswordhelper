import{N as e,O as t,P as c}from"./calfSystem-7a1cce43.js"
function s(s){const a=e(s.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${c}?${a}`)}export{s as f}
//# sourceMappingURL=formToUrl-487e0bc3.js.map
