export const value = colors => {
  return Number.parseInt(
    `${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`
  );
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
