import React from 'react';
import {Box , MainPhoto, Inside} from 'style/stylePages';

const photoDB = [
  {
    id : 0,
    name : "첫번째 사진",
    src : require('img/photo/sphoto1.jpg')
  },
  {
    id : 1,
    name : "두번째 사진",
    src : require('img/photo/sphoto2.png')
  },
  {
    id : 2,
    name : "세번째 사진",
    src : require('img/photo/sphoto3.png')
  },
  {
    id : 3,
    name : "네번째 사진",
    src : require('img/photo/sphoto4.png')
  },
  {
    id: 4,
    name : "다섯번째 사진",
    src : require('img/photo/sphoto5.png')
  },
  {
    id: 5,
    name : "여섯번째 사진",
    src : require('img/photo/sphoto6.png')
  },
  {
    id: 6,
    name : "일곱번째 사진",
    src : require('img/photo/sphoto7.jpg')
  },
  {
    id: 7,
    name : "여덟번째 사진",
    src : require('img/photo/sphoto8.png')
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
