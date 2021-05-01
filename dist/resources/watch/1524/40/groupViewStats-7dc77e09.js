import { z as getElementById, b3 as defStatAttack, b4 as defStatDefense, b5 as defStatArmor, b6 as defStatDamage, b7 as defStatHp, C as getText } from './calfSystem-81938674.js';
import { i as intValue } from './intValue-e485889b.js';

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
//# sourceMappingURL=groupViewStats-7dc77e09.js.map
