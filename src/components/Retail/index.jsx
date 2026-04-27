function Carrosel2() {
    const texto = " RETAIL  RETAIL  RETAIL  RETAIL  RETAIL  RETAIL  ";
    
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span>{texto}{texto}{texto}</span>
            </div>
        </div>
    );
}

export default Carrosel2;