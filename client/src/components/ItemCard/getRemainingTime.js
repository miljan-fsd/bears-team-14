export default date => {
  const diff = new Date(date).getTime() - Date.now();
  const days = Math.floor(diff / 86400 / 1000);

  return `${days} days`;
};
