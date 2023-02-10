import React from 'react';
import '../Assets/Styles/Footer.css';
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
    <MDBContainer fluid className='footerImage'>
        <MDBContainer fluid className='footerImageTwo'></MDBContainer>
    </MDBContainer>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3' style={{marginLeft:'10%'}}>
            <MDBCol size='4' className='mx-auto mb-4'>
              <p className='mb-4 footerTopics'>About</p>
              
                <p className='footerItems'>About Cinnamon Hotels & Resorts</p>
                <p className='footerItems'> Media & Accolades</p>
                <p className='footerItems'>Gallery</p>
                <p className='footerItems'>CSR & Sustainability</p>
                <p className='footerItems'>John Keells Group</p>
                <p className='footerItems'>Cinnamon Air</p>
                <p className='footerItems'> Nature Trails</p>
                <p className='footerItems'>Cinnamon Box Office</p>
                <p className='footerItems'>Terms & Conditions</p>
                <p className='footerItems'>Privacy Statement</p>

            </MDBCol>

            <MDBCol size='3' className='mx-auto mb-4'>              
                    <p className='mb-4 footerTopics'>Get In Touch</p>

                    <p className='footerItems'>Know Sri Lanka</p>
                    <p className='footerItems'>Know Maldives</p>
                    <p className='footerItems'>Contact Us</p>

                    <p className='mb-4 footerTopicsTwo'>Sections</p>

                    <p className='footerItems'>Careers</p>
                    <p className='footerItems'>Blog</p>
                    <p className='footerItems'>Cinnamon Affiliate Programme</p>


            </MDBCol>

            <MDBCol size='4' className='mx-auto mb-md-0 mb-4'>
              <p className='mb-4 footerTopics'>Follow Us</p>
              <div>
                <span className='me-4 text-reset footerIcons'>
                    <MDBIcon color='secondary' fab icon='facebook-f' />
                </span>
                <span className='me-4 text-reset footerIcons'>
                    <MDBIcon color='secondary' fab icon='twitter' />
                </span>
                <span className='me-4 text-reset footerIcons'>
                    <MDBIcon color='secondary' fab icon='google' />
                </span>
                <span className='me-4 text-reset footerIcons'>
                    <MDBIcon color='secondary' fab icon='instagram' />
                </span>
                <span className='me-4 text-reset footerIcons'>
                    <MDBIcon color='secondary' fab icon='linkedin' />
                </span>
                </div>

                <p className='mb-4 footerTopicsTwo'>Get Cinnamon in your inbox</p>

                <MDBRow>
                    <MDBCol size='8'><input type='text' className='footerInput' placeholder='Email Address'/></MDBCol>
                    <MDBCol size='4'><div className='footerInputIcon'><MDBIcon fas icon="chevron-right" /></div></MDBCol>
                    <div class="line">
                        <input type="checkbox" class="my-checkbox" value="1" />
                        <span className='footerPrivay'> Cinnamon Data Protection Policy. By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the *</span>
                    </div>
                </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    <MDBContainer fluid className='footerImageThree'></MDBContainer>
    </>
  );
}

export default Footer;