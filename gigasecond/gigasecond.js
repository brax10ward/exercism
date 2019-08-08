export const gigasecond = moment => {
  const momentInSeconds = moment.getTime() / 1000;

  return new Date((momentInSeconds + Math.pow(10, 9)) * 1000);
};
