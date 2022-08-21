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
