import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let all;

    const setAll = () => {
        all = good + neutral + bad
    }

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll()
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll()
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll()
    }

    setAll();

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
            <div><strong>{"all"} {all}</strong></div>
            <div><strong>{"average"} {all == 0 ? 0 : (good - bad) / all}</strong></div>
            <div><strong>{"positive"} {all == 0 ? 0 : good / all * 100} %</strong></div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)