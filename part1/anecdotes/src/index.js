import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getIndexForMostVotes = (votes) => {
    let max = 0;
    let index = -1
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] > max) {
            max = votes[i]
            index = i
        }
    }

    return index
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Anecdote = ({ anecdote, vote }) => {
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>
                {anecdote}
            </p>
            has {vote} vote(s)
        </div>
    )
}

const BestAnecdote = ({ anecdotes, votes }) => {
    let index = getIndexForMostVotes(votes)
    if (index < 0) {
        return null
    }

    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>
                {anecdotes[index]}
            </p>
            has {votes[index]} vote(s)
        </div>
    )
}

const App = ({ anecdotes }) => {
    const getRandomIndex = () => {
        return randomIntFromInterval(0, anecdotes.length - 1)
    }

    const [selected, setSelected] = useState(getRandomIndex())
    const [votes, setVotes] = useState(new Uint32Array(anecdotes.length))

    const handleNextAnecdoteClick = () => {
        setSelected(getRandomIndex())
    }

    const handleVoteClick = () => {
        const newVotes = votes.map((vote, index) => index===selected ? vote + 1 : vote )
        setVotes(newVotes)
    }

    return (
        <div>
            <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
            <Button handleClick={handleVoteClick} text="vote" />
            <Button handleClick={handleNextAnecdoteClick} text="next anecdote" />
            <BestAnecdote anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
