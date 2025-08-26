function Quotes({ Quotes, Author, updatequotes }) {
  return (
    <div className="wrapper">
      <div className="container">
        <p>{Quotes}</p>
        <p>{Author}</p>
        <button className="newqtbtn" onClick={updatequotes}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quotes;
