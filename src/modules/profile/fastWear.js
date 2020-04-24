import add from '../support/task';
import { cdn } from '../system/system';
import createDiv from '../common/cElement/createDiv';
import equipItem from '../ajax/equipItem';
import getElementById from '../common/getElement';
import getText from '../common/getText';
import getValue from '../system/getValue';
import insertElement from '../common/insertElement';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import { sendEvent } from '../support/fshGa';
import setInnerHtml from '../dom/setInnerHtml';
import setText from '../dom/setText';
import useItem from '../ajax/useItem';

const THEBACKPACK = 0;
const RESULT = 1;
const SELF = 2;
const INVID = 3;

function restyleBackpack() {
  const bpBack = getElementById('backpack');
  bpBack.className = 'fshBackpack';
  bpBack.removeAttribute('style');
}

function thisInvId(invId, el) { return el.a === invId; }

function backpackRemove(theBackpack, invId) { // jQuery.min
  // remove from srcData
  const i = theBackpack.srcData.findIndex(partial(thisInvId, Number(invId)));
  if (i !== -1) { theBackpack.srcData.splice(i, 1); }
}

function actionResult(ary, data) {
  if (data.r !== 0) {
    ary[SELF].remove();
    return;
  }
  backpackRemove(ary[THEBACKPACK], ary[INVID]);
  ary[SELF].classList.remove('fshSpinner');
  setInnerHtml(`<span class="fastWorn">${ary[RESULT]}</span>`,
    ary[SELF].parentNode);
}

function fastAction(theBackpack, evt, action, result) { // jQuery.min
  sendEvent('profile', `fastAction - ${result}`);
  const { target } = evt;
  const invId = target.parentNode.parentNode.children[0].dataset.inv;
  setText('', target);
  target.className = 'fastAction fshSpinner fshSpinner12';
  action(invId).then(
    partial(actionResult, [theBackpack, result, target, invId]),
  );
}

function evtHdl(theBackpack, evt) {
  if (evt.target.classList.contains('fastWear')) {
    fastAction(theBackpack, evt, equipItem, 'Worn');
  }
  if (evt.target.classList.contains('fastUse')) {
    fastAction(theBackpack, evt, useItem, 'Used');
  }
}

function actionClass(usable) {
  if (usable) { return 'fastUse'; }
  return 'fastWear';
}

function actionText(usable) {
  if (usable) { return 'Use'; }
  return 'Wear';
}

function drawButtons(bp, theSpan) {
  const toUse = theSpan.classList.contains('backpackContextMenuUsable');
  const myDiv = createDiv({
    className: 'fastDiv',
    innerHTML: `<span class="sendLink fastAction ${actionClass(toUse)}">${
      actionText(toUse)}</span>`,
  });
  if (bp.options.checkboxesEnabled) {
    insertElement(myDiv,
      theSpan.parentNode.nextElementSibling.nextElementSibling);
  }
  insertElement(theSpan.parentNode.parentNode, myDiv);
}

function fastWearLinks(bp) {
  const items = querySelectorArray(
    `#backpackTab_${bp.type.toString()
    } .backpackContextMenuEquippable,.backpackContextMenuUsable`,
  );
  items.forEach(partial(drawButtons, bp));
}

function updateSrc(img, gif) {
  const url = `${cdn}ui/misc/${gif}.png`;
  // eslint-disable-next-line no-param-reassign
  if (img.src !== url) { img.src = url; }
}

function doFolder(thisFolder, img) {
  if (img.dataset.folder === thisFolder) {
    updateSrc(img, 'folder_on');
  } else {
    updateSrc(img, 'folder');
  }
}

function fixFolders(theBackpack) {
  querySelectorArray('.backpackFolderImage')
    .forEach(partial(doFolder, String(theBackpack.folderId)));
}

function foundBackpack(backpackContainer, theBackpack) {
  const oldShow = theBackpack._showPage;
  // eslint-disable-next-line no-param-reassign
  theBackpack._showPage = function _showPage(type, page) {
    if (!theBackpack.tabData) { return; }
    fixFolders(theBackpack);
    oldShow.call(theBackpack, type, page);
    fastWearLinks(theBackpack);
  };
  if (getText(getElementById('backpack_current')).length !== 0) {
    add(3, fastWearLinks, [theBackpack]);
  }
  onclick(backpackContainer, partial(evtHdl, theBackpack));
}

function initialiseFastWear() {
  const backpackContainer = getElementById('backpackContainer');
  const theBackpack = $(backpackContainer).data('hcsBackpack');
  if (theBackpack) { foundBackpack(backpackContainer, theBackpack); }
}

export default function injectFastWear() { // jQuery
  if (!getValue('enableQuickDrink')) { return; }
  restyleBackpack();
  initialiseFastWear();
}
