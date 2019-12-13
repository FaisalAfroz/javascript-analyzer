const COLORS =
  ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

function colorCode(wantedColor) {
  return COLORS.indexOf(wantedColor);
}

function decodedValue(colorsArr) {
  const valueStr = colorsArr
    .map(colorCode)
    .join('');

  return Number.parseInt(valueStr);
}


module.exports = { decodedValue };
