function Quotes({ Quotes, Author, updatequotes }) {
  return (
    <div className="wrapper">
      <div className="container">
        <p className="quote-text">{Quotes}</p>
        <p className="author-text">{Author}</p>
        <button className="newqtbtn" onClick={updatequotes}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quotes;
