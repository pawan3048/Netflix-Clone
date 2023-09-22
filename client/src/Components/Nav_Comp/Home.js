import React, { useState } from "react";
import "./Home.css";
import Login from "./Login";

import MainFooter from "../Footer_Comp/MainFooter";
import Signup from "./Signup"
import Language from "../Footer_Comp/Language";

const Home = () => {
  //toggle History of Netflix
  const [isOpenone, setIsOpenone] = useState(false);
  const [isOpentwo, setIsOpentwo] = useState(false);
  const [isOpenthree, setIsOpenthree] = useState(false);
  const [isOpenfour, setIsOpenfour] = useState(false);
  const [isOpenfive, setIsOpenfive] = useState(false);
  const [isOpensix, setIsOpensix] = useState(false);

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
            <div className="choose-lang">
              <Language />
            </div>
            <button className="singin-mini">
              <a href="/login">Sign In</a>
            </button>
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
        {/* uppar image part */}
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
        <div className="know-about-netflix">
          <h1>Frequently Asked Questions</h1>

          <div className="toggle one">
            <div
              className="toggle-header"
              onClick={() => setIsOpenone(!isOpenone)}
            >
              What is Netflix?<span className="toggle-btn">+</span>
            </div>
            {isOpenone ? (
              <div className="toggle-content">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </div>
            ) : null}
          </div>

          <div className="toggle two">
            <div
              className="toggle-header"
              onClick={() => setIsOpentwo(!isOpentwo)}
            >
              How much does Netflix cost?<span className="toggle-btn">+</span>
            </div>
            {isOpentwo ? (
              <div className="toggle-content">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </div>
            ) : null}
          </div>

          <div className="toggle three">
            <div
              className="toggle-header"
              onClick={() => setIsOpenthree(!isOpenthree)}
            >
              Where can I watch?<span className="toggle-btn">+</span>
            </div>
            {isOpenthree ? (
              <div className="toggle-content">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. <br /> <br />
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </div>
            ) : null}
          </div>

          <div className="toggle four">
            <div
              className="toggle-header"
              onClick={() => setIsOpenfour(!isOpenfour)}
            >
              How do I cancel?<span className="toggle-btn">+</span>
            </div>
            {isOpenfour ? (
              <div className="toggle-content">
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            ) : null}
          </div>

          <div className="toggle five">
            <div
              className="toggle-header"
              onClick={() => setIsOpenfive(!isOpenfive)}
            >
              What can I watch on Netflix?<span className="toggle-btn">+</span>
            </div>
            {isOpenfive ? (
              <div className="toggle-content">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            ) : null}
          </div>

          <div className="toggle six">
            <div
              className="toggle-header"
              onClick={() => setIsOpensix(!isOpensix)}
            >
              Is Netflix good for kids?<span className="toggle-btn">+</span>
            </div>
            {isOpensix ? (
              <div className="toggle-content">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space. <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </div>
            ) : null}
          </div>
        </div>{" "}
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
