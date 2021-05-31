
function arrayFilter(arr, filt){
  let output = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] > filt){
      output.push(arr[i])
    }
  }
  return output
}

arrayFilter([1,6,7,8,], 5)
