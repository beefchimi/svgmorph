export function randomInt(min = 0, max = 1) {
  const topMin = Math.ceil(min);
  const bottomMax = Math.floor(max);
  return Math.floor(Math.random() * (bottomMax - topMin + 1) + topMin);
}
