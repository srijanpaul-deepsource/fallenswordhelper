import { c as createAnchor } from './createAnchor-a7b63867.js';
import { z as getElementById, i as insertElement, o as onclick, bR as profileUrl, ad as pointsUrl, aI as defSubcmd, cb as blacksmithUrl, cc as dropItemsUrl, ac as cmdUrl } from './calfSystem-579856fa.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-e92883a7.js';
import './insertElementBefore-c7161beb.js';

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
//# sourceMappingURL=statBar-ca7b6d5e.js.map
