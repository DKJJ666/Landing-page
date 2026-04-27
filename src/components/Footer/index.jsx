import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <Container className="py-5">
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3">🚀 Landing</h5>
                        <p className="text-muted">
                            Sua página de landing profissional e moderna, construída com React e Bootstrap.
                        </p>
                    </Col>

                    <Col md={4} className="mb-4 mb-md-0">
    <h5 className="fw-bold mb-3">Redes Sociais</h5>
    <div>
        <a href="#" className="social-link" title="Facebook">📘Facebook</a>
        ...
    </div>
</Col>


                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Links Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="footer-link">Home</a></li>
                            <li><a href="#features" className="footer-link">Features</a></li>
                            <li><a href="#tour" className="footer-link">Tour</a></li>
                            <li><a href="#contact" className="footer-link">Contato</a></li>
                        </ul>
                    </Col>
                </Row>

                <hr className="my-4" />

                <Row>
                    <Col md={6}>
                        <p className="text-muted mb-0">
                            &copy; 2024 Landing Page. Todos os direitos reservados.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <p className="text-muted mb-0">
                            <a href="#privacy" className="footer-link">Privacidade</a> • 
                            <a href="#terms" className="footer-link"> Termos</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
