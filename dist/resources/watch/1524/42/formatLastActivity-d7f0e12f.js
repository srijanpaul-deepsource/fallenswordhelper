import { V as nowSecs } from './calfSystem-78c09adf.js';
import { o as outputFormat } from './outputFormat-7a7558ec.js';
import { s as splitTime } from './splitTime-f34b83c8.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-d7f0e12f.js.map
