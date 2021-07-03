import { c as collapse } from './collapse-b561a56c.js';
import { I as getValue, aa as defLastLadderReset, g as getElementsByTagName, p as pCC, d as defTable, aQ as containsText, C as getText, X as setValue } from './calfSystem-2bd62864.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0f76853c.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-e3d66fef.js';
import { s as simpleCheckbox } from './simpleCheckbox-84bdb672.js';
import './hideElement-3852cc2c.js';
import './toggleForce-5151034c.js';
import './isChecked-b16dd421.js';

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
//# sourceMappingURL=viewArchive-ffa87b58.js.map
