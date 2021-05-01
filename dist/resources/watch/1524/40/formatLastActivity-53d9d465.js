import { V as nowSecs } from './calfSystem-81938674.js';
import { o as outputFormat } from './outputFormat-ec830642.js';
import { s as splitTime } from './splitTime-477b58d3.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-53d9d465.js.map
