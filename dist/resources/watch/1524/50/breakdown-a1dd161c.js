import { r as indexAjax, y as jQueryNotPresent, I as getValue, s as partial, N as navigateTo, aH as composingUrl, aI as defSubcmd, h as hasClass, X as setValue, f as insertHtmlBeforeEnd, p as pCC, o as onclick, z as getElementById } from './calfSystem-8168cf6d.js';
import { p as perfFilter } from './perfFilter-3da33b4e.js';
import { s as simpleCheckbox } from './simpleCheckbox-75c1bcfd.js';
import './getArrayByClassName-3329015c.js';
import './getInventoryById-11e73555.js';
import './getInventory-b80d3cb0.js';
import './guildStore-fc5461c1.js';
import './cmdExport-695e7790.js';
import './indexAjaxJson-8e794cab.js';
import './isChecked-8825c1a8.js';

function doBreakdown(selectedList) {
  return indexAjax({
    type: 'POST',
    data: {
      cmd: 'composing',
      subcmd: 'dobreakdown',
      item_list: selectedList,
    },
    dataType: 'json',
  });
}

const prefDisableBreakdownPrompts = 'disableBreakdownPrompts';
let disableBreakdownPrompts;
const selectedList = [];

function disappearance(target) { target.hide(); }

function goDown(target, disappear) {
  target.animate({ height: 0 }, 500, disappear);
}

function fadeAway() {
  const target = $('#composingMessageContainer');
  target.animate({ opacity: 0 }, 500,
    partial(goDown, target, partial(disappearance, target)));
}

function msgText(message, bgcolor) {
  return $('<div/>', { id: 'composingMessageText' })
    .css({
      width: '90%',
      'text-align': 'center',
      'background-color': bgcolor,
      color: 'rgb(255, 255, 255)',
      margin: '5px auto 5px auto',
      padding: '2px',
    })
    .html(message);
}

function showComposingMessage(message, bgcolor) { // jQuery
  $('#composingMessageContainer').remove();

  $('#composingMessage')
    .append(
      $('<div/>', {
        id: 'composingMessageContainer',
        width: '100%',
      }).append(msgText(message, bgcolor)),
    );

  setTimeout(fadeAway, 5000);
}

function handleResponse(response) {
  if (response.error !== 0) {
    showComposingMessage(`Error: ${response.msg}`, 'rgb(164, 28, 28)');
  } else {
    navigateTo(`${composingUrl + defSubcmd}breakdown&m=1`);
  }
}

function breakItems() { // jQuery.min
  doBreakdown(selectedList).then(handleResponse);
}

function validBreakEvent(evt) {
  evt.stopPropagation();
  if (selectedList.length === 0) {
    showComposingMessage('Error: No items selected.', 'rgb(164, 28, 28)');
    return;
  }
  breakItems();
}

function breakEvt(evt) {
  if (disableBreakdownPrompts
      && evt.target.id === 'breakdown-selected-items') {
    validBreakEvent(evt);
  }
}

function itemClick(evt) {
  if (!hasClass('selectable-item', evt.target)) { return; }
  const myItem = evt.target.id.replace('composing-item-', '');
  const itemPos = selectedList.indexOf(myItem);
  if (itemPos === -1) {
    selectedList.push(myItem);
  } else {
    selectedList.splice(itemPos, 1);
  }
}

function togglePref() {
  disableBreakdownPrompts = !disableBreakdownPrompts;
  setValue(prefDisableBreakdownPrompts, disableBreakdownPrompts);
}

function prefBox() {
  insertHtmlBeforeEnd(pCC,
    `<table class="fshTblCenter"><tbody>${
      simpleCheckbox(prefDisableBreakdownPrompts)
    }</tbody></table>`);
}

function setupHandlers() {
  onclick(getElementById('breakdown-selected-items').parentNode, breakEvt,
    true);
  onclick(getElementById('composing-items'), itemClick);
  onclick(getElementById(prefDisableBreakdownPrompts), togglePref);
}

function composingBreakdown() {
  if (jQueryNotPresent()) { return; }
  perfFilter('composing');
  disableBreakdownPrompts = getValue(prefDisableBreakdownPrompts);
  prefBox();
  setupHandlers();
}

export default composingBreakdown;
//# sourceMappingURL=breakdown-a1dd161c.js.map
