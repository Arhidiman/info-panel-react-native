import { useEffect, useState } from "react"
import { View, Text, StyleSheet, useWindowDimensions } from "react-native"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import RightScreens from "@/components/right-screens/RightScreens"
import { minLargePanelWidth } from "@/constants/dimensions"
import { appRightStyle } from "./AppRightStyle"




function AppRight() {

    const [screenInterval, setScreenInterval] = useState(null)
    const [screenNum, setScreenNum] = useState(0)
    const [screensTotal, setScreesTotal] = useState(5)

    // useEffect(() => {
    //   const interval = setTimeout(() => {
    //     if(screenNum === screensTotal - 1) {
    //       setScreenNum(0)
    //     } else setScreenNum(screenNum + 1)
    //   },10000)
    //   setScreenInterval(interval)
    //   return () => clearInterval(interval)
    // }, [screenNum])
    // useEffect используется как заглушка, чтобы долго не ждать сообщение от сервера и сразу видеть результат

    const { width: deviceWidth } = useWindowDimensions()

    const { container: appRightContainer } = appRightStyle(deviceWidth, minLargePanelWidth)

    return (
        <SwitchTransition>
          <CSSTransition key={screenNum} timeout={700} classNames="fade" mountOnEnter unmountOnExit>
                <View style={appRightContainer}>
                  <RightScreens screenNum={4}/>
                </View>
        </CSSTransition>
        </SwitchTransition>
  )
}

export default AppRight
