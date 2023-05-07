let options = {
    width: 400,
    height: 500
  }
  
  let {color = 'black', width, height} = options;
  

document.write(color + ' ' + width + ' ' + height);