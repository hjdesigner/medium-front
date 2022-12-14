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
export const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}articles/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const putArticleById = async (id, data) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_API}articles/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getAllPubishArticle = async (page = 1) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}articles?status=Publish&p=${page}&l=4`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getAllCategoryArticle = async (category) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}articles?category=${category}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getArticleByLink = async (link) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}articles?link=${link}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const postBookMarks = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}bookmarks`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getBookMark = async (sub) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}bookmarks?sub=${sub}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const deleteBookMark = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API}bookmarks/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
export const getBookMarkByLink = async (link) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}bookmarks?link=${link}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return false
  }
}
