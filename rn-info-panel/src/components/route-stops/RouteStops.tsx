import { useState, useEffect } from "react"
import useAppContext from "@/hooks/useAppContext"
import RouteItem from "./route-item/RouteItem"
import { TStop } from "@/types/types"
import "./RouteStops.scss"

function RouteStops() {

    const { stops, stopsTimes, nextStop, inMove, routeColor } = useAppContext()

    let count = 0
    const [displayedStops, setDisplayedStops] = useState(4)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])

    const stop = (stop: TStop, i: number) => {
        try {
            if (count < displayedStops && i >= nextStop && stopsTimes[count]) {
                count +=1
                return <RouteItem 
                    key={stop.nameRus}
                    topDisplayed={count === 1}
                    className={count === displayedStops ? 'line-fade' : ""}
                    inMove={inMove}
                    isLast={i === stops.length - 1}
                    nameRus={stop.nameRus} 
                    nameEng={stop.nameEng} 
                    timeLeft={stopsTimes[count-1].time}
                    circleColor = { count === 1 && routeColor}
                />
            }
        } catch(error) {
            console.log(error, count, nextStop, stop, displayedStops)
        }
    }
    
    return (
        <div className="route-stops">
                {
                    stops.length > 0 ?  stops.map(stop) : <div className="route-item end-stop" >Конечная</div>
                }
        </div>
    )
}

export default RouteStops
