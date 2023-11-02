import { StyleSheet, useWindowDimensions, View, Text } from "react-native"
import { minLargePanelWidth, minMiddlePanelWidth } from "@/constants/dimensions"
import { appColors } from "@/constants/colors"
import { routeItemStyle, routeTmeLeftStyle, routeLineStyle, routeStopNameStyle } from "../RouteStopsStyle"

interface IRouteItem {
    topDisplayed: boolean,
    inMove: boolean,
    isLast: boolean,
    nameRus: string,
    nameEng: string,
    timeLeft: number,
    circleColor?: string
}

function RouteItem({topDisplayed, inMove, isLast, nameRus, nameEng, timeLeft, circleColor}: IRouteItem) {

    const { width: deviceWidth } = useWindowDimensions()

    const getRouteItemHeight = (deviceWidth: number, inMove: boolean ) => {

        let routeItemAdditionalStyle = {}
        switch(deviceWidth > minLargePanelWidth) {
            case false: {
                routeItemAdditionalStyle = inMove ? routeItemStyle.middleInMove : routeItemStyle.middleStop
            } break
            case true: {
                routeItemAdditionalStyle = inMove ? routeItemStyle.largeInMove : routeItemStyle.largeStop
            } break
        }
        return routeItemAdditionalStyle
    }

    return (
        <View style={{...routeItemStyle.container, ...getRouteItemHeight(deviceWidth, false)}}>
            <View style={routeTmeLeftStyle.timeLeftContainer}>
                <Text style={routeTmeLeftStyle.timeLeftNum}>{timeLeft}</Text>
                <Text style={routeTmeLeftStyle.timeLeftUnit}>мин</Text> 
            </View>

            <View style={routeLineStyle.routeLineContainer}>
                <View style={routeItemStyle.routeLineTop}></View>
                <View style={routeItemStyle.routeLineCircle}></View>
                <View style={routeItemStyle.routeLineBottom}></View>
            </View>
            <View style={routeItemStyle.stopNameContainer}>
                <Text style={routeItemStyle.stopNameRus}>{nameRus}</Text>
                <Text style={routeItemStyle.stopNameEng}>{nameEng}</Text>
        </View>
        </View>
    )
}

export default RouteItem
