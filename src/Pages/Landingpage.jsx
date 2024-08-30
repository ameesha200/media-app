import React from 'react'
import {Button, Card, Col,Row} from'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpages() {
  const navigateByUrl=useNavigate()
  return (
    <>
<Row className="mt-5 algin-item-center justify-content-betwwen w-100">
  <Col>
  <Col Ig={5}>
<h1 style={{color:"blueviolet",fontSize:"40px"}}> Welcome to <span
className='text-warning'>Media-player</span></h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis, repellendus reiciendis praesentium perferendis veritatis et consequuntur eaque porro sapiente eligendi accusantium officia molestiae exercitationem repellat quos aliquid alias saepe!</p>
<Button onClick={()=>navigateByUrl('/home')} className='btn btn-info'>Get Started</Button>
</Col>
</Col>
<Col Ig={5}>
<img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt=""width="600px" height="320px"/>
{/* </col> */}
</Col>
{/* </Col> */}
</Row>
<div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h3 className='text-center'>Features</h3>
      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <Card style={{ width: '18rem' }} className='bg-info p-4'>
      <Card.Img variant="top" height={'250px'} width={'300px'} src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }} className='bg-info p-4'>
      <Card.Img variant="top" height={'250px'} width={'300px'} src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }} className='bg-info p-4'>
      <Card.Img variant="top" height={'250px'} width={'300px'} src="https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
     </div>
 {/* <div className="container mb-5 mt-5 d-flex flex-column algin-items-center justify-content-center w-100">
<h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>
<div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
<Card style={{ width: '18rem' }} className='bg-info'>
<Card.Img variant="top" height={'300px'} width={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ARCU8eVSz6RhE-SFNYca27sqPdcKqa1_WA&s"/>

      <Card.Body>
        <Card.Title>managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


<Card style={{ width: '18rem' }} className='bg-info'>
<Card.Img variant="top" height={'300px'} width={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN56SXc1da2DuzfX25DQks4U0H8bNw4Y4TKAhbDZvokKybxi35xlWnqIOibLAYs8oN4Q&usqp=CAU"/>

      <Card.Body>
        <Card.Title>Categorized videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

<Card style={{ width: '18rem' }} className='bg-info'>
<Card.Img variant="top" height={'300px'} width={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ARCU8eVSz6RhE-SFNYca27sqPdcKqa1_WA&s"/>

      <Card.Body>
        <Card.Title> Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
</div> */}
<div className='container border rounded p-4 border-light d-flex justify-content-center algin-items-center'>
<div className="col-Ig-5">
  <h4 className='text-warning'>Simple,Powerful & Fast</h4>
  <h6 className='mb-5 mt-4'> <span className='text-warning'>play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam ipsum aut harum alias incidunt at, eum perferendis omnis molestiae ea libero consequatur vitae sint delectus provident voluptatem dicta illo.</h6>
  
  <h6 className='mb-5 mt-4'> <span className='text-warning'>categorize videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam ipsum aut harum alias incidunt at, eum perferendis omnis molestiae ea libero consequatur vitae sint delectus provident voluptatem dicta illo.</h6>
  
  <h6 className='mb-5 mt-4'> <span className='text-warning'>Managing videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam ipsum aut harum alias incidunt at, eum perferendis omnis molestiae ea libero consequatur vitae sint delectus provident voluptatem dicta illo.</h6>
  </div>
  

  <div className='col-Ig-5 ms-5'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/hHuG7FIKgtc?si=Gmp5aWrimYOueknc" 
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

    </>
  )
}

export default Landingpages