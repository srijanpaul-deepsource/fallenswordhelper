import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-ed8cdc27.js';
import { z as getElementById } from './calfSystem-6b7d7ae6.js';
import './getArrayByClassName-9a621477.js';
import './hideElement-9426b096.js';
import './openQuickBuffByName-dc6e5aed.js';
import './fshOpen-2af77be9.js';
import './selfIdIs-14863c49.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-9bc28143.js.map
