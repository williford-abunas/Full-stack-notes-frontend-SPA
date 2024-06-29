import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

export const getall = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export const create = async (newObject) => {
  const res = await axios.post(baseUrl, newObject)
  return res.data
}

export const update = async (id, newObject) => {
  const res = await axios.put(`${baseUrl}/${id}`, newObject)
  return res.data
}

export const deleteNote = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`)
  return res.data
}
