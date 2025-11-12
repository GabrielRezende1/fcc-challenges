function palindrome(str) {
  const strLength = str.length;
  let palindromed = [];

  //removing non-alphanumeric characters
  let strLowerCase = str.split('');
  strLowerCase = strLowerCase.filter(arrItem => {
    return /[A-Za-z0-9]/.test(arrItem);
  })
  //
  //to Lower Case
  for(let i = 0; i < strLowerCase.length; i++) {
    strLowerCase[i] = strLowerCase[i].toLowerCase();
  }
  strLowerCase = strLowerCase.join('');
  //
  //to match
  for(let i = 1; i < strLength+1; i++) {
    if(/[A-Za-z0-9]/.test(strLowerCase[strLength - i])) {
      palindromed.push(strLowerCase[strLength - i]);
    }
  }
  //
  palindromed = palindromed.join('');
  
  if(strLowerCase == palindromed) {
    return true;
  }else {
    return false;
  }
}

palindrome("eye");