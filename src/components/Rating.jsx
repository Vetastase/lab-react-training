import fillStarPath from "../assets/images/fill_star.jpg"
import emptyStarPath from "../assets/images/empty_star.png"

function Rating(props){

    const { children } = props

    const roundNumber = Number(Math.round(children))

    return (
        <div className="rating d-flex">

            { roundNumber >= 1 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 2 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 3 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 4 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 5 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }

        </div>
    )

}

export default Rating