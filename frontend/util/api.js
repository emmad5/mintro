export const signup = user => (
  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: user }),
    }).then((response) => { return response.json(); }
  )
);

export const login = user => (
  fetch('/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: user }),
  }).then((response) => { return response.json(); })
);

export const logout = () => (
  fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
);
export const updateUser = user => (
  fetch(`/api/users/${user.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: user }),
  }).then((response) => { return response.json(); }
  )
);
