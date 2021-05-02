import{N as e,O as t,P as s}from"./calfSystem-e76f1a7d.js"
function a(a){const c=e(a.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${s}?${c}`)}export{a as f}
//# sourceMappingURL=formToUrl-2b5b5569.js.map
