import { c as collapse } from './collapse-a6d29083.js';
import { I as getValue, a9 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aP as containsText, C as getText, X as setValue } from './calfSystem-7a121553.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0c908a83.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-32446cb9.js';
import { s as simpleCheckbox } from './simpleCheckbox-4ea82834.js';
import './hideElement-7486432a.js';
import './toggleForce-41b0f4ee.js';
import './isChecked-5c7617f4.js';

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
//# sourceMappingURL=viewArchive-6dcb0e45.js.map
