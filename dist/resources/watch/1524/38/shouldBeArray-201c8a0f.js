import { c as csvSplit } from './csvSplit-b0cd76cf.js';
import { I as getValue } from './calfSystem-a8d6dd2c.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-201c8a0f.js.map
