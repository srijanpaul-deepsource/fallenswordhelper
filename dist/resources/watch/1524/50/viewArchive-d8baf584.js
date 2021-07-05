import { c as collapse } from './collapse-6b71597d.js';
import { I as getValue, aa as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aQ as containsText, C as getText, X as setValue } from './calfSystem-8168cf6d.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-4f6ecf31.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-a0e15282.js';
import { s as simpleCheckbox } from './simpleCheckbox-75c1bcfd.js';
import './hideElement-e21a7422.js';
import './toggleForce-a9d00c58.js';
import './isChecked-8825c1a8.js';

let lastLadderReset;
let trackLadderReset;

function checkForPvPLadder(row) {
  if (trackLadderReset && containsText('PvP Ladder', row.children[1].children[0])) {
    const logTime = parseDateAsTimestamp(
      getText(row.children[1].children[2]).replace('Posted: ', ''),
    );
    if (logTime > lastLadderReset) {
      setValue(defLastLadderReset, logTime);
      lastLadderReset = logTime;
    }
  }
}

function testArticle(rowType) { return rowType > 1; }

function setupPref(prefName, rowInjector) {
  insertHtmlAfterEnd(rowInjector, simpleCheckbox(prefName));
}

function viewArchive() {
  lastLadderReset = getValue(defLastLadderReset);
  trackLadderReset = getValue('trackLadderReset');
  const prefName = 'collapseNewsArchive';
  const theTables = getElementsByTagName(defTable, pCC);
  if (theTables.length > 2) {
    setupPref(prefName, theTables[0].rows[2]);
    collapse({
      prefName,
      theTable: theTables[2],
      headInd: 7,
      articleTest: testArticle,
      extraFn: checkForPvPLadder,
    });
  }
}

export default viewArchive;
//# sourceMappingURL=viewArchive-d8baf584.js.map
