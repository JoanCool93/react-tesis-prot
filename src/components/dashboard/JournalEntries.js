import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const opciones = ["Docking Ligandos", "Docking Proteinas"]
    return (
        <div className="journal__entries">
            {
                opciones.map( option => (
                    <JournalEntry title={option} />
                ))
            }
        </div>
    )
}
