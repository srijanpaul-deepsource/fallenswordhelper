import{N as e,O as t,P as c}from"./calfSystem-c464cb1d.js"
function s(s){const a=e(s.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${c}?${a}`)}export{s as f}
//# sourceMappingURL=formToUrl-89e002dc.js.map
