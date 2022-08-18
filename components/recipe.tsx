import React from 'react'
import s from "../styles/brewers.module.css"
import Timer from './timer'

const Recipe = ({ recipe }: Props) => {
    return (
        <div className={s.recipe}>
            {recipe.steps && recipe.steps.map((step, index) => (
                <div key={`recipe-ste-${index}`} className={s.step} id={`recipe-step-${index + 1}`}>
                    <div className={s.stepContent}>
                        <span className={s.stepCounter}>Step #{index + 1}</span>
                        <p>{step.description}</p>
                        {step.items && (
                            <ul>
                                {step.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {step.timer && (
                            <Timer timer={{ value: step.timer.value, markers: step.timer.markers }} />
                        )}
                    </div>
                    {index < recipe.steps.length - 1 &&
                        <a className={s.nextStep} href={`#recipe-step-${index + 1 + 1}`}>Next Step</a>
                    }
                </ div>
            ))}
        </div>
    )
}

interface Props {
    [key: string]: IRecipe
}

export interface ITimer {
    value: number,
    markers?: number[]
}

export interface IStep {
    items?: string[],
    description: string,
    timer?: ITimer
}

export interface IRecipe {
    author: {
        fullName: string,
    },
    steps: IStep[],
    notes?: string,
    source: {
        title: string,
        href?: string
    },
    prerequisites: string[],
    gramsOfCoffee: number,
    gramsOfWater: number,
    waterTemperature: number,
}

export default Recipe