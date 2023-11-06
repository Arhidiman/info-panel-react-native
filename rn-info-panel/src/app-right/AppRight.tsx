import { useEffect, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import RightScreens from "@/components/right-screens/RightScreens"

function AppRight() {

    const [screenInterval, setScreenInterval] = useState(null)
    const [screenNum, setScreenNum] = useState(0)
    const [screensTotal, setScreesTotal] = useState(5)

    useEffect(() => {
      const interval = setTimeout(() => {
        if(screenNum === screensTotal - 1) {
          setScreenNum(0)
        } else setScreenNum(screenNum + 1)
      },10000)
      setScreenInterval(interval)
      return () => clearInterval(interval)
    }, [screenNum])
    // useEffect используется как заглушка, чтобы долго не ждать сообщение от сервера и сразу видеть результат

    return (
        <SwitchTransition>
          <CSSTransition key={screenNum} timeout={700} classNames="fade" mountOnEnter unmountOnExit>
                <div className="app-page-right">
                  <RightScreens screenNum={screenNum}/>
                </div>
        </CSSTransition>
        </SwitchTransition>
  )
}

export default AppRight
