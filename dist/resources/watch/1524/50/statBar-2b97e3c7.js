import { c as createAnchor } from './createAnchor-2332330f.js';
import { z as getElementById, i as insertElement, o as onclick, bR as profileUrl, ad as pointsUrl, aI as defSubcmd, cb as blacksmithUrl, cc as dropItemsUrl, ac as cmdUrl } from './calfSystem-8168cf6d.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-dad63ea4.js';
import './insertElementBefore-784d4581.js';

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
//# sourceMappingURL=statBar-2b97e3c7.js.map
