import { c as csvSplit } from './csvSplit-e7651da4.js';
import { I as getValue } from './calfSystem-81938674.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-d23137c6.js.map
