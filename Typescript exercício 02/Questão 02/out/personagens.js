class Personagem {
    constructor(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        if (0 <= energia && energia <= 100) {
            this.energia = energia;
        }
        else {
            this.energia = 0;
        }
    }
    estaVivo() {
        if (this.energia === 0) {
            return false;
        }
        return true;
    }
    defenderAtaque(dano) {
        if (this.energia - dano >= 0) {
            this.energia -= dano;
        }
        else if (this.energia - dano < 0) {
            this.energia = 0;
        }
    }
}
class Soldado extends Personagem {
    constructor(id, nome, energia, forca_ataque) {
        super(id, nome, energia);
        if (0 <= forca_ataque && forca_ataque <= 10) {
            this.forca_ataque = forca_ataque;
        }
        else {
            this.forca_ataque = 0;
        }
    }
    atacar(p) {
        p.defenderAtaque(this.forca_ataque);
    }
    defenderAtaque(dano) {
        dano = dano / 2;
        if (this.energia - dano >= 0) {
            this.energia -= dano;
        }
        else if (this.energia - dano < 0) {
            this.energia = 0;
        }
    }
}
class Cavalheiro extends Soldado {
    atacar(p) {
        p.defenderAtaque(this.forca_ataque * 2);
    }
    defenderAtaque(dano) {
        dano = dano / 3;
        if (this.energia - dano >= 0) {
            this.energia -= dano;
        }
        else if (this.energia - dano < 0) {
            this.energia = 0;
        }
    }
}
export { Personagem, Soldado, Cavalheiro };
//# sourceMappingURL=personagens.js.map