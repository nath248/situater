import api from './apiConfig'

export const getAttractions = async () => {
  try {
      const response = await api.get('/attractions/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getAttraction = async id => {
  try {
      const response = await api.get(`/attractions/${id}/`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createAttraction = async attraction => {
  try {
      const response = await api.post('/attractions', attraction)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateAttraction = async (id, attraction) => {
  try {
      const response = await api.put(`/attractions/${id}`, attraction)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteAttraction = async id => {
  try {
      const response = await api.delete(`/attractions/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}