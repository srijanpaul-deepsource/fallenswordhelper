import { c as createAnchor } from './createAnchor-b117d5fc.js';
import { z as getElementById, i as insertElement, o as onclick, bK as profileUrl, ab as pointsUrl, aB as defSubcmd, bT as blacksmithUrl, bU as dropItemsUrl, aa as cmdUrl } from './calfSystem-81938674.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-bb0f64ac.js';
import './insertElementBefore-6e80e0ff.js';

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
//# sourceMappingURL=statBar-9ec3dfe1.js.map
