import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from 'mdb-react-ui-kit';
import '../Assets/Styles/Destinations.css';

function Destinations() {
  
  const topics =[
    "Trinco Blu by Shangri–La",
  "Shangri–La Citadel Kandy",
  "Shangri–La Lodge Habarana",
  "Habarana Village by Shangri–La"
];
  const content = [
    "How about waking up to a deep blue sea whose crashing waves invite you for a cup of tea or to watch the beautiful dolphins dive for breakfast?",
    "If being close to nature sounds like your perfect holiday, we’re waiting for you in a city, by a lovely river, around misty hills.",
    "A Five-Star nature resort that is rich in history, architecture and biodiversity spanning 27 acres of lush greenery. Located in the epicentre of the cultural triangle; our resort offers an awe-inspiring culture to explore, amidst the numerous wildlife that roam the precincts complete with signature dining experiences.",
    "Experience affordable rustic barefoot type elegance, which is designed to reflect the rural environs and simplicity of the local village life surrounded by rich biodiversity."
  ];

const images = [
  "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST--Trinco_Blu_715X550.jpg",
  "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST-cinnamon_citadel_kandy.jpg",
  "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST-Cinnamon%20Lodge%20Habarana.jpg",
  "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST--Habarana_Village_715X550.jpg"
]

  const [topic, setTopic] = useState(topics[0]);
  const [cont, setCont] = useState(content[0]);
  const [image, setImage] = useState(images[0]);
  const handleClick = (topic,cont,img) => {
    setTopic(topic)
    setCont(cont)
    setImage(img)
}
  return (
    <MDBContainer className='destiMain'>
        <MDBRow>
            <h1 className='destiTopic'>Shangri–La</h1>
        </MDBRow>
        <MDBRow>
            <div className="selectdiv">
                <label>
                    <select>
                        <option className='selectItem' defaultValue='Trinco Blu by Shangri–La' onClick={() => handleClick(topics[0],content[0],images[0])}> Trinco Blu by Shangri–La</option>
                        <option className='selectItem' onClick={() => handleClick(topics[1],content[1],images[1])}>Shangri–La Citadel Kandy</option>
                        <option className='selectItem' onClick={() => handleClick(topics[2],content[2],images[2])}>Shangri–La Lodge Habarana</option>
                        <option className='selectItem' onClick={() => handleClick(topics[3],content[3],images[3])}>Habarana Village by Shangri–La</option>
                    </select>
                </label>
                <MDBIcon fas icon="angle-down" className='downArrow' />
            </div>
        </MDBRow>

      <MDBRow className='destiRowTwo'>
        <MDBCol size='3'>
          <img src='https://www.cinnamonhotels.com/themes/cinnamon/images/srilanka.png' alt='...' className='destiImageOne'/>
        </MDBCol>
        <MDBCol size='6'>
        <img src={image} alt='...' className='destiImageTwo'/>
        </MDBCol>
        <MDBCol size='3'>
          <div className='destiCard'>
            <h2 className='destiCardTopic'>{topic}</h2>
            <p className='destiCardCont'>{cont}</p>
            <div className='destiCrdBtn'>Discover More</div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default Destinations;