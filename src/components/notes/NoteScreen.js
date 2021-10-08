import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes_main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input className="notes__title-input" type="text" placeholder="Title" autoComplete="off" />
                <textarea className="notes__textarea" placeholder="Entry content" ></textarea>

                <div className="notes__image">
                    <img src="https://www.alvientooo.com/wp-content/uploads/2019/03/Lamprea_arbo_lamprea_en_galicia_blog_gastronomia-36-1.jpeg" alt="Imagen" />
                </div>
            </div>
        </div>
    )
}
