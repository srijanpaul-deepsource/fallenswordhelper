import { c as csvSplit } from './csvSplit-a314c23c.js';
import { I as getValue } from './calfSystem-579856fa.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-3fe06467.js.map
