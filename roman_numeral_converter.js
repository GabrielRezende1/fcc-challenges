function convertToRoman(num) {
  let strNumber = num.toString();
  const splitedNum = strNumber.split('');
  let arrLength = splitedNum.length;

  let romanNum = [];
  console.log('Número em Arábico: ' + num);

  for(let i = 1; i <= arrLength; i++) {
    switch (i) {
      case 1: //Casa das Unidades
        switch (splitedNum[splitedNum.length - i]) {
          case '1':
            romanNum.unshift("I");
            break;
          case '2':
            romanNum.unshift("II");
            break;
          case '3':
            romanNum.unshift("III");
            break;
          case '4':
            romanNum.unshift("IV");
            break;
          case '5':
            romanNum.unshift("V");
            break;
          case '6':
            romanNum.unshift("VI");
            break;
          case '7':
            romanNum.unshift("VII");
            break;
          case '8':
            romanNum.unshift("VIII");
            break;
          case '9':
            romanNum.unshift("IX");
            break;
        }
      break; 
      case 2: //Cada das Dezenas
        switch (splitedNum[splitedNum.length - i]) {
          case '1':
            romanNum.unshift("X");
            break;
          case '2':
            romanNum.unshift("XX");
            break;
          case '3':
            romanNum.unshift("XXX");
            break;
          case '4':
            romanNum.unshift("XL");
            break;
          case '5':
            romanNum.unshift("L");
            break;
          case '6':
            romanNum.unshift("LX");
            break;
          case '7':
            romanNum.unshift("LXX");
            break;
          case '8':
            romanNum.unshift("LXXX");
            break;
          case '9':
            romanNum.unshift("XC");
            break;
        }
      break;
      case 3: //Casa das Centenas
        switch (splitedNum[splitedNum.length - i]) {
          case '1':
            romanNum.unshift("C");
            break;
          case '2':
            romanNum.unshift("CC");
            break;
          case '3':
            romanNum.unshift("CCC");
            break;
          case '4':
            romanNum.unshift("CD");
            break;
          case '5':
            romanNum.unshift("D");
            break;
          case '6':
            romanNum.unshift("DC");
            break;
          case '7':
            romanNum.unshift("DCC");
            break;
          case '8':
            romanNum.unshift("DCCC");
            break;
          case '9':
            romanNum.unshift("CM");
          break;
        }
        break;
        case 4: //Casa dos Milhares (Vai até 3000)
        switch (splitedNum[splitedNum.length - i]) {
          case '1':
            romanNum.unshift("M");
            break;
          case '2':
            romanNum.unshift("MM");
            break;
          case '3':
            romanNum.unshift("MMM");
            break;
        }
        break;
    }
  }
  console.log('Número em Romano: ' + romanNum.join(''));
  console.log('_____________________________')
  return romanNum.join('');
}

convertToRoman(36);