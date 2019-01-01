import add from '../support/task';
import addStatTotalToMouseover from '../common/addStatTotalToMouseover';
import ajaxifyProfileSections from './ajaxifyProfileSections';
import colouredDots from '../common/colouredDots';
import components from './components/components';
import fallback from '../system/fallback';
import fastDebuff from './debuff';
import getElementsByTagName from '../common/getElementsByTagName';
import getUrlParameter from '../system/getUrlParameter';
import highlightPvpProtection from './highlightPvpProtection';
import injectFastWear from './fastWear';
import jQueryNotPresent from '../common/jQueryNotPresent';
import nekidBtn from './nekidBtn';
import {pCC} from '../support/layout';
import playerId from '../common/playerId';
import playerName from '../common/playerName';
import {profileInjectGuildRel} from './profileInjectGuildRel';
import profileInjectQuickButton from './profileInjectQuickButton';
import profileParseAllyEnemy from './profileAllyEnemy';
import profileRenderBio from './bio/bio';
import quickWearLink from './quickWearLink';
import selectAllLink from './selectAllLink';
import storeVL from './storeVL';
import updateNmv from './updateNmv';
import updateStatistics from './updateStatistics';

function ifSelf(self) {
  if (self) {
    // self inventory
    fastDebuff();
    profileParseAllyEnemy();
    injectFastWear();
    components();
    quickWearLink();
    selectAllLink();
    storeVL();
    nekidBtn();
    ajaxifyProfileSections();
  }
}

function guildRelationship(avyImg, playername, self) {
  // Must be before profileInjectQuickButton
  profileInjectGuildRel(self);
  // It sets up guildId and currentGuildRelationship
  var playerid = fallback(getUrlParameter('player_id'), playerId());
  profileInjectQuickButton(avyImg, playerid, playername);
}

function updateDom(avyImg, playername, self) {
  ifSelf(self);
  guildRelationship(avyImg, playername, self);
  updateNmv();
  updateStatistics();
  highlightPvpProtection();
  profileRenderBio(self);
  addStatTotalToMouseover();
  add(3, colouredDots);
}

export default function injectProfile() { // Legacy
  if (jQueryNotPresent()) {return;}
  var avyImg = document
    .querySelector('#profileLeftColumn img[oldtitle*="\'s Avatar"]');
  if (!avyImg) {return;}
  var playername = getElementsByTagName('h1', pCC)[0].textContent;
  var self = playername === playerName();
  updateDom(avyImg, playername, self);
}
