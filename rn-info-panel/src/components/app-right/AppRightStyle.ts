import { StyleSheet } from "react-native"
import { appColors } from "@/constants/colors";


export const appRightStyle = (deviceWidth: number, minLargePanelWidth: number) => StyleSheet.create({
    container: {
        display: "flex",
        overflow: "hidden",
        width: deviceWidth < minLargePanelWidth ? 960 : 1391, 
        height: deviceWidth < minLargePanelWidth ? 540 : 768,
        color: appColors.grey,
        transition: "all ease 0.5s",
        // borderLeft: `solid ${appColors.darkGrey} 2`
        borderWidth: 1
    },
})
