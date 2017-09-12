export default username =>
  fetch(`/api/v1/user/${username}`, {
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => console.log(err));
