import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-ca3a1df4.js';
import { z as getElementById } from './calfSystem-579856fa.js';
import './getArrayByClassName-0292d985.js';
import './hideElement-3021ab25.js';
import './openQuickBuffByName-aa571bea.js';
import './fshOpen-c207a52b.js';
import './selfIdIs-6f5c17ab.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-e3fd06ee.js.map
