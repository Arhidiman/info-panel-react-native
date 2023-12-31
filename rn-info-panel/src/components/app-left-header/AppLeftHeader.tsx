import { View, Text, useWindowDimensions } from "react-native"
import useAppContext from "@/hooks/useAppContext"
import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderWhenStoppingContent"
import HeaderInMoveContent from "./header-in-move-content/HeaderInMoveContent"
import { minLargePanelWidth } from "@/constants/dimensions"
import { appLeftHeaderStyle } from "./AppLeftHeaderStyle"


function AppLeftHeader() {

    const { currentStop, inMove, routeColor, routeFontColor} = useAppContext()

    const headerAddStyle = {
        backgroundColor: routeColor, 
        color: routeFontColor
    }

    const { width: deviceWidth } = useWindowDimensions()
    const headerStyle = appLeftHeaderStyle(deviceWidth, minLargePanelWidth, inMove).container
        
    return (
        <View style={inMove ? headerStyle : {...headerStyle, ...headerAddStyle}}>
            {inMove && currentStop ? <HeaderInMoveContent/> : <HeaderWhenStoppingContent/>}
        </View>
    )
}

export default AppLeftHeader
