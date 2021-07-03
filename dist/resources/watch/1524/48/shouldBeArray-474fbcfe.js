import { c as csvSplit } from './csvSplit-a090804f.js';
import { I as getValue } from './calfSystem-2bd62864.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-474fbcfe.js.map
