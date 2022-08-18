import React from 'react'
import Link from 'next/link'
import Seo from '../../components/seo'
import Timer from '../../components/timer'
import s from "../../styles/brewers.module.css"

interface Timer {
    value: number
}

interface Step {
    title: string,
    description: string,
    timer?: Timer
}

interface Recipe {
    steps: Step[],
    notes?: string,
    source?: string,
    prerequisites?: string[],
}

const aeropress = () => {
    const recipe: Recipe = {
        prerequisites: [
            "AeroPress",
            "11g of freshly ground coffee (finer end of medium for light roast, the darker the coarser)",
            "200g of boiling water"
        ],
        steps: [
            {
                title: "First step",
                description: "Put the filter into the cap. Don't rinse or preheat the brewer (it doesn't make any difference).",
            },
            {
                title: "Second ",
                description: "Put coffee into the brewer.",
            },
            {
                title: "ajisd ",
                description: "Place on scales and then add water, aiming to wet all the coffee during pouring.",
            },
            {
                title: "ajasdisd ",
                description: "Immediately place the piston piece into the top of the brewer, about 1cm in.",
            },
            {
                title: "Seconasdasdd ",
                description: "Wait 2 minutes.",
                timer: {
                    value: 120
                }
            },
            {
                title: "Second asfsdg",
                description: "Holding the brewer and the plunger, gently swirl the brewer.",
            },
            {
                title: "Second afsdg",
                description: "Wait 30 seconds.",
                timer: { value: 30 },
            },
            {
                title: "Secondasdasfsdg ",
                description: "Press gently all the way.",
            },
            {
                title: "Secondmaidmaisd ",
                description: "Drink and enjoy!",
            }
        ],
        notes: "By James Hoffman",
        source: "https://www.youtube.com/watch?v=j6VlT_jUVPc"
    }

    return (
        <>
            <Seo title='Aeropress' />
            <h2>AeroPress</h2>
            <div className={s.prerequisites}>
                <h3>Prerequisites</h3>
                <ul>
                    {recipe.prerequisites && recipe.prerequisites.map((prereq) => (
                        <li key={prereq}>{prereq}</li>
                    ))}
                </ul>
            </div>
            <div className={s.recipe}>
                {recipe.steps && recipe.steps.map((step, index) => (
                    <div key={step.title} className={s.step} id={`recipe-step-${index + 1}`}>
                        <div className={s.stepContent}>
                            <span className={s.stepCounter}>Step #{index + 1}</span>
                            {/* <h3>{step.title}</h3> */}
                            <p>{step.description}</p>
                            {step.timer && (
                                <Timer time={step.timer.value} />
                            )}
                        </div>
                        {index < recipe.steps.length - 1 &&
                            <a className={s.nextStep} href={`#recipe-step-${index + 1 + 1}`}>Next Step</a>
                        }
                    </ div>
                ))}
                {recipe.notes && (
                    <>
                        <h3>Recipe Notes</h3>
                        <p>{recipe.notes}</p>
                    </>
                )}
                {recipe.source && (
                    <>
                        <h3>Source</h3>
                        <Link href={recipe.source}>{recipe.source}</Link>
                    </>
                )}
            </div>
        </>
    )
}

export default aeropress