import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="ready">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="login-main">
          <input type="email" placeholder="Email address" id="email" />
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
