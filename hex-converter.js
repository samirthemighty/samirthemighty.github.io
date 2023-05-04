function conversion() {
  var hex = document.getElementById('hex-input').value
  var answer = document.getElementById('rgb-answer')
  console.log(hex)

  if (hex.includes('#')) {
      hex = hex.replace('#','')
  }
  hex = hex.toUpperCase()
  
  let new_hex = ''
  // makes sures hex is only 6 characters
  for (let i = 0; i < 6; i++ ){
    new_hex = new_hex + hex[i]
  }
  console.log(new_hex)
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
  // error checking below
  for (let i = 0; i < new_hex.length;i++) {
    if (isNaN(new_hex[i])== false || new_hex[i] == 'A' || new_hex[i]=='B'||new_hex[i]=='C'||new_hex[i]=='D'||new_hex[i]=='E'||new_hex[i]=='F') {
      continue
    }else {
      error = true;
      answer.innerHTML = 'ERROR'
      return answer
    }
      
  }
  

  let first_red = new_hex[0]
  let second_red = new_hex[1]

  for (let i = 0; i < 16; i++) {
    if (RGB[i] == first_red){
      first_red = i
    }
    if (RGB[i] == second_red) {
      second_red = i
    }
  }
  let red = Math.floor(first_red)*16 + Math.floor(second_red)
    
  let first_green = new_hex[2]
  let second_green = new_hex[3]

  for (let i = 0; i < 16; i++) {
    if (RGB[i] == first_green){
      first_green = i
    }
    if (RGB[i] == second_green) {
      second_green = i
    }
  }
  let green = Math.floor(first_green)*16 + Math.floor(second_green)

  let first_blue = new_hex[4]
  let second_blue = new_hex[5]

  for (let i = 0; i < 16; i++) {
    if (RGB[i] == first_blue){
      first_blue = i
    }
    if (RGB[i] == second_blue) {
      second_blue = i
    }
  }
  let blue = Math.floor(first_blue)*16 + Math.floor(second_blue)

  answer.innerHTML = '(' + red + ',' + green + ',' + blue + ')'
  console.log(first_red, second_red)
  hex = '#' + new_hex[0] + new_hex[1] + new_hex[2] + new_hex[3] + new_hex[4] + new_hex[5]
  
 }