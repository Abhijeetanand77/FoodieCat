import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(false);
    };

    const handleOffline = () => {
      setIsOnline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOnline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
