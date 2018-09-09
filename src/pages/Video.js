import React from 'react';
import {VideoBox, Youtube} from 'style/stylePages'

const Video = () => {
    return (
      <VideoBox>
        <Youtube
           src="https://www.youtube.com/embed/1mfTOrbVnSM"
           frameborder="0"
           allow="autoplay; encrypted-media"
           allowfullscreen
           title="movie01">
         </Youtube>
      </VideoBox>
    );
};

export default Video;
