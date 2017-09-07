export default (username, password) =>
  fetch(`/login/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
    .then(res => res.json())
    .catch(err => console.log(err));
