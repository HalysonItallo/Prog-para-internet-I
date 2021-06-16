import { Jogo } from "./jogo";
import { Cavalheiro, Personagem, Soldado } from "./personagens";

let jogo = new Jogo();
let p1 = new Personagem(1, 'p1', 100);
let s1 =  new Soldado(2, 's1', 80, 6);
let s2 = new Soldado(3, 's2', 2, 4);
let c1 = new Cavalheiro(4, 'p2', 60, 2);

jogo.incluir(p1);
jogo.incluir(s1);
jogo.incluir(s2);
jogo.incluir(c1);

jogo.atacar(2, 1);
jogo.avaliar_batalha()
jogo.atacar(2, 3);
jogo.avaliar_batalha()
jogo.atacar(2, 4);
jogo.avaliar_batalha()
jogo.atacar(3, 1);
jogo.avaliar_batalha()
jogo.atacar(3, 2);
jogo.avaliar_batalha()
jogo.atacar(3, 4);
jogo.avaliar_batalha()
jogo.atacar(4, 1);
jogo.avaliar_batalha()
jogo.atacar(4, 3);
jogo.avaliar_batalha()




