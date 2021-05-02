import { c as collapse } from './collapse-fa440331.js';
import { I as getValue, a8 as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aK as containsText, C as getText, X as setValue } from './calfSystem-78c09adf.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-e5f49ac0.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-fbfe3b0c.js';
import { s as simpleCheckbox } from './simpleCheckbox-09e2d265.js';
import './hideElement-30ade5f0.js';
import './toggleForce-f06995aa.js';
import './isChecked-cf65e779.js';

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
//# sourceMappingURL=viewArchive-151e30b1.js.map
