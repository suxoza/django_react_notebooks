import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

// Notes
const NotesIndex = React.lazy(() => import('./pages/notes/index'));
const NotesList = React.lazy(() => import('./pages/notes/list'));
const EditNote = React.lazy(() => import('./pages/notes/edit'));
const ViewNote = React.lazy(() => import('./pages/notes/view'));

function App() {

  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={''}>
          <Routes>
            <Route path="/" element={<NotesIndex />}>
              <Route index element={<NotesList />} />
              <Route path='doc/:note_id/edit' element={<EditNote note_id={0}/>} />
              <Route path='doc/:note_id/view' element={<ViewNote note_id={0}/>} />
            </Route>
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default App