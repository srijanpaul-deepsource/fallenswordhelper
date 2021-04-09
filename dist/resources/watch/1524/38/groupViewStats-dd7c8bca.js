import { z as getElementById, aZ as defStatAttack, a_ as defStatDefense, a$ as defStatArmor, b0 as defStatDamage, b1 as defStatHp, C as getText } from './calfSystem-a8d6dd2c.js';
import { i as intValue } from './intValue-ba9b9e5a.js';

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
//# sourceMappingURL=groupViewStats-dd7c8bca.js.map
