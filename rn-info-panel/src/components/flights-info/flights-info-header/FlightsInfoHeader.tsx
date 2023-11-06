import { flightDirection } from "@/types/types"
// import arrivalImg from "@/images/icons/arrival.png"
// import departureImg from "@/images/icons/departure.png"

const arrivalImg = require("@/images/icons/arrival.png")
const departureImg = require("@/images/icons/departure.png")


interface TFlightsInfo {
    type?: flightDirection
}

function FlightsInfoHeader({ type=flightDirection.departures }: TFlightsInfo) {
    return (
        <div className="air-port-info-header">
            <img className="air-port-info__icon" src={type === flightDirection.arrivals ? arrivalImg : departureImg} alt="airport icon"/>
            <p className="air-port-info__flight-direction">{type === flightDirection.arrivals ? "Прилёты" : "Вылеты"}</p>
        </div> 
    )
}

export default FlightsInfoHeader
