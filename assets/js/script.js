//captura o elemento numerico do contador para que seja alterado pelas funções.
let currentNumberWrapper = document.getElementById('currentNumber');
//criação de variável que terá seu valor alterado pelas funções e substituirá o valor de 'currentNumberWrapper'.
let currentNumber = 0;

//criação do 'addEventListener' para os botoes 'increment' e 'decrement' chamando suas respectivas funções ao serem clicados.
document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

//função 'increment' que, caso o valor do contador seja inferior a 10 irá manter o botão de '-' ativado e caso o valor seja 10 desabilitará o botão de '+' e mostrará a mensagem.
function increment(){
    if (currentNumber < 10){
        document.getElementById('increment').disabled = false;
        document.getElementById('decrement').disabled = false;
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        document.getElementById('increment').disabled = true;
        document.getElementById('max').style.visibility = 'visible';
    }
} 

//função 'decrement' que, caso o valor do contador seja 0 irá desabilitar o botação de '-' e manter o botão de '+' ativado.
function decrement(){
    if(currentNumber > 0){
        document.getElementById('decrement').disabled = false;
        document.getElementById('increment').disabled = false;

        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
        document.getElementById('max').style.visibility = 'hidden';
    }
    else{
        document.getElementById('decrement').disabled = true;
    }
}