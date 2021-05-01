function pair(acc, curr) {
  acc[curr.name] = Number(curr.level);
  return acc;
}

function reduceBuffArray(buffAry) {
  return buffAry.reduce(pair, {});
}

export { reduceBuffArray as r };
//# sourceMappingURL=reduceBuffArray-33e6984f.js.map
