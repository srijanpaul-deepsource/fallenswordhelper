import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-8ff98b4e.js';
import { z as getElementById } from './calfSystem-8168cf6d.js';
import './getArrayByClassName-3329015c.js';
import './hideElement-e21a7422.js';
import './openQuickBuffByName-380b0015.js';
import './fshOpen-90a0d847.js';
import './selfIdIs-03cd074a.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-aaf551d4.js.map
