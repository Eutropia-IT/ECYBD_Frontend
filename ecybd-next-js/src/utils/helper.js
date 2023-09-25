export const sortArrayByKey = (array, key) => {
  return array.sort((a, b) => a[key] - b[key]);
};
