import{a as v,b as B}from"./chunk-63PUEQ2U.js";import{a as T}from"./chunk-SMCCJT2N.js";import{a as w}from"./chunk-JUFQWNQ2.js";import"./chunk-TPOKAMKZ.js";import"./chunk-NANTGT4Y.js";import{a as c}from"./chunk-EGGRJEVI.js";import"./chunk-EHOBQCEV.js";import{a as b}from"./chunk-6WXPRACV.js";import"./chunk-34NYN3UK.js";import{a as n}from"./chunk-T3KU5OD5.js";import{a as i}from"./chunk-U6MH67WD.js";import"./chunk-67AICILL.js";import"./chunk-7ONOIJO4.js";import"./chunk-57Z3RMCJ.js";import"./chunk-QVPWC52X.js";import"./chunk-YIEWHY6V.js";import"./chunk-C5OE7PQU.js";import"./chunk-RY5JB5JV.js";import{a as g}from"./chunk-XDUXVHJP.js";import"./chunk-ZOPLLTNB.js";import"./chunk-HTCI2HHR.js";import"./chunk-VWMHLX6I.js";import"./chunk-4VL7TVGR.js";import{b as l}from"./chunk-QOWOSZRG.js";import{a as h}from"./chunk-3WYOJJSD.js";import{a as p}from"./chunk-FM7OJ7NO.js";import"./chunk-HA7HK2NF.js";import"./chunk-U546IVLZ.js";import"./chunk-DXI2WUUD.js";import"./chunk-JQPK3YVC.js";import"./chunk-M6FQTS4T.js";import{a}from"./chunk-2URZ55LX.js";import{b as d}from"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import{a as u}from"./chunk-UWALNOSV.js";import"./chunk-M72CYKCS.js";import{a as r}from"./chunk-ZP7KCDX3.js";var s,o,m,f,E=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],y=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]];function N(e,t){return e.replace(t[0],t[1])}function H(e,t){return t.reduce(N,e)}function L(e){let t=H(e,E);return r.cmd==="guild"&&(t=H(t,y)),t}function C(){let e="fshBioProfile";r.cmd==="guild"&&(r.subcmd==="hall"?e="fshBioHall":e="fshBioGuild");let t=n({className:`fshBioContainer ${e}`}),x=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"});i(t,x),m=n({className:"fshBioPreview fshBioInner"}),i(t,m),i(o.parentNode,t)}function I(){r.cmd==="profile"&&b(l,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>')}function P(){let e=T(f.value);e&&(s=e,g("bioEditLines",e),o.rows=s)}function S(){let e=n({innerHTML:"<br>Display "});f=c({min:1,max:99,type:"number",value:s}),i(e,f),w(e," Lines ");let t=c({className:"custombutton",value:"Update Rows To Show",type:"button"});a(t,P),i(e,t),i(l,e)}function k(){let e=L(o.value),t=B(e);h(t||e,m)}function R(){s=d("bioEditLines"),o=p("textInputBox"),!!o&&(C(),I(),S(),o.rows=s,r.cmd==="profile"&&a(o.parentNode,v),u(o,"keyup",k),k())}export{R as default};
//# sourceMappingURL=bioWidgets-SKUJJ4BG.js.map
