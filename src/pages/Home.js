import React from 'react';
import { MainBox } from 'style/styleComponents'

const Home = () => {
    return (
        <MainBox>
          <img src={require('img/HomePhoto.png')} alt = "Home" width = "600px" />
        </MainBox>
    );
};

export default Home;
