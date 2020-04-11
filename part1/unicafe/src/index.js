import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>{"give feedback"}</h1>
            <button onClick={handleGoodClick}>{"good"}</button>
            <button onClick={handleNeutralClick}>{"neutral"}</button>
            <button onClick={handleBadClick}>{"bad"}</button>
            <h1>{"statistics"}</h1>
            <div><strong>{"good"} {good}</strong></div>
            <div><strong>{"neutral"} {neutral}</strong></div>
            <div><strong>{"bad"} {bad}</strong></div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)