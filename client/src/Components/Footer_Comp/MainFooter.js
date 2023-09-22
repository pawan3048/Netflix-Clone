import "./MainFooter.css";
import Language from "./Language";

const MainFooter = () => {
  return (
    <>
      <div className="main-footer">

        <div className="mn-ft-wp">

          <div className="call-item">
            <p>Questions? Call 000-800-919-1694</p>
          </div>

          <div className="footer-items">
            <ul className="inner-main">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Media Centre</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
            <ul className="inner-main">
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
            <ul className="inner-main">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>{/* footer items */}
          <Language />
          <p className="default-ltr">Netflix India</p>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
