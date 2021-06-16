interface Iteravel<T> {
  proximo(): T;
  atual(): T;
  isPrimeiro(): boolean;
  isUltimo(): boolean;
  irParaPrimeiro(): T;
}

class ColecaoArray<T> implements Iteravel<T> {
  array: Array<T> = [];
  index: number = 0;
  
  adiciona(element: T){
    this.array.push(element);
    this.index++;
  }
  
  verifica(range: number) {
    if(this.index < 0 ||this.array.length <= this.index+range){
      this.index = 0;
    } 
  }
  
  proximo(): T {
    this.verifica(1);
    let aux_index = this.index;
    this.index++; 
    return this.array[aux_index+1];
  } 
  
  atual(): T {
    this.verifica(0)
    return this.array[this.index];
  }
  
  isPrimeiro(): boolean {
      this.verifica(0)
      if( this.array[this.index] === this.array[0]) {
        return true;
      }
    return false;
  }
  
  isUltimo(): boolean {
      this.verifica(0);
      if( this.array[this.index] === this.array[this.array.length-1]) {
        return true;
      }
    return false;
  }
  
  irParaPrimeiro(): T {
    this.index = 0  
    return this.array[this.index];
  }
};

let colecaoArray = new ColecaoArray<number>();
colecaoArray.adiciona(10);
colecaoArray.adiciona(20);
console.log(colecaoArray.proximo());
console.log('index:' + colecaoArray.index)
console.log(colecaoArray.proximo());
console.log('index:' + colecaoArray.index)