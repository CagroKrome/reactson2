import React from 'react'

export default function State() {
    let [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    console.log(thingsArray.length)
    function handleClick() {
        setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
    }

    return (
        <div>
            <h1>{thingsArray}</h1>
            <button onClick={handleClick}>Add an element</button>
        </div>
    )
}