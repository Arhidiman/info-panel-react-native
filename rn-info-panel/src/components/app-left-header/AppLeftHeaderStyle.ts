import { StyleSheet } from "react-native";
import { appColors } from "@/constants/colors";

export const appLeftHeaderStyle = (deviceWidth: number, minLargePanelWidth: number, inMove: boolean) => StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: inMove ? "row" : "column",
        alignItems: "center",
        gap: 31,
        paddingTop: deviceWidth < minLargePanelWidth ? 12 : 20,
        paddingBottom: deviceWidth < minLargePanelWidth ? 12 : 20,
        paddingLeft: 32,
        paddingRight: 32,
        height: inMove ? 41 : 77,
        bordeBottom: `solid 2 ${appColors.lightGrey}`,
    }
})


export const appLeftHeaderWhenStopStyle = (deviceWidth: number, minLargePanelWidth: number) => StyleSheet.create({
    rus: {
        fontSize: deviceWidth < minLargePanelWidth ? 12 : 20,
    },
    eng: {
        fontSize: deviceWidth < minLargePanelWidth ? 12 : 20,
    }
})

export const appLeftHeaderInMoveStyle = (deviceWidth: number, minLargePanelWidth: number) => StyleSheet.create({
    routeName: {
        fontSize: deviceWidth < minLargePanelWidth ? 28 : 36
    }
})



// &-ru {
//     @media screen and (min-width: 1919.98px) {
//       font-size: 40px;
//     }
//     @media screen and (min-width: 2781.98px) {
//       font-size: 48px;
//     }
// }
// &-eng {
//     @media screen and (min-width: 1919.98px) {
//       font-size: 28px;
//     }
//     @media screen and (min-width: 2781.98px) {
//       font-size: 36px;
//     }
// }