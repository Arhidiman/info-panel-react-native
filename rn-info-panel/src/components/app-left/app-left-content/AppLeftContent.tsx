import { View, StyleSheet } from "react-native"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import useAppContext from "@/hooks/useAppContext"
// import RouteStops from "@/components/route-stops/RouteStops"
// import TransfersInfo from "@/components/transfers-info/TransfersInfo"
// import InfoPlate from "@/components/info-plate/InfoPlate"

function AppLeftContent() {

    const { transfers, inMove } = useAppContext()


    const appLeftContentStyle = StyleSheet.create({
      container: {

      }
    })

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
              </CSSTransition>
          </SwitchTransition>
          {/* <InfoPlate/>         */}
      </View>
  )
}

export default AppLeftContent
