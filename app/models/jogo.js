function Jogo(dados = 5, lados = 6){

	console.log('model: executar constructor de jogo');
	this.dados = dados;
	this.lados = dados;
	this.pontos = 0;
	this.n = 0;
}

Jogo.prototype.novoJogo = function(){
	console.log('model: novoJogo');
	this.pontos = 0;
	this.n = 0;
}


Jogo.prototype.lancarUmDado = function(){

	var valorAleatorio = Math.random();//No intervalo[0,1]]
	var lado = 1+ Math(valorAleatorio * (this.lados+1));
	return lado;
}

Jogo.prototype.lancarDados = function(){
	console.log('model: lancarDados');
	var lancamento = [];
	for (var i = 0; i < this.dados; i++){
		lancamento[i] = this.lancarUmDados();
	}
   return lancamento;
}

Jogo.prototype.contarDados = function(lancamento){
    var contagem = Array(this.lados).fill(0);
    for(var i = 0; i < lancamento.length; i++){
    	var numero = lancamento[i];
    	contagem[numero] += 1;
    }
    return contagem;
}


module.exports.Jogo = Jogo;

jogo  = new Jogo();
console.log('lado sorteado: ', jogo.lancarUmDado())