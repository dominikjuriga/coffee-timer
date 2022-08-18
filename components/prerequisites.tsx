import React from 'react'
import s from "../styles/brewers.module.css"

const Prerequisites = ({ prerequisites }: { prerequisites: string[] }) => {
    return (

        <div className={s.prerequisites}>
            <h3>Prerequisites</h3>
            <ul>
                {prerequisites.map((prereq: string) => (
                    <li key={prereq}>{prereq}</li>
                ))}
            </ul>
        </div>
    )
}

export default Prerequisites