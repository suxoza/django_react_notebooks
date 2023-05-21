
import { Outlet } from "react-router-dom"
import { useState } from "react"

import { NoteInterface } from "interfaces/notesInterface"

// @ts-ignore
import NoteService from "services/noteService"

const Notes = () => {
    
    const service = new NoteService()

    
    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="bg-gray-200 h-10 w-full mb-3 flex items-center justify-center text-2xl font-serif">
                    Notes
                </div>
                <Outlet context={[service]}/>
            </div>
        </>
    )
}

export default Notes