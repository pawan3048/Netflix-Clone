const Language = () => {
  return (
    <>
        <div className="lang">
            <select name="language" style={{borderRadius:'5px', fontSize:'17px',
             backgroundColor:'#000', color:'#fff', margin:'25px 0', padding:'5px 25px'}}>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
    </>
  );
}

export default Language;
