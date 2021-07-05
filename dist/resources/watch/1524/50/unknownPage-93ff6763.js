import { s as partial, bq as fshBuffLog, I as getValue, y as jQueryNotPresent, E as querySelector, br as screenview, bs as news, z as getElementById, bt as injectQuestBookFull, af as querySelectorAll, bu as inventing } from './calfSystem-8168cf6d.js';
import { g as getBuff, b as buffReportParser } from './getBuff-7aba7752.js';
import { f as formatLocalDateTime } from './formatLocalDateTime-76d0f341.js';
import { s as set, g as get } from './idb-d2486026.js';
import { x as xPath } from './xPath-3db88b48.js';
import './buffObj-6a194f9f.js';
import './isDate-c0f20234.js';
import './numberIsNaN-bf55a311.js';
import './padZ-a45d0ad0.js';

function getStamAsString(buffCast) {
  // var thisBuff = buffList.find(partial(buff, buffCast[1]));
  const thisBuff = getBuff(buffCast);
  if (thisBuff) { return thisBuff.stam.toString(); }
  return '-';
}

const success = (e) => ` ${e[0]} (${getStamAsString(e[1])
} stamina)<br>`;
const reject = (e) => ` <span class="fshRed">${e[0]}</span><br>`;

function logFormat(timeStamp, el) {
  let result;
  if (el[1]) {
    result = success(el);
  } else {
    result = reject(el);
  }
  return timeStamp + result;
}

function buffResult(buffLog) {
  const timeStamp = formatLocalDateTime(new Date());
  const buffsAttempted = buffReportParser(document)
    .map(partial(logFormat, timeStamp));
  set(fshBuffLog, buffsAttempted.reverse().join('') + buffLog);
}

function updateBuffLog() {
  if (!getValue('keepBuffLog')) { return; }
  get(fshBuffLog).then(buffResult);
}

const unknown = [
  [
    () => querySelector('.news_left_column'),
    () => {
      screenview('unknown.news');
      news();
    },
  ],
  [
    () => getElementById('quickbuff-report'),
    () => {
      screenview('unknown.buffLog.updateBuffLog');
      updateBuffLog();
    },
  ],
  [
    () => xPath('//td[.="Quest Name"]'),
    () => {
      screenview('unknown.questBook.injectQuestBookFull');
      injectQuestBookFull();
    },
  ],
  [
    () => querySelectorAll('#pCC img[title="Inventing"]').length > 0,
    () => {
      screenview('unknown.recipes.inventing');
      inventing();
    },
  ],
];

// eslint-disable-next-line no-unused-labels, no-labels
devLbl: { // Fell through!
  unknown.push(
    [
      () => true,
      // eslint-disable-next-line no-console
      () => { console.log('Fell through!'); },
    ],
  );
}

function unknownPage() { // Legacy
  if (jQueryNotPresent()) { return; }
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { // unknownPage
    // eslint-disable-next-line no-console
    console.log('unknownPage');
  }
  const known = unknown.find((el) => el[0]());
  if (known) { known[1](); }
}

export default unknownPage;
//# sourceMappingURL=unknownPage-93ff6763.js.map
