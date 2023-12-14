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
        borderBottom: `solid 2 ${appColors.lightGrey}`,
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