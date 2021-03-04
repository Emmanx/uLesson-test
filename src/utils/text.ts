export const truncate = (input = '', len = 0): string => {
  if (input.length > len) return `${input.substring(0, len)}...`;
  return input;
};
