function Score(props){
    return(
        <div className="score">
            <div className="highestScore">
                <h2>Best Score is : {props.maxScore}</h2>
            </div>
            <div className="currentScore">
                <h2>Current Score is : {props.score}</h2>
            </div>
        </div>
    )
}

export default Score