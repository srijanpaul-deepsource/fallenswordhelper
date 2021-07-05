import{y as o,B as t,z as a,o as e,p as n}from"./calfSystem-617f9a5d.js"
import{j as c}from"./jConfirm-98c541b6.js"
import{g as s,s as r}from"./idb-443c992c.js"
let l,i=[]
function u(){l.focus(),l.select()}function f(){i=[],l.value="[]",r("fsh_combatLog",i)}function g(){c("Clear Combat Log","Are you sure you want to clear your log?",f)}async function m(c){if(o())return
const r=await s("fsh_combatLog")
!function(o,n){n&&(i=n),t(`<h1>Combat Logs</h1><br><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(i)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,o),l=a("combatLog"),e(a("copyLog"),u),e(a("clearLog"),g)}(c||n,r)}export default m
//# sourceMappingURL=combatLog-411da0c1.js.map
