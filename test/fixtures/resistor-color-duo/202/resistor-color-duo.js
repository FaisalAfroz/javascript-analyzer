const COLOR_VALUE = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}


export function decodedValue(colors) {
  const values = colors.map((color) => COLOR_VALUE[color]).join('');

  return Number(values);
}
