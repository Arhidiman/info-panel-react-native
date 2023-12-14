import { StyleSheet, TextStyle } from "react-native"
import {minLargePanelWidth} from "@/constants/dimensions"

export const headerInMoveContentStyle = (deviceWidth: number) => StyleSheet.create({
    routeName: {
        fontSize: deviceWidth < minLargePanelWidth ? 28 : 36,
    }
})

