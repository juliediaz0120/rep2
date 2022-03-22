function getFortune() {
    O('image').onmouseover=function(){ 
    this.src='purpletarot.png'
  }

  let numElement = O('pickNumber')
  let num = parseInt(numElement.value) 
  let numYear = O('birthYear')
  let yr = parseInt(numYear.value)
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = ''
  let fortune = O('fortune')


    //NUMBER
  if (num <=10 && num > 5) {
    fortuneString += 'The Fool Card'
    fortune.style.fontSize = '15pt'
  }
  else if (num <=5 && num > 0) {
    fortuneString += 'The Magician Card'
    fortune.style.fontSize = '15pt'
  }
  else if (num > 10) {
    fortuneString += 'The High Priestess Card'
    fortune.style.fontSize = '30pt'
  }
  else {
    fortuneString += 'The Empress Card'
    fortune.style.fontSize = '15pt'
  }

    //BIRTH YEAR
  if (yr < 2000) {
    fortuneString += ' ,Emperor Card'
  }
  else if (yr <= 2022 && yr >= 2000) {
    fortuneString += ' ,Hierophant Card'
  }
  else if (yr > 2022) {
    fortuneString += ' ,Lovers Card'
  }
  else {
    fortuneString += ' ,Chariot Card'
  }


  //PICK NUMBER
  switch (num) {
    case 0:
      fortuneString += ' ,Strength Card'
      fortune.style.backgroundColor = ''  //no background color
      break;
      //break; == ends execution for this case- if other cases are true and you don't include a break statement, they can get executed too
    case 1:
      fortuneString += ' ,Hermit Card'
      fortune.style.backgroundColor = ''
      break;
    case 2:
      fortuneString += ' ,Wheel of Fortune Card'
      fortune.style.backgroundColor = ''
      break;
    case 3:
      fortuneString += ' ,Justice Card'
      fortune.style.backgroundColor = ''
      break;
    case 4:
      fortuneString += ' ,Hanged Man Card'
      // adding a style in a switch case - dying a horrible death is no fun!
      fortune.style.backgroundColor = '#f76363'
      break;
    case 5:
      fortuneString += ' ,Death Card'
      fortune.style.backgroundColor = ''
      break;
    case 6:
      fortuneString += ' ,Temperance Card'
      fortune.style.backgroundColor = ''
      break;
    case 7:
      fortuneString += ' ,Devil Card'
      fortune.style.backgroundColor = ''
      break;
    case 8:
      fortuneString += ' ,Tower Card'
      fortune.style.backgroundColor = '#fff973'
      break;
    case 9:
      fortuneString += ' ,Star Card'
      fortune.style.backgroundColor = ''
      break;
    case 10:
      fortuneString += ' ,Moon Card'
      fortune.style.backgroundColor = ''
      break;
  }

 //ENTER NAME
  if (name[0] == 'A'|| name[0] == 'B'|| name[0] == 'C'|| name[0] == 'D'|| name[0] == 'E') {
    fortuneString += ' ,and the Sun Card.'
  }
  else if (name[0] == 'K' || name[0] == 'L' || name[0] == 'M' || name[0] == 'N' || name[0] == 'O') {
    fortuneString += ' ,and the Judgement Card.'
  }
  else if (name[0] == 'U' || name[0] == 'V' || name[0] == 'W' || name[0] == 'X' || name[0] == 'Y') {
    fortuneString += ' ,and the World Card.'
  }
  else{
    fortuneString += ' ,and the Seven of Pentacles Card.'
  }

  // set the inner text of the fortune element to our new string
  // you could also try HTML elements instead of just adding the text!
  fortune.innerText = fortuneString
  // and don't forget to clear out the inputs for the next fortune
  numElement.value = 0;
  numYear.value = 2000;
  nameElement.value = '';
}









