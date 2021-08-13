import React from 'react';

const ImageApp = (props) => {
    const handleImg = (prefix) => {
      const value =  require(`./icons/${prefix}.png`);
      console.log(value)
      console.log(value.default)
      return value.default;
    }
    const imge = handleImg(props.val)
    return  <img src={imge} alt="weather state" width="100px" height="100px" style={{marginTop:"25px"}}></img>;
}

export default ImageApp;