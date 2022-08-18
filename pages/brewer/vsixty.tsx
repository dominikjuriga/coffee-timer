import React from 'react'
import Seo from '../../components/seo'
import Brewer from '../../components/brewer'
import { IRecipe } from '../../components/recipe'

const v60 = () => {
    return (
        <>
            <Seo title='V60' metaTitle='Brew the best coffee with the use of V60. Get recipes from people such as James Hoffman.' />
            <h2>V60</h2>
            <Brewer recipes={recipes} />
        </>
    )
}

const recipes: { [key: string]: IRecipe } = {
    tetsu: {
        author: {
            fullName: "Testu Kasuya"
        },
        prerequisites: [
            "V60",
            "freshly ground coffee (coarse setting)",
            "paper filter for V60 ",
            "scale with accuracy of .1 grams"
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
            {
                description: "Rinse the paper filter with hot water and add the coffee to the V60. Then even the grounds."
            },
            {
                description: "Place the server with the V60 on a scale and TARE the scale.",
                items: [
                    "Each pour should take approximately 10 seconds",
                    "The pours should start from the center, then into a wide circle and finish in the centre point."
                ]
            },
            {
                description: "Pour 60 grams of water in 10 seconds, then wait 35 seconds.",
                timer: {
                    value: 45,
                    markers: [10]
                }
            },
            {
                description: "Pour 60 grams of water in 10 seconds, then wait 35 seconds.",
                timer: {
                    value: 45,
                    markers: [10]
                }
            },
            {
                description: "Pour 60 grams of water in 10 seconds, then wait 35 seconds.",
                timer: {
                    value: 45,
                    markers: [10]
                }
            },
            {
                description: "Pour 60 grams of water in 10 seconds, then wait 35 seconds.",
                timer: {
                    value: 45,
                    markers: [10]
                }
            },
            {
                description: "Pour 60 grams of water in 10 seconds, then wait 35 seconds.",
                timer: {
                    value: 45,
                    markers: [10]
                }
            },
            {
                description: "At 3:30 you should have 300 grams of water. Remove the V60 from the server. Serve and enjoy the coffee!"
            }
        ],
        notes: "",
        source: {
            title: "https://longshortlondon.com/4-6-method-brewers-cup-champ-tetsu-kasuya/",
            href: "https://longshortlondon.com/4-6-method-brewers-cup-champ-tetsu-kasuya/"
        }
    }
}

export default v60