export const timeOut = (setMessage) => {
  setTimeout(() => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      type: '',
      text: '',
    }))
  }, 4000)
}

export const handleResponse = async (request) => {
  try {
    const response = await request()
    return response.data
  } catch (error) {
    if (error.response) {
      // Request was made and server responded with error status code
      const errorMessage = error.response.data.error || 'An error occurred.'
      throw new Error(errorMessage)
    } else if (error.request) {
      // Request was made but no response
      throw new Error('No response from the server.')
    } else {
      // Something happened in setting up request
      throw new Error('Error setting up request.')
    }
  }
}