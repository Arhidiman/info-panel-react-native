import { View, StyleSheet, Dimensions } from 'react-native';
import AppLeftHeader from '@/components/app-left-header/AppLeftHeader';
import AppLeftContent from "./app-left-content/AppLeftContent"
import RouteStops from '../route-stops/RouteStops';

const deviceWidth = Dimensions.get("window").width

const appLeftStyle = StyleSheet.create({
    container: {
        position: "relative",
        width: deviceWidth > 2781.98 ? 1391 : 960,
        height: deviceWidth > 2781.98 ? 768 : 540,
    }
})

function AppLeft() {
    return (
        <View style={appLeftStyle.container}>
            <AppLeftHeader/>
            <AppLeftContent/>           
        </View>
    )
}



export default AppLeft
