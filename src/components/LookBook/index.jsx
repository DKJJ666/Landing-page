function LookBook() {
  const lookbookItems = [
    { id: 1, title: 'Look 1' },
    { id: 2, title: 'Look 2' },
    { id: 3, title: 'Look 3' },
    { id: 4, title: 'Look 4' },
  ];

  return (
    <section className="lookbook">
      <div className="lookbook-header">
        <h2>LOOK BOOK</h2>
      </div>
      <div className="lookbook-container">
        <div className="lookbook-main">
          <div className="lookbook-featured">GOLF</div>
        </div>
        <div className="lookbook-gallery">
          {lookbookItems.map(item => (
            <div key={item.id} className="lookbook-item">
              <div className="placeholder-image">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="retail-text">RETAIL RETAIL RETAIL RETAIL RETAIL</p>
    </section>
  );
}

export default LookBook;
