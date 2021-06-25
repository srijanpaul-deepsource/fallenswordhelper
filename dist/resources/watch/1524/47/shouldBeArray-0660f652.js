import { c as csvSplit } from './csvSplit-e3b3e000.js';
import { I as getValue } from './calfSystem-7a121553.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-0660f652.js.map
