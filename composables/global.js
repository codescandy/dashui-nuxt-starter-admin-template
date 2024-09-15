export const useComposables = () => {
  // 👉 IsEmpty
  const isEmpty = (value) => {
    if (value === null || value === undefined || value === "") return true;

    return !!(Array.isArray(value) && value.length === 0);
  };

  // 👉 IsNullOrUndefined
  const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
  };

  // 👉 IsEmptyArray
  const isEmptyArray = (arr) => {
    return Array.isArray(arr) && arr.length === 0;
  };

  // 👉 IsObject
  const isObject = (obj) => obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);

  // 👉 IsToday
  const isToday = (date) => {
    const today = new Date();

    return (
      /* eslint-disable operator-linebreak */
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
      /* eslint-enable */
    );
  };

  const uuid = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };

  return {
    isEmpty,
    isNullOrUndefined,
    isEmptyArray,
    isObject,
    isToday,
    uuid,
  };
};
