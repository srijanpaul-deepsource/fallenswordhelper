import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-307f0855.js';
import { z as getElementById, B as setInnerHtml, v as guildSubcmdUrl, F as querySelectorArray, aE as contains } from './calfSystem-78c09adf.js';
import './getArrayByClassName-36321b9e.js';
import './hideElement-30ade5f0.js';
import './openQuickBuffByName-12ed0f8e.js';
import './fshOpen-cce15559.js';
import './selfIdIs-29c6d134.js';

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
//# sourceMappingURL=addGuildInfoWidgets-05ecb93d.js.map
