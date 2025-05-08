export const createToken = (token) => {
  return localStorage.setItem("token", token) || null;
}

export const getToken = () => {
  return localStorage.getItem("token") || null;
}

export const removeToken = () => {
  return localStorage.removeItem("token") || null;
}
