import { View, StyleSheet } from "react-native"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import RouteStops from "@/components/route-stops/RouteStops"
import useAppContext from "@/hooks/useAppContext"
import RouteItem from "@/components/route-stops/route-item/RouteItem"
// import RouteStops from "@/components/route-stops/RouteStops"
// import TransfersInfo from "@/components/transfers-info/TransfersInfo"
// import InfoPlate from "@/components/info-plate/InfoPlate"

function AppLeftContent() {

    const { transfers, inMove } = useAppContext()


  

    return (
      <View>
          <SwitchTransition>
              <CSSTransition key={inMove ? "in-move" : 'stop'} timeout={1000} classNames="fade" mountOnEnter unmountOnExit>
                  {/* {
                    transfers.length > 0 && !inMove
                    ? 
                    <TransfersInfo/>
                    :
                    <RouteStops/>
                  } */}
                  <RouteStops/>
                 
              </CSSTransition>
          </SwitchTransition>
          {/* <InfoPlate/>         */}
      </View>
  )
}

export default AppLeftContent
