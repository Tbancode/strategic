'use client';

import participate from '../../../../../public/svgs/participate.svg';
import connect from '../../../../../public/svgs/connect.svg';
import gain from '../../../../../public/svgs/gain.svg';
import experience from '../../../../../public/svgs/experience.svg';
import forge from '../../../../../public/svgs/forge.svg';
import luxury_experience from '../../../../../public/svgs/luxury_experience.svg';

import Image from 'next/image';
import styled from 'styled-components';








const attend = [{
    id: 1,
    svg: participate,
    text:  'Participate in hands-on sessions with industry pioneers and entrepreneurs.' 
},
{
    id: 2,
    svg: connect,
    text:  'Connect with world-class entrepreneurs, investors, and leaders' 
},
{
    id: 3,
    svg: gain,
    text:  'Gain insights from global visionaries shaping the future.' 
},
{
    id: 4,
    svg: experience,
    text:  'Experience the cultural phenomenon of Lagos & Akure, Nigeria' 
},
{
    id: 5,
    svg: forge,
    text:  'Forge new partnerships and explore avenues for scaling your business.' 
},
{
    id: 6,
    svg: luxury_experience,
    text:  'Experience luxury with VIP perks, from private networking to high-end hospitality.' 
},
]




// Container for the map elements
const MapContainer = styled.div`
  /* width: 833px; */
  width: 63%;
  height: 591px;
  justify-content: space-between;
  margin: 0 auto; 
  display: flex;
  /* gap: 135px; */
  flex-wrap: wrap; 
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 80%;
    
  }
  @media (min-width: 768px) and (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    width: 364.39px;
    height: 1400.29px;
    margin: 5px auto 100px auto;
    flex-direction: column;
    justify-content: center;
  }

`

// Individual map element (Image and H3)
const MapElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  justify-content: space-between;
  width: 349px;
  height: 149px;
  
  Image{
    margin-bottom: 20px;
  }

  h3{
    color: #ffffff;
    font-family: var(--font-satoshi);
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-top: 20px;
    height: 76px;
    width: 349px;
  }
  /* @media (min-width: 769px) and (max-width: 1300px) {
    h3{
      margin-top: 20px;
    }  */
    
   
  @media (max-width: 768px) {
    width: 364.39px;
    height: 139.88px;
    margin: 30px auto 30px auto;
    Image{
      width: 81px;
      height: 81px;
    }
    h3{
    color: #ffffff;
    font-family: var(--font-satoshi);
    font-size: 16px;

    text-align: center;
    height: 48px;
    width: 349px
  }
  }
`;

// Container for the entire layout
const LayoutContainer = styled.div`
  /* width: 1129px; */
  width: 86%;
  height: 727px;
  margin: 0 auto; // Center horizontally
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) and (max-width: 1300px) {
    width: 100%;
    margin-top: -120px;
    
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 1112.52px;
    align-content: center;
    justify-content: center;
    margin-top: 300px;
    margin-bottom: 120px;
  }

`;

// Heading style
const Top = styled.h1`
  color: var(--Gold, #ffbd00);
  margin-top: 100px;
  width: 443.06px;
  font-size: 32px;
  height: 76px;
  text-align: center;
  font-family: var(--font-lora);
  margin-bottom: 60px; 
  @media (min-width: 769px) and (max-width: 1200px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    /* margin-top: 300px; */
    /* margin-top: 100px; */
    margin-bottom: 5px;
    width: 336px;
    height: 48px;
  }
`;

const MapPage = () => {
    return (
      <LayoutContainer>
        <Top>Why Attend the Global Entrepreneurship Festival?</Top>
        <MapContainer>
          {attend.map((map, index) => (
            <MapElement key={index}>
              <Image src= {map.svg} alt='' />
              <h3>{map.text}</h3>
            </MapElement>
          ))}
        </MapContainer>
      </LayoutContainer>
    );
  };
  
  export default MapPage;


