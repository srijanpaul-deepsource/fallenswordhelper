import { a as addLogColoring, g as getLastTable } from './addLogColoring-ae00fb2b.js';
import { a as addLogWidgets } from './addLogWidgets-cc52a9ba.js';
import { d as dataRows } from './dataRows-36e10345.js';
import { H as getTextTrim, C as getText, ak as toLowerCase, T as sendEvent, I as getValue, al as classPair, o as onclick, S as getUrlParameter, f as insertHtmlBeforeEnd, am as tradeUrl, an as secureUrl } from './calfSystem-579856fa.js';
import { c as closestTr } from './closestTr-f3bfdd2c.js';
import { b as buffList } from './buffObj-01088e9a.js';
import { c as csvSplit } from './csvSplit-a314c23c.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-aa571bea.js';
import './createStyle-6526754d.js';
import './doBuffLinkClick-01dfdaf9.js';
import './parseDateAsTimestamp-a7642d71.js';
import './insertHtmlAfterEnd-a16caebb.js';
import './currentGuildId-060704b6.js';
import './getMembrList-b2b72a9a.js';
import './cmdExport-2605a827.js';
import './indexAjaxJson-52989594.js';
import './idb-597cc5e6.js';
import './addCommas-1f67a5b9.js';
import './myStats-05a874ab.js';
import './getProfile-cfcd46ce.js';
import './playerName-8c7974a3.js';
import './closest-0e1c7a1d.js';
import './fshOpen-c207a52b.js';

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
//# sourceMappingURL=privateMsg-4d818a81.js.map
