import React from 'react';
import logo from '../Assets/Images/logo.png';
import '../Assets/Styles/Navbar.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Link} from 'react-router-dom';

function Navbar() {

  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='#'><img src={logo} alt='logo' className='logo'/></MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav className=''>
              <MDBNavbarLink href='#' className='navItem'>
              <MDBIcon far icon="user" className='icon' /> <span className='navItemChild'>Sign in </span>
              </MDBNavbarLink>
              <MDBNavbarLink href='#'  className='navItem'><span className='navItemChild'>Join Now</span></MDBNavbarLink>
              <MDBNavbarLink href='#'  className='navItem'><span className='navItemChild'>Find Reservations</span></MDBNavbarLink>
              <MDBNavbarLink href='#'  className='navItem'><MDBIcon fas icon="globe"  className='icon'/><span className='navItemChild'>English</span></MDBNavbarLink>
              <MDBNavbarLink href='#'  className='navItem'><span className='navItemChild'>LKR</span></MDBNavbarLink>
              <MDBNavbarLink href='#'  className='navItem'><span className='navItemChild'><MDBIcon fas icon="mobile-alt" /></span></MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    <div>
    <MDBNavbar expand='lg' dark bgColor='dark' style={{height:'40px'}} className='navTwo'>
      <MDBContainer fluid style={{padding:'0% 6%'}} >
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarLink active href='#' className='navItemTwo itemOne'>ABOUT<MDBIcon fas icon="angle-down" className='icon'/>
                <MDBContainer fluid className='dropDownMain dropDownOne'>
                    <MDBContainer>
                    <MDBRow>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>About The Hotel</p>
                          <Link to='#'className='dropDownItems'>Overview</Link>
                          <Link to='#'className='dropDownItems'>Explore Colombo</Link>
                          <Link to='#'className='dropDownItems'>Services & Facilities</Link>
                          <Link to='#'className='dropDownItems'>Map & Directions</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                    </MDBRow>
                    </MDBContainer>
                  </MDBContainer>
              </MDBNavbarLink>

              <MDBNavbarLink active href='#' className='navItemTwo itemTwo'>ROOMS & SUITS<MDBIcon fas icon="angle-down" className='icon'/>
                <MDBContainer fluid className='dropDownMain dropDownTwo'>
                    <MDBContainer>
                    <MDBRow>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Rooms</p>
                          <Link to='#'className='dropDownItems'>Deluxe Lake View</Link>
                          <Link to='#'className='dropDownItems'>Deluxe Ocean View</Link>
                          <Link to='#'className='dropDownItems'>Premier Balcony</Link>
                          <Link to='#'className='dropDownItems'>Premier Ocean View</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Horizon Club</p>
                          <Link to='#'className='dropDownItems'>Horizon Club Lake View</Link>
                          <Link to='#'className='dropDownItems'>Horizon Club Ocean View</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Suites</p>
                          <Link to='#'className='dropDownItems'>Executive Suites</Link>
                          <Link to='#'className='dropDownItems'>Specialty Suites</Link>
                          <Link to='#'className='dropDownItems'>Shangri-La Suite</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Connecting Rooms</p>
                          <Link to='#'className='dropDownItems'>Executive Suite & Premier Ocean Room Connecting</Link>
                          <Link to='#'className='dropDownItems'>Two Deluxe Lake View Rooms Connecting</Link>
                      </MDBCol>
                    </MDBRow>
                    <div className='dropDownEnd'>
                    <Link to='#'className='dropDownItems'>ROOMS & SUITES OVERVIEW</Link>
                    </div>
                    </MDBContainer>
                  </MDBContainer>
              </MDBNavbarLink>

              <MDBNavbarLink active href='#' className='navItemTwo itemThree'>DINING<MDBIcon fas icon="angle-down" className='icon'/>
                <MDBContainer fluid className='dropDownMain dropDownThree'>
                    <MDBContainer>
                    <MDBRow>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Restaurants</p>
                          <Link to='#'className='dropDownItems'>Cake Temptations by Shangri-La Colombo</Link>
                          <Link to='#'className='dropDownItems'>Shang Palace</Link>
                          <Link to='#'className='dropDownItems'>Capital Bar & Grill</Link>
                          <Link to='#'className='dropDownItems'>Central</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Bars & Lounges</p>
                          <Link to='#'className='dropDownItems'>Sapphyr Lounge</Link>
                          <Link to='#'className='dropDownItems'>Capital Bar & Grill</Link>
                          <Link to='#'className='dropDownItems'>Pool Bar</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                    </MDBRow>
                    <div className='dropDownEnd'>
                    <Link to='#'className='dropDownItems'>DINING OVERVIEW</Link>
                    </div>
                    </MDBContainer>
                  </MDBContainer>
              </MDBNavbarLink>

              <MDBNavbarLink active href='#' className='navItemTwo itemFour'>EXPIRIENCE<MDBIcon fas icon="angle-down" className='icon'/>
                <MDBContainer fluid className='dropDownMain dropDownFour'>
                    <MDBContainer>
                    <MDBRow>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>For Kids</p>
                          <Link to='#'className='dropDownItems'>Overview</Link>
                          <Link to='#'className='dropDownItems'>Adventure Zone</Link>
                          <Link to='#'className='dropDownItems'>Celebrations</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Health & Leisure</p>
                          <Link to='#'className='dropDownItems'>Overview</Link>
                          <Link to='#'className='dropDownItems'>Health Club</Link>
                          <Link to='#'className='dropDownItems'>Chi, The Spa</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                    </MDBRow>
                    </MDBContainer>
                  </MDBContainer>
              </MDBNavbarLink>

              <MDBNavbarLink active href='#' className='navItemTwo itemFive'>EVENTS<MDBIcon fas icon="angle-down" className='icon'/>
              <MDBContainer fluid className='dropDownMain dropDownFive'>
                    <MDBContainer>
                    <MDBRow>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Meetings & Events</p>
                          <Link to='#'className='dropDownItems'>Overview</Link>
                          <Link to='#'className='dropDownItems'>Experience It</Link>
                          <Link to='#'className='dropDownItems'>Meet Work Create</Link>
                          <Link to='#'className='dropDownItems'>Outside Catering</Link>
                          <Link to='#'className='dropDownItems'>Request For Proposal</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Wedding and Celebrations</p>
                          <Link to='#'className='dropDownItems'>Overview</Link>
                          <Link to='#'className='dropDownItems'>Wedding Planning</Link>
                          <Link to='#'className='dropDownItems'>Weddings By Shangri-La</Link>
                          <Link to='#'className='dropDownItems'>Request for Proposal</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                    </MDBRow>
                    </MDBContainer>
                  </MDBContainer>
              </MDBNavbarLink>

              <MDBNavbarLink active href='#' className='navItemTwoDiff'>GALLERY </MDBNavbarLink>
              <MDBNavbarLink active href='#' className='navItemTwoDiff'>OFFERS </MDBNavbarLink>

              <MDBNavbarLink active href='#' className='navItemTwo itemSix'>MORE<MDBIcon fas icon="angle-down" className='icon'/>
                <MDBContainer fluid className='dropDownMain dropDownSix'>
                    <MDBContainer>
                    <MDBRow>
                      <MDBCol size='md' style={{textAlign:'left'}}>
                          <p className='dropDownTopic'>Apartments</p>
                          <Link to='#'className='dropDownItems'>Learn More</Link>
                      </MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                      <MDBCol size='md' style={{textAlign:'left'}}></MDBCol>
                    </MDBRow>
                    </MDBContainer>
                  </MDBContainer>
              </MDBNavbarLink>
          </MDBNavbarNav>
          <div className='btnOne'>FIND A HOTEL</div>
      </MDBContainer>
    </MDBNavbar>
    <div>
    
    </div>
    </div>
    </>
  );
}

export default Navbar;