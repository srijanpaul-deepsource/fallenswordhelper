import { n as numberIsNaN } from './numberIsNaN-484c0124.js';

function theValueIsValid(theValue, min, max) {
  return !numberIsNaN(theValue) && theValue > min && theValue < max;
}

function testRange(aValue, min, max) {
  const theValue = parseInt(aValue, 10);
  if (theValueIsValid(theValue, min, max)) {
    return theValue;
  }
}

export { testRange as t };
//# sourceMappingURL=testRange-596d1063.js.map
