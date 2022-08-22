import axios from "axios";

export const postIsAdmin = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}user`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getIsAdmin = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}user?sub=${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getCategories = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}categories`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const postArticle = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}articles`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getAllArticle = async (sub) => {
  try {
    const url = sub !== '' ? `articles?sub=${sub}` : 'articles';
    const response = await axios.get(`${process.env.REACT_APP_API}${url}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const deleteArticle = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API}articles/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
