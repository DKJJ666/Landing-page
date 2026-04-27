function Locations() {
  const locations = [
    {
      id: 1,
      city: 'SYDNEY',
      address: 'GOLF WANG SYDNEY\n58 OXFORD STREET\nDARLINGHURST, NSW 2010\nON GADIGAL LAND\nAUSTRALIA',
      hours: 'STORE HOURS:\nMONDAY - THURSDAY\n11AM - 6PM\nFRIDAY - SATURDAY\n10AM - 6PM\nSUNDAY\n11AM - 5PM'
    },
    {
      id: 2,
      city: 'LONDON',
      address: 'Coming Soon'
    },
    {
      id: 3,
      city: 'NEW YORK',
      address: 'Coming Soon'
    },
    {
      id: 4,
      city: 'LOS ANGELES',
      address: 'Coming Soon'
    },
  ];

  return (
    <section className="locations">
      <div className="locations-header">
        <p>RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL RETAIL</p>
      </div>
      
      <div className="locations-nav">
        {locations.map(location => (
          <a key={location.id} href="#" className="location-link">{location.city}</a>
        ))}
      </div>

      <div className="locations-container">
        <div className="location-info">
          <p>{locations[0].address}</p>
          <p>{locations[0].hours}</p>
        </div>
        <div className="location-image">
          <div className="star-placeholder">⭐</div>
        </div>
      </div>

      <div className="footer-info">
        <div className="social-links">
          <a href="#">X</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">TikTok</a>
        </div>
        <div className="explore-links">
          <p>Explore</p>
          <a href="#">GOLF WANG</a>
          <a href="#">TOUR</a>
          <a href="#">OUR STORE</a>
          <a href="#">BOOK</a>
          <a href="#">RETAIL</a>
        </div>
      </div>
    </section>
  );
}

export default Locations;
