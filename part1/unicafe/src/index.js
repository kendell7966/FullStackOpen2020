import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statistic = (props) => {
    return (
        <>
            <tr>
                <td>
                    <div><strong>{props.text}</strong></div>
                </td>
                <td>
                    <div><strong>{props.value}</strong></div>
                </td>
            </tr>
        </>
    )
}

const Statistics = (props) => {
    const headerText = "statistics"
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <>
                <h1>{headerText}</h1>
                <div><strong>No feedback given</strong></div>
            </>
        )
    }

    let all = props.good + props.neutral + props.bad;
    return (
        <>
            <h1>{headerText}</h1>
            <table>
                <Statistic text="good" value={props.good} />
                <Statistic text="neutral" value={props.neutral} />
                <Statistic text="bad" value={props.bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={all === 0 ? 0 : (props.good - props.bad) / all} />
                <Statistic text="positive" value={all === 0 ? "0 %" : (props.good / all * 100) + " %"} />
            </table>
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
            <Button handleClick={handleGoodClick} text="good" />
            <Button handleClick={handleNeutralClick} text="neutral" />
            <Button handleClick={handleBadClick} text="bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)