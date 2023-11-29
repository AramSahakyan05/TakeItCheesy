import React, { useEffect } from 'react';

const ScrollTop = ()  => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts

    // Optionally, you can also listen for the beforeunload event to scroll to the top before the page unloads
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollTop;