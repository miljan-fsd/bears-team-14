import lowercaseArray from './lowercaseArray';

export default (data, keys) => {
  const keysArr = keys
    .replace(/,/g, ' ')
    .split(' ')
    .filter(n => n.length);

  const key = keysArr[0];

  return data.filter(
    item =>
      (item.info &&
        item.info.title &&
        item.info.title.toLowerCase().includes(key)) ||
      (item.tags && lowercaseArray(item.tags).includes(key)) ||
      (item.location && item.location.toLowerCase().includes(key)) ||
      (item.companyName && item.companyName.toLowerCase().includes(key))
  );
};
