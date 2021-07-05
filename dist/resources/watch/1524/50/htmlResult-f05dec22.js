import { w as infoBoxFrom } from './calfSystem-8168cf6d.js';

function htmlResult(data) {
  const info = infoBoxFrom(data);
  if (info.includes('successfully')) {
    return { s: true };
  }
  return { e: { message: info }, s: false };
}

export { htmlResult as h };
//# sourceMappingURL=htmlResult-f05dec22.js.map
