import { n as numberIsNaN } from './numberIsNaN-68797c81.js';

function formatDateTime(dateParts) {
  return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]} ${
    dateParts[3]}:${dateParts[4]}:${dateParts[5]}`;
}

function isDate(aDate) {
  return Object.prototype.toString.call(aDate) === '[object Date]'
    && !numberIsNaN(aDate.getTime());
}

export { formatDateTime as f, isDate as i };
//# sourceMappingURL=isDate-5fc0e8bf.js.map
