import { X as setValue, ak as toLowerCase, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-579856fa.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-0a6ed70e.js';
import { g as getIsSelf } from './profile-ade7f3af.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-a19d0875.js';
import { s as shouldBeArray } from './shouldBeArray-3fe06467.js';
import './currentGuildId-060704b6.js';
import './colouredDots-c7bf56d5.js';
import './batch-e040f528.js';
import './onlineDot-4f22fad0.js';
import './doStatTotal-69ab5402.js';
import './executeAll-779c0127.js';
import './playerName-8c7974a3.js';
import './asInt-17af841c.js';
import './intValue-f11572ef.js';
import './valueText-5694c75c.js';
import './interceptSubmit-9bdd8d86.js';
import './formToUrl-72736914.js';
import './csvSplit-a314c23c.js';

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
//# sourceMappingURL=profileInjectGuildRel-bcfb0ddd.js.map
