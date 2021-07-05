import { d as doBuffLink, a as doBuffLinkClick } from './doBuffLinkClick-01dfdaf9.js';
import { D as searchPlayerUrl, f as insertHtmlBeforeEnd, E as querySelector, F as querySelectorArray, G as playerLinkSelector, p as pCC, o as onclick } from './calfSystem-579856fa.js';
import { i as interceptSubmit } from './interceptSubmit-9bdd8d86.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel, b as getLowerGvGLevel, c as getUpperGvgLevel } from './levelHighlight-45629e44.js';
import './openQuickBuffByName-aa571bea.js';
import './fshOpen-c207a52b.js';
import './formToUrl-72736914.js';
import './asInt-17af841c.js';
import './intValue-f11572ef.js';
import './valueText-5694c75c.js';

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
//# sourceMappingURL=injectFindPlayer-70202b68.js.map
