export const setItem = (lkey: string, lvalue: string) => {
  return localStorage.setItem(lkey, lvalue);
};

export const getItem = (lkey: string) => {
  return localStorage.getItem(lkey);
};

export const removeItem = (lkey: string) => {
  return localStorage.removeItem(lkey);
};

export const clearItem = () => {
  return localStorage.clear();
};

export const setItemWithObject = (lkey: string, lvalue: object) => {
  return localStorage.setItem(lkey, JSON.stringify(lvalue));
};

  