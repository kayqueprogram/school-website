import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 30%;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Gallery = () => {
  const [images, setImages] = useState([    'https://source.unsplash.com/random/300x200',    'https://source.unsplash.com/random/300x201',    'https://source.unsplash.com/random/300x202',    'https://source.unsplash.com/random/300x203',    'https://source.unsplash.com/random/300x204',    'https://source.unsplash.com/random/300x205',  ]);

  const handleAddImage = () => {
    const newImages = [      ...images,      'https://source.unsplash.com/random/300x20' + (images.length + 1),    ];
    setImages(newImages);
  };

  return (
    <div>
      <GalleryWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image} alt={`Image ${index}`} />
          </ImageWrapper>
        ))}
      </GalleryWrapper>
      <ButtonWrapper>
        <button onClick={handleAddImage}>Add Image</button>
      </ButtonWrapper>
    </div>
  );
};

export default Gallery;
