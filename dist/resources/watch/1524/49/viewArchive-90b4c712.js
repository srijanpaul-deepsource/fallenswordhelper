import { c as collapse } from './collapse-7e6371bd.js';
import { I as getValue, aa as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aQ as containsText, C as getText, X as setValue } from './calfSystem-579856fa.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a16caebb.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-a7642d71.js';
import { s as simpleCheckbox } from './simpleCheckbox-6d4f0b76.js';
import './hideElement-3021ab25.js';
import './toggleForce-d61da182.js';
import './isChecked-ecfa0022.js';

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
//# sourceMappingURL=viewArchive-90b4c712.js.map
