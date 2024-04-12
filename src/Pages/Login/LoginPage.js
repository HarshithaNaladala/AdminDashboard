import { Navbar, Footer } from "../../Components";
import useLoginUrl from "../../Hooks/useLoginUrl";
import "./LoginPage.css";

export default function LoginPage() {
  const loginUrl = useLoginUrl();

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="title">
          <strong>Not Authenticated</strong>
          <p>
            You are not logged in. Please{" "}
            <a rel="noopener noreferrer" href={loginUrl}>
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
