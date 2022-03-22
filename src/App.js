import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";
import heroImg from "./assets/images/hero.jpg";
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
                <Card.Img variant="top" src={heroImg} />
                <p className="mt-2 m-auto">
                  <a href="#" className="btn btn-dark mx-1">
                    Contact Me
                  </a>
                  <a href="#" className="btn btn-outline-dark">
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
              <Row>
                <Col md={6}>
                  <details>
                    <summary>Programming Language</summary>
                    <ul>
                      <li>HTML</li>
                      <li>PHP</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                    </ul>
                  </details>
                  <details>
                    <summary>CSS Framework</summary>
                    <ul>
                      <li>Bootstrap</li>
                      <li>Semantic UI</li>
                      <li>Tailwind</li>
                    </ul>
                  </details>
                  <details>
                    <summary>JavaScript Framework</summary>
                    <ul>
                      <li>React JS</li>
                    </ul>
                  </details>
                </Col>
                <Col md={6}>
                  <details>
                    <summary>PHP Framework</summary>
                    <ul>
                      <li>Codeigniter</li>
                    </ul>
                  </details>
                  <details>
                    <summary>Version Control</summary>
                    <ul>
                      <li>Git</li>
                      <li>Github UI</li>
                    </ul>
                  </details>
                  <details>
                    <summary>Application Design</summary>
                    <ul>
                      <li>Figma</li>
                    </ul>
                  </details>
                </Col>
              </Row>
              <div className="mt-3">
                <h3>Work Experience</h3>
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Subtitle>Maret 2021 - Juli 2021</Card.Subtitle>
                    <Card.Title>
                      <b>
                        {" "}
                        CV Cakra Medical System <i>Freelance</i>{" "}
                      </b>
                      <br />
                      <small>Web Programming</small>
                    </Card.Title>
                    <Card.Text>
                      Membangun website cakramedicalstsyem.com yang merupan
                      company profile dan legalkonsulid.com yang merupakan
                      sebuah website yang memberikan pelayana hukum
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="project bg-light"
        id="project"
        style={{ padding: "100px 0" }}
      >
        <Container>
          <h2 align="center">My Project.</h2>
          <Row>
            <Col md={4}>
              <Card as="card" className="mt-2">
                <i class="bi bi-file-earmark-code"></i>
                <h3>
                  <a href="#">Legal Konsul ID</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  ullam ipsam fuga, odio aliquam molestiae, impedit ipsa
                  officiis, suscipit dolores dignissimos maiores. Sint
                  necessitatibus enim recusandae dolorem quos, error illum.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card as="card" className="mt-2">
                <i class="bi bi-file-earmark-code"></i>
                <h3>
                  <a href="#">Cakra Medical System</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  ullam ipsam fuga, odio aliquam molestiae, impedit ipsa
                  officiis, suscipit dolores dignissimos maiores. Sint
                  necessitatibus enim recusandae dolorem quos, error illum.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card as="card" className="mt-2">
                <i class="bi bi-file-earmark-code"></i>
                <h3>
                  <a href="#">E-commerce</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  ullam ipsam fuga, odio aliquam molestiae, impedit ipsa
                  officiis, suscipit dolores dignissimos maiores. Sint
                  necessitatibus enim recusandae dolorem quos, error illum.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card as="card" className="mt-2">
                <i class="bi bi-file-earmark-code"></i>
                <h3>
                  <a href="#">Aplikasi Web Sistem Pakar</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  ullam ipsam fuga, odio aliquam molestiae, impedit ipsa
                  officiis, suscipit dolores dignissimos maiores. Sint
                  necessitatibus enim recusandae dolorem quos, error illum.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card as="card" className="mt-2">
                <i class="bi bi-file-earmark-code"></i>
                <h3>
                  <a href="#">Aplikasi Web Sistem Pendukung Keputusan</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  ullam ipsam fuga, odio aliquam molestiae, impedit ipsa
                  officiis, suscipit dolores dignissimos maiores. Sint
                  necessitatibus enim recusandae dolorem quos, error illum.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card as="card" className="mt-2">
                <i class="bi bi-file-earmark-code"></i>
                <h3>
                  <a href="#">Aplikasi Point of Sale</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  ullam ipsam fuga, odio aliquam molestiae, impedit ipsa
                  officiis, suscipit dolores dignissimos maiores. Sint
                  necessitatibus enim recusandae dolorem quos, error illum.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="contact bg-dark text-light"
        id="contact"
        style={{ padding: "100px 0" }}
      >
        <Container>
          <h2 className="mb-5">Contact.</h2>
          <p>
            <i class="bi bi-phone"></i>
            082387838046
          </p>
          <p>
            <i class="bi bi-envelope"></i>bimaalsandi19@gmail.com
          </p>
          <p>
            <i className="bi bi-linkedin"></i>-
          </p>
          <p>
            <i className="bi bi-instagram"></i>@bima_alsandi
          </p>
          <p>
            <i className="bi bi-facebook"></i>-
          </p>
        </Container>
      </section>
    </div>
  );
}

export default App;
