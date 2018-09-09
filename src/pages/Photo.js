import React from 'react';
import {Box , MainPhoto, Inside} from 'style/stylePages';

const photoDB = [
  {
    id : 0,
    name : "첫번째 사진",
    src : require('img/photo/photo1.png')
  },
  {
    id : 1,
    name : "두번째 사진",
    src : require('img/photo/photo2.png')
  },
  {
    id : 2,
    name : "세번째 사진",
    src : require('img/photo/photo3.png')
  },
  {
    id : 3,
    name : "네번째 사진",
    src : require('img/photo/photo4.jpg')
  },
  {
    id: 4,
    name : "다섯번째 사진",
    src : require('img/photo/photo5.png')
  },
  {
    id: 5,
    name : "여섯번째 사진",
    src : require('img/photo/photo6.png')
  }
]


const Photo = () => {
    let photoBox = photoDB.map(
      (photo, info) => {
        return (
          <Box id = {photo.id} key = {info}>
            <Inside src={photo.src} alt={photo.name}/>
          </Box>
        )
      }
    )

    return (
        <MainPhoto>
            {photoBox}
        </MainPhoto>
    );
};

export default Photo;
