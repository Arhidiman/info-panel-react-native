import { View, Image, useWindowDimensions } from "react-native"
import { srcBaseUrl } from "@/constants/urls"
import { minLargePanelWidth } from "@/constants/dimensions"
import { transfersStyle } from "@/components/transfers-info/TransfersInfoStyle"

interface ITransfers {
    icons: string[]
}

const { width: deviceWidth } = useWindowDimensions()

const {container: transfersContainer, transfersMainIcon, transferIcon, transfersIcons} = transfersStyle(deviceWidth, minLargePanelWidth)

function Transfers({ icons }: ITransfers) {
    return (      
        <View style={transfersContainer}>
            <Image style={transfersMainIcon} source={{uri: icons && srcBaseUrl+icons[0]}} alt="bus image"/>
            <View style={transfersIcons}>
                {
                    icons && icons.map((icon, i) =>  i !== 0 ? <Image style={transferIcon} source={{uri: srcBaseUrl+icon}} alt="bus transfer" key={i}/> : null)
                }
            </View>
        </View>
    )
}

export default Transfers
