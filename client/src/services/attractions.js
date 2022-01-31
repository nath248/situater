import api from './apiConfig'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

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
      const token = await getToken();

      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await api.post('/attractions/', attraction, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateAttraction = async (id, attraction) => {
  try {
      const token = await getToken();

      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await api.put(`/attractions/${id}/`, attraction, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteAttraction = async id => {
  try {
      const token = await getToken();

      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await api.delete(`/attractions/${id}/`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}