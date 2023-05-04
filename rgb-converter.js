function convert() {
 
    var red = document.getElementById('r-box').value;
    var green = document.getElementById('g-box').value;
    var blue = document.getElementById('b-box').value;
    var answer = document.getElementById('hex-answer')
    var wasError = false
  
    let red_text = document.getElementById('red-wrong');
    let green_text = document.getElementById('green-wrong');
    let blue_text = document.getElementById('blue-wrong');
    console.log(typeof (Number(red)))
    //Below is error checking
    if (red < 0 || red > 255 || isNaN(red) == true){
      red_text.style.opacity = '20.0';
      answer.innerHTML = 'ERROR'
      wasError = true
    }
    else {
      red_text.style.opacity = '0.0'
    }
    if (green < 0 || green > 255 || isNaN(green) == true){
      green_text.style.opacity = '20.0';
      answer.innerHTML = 'ERROR'
      wasError = true
    }
    else {
      green_text.style.opacity = '0.0'
    }
    if (blue < 0 || blue > 255 || isNaN(blue) == true){
      blue_text.style.opacity = '20.0';
      answer.innerHTML = 'ERROR'
      wasError = true
    }
    else {
      blue_text.style.opacity = '0.0'
    }
    if (wasError == true){
      return answer
    }
    const RGB = {0:'0',
                 1:'1',
                2:'2',
                3:'3',
                4:'4',
                5:'5',
                6:'6',
                7:'7',
                8:'8',
                9:'9',
                10:'A',
                11:'B',
                12:'C',
                13:'D',
                14:'E',
                15:'F'}
     
    let first_red = Math.floor(red/16)
    let second_red = RGB[Math.floor((red/16 - first_red)*16)]
    first_red = RGB[first_red]
   
    let first_green = Math.floor(green/16)
    let second_green = RGB[Math.floor((green/16 - first_green)*16)]
    first_green = RGB[first_green]
   
   
    let first_blue = Math.floor(blue/16)
    let second_blue = RGB[Math.floor((blue/16 - first_blue)*16)]
    first_blue = RGB[first_blue]
    
    answer.innerText = '#' + first_red + second_red + first_green + second_green + first_blue + second_blue
   }
