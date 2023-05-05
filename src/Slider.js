const Slider = () => {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="true" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="assets/images/company-2.jpg" className="d-block w-100" alt="Company Image" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="font-tillana fw-bold">ABC Company</h1>
                        <p>Our company provides an effective and efficient products and services.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="assets/images/company-1.jpg" className="d-block w-100" alt="Company Image" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="font-tillana fw-bold">Slider 2 Caption</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="assets/images/company-3.jpg" className="d-block w-100" alt="Company Image" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="font-tillana fw-bold">Slider 3 Caption</h1>
                        <p>Nam metus arcu, imperdiet non porta eu, pharetra vulputate nulla.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;