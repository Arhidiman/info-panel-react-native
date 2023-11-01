import { View, StyleSheet, Dimensions } from 'react-native';
import AppLeftHeader from "./app-left-header/AppLeftHeader"
import ApppLeftContent from "./app-left-content/AppLeftContent"

function AppLeft() {
    return (
        <View style={appLeftStyle.container}>
            {/* <AppLeftHeader/>
            <ApppLeftContent/> */}
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width
const deviceHeight = Dimensions.get("window").height

const appLeftStyle = StyleSheet.create({
    container: {
        position: "relative",
        width: deviceWidth > 2781.98 ? 1391 : 960,
        height: deviceWidth > 2781.98 ? 768 : 540,
        backgroundColor: "lightblue"
    }
})

export default AppLeft
