
import { noteArgumentsInterface } from "interfaces/notesInterface"

const NoteView = ({ note_id } : noteArgumentsInterface) => {

    return (
        <>
            <div>NoteView {note_id}</div>
        </>
    )
}

export default NoteView