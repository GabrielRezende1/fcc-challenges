function checkCashRegister(price, cash, cid) {

    const initialChange = (cash * 100) - (price * 100);
    const change = [];
    const isClosedChange = [];
    let changeNum = (cash * 100) - (price * 100);
    console.log('_______________________________________');
    const currencyObj = {
      'PENNY' : 0.01,
      'NICKEL' : 0.05,
      'DIME' : 0.1,
      'QUARTER' : 0.25,
      'ONE' : 1,
      'FIVE' : 5,
      'TEN' : 10,
      'TWENTY' : 20,
      'ONE HUNDRED' : 100
    };
    const currencyArr = [
      0.01,
      0.05,
      0.1,
      0.25,
      1,
      5,
      10,
      20,
      100
    ];
  
    function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
    //Multiply numbers by 100 to avoid float point numbers
    function timesHundred(value) {
      let str = value.toString();
      let splited = str.split('');
      let arrLastIndex = splited.length - 1; 
  
      if(/[.]/.test(str)) {
        switch(splited.indexOf('.')) {
          case 1:
            if(arrLastIndex == 3) {
              splited = splited.filter(arrItem => {
                return arrItem != '.';
              });
            }else if(arrLastIndex == 2) {
              splited = splited.filter(arrItem => {
                return arrItem != '.';
              });
              splited.push('0');
            }
            break;
          case 2:
            if(arrLastIndex == 3) {
              splited = splited.filter(arrItem => {
                return arrItem != '.';
              }); 
              splited.push('0');
            }else if(arrLastIndex == 4) {
              splited = splited.filter(arrItem => {
                return arrItem != '.';
              });
            }
            break;
          case 3:
            if(arrLastIndex == 4) {
              splited = splited.filter(arrItem => {
                return arrItem != '.';
              }); 
              splited.push('0');
            }else if(arrLastIndex == 5) {
              splited = splited.filter(arrItem => {
                return arrItem != '.';
              });
            }
            break;
      }
      }else { //If there is no dot in the number
        splited.push('0', '0');
      }
      return Number(splited.join(''));
    }
    //
    //Multiply currencyObj by 100
    function currencyObjMulti(object) {
      object['PENNY'] = 1;
      object['NICKEL'] = 5;
      object['DIME'] = 10;
      object['QUARTER'] = 25;
      object['ONE'] = 100;
      object['FIVE'] = 500;   
      object['TEN'] = 1000;
      object['TWENTY'] = 2000;
      object['ONE HUNDRED'] = 10000;
    }
    //
    //For loop of the multiplication
    for(let i = 0; i < 9; i++) {
      currencyArr[i] = timesHundred(currencyArr[i]);
      cid[i][1] = timesHundred(cid[i][1]);
    }
    //
    currencyObjMulti(currencyObj);
  
    //The actual checkCashRegister
    for(let i = 1; i <= cid.length; i++) {
        let currencyObjKey = 
        getKeyByValue(
          currencyObj, 
          currencyArr[currencyArr.length - i]);
        let cidCurrency = cid[cid.length - i][1];
        let currencyTotal = 0;
  
      if(changeNum > currencyArr[currencyArr.length - i]) {
  
        while(cidCurrency >= currencyObj[currencyObjKey] && changeNum >= currencyObj[currencyObjKey]) {
          changeNum -= currencyObj[currencyObjKey];
          cidCurrency -= currencyObj[currencyObjKey];
          currencyTotal += currencyObj[currencyObjKey];
        }
        change.push(
          [
            getKeyByValue(currencyObj,currencyArr[currencyArr.length - i]), 
            currencyTotal
          ]
        );
      }
      if(cid[cid.length - i][1] == 0) {
        isClosedChange.unshift(
          [
            getKeyByValue(currencyObj,currencyArr[currencyArr.length - i]), 
            currencyTotal
          ]);
      }
    }
    //
    //For loop of the division + check currency availability
    console.log('initialChange: ' + initialChange);
    let isClosed = false;
    let compareChange = 0;
    let cidAmount = 0;
    for(let i = 0; i < change.length; i++) {
      compareChange += change[i][1];
    }
    for(let i = 0; i < cid.length; i++) {
      cidAmount += cid[i][1];
    }
    if(cidAmount == initialChange) {
      isClosed = true;
    }
    for(let i = 0; i < change.length; i++) {
      change[i][1] /= 100;
    }
    //
    if(changeNum == 0 && isClosed == true) {
      console.log('isclosed TRUE');
      const filteredChange = change.filter(arrItem => {
        return arrItem[1] != 0;
      })
       return {
        status: 'CLOSED',
        change: [...filteredChange, ...isClosedChange]
      }
    }else if (changeNum == 0 && isClosed == false){
      console.log('isclosed FALSE');
      return {
        status: 'OPEN',
        change: change
      }
    }else if (changeNum > 0) {
      console.log('isclosed INSUFICIENTE');
      return {
        status: 'INSUFFICIENT_FUNDS',
        change: []
      }
    }
    
    //
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);