import {createSpan} from './common/cElement';
import {getElementById} from './common/getElement';
import getElementsByClassName from './common/getElementsByClassName';
import getValue from './system/getValue';
import {imageServer} from './system/system';
import insertElementAfterBegin from './common/insertElementAfterBegin';
import insertHtmlAfterBegin from './common/insertHtmlAfterBegin';
import jQueryNotPresent from './common/jQueryNotPresent';
import on from './common/on';
import {pCC} from './support/layout';
import perfFilter from './common/perfFilter';
import retryAjax from './ajax/retryAjax';
import when from './common/when';

function doRefresh() {
  getElementById('refresh').click();
}

function cancelAllAH() { // jQuery
  var cancelButtons = getElementsByClassName('auctionCancel',
    getElementById('resultRows'));
  if (cancelButtons.length === 0) {return;}
  var prm = [];
  for (var i = cancelButtons.length - 1; i >= 0; i -= 1) {
    var cancelButton = cancelButtons[i];
    var itemImage = cancelButton.parentNode.parentNode.children[0].children[0];
    cancelButton.outerHTML = '<img src="' + imageServer +
      '/skin/loading.gif" width="14" height="14">';
    prm.push(
      retryAjax({
        url: 'index.php?no_mobile=1&cmd=auctionhouse&subcmd=cancel',
        data: {auction_id: /inv_id=(\d+)/.exec(itemImage.dataset.tipped)[1]}
      })
    );
  }
  when(prm, doRefresh);
}

function makeCancelAll() {
  var cancelAll = createSpan({
    className: 'smallLink',
    textContent: 'Cancel All'
  });
  var fill = getElementById('fill').parentNode.parentNode
    .nextElementSibling.children[0];
  fill.classList.add('fshCenter');
  insertHtmlAfterBegin(fill, ']');
  insertElementAfterBegin(fill, cancelAll);
  insertHtmlAfterBegin(fill, '[');
  on(cancelAll, 'click', cancelAllAH);
}

function autoFill() {
  if (getValue('autoFillMinBidPrice')) {
    getElementById('auto-fill').checked = true;
  }
}

export function injectAuctionHouse() {
  if (jQueryNotPresent() || !pCC) {return;}
  makeCancelAll();
  autoFill();
  getElementById('sort0').click();
}

export function quickCreate() {
  perfFilter('auction');
}
