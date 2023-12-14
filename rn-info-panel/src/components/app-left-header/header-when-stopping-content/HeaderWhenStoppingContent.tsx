import { Text, View } from "react-native"
import useAppContext from "@/hooks/useAppContext"
import { minLargePanelWidth } from "@/constants/dimensions"
import { appLeftHeaderWhenStopStyle } from "../AppLeftHeaderStyle"

function HeaderInMoveContent() {

    const { currentStop, deviceWidth } = useAppContext()

    return (
        currentStop && 
        <>
            <Text style={appLeftHeaderWhenStopStyle(deviceWidth, minLargePanelWidth).rus}>{currentStop.nameRus}</Text>
            <Text style={appLeftHeaderWhenStopStyle(deviceWidth, minLargePanelWidth).eng}>{currentStop.nameEng}</Text>
        </>
     )
}

export default HeaderInMoveContent
