import { c as createAnchor } from './createAnchor-c4de68a3.js';
import { z as getElementById, i as insertElement, o as onclick, bL as profileUrl, ab as pointsUrl, aC as defSubcmd, bU as blacksmithUrl, bV as dropItemsUrl, aa as cmdUrl } from './calfSystem-78c09adf.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-28c8cd41.js';
import './insertElementBefore-34b77984.js';

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
//# sourceMappingURL=statBar-5aea51a6.js.map
