import axios from 'axios'
import { handleResponse } from './utils.js'
const baseUrl = '/api/notes'


export const getall = async () => {
  return handleResponse(() => axios.get(baseUrl))
}

export const create = async (newObject) => {
  return handleResponse(() => axios.post(baseUrl, newObject))
}

export const update = async (id, newObject) => {
  return handleResponse(() => axios.put(`${baseUrl}/${id}`, newObject))
}

export const deleteNote = async (id) => {
  return handleResponse(() => axios.delete(`${baseUrl}/${id}`))
}
