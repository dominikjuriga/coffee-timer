import React from 'react'
import Seo from '../../components/seo'
import Brewer from '../../components/brewer'
import { IRecipe } from '../../components/recipe'

const aeropress = () => {
    return (
        <>
            <Seo title='Aeropress' metaTitle='Brew the best coffee with the use of AeroPress. Get recipes from people such as James Hoffman.' />
            <h2>AeroPress</h2>
            <Brewer recipes={recipes} />
        </>
    )
}

const recipes: { [key: string]: IRecipe } = {
    hoffman: {
        author: {
            fullName: "James Hoffman"
        },
        prerequisites: [
            "AeroPress",
            "freshly ground coffee (finer end of medium for light roast, the darker the coarser)",
        ],
        gramsOfCoffee: 11,
        gramsOfWater: 200,
        waterTemperature: 100,
        steps: [
            {
                description: "Put the filter into the cap. Don't rinse or preheat the brewer (it doesn't make any difference).",
            },
            {
                description: "Put coffee into the brewer.",
            },
            {
                description: "Place on scales and then add water, aiming to wet all the coffee during pouring.",
            },
            {
                description: "Immediately place the piston piece into the top of the brewer, about 1cm in.",
            },
            {
                description: "Wait 2 minutes.",
                timer: { value: 120 }
            },
            {
                description: "Holding the brewer and the plunger, gently swirl the brewer.",
            },
            {
                description: "Wait 30 seconds.",
                timer: { value: 30 },
            },
            {
                description: "Press gently all the way.",
            },
            {
                description: "Drink and enjoy!",
            }
        ],
        notes: "",
        source: {
            title: "https://www.youtube.com/watch?v=j6VlT_jUVPc",
            href: "https://www.youtube.com/watch?v=j6VlT_jUVPc"
        }
    }
}

export default aeropress