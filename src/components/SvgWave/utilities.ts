import {randomInteger} from 'beeftools';

export function getPathIndex(max = 1, previous = 0) {
  const current = randomInteger(0, max);

  if (current === previous) {
    return current >= max ? current - 1 : current + 1;
  }

  return current;
}
