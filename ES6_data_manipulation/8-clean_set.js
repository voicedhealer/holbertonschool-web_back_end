export default function cleanSet(set, startString) {
  if (!set || !startString || startString.length === 0) return '';
  return [...set]
    .filter((val) => val && val.startsWith(startString))
    .map((val) => val.slice(startString.length))
    .join('-');
}
