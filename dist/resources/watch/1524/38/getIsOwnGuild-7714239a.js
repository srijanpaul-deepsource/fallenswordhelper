import { c as currentGuildId } from './currentGuildId-100aa801.js';
import { E as querySelector, bv as guildViewUrl, bz as guildRE } from './calfSystem-a8d6dd2c.js';

let haveGuildALink;
let guildALink;

function getGuildALink() {
  if (!haveGuildALink) {
    guildALink = querySelector(`#pCC a[href^="${guildViewUrl}"]`);
    haveGuildALink = true;
  }
  return guildALink;
}

let haveIsOwnGuild;
let isOwnGuild;

function findGuildId() {
  const guildALink = getGuildALink();
  if (guildALink) {
    const matches = guildRE.exec(guildALink.href);
    if (matches) { return Number(matches[1]); }
  }
}

function getIsOwnGuild() {
  if (!haveIsOwnGuild) {
    isOwnGuild = findGuildId() === currentGuildId();
    haveIsOwnGuild = true;
  }
  return isOwnGuild;
}

export { getIsOwnGuild as a, getGuildALink as g };
//# sourceMappingURL=getIsOwnGuild-7714239a.js.map
