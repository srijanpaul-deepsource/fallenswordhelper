import { d as doBuffLink, a as doBuffLinkClick } from './doBuffLinkClick-59b95a18.js';
import { D as searchPlayerUrl, f as insertHtmlBeforeEnd, E as querySelector, F as querySelectorArray, G as playerLinkSelector, p as pCC, o as onclick } from './calfSystem-78c09adf.js';
import { i as interceptSubmit } from './interceptSubmit-415e0c7c.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel, b as getLowerGvGLevel, c as getUpperGvgLevel } from './levelHighlight-b3910a16.js';
import './openQuickBuffByName-12ed0f8e.js';
import './fshOpen-cce15559.js';
import './formToUrl-82de8371.js';
import './intValue-9eb8a210.js';
import './valueText-1ac982fa.js';

function searchUrl(min, max, guild) {
  return `${searchPlayerUrl}&search_level_min=${
    min}&search_level_max=${
    max}&search_in_guild=${
    guild}`;
}

function shortcuts() {
  return `&nbsp;<a class="fshBlue" href="${
    searchUrl(getLowerPvpLevel(), getUpperPvpLevel(), '-1')
  }">Get PvP targets</a>&nbsp;<a class="fshBlue" href="${
    searchUrl(getLowerGvGLevel(), getUpperGvgLevel(), '1')}">Get GvG targets</a>`;
}

function doShortcuts(findPlayerButton) {
  insertHtmlBeforeEnd(findPlayerButton.parentNode, shortcuts());
}

function doFindPlayer() {
  const findPlayerButton = querySelector('input[value="Find Player"]');
  if (findPlayerButton) {
    doShortcuts(findPlayerButton);
  }
}

function doBuffLinks() {
  const playerLinks = querySelectorArray(playerLinkSelector, pCC);
  playerLinks.forEach(doBuffLink);
  onclick(pCC, doBuffLinkClick);
}

function injectFindPlayer() {
  doFindPlayer();
  doBuffLinks();
  interceptSubmit();
}

export default injectFindPlayer;
//# sourceMappingURL=injectFindPlayer-c4ad4379.js.map
