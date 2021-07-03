import { V as nowSecs } from './calfSystem-2bd62864.js';
import { o as outputFormat } from './outputFormat-3d4a3449.js';
import { s as splitTime } from './splitTime-fa1e86d2.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-18dd9de3.js.map
