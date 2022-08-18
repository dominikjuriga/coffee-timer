import React from 'react'
import Link from "next/link"
import { IRecipe } from './recipe'

const Notes = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <>
            <h3>Ratio</h3>
            <p>{recipe.gramsOfCoffee}g of coffee</p>
            <p>{recipe.gramsOfWater}g of water (at {recipe.waterTemperature}°C)</p>
            <p>~1:{Math.floor(recipe.gramsOfWater / recipe.gramsOfCoffee)}</p>
            <h3>Recipe Notes</h3>
            {recipe.notes ?
                <p>{recipe.notes}</p> : <p>None</p>}

            <h3>Source</h3>
            {recipe.source.href ?
                <Link href={recipe.source.href}>{recipe.source.title}</Link> :
                <p>{recipe.source.title}</p>
            }
        </>
    )
}

export default Notes