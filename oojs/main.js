class Veiculo {
    #km;

    constructor(modelo, cor, km = 0) {
        this.modelo = modelo;
        this.cor = cor;
        this.#km = km;
    }

    viajar(distanciaViajada) {
        this.#km += distanciaViajada;
    }


    get km() {
        return this.#km;
    }
}

class Carro extends Veiculo {
    constructor(modelo, cor, km = 0) {
        super(modelo, cor, km); 
    }
}

class Moto extends Veiculo {
    constructor(modelo, cor, km = 0) {
        super(modelo, cor, km);
    }
}

const carro01 = new Carro("Fiesta", "Vermelho");
const carro02 = new Carro("Gol", "Preto");
const moto01 = new Moto("883", "Branca");


console.log(carro01, `, sua quilometragem é de: ${carro01.km}`);
console.log(carro02, `, sua quilometragem é de: ${carro02.km}`);
console.log(moto01, `, sua quilometragem é de: ${moto01.km}`);


moto01.viajar(100);

console.log(moto01, `, sua quilometragem é de: ${moto01.km}`);