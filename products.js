

function products(arr){
  let output=[];
  for(let i=0;i<arr.length;i++){
    let product=1;
    for(let j=0;j<arr.length;j++){
      if(i!==j){
        product *= arr[j];
      }
    }
    output.push(product);
  }
  return output;
}

products([1,3,9,4])
