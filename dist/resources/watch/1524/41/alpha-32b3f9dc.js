import { t as toLowerCase } from './toLowerCase-39a6c297.js';

function alpha(a, b) {
  if (toLowerCase(a) < toLowerCase(b)) { return -1; }
  if (toLowerCase(a) > toLowerCase(b)) { return 1; }
  return 0;
}

export { alpha as a };
//# sourceMappingURL=alpha-32b3f9dc.js.map
