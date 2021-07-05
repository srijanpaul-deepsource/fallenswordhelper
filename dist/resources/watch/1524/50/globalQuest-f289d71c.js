import { d as dataRows } from './dataRows-47220ec2.js';
import { g as getElementsByTagName, p as pCC, d as defTable, k as on, B as setInnerHtml, C as getText } from './calfSystem-8168cf6d.js';
import { f as formToUrl } from './formToUrl-1b542ce2.js';
import { s as searchPlayerHref } from './searchPlayerHref-37dd277c.js';

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
//# sourceMappingURL=globalQuest-f289d71c.js.map
