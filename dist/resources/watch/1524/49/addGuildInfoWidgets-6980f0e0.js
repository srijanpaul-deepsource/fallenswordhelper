import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-ca3a1df4.js';
import { z as getElementById, B as setInnerHtml, v as guildSubcmdUrl, F as querySelectorArray, aK as contains } from './calfSystem-579856fa.js';
import './getArrayByClassName-0292d985.js';
import './hideElement-3021ab25.js';
import './openQuickBuffByName-aa571bea.js';
import './fshOpen-c207a52b.js';
import './selfIdIs-6f5c17ab.js';

function guildColour(el) {
  contactColour(el, {
    l1: 'fshGreen',
    l2: 'fshWhite',
    l3: 'fshGrey',
  });
}

function makeLink(el) {
  setInnerHtml(`<a href="${guildSubcmdUrl}chat">Chat</a>`, el);
}

function updateChatLink() {
  querySelectorArray('#pCR h4').filter(contains('Chat')).forEach(makeLink);
}

function addGuildInfoWidgets() {
  const guildMembrList = getElementById('minibox-guild-members-list');
  if (!guildMembrList) { return; } // list exists
  // hide guild info links
  doHideBtn(guildMembrList, 1);
  doHideBuffSelected(guildMembrList, 'guild');
  // add coloring for offline time
  colouring(guildMembrList, guildColour);
  updateChatLink();
}

export default addGuildInfoWidgets;
//# sourceMappingURL=addGuildInfoWidgets-6980f0e0.js.map
