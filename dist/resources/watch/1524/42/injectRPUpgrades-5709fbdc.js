import { y as jQueryNotPresent, f as insertHtmlBeforeEnd, p as pCC, m as getArrayByTagName, s as partial } from './calfSystem-78c09adf.js';
import { m as myStats } from './myStats-e9a66ab1.js';
import { r as reduceBuffArray } from './reduceBuffArray-863d24b1.js';
import './getProfile-f5ed4dd4.js';
import './cmdExport-fc81eff3.js';
import './indexAjaxJson-d434bd9e.js';
import './playerName-bb0f99eb.js';
import './idb-364f7bbb.js';

const packRE = />\s*([ a-zA-Z]+) Level (\d+)/g;

const makeSpan = (bf) => `<br><span class="fshRed fshNoWrap">${bf[1]} ${
  bf[2]} active</span>`;

function checkForBuffs(myBuffs, el) {
  const { tipped } = el.dataset;
  const dupeBuffs = [...tipped.matchAll(packRE)]
    .filter((bf) => myBuffs[bf[1]] === Number(bf[2]));
  if (dupeBuffs.length > 0) {
    insertHtmlBeforeEnd(el.parentNode, dupeBuffs.map(makeSpan).join(''));
  }
}

function postWarnings(myBuffs) {
  const packsRow = pCC.children[0].rows[9];
  if (!packsRow) { return; }
  getArrayByTagName('a', packsRow.cells[0].children[0])
    .forEach(partial(checkForBuffs, myBuffs));
}

function parseProfile(data) {
  if (data._skills.length !== 0) {
    const myBuffs = reduceBuffArray(data._skills);
    postWarnings(myBuffs);
  }
}

function injectRPUpgrades() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  myStats(true).then(parseProfile);
}

export default injectRPUpgrades;
//# sourceMappingURL=injectRPUpgrades-5709fbdc.js.map
