import { V as nowSecs } from './calfSystem-8168cf6d.js';
import { o as outputFormat } from './outputFormat-d0532a29.js';
import { s as splitTime } from './splitTime-ca281ff6.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-8f98ed41.js.map
