import Button from './Button.jsx'

const Note = ({ note, toggleImportance, handleDelete }) => {
  const labelImportant = note.important
    ? 'Make Not Important'
    : 'Make Important'
  const labelDelete = 'Delete'

  return (
    <>
      <li>{note.content}</li>
      <Button onClick={toggleImportance}>{labelImportant} </Button>
      <Button onClick={handleDelete}>{labelDelete}</Button>
    </>
  )
}

export default Note
