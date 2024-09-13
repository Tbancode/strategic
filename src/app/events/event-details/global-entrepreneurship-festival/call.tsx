'use client';



import { LinkBtn } from './styles';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Instagram from '../../../../../public/svgs/Instagram.svg';
import linkedin from '../../../../../public/svgs/linkedin.svg';


interface ImageData {
  id: number;
  srcofImg: string;
  name: string;
  icon1: string;
  icon1Link: string;
  icon2: string;
  icon2Link: string;
  directLink: string;
}

const images: ImageData[] = [
  { 
    id: 1, 
    srcofImg: '/images/nancy.png', 
    name: 'Nancy Taiye Aragbaye', 
    icon1: Instagram, 
    icon1Link: 'https://instagram.com/visionsbynancy/', 
    icon2: linkedin, 
    icon2Link: 'https://www.linkedin.com/in/nancytaiyearagbaye/',
    directLink: 'https://calendly.com/strategic_solutionsllc/15min'
  },
  { 
    id: 2, 
    srcofImg: '/images/monique.png', 
    name: 'Monique Davis', 
    icon1: Instagram, 
    icon1Link: 'https://www.instagram.com/themoniquedavis/', 
    icon2: linkedin, 
    icon2Link: 'https://www.linkedin.com/in/talentstrategy-moniquedavis/',
    directLink: 'https://outlook.office365.com/owa/calendar/TalentonaBudget@NETORG3889060.onmicrosoft.com/bookings/s/UhQiYxG-Wk--uKakIt3H9g2'
  },
  { 
    id: 3, 
    srcofImg: '/images/juwon.png', 
    name: 'Juwon Aragbaye', 
    icon1: Instagram, 
    icon1Link: 'https://www.instagram.com/king_waun/?hl=en', 
    icon2: linkedin, 
    icon2Link: 'https://www.linkedin.com/in/juwon-aragbaye-2754524a/',
    directLink: 'https://www.instagram.com/king_waun/?hl=en'
  },
];

const ImageSelectionComponent: React.FC = () => {
  const [showImages, setShowImages] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<string | number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleImageClick = (id: string | number) => {
    setSelectedImageId(id);
  };

  const handleButtonClick = () => {
    if (!showImages) {
      setShowImages(true);
      setTimeout(() => setFadeIn(true), 100);
    }else {
      if (selectedImageId !== null) {
        const selectedImage = images.find((image) => image.id === selectedImageId);
        if (selectedImage) {
          window.open(selectedImage.directLink, '_blank'); 
        }
      }else {
        // alert("Please select an image first!");
        // setIsModalVisible(true);
        setAlertMessage("Please select one person!");
      }
    }
  
  };

  

  return (
    <div>
      {showImages && (
        // <ImagesWrapper>
        <ImagesWrapper className={fadeIn ? 'show' : ''}>
          {images.map((image) => (
            <ImageWrapper
              key={image.id}
              isSelected={selectedImageId === image.id}
              onClick={() => handleImageClick(image.id)}
            >
              <img
                src={image.srcofImg}
                alt={`Image with Id ${image.id}`}
                // width="150"
                // height="150"
                style={{
                    borderRadius: '50%',
                    border: selectedImageId === image.id ? '3px solid #FFBD00' : '2px solid transparent',
                    transition: 'border 0.3s ease',}}
              />
              <p>{image.name}</p>
              <IconLinks>
                <a href={image.icon1Link} target="_blank" rel="noopener noreferrer">
                  <Image 
                  src={image.icon1}
                  width={19}
                  height={19}
                  alt="Icon 1" />
                </a>
                <a href={image.icon2Link} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={image.icon2}
                  width={19}
                  height={19}
                  alt="Icon 2" />
                </a>
              </IconLinks>
            </ImageWrapper>
          ))}
        </ImagesWrapper>
      )}

      <LinkBtn onClick={handleButtonClick}>
        {showImages ? "SCHEDULE A CALL" : "SCHEDULE A CALL"}
      </LinkBtn>
      {alertMessage && <Alert>{alertMessage}</Alert>}
       
    </div>
  );
};

// Styled Components

const ImagesWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin: 60px auto auto auto;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageWrapper = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  text-align: center;

  img {
    display: block;
    width: 150px;
    height: 150px;
  }

  p {
    color: #ffffff;
    text-align: center;
    margin-top: 26px;
    margin-bottom: 15px;
    font-size: 14px;
    font-family: var(--font-satoshi);
    font-weight: 400;
  }
  @media (max-width: 768px) {
    img{
      width: 70px;
      height: 70px;
    }
    p{
      font-size: 8px;
    }
  }
`;

const IconLinks = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    display: inline-block;
  }

  img {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    img{
      width: 12px;
      height: 12px;
    }
  } 
`;

const Alert = styled.div`
  margin-top: -80px;
  padding: 10px;
  margin-bottom: 50px;
  color: #8e6a07;
  text-align: center;
  font-size: 14px;
  font-family: var(--font-satoshi)
`;



export default ImageSelectionComponent;
