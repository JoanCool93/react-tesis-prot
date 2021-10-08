import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from './Sidebar'
// import { NoEntrySelected } from './NoEntrySelected'

export const DashboardScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                {/* <NoEntrySelected /> */}
                <NoteScreen />
            </main>
        </div>
    )
}
