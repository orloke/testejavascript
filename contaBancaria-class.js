class ContaBancaria {
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;

    }
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Saldo não é suficiente";
        }
        this._saldo = this._saldo - valor;
        
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}   

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaocredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaocredito = cartaocredito;
    }

    get cartaocredito(){
        return this._cartaocredito;
    }

    set cartaocredito(valor){
        return this._cartaocredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupança';
    
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária';
    
    }

    sacar(valor){
        if (valor >500){
            return "Operação não autorizada"
        }
        return this._saldo = this._saldo - valor;
    }
}