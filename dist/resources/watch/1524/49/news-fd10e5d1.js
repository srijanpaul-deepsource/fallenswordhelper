import { c as createAnchor } from './createAnchor-a7b63867.js';
import { c as createSpan } from './createSpan-b77060aa.js';
import { g as getArrayByClassName } from './getArrayByClassName-0292d985.js';
import { g as getTitle } from './getTitle-f95b26cb.js';
import { F as querySelectorArray, p as pCC, aR as guideUrl, i as insertElement, E as querySelector, bM as updateArchiveUrl, bN as archiveUrl, I as getValue, aa as defLastLadderReset, X as setValue, aQ as containsText, C as getText } from './calfSystem-579856fa.js';
import { i as insertElementBefore } from './insertElementBefore-c7161beb.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a16caebb.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-a7642d71.js';

const titanRe = /(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/;

function makeALink(href, label) {
  return `<a href="${href}" target="_blank">${label}</a>`;
}

function creatureSearchHref(name) {
  return `${guideUrl}creatures&search_name=${name}`;
}

function realmSearchHref(name) {
  return `${guideUrl}realms&search_name=${name}`;
}

function makeUfsgLink(img) {
  const myName = encodeURIComponent(getTitle(img));
  const myLink = createAnchor({
    href: creatureSearchHref(myName),
    target: '_blank',
  });
  insertElementBefore(myLink, img);
  insertElement(myLink, img);
}

function titanSpotted(el) {
  return titanRe.test(el.firstChild.nodeValue); // Text Node
}

function reformatNews(el) {
  const news = el.firstChild.nodeValue.match(titanRe); // Text Node
  news[2] = makeALink(creatureSearchHref(news[2]), news[2]);
  news[4] = makeALink(realmSearchHref(news[4]), news[4]);
  return news.slice(1).join('');
}

function titanLink(el) {
  const newSpan = createSpan({ innerHTML: reformatNews(el) });
  el.replaceChild(newSpan, el.firstChild); // Text Node
}

function addUfsgLinks() {
  querySelectorArray('.news_body img[src*="/creatures/"]')
    .forEach(makeUfsgLink);
  getArrayByClassName('news_body_tavern', pCC)
    .filter(titanSpotted).forEach(titanLink);
}

const pageTwoLink = (url, type) => `&nbsp;<a href="${
  url}&page=2">View ${type} Page 2</a>`;

function injectHomePageTwoLink() {
  const updateLink = querySelector(`#pCC a[href="${updateArchiveUrl}"]`);
  if (!updateLink) { return; }
  insertHtmlAfterEnd(updateLink, pageTwoLink(updateArchiveUrl, 'Updates'));
  const archiveLink = querySelector(`#pCC a[href="${archiveUrl}"]`);
  insertHtmlAfterEnd(archiveLink, pageTwoLink(archiveUrl, 'News'));
}

const pvpLadder = (head) => containsText('PvP Ladder', head.children[1]);

const timestamp = (head) => parseDateAsTimestamp(getText(head.children[2]));

function lookForPvPLadder() {
  const rumours = getArrayByClassName('news_head_tavern', pCC);
  const pvpTimes = rumours.filter(pvpLadder).map(timestamp);
  const logTime = Math.max.apply(null, pvpTimes);
  if (logTime > getValue(defLastLadderReset)) {
    setValue(defLastLadderReset, logTime);
  }
}

function news() {
  if (getValue('pageTwoLinks')) {
    injectHomePageTwoLink();
  }
  if (getValue('addUfsgLinks')) {
    addUfsgLinks();
  }
  if (getValue('trackLadderReset')) {
    lookForPvPLadder();
  }
}

export default news;
//# sourceMappingURL=news-fd10e5d1.js.map
