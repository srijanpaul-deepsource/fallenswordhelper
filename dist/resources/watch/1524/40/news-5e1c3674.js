import { c as createAnchor } from './createAnchor-b117d5fc.js';
import { c as createSpan } from './createSpan-615a174b.js';
import { g as getArrayByClassName } from './getArrayByClassName-22096cf9.js';
import { g as getTitle } from './getTitle-68e6dfad.js';
import { F as querySelectorArray, p as pCC, aK as guideUrl, i as insertElement, E as querySelector, bF as updateArchiveUrl, bG as archiveUrl, I as getValue, a8 as defLastLadderReset, X as setValue, aJ as containsText, C as getText } from './calfSystem-81938674.js';
import { i as insertElementBefore } from './insertElementBefore-6e80e0ff.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a29e456d.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-b3a45b02.js';

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
//# sourceMappingURL=news-5e1c3674.js.map
