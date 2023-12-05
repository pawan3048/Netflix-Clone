import React, {useState} from "react";
import './HistoryToggle.css'

const HistoryToggle = () => {
  //toggle History of Netflix
  const [isOpenone, setIsOpenone] = useState(false);
  const [isOpentwo, setIsOpentwo] = useState(false);
  const [isOpenthree, setIsOpenthree] = useState(false);
  const [isOpenfour, setIsOpenfour] = useState(false);
  const [isOpenfive, setIsOpenfive] = useState(false);
  const [isOpensix, setIsOpensix] = useState(false);
  return (
    <>
      <div className="know-about-netflix">
        <h1>Frequently Asked Questions</h1>

        <div className="toggle one">
          <div
            className="toggle-header"
            onClick={() => setIsOpenone(!isOpenone)}
          >
            What is Netflix?
            <span className="toggle-btn">+</span>
          </div>
          {isOpenone ? (
            <div className="toggle-content">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. <br />
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
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
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
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. <br /> <br />
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
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
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
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
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default HistoryToggle;
