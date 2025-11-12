function rot13(str) {
  const splitedStr = str.split("");
  const specialCharsIndex = [];
  const specialCharsItem = [];
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  //Store special chars to pass them on to the final result
  splitedStr.filter((arrItem, i, arr) => { 
    if(arrItem.match(/[\s.!?]/)) {
      specialCharsIndex.push(i);
      specialCharsItem.push(arrItem);
    }
  });

  //Filter sentence with only alphabetic chars
  const filteredStr = splitedStr.filter(arrItem => {
    return arrItem.match(/\w/);
  });

  //Decode filtered sentence with a Loop
  for(let i = 0; i < filteredStr.length; i++) {
    let encodedWordIndex = alphabet.indexOf(filteredStr[i]);
    let decodedWordIndex = encodedWordIndex + 13;
    if(decodedWordIndex >= 26) { //Reset alphabet index if exceeded and sum the rest
      decodedWordIndex = decodedWordIndex - 26;
    }
    filteredStr[i] = alphabet[decodedWordIndex];
  }

  //Join decoded sentence back with its chars
  for(let i = 0; i < specialCharsIndex.length; i++) {
    filteredStr.splice(specialCharsIndex[i], 0, specialCharsItem[i]);
  }

  //Debug
  console.log(str.split('').filter((arrItem, i, arr) => {
    return arrItem.match(/\w/);
  }));
  console.log(specialCharsIndex);
  console.log(specialCharsItem);
  console.log(filteredStr);
  console.log("______________________________");
  return filteredStr.join('');
}

rot13("SERR PBQR PNZC");