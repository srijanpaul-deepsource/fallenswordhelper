import createDocument from './system/createDocument';
import indexAjaxData from './ajax/indexAjaxData';
import jQueryPresent from './common/jQueryPresent';
import partial from './common/partial';
import {def_table, guildSubcmdUrl} from './support/constants';

var playerBank = {
  headText: 'Bank',
  appLink: true,
  depoPos: 2,
  balPos: 1,
  data: {
    cmd: 'bank',
    subcmd: 'transaction'
  },
  initWithdraw: ''
};
var guildBank = {
  headText: 'Guild Bank',
  appLink: false,
  depoPos: 3,
  balPos: 2,
  data: {
    cmd: 'guild',
    subcmd: 'bank',
    subcmd2: 'transaction'
  },
  initWithdraw: '1'
};
var bankSettings;
var statbarGold = '#pH #statbar-gold';
var statbarGoldTooltip = '#pH #statbar-gold-tooltip-general dd';
var pccB = '#pCC b';
var infoMsg = '#pCC #info-msg';
var withdrawAmount = '#pCC #withdraw_amount';
var depositAmount = '#pCC #deposit_amount';
var disabled = 'disabled';
var inputDepo = '#pCC input[value="Deposit"]';

function doInfoBox(infoBox) { // jQuery
  var target = $(infoMsg);
  if (target.length === 0) {
    $('#pCC').prepend(infoBox.closest(def_table));
  } else {
    target.closest(def_table).replaceWith(infoBox.closest(def_table));
  }
}

function eachGoldValue(doc, index) {
  return $(statbarGoldTooltip, doc).eq(index).text();
}

function doStatBarGold(doc) {
  $(statbarGold).text($(statbarGold, doc).text());
  $(statbarGoldTooltip).text(partial(eachGoldValue, doc));
}

function newStats(doc, balPos, index) {
  return $(pccB, doc).slice(balPos).eq(index).text();
}

function doBoldText(doc, balPos) {
  $(pccB).slice(balPos).text(partial(newStats, doc, balPos));
}

function disableDepo(depoPos) { // jQuery
  if ($(pccB).eq(depoPos).text() === '0') {
    $(inputDepo).prop(disabled, true);
  }
}

function updateDepoAmount(o, doc) { // jQuery
  if (o.data.amount !== '1') {
    $(depositAmount).val($(depositAmount, doc).val());
  } else {
    $(depositAmount).val('1');
  }
}

function replaceValues(doc, infoBox) {
  doInfoBox(infoBox);
  doStatBarGold(doc);
  var o = bankSettings;
  doBoldText(doc, o.balPos);
  disableDepo(o.depoPos);
  updateDepoAmount(o, doc);
  $(withdrawAmount).val(o.initWithdraw);
}

function transResponse(response) { // jQuery
  var doc = createDocument(response);
  var infoBox = $(infoMsg, doc);
  if (infoBox.length === 0) {return;}
  replaceValues(doc, infoBox);
}

function invalidAmount(o, amount) { // jQuery
  return $(pccB).eq(o.depoPos).text() === '0' ||
    !$.isNumeric(amount) || amount < 1;
}

function doAjax(oData) {
  indexAjaxData(oData).then(transResponse);
}

function bankDeposit(e) { // jQuery
  e.preventDefault();
  var o = bankSettings;
  var amount = $(depositAmount).val();
  if (invalidAmount(o, amount)) {return;}
  o.data.mode = 'deposit';
  o.data.amount = amount;
  doAjax(o.data);
}

function bankWithdrawal(e) { // jQuery
  e.preventDefault();
  var o = bankSettings;
  var amount = $(withdrawAmount).val();
  if (!$.isNumeric(amount) || amount < 1) {return;}
  o.data.mode = 'withdraw';
  o.data.amount = amount;
  doAjax(o.data);
}

function linkToGuildBank(o, bank) { // jQuery
  if (o.appLink) {
    bank.eq(0).closest('tr').after('<tr><td colspan="3" align="center">' +
      '<a href="' + guildSubcmdUrl + 'bank">Go to Guild Bank</a>' +
      '</td></tr>');
  }
}

function captureButtons(o, depo, withdraw) { // jQuery
  if ($(pccB).eq(o.depoPos).text() === '0') { // Check Deposits Available
    depo.prop(disabled, true);
  } else {
    depo.on('click', bankDeposit);
  }
  withdraw.on('click', bankWithdrawal);
}

function appLink(o, bank) { // jQuery
  linkToGuildBank(o, bank);
  var depo = $(inputDepo);
  if (depo.length !== 1) {return;}
  var withdraw = $('#pCC input[value="Withdraw"]');
  if (withdraw.length !== 1) {return;}
  captureButtons(o, depo, withdraw);
}

function hasJquery() { // jQuery
  var o = bankSettings;
  var bank = $(pccB);
  if (bank.length !== 0 && bank.eq(0).text() === o.headText) {
    appLink(o, bank);
  }
}

function ajaxifyBank() {
  if (jQueryPresent()) {hasJquery();}
}

export function injectGuildBank() {
  bankSettings = guildBank;
  ajaxifyBank();
}

export function injectBank() {
  bankSettings = playerBank;
  ajaxifyBank();
}