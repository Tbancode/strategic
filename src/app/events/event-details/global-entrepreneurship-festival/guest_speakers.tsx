'use client';


import styled from 'styled-components';



const Container = styled.div`
  /* width: 1000px; */
  width: 100%;
  /* height: 740px; */
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) and (max-width: 900px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 768px) {
      width: 100%;
      height: 965.99px;
      }
`;

const MapElement = styled.div`
  width: 283.33px;
  height: 368.33px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
      /* width: 191.25px; */
      width: 48%;
      height: 248.63px;
      }
      @media (max-width: 360px){
        width: 48%;
      }
`;

const Image = styled.img`
  width: 100%;
  height: 283.33px;
  object-fit: cover;
  @media (max-width: 360px) {
    width: 100%}
`;

const H5 = styled.h5`
  margin: 10px 0 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: var(--White, #FFFFFF);
  font-family: var(--font-lora);
  @media (max-width: 768px) {
      /* width: 190px; */
      width: 100%;
      /* margin-bottom: 10px; */
      height: 22px;
      font-size: 14px;
      }
      @media (max-width: 360px) {
         margin-bottom: 7px;
      }
  
`;

const H6 = styled.h6`
  margin: 5px 0 0;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  font-family: var(--font-satoshi);
  color: var(--Gold, #ffbd00);
  margin-bottom: 30px;
  /* width: 181.86px; */
  @media (max-width: 768px) {
      width: 147px;
      height: 28px;
      font-size: 12px;
      }
  
`;

const H55 = styled.h5`
    text-align: center;
    color: var(--Gold, #ffbd00);
    font-size: 25px;
    font-family: var(--font-lora);
    margin-bottom: 30px;
    @media (max-width: 768px) {
      width: 390px;
      height: 24px;
      margin: auto;
      font-size: 20px;
      }
`

const Contain = styled.div`
    /* margin-top: 170px; */
    width: 66%;
  /* height: 740px; */
  height: 70%;
  margin: 170px auto auto;
  justify-content: space-between;
  
  @media (min-width: 768px) and (max-width: 900px) {
    width: 85%;
    margin: auto;
  }
  @media(max-width: 768px){
      width: 97%;
      margin: -80px auto auto;
  }
   
`



const speakers = [
  {
    id: 1,
    imgSrc: '/images/jefff.png',
    title: 'Jeff Hoffman',
    subtitle: 'Chairman, Global Entrepreneurship Network',
  },
  {
    id: 2,
    imgSrc: '/images/Ian.png',
    title: 'Ian Dunlap',
    subtitle: 'The Master Investor & Founder of Red Panda',
  },
  {
    id: 3,
    imgSrc: '/images/Busie.png',
    title: 'Busie Matsiko',
    subtitle: 'Serial Entrepreneur, Global Strategy Consultant',
  },
  {
    id: 4,
    imgSrc: '/images/Dr.png',
    title: 'Dr. Michael Tjalve',
    subtitle: 'Chief of AI Architect Microsoft Philanthropies',
  },{
    id: 5,
    imgSrc: '/images/Taha.png',
    title: 'Taha Memon',
    subtitle: 'Multi Exit Founder',
  },{
    id: 6,
    imgSrc: '/images/Sen.png',
    title: 'Sen. Hezena M. Lemaletian',
    subtitle: 'Member of the Kenyan Senate',
  },
  
  
];

const TheGuest = () => {
  return (
    <Contain>
        <H55>Speakers</H55>    
        <Container>
      {speakers.map((element) => (
        <MapElement key={element.id}>
          <Image src={element.imgSrc} alt={element.title} />
          <H5>{element.title}</H5>
          <H6>{element.subtitle}</H6>
        </MapElement>
      ))}
    </Container>
    </Contain>

  );
};

export default TheGuest;
