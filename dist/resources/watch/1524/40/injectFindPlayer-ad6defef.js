import { d as doBuffLink, a as doBuffLinkClick } from './doBuffLinkClick-78e2b94d.js';
import { D as searchPlayerUrl, f as insertHtmlBeforeEnd, E as querySelector, F as querySelectorArray, G as playerLinkSelector, p as pCC, o as onclick } from './calfSystem-81938674.js';
import { i as interceptSubmit } from './interceptSubmit-1acde52b.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel, b as getLowerGvGLevel, c as getUpperGvgLevel } from './levelHighlight-a1e8ee56.js';
import './openQuickBuffByName-7610a5fa.js';
import './fshOpen-9656868c.js';
import './formToUrl-822020a1.js';
import './intValue-e485889b.js';
import './valueText-41c5c37f.js';

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
//# sourceMappingURL=injectFindPlayer-ad6defef.js.map
