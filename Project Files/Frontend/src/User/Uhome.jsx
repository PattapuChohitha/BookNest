import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'


const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
    <div>
      <Unavbar/>
      
      <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Best Seller</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://logilitelugubooks.com/assets/img/books/vijeta-vari-pedda-bala-siksha-719.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>PEDDA BALA SIKSHA </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>TNINK AND<br/> GROW RICH</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71dNsRuYL7L._SL1500_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>YOU ONLY LIVE ONCE</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'> KILLING THE WITCHES</Card.Title>
    </Card.Body>
  </Card>
</div>

  </div>
  <br/>
  <br/>
  <br/>
  <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Top Recomendation</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
   <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71xxddxprOL._SL1250_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>DAYS AT THE<br/>MORISAKI BOOKSHOP </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71EGVklOFCL._SL1500_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>DANDAKARANYA </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91wMNinEhhL._SL1500_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE ANSWER IS NO</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://schoolworkhelper.net/wp-content/uploads/2021/10/The-Alchemist.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE ALCHEMIST</Card.Title>
    </Card.Body>
  </Card>
</div>
</div>
</div>
      </div>
      <br/>
     <Footer/>
          </div>
  )
}

export default Uhome