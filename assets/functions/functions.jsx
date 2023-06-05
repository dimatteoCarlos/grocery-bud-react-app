export const lsGetItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
