import api from './apiConfig'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

export const getLocations = async () => {
  try {
      const response = await api.get('/locations/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getLocation = async id => {
  try {
      const response = await api.get(`/locations/${id}/`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createLocation = async location => {
  try {
      const token = await getToken();

      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await api.post('/locations/', location, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateLocation = async (id, location) => {
  try {
      const token = await getToken();

      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await api.put(`/locations/${id}/`, location, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteLocation = async id => {
  try {
      const token = await getToken();

      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await api.delete(`/locations/${id}/`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}