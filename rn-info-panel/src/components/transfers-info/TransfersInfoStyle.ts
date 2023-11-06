import { StyleSheet } from "react-native";
import { appColors } from "@/constants/colors";

export const transfersInfoScrollableStyle = StyleSheet.create({
    scrollableContainer: {
       
    },
    transfersWrapper: {
        marginTop: 32,
        maxHeight: 420
    }
})


export const transfersStyle = (deviceWidth: number, minLargePanelWidth: number) => StyleSheet.create({
    container: {
        display: "flex",
        gap: 16,
        marginBottom: 16
    },
    transfersMainIcon: {
        width: 48,
        height: 48
    },
    transferIcon: {
        width: 94,
        height: 50
    },
    transfersIcons: {
        display: "flex",
        gap: 8,
    }
})
