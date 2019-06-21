function Jogo(dados = 5, lados = 6){

	console.log('model: executar constructor de jogo');
	this.dados = dados;
	this.lados = lados;
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
   //DE [0,1]*6=>[0,6)
   //Usando Math.floor temo [0,1,2,3,4,5]
   //Somando uma unidade temos [1,2,3,4,5]
   var lado = 1+Math.floor(valorAleatorio * this.lados);
	return lado;
}

Jogo.prototype.lancarDados = function(){
	console.log('model: lancarDados');
	var lancamento = [];
	for (var i = 0; i < this.dados; i++){
		lancamento[i] = this.lancarUmDado();
	}
   return lancamento;
}

Jogo.prototype.contarDados = function(lancamento){
    var contagem = Array(this.lados).fill(0);
    for(var i = 0; i < lancamento.length; i++){
    	var numero = lancamento[i];
    	contagem[numero-1] += 1;
    }
    return contagem;
}

const GENERALA = {jogo: 'Generala', pontos : 100 }
const POKER = {jogo: 'Poker', pontos : 50}
const FULL = {jogo: 'Full', pontos: 30}
const NADA ={jogo: 'Nenhum', pontos: 0}



Jogo.prototype.analisarLancamento = function(lancamento){

	var contagem = this.contarDados(lancamento);
	var resultado;
	if (contagem.find(e=> e === 5))
		resultado = GENERALA;
	else if (contagem.find(e=> e ===4))
		resultado = POKER;
	else if(contagem.find(e => e === 3) && contagem.find(e=> e ===2))
		resultado = FULL;
	else
		resultado = NADA; 

	return resultado;

}

//	//var contador = this.analisarLancamento(lancamento);
	//var resultado = 0;

	//if(contador == GENERALA)
	//	resultado += 1;

	//else if(contador == POKER)
	//	resultado += 1;

	//else if (contador == FULL )
		//resultado += 1;

	//return resultado;
//}
  


Jogo.prototype.novoLancamento = function(){

	console.log('model: novoLancamento');
	var lancamento = this.lancarDados();
	console.log('model: analisarLancamento: ', resultado); 
	console.log('model: marcador: ', resultado);
	var analiseLancamento = this.analisarLancamento(lancamento);
	//var marca = this.marcador();
	//this.jogo += marca.pontos;
	this.pontos += analiseLancamento.pontos;
	this.n += 1;
	console.log('model: prepara resultado');

	var resultado = {
		pontosAcumulados : this.pontos,
	    nLancamentos : this.n,
	    lancamento : lancamento,
	    jogoLancamento : analiseLancamento.jogo,
	    pontosLancamento : analiseLancamento.pontos,
	    //marcacao : marca.jogo
	};
    
    return resultado;
}

jogo  = new Jogo();
lancamento = jogo.lancarDados();
contagem = jogo.contarDados(lancamento);
resultado = jogo.analisarLancamento(lancamento);
//contador = jogo.marcador();
console.log('Dados sorteados: ', lancamento);
console.log('contagem: ', contagem);
console.log('analise do lançamento', resultado);
//console.log('Contador dos dados: ', contador);

module.exports.Jogo = Jogo;