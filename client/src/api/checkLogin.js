export default () =>
  fetch('/test-login', { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.log(err));
