import { X as setValue, aj as toLowerCase, C as getText, I as getValue, f as insertHtmlBeforeEnd, a1 as escapeHtml } from './calfSystem-7a121553.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-76e85238.js';
import { g as getIsSelf } from './profile-cfa5e286.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-9eaa0aad.js';
import { s as shouldBeArray } from './shouldBeArray-0660f652.js';
import './currentGuildId-463e8056.js';
import './colouredDots-26665594.js';
import './batch-aba8846e.js';
import './onlineDot-4e0b96b4.js';
import './doStatTotal-e96505ac.js';
import './executeAll-9ecb4cd8.js';
import './playerName-c1e4c230.js';
import './asInt-c60be2df.js';
import './intValue-e4ce6bb5.js';
import './valueText-74225f5e.js';
import './interceptSubmit-59d68b59.js';
import './formToUrl-c26b8bfa.js';
import './csvSplit-e3b3e000.js';

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
//# sourceMappingURL=profileInjectGuildRel-2998db05.js.map
