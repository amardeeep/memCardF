import Score from "./score.jsx"
import Card from "./card.jsx"
function Header(){
    return(
    <div className="header">
        <h1>Test Your Memory</h1>
        <Score></Score>
        <div className="cards">
            <Card></Card>
        </div>
    </div>
    )
}
export default Header