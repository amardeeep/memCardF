import './card.css'
function Card(props){
    return(
        <div className="card">
            <img src={props.data} alt="Placeholder Image" onClick={props.onClick} />
        </div>
    )
}
export default Card