import { V as nowSecs } from './calfSystem-06ff1f7b.js';
import { o as outputFormat } from './outputFormat-4b739d33.js';
import { s as splitTime } from './splitTime-cdea3fd9.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-3a6401a4.js.map
