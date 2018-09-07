import React from 'react';
import {Box , MainPhoto} from 'style/stylePages';

const photoDB = [
  {
    id : 0,
    name : "첫번째 사진"
  },
  {
    id : 1,
    name : "두번째 사진"
  },
  {
    id : 2,
    name : "세번째 사진"
  },
  {
    id : 3,
    name : "네번째 사진"
  },
  {
    id: 4,
    name : "다섯번째 사진"
  }
]


const Photo = () => {
    let photoBox = photoDB.map(
      (photo, info) => (
        <Box id = {photo.id} key = {info}>
          {photo.name}
        </Box>
      )
    )

    return (
        <MainPhoto>
            {photoBox}
        </MainPhoto>
    );
};

export default Photo;
