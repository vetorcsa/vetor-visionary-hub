
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Set initial state based on screen width
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Check immediately
    checkMobile()
    
    // Add event listener for resize
    window.addEventListener("resize", checkMobile)
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
