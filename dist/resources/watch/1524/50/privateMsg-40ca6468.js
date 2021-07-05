import { a as addLogColoring, g as getLastTable } from './addLogColoring-d62fec4d.js';
import { a as addLogWidgets } from './addLogWidgets-cd309233.js';
import { d as dataRows } from './dataRows-47220ec2.js';
import { H as getTextTrim, C as getText, ak as toLowerCase, T as sendEvent, I as getValue, al as classPair, o as onclick, S as getUrlParameter, f as insertHtmlBeforeEnd, am as tradeUrl, an as secureUrl } from './calfSystem-8168cf6d.js';
import { c as closestTr } from './closestTr-d78cbeea.js';
import { b as buffList } from './buffObj-6a194f9f.js';
import { c as csvSplit } from './csvSplit-68cab542.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-380b0015.js';
import './createStyle-fad5ff5e.js';
import './doBuffLinkClick-903fcb0c.js';
import './parseDateAsTimestamp-a0e15282.js';
import './insertHtmlAfterEnd-4f6ecf31.js';
import './currentGuildId-c09348df.js';
import './getMembrList-fd4387c1.js';
import './cmdExport-695e7790.js';
import './indexAjaxJson-8e794cab.js';
import './idb-d2486026.js';
import './addCommas-b66fde4c.js';
import './myStats-7ee65501.js';
import './getProfile-fa8e82d0.js';
import './playerName-7c57da4d.js';
import './closest-06418423.js';
import './fshOpen-90a0d847.js';

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
//# sourceMappingURL=privateMsg-40ca6468.js.map
