import Button from './Button.jsx'

const Note = ({ note, toggleImportance }) => {
  const labelImportant = note.important
    ? 'Make Not Important'
    : 'Make Important'
  const labelDelete = 'Delete'
  return (
    <>
      <li>{note.content}</li>
      <Button toggleImportance={toggleImportance}>{labelImportant} </Button>
      <Button>{labelDelete}</Button>
    </>
  )
}

export default Note
