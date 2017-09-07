export default id =>
  fetch(`/api/v1/job/${id}`, {
    credentials: 'include',
    method: 'DELETE',
  })
    .then(res => res.json())
    .catch(err => console.log(err));
