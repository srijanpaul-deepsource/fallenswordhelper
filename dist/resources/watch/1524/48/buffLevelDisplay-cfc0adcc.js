import { F as querySelectorArray, ae as insertHtmlAfterBegin } from './calfSystem-2bd62864.js';

const buffSelector = '#profileRightColumn img[src*="/skills/"]';

function injectLevel(i) {
  const matches = /Level: (\d+)/.exec(i.dataset.tipped);
  if (!matches) { return; }
  const lvl = matches[1];
  let target = i.nextElementSibling;
  if (!i.nextElementSibling) {
    target = i.parentNode.nextElementSibling;
  }
  insertHtmlAfterBegin(target, `<b>(${lvl})</b><br>`);
}

function buffLevelDisplay() {
  const buffImgs = querySelectorArray(buffSelector);
  buffImgs.forEach(injectLevel);
}

export default buffLevelDisplay;
//# sourceMappingURL=buffLevelDisplay-cfc0adcc.js.map
