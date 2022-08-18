import React, { useState, useEffect } from 'react'
import s from "../styles/timer.module.css"

interface Props {
    time: number
}

const Timer = ({ time }: Props) => {
    const [timeLeft, setTimeLeft] = useState(time)
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
        setTimeLeft(time)
    }

    return (
        <>
            <div className={s.progressBar}>
                <div className={s.progress} style={{ width: `${timeLeft / time * 100}%` }}>
                </div>
                <span className={s.count}>{timeLeft} seconds</span>
                { }
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

            <button className={s.button} disabled={timeLeft == time} onClick={reset}>Reset</button>

        </>
    )
}

export default Timer