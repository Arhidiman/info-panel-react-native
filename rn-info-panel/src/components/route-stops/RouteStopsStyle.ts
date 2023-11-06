import { StyleSheet, Dimensions} from "react-native"
import { minLargePanelWidth } from "@/constants/dimensions"
import { appColors } from "@/constants/colors"

const getRouteItemHeight = (deviceWidth: number, inMove: boolean ) => {

    let routeItemHeight = 0
    switch(deviceWidth > minLargePanelWidth) {
        case false: {
            routeItemHeight = inMove ? 123 : 153
        } break
        case true: {
            routeItemHeight = inMove ? 171 : 208
        } break
    }
    return routeItemHeight
}
    
export const routeItemStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }, 
    defaultInMove: {
        height: 123
    },
    defaultStop: {
        height: 153
    },
    largeInMove: {
        height: 171
    },
    largeStop: {
        height: 208
    },
})

export const routeTmeLeftStyle = StyleSheet.create({
    timeLeftContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 80,
    },
    timeLeftNum: {
        fontSize: 40,
        fontWeight: "500",
        lineHeight: 32,
        letterSpacing: 0,
        textAlign: "left",
        color: appColors.darkGrey
    },
    timeLeftUnit: {
        fontWeight: "500",
        fontSize: 24,
        linHeight: 32
    },
})

export const routeLineStyle = StyleSheet.create({
    routeLineContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        height: "100%"
    },
    routeLineTop: {
        height: "40%",
        // borderLeft: `solid ${appColors.lightGrey} 2`
        borderWidth: 2
    },
    routeLineCircle: {
        border: "none",
        width: 20,
        height: 20,
        borderRadius: 10000,
        backgroundColor: appColors.blue
    },
    routeLineBottom: {  //нижняя часть линии маршрута, под кругом 
        height: "40%",
        // borderLeft: `solid ${appColors.lightGrey} 2`,
        borderWidth: 2

    },
    routeLineBottomFade: {  //нижняя часть линии маршрута, под кругом нижней отображаемой остановки, с градиентов в прозрачный цвет
        borderImageSource: `linear-gradient${appColors.lightGrey}, transparent)`,
        backgroundColor: "auto",
    },
    routeLineBottomLast: {  //убираем границу на последней точке маршрута
        // borderLeft: "none",
        border: "none",
        backgroundColor: "auto",
        // backgroundColor: "black",
        // border: "none"
    }
})

export const routeStopNameStyle = StyleSheet.create({
    stopNameContainer: {
        marginLeft: 25,
        width: "70%",
        paddingTop: 10,
        paddinRight: 16,
        paddingBottom: 10,
        paddingLeft: 16,
    },

    stopNameContainerSelected: {
        backgroundColor: appColors.blue
    },

    stopNameContainerNotSelected: {
        backgroundColor: "none"
    },
    stopNameRus: {
        fontWeight: "700",
        lineHeight: 32,
        letterSpacing: 0,
        textAlign: "left"
    },
    stopNameRusDefault: {
        marginBottom: 4,
        fontSize: 32,
    },
    stopNameRusLarge: {
        marginBottom: 10,
        fontSize: 40,
    },   
    stopNameEng: {
        fontWeight: "700",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left"  
    },
    stopNameEngDefault: {
        fontSize: 24
    },
    stopNameEngLarge: {
        fontSize: 32
    }
})


export const routeEndStop = StyleSheet.create({
    text: {
        marginLeft: 32,
        fontSize: 32,
        fontWeight: "500",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: appColors.blackGreen
    }
})




// export const routeStopNameStyle = (inMove: boolean, topDisplayed: boolean, width: number) => StyleSheet.create({
//     stopNameContainer: {
//         marginLeft: 25,
//         width: 70,
//         paddingTop: 10,
//         paddinRight: 16,
//         paddingBottom: 10,
//         paddingLeft: 16,
//         backgroundColor: inMove && topDisplayed ? appColors.blue : "none"
//     },
//     stopNameRus: {
//         marginBottom: width < minLargePanelWidth ? 4 : 10 ,
//         fontSize: width < minLargePanelWidth ? 32 : 40 ,
//         fontWeight: "700",
//         lineHeight: 32,
//         letterSpacing: 0,
//         textAlign: "left"
//     },
//     stopNameRusMiddle: {
//         marginBottom: 4,
//         fontSize: 32,
//     },
//     stopNameRusLarge: {
//         marginBottom: 10,
//         fontSize: 40,
//     },
   
//     stopNameEng: {
//         fontSize: width < minLargePanelWidth ? 24 : 32,
//         fontWeight: "700",
//         lineHeight: 24,
//         letterSpacing: 0,
//         textAlign: "left"  
//     }
// })