import './Footer.css'
import Language from './Language';

const Footer = () => {
  return (
    <>
      <footer>

        <div className="footer">
        <p className="footer-top">Questions? Call 000-800-919-1694</p>
        
        <div className="footer-items">
         
          <div className="footer-link-main">
            <a href='#' className="footer-link">FAQ</a>
            <a href='#' className="footer-link">Cookie Preferences</a>
          </div>
          
          <div className="footer-link-main">
            <a href='#' className="footer-link">FAQHelp Centre</a>
            <a href='#' className="footer-link">Corporate Information</a>
          </div>
          
          <div className="footer-link-main">
            <a href='#' className="footer-link">Terms of Use</a>
          </div>
          
          <div className="footer-link-main">
            <a href='#' className="footer-link">Privacy</a>
          </div>
          <br />
         </div> {/*footer-item */}
          <Language/>
      </div>
      </footer>
    </>
  );
};

export default Footer;
