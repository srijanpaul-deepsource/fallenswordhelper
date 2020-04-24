import { g as getElementsByTagName, l as on, u as partial, p as pCC, b as defTable, C as setInnerHtml, D as getText } from './calfSystem-69cf053a.js';
import { d as dontPost } from './dontPost-e04d2e64.js';
import { d as dataRows } from './dataRows-07dea2e7.js';
import { s as searchPlayerHref } from './searchPlayerHref-3d155e3a.js';

function allowBack(topTable) { // jQuery
  const thisSelect = getElementsByTagName('select', topTable)[0];
  $(thisSelect).off();
  on(thisSelect, 'change', partial(dontPost, pCC));
}

function playerLink(el) {
  const aCell = el.cells[1];
  setInnerHtml(searchPlayerHref(getText(aCell)), aCell);
}

function globalQuest() {
  const topTable = getElementsByTagName(defTable, pCC)[3];
  allowBack(topTable);
  dataRows(topTable.rows, 4, 1).forEach(playerLink);
}

export default globalQuest;
//# sourceMappingURL=globalQuest-de71a07f.js.map
