import { V as nowSecs } from './calfSystem-a8d6dd2c.js';
import { o as outputFormat } from './outputFormat-60bc549c.js';
import { s as splitTime } from './splitTime-1570c33e.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-d61b52af.js.map
