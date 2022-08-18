import React, { useState, useMemo, useEffect } from 'react'
import Recipe, { IRecipe } from './recipe'
import Prerequisites from "./prerequisites"
import Notes from "./notes"
import s from "../styles/brewers.module.css"

export interface IRecipes {
    [key: string]: IRecipe
}

const Brewer = ({ recipes }: { recipes: IRecipes }) => {
    const [currentRecipeID, setCurrentRecipeID] = useState<string>("")
    const recipeKeys: string[] = useMemo(() => Object.keys(recipes), [recipes])

    useEffect(() => {
        setCurrentRecipeID(recipeKeys[0])
    }, [])


    const handleRecipeChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setCurrentRecipeID(e.target.value)
    }
    return (
        <>
            <div className={s.step}>
                <div>
                    <label htmlFor="authorSelect">Recipe from:</label>
                    <select id='authorSelect' className={s.authorSelect} onChange={handleRecipeChange}>
                        {recipeKeys.map((author) => (
                            <option key={author} value={author}>{recipes[author].author.fullName}</option>
                        ))}
                    </select>
                    {currentRecipeID && (
                        <>
                            <Prerequisites prerequisites={recipes[currentRecipeID].prerequisites} />
                            <Notes recipe={recipes[currentRecipeID]} />
                        </>
                    )}
                </div>
                <a className={s.nextStep} href={`#recipe-step-1`}>Start</a>
            </div>
            {
                currentRecipeID ?
                    <Recipe recipe={recipes[currentRecipeID]} /> :
                    <p>Please select a recipe</p>
            }
        </>
    )
}

export default Brewer