import { View, StyleSheet } from "react-native"
import RouteStops from "@/components/route-stops/RouteStops"
import useAppContext from "@/hooks/useAppContext"
import RouteItem from "@/components/route-stops/route-item/RouteItem"
import TransfersInfo from "@/components/transfers-info/TransfersInfo"
// import RouteStops from "@/components/route-stops/RouteStops"
// import TransfersInfo from "@/components/transfers-info/TransfersInfo"
// import InfoPlate from "@/components/info-plate/InfoPlate"

function AppLeftContent() {

    const { transfers, inMove } = useAppContext()

    return (
      <View>
          <RouteStops/>
          {/*{*/}
          {/*  transfers.length > 0 && !inMove*/}
          {/*  ? */}
          {/*  <TransfersInfo/>*/}
          {/*  :*/}
          {/*  <RouteStops/>*/}
          {/*}   */}

          {/* <InfoPlate/>         */}
      </View>
  )
}

export default AppLeftContent
