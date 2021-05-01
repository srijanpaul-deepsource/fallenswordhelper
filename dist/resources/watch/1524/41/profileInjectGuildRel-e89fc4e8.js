import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-6b7d7ae6.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-7dfab271.js';
import { g as getIsSelf } from './profile-33e5ae74.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-f140ae94.js';
import { s as shouldBeArray } from './shouldBeArray-c3e5e5d0.js';
import { t as toLowerCase } from './toLowerCase-39a6c297.js';
import './currentGuildId-28c6d524.js';
import './colouredDots-13ac40be.js';
import './batch-29641c37.js';
import './onlineDot-8d3e8c50.js';
import './doStatTotal-3ae9979a.js';
import './executeAll-98e1edc5.js';
import './playerName-87d5a31b.js';
import './intValue-af3aed3f.js';
import './valueText-bb32e8fa.js';
import './interceptSubmit-b4b8e480.js';
import './formToUrl-aa363b07.js';
import './csvSplit-bb2c228e.js';

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
//# sourceMappingURL=profileInjectGuildRel-e89fc4e8.js.map
