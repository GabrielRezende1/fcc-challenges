//To match any US Phone Numbers
function telephoneCheck(str) {
    //Debug
    console.log(str);
    console.log(/^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/gm.test(str));
    console.log('____________________');
  
    if(/^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/gm.test(str)) {
      return true;
    }else {
      return false;
    }  
  }
  
  telephoneCheck("555-555-5555");