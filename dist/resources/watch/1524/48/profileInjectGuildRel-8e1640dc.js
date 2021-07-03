import { X as setValue, ak as toLowerCase, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-2bd62864.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-f83c534b.js';
import { g as getIsSelf } from './profile-35a8fe4a.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-5771ecd0.js';
import { s as shouldBeArray } from './shouldBeArray-474fbcfe.js';
import './currentGuildId-df5d894a.js';
import './colouredDots-a3348b89.js';
import './batch-2edf8948.js';
import './onlineDot-a366f5a2.js';
import './doStatTotal-51ffad44.js';
import './executeAll-ff401d51.js';
import './playerName-5ee9cf5c.js';
import './asInt-996743a7.js';
import './intValue-9eb5015a.js';
import './valueText-91a223ca.js';
import './interceptSubmit-f4d0267f.js';
import './formToUrl-fa381d4d.js';
import './csvSplit-a090804f.js';

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
//# sourceMappingURL=profileInjectGuildRel-8e1640dc.js.map
