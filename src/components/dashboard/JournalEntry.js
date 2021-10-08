import React from 'react'

export const JournalEntry = ({title}) => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
            </div>
        </div>
    )
}
