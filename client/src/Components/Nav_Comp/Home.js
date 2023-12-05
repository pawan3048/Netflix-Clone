import React from "react";
import MainFooter from "../Footer_Comp/MainFooter";
import Signup from "./Signup";
import Language from "../Footer_Comp/Language";
import "./Home.css";
import { Link } from "react-router-dom";
import HistoryToggle from "./HistoryToggle";

const Home = () => {
  return (
    <>
      <div className="Home-Wrapper">
        <div className="black-shadow">
          <div className="before-login">
            <div className="bf-log-logo">
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                alt="Netflix"
                // src='https://about.netflix.com/images/logo.png'
              />
            </div>
            <div className="lang_and_sign_div">
              <div className="language">
                <Language />
              </div>
              <div className="signin">
                <button className="signin-mini">
                  <Link to="/signin">Sign In</Link>
                </button>
              </div>
            </div>
            <div className="center-div">
              <div className="unlimited main-text">
                Unlimited movies, TV shows and more
              </div>
              <div className="watch main-text">
                Watch anywhere. Cancel anytime.
              </div>
              <Signup />
            </div>{" "}
            {/* center-div */}
          </div>{" "}
          {/* before login */}
        </div>{" "}
        {/* black Shadow */}
        <hr className="gray-horizontal-strip" />
        <div className="black-wrap">
          <div className="enjoy-wrap text-div one">
            <ul>
              <li>
                <div className="h1 text">Enjoy on your TV</div>
              </li>
              <li>
                <div className="h3 text">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast,
                  <br /> Apple TV, Blu-ray players and more.
                </div>
              </li>
            </ul>
          </div>

          <div className="enjoy-wrap one">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              data-uia="nmhp-card-animation-asset-image"
              className="default-ltr-cache-1d3w5wq"
              alt="tv-add"
            />
          </div>
        </div>
        {/* Black-wrap */}
        <hr className="gray-horizontal-strip" />
        <div className="black-wrap">
          <div className="enjoy-wrap two">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="tv-add"
            />
          </div>

          <div className="enjoy-wrap text-div two">
            <ul>
              <li>
                <div className="h1 text">
                  Download your shows to watch offline
                </div>
              </li>
              <li>
                <div className="h3 text">
                  Save your favourites easily and always have <br />
                  something to watch.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="gray-horizontal-strip" />
        <div className="black-wrap three">
          <div className="enjoy-wrap text-div three">
            <ul>
              <li>
                <div className="h1 text">Watch everywhere</div>
              </li>
              <li>
                <div className="h3 text">
                  Stream unlimited movies and TV shows on your <br />
                  phone, tablet, laptop, and TV.
                </div>
              </li>
            </ul>
          </div>

          <div className="enjoy-wrap three">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="Apple-Desktop-add"
            />
          </div>
        </div>
        <hr className="gray-horizontal-strip" />
        <div className="black-wrap">
          <div className="enjoy-wrap four">
            <img
              src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
              alt="Children-add"
            />
          </div>

          <div className="enjoy-wrap text-div four">
            <ul>
              <li>
                <div className="h1 text">Create profiles for kids</div>
              </li>
              <li>
                <div className="h3 text">
                  Send children on adventures with their favourite <br />
                  characters in a space made just for them—free with <br />
                  your membership.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="gray-horizontal-strip" />
        <HistoryToggle></HistoryToggle>
        {/* Know About Netflix */}
        <Signup />
        <hr className="gray-horizontal-strip" />
        <MainFooter />
        {/* toggle wrapper */}
      </div>
      {/*Main-Wrapper*/}
    </>
  );
};

export default Home;
