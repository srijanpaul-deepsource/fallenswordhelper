import clickThis from '../common/clickThis';
import {createTextArea} from '../common/cElement';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementsByTagName from '../common/getElementsByTagName';
import getValue from '../system/getValue';
import insertElement from '../common/insertElement';
import on from '../common/on';
import {pCC} from '../support/layout';
import partial from '../common/partial';
import querySelector from '../common/querySelector';

function removeCrlf(fshTxt) {
  fshTxt.value = fshTxt.value.replace(/\r\n|\n|\r/g, ' ');
}

function setDoChat(el) {
  el.setAttribute('form', 'dochat');
}

function giveFormId() {
  var formList = getElementsByTagName('form', pCC);
  formList[0].id = 'dochat';
  return formList[0];
}

function giveInputsId() {
  var filteredList = getArrayByTagName('input', pCC).slice(0, 7);
  filteredList.forEach(setDoChat);
  return filteredList[5];
}

function rearrangeTable(btnMass) {
  var theTable = querySelector('#pCC table table');
  theTable.rows[0].cells[0].remove();
  var myCell = theTable.insertRow(-1).insertCell(-1);
  insertElement(myCell, btnMass);
  var ourTd = theTable.rows[0].cells[0];
  ourTd.rowSpan = 2;
  return ourTd;
}

function keypress(sendBtn, evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    clickThis(sendBtn);
  }
}

function makeTextArea(sendBtn) {
  var fshTxt = createTextArea({
    cols: 72,
    name: 'msg',
    required: true,
    rows: 2
  });
  setDoChat(fshTxt);
  on(fshTxt, 'keypress', partial(keypress, sendBtn));
  return fshTxt;
}

function hasTextEntry() {
  var btnMass = querySelector('input[value="Send As Mass"]');
  if (!btnMass) {return;}
  var theForm = giveFormId();
  var sendBtn = giveInputsId();
  var ourTd = rearrangeTable(btnMass);
  var fshTxt = makeTextArea(sendBtn);
  ourTd.replaceChild(fshTxt, ourTd.children[0]);
  on(theForm, 'submit', partial(removeCrlf, fshTxt));
}

export default function addChatTextArea() {
  if (!getValue('enhanceChatTextEntry') || !pCC) {return;}
  hasTextEntry();
}