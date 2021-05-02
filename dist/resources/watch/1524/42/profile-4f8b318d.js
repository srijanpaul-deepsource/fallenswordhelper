import { C as getText, g as getElementsByTagName, p as pCC, K as getElementsByClassName, L as defStatLevel, z as getElementById, bE as defStatVl, X as setValue, J as defCharacterVirtualLevel, I as getValue, aA as runDefault, y as jQueryNotPresent, a as add } from './calfSystem-78c09adf.js';
import { c as colouredDots } from './colouredDots-3dda9ee6.js';
import { d as doStatTotal } from './doStatTotal-b1f4ea7f.js';
import { e as executeAll } from './executeAll-bd0a035e.js';
import { p as playerName$1 } from './playerName-bb0f99eb.js';
import { i as intValue } from './intValue-9eb8a210.js';
import { v as valueText } from './valueText-1ac982fa.js';
import { i as interceptSubmit } from './interceptSubmit-415e0c7c.js';

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

function sameAsLevel(virtualLevel) {
  return intValue(valueText(
    getElementsByClassName(defStatLevel),
  )) === virtualLevel;
}

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
    const m = await import('./debuff-bb7342fd.js');
    m.default(fastDebuff, disableDeactivatePrompts);
  }
}

function doAllyEnemy() {
  if (getValue('countAllyEnemy')) { runDefault(import('./profileAllyEnemy-782bc8ce.js')); }
}

function doFastWear() {
  if (getValue('enableQuickDrink')) {
    runDefault(import('./fastWear-7b4a0be6.js'));
  }
}

function doFixFolders() {
  if (getValue('fixFolderImages')) {
    runDefault(import('./fixFolders-f880d928.js'));
  }
}

function doComponents() {
  if (getValue('componentWidgets')) {
    runDefault(import('./components-1137b103.js'));
  }
}

function doQuickWearLink() {
  if (getValue('quickWearLink')) { runDefault(import('./quickWearLink-e7636173.js')); }
}

function doSelectAllLink() {
  if (getValue('selectAllLink')) { runDefault(import('./selectAllLink-9c6a3b44.js')); }
}

function doNekidBtn() {
  if (getValue('nekidButton')) { runDefault(import('./nekidBtn-a6265327.js')); }
}

function doAjaxifySections() {
  if (getValue('ajaxifyProfileSections')) {
    runDefault(import('./ajaxifyProfileSections-58438c44.js'));
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
    runDefault(import('./profileInjectGuildRel-9e4d2831.js'));
  }
}

function doQuickButtons() {
  if (getValue('showQuickButtons')) {
    runDefault(import('./profileInjectQuickButton-20f744e2.js'));
  }
}

function doUpdateBuffs() {
  if (getValue('injectBuffGuide')) { runDefault(import('./updateBuffs-f9945979.js')); }
}

function doUpdateStatistics() {
  if (getValue('statisticsWrap')) { runDefault(import('./updateStatistics-5dbe43a9.js')); }
}

function doHighlightPvPProt() {
  if (getValue('highlightPvpProtection')) {
    runDefault(import('./highlightPvpProtection-a652b08c.js'));
  }
}

function doRenderBio() {
  if (shouldRender()) { runDefault(import('./bio-5a0453f5.js')); }
}

function doCompressBio() {
  if (getValue('enableBioCompressor')) {
    runDefault(import('./compressBio-e06e65fd.js'));
  }
}

function doBuffLevels() {
  if (getValue('showBuffLevel')) { runDefault(import('./buffLevelDisplay-a1a1975a.js')); }
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
//# sourceMappingURL=profile-4f8b318d.js.map
