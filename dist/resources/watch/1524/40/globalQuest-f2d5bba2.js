import { d as dataRows } from './dataRows-6c5fc4c9.js';
import { g as getElementsByTagName, p as pCC, d as defTable, k as on, B as setInnerHtml, C as getText } from './calfSystem-81938674.js';
import { f as formToUrl } from './formToUrl-822020a1.js';
import { s as searchPlayerHref } from './searchPlayerHref-e0ecea10.js';

function globalQuestAllowBack(topTable) { // jQuery
  const thisSelect = getElementsByTagName('select', topTable)[0];
  $(thisSelect).off();
  on(pCC, 'change', (e) => formToUrl(e.target.form));
}

function playerLink(el) {
  const aCell = el.cells[1];
  setInnerHtml(searchPlayerHref(getText(aCell)), aCell);
}

function globalQuest() {
  const topTable = getElementsByTagName(defTable, pCC)[3];
  globalQuestAllowBack(topTable);
  dataRows(topTable.rows, 4, 1).forEach(playerLink);
}

export default globalQuest;
//# sourceMappingURL=globalQuest-f2d5bba2.js.map
