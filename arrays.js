  const Memory = require('./mem.js')
  
  const memory = new Memory
  
  class Array(){
      constructor(){
          this.length = 0;
          this._capacity = 0;
          this.ptr = memory.allocate(this.length);
      }
    
    
      push(value){
      if(this.length >= this._capacity){
        this._resize(this.length + 1) * Array.SIZE_RATO)
      }
      memory.set(this.ptr + this.length, value)
      this.length ++
      }
    
    
     _resize(size){
      const oldPtr = this.ptr
      this.ptr = memory.allocate(size)
      
      if(this.ptr === null){
        throw new Error ('Out of memory')
      }
      
      memory.copy(this.ptr, oldPtr, this.length)
      memory.free(oldPtr)
      this._capacity = size
      }
    
    
      get(index){
        if(index < 0 || index > this.length){
          throw new Error ('Index error')
        }
        return memory.get(this.ptr + index)
      }
      
      
      pop(){
        if(this.length === 0){
          throw new Error('Index error')
        }
        const value = memory.get(this.ptr + this.length -1)
        this.length--
        return value
      }
      
    
      insert(index, value){
        if(index < 0 || index > this.length){
          throw new Error ('Index error')
          }
        
        if(this.length >= this._capacity){
          this._resize((this.length + 1) * Array.SIZE_RATIO)
            }
        
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
      }
    
    
      remove(index){
        if(index < 0 || index > this.length){
          throw new Error ('Index error')
          }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
      }
    
  }

   
  function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();
    // Add an item to the array
    arr.push(3);
    //length = 1, capactiy = 3, ptr = 0
    
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    //Array length = 6, capacity = 12, ptr = 3, address = memory[3] to memory[8]. The array had to resize 3 times

    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    //Array length = 3, capactiy =12, ptr = 3, address = memory[3] to memory[5]. The array does not resize to a smaller memory space

    console.log(arr.get(0))
    //prints the first item in the array
    
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida")
    console.log(arr.get(0))
    //empties the array and pushes "tauhida" and then prints that first item
    
    //returning NaN, the memory array is only meant to store float values, which strings are not, so it stores as NaN
    
    //Purpose of resize() is to have enough space to hold our array if things are added or modified
    //so this causes us to copy it to a new space in memory, where there is enough space to store its contents for the time being
}

main()
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


