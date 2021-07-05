import { X as setValue, ak as toLowerCase, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-8168cf6d.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-14ec3c90.js';
import { g as getIsSelf } from './profile-54f1855e.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-96b3a615.js';
import { s as shouldBeArray } from './shouldBeArray-532d9602.js';
import './currentGuildId-c09348df.js';
import './colouredDots-6f9f4605.js';
import './batch-9678ee7c.js';
import './onlineDot-8bd2ce97.js';
import './doStatTotal-7a6020bd.js';
import './executeAll-30735897.js';
import './playerName-7c57da4d.js';
import './asInt-01acea52.js';
import './intValue-76dfee09.js';
import './valueText-1a262227.js';
import './interceptSubmit-cdb0adf0.js';
import './formToUrl-1b542ce2.js';
import './csvSplit-68cab542.js';

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
//# sourceMappingURL=profileInjectGuildRel-c6051f6b.js.map
