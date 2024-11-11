export function normalizeColor(string: string) {
  return string
    .toLowerCase()
    .split('')
    .filter((char) => 'abcdefghijklmnopqrstuvwxyz'.includes(char))
    .join('');
}
