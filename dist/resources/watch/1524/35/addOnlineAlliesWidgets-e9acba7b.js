import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-2fdc2741.js';
import { z as getElementById } from './calfSystem-06ff1f7b.js';
import './getArrayByClassName-7904f2f4.js';
import './hideElement-2c661b2e.js';
import './openQuickBuffByName-2e0672aa.js';
import './fshOpen-363b7f52.js';
import './selfIdIs-cb32fda0.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-e9acba7b.js.map
