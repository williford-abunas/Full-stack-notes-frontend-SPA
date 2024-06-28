const AddNoteForm = ({ createNote, newNote, handleNoteChange }) => {
  return (
    <form onSubmit={createNote}>
      <input
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Write here..."
      />
      <button type="submit">create</button>
    </form>
  )
}

export default AddNoteForm
