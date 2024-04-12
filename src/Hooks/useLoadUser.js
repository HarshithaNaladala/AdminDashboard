import { useState, useEffect } from "react";

export default function useLoadUser() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLoginUrl() {
      try {
        const response = await fetch(
          "https://learningtoolsdev.gsu.edu/admindashboard2/auth/loggedin"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Auth request failed");
        }
      } catch (error) {
        console.error("Auth request error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLoginUrl();
  }, []);

  return { user, loading };
}
