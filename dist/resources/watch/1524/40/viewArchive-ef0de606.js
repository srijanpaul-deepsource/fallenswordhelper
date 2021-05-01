import { c as collapse } from './collapse-3602cac6.js';
import { I as getValue, a8 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aJ as containsText, C as getText, X as setValue } from './calfSystem-81938674.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a29e456d.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-b3a45b02.js';
import { s as simpleCheckbox } from './simpleCheckbox-42d16f41.js';
import './hideElement-512851a2.js';
import './toggleForce-4ff42c01.js';
import './isChecked-a9c3c9fe.js';

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
//# sourceMappingURL=viewArchive-ef0de606.js.map
