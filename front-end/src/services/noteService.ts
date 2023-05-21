

import { NoteInterface } from "interfaces/notesInterface";
import axiosInstance from "config/axiosConfig"

export default class NoteService {

    public async getNotesList() : Promise<NoteInterface[]> {
        return await axiosInstance.get('/')
    } 
}

