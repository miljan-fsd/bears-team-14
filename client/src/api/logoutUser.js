export default () =>
  fetch(`/logout/`, {
    credentials: 'include',
  }).catch(err => console.log(err));
