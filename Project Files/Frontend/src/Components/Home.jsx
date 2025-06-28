import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Reusable navbar
import Footer from './Footer'; // Reusable footer
import './Home.css';

const bestSellers = [
  {
    title: "PEDDA BALA SIKSHA",
    image: "https://logilitelugubooks.com/assets/img/books/vijeta-vari-pedda-bala-siksha-719.jpg",
  },
  {
    title: 'THINK AND GROW RICH',
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg"
  },
  {
    title: 'YOU ONLY LIVE ONCE',
    image: 'https://m.media-amazon.com/images/I/71dNsRuYL7L._SL1500_.jpg',
  },
  {
    title: 'KILLING THE WITCHES',
    image: 'https://m.media-amazon.com/images/I/81fOUtK-uOL.jpg',
  },
];

const recommendations = [
  {
    title: 'DAYS AT THE MORISAKI BOOKSHOP',
    image: 'https://m.media-amazon.com/images/I/71xxddxprOL._SL1250_.jpg',
  },
  {
    title: 'DANDAKARANYA',
    image: 'https://m.media-amazon.com/images/I/71EGVklOFCL._SL1500_.jpg',
  },
  {
    title: 'THE ANSWER IS NO',
    image: "https://m.media-amazon.com/images/I/91wMNinEhhL._SL1500_.jpg",
  },
  {
    title: 'THE ALCHEMIST',
    image: 'https://schoolworkhelper.net/wp-content/uploads/2021/10/The-Alchemist.jpg',
  },
];

const Home = () => {
  return (
    <>
      <NavbarComponent />

      <Container className="mt-5 text-center">
        <h1 className="mb-4">Best Sellers</h1>
        <Row>
          {bestSellers.map((book, index) => (
            <Col key={index} sm={6} md={3} className="mb-4">
              <Card>
                <div className="image-wrapper">
                  <Card.Img variant="top" src={book.image} />
                </div>
                <Card.Body>
                  <Card.Text style={{ fontWeight: 'bold' }}>{book.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h1 className="mt-5 mb-4">Top Recommendations</h1>
        <Row>
          {recommendations.map((book, index) => (
            <Col key={index} sm={6} md={3} className="mb-4">
              <Card>
                <div className="image-wrapper">
                  <Card.Img variant="top" src={book.image} />
                </div>
                <Card.Body>
                  <Card.Text style={{ fontWeight: 'bold' }}>{book.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
