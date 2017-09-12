export default (jobId, action = '') =>
  fetch(`/api/v1/user/${jobId}?${action}`, {
    credentials: 'include',
    method: 'PUT',
  })
    .then(res => res.text())
    .catch(err => console.log(err));
