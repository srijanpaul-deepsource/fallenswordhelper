import { c as csvSplit } from './csvSplit-f0a1b444.js';
import { I as getValue } from './calfSystem-06ff1f7b.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-62137a20.js.map
