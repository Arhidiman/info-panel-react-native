import { View, ScrollView } from "react-native"
import useAppContext from "@/hooks/useAppContext"
import Transfers from "./transfers/Transfers"
import { transfersInfoScrollableStyle } from "./TransfersInfoStyle"
// import 

function TransfersInfo() {

    const { transfers } = useAppContext()

    const [busTransfers, trolleysTransfers, metroTransfers] = transfers

    return (
           
        <ScrollView style={transfersInfoScrollableStyle.scrollableContainer}>
            <View style={transfersInfoScrollableStyle.transfersWrapper}>
                {busTransfers && <Transfers icons={busTransfers.icons}/>}
                {trolleysTransfers && <Transfers icons={trolleysTransfers.icons}/>}
                {metroTransfers && <Transfers icons={metroTransfers.icons}/>}
            </View>
        </ScrollView>
                 
    )
}

export default TransfersInfo
