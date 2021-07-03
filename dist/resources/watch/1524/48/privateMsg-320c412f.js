import { a as addLogColoring, g as getLastTable } from './addLogColoring-5807076f.js';
import { a as addLogWidgets } from './addLogWidgets-6009d854.js';
import { d as dataRows } from './dataRows-0d56744f.js';
import { H as getTextTrim, C as getText, ak as toLowerCase, T as sendEvent, I as getValue, al as classPair, o as onclick, S as getUrlParameter, f as insertHtmlBeforeEnd, am as tradeUrl, an as secureUrl } from './calfSystem-2bd62864.js';
import { c as closestTr } from './closestTr-1a0e55da.js';
import { b as buffList } from './buffObj-7ab8e1a0.js';
import { c as csvSplit } from './csvSplit-a090804f.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-88623c19.js';
import './createStyle-9e123717.js';
import './doBuffLinkClick-d68f6f15.js';
import './parseDateAsTimestamp-e3d66fef.js';
import './insertHtmlAfterEnd-0f76853c.js';
import './currentGuildId-df5d894a.js';
import './getMembrList-08b2539b.js';
import './cmdExport-690117da.js';
import './indexAjaxJson-ff53f4ae.js';
import './idb-9e22c871.js';
import './addCommas-5de3e9c4.js';
import './myStats-dc60dbed.js';
import './getProfile-3a6b0ba7.js';
import './playerName-5ee9cf5c.js';
import './closest-3a475e96.js';
import './fshOpen-b549d330.js';

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
//# sourceMappingURL=privateMsg-320c412f.js.map
