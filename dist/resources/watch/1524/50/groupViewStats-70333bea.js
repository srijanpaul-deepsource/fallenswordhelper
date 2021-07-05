import { z as getElementById, ba as defStatAttack, bb as defStatDefense, bc as defStatArmor, bd as defStatDamage, be as defStatHp, C as getText } from './calfSystem-8168cf6d.js';
import { i as intValue } from './intValue-76dfee09.js';

let attackElement;
let defenseElement;
let armorElement;
let damageElement;
let hpElement;

function getElements(doc) {
  attackElement = getElementById(defStatAttack, doc);
  defenseElement = getElementById(defStatDefense, doc);
  armorElement = getElementById(defStatArmor, doc);
  damageElement = getElementById(defStatDamage, doc);
  hpElement = getElementById(defStatHp, doc);
}

function statAsNumber(el) {
  if (el) {
    return intValue(getText(el));
  }
  return 0;
}

function groupViewStats(doc) {
  getElements(doc);
  return {
    attack: statAsNumber(attackElement),
    attackElement,
    defense: statAsNumber(defenseElement),
    defenseElement,
    armor: statAsNumber(armorElement),
    armorElement,
    damage: statAsNumber(damageElement),
    damageElement,
    hp: statAsNumber(hpElement),
    hpElement,
  };
}

export { groupViewStats as g };
//# sourceMappingURL=groupViewStats-70333bea.js.map
