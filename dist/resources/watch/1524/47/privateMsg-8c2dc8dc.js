import { a as addLogColoring, g as getLastTable } from './addLogColoring-a0fa264e.js';
import { a as addLogWidgets } from './addLogWidgets-12131e85.js';
import { d as dataRows } from './dataRows-cc7742ce.js';
import { H as getTextTrim, C as getText, aj as toLowerCase, T as sendEvent, I as getValue, ak as classPair, o as onclick, S as getUrlParameter, f as insertHtmlBeforeEnd, al as tradeUrl, am as secureUrl } from './calfSystem-7a121553.js';
import { c as closestTr } from './closestTr-0db8644e.js';
import { b as buffList } from './buffObj-68975e43.js';
import { c as csvSplit } from './csvSplit-e3b3e000.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-e7c218f3.js';
import './createStyle-f5a906f6.js';
import './doBuffLinkClick-33351376.js';
import './parseDateAsTimestamp-32446cb9.js';
import './insertHtmlAfterEnd-0c908a83.js';
import './currentGuildId-463e8056.js';
import './getMembrList-eb128386.js';
import './cmdExport-3ffe3d8a.js';
import './indexAjaxJson-0d19fdb7.js';
import './idb-a4bd5e0c.js';
import './addCommas-27b35f1c.js';
import './myStats-d5bc9765.js';
import './getProfile-ca87cf7e.js';
import './playerName-c1e4c230.js';
import './closest-4542e515.js';
import './fshOpen-a2455e89.js';

var css = ".pmBuffBtn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-family : inherit;\n  margin: 0;\n  padding: 0;\n  text-decoration: underline;\n  user-select: text;\n}\n";
var modules_6100dd33 = {};

function getMsg(target) {
  return getTextTrim(closestTr(target).children[3].childNodes[0]);
}

function getPlayerName(target) {
  return getText(closestTr(target).children[2].children[0]);
}

const thisNick = (nick, buffObj) => csvSplit(buffObj.nicks).includes(toLowerCase(nick));

function getBuffId(nick) {
  const thisBuff = buffList.find((buffObj) => thisNick(nick, buffObj));
  if (thisBuff) { return thisBuff.id; }
}

const formatIds = (matched) => csvSplit(matched).map(getBuffId).filter((b) => b).join(';');

function getIds(target) {
  const buffs = /`~(.*)~`/.exec(getMsg(target));
  if (buffs) {
    return formatIds(buffs[1]);
  }
  return '';
}

function parseBuffs(e) {
  const { target } = e;
  openQuickBuffByName(getPlayerName(target), getIds(target));
  sendEvent('privateMsg', 'Buff');
}

function formatTip(target) {
  const msg = getMsg(target);
  if (msg.length > 140) {
    return `${msg.substring(0, 140)}...`;
  }
  return msg;
}

function parseReply(e) {
  if (!getValue('enableChatParsing')) { return; }
  const { target } = e;
  window.openQuickMsgDialog(getPlayerName(target), '', formatTip(target));
  e.preventDefault();
  sendEvent('privateMsg', 'parseReply');
}

const classEvents = [
  ['pmBuffBtn', parseBuffs],
  ['fa-reply', parseReply],
  ['pmTradeUrl', () => sendEvent('privateMsg', 'Trade')],
  ['pmSecureUrl', () => sendEvent('privateMsg', 'ST')],
  ['pmAttackUrl', () => sendEvent('privateMsg', 'Attack')],
  ['pmIgnoreUrl', () => sendEvent('privateMsg', 'Ignore')],
];

function intercept(e) {
  const { target } = e;
  const hdl = classEvents.find((pair) => classPair(target, pair));
  if (hdl) { hdl[1](e); }
}

function interceptLinks(logTable) {
  onclick(logTable, intercept);
}

const getMsgCell = (tr) => [getTextTrim(tr.children[2]), tr.children[3]];

function addMsgButtons(logTable) {
  if (!getValue('privateMsgButtons')) { return; }
  const msgCells = dataRows(logTable.rows, 6, 0).map(getMsgCell);
  msgCells.forEach(([sender, msgCell]) => {
    insertHtmlBeforeEnd(msgCell, '&nbsp;&nbsp;[ '
      + `<button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${
        tradeUrl + sender}">Send</a> | <a class="pmSecureUrl" href="${
        secureUrl + sender}">Trade</a> ]`);
  });
}

function addMsgWidgets() {
  const logTable = getLastTable();
  if (logTable) {
    addMsgButtons(logTable);
    addLogWidgets(1);
    interceptLinks(logTable);
  }
}

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
    addMsgWidgets();
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-8c2dc8dc.js.map
