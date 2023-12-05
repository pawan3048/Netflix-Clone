import "./Login.css";
import Footer from "../Footer_Comp/Footer";

const Login = () => {
  return (
    <>
      <div className="login-image">
      <span className="netflix-logo">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"/>
      </span>
        <div className="login">
          <div className="hybrid-login">
            <h1 className="login-h1">Sign In</h1>
            <div className="login-form">
              <input
                type="email"
                name="email"
                id="login-email"
                placeholder="Email or phone number"
              />
              <br />
              <input
                type="password"
                id="login-password"
                placeholder="password"
              />
              <br />
              <button>
                <b>Sign In</b>
              </button>
              <br />
              <div className="help-sec" style={{ position: "relative" }}>
                <input type="checkbox" style={{ marginTop: "4px" }} />
                <label>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                  >
                    Remember me
                  </span>
                </label>
                <a href="#" className="need-help">
                  Need to help?
                </a>
              </div>
            </div>
            <br />
            <div className="login-content">
              <div className="signup-link">
                <span style={{ color: "gray" }}>New to Netflix?</span>
                <a href="#">Sign up now.</a>
              </div>

              <div className="recap">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.<a href="">Learn more.</a>
              </div>
            </div>
          </div>
          {/* hybrid */}
        </div>
          <Footer />
      </div>
    </>
  );
};

export default Login;
