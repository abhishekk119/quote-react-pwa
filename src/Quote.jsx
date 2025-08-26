function Quotes({ Quotes, Author, updatequotes }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="quote">
        <p>{Quotes}</p>
        <p>{Author}</p>
        </div> 
        <button className="newqtbtn" onClick={updatequotes}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quotes;
