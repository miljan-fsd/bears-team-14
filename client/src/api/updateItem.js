export default (id, data = {}) =>
  fetch(`/api/v1/job/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(err => console.log(err));
