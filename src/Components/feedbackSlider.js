import React from 'react';
import '../Assets/Styles/feedbackSlider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit';

function DemoCarousel() {
    return(
        <MDBContainer  className='expMain'>
            <MDBContainer>
                <MDBRow>
                    <h1 className='feedTopic'>Customer Quotes</h1>
                    <p className='expTopicSub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerita.</p>
                </MDBRow>
            </MDBContainer>
            <Carousel className='feedMain'>
                <div className='d-flex justify-content-center feedMain'>
                    <div className='feedbackCrd'>
                    <div className='feedBackImg' ></div>
                    <h1 className='feedbackTopic'>Mr. Example User</h1>
                            <p className='feedbackCont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                           <p className='userMail'>exampleuser@gmail.com</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='feedbackCrd'>
                    <div className='feedBackImg' ></div>
                    <h1 className='feedbackTopic'>Mr. Example User</h1>
                            <p className='feedbackCont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                           <p className='userMail'>exampleuser@gmail.com</p>
                    </div>
                </div>


                <div className='d-flex justify-content-center'>
                    <div className='feedbackCrd'>
                    <div className='feedBackImg' ></div>
                    <h1 className='feedbackTopic'>Mr. Example User</h1>
                            <p className='feedbackCont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, ipsum condimentum ultricies vehicula. Lorem ipsum dolor sit amet</p>
                           <p className='userMail'>exampleuser@gmail.com</p>
                    </div>
                </div>
               
            </Carousel>
            </MDBContainer>
        );
    }

    export default DemoCarousel
