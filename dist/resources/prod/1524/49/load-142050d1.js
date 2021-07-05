import{d as e}from"./dialogMsg-1dee29e9.js"
import{by as t,y as s,B as o,bf as n,z as a,ak as r,a_ as i,t as c,I as l,p as u,Z as f}from"./calfSystem-2172498b.js"
function d(e,t){f(t,e[t])}function g(){const t=n(a("HelperfshSettings").value)
if(r(t)){const s=t
i(s).forEach(c(d,s)),e("Settings loaded successfully!")}}function p(e,t){return e[t]=l(t),e}function h(){if(s())return
const e=function(){const e=[],s=new RegExp(`^${t}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&e.push(n.replace(t,""))}return e}().reduce(p,{})
!function(e,t){o(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${JSON.stringify(t)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,e)}(u,e),$("#HelperLoadSettings").on("click",g)}export default h
//# sourceMappingURL=load-142050d1.js.map
