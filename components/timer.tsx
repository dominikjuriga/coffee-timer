import React, { useState, useEffect } from 'react'
import s from "../styles/timer.module.css"
import { ITimer } from './recipe'

const Timer = ({ timer }: { timer: ITimer }) => {
    const [timeLeft, setTimeLeft] = useState(timer.value)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        const to = setTimeout(() => {
            if (running && timeLeft > 0) {
                setTimeLeft(timeLeft => timeLeft - 1)
            } else {
                stopTimer()
            }
        }, 1000)
        return () => {
            clearTimeout(to)
        }
    }, [running, timeLeft])

    const startTimer = () => {
        setRunning(true)
    }

    const stopTimer = () => {
        setRunning(false)
    }

    const reset = () => {
        setTimeLeft(timer.value)
    }

    return (
        <>
            <div className={s.progressBar}>
                <div className={s.progress} style={{ width: `${timeLeft / timer.value * 100}%` }}>
                </div>
                <span className={s.count}>{timeLeft} seconds</span>
                {timer.markers && timer.markers.map((markerSeconds) => (
                    <span key={markerSeconds} style={{ left: `${(timer.value - markerSeconds) / (0.01 * timer.value)}%` }} className={s.marker}></span>
                ))}
            </div>
            {timeLeft > 0 && (
                <>
                    {!running && (
                        <button className={s.button} onClick={startTimer}>Run</button>
                    )}
                    {running && (
                        <button className={s.button} onClick={stopTimer}>Stop</button>
                    )}
                </>
            )}

            <button className={s.button} disabled={timeLeft == timer.value} onClick={reset}>Reset</button>

        </>
    )
}

export default Timer