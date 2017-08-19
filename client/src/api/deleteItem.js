export default id =>
  fetch(`/api/v1/job/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .catch(err => console.log(err));
