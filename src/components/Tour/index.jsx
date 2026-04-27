function Carrosel() {
    const texto = " TOUR  TOUR  TOUR  TOUR  TOUR  TOUR  ";
    
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span>{texto}{texto}{texto}</span>
            </div>
        </div>
    );
}

export default Carrosel;