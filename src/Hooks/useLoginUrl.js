import { useState, useEffect } from "react";

function useLoginUrl() {
  const [loginUrl, setLoginUrl] = useState("");

  useEffect(() => {
    async function fetchLoginUrl() {
      try {
        const response = await fetch(
          "https://learningtoolsdev.gsu.edu/admindashboard2/auth/authurl"
        );
        if (response.ok) {
          const data = await response.json();
          setLoginUrl(data["logInUrl"]);
        } else {
          console.error("AuthURL request failed");
        }
      } catch (error) {
        console.error("AuthURL request error:", error);
      }
    }

    fetchLoginUrl();
  }, []);

  return loginUrl;
}

export default useLoginUrl;
