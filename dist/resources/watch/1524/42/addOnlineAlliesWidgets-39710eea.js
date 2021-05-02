import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-307f0855.js';
import { z as getElementById } from './calfSystem-78c09adf.js';
import './getArrayByClassName-36321b9e.js';
import './hideElement-30ade5f0.js';
import './openQuickBuffByName-12ed0f8e.js';
import './fshOpen-cce15559.js';
import './selfIdIs-29c6d134.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-39710eea.js.map
