const NoPage = () => {
  return (
    <>
      <div
        className="404_page"
        style={{
          marginLeft: "0",
          width: "100%",
          height: "100vh",
          position: "absolute",
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/003/559/330/non_2x/abstract-background-with-gradient-blue-bubble-free-vector.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ position: "relative", top: "32%" }}>
          <h1 style={{ textAlign: "center", fontSize: "60px", color: "#fff", fontWeight: '600' }}>
            Lost your way?
          </h1>
          <p style={{ textAlign: "center", fontSize: "25px" }}>
            Sorry, we can't find your page. You'll find load to explore on the
            home page.
          </p>
          <button
            style={{
              padding: "15px 30px",
              display: "block",
              margin: "auto",
              fontSize: "18px",
              borderRadius: "5px",
              border: "none",
              fontWeight: "500",
            }}
          >
            <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
              Netflix Home
            </a>
          </button>
          <p
            className="error"
            style={{ textAlign: "center", color: "#fff", fontSize: "25px" }}
          >
            Error Code <b>NSES-404</b>
          </p>
        </div>
      </div>
    </>
  );
};
export default NoPage;
