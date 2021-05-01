import { aK as containsText, E as querySelector, bj as ahSearchUrl, f as insertHtmlBeforeEnd, C as getText } from './calfSystem-6b7d7ae6.js';
import { x as xPath } from './xPath-29c9ee7f.js';

function isNotBound() {
  return !xPath('.//*[text() = "This item is bound"]');
}

function isNotComponent() {
  return !containsText('Component',
    xPath('.//tr[td/b/text() = "Type:"]/td[2]'));
}

function ahItemHref(name) {
  return `https://www.fallensword.com/${ahSearchUrl}${name}`;
}

function insertAhLink(target) {
  insertHtmlBeforeEnd(target.parentNode, ` [<a href="${
    ahItemHref(getText(target))
  }" target="_blank"><b class="fshBlue">AH</b></a>]`);
}

function itemsView() {
  if (isNotBound() && isNotComponent()) {
    insertAhLink(querySelector('.tHeader').children[0]);
  }
}

export default itemsView;
//# sourceMappingURL=itemsView-cf5d462a.js.map
