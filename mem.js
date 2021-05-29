
class Memory {
  constructor(){
    this.memory = new floatArray(1024);
    this.head = 0;
  }
  
  
    
 allocate(size){
   if(this.head + size > this.memory.length){
     return null;
   }
 
  
  let start = this.head;

  this.head += size;
  return start;
    
  }
  
  free(ptr){}
  
  copy(toIndx, frmIndx, size){
      if(frmIndx === toInd){
        return;
      }
    if(frmIndx > toIndx){
      //iterate forward
      for(let i=0; i < size; i++){
        this.set(toIndx + 1, this.get(frmIndx + i));
      }
      
     else {
       //iterate backwards
       for(let i=size -1 ; i >= 0; i--){
         this.set(toIndx + 1, this.get(frmIndx + i));
       }
     }
    }   
       
     get(ptr){
      return this.memory[ptr] 
     }
    
    
    set(ptr, value){
      this.memory[ptr] = value;
    }
    
  }
  
  module.exports = Memory
