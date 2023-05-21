
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom"
import NoteService from "services/noteService";
import { NoteInterface } from "interfaces/notesInterface";

const NotesList = () => {

    const [ service ] = useOutletContext<NoteService | any>();
    const [ notes, setNotes ] = useState<NoteInterface | null>(null)

    useEffect(() => {

        service.getNotesList().then((response: NoteInterface[]) => {
            console.log(response)
        })

    }, [])

    return (
        <>
            <div>NoteList</div>
        </>
    )
}

export default NotesList