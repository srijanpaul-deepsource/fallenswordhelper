import createAnchor from '../common/cElement/createAnchor';
import getElementById from '../common/getElement';
import insertElement from '../common/insertElement';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import onclick from '../common/onclick';
import {
  blacksmithUrl,
  cmdUrl,
  defSubcmd,
  dropItemsUrl,
  pointsUrl,
  profileUrl,
} from '../support/constants';

function preventHcs(evt) {
  evt.stopPropagation();
}

function statbarWrapper(href, id) {
  const character = getElementById(id);
  if (!character) { return; }
  const myWrapper = createAnchor({ href });
  const statWrapper = character.parentNode;
  insertElement(myWrapper, character);
  insertElementAfterBegin(statWrapper, myWrapper);
  onclick(myWrapper, preventHcs, true);
}

export default function statbar() {
  statbarWrapper(profileUrl, 'statbar-character');
  statbarWrapper(`${pointsUrl + defSubcmd}reserve`, 'statbar-stamina');
  statbarWrapper(blacksmithUrl, 'statbar-equipment');
  statbarWrapper(dropItemsUrl, 'statbar-inventory');
  statbarWrapper(pointsUrl, 'statbar-fsp');
  statbarWrapper(`${cmdUrl}bank`, 'statbar-gold');
}
