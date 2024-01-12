import { useState } from "react";

const useOnlineStatus = () => {
  const [userOnline, setUserOnline] = useState(true);
  window.addEventListener("online", () => {
    setUserOnline(true);
  });
  window.addEventListener("offline", () => {
    setUserOnline(false);
  });
  return userOnline;
};

export default useOnlineStatus;
