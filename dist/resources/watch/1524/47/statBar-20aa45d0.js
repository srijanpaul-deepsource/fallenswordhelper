import { c as createAnchor } from './createAnchor-eb71a5c2.js';
import { z as getElementById, i as insertElement, o as onclick, bQ as profileUrl, ac as pointsUrl, aH as defSubcmd, bX as blacksmithUrl, bY as dropItemsUrl, ab as cmdUrl } from './calfSystem-7a121553.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-2e575b9d.js';
import './insertElementBefore-165ce171.js';

function preventHcs(evt) {
  evt.stopPropagation();
}

function statbarWrapper(href, id) {
  const character = getElementById(`statbar-${id}`);
  if (!character) { return; }
  const myWrapper = createAnchor({ href });
  const statWrapper = character.parentNode;
  insertElement(myWrapper, character);
  insertElementAfterBegin(statWrapper, myWrapper);
  onclick(myWrapper, preventHcs, true);
}

function statbar() {
  statbarWrapper(profileUrl, 'character');
  statbarWrapper(`${pointsUrl + defSubcmd}reserve`, 'stamina');
  statbarWrapper(blacksmithUrl, 'equipment');
  statbarWrapper(dropItemsUrl, 'inventory');
  statbarWrapper(pointsUrl, 'fsp');
  statbarWrapper(`${cmdUrl}bank`, 'gold');
}

export default statbar;
//# sourceMappingURL=statBar-20aa45d0.js.map
