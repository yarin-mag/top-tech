import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaFacebookMessenger,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBars,
} from "react-icons/fa";
import Slider from "react-slick";
import "./App.css";

import pictureA from 'assets/1.png'
import pictureB from 'assets/2.png'
import pictureC from 'assets/3.png'

// Helper function to check if the user is on a mobile device
const isMobileDevice = () => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

const handleNavigateClick = () => {
  const destinationAddress = "בית הפועלים 6 רחובות";
  const encodedAddress = encodeURIComponent(destinationAddress);

  if (isMobileDevice()) {
    window.location.href = `https://maps.google.com/maps?daddr=${encodedAddress}`;
  } else {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      "_blank"
    );
  }
};

function App() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="App">
      <Navbar expand="lg" bg="light" className="py-3">
        <Container>
          <Navbar.Brand href="#">מעבדת שיניים טופ-טק</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="tel:+972544933286">
                <Button variant="outline-primary" className="nav-btn">
                  <FaPhoneAlt /> התקשר
                </Button>
              </Nav.Link>
              <Nav.Link href="https://m.me/elimagdaci" target="_blank">
                <Button variant="outline-primary" className="nav-btn">
                  <FaFacebookMessenger /> מסנג'ר
                </Button>
              </Nav.Link>
              <Nav.Link href="https://wa.me/+972544933286" target="_blank">
                <Button variant="outline-success" className="nav-btn">
                  <FaWhatsapp /> ווטסאפ
                </Button>
              </Nav.Link>
              <Nav.Link onClick={handleNavigateClick}>
                <Button variant="outline-danger" className="nav-btn">
                  <FaMapMarkerAlt /> נווט
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header Section */}
      <Container className="text-center my-5">
        <h1>מעבדת שיניים טופ-טק - תותבות שיניים מקצועיות ברחובות</h1>
        <p className="lead">!מחפשים תותבת איכותית? הגעתם אל המקום הנכון</p>
      </Container>

      {/* Image Carousel */}
      <Container className="my-5">
        <Slider {...carouselSettings}>
          <div>
            <img
              src={pictureA}
              alt="עבודה 1"
              className="d-block w-100"
              style={{ objectFit: 'scale-down' }}
            />
          </div>
          <div>
            <img
              src={pictureB}
              alt="עבודה 2"
              className="d-block w-100"
              style={{ objectFit: 'scale-down' }}
            />
          </div>
          <div>
            <img
              src={pictureC}
              alt="עבודה 3"
              className="d-block w-100"
              style={{ objectFit: 'scale-down' }}
            />
          </div>
        </Slider>
      </Container>

      {/* Recommendations Section */}
      <Container className="my-5" dir="rtl">
        <h2 className="text-center mb-4">מה הלקוחות שלנו אומרים</h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="recommendation p-3 shadow-sm">
              <p>"תודה שעזרת לי לחייך!"</p>
              <h5>- אילה בר</h5>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="recommendation p-3 shadow-sm">
              <p>"שירות ומקצוענות מעולים!"</p>
              <h5>- עמי טל</h5>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="recommendation p-3 shadow-sm">
              <p>"היום אני מחייכת בגאווה!"</p>
              <h5>פסיה שמעוני</h5>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Google Maps Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">המיקום שלנו</h2>
        <div className="map-responsive">
          <iframe
            title="מיקום מעבדת שיניים"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.3444075907546!2d34.81271352366255!3d31.897238474043718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7047e56f66d%3A0xfff1297ee1fefca1!2z15HXmdeqINeU16TXldei15zXmdedIDYsINeo15fXldeR15XXqg!5e0!3m2!1siw!2sil!4v1726831833297!5m2!1siw!2sil"
            width="300"
            height="225"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </Container>

      <footer className="bg-light text-center py-3">
        &copy; {new Date().getFullYear()} .מעבדת שיניים טופ-טק. כל הזכויות שמורות
      </footer>
    </div>
  );
}

export default App;
