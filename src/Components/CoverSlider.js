import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Assets/Styles/CoverSlider.css';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,MDBIcon
} from 'mdb-react-ui-kit';

function CoverSlider() {
  const [value, onChange] = useState(new Date());
  return (
    <>
    <div  style={{height:'100px'}}>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block sliderImageOne'
        itemId={1}
      >
        <h1 className='sliderTopic'>Shangri-La Colombo</h1>
        <p className='sliderContent'>A personal tropical sanctuary set within the heart of the city</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block sliderImageTwo'
        itemId={2}
      >
        <h1 className='sliderTopic'>We Are Vaccinated</h1>
        <p className='sliderContent'>Our highly vaccinated workforce provides the safest possible environment for your next holiday.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block sliderImageThree'
        itemId={3}
      >
        <h1 className='sliderTopic'>Shangri-La Cares</h1>
        <p className='sliderContent'>Your well-being in our care - learn more about our safety standards</p>
      </MDBCarouselItem>
    </MDBCarousel>

    <MDBContainer>
        <div className='sliderForm'>
            <MDBRow>
            <MDBCol size='2' style={{paddingRight:'0px'}}>
            <MDBDropdown>
            <MDBDropdownToggle className='inputOne'>
            <MDBIcon far icon="calendar-alt"  className='formIcon'/> 09 Feb 2023
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <Calendar onChange={onChange} value={value} />
            </MDBDropdownMenu>
            </MDBDropdown>
            </MDBCol>

            <MDBCol size='2' style={{padding:'0px 1px'}}>
            <MDBDropdown>
            <MDBDropdownToggle className='inputOne'>10 Feb 2023</MDBDropdownToggle>
            <MDBDropdownMenu>
              <Calendar onChange={onChange} value={value} />
            </MDBDropdownMenu>
            </MDBDropdown>
            </MDBCol>

            <MDBCol size='4' style={{padding:'0px 6px'}}>
            <MDBDropdown>
            <MDBDropdownToggle className='inputOne'>
            <MDBIcon far icon="user"  className='formIcon'/>1 Room, 1 Adult, 0 Children</MDBDropdownToggle>
            <MDBDropdownMenu>
                <div className='popTwo'>
                  <div  style={{padding:'0px 15px',color:'black'}}>
                    Max. 8 guests per room
                  </div>
                  <MDBContainer fluid style={{padding:'15px'}}>
                    <MDBRow className='popupRowOne'>
                      <MDBCol size='2'></MDBCol>
                      <MDBCol size='4'>Adult(s)</MDBCol>
                      <MDBCol size='5'>Children (Under 12)</MDBCol>
                    </MDBRow>
                    <MDBRow className='popupRowTwo'>
                      <MDBCol size='2'><b>Room 1</b></MDBCol>
                      <MDBCol size='4'>
                        <div class="number-input">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                        </div>
                      </MDBCol>
                      <MDBCol size='5'>
                        <div class="number-input">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                        </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBContainer style={{textAlign:'center'}}>
                        <div className='popupAddBtn'> + Add Room</div>                    
                    </MDBContainer>
                  </MDBContainer>
                </div>
            </MDBDropdownMenu>
            </MDBDropdown>
            </MDBCol>

            <MDBCol size='3' style={{padding:'0px 1px'}}>
            <MDBDropdown >
            <MDBDropdownToggle className='inputOne' >
            <MDBIcon fas icon="tag"  className='formIcon'/> Special Code
            </MDBDropdownToggle>
            <MDBDropdownMenu>
            <div className='popThree'>
                  <div  style={{padding:'0px 15px'}}>
                    Corporate / Special Rate (Optional)
                  </div>
                  <input className='' type='text' placeholder="Corporate"  style={{marginLeft:'15px',marginTop:'20px'}}/>
                  <input className='' type='text' placeholder="Enter code"  style={{marginLeft:'15px',marginTop:'20px'}}/>
                  
                </div>
            </MDBDropdownMenu>
            </MDBDropdown>
            </MDBCol>

            <MDBCol size='1' style={{paddingLeft:'5px'}}><div className='formBtn'>Search</div></MDBCol>
            </MDBRow>
            
        </div>
    </MDBContainer>
    </div>
    </>
  );
}

export default CoverSlider;