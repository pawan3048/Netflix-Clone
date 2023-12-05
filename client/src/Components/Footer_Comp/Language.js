import './Language.css'
const Language = () => {
  return (
    <>
        <div className="lang">
            <select name="language" className="lang_select">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
    </>
  );
}

export default Language;
