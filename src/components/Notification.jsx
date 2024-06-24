const Notification = ({ message }) => {
  if (!message || !message.type || !message.text || message.text === '') {
    return null
  }

  return (
    <div className={message.type === 'success' ? 'success' : 'error'}>
      {message.text}
    </div>
  )
}

export default Notification
