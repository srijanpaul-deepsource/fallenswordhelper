import { V as nowSecs } from './calfSystem-7a121553.js';
import { o as outputFormat } from './outputFormat-aad1c74c.js';
import { s as splitTime } from './splitTime-77e1db3a.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-9acd1ad2.js.map
