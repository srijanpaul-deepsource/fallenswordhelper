import { h as hideElement } from './hideElement-512851a2.js';
import { F as querySelectorArray, bt as guildLogUrl, bZ as newGuildLogLoc, b_ as newGuildLogUrl } from './calfSystem-81938674.js';

function testForGuildLogMsg(guildLogNode) {
  return window.location.search !== newGuildLogLoc
    || guildLogNode.parentNode.id !== 'notification-guild-log';
}

function hideGuildLogMsg(guildLogNode) {
  // hide the lhs box
  if (testForGuildLogMsg(guildLogNode)) { return; }
  const messageBox = guildLogNode.parentNode;
  if (messageBox) {
    hideElement(messageBox);
  }
}

// eslint-disable-next-line no-param-reassign
function updateHref(el) { el.href = newGuildLogUrl; }

function gotGuildLogNodes(guildLogNodes) {
  guildLogNodes.forEach(updateHref);
  hideGuildLogMsg(guildLogNodes[guildLogNodes.length - 1]);
}

function changeGuildLogHREF() {
  const guildLogNodes = querySelectorArray(
    `#pCL a[href="${guildLogUrl}"]`,
  );
  if (guildLogNodes.length > 0) { gotGuildLogNodes(guildLogNodes); }
}

export default changeGuildLogHREF;
//# sourceMappingURL=changeGuildLogHREF-787ff9da.js.map
