import { SyntheticEvent } from "react"
import { Image, NativeSyntheticEvent, ImageErrorEventData } from "react-native"
import useAppContext from "@/hooks/useAppContext"
import VideoComponent from "@/components/video-component/VideoComponent"
import Ticker from "@/components/ticker/Ticker"
import FlightsInfo from "@/components/flights-info/FlightsInfo"
import { srcBaseUrl } from "@/constants/urls"

interface IRightScreens {
    screenNum: number
}

function RightScreens({ screenNum } : IRightScreens) {

    const { playImage, video, streamUrl, playImageLabel, setError, setLabelToSend } = useAppContext()

    const setImageError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
      setError(error)
      setLabelToSend(playImageLabel)
    } 

    const mockStream = "https://www.youtube.com/embed/QxtigSvGnD8?si=ySkC7y5nDqo5vFTb?autoplay=1&mute=1"
    const mockVideo = "http://192.168.100.95:8080/sdcard/content/video/media_plans/69db6abdbb7c206b9eebbb4058d52dd9.mp4"

    const screens = (playImageLink: string, videoUrl: string, streamUrl: string) => [
        <Image onError={setImageError} source={{uri: srcBaseUrl+playImageLink }} alt="current place content"/>,
        <VideoComponent type="video" src={videoUrl}/>,
        <FlightsInfo/>,
        <Ticker/>,
        <VideoComponent type="stream" src={streamUrl}/>,
    ]
 
    return ( 
        screens(playImage, mockVideo, mockStream)[screenNum]
    )
}

export default RightScreens
