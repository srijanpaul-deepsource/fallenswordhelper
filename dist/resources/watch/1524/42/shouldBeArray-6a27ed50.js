import { c as csvSplit } from './csvSplit-3bc5f3ee.js';
import { I as getValue } from './calfSystem-78c09adf.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-6a27ed50.js.map
