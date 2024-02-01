import Carousel from "react-bootstrap/Carousel";

function Corusels() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery03.jpg"
          alt="first-slide"
          className="cou-img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg"
          alt="second-image"
          className="cou-img"
        />
        <Carousel.Caption>
          <div className="carosel-1">
            <p>Upto 80% off for this special season.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?w=996&t=st=1706796456~exp=1706797056~hmac=afc4f02330d6b2d88ecaae2adf4e5e16fde7c87f625b0575762dfa8a7b505296"
          alt="third-img"
          className="cou-img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery01.jpg"
          alt="third-img"
          className="cou-img"
        />
        <Carousel.Caption>
          <h5 className="carousel-caption">Shop like never before</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corusels;
