import React ,{useState} from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBRipple
} from 'mdb-react-ui-kit';
import '../Assets/Styles/Experience.css';

function Experience() {
    const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
    <MDBContainer className='expMain'>
    <MDBContainer>
        <MDBRow>
            <h1 className='expTopic'>Offers that bring you peace of mind</h1>
            <p className='expTopicSub'>Find the perfect stay with our exclusive deals.</p>
        </MDBRow>
    </MDBContainer>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
      <MDBCard className='h-100' style={{position:'relative'}}>
      <MDBCardImage
            src='https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=1536&rh=1002'
            alt='...'
            position='top'
          />
          <div className='darkOverlay' onClick={toggleShow}>
            <p className='darkOverlayText'>Book Ahead & Save Up to 17%</p>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='h-100' style={{position:'relative'}}>
      <MDBCardImage
            src='https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=1536&rh=1002'
            alt='...'
            position='top'
          />
          <div className='darkOverlay' onClick={toggleShow}>
            <p className='darkOverlayText'>Multiply Your Points</p>
          </div>
        </MDBCard>
        </MDBCol>

      <MDBCol>
      <MDBCard className='h-100' style={{position:'relative'}}>
      <MDBCardImage
            src='https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=1536&rh=1002'
            alt='...'
            position='top'
          />
          <div className='darkOverlay' onClick={toggleShow}>
            <p className='darkOverlayText'>Free Bonus Points at New Hotels</p>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='h-100' style={{position:'relative'}}>
      <MDBCardImage
            src='https://www.hilton.com/im/en/NoHotel/16156655/shutterstock-673616299.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=1536&rh=1002'
            alt='...'
            position='top'
          />
          <div className='darkOverlay' onClick={toggleShow}>
            <p className='darkOverlayText'>Park & Stay with Hilton</p>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard className='h-100' style={{position:'relative'}}>
      <MDBCardImage
            src='https://www.hilton.com/im/en/NoHotel/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=977&gravity=NorthWest&xposition=0&yposition=11&rw=1536&rh=1002'
            alt='...'
            position='top'
          />
          <div className='darkOverlay' onClick={toggleShow}>
            <p className='darkOverlayText'>Make Your Stay Even Sweeter</p>
          </div>
        </MDBCard>
        </MDBCol>

      <MDBCol>
      <MDBCard className='h-100' style={{position:'relative',borderRadius:'0%'}}>
      <MDBCardImage
            src='https://www.hilton.com/im/en/MultiHotel/7637864/african-american-father-and-daughter-having-breakfast.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=37&rw=1536&rh=1002'
            alt='...'
            position='top'
          />
          <div className='darkOverlay' onClick={toggleShow}>
            <p className='darkOverlayText'>Breakfast Included Package</p>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>

 {/* Model View */}

    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1' >
    <MDBModalDialog size="md">
        <MDBModalContent>
        <MDBModalHeader>
            <MDBModalTitle style={{fontSize:'16px'}}>Book Ahead & Save Up to 17%</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=1536&rh=1002' fluid alt='...' />
            
        </MDBRipple>
        <MDBCardBody>
        <h1 className='modelTopic'>Offers that bring you peace of mind</h1>
            <p className='modelTopicSub'>Book your next stay and save up to 17% off our Best Available Rate* when you make your reservation in advance. With properties in some of the world's most desirable destinations, you can save more so you can do more with our Honors Advance Purchase Discount.</p>

            <MDBBtn href='#' style={{backgroundColor:'#806600'}}>Book Now</MDBBtn>
        </MDBCardBody>
        </MDBCard>
        </MDBModalBody>

        </MDBModalContent>
    </MDBModalDialog>
    </MDBModal>
</>
  );
}

export default Experience;