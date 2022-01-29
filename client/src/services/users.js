import api from './apiConfig'

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('user/signup/', credentials)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('refresh', resp.data.refresh)
    return resp
  } catch (error) {
    throw error
  }
}

export const logIn = async (credentials) => {
  try {
    const resp = await api.post('user/login/', credentials)
    localStorage.setItem('token', resp.data.access)
    localStorage.setItem('refresh', resp.data.refresh)
    return resp
  } catch (error) {
    throw error
  }
}

export const logOut = async () => {
  try {
    localStorage.removeItem("token")
    localStorage.removeItem("refresh")
    return true
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const refresh = localStorage.getItem('refresh')
  if (refresh) {
    const res = await api.post('api/token/refresh/', { refresh })
    localStorage.setItem("token", res.data.access);
    return res
  }
  return false
}