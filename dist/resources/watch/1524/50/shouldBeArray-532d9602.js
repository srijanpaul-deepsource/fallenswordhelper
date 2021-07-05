import { c as csvSplit } from './csvSplit-68cab542.js';
import { I as getValue } from './calfSystem-8168cf6d.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-532d9602.js.map
