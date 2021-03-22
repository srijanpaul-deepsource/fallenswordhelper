import{d as e}from"./dialogMsg-eb4e9d8f.js"
import{br as t,y as s,B as o,b2 as n,z as a,ag as r,aN as i,t as c,I as l,p as u,_ as f}from"./calfSystem-fe0ebf32.js"
function g(e,t){f(t,e[t])}function d(){const t=n(a("HelperfshSettings").value)
if(r(t)){const s=t
i(s).forEach(c(g,s)),e("Settings loaded successfully!")}}function p(e,t){return e[t]=l(t),e}function b(){if(s())return
const e=function(){const e=[],s=new RegExp(`^${t}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&e.push(n.replace(t,""))}return e}().reduce(p,{})
!function(e,t){o(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${JSON.stringify(t)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,e)}(u,e),$("#HelperLoadSettings").on("click",d)}export default b
//# sourceMappingURL=load-0f7abc8f.js.map
