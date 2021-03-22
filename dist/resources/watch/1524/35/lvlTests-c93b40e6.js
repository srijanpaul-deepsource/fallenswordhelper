import { n as numberIsNaN } from './numberIsNaN-1e8b4508.js';
import { s as partial } from './calfSystem-06ff1f7b.js';

const playerLvlTest = [
  (level, min) => !min,
  (level, min, max) => !max,
  (level, min, max) => numberIsNaN(min) && numberIsNaN(max),
  (level, min, max) => numberIsNaN(min) && level <= max,
  (level, min, max) => min <= level && numberIsNaN(max),
  (level, min, max) => min <= level && level <= max,
];

function condition(level, min, max, fn) { return fn(level, min, max); }

function lvlTest(ary, level, min, max) {
  return ary.some(partial(condition, level, min, max));
}

export { lvlTest as l, playerLvlTest as p };
//# sourceMappingURL=lvlTests-c93b40e6.js.map
