import { c as createAnchor } from './createAnchor-dd77662f.js';
import { z as getElementById, i as insertElement, o as onclick, bR as profileUrl, ad as pointsUrl, aI as defSubcmd, cb as blacksmithUrl, cc as dropItemsUrl, ac as cmdUrl } from './calfSystem-2bd62864.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-ac52300a.js';
import './insertElementBefore-5adb1609.js';

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
//# sourceMappingURL=statBar-804c63f8.js.map
