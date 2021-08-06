import React from 'react';
import ClearImage from './images/clear.png';
const ImageApp = (props) => {

    // More variations will be added on this part.
    const handleImg = () => {
        switch(props.val) {
            case "Clear":
              return ClearImage;
            default:
              return "/sunny.png";
          }
    }

    return <img src={handleImg()} alt="weather state"></img>;
}

export default ImageApp;