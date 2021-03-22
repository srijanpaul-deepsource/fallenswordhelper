import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-06ff1f7b.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-2fe8df52.js';
import { g as getIsSelf } from './profile-0e974d06.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-8525bb05.js';
import { s as shouldBeArray } from './shouldBeArray-62137a20.js';
import { t as toLowerCase } from './toLowerCase-5dc9e42d.js';
import './currentGuildId-9f8192ef.js';
import './colouredDots-9e7fe1b5.js';
import './batch-a1d0ca14.js';
import './onlineDot-92c3f29d.js';
import './doStatTotal-8cc90e1b.js';
import './executeAll-19d23fbc.js';
import './playerName-752bf5eb.js';
import './intValue-1ce02c09.js';
import './valueText-3865740e.js';
import './interceptSubmit-b08c5c8c.js';
import './formToUrl-2c2f89f4.js';
import './csvSplit-f0a1b444.js';

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
//# sourceMappingURL=profileInjectGuildRel-63ce8d3d.js.map
