import { V as nowSecs } from './calfSystem-6b7d7ae6.js';
import { o as outputFormat } from './outputFormat-954dc5c7.js';
import { s as splitTime } from './splitTime-c9874233.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-aec52332.js.map
