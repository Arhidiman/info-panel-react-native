import { createContext, useState, useEffect } from "react"
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import useWebSocket from "react-use-websocket";
import { setRouteStates } from "@/lib/setRouteStates";
import AppLeft from '@/components/app-left/AppLeft';
import { wsUrl } from '@/constants/urls'


interface IWebSocket {
  lastMessage: any
}

export const AppContext = createContext(null)


export default function App() {

  const { lastMessage }: IWebSocket = useWebSocket(wsUrl)

  const [type, setType] = useState("")

  const [ stops, setStops ] = useState([])
  const [ routeIcon, setRouteIcon ] = useState("")
  const [ routeColor, setRouteColor ] = useState("")
  const [ routeFontColor, setRouteFontColor ] = useState("")
  const [ firstStop, setFirstStop ] = useState("")
  const [ lastStop, setLastStop ] = useState("")


  const [ nextStop, setNextStop ] = useState(5)
  const [ transfers, setTransfers] = useState([])
  const [ speed, setSpeed ] = useState(0)
  const [ temperature, setTemperature ] = useState(0)
  const [ stopsTimes, setStopTimes ] = useState([])
  const [ currentStop, setCurrentStop ] = useState(null)
  const [ inMove, setInMove ] = useState(true)
  const [ playImage, setPlayImage ] = useState("")
  const [ video, setVideo ] = useState("")
  const [ airportContent, setAirportContent ] = useState([])
  const [ rightScreenNum, setRightScreenNum ] = useState(0) //0 - картинка(лого метро); 1 - видео; 2 - прилёты/вылеты; 3 - бегущая строка
  const [ isVideoEnded, setIsVideoEnded ] = useState(false)
  const [ videoLength, setVideoLength ] = useState(0)
  const [ error, setError ] = useState()
  const [ videoLabel, setVideoLabel ] = useState("video label")
  const [ playImageLabel, setPlayImageLabel ] = useState("")
  const [ labelToSend, setLabelToSend ] = useState("")
  const [ tickerText, setTickerText ] = useState("")
  const [ streamUrl, setStreamUrl ] = useState("")

  // alert(JSON.parse(lastMessage.data))


  // console.log(JSON.parse(lastMessage.data))


    useEffect(() => {
      setRouteStates(
        lastMessage, 
        setSpeed, 
        setTemperature,
        setStops, 
        setRouteIcon, 
        setRouteColor, 
        setRouteFontColor,
        setFirstStop, 
        setLastStop,
  
        setStopTimes, 
        setNextStop, 
        setInMove, 
        setPlayImage, 
        setPlayImageLabel,
        setVideoLabel,
        setVideo, 
        setAirportContent, 
        setRightScreenNum,
        setVideoLength,
        setTickerText,
        setStreamUrl
      )
    }, [lastMessage])

    useEffect(() => {
      if(stops.length > 0 && stops[nextStop]) {
        setTransfers(stops[nextStop].transfers) 
        setCurrentStop(stops[nextStop])
      }
    }, [nextStop, stops])
  
    useEffect(() => {
      if(isVideoEnded) {
        // sendMessage(JSON.stringify({type: "COMPLETE", label: videoLabel})) //отправка сообщения после окончания проигрывания видео
        setIsVideoEnded(false)
      } 
    }, [isVideoEnded])
  
    useEffect(() => {
      if(error && labelToSend) {
        // sendMessage(JSON.stringify({type: "ERROR", label: labelToSend})) //отправка ошибки проигрывания контента
        setIsVideoEnded(false)
      } 
    }, [error, labelToSend])

  const { width, height } = useWindowDimensions()

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: width, 
      height: height
    },
  });
  
  return (
    <AppContext.Provider value={
        {
          lastMessage, 

          stops, 
          routeIcon, 
          routeColor, 
          routeFontColor,
          firstStop, 
          lastStop,

          nextStop, 
          transfers, 
          speed, 
          temperature,
          stopsTimes, 
          currentStop, 
          inMove, 
          playImage, 
          playImageLabel,
          video,
          videoLength,
          videoLabel,
          airportContent, 
          rightScreenNum,
          tickerText,
          streamUrl,
          setVideoLabel,
          setIsVideoEnded,
          setLabelToSend,
          setError
        }
    }>
        <View style={styles.container}>
            <AppLeft/>
            <Text>
                {/* {lastMessage.data ? JSON.parse(lastMessage.data) : ""} */}
                {"APP"}
            </Text>
            {/* <TestComponent/> */}
        </View>
    </AppContext.Provider>
  );
}


