import React from 'react';

const Video = () => {
    return (
        <div>
              <iframe
                 width="100%"
                 height="400"
                 src="https://www.youtube.com/embed/1mfTOrbVnSM"
                 frameborder="0"
                 allow="autoplay; encrypted-media"
                 allowfullscreen
                 title="movie01">
               </iframe>
        </div>
    );
};

export default Video;
