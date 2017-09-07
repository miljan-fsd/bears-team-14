export default (data = {}) =>
  fetch(`/api/v1/job/create`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(err => console.log(err));
