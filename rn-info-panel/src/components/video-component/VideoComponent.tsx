import { useState, useEffect, SyntheticEvent } from "react"
import useAppContext from "@/hooks/useAppContext"

import Video from "react-native-video"


interface IVideoComponent {
    src: string,
    type?: "video" | "stream",
    style?: any
}

function VideoComponent({src}: IVideoComponent) {

    const {setIsVideoEnded, setError, setLabelToSend, videoLabel, videoLength, rightScreenNum} = useAppContext() 
    const [ videoPlaying, setVideoPlaying] = useState(false)
    const [ timeout, setVideoTimeout ] = useState(null)

    // const setVideoError = (e: SyntheticEvent<HTMLVideoElement>) => {
    //   setError(e)
    //   setLabelToSend(videoLabel)
    // } 

    const setVideoError = () => {
        // setError(e)
        // setLabelToSend(videoLabel)
        console.log("VIDEO ERROR")
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
  
    return (
          // type === "stream"  
          // ? 
          // <VideoPlayer className={className} src={src} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></VideoPlayer>
          // :
          // <VideoPlayer className={className} muted autoPlay={true} onPlay={setStartVideo} onError={setVideoError}>
          //   <source src={src} type="video/mp4"/>
          // </VideoPlayer>

          <Video style={{width: "100%", height: "100%"}} source={{uri: src}} muted playInBackground /*{onPlay={setStartVideo}}*/ onError={setVideoError}>
            
          </Video>
    )
}

export default VideoComponent
