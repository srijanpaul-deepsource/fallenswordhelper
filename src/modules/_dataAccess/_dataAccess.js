export default function $dataAccess(appFn, fallbackFn, ...args) {
  const appBad = true;
  if (appBad) {
    return fallbackFn(...args);
  }
  return appFn(...args);
}
