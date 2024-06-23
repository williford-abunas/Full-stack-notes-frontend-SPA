import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    const fetchNotes = async () => {
      const res = await axios.get('http://localhost:3001/notes')
      setNotes(res.data)
    }

    fetchNotes()
  }, [])

  const createNote = async (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    // Send note object to json server
    const response = await axios.post('http://localhost:3001/notes', noteObject)
    setNotes(notes.concat(response.data))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll((prev) => !prev)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={createNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
