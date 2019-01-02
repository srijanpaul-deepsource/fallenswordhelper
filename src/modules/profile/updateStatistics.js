import {def_table} from '../support/constants';
import getArrayByTagName from '../common/getArrayByTagName';
import {getElementById} from '../common/getElement';
import getElementsByTagName from '../common/getElementsByTagName';

function removeStatTable(el) {
  var tde = getElementsByTagName('td', el);
  el.parentNode.innerHTML = tde[0].innerHTML.replace(/&nbsp;/g, ' ') +
    '<div class="profile-stat-bonus">' + tde[1].textContent + '</div>';
}

export default function updateStatistics() {
  var charStats = getElementsByTagName(def_table,
    getElementById('profileLeftColumn'))[0];
  getArrayByTagName(def_table, charStats).forEach(removeStatTable);
}
