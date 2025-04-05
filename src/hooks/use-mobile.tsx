
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )
  
  const [orientation, setOrientation] = React.useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerWidth < window.innerHeight ? 'portrait' : 'landscape'
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial state based on screen width
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape');
    }
    
    // Check immediately
    checkMobile();
    
    // Add event listener for resize with debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        checkMobile();
      }, 100);
    };
    
    // Add event listener for orientation change
    const handleOrientationChange = () => {
      checkMobile();
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      clearTimeout(timeoutId);
    }
  }, [])

  return { isMobile, orientation };
}

// For backwards compatibility
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 600 && width < MOBILE_BREAKPOINT);
    }
    
    checkTablet();
    
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        checkTablet();
      }, 100);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    }
  }, []);

  return isTablet;
}
