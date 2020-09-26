// Action Types
export const Types = {
  ADD: 'auth/LOGIN',
  REMOVE: 'auth/LOGOUT',
};

// Reducer
const initialState = {
  isLogged: false,
  token: null,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return state;
    case Types.REMOVE:
      return state;
    default:
      return state;
  }
}

// Action Creators
export function login(username, password) {
  return {
    type: Types.LOGIN,
    payload: {
      username,
      password
    },
  }
}

export function logout() {
  return {
    type: Types.LOGOUT,
  }
}