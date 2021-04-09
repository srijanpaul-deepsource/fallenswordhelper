import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-a8d6dd2c.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-7714239a.js';
import { g as getIsSelf } from './profile-2d30e3e2.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-a67f63db.js';
import { s as shouldBeArray } from './shouldBeArray-201c8a0f.js';
import { t as toLowerCase } from './toLowerCase-b0c4634d.js';
import './currentGuildId-100aa801.js';
import './colouredDots-72ef4469.js';
import './batch-f8494b3a.js';
import './onlineDot-e36f81bc.js';
import './doStatTotal-ec473896.js';
import './executeAll-13b3b7cf.js';
import './playerName-48998b79.js';
import './intValue-ba9b9e5a.js';
import './valueText-8ee8140e.js';
import './interceptSubmit-b6bcec0e.js';
import './formToUrl-438642ae.js';
import './csvSplit-b0cd76cf.js';

const myGuildMsgs = [
  ['self', 'fshGreen', 'guildSelfMessage'],
  ['friendly', 'fshOliveDrab', 'guildFrndMessage'],
  ['old', 'fshDarkCyan', 'guildPastMessage'],
  ['enemy', 'fshRed', 'guildEnmyMessage'],
];
const typeMapping = [
  ['guildFrnd', 'friendly'],
  ['guildPast', 'old'],
  ['guildEnmy', 'enemy'],
];

function guildAry(pref) {
  const val = shouldBeArray(pref);
  if (val) {
    return val.map(replaceDoubleSpace).map(toLowerCase);
  }
  return [];
}

function externalRelationship(_txt) {
  const scenario = typeMapping.map(([pref, label]) => [guildAry(pref), label]);
  const txt = replaceDoubleSpace(toLowerCase(_txt));
  const relObj = scenario.find(([guilds]) => guilds.includes(txt));
  if (relObj) { return relObj[1]; }
}

function guildRelationship(aLink) {
  if (getIsOwnGuild()) {
    setValue('guildSelf', getText(aLink));
    return 'self';
  }
  return externalRelationship(getText(aLink));
}

function setMsg(aLink, currentGuildRelationship) {
  const [, color, pref] = myGuildMsgs.find(
    ([rel]) => rel === currentGuildRelationship,
  );
  aLink.parentNode.classList.add(color);
  const msg = getValue(pref);
  if (msg && msg.length > 0) {
    insertHtmlBeforeEnd(aLink.parentNode, `<br>${escapeHtml(msg)}`);
  }
}

function foundGuildLink(aLink) {
  const currentGuildRelationship = guildRelationship(aLink);
  if (currentGuildRelationship) {
    setMsg(aLink, currentGuildRelationship);
  }
}

function profileInjectGuildRel() {
  const aLink = getGuildALink();
  if (aLink) {
    foundGuildLink(aLink);
  } else if (getIsSelf()) {
    setValue('guildSelf', '');
  }
}

export default profileInjectGuildRel;
//# sourceMappingURL=profileInjectGuildRel-b0d8352a.js.map
