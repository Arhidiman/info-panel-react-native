import { useState, useEffect, useRef, SyntheticEvent } from "react"
import { View, Text } from "react-native"
import useAppContext from "@/hooks/useAppContext"
import Video, { VideoRef, LoadError } from "react-native-video";

import { someData } from "@/videos/file"

const video = require('../../videos/video.mp4')

interface IVideoComponent {
    src: string,
    type?: "video" | "stream",
    style?: any
}

function VideoComponent({src}: IVideoComponent) {

    const {setIsVideoEnded, setError, setLabelToSend, videoLabel, videoLength, rightScreenNum} = useAppContext() 
    const [ videoPlaying, setVideoPlaying] = useState(false)
    const [ timeout, setVideoTimeout ] = useState(null)

    const videoRef = useRef<VideoRef>()

    // const setVideoError = (e: SyntheticEvent<HTMLVideoElement>) => {
    //   setError(e)
    //   setLabelToSend(videoLabel)
    // } 

    const setVideoError = (e: LoadError) => {
        // setError(e)
        // setLabelToSend(videoLabel)
        console.log(e)
    } 
        
    useEffect(() => {
        const timeout = setTimeout(() => {
              videoPlaying ? setIsVideoEnded(true) : null
              setVideoPlaying(false)
        }, videoLength)
        setVideoTimeout(timeout)
        return () => clearTimeout(timeout)
    }, [videoLength, videoPlaying])

    const setStartVideo = () => setVideoPlaying(true)

    console.log(src)

    const onBuffer = () => {
        console.log("onBuffer")
    }
  
    return (
          // type === "stream"  
          // ? 
          // <VideoPlayer className={className} src={src} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></VideoPlayer>
          // :
          // <VideoPlayer className={className} muted autoPlay={true} onPlay={setStartVideo} onError={setVideoError}>
          //   <source src={src} type="video/mp4"/>
          // </VideoPlayer>

        //   <Text>Тут будет видео</Text>

        //   <Video style={{width: "100%", height: "100%"}} source={{uri: "https://rutube.ru/video/4fb60be49d2a45bc2a98f22c20d87405/"}} /*{onPlay={setStartVideo}}*/ onError={setVideoError}>

        //   </Video>
        <Video 
        // Can be a URL or a local file.
        source={{uri: "video", type: "mp4"}}
        // Store reference  
        ref={videoRef}
        // Callback when remote video is buffering                                      
        onBuffer={onBuffer}
        // Callback when video cannot be loaded              
        onError={setVideoError}               
        style={{width: 500, height: 500}}
       />
    )
}

export default VideoComponent
