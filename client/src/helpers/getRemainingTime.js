export default date => {
  const diff = new Date(date).getTime() - Date.now();
  const days = Math.floor(diff / 86400 / 1000);

  const ending = days > 1 ? 's' : '';

  return days > 0 ? `${days} day${ending}` : `Last day`;
};
