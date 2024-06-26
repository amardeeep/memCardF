function Card({data}){
    return(
        <div className="card">
            <img src={data.url} alt="" />
        </div>
    )
}
export default Card