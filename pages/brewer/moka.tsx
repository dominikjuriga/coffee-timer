import React from 'react'
import Seo from '../../components/seo'
import Brewer from '../../components/brewer'
import { IRecipe } from '../../components/recipe'

const moka = () => {
    return (
        <>
            <Seo title='Moka Pot' metaTitle='Brew the best coffee with the use of a Moka Pot. Get recipes from people such as James Hoffman.' />
            <h2>AeroPress</h2>
            <Brewer recipes={recipes} />
        </>
    )
}

const recipes: { [key: string]: IRecipe } = {
    general: {
        author: {
            fullName: "General"
        },
        prerequisites: [
            "Moka Pot",
            "freshly ground coffee (coarse setting)",
        ],
        gramsOfCoffee: 20,
        gramsOfWater: 300,
        waterTemperature: 92,
        steps: [
            {
                description: "Prepare for the brew",
                items: [
                    "bring the water to 92°C in a kettle, or let it boil and cool down for a couple seconds",
                    "place the V60 over a server or cup",
                    "insert the paper filter",
                    "grind 20 grams of coffee"
                ],
            },

        ],
        notes: "",
        source: {
            title: "https://balancecoffee.co.uk/brewing-coffee-with-a-moka-pot-all-of-balance-coffees-top-tips/",
            href: "https://balancecoffee.co.uk/brewing-coffee-with-a-moka-pot-all-of-balance-coffees-top-tips/"
        }
    }
}

export default moka