import { a as allthen } from './allthen-7b3f20e7.js';
import { y as jQueryNotPresent, p as pCC, S as clickThis, z as getElementById, aw as cdn, u as indexAjaxData, ac as insertHtmlAfterBegin, o as onclick, I as getValue } from './calfSystem-81938674.js';
import { c as createSpan } from './createSpan-615a174b.js';
import { d as doStatTotal } from './doStatTotal-2ae30ff8.js';
import { g as getArrayByClassName } from './getArrayByClassName-22096cf9.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-bb0f64ac.js';
import './all-be4763d3.js';
import './insertElementBefore-6e80e0ff.js';

function doRefresh() {
  clickThis(getElementById('refresh'));
}

function doCancel(cancelButton) { // jQuery.min
  const itemImage = cancelButton.parentNode.parentNode.children[0].children[0];
  // eslint-disable-next-line no-param-reassign
  cancelButton.outerHTML = `<img src="${
    cdn}ui/misc/spinner.gif" width="14" height="14">`;
  return indexAjaxData({
    cmd: 'auctionhouse',
    subcmd: 'cancel',
    auction_id: /inv_id=(\d+)/.exec(itemImage.dataset.tipped)[1],
  });
}

function cancelAllAH() {
  const cancelButtons = getArrayByClassName('auctionCancel',
    getElementById('resultRows'));
  if (cancelButtons.length === 0) { return; }
  const prm = cancelButtons.map(doCancel);
  allthen(prm, doRefresh);
}

function makeCancelAll() {
  const cancelAll = createSpan({
    className: 'smallLink',
    textContent: 'Cancel All',
  });
  const fill = getElementById('fill').parentNode.parentNode
    .nextElementSibling.children[0];
  fill.classList.add('fshCenter');
  insertHtmlAfterBegin(fill, ']');
  insertElementAfterBegin(fill, cancelAll);
  insertHtmlAfterBegin(fill, '[');
  onclick(cancelAll, cancelAllAH);
}

function autoFill() {
  if (getValue('autoFillMinBidPrice')) {
    // getElementById('auto-fill').checked = true;
    clickThis(getElementById('auto-fill'));
  }
}

function injectAuctionHouse() {
  if (jQueryNotPresent() || !pCC) { return; }
  makeCancelAll();
  autoFill();
  doStatTotal();
  // clickThis(getElementById('sort0'));
}

export default injectAuctionHouse;
//# sourceMappingURL=injectAuctionHouse-c6bf0ef0.js.map
