function intValue(theText) {
  if (!theText) { return 0; }
  return Number(theText.replace(/,/g, ''));
}

export { intValue as i };
//# sourceMappingURL=intValue-ef353ded.js.map