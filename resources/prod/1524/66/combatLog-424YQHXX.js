import{a as m}from"./chunk-MW6GSG3Q.js";import"./chunk-YK3WCXGE.js";import"./chunk-VOWLBX22.js";import"./chunk-GMERTW32.js";import"./chunk-IPCPLARM.js";import"./chunk-RTMHI3L7.js";import{a as g}from"./chunk-JZHGPOOI.js";import{b as l}from"./chunk-SBFBOIF5.js";import{a as c}from"./chunk-M5RMVAY3.js";import{a as o}from"./chunk-VWFYI5BK.js";import"./chunk-PYHGZC4L.js";import"./chunk-D76XH5RX.js";import"./chunk-MA3AC62H.js";import{a as s,b as u}from"./chunk-6TMBLRRF.js";import"./chunk-IWF73C7V.js";import"./chunk-YJHKALOE.js";import"./chunk-ZMMQFEZR.js";import"./chunk-DTSXLBNB.js";import"./chunk-NCV3HP3S.js";import{a as i}from"./chunk-4V4U3XDY.js";import{a as n}from"./chunk-YG74QOJP.js";import"./chunk-STY5NEH4.js";import"./chunk-M7Q5FD7X.js";import"./chunk-K2U7JEMX.js";import"./chunk-VCDLAVQZ.js";import"./chunk-PUAVFQTB.js";import"./chunk-OHKPSLFK.js";import"./chunk-EJREXK3Y.js";var e=[],r;function b(){r.focus(),r.select()}function p(){e=[],r.value="[]",u("fsh_combatLog",e)}function L(){m("Clear Combat Log","Are you sure you want to clear your log?",p)}function d(a,t){t&&(e=t),c(`<h1>Combat Logs</h1><br><div align="center"><textarea class="fshCombatLog" readonly id="combatLog" name="logs">${JSON.stringify(e)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,a),r=o("combatLog"),n(o("copyLog"),b),n(o("clearLog"),L)}async function y(a){if(g())return;let t=await s("fsh_combatLog");d(a||l,t),i("ui-dialog-titlebar-close").forEach(f=>f.blur())}export{y as default};
//# sourceMappingURL=combatLog-424YQHXX.js.map
