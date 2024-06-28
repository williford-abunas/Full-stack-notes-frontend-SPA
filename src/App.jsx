import { useEffect, useState } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import { getall, create, update, deleteNote } from './services/notes.js'
import { timeOut } from './services/utils.js'
import './index.css'
import Button from './components/Button.jsx'
import AddNoteForm from './components/AddNoteForm.jsx'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [message, setMessage] = useState({})

  useEffect(() => {
    console.log('effect')
    const fetchNotes = async () => {
      const data = await getall()
      console.log(data)
      setNotes(data)
    }

    fetchNotes()
  }, [])

  const createNote = async (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    try {
      // Send note object to json server
      const data = await create(noteObject)
      setNotes(notes.concat(data))
      setNewNote('')
      setMessage({ type: 'success', text: `Added ${data.content}...` })
      timeOut(setMessage)
    } catch (error) {
      setMessage({ type: 'error', text: 'Error creating note...' })
      timeOut(setMessage)
      console.log('error', error)
    }
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  const toggleImportance = async (id) => {
    try {
      const note = notes.find((n) => n.id === id)
      const changedNote = { ...note, important: !note.important }

      const data = await update(id, changedNote)
      setNotes(notes.map((note) => (note.id !== id ? note : data)))
      setMessage({
        type: 'success',
        text:
          changedNote.important === true
            ? `Marked ${data.content} as important`
            : `Marked ${data.content} as NOT important`,
      })
      timeOut(setMessage)
    } catch (error) {
      setMessage({
        type: 'error',
        text: `Failed to mark note as important`,
      })
      console.log('error', error)
      timeOut(setMessage)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteNote(id)
      setNotes(notes.filter((note) => note.id !== id))
      setMessage({
        type: 'success',
        text: `Deleted note id:${id}`,
      })
      timeOut(setMessage)
    } catch (error) {
      console.log('error', error)
      setMessage({
        type: 'error',
        text: `Failed to delete note`,
      })
      timeOut(setMessage)
    }
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={message} />
      <div>
        <Button onClick={() => setShowAll((prev) => !prev)}>
          show {showAll ? 'important' : 'all'}
        </Button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
            handleDelete={() => handleDelete(note.id)}
          />
        ))}
      </ul>
      <AddNoteForm
        createNote={createNote}
        newNote={newNote}
        handleNoteChange={handleNoteChange}
      />
    </div>
  )
}

export default App
