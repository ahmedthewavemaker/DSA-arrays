function stringRotation(str1,str2){
  if(str1.length !== str2.length){
    return false;
  }
  let doublestr1 = str1 + str1;

  if(doublestr1.indexOf(str2) === -1){
    return false;
  } else {
    return true;
  }
  
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));
