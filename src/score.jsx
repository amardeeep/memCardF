function Score(props){
    return(
        <div className="score">
            <div className="highestScore">Best Score is : {props.maxScore}</div>
            <div className="currentScore">Current Score is : {props.score}</div>
        </div>
    )
}

export default Score