import api from './apiConfig'

export const getLocations = async () => {
  try {
      const response = await api.get('/locations')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getLocation = async id => {
  try {
      const response = await api.get(`/locations/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createLocation = async location => {
  try {
      const response = await api.post('/locations', location)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateLocation = async (id, location) => {
  try {
      const response = await api.put(`/locations/${id}`, location)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteLocation = async id => {
  try {
      const response = await api.delete(`/locations/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}