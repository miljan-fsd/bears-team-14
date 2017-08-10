export default () =>
  fetch('/api/v1/jobs').then(res => res.json()).catch(err => console.log(err));
