function OurStore() {
  const products = [
    { id: 1, name: 'Produto 1', icon: '👕' },
    { id: 2, name: 'Produto 2', icon: '👜' },
    { id: 3, name: 'Produto 3', icon: '👕' },
    { id: 4, name: 'Produto 4', icon: '👢' },
    { id: 5, name: 'Produto 5', icon: '👟' },
    { id: 6, name: 'Produto 6', icon: '👖' },
    { id: 7, name: 'Produto 7', icon: '🧢' },
    { id: 8, name: 'Produto 8', icon: '📸' },
  ];

  return (
    <section className="our-store">
      <div className="store-header">
        <h2>⭐ OUR STORE ⭐</h2>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurStore;
