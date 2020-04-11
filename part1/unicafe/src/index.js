import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <>
                <h1>{"statistics"}</h1>
                <div><strong>No feedback given</strong></div>
            </>
        )
    }

    let all = props.good + props.neutral + props.bad;
    return (
        <>
            <h1>{"statistics"}</h1>
            <div><strong>{"good"} {props.good}</strong></div>
            <div><strong>{"neutral"} {props.neutral}</strong></div>
            <div><strong>{"bad"} {props.bad}</strong></div>
            <div><strong>{"all"} {all}</strong></div>
            <div><strong>{"average"} {all === 0 ? 0 : (props.good - props.bad) / all}</strong></div>
            <div><strong>{"positive"} {all === 0 ? 0 : props.good / all * 100} %</strong></div>
        </>
    )
}

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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)