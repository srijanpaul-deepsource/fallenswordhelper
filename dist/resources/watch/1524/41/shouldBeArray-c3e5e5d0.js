import { c as csvSplit } from './csvSplit-bb2c228e.js';
import { I as getValue } from './calfSystem-6b7d7ae6.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-c3e5e5d0.js.map
