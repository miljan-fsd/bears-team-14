export default (username, password) =>
  fetch(`/login/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
    .then(res => {
      if (res.ok) return res.json();
      return { error: { status: res.status, text: res.statusText } };
    })
    .catch(err => console.log(err));
