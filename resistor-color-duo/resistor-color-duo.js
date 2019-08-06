export const value = ([firstColor, secondColor]) => {
  return Number(`${COLORS.indexOf(firstColor)}${COLORS.indexOf(secondColor)}`);
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
