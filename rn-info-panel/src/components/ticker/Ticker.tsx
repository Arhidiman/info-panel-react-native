import { useState, useEffect, useRef } from "react"
import { View, Text, LayoutChangeEvent} from "react-native"
import useAppContext from "@/hooks/useAppContext"
import { tickerStyle } from "./TickerStyle"
import { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent"

function Ticker() {

    const [ tickerWidth, setTickerWidth] = useState(0)
    const [ tickerSpeed, setTickerSpeed] = useState(0.3)
    const ticker = useRef<Text>() 
    // const { tickerText } = useAppContext() //Пока стоит заглушка

    useEffect(() => {
        // setTickerWidth(ticker.current.scrollWidth)
    }, [ticker])

    const tickerHandler = (e: LayoutChangeEvent) => {
        console.log(e)
    }

    // useEffect(() => {
    //     ticker.current.animate(
    //         [
    //             { transform: `translateX(-${tickerWidth+2000}px)` }
    //         ], 
    //         {
    //             duration: tickerWidth/tickerSpeed,
    //             iterations: Infinity
    //         }
    //     )
    // }, [tickerWidth])

    const { container: tickerContainer, tickerText: tickerTextStyle } = tickerStyle

    return (
        <View style={tickerContainer}>
            <Text ref={ticker} style={tickerTextStyle} onLayout={tickerHandler}>
                {/* {tickerText} */}
                Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока 
            </Text>
        </View>
    )
}

export default Ticker
