import { p as pCC, aE as contains, I as getValue, k as on, s as partial, N as arrayFrom, i as insertElement, S as clickThis, E as querySelector, T as getUrlParameter } from './calfSystem-78c09adf.js';
import { c as closestTable } from './closestTable-1cf8f0be.js';
import { c as createTextArea } from './createTextArea-ac679c58.js';
import { g as getArrayByClassName } from './getArrayByClassName-36321b9e.js';
import { a as addLogColoring } from './addLogColoring-0fab59e2.js';
import './closest-9a08f4fa.js';
import './createStyle-1fb13266.js';
import './dataRows-474a0cfc.js';
import './doBuffLinkClick-59b95a18.js';
import './openQuickBuffByName-12ed0f8e.js';
import './fshOpen-cce15559.js';
import './parseDateAsTimestamp-fbfe3b0c.js';

function removeCrlf(fshTxt) {
  // eslint-disable-next-line no-param-reassign
  fshTxt.value = fshTxt.value.replace(/\r\n|\n|\r/g, ' ');
}

const formAttr = (el) => { el.setAttribute('form', 'dochat'); };

function setDoChat(theForm) {
  // eslint-disable-next-line no-param-reassign
  theForm.id = 'dochat';
  arrayFrom(theForm.elements).forEach(formAttr);
}

function rearrangeTable(elements) {
  const theTable = closestTable(elements[5]);
  theTable.rows[0].cells[0].remove();
  insertElement(theTable.insertRow(-1).insertCell(-1), elements[6]);
  theTable.rows[0].cells[0].rowSpan = 2;
}

function keypress(sendBtn, evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    clickThis(sendBtn);
  }
}

function makeTextArea() {
  const fshTxt = createTextArea({
    cols: 72,
    maxLength: 512,
    name: 'msg',
    required: true,
    rows: 2,
  });
  formAttr(fshTxt);
  return fshTxt;
}

const dont = () => !pCC
  || getArrayByClassName('header', pCC).filter(contains('Posted\xa0By')).length !== 1
  || !getValue('enhanceChatTextEntry');

function addChatTextArea() {
  if (dont()) { return; }
  const theForm = document.forms[0];
  setDoChat(theForm);
  rearrangeTable(theForm.elements);
  const fshTxt = makeTextArea();
  on(fshTxt, 'keypress', partial(keypress, theForm.elements[5]));
  theForm.elements[4].replaceWith(fshTxt);
  on(theForm, 'submit', partial(removeCrlf, fshTxt));
}

var css = ".fshGc {\n  table-layout: fixed;\n  overflow-wrap: break-word;\n}\n.fshGc td:nth-child(1) {width: 120px;}\n.fshGc td:nth-child(2) {width: 100px;}\n.fshGc td:nth-child(3) {width: 418px;}\n";
var modules_ecc4a754 = {};

function guildChatStyling() {
  if (!getValue('wrapGuildChat')) { return; }
  const chatTable = querySelector('#pCC table table table table');
  if (!chatTable) { return; }
  chatTable.classList.add('fshGc');
}

function guildChat() {
  guildChatStyling();
  addChatTextArea();
  const chatType = getUrlParameter('chat_type');
  if (chatType && chatType === '1') {
    addLogColoring('Leader', 0, 3);
  } else {
    addLogColoring('Chat', 0, 3);
  }
}

export default guildChat;
//# sourceMappingURL=guildChat-6ed6a4d3.js.map
