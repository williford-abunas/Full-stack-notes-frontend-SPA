export const timeOut = (setMessage) => {
  setTimeout(() => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      type: '',
      text: '',
    }))
  }, 4000)
}
