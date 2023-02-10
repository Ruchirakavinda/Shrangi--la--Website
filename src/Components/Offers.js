import React from 'react';
import '../Assets/Styles/Offers.css'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';

 function Offers() {
  return (
    <MDBContainer className='expMain'>
    <MDBContainer>
        <MDBRow>
            <h1 className='offerTopic'>Exclusive Offers</h1>
        </MDBRow> 
    </MDBContainer>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='offerCrd '>
          <MDBCardImage
            src='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both'
            alt='...'
            position='top'
          />
          <span className='memberTag'>Member Exclusive</span>
          <MDBCardBody>
            <div style={{height:'180px'}}>
            <p className='offerCrdToipcSM'>Rooms & Suites</p>
            <MDBCardTitle className='offerCrdToipc'>Shangri–La Circle Exclusive Member Rate with Breakfast</MDBCardTitle>
            <p className='offerCrdCont'>
            Exclusive Member Rate with Breakfast for Shangri-La Circle member.
            </p>
            </div>
            <MDBCardTitle className='offerCrdToipc'>From LKR 65,763.00 Average Per Night</MDBCardTitle>
            <div className='offerCrdButton'>View Details</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol>
        <MDBCard className='offerCrd'>
          <MDBCardImage
            src='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both'
            alt='...'
            position='top'
          />
          <span className='memberTag'>Member Exclusive</span>
          <MDBCardBody>
          <div style={{height:'180px'}}>
            <p className='offerCrdToipcSM'>Rooms & Suites</p>
            <MDBCardTitle className='offerCrdToipc'>Shangri–La Circle Exclusive Member Rate</MDBCardTitle>
            <p className='offerCrdCont'>Exclusive Member Rate for Shangri-La Circle member.</p>
            </div>
            <MDBCardTitle className='offerCrdToipc'>From LKR 58,456.00 Average Per Night</MDBCardTitle>
            <div className='offerCrdButton'>View Details</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='offerCrd'>
          <MDBCardImage
            src='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/4/8/3/%7B4835D553-4207-4DFC-B256-52D227A8066B%7D201201_SLCB_APNewOffer.jpg?w=360&h=175&mode=crop&quality=100&scale=both'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <div style={{height:'180px'}}>
            <p className='offerCrdToipcSM'>Rooms & Suites</p>
            <MDBCardTitle className='offerCrdToipc'>Book Early and Save with Flexibility</MDBCardTitle>
            <p className='offerCrdCont'>Book in advance and save up to 15% with complimentary date changes.</p>
            </div>
            <MDBCardTitle className='offerCrdToipc'>From LKR 67,589.75 Average Per Night</MDBCardTitle>
            <div className='offerCrdButton'>View Details</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  );
}

export default Offers;