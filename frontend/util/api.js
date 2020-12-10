export const signup = (user) => {
  return new Promise((resolve, reject) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user }),
    })
      .then(response => {
        if (response.ok) {
          return resolve(response.clone().json())
        }
        response.json().then(data => {
          return reject(data)
        })
      })
  })
}

export const fetchGroups = () => {
  return new Promise((resolve, reject) => {
    return fetch('/api/groups', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          return resolve(response.clone().json())
        }
        response.json().then(data => {
          return reject(data)
        })
      })
  })
}

export const fetchUsers = (group_id) => {
  return new Promise((resolve, reject) => {
    return fetch(`/api/groups/${group_id}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          return resolve(response.clone().json())
        }
        response.json().then(data => {
          return reject(data)
        })
      })
  })
}

export const createGroup = (group) => {
  return new Promise((resolve, reject) => {
    return fetch('/api/groups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ group: group }),
    })
      .then(response => {
        if (response.ok) {
          return resolve(response.clone().json())
        }
        response.json().then(data => {
          return reject(data)
        })
      })
  })
}

export const login = (user) => {
  return new Promise((resolve, reject) => {
    return fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user }),
    })
      .then(response => {
        if (response.ok) {
          return resolve(response.clone().json())
        }
        response.json().then(data => {
          return reject(data)
        })
      })
  })
}

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
