import { V as nowSecs } from './calfSystem-579856fa.js';
import { o as outputFormat } from './outputFormat-3f519c21.js';
import { s as splitTime } from './splitTime-95bb3eda.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-48da63f6.js.map
