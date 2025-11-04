import AnimatedAlert from "./components/AnimatedAlert.tsx"
import { useState } from "react"

function App() {

  const [alertShown, setAlertShown] = useState(false)

  return (
    <>
      <AnimatedAlert 
        isShown={alertShown} 
        message="I'm an alert!" 
        closeFn={() => setAlertShown(false)}
      />
      <button onClick={() => setAlertShown(true)}>
        Show alert
      </button>
    </>
  )
}

export default App
