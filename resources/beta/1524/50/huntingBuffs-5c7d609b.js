import{c as e}from"./calfSystem-617f9a5d.js"
import{h as n}from"./simpleCheckbox-af0b5ade.js"
import{i as t}from"./isChecked-8825c1a8.js"
import{i as o}from"./isSelected-70ffb4dd.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function i(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function f(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function a(){return`${s()+i()} ${f()}`}function u(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${i()} ${f()}</td></tr>`}export{a,u as h}
//# sourceMappingURL=huntingBuffs-5c7d609b.js.map
