function Score(props){
    return(
        <div className="score">
            <div className="highestScore">{props.maxScore}</div>
            <div className="currentScore">{props.score}</div>
        </div>
    )
}

export default Score