export const timeOut = (setMessage) => {
  setTimeout(() => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      type: '',
      text: '',
    }))
  }, 3000)
}
