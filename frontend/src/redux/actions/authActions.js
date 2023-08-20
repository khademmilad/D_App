export const loginSuccess = (csrfToken) => ({
    type: 'LOGIN_SUCCESS',
    payload: { csrfToken },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });