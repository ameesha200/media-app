import { Button,FloatingLabel,Modal,Form } from 'react-bootstrap';
import React,{useState} from 'react';
import {uploadvideoAPI} from '../../services/allApi'
function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo]=useState({id:"",name:"",url:"",link:""})
  console.log(uploadVideo);

  const getYoutubeLink =(e)=>{
    const {value}= e.target
    if(value.includes("v=")){
      let VID = value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${VID}`);
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }
  

  const handleAdd = async (e)=>{
    const {id,name,url,link}=uploadVideo

    if(!id || !name|| !url ||!link){
      alert('please fill the missing fields')
    }else{
      //video upload to json server

   const result  = await uploadvideoAPI(uploadVideo)
   console.log(result);
   if(result.status>=200 && result.status<=300){
    alert("video uploaded")
    handleClose()
    //empty fields 
    setUploadVideo({
      id:"",name:"",url:"",link:""

    })
    setUploadVideoResponse(result.data)
   }else{
    alert(result.message)
   }
    }
  }




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex mb-5 mt-5 align-items-center'>
      <h2>Upload video</h2>
      <button  onClick={handleShow} className='btn'><i class="fa-solid fa-upload fa-beat-fade"></i></button>

    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
         <FloatingLabel
        controlId="floatingInput"
        label="id"
        className="mb-3"
      >

        <Form.Control type="number" placeholder="Enter Video id" onChange={(e)=>setUploadVideo({...
uploadVideo,id:e.target.value })} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name" className='mb-3'>
        <Form.Control type="text" placeholder="enter video name" onChange={(e)=>setUploadVideo({...
uploadVideo,name:e.target.value })} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Image URL" className='mb-3'>
        <Form.Control type="text" placeholder="Image URL" 
        onChange={(e)=>setUploadVideo({... uploadVideo,url:e.target.value })}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video URL" className='mb-3'>
        <Form.Control type="text" placeholder="enter video URL"
        onChange={getYoutubeLink} />
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
