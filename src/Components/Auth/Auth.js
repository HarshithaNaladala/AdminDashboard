import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Auth.css";

function Auth() {
  const [loginUrl, setloginUrl] = useState([]);

  useEffect(() => {
    async function fetchLoginUrl() {
      try {
        const response = await fetch(
          "https://learningtoolsdev.gsu.edu/admindashboard2/auth/authurl"
        );
        if (response.ok) {
          const data = await response.json();
          setloginUrl(data);
        } else {
          console.error("AuthURL request failed");
        }
      } catch (error) {
        console.error("AuthURL request error:", error);
      }
    }

    fetchLoginUrl();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="title">
          <strong>Not Authenticated</strong>
          <p>
            You are not logged in. Please{" "}
            <a rel="noopener noreferrer" href={loginUrl["logInUrl"]}>
              login to iCollege
            </a>
          </p>
          <p>
            If you are seeing this page by mistake,&nbsp;
            <a
              href="mailto:help@gsu.edu"
              target="_blank"
              rel="noreferrer"
              aria-label="Opens email to help desk in new tab"
            >
              contact the GSU Help Desk
            </a>
            , and we&apos;ll try to help you out!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auth;