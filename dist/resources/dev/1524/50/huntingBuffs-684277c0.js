import{c as e}from"./calfSystem-b3667af8.js"
import{h as n}from"./simpleCheckbox-20ff8122.js"
import{i as t}from"./isChecked-8825c1a8.js"
import{i as o}from"./isSelected-70ffb4dd.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function f(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function i(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function u(){return`${s()+f()} ${i()}`}function a(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${f()} ${i()}</td></tr>`}export{u as a,a as h}
//# sourceMappingURL=huntingBuffs-684277c0.js.map
