import{y as o,B as t,z as a,o as e,p as c}from"./calfSystem-42f137cb.js"
import{j as n}from"./jConfirm-70cb7f66.js"
import{g as s,s as r}from"./idb-6beadc2c.js"
let l,i=[]
function u(){l.focus(),l.select()}function b(){i=[],l.value="[]",r("fsh_combatLog",i)}function f(){n("Clear Combat Log","Are you sure you want to clear your log?",b)}async function g(n){if(o())return
const r=await s("fsh_combatLog")
!function(o,c){c&&(i=c),t(`<h1>Combat Logs</h1><br><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(i)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,o),l=a("combatLog"),e(a("copyLog"),u),e(a("clearLog"),f)}(n||c,r)}export default g
//# sourceMappingURL=combatLog-bea0b6e8.js.map
