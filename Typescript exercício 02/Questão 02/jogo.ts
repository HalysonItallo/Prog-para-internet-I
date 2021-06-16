import { Cavalheiro, Personagem, Soldado } from "./personagens";

class Jogo {
  array: Array<Personagem> = [];
  
  incluir(p: Personagem): void{
   let isValid: Boolean = true;
   for(let element of this.array){
    if(element.id === p.id){
      isValid = false;
    }
   }
   if(isValid == true){
    this.array.push(p);
   }
  }
  
  consultar(id: number): any{
    for(let element of this.array){
     if(id === element.id){
        return element;
     }
    }
      return null; 
  }
  
  atacar(id_1: number, id_2: number){
    if(id_1 != id_2){
      let pers_1 = this.consultar(id_1);
      let pers_2 = this.consultar(id_2);
      if((pers_1 instanceof Soldado || pers_1 instanceof Cavalheiro) && 
      (pers_2 instanceof Personagem)){
        pers_1.atacar(pers_2);
      } else{
       console.log("Error: Tipo diferente")
      }
    }
  }
  
  avaliar_batalha(): void{
    for(let element of this.array){
      console.log({
        ...element,
        estaVivo: element.estaVivo()
      });
    }
  }
}

export { Jogo }