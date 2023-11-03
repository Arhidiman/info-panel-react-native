import { StyleSheet, useWindowDimensions, View, Text } from "react-native"
import { minLargePanelWidth, minDefaultPanelWidth } from "@/constants/dimensions"
import { appColors } from "@/constants/colors"
import { routeItemStyle, routeTmeLeftStyle, routeLineStyle, routeStopNameStyle } from "../RouteStopsStyle"

interface IRouteItem {
    topDisplayed: boolean,
    bottomDisplayed: boolean,
    inMove: boolean,
    isLast: boolean,
    nameRus: string,
    nameEng: string,
    timeLeft: number,
    circleColor?: string
}




function RouteItem({topDisplayed, bottomDisplayed, inMove, isLast, nameRus, nameEng, timeLeft, circleColor}: IRouteItem) {
    console.log(topDisplayed, inMove)

    const { width: deviceWidth } = useWindowDimensions()

    const getRouteItemStyle = (deviceWidth: number, inMove: boolean ) => {  // изменяет высоту компонента остановки в зависимости от ширины устройства и статуса движения

        let addedStyle = {}
        switch(deviceWidth > minLargePanelWidth) {
            case false: {
                addedStyle = inMove ? routeItemStyle.defaultInMove : routeItemStyle.defaultStop
            } break
            case true: {
                addedStyle = inMove ? routeItemStyle.largeInMove : routeItemStyle.largeStop
            } break
        }
        return addedStyle
    }


    const getRouteLineBottomStyle = (bottomDisplayed: boolean, isLast: boolean ) => {  // изменяет стили для нижней части линии маршрута
        let addedStyle = {}
        switch(true) {
            case bottomDisplayed: {
                addedStyle = { ...routeLineStyle.routeLineBottom, ...routeLineStyle.routeLineBottomFade }
            } break
            case isLast && bottomDisplayed: {
                addedStyle = { ...routeLineStyle.routeLineBottom, ...routeLineStyle.routeLineBottomLast }
            } 
            default: {
                addedStyle = routeLineStyle.routeLineBottom
            }
            break
        }
        return addedStyle
    }

    const getRouteStopNameContainerStyle = (topDisplayed: boolean, inMove: boolean ) => {  // изменяет стили для нижней части линии маршрута
        let style = {}
        if(topDisplayed && inMove) {
            style = {...routeStopNameStyle.stopNameContainer, ...routeStopNameStyle.stopNameContainerSelected}
        } else {
            style = {...routeStopNameStyle.stopNameContainer, ...routeStopNameStyle.stopNameContainerNotSelected}
        }
        return style
       
    }

    const getRouteStopNameRus = (deviceWidth: number, minLargePanelWidth: number) => {  // изменяет стили для нижней части линии маршрута
        let style = {}
        switch(true) {
            case deviceWidth < minLargePanelWidth: {
                style = { ...routeStopNameStyle.stopNameRus, ...routeStopNameStyle.stopNameRusDefault }
            } break
            case deviceWidth >= minLargePanelWidth: {
                style = { ...routeStopNameStyle.stopNameRus, ...routeStopNameStyle.stopNameRusLarge }
            } 
        }
        return style
    }

    const getRouteStopNameEng = (deviceWidth: number, minLargePanelWidth: number ) => {  // изменяет стили для нижней части линии маршрута
        let style = {}
        switch(true) {
            case deviceWidth < minLargePanelWidth: {
                style = { ...routeStopNameStyle.stopNameEng, ...routeStopNameStyle.stopNameEngDefault }
            } break
            case deviceWidth >= minLargePanelWidth: {
                style = { ...routeStopNameStyle.stopNameEng, ...routeStopNameStyle.stopNameEngLarge }
            } 
        }
        return style
    }

    return (

        // style={{...routeItemStyle.container, ...getRouteItemStyle(deviceWidth, inMove)}}
        <View style={{...routeItemStyle.container, flexDirection: "row"}}>
            <View style={routeTmeLeftStyle.timeLeftContainer}>
                <Text style={routeTmeLeftStyle.timeLeftNum}>{timeLeft}</Text>
                <Text style={routeTmeLeftStyle.timeLeftUnit}>мин</Text> 
            </View>
            <View style={routeLineStyle.routeLineContainer}>
                <View style={routeLineStyle.routeLineTop}></View>
                <View style={routeLineStyle.routeLineCircle}></View>
                <View style={{...routeLineStyle.routeLineBottom, ...getRouteLineBottomStyle(bottomDisplayed, isLast)}}></View>
            </View>

            <View style={getRouteStopNameContainerStyle(topDisplayed, inMove)}>
                <Text style={getRouteStopNameRus(deviceWidth, minLargePanelWidth)}>{nameRus}</Text>
                {/* <Text style={getRouteStopNameEng(deviceWidth, minLargePanelWidth)}>{nameEng}</Text> */}
            </View>
        </View>
    )
}

export default RouteItem
