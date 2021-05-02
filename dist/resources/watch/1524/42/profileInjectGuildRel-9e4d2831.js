import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-78c09adf.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-f3d3fd4a.js';
import { g as getIsSelf } from './profile-4f8b318d.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-01a56c28.js';
import { s as shouldBeArray } from './shouldBeArray-6a27ed50.js';
import { t as toLowerCase } from './toLowerCase-8d8df902.js';
import './currentGuildId-e33bea0b.js';
import './colouredDots-3dda9ee6.js';
import './batch-f4d17851.js';
import './onlineDot-2d0b6309.js';
import './doStatTotal-b1f4ea7f.js';
import './executeAll-bd0a035e.js';
import './playerName-bb0f99eb.js';
import './intValue-9eb8a210.js';
import './valueText-1ac982fa.js';
import './interceptSubmit-415e0c7c.js';
import './formToUrl-82de8371.js';
import './csvSplit-3bc5f3ee.js';

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
//# sourceMappingURL=profileInjectGuildRel-9e4d2831.js.map
