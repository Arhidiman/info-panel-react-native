import { srcBaseUrl } from "@/constants/urls"
import useAppContext from "@/hooks/useAppContext"
import {View, Image, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {headerInMoveContentStyle} from "@/components/app-left-header/header-in-move-content/HeaderInMoveContentStyle";

function HeaderWhenStoppingContent() {

    const { routeIcon, firstStop, lastStop } = useAppContext()
    const { width: deviceWidth } = useWindowDimensions()

    const style = headerInMoveContentStyle(deviceWidth).routeName
    return (
        <View>
            <Image source={{uri: srcBaseUrl+routeIcon}} alt="route icon"/>
            <Text style={style}> {firstStop} - {lastStop}</Text>
        </View>
    )
}

export default HeaderWhenStoppingContent
