function twoDeearray(arr){
  let output=[];
  let rowCheck = [];
  let columnCheck =[];
  for(let i=0;i<arr.length;i++){
    for(let j=0; j<arr[0].length;j++){
      if(arr[i][j]===0){
        rowCheck[i]=true;
        columnCheck[j]=true;
      } 
    }
  }
  for(let i=0;i<arr.length;i++){
    if(!output[i]){
      output[i]=[];
    }
    for(let j=0; j<arr[0].length;j++){
      if(rowCheck[i]||columnCheck[j]){
        output[i][j]= 0;
      } else {
        output[i][j]=1;
      }
    }
  }
  return output;      
}


//input
const arr1 = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];
//output
const arr2 = [[0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,1,0],
  [0,0,0,0,0],
  [0,0,1,1,0]];

  console.log(twoDeearray(arr1))
