import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Col,
  Card,
  Row,
} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <section className="home" id="home">
        {/* NAvbar */}
        <Navbar bg="light" expand="lg" as={"navbar"}>
          <Container>
            <Navbar.Brand href="#home">Portfolio.</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ background: "#cacaca" }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="" as={"nav"} style={{ marginLeft: "auto " }}>
                <Nav.Item as={"li"}>
                  <Nav.Link href="#home" as={"a"}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Nav.Link href="#home" as={"a"}>
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Nav.Link href="#home" as={"a"}>
                    Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Nav.Link href="#home" as={"a"}>
                    Contact
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Button
                    variant="outline-light"
                    onClick={() => console.log("Hire me")}
                  >
                    Hire Me
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Hero */}
        <Container>
          <div className="hero-text">
            <h2 style={{ fontweight: 100 }}>Hello</h2>
            <h1 style={{ letterSpacing: 3 }}>
              I am <b>Web Developer</b>
            </h1>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-telephone-fill"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </Container>
      </section>

      <section className="about" id="about" style={{ padding: "100px 0" }}>
        <Container>
          <Row>
            <Col md={4}>
              <Card className="p-2">
                <img src={process.env.PUBLIC_URL + "/images/hero.jpg"}></img>
                <p className="mt-2">
                  {" "}
                  <a href="#" className="btn btn-dark w-50">
                    Contact Me
                  </a>
                  <a href="#" className="btn btn-light w-50">
                    Download CV
                  </a>
                </p>
              </Card>
            </Col>
            <Col md={8}>
              <h2>About Me </h2>
              <p>
                <small>I am Bima Al Sandi and i am a Web Developer</small>
              </p>
              <p className="mt-2">
                Nama saya Bima Al Sandi, biasa dipanggil Bima dan sekarang saya
                berusia 24 tahun. Saya mempunyai semangat yang tinggi dan saya
                bisa bekerja secara individu maupun dalam tim. Secara pribadi
                saya sangat antusias dengan belajar. Saya adalah orang yang
                terbiasa bersosialisasi, bertemu dan bekerja sama dengan orang
                baru tidak menjadi masalah bagi saya. Selain itu saya dikenal
                sebagai seorang pendengar yang baik. Dalam beberapa tahun ini
                telah banyak bahasa pemograman yang telah saya pelajari seperti
                HTML, PHP, Java dan lain – lain
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
