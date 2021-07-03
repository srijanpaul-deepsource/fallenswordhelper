import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-ca01c443.js';
import { z as getElementById } from './calfSystem-2bd62864.js';
import './getArrayByClassName-d5af5b3b.js';
import './hideElement-3852cc2c.js';
import './openQuickBuffByName-88623c19.js';
import './fshOpen-b549d330.js';
import './selfIdIs-9c20cd3d.js';

function alliesColour(el) {
  contactColour(el, {
    l1: 'fshDodgerBlue',
    l2: 'fshLightSkyBlue',
    l3: 'fshPowderBlue',
  });
}

function addOnlineAlliesWidgets() {
  const onlineAlliesList = getElementById('minibox-allies-list');
  if (!onlineAlliesList) { return; }
  doHideBtn(onlineAlliesList, 2);
  doHideBuffSelected(onlineAlliesList, 'ally');
  // add coloring for offline time
  colouring(onlineAlliesList, alliesColour);
}

export default addOnlineAlliesWidgets;
//# sourceMappingURL=addOnlineAlliesWidgets-8a5814b1.js.map
