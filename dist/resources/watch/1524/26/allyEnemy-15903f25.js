import { T as nowSecs, s as partial, a1 as playerIdUrl, c as calf, bU as secureUrl, bV as tradeUrl, x as jQueryNotPresent, y as getElementById, A as setInnerHtml, f as insertHtmlBeforeEnd, a3 as fallback, B as getText, bN as classHandler, b as createDiv, bS as pCR, o as onclick, a as add } from './calfSystem-c851a12c.js';
import './playerName-c2417987.js';
import './insertElementBefore-47c09359.js';
import './fshOpen-a7890139.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-df881f3c.js';
import './idb-6207cbac.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-a04443c1.js';
import './indexAjaxJson-bfe47429.js';
import './cmdExport-d8c344d2.js';
import { g as getArrayByClassName } from './getArrayByClassName-47744eaa.js';
import './outputFormat-007d893f.js';
import './splitTime-6b91c10c.js';
import { f as formatLastActivity } from './formatLastActivity-e44808d7.js';
import './getProfile-457ccf3c.js';
import { m as myStats } from './myStats-1b03d067.js';

const enemyBuffCheckOn = 'enemy-buff-check-on';
const enemyBuffCheckOff = 'enemy-buff-check-off';
const enemySendMessage = 'enemy-send-message';
const enemyQuickbuff = 'enemy-quickbuff';
const enemySelectedBuff = 'enemy-quick-buff';

const contactClass = [
  [(n) => n < 120, 'fshDodgerBlue', 'fshRed'],
  [(n) => n < 300, 'fshDodgerBlue', 'fshRed'],
  [() => true, 'fshPowderBlue', 'fshPink'],
];

function allyOrEnemy(type, test) {
  if (type) { return test[1]; }
  return test[2];
}

function band(lastLogin, ary) {
  return ary[0](nowSecs - lastLogin);
}

function contactColor(lastLogin, type) {
  const test = contactClass.find(partial(band, lastLogin));
  if (test) { return allyOrEnemy(type, test); }
  return 'fshWhite';
}

function playerName(val, type) {
  return `<a class="player-name tip-static ${
    contactColor(val.last_login, type)}" data-tipped="<b>${val.username
  }</b><br><table><tbody><tr><td>Level:</td><td>${val.level
  }</td></tr><tr><td>Last Activity:</td><td>${
    formatLastActivity(val.last_login)}</td></tr></tbody></table>" href="${
    playerIdUrl}${val.id}">${val.username}</a>`;
}

function doBuffCheck() {
  if (!calf.hideBuffSelected) {
    return `<span class="${enemyBuffCheckOn}"></span>`;
  }
  return '';
}

function doMsgButton() {
  if (!calf.hideGuildInfoMessage) {
    return `<span class="${enemySendMessage} guild-icon left `
      + 'guild-minibox-action tip-static" data-tipped="Send Message"></span>';
  }
  return '';
}

function doBuffButton() {
  if (!calf.hideGuildInfoBuff) {
    return `<span class="${enemyQuickbuff} guild-icon left `
      + 'guild-minibox-action tip-static" data-tipped="Quick Buff"></span>';
  }
  return '';
}

function doSecureButton(val) {
  if (!calf.hideGuildInfoSecureTrade) {
    return '<a class="enemy-secure-trade guild-icon left guild-minibox-action'
      + ` tip-static" href="${secureUrl}${
        val.username}" data-tipped="Secure Trade"></a>`;
  }
  return '';
}

function doTradeButton(val) {
  if (!calf.hideGuildInfoTrade) {
    return '<a class="enemy-trade guild-icon left guild-minibox-action '
      + `tip-static" href="${tradeUrl}${
        val.username}" data-tipped="Send Gold/Items/FSP"></a>`;
  }
  return '';
}

function recent(val) {
  return nowSecs - val.last_login < 1800;
}

function addContact(type, val) {
  return `<li class="player"><div class="player-row">${
    doBuffCheck()
  }${playerName(val, type)
  }</div><div class="guild-minibox-actions">${
    doMsgButton()
  }${doBuffButton()
  }${doSecureButton(val)
  }${doTradeButton(val)
  }</div></li>`;
}

function addContacts(contactList, type) {
  return contactList.filter(recent).map(partial(addContact, type)).join('');
}

const noAlliesTests = [
  (allies, enemies) => allies.length + enemies.length,
  (allies, enemies) => {
    if (!calf.enableAllyOnlineList) { return enemies.length; }
  },
  (allies) => {
    if (!calf.enableEnemyOnlineList) { return allies.length; }
  },
];

function condition(allies, enemies, e) { return e(allies, enemies) === 0; }

function noAllies(allies, enemies) {
  return noAlliesTests.every(partial(condition, allies, enemies));
}

function hazAllies(allies, enemies) {
  let output = '';
  if (calf.enableAllyOnlineList) {
    output += addContacts(allies, true);
  }
  if (calf.enableEnemyOnlineList) {
    output += addContacts(enemies, false);
  }
  const fshContactList = getElementById('fshContactList');
  setInnerHtml('', fshContactList);
  insertHtmlBeforeEnd(fshContactList, output);
}

function injectAllyEnemyList(data) {
  const allies = fallback(data._allies, []);
  const enemies = fallback(data._enemies, []);
  if (noAllies(allies, enemies)) { return; }
  hazAllies(allies, enemies);
}

function resetList() {
  myStats(true).then(injectAllyEnemyList);
}

function toggleBuffSelected(target) {
  target.classList.toggle(enemyBuffCheckOn);
  target.classList.toggle(enemyBuffCheckOff);
}

function msgPlayer(target) {
  window.openQuickMsgDialog(getText(target.parentNode.previousElementSibling
    .lastElementChild));
}

function buffPlayer(target) {
  openQuickBuffByName(getText(target.parentNode
    .previousElementSibling.lastElementChild));
}

function selectedBuff() {
  const buffBalls = getArrayByClassName(enemyBuffCheckOn,
    getElementById('fshContactList'));
  const sendstring = buffBalls.map(
    (el) => getText(el.nextElementSibling),
  );
  openQuickBuffByName(sendstring.join());
}

const classEvt = [
  [enemyBuffCheckOn, toggleBuffSelected],
  [enemyBuffCheckOff, toggleBuffSelected],
  [enemySendMessage, msgPlayer],
  [enemyQuickbuff, buffPlayer],
  [enemySelectedBuff, selectedBuff],
];

function eventHandler(evt) {
  const { target } = evt;
  if (target.id === 'fshResetEnemy') {
    resetList();
    return;
  }
  classHandler(classEvt)(evt);
}

function makeDiv(data) {
  const fshAllyEnemy = createDiv({
    id: 'fshAllyEnemy',
    className: 'minibox',
  });
  let wrapper = '<h3>Allies/Enemies</h3><div class="minibox-content">'
    + '<h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4>'
    + '<div id="minibox-enemy"><ul id="fshContactList"></ul>';
  if (!calf.hideBuffSelected) {
    wrapper += `<ul class="${enemySelectedBuff}">Quick Buff Selected</ul>`;
  }
  wrapper += '</div></div>';
  insertHtmlBeforeEnd(fshAllyEnemy, wrapper);
  insertElementAfterBegin(pCR, fshAllyEnemy);
  onclick(fshAllyEnemy, eventHandler);
  injectAllyEnemyList(data);
}

function nextTick(data) {
  if (data) {
    add(3, makeDiv, [data]);
  }
}

function prepareAllyEnemyList() {
  if (jQueryNotPresent()) { return; }
  myStats(false).then(nextTick);
}

export default prepareAllyEnemyList;
//# sourceMappingURL=allyEnemy-15903f25.js.map
