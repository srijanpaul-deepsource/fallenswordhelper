import { C as getText, g as getElementsByTagName, p as pCC, K as defStatLevel, z as getElementById, bK as defStatVl, X as setValue, J as defCharacterVirtualLevel, I as getValue, aG as runDefault, y as jQueryNotPresent, a as add } from './calfSystem-579856fa.js';
import { c as colouredDots } from './colouredDots-c7bf56d5.js';
import { d as doStatTotal } from './doStatTotal-69ab5402.js';
import { e as executeAll } from './executeAll-779c0127.js';
import { p as playerName$1 } from './playerName-8c7974a3.js';
import { a as asInt } from './asInt-17af841c.js';
import { i as interceptSubmit } from './interceptSubmit-9bdd8d86.js';

let playerName;

function getPlayerName() {
  if (!playerName) {
    playerName = getText(getElementsByTagName('h1', pCC)[0]);
  }
  return playerName;
}

let haveSelf;
let isSelf;

function getIsSelf() {
  if (!haveSelf) {
    isSelf = getPlayerName() === playerName$1();
    haveSelf = true;
  }
  return isSelf;
}

const sameAsLevel = (virtualLevel) => asInt(defStatLevel) === virtualLevel;

function storeVL() {
  // store the VL of the player
  const virtualLevel = Number(getText(getElementById(defStatVl)));
  if (sameAsLevel(virtualLevel)) {
    setValue(defCharacterVirtualLevel, ''); // ?
  } else {
    setValue(defCharacterVirtualLevel, virtualLevel);
  }
}

async function doFastDebuff() {
  const fastDebuff = getValue('fastDebuff');
  const disableDeactivatePrompts = getValue('disableDeactivatePrompts');
  if (fastDebuff || disableDeactivatePrompts) {
    const m = await import('./debuff-0dbff39c.js');
    m.default(fastDebuff, disableDeactivatePrompts);
  }
}

function doAllyEnemy() {
  if (getValue('countAllyEnemy')) { runDefault(import('./profileAllyEnemy-3d3aae01.js')); }
}

function doFastWear() {
  if (getValue('enableQuickDrink')) {
    runDefault(import('./fastWear-e19351fb.js'));
  }
}

function doFixFolders() {
  if (getValue('fixFolderImages')) {
    runDefault(import('./fixFolders-2b0b8008.js'));
  }
}

function doComponents() {
  if (getValue('componentWidgets')) {
    runDefault(import('./components-b6a656fc.js'));
  }
}

function doQuickWearLink() {
  if (getValue('quickWearLink')) { runDefault(import('./quickWearLink-6854d067.js')); }
}

function doSelectAllLink() {
  if (getValue('selectAllLink')) { runDefault(import('./selectAllLink-9f704bc9.js')); }
}

function doNekidBtn() {
  if (getValue('nekidButton')) { runDefault(import('./nekidBtn-a04e1219.js')); }
}

function doAjaxifySections() {
  if (getValue('ajaxifyProfileSections')) {
    runDefault(import('./ajaxifyProfileSections-8da26924.js'));
  }
}

function ifSelf() {
  if (getIsSelf()) {
    // self inventory
    executeAll([
      doFastDebuff,
      doAllyEnemy,
      doFastWear,
      doFixFolders,
      doComponents,
      doQuickWearLink,
      doSelectAllLink,
      storeVL,
      doNekidBtn,
      doAjaxifySections,
    ]);
  }
}

function selfRender(isSelf) {
  return isSelf && getValue('renderSelfBio');
}

function otherRender(isSelf) {
  return !isSelf && getValue('renderOtherBios');
}

function shouldRender() {
  const isSelf = getIsSelf();
  return selfRender(isSelf) || otherRender(isSelf);
}

function doGuildRelationship() {
  if (getValue('showGuildRelationship')) {
    runDefault(import('./profileInjectGuildRel-bcfb0ddd.js'));
  }
}

function doQuickButtons() {
  if (getValue('showQuickButtons')) {
    runDefault(import('./profileInjectQuickButton-4865fc7f.js'));
  }
}

function doUpdateBuffs() {
  if (getValue('injectBuffGuide')) { runDefault(import('./updateBuffs-c2f710d4.js')); }
}

function doUpdateStatistics() {
  if (getValue('statisticsWrap')) { runDefault(import('./updateStatistics-a088103a.js')); }
}

function doHighlightPvPProt() {
  if (getValue('highlightPvpProtection')) {
    runDefault(import('./highlightPvpProtection-f5ceac2c.js'));
  }
}

function doRenderBio() {
  if (shouldRender()) { runDefault(import('./bio-fcd0b1e6.js')); }
}

function doCompressBio() {
  if (getValue('enableBioCompressor')) {
    runDefault(import('./compressBio-4b68cb4d.js'));
  }
}

function doBuffLevels() {
  if (getValue('showBuffLevel')) { runDefault(import('./buffLevelDisplay-5755894a.js')); }
}

function updateDom() {
  executeAll([
    ifSelf,
    doGuildRelationship,
    doQuickButtons,
    doUpdateBuffs,
    doUpdateStatistics,
    doHighlightPvPProt,
    doRenderBio,
    doCompressBio,
    doStatTotal,
    doBuffLevels,
  ]);
  add(3, colouredDots);
}

function allowBack() {
  if (!getIsSelf()) { interceptSubmit(); }
}

function injectProfile() {
  if (jQueryNotPresent()) { return; }
  updateDom();
  allowBack();
}

var profile = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': injectProfile
});

export { getPlayerName as a, getIsSelf as g, profile as p };
//# sourceMappingURL=profile-ade7f3af.js.map
