//bonecas
const pensando = document.getElementById("pensando");
const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou");
//resposta
const respostaCerta = document.getElementById("respostaCerta");
//btns
const btn1 = document.getElementById("tryAgain");
const btn2 = document.getElementById("try");
//suas tentativas
const Mostrarpalpites = document.getElementById("palpites");
//seus palpites
const tentativa = document.getElementById("tentativa");
const palpite = document.getElementById("palpite");
//derota e vitoria
const text1 = document.getElementById("textAcertou");
const text2 = document.getElementById("textErrou");
const text3 = document.getElementById("textAjuda");

//regras do jogo
//1 - jogador tem 10 tentativas - ok
//2 - se o palpite for maior que o resultado mostrar que e maior - ok
//3 - se o palpite for menor que o resultado mostrar que e menor - ok
//4 - se o palpite for repetido mostrar que ja foi jogado/tentado - ok
//5 - se acertar mostrar o resultado e mostrar que ganhou caso contrario que perdeu - ok

let tentativas = 0;
let tentativasEx = false;
let randomNum = Math.floor(Math.random() * 100 + 1);
let numeroCerto = 33;

let palpites = [5,3,4,5];


function exibirVitoria() {
  acertou.style.zIndex = 2;
  acertou.style.display = "none";
  errou.style.display = "none";
  pensando.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "none";
}
function exibirDerrota() {
  errou.style.zIndex = 2;
  errou.style.display = "none";
  acertou.style.display = "none";
  pensando.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "none";
}


function verificarNum(num) {
  if (palpites.includes(num)) {
    console.log("esse voce ja tentou");
  } else {
    palpites.push(Number(palpite.value));
  }
  if (num == numeroCerto) {
    acertou.style.zIndex = 2;
    acertou.style.display = "block";
    errou.style.display = "none";
    pensando.style.display = "none";
    text1.style.display = "block";
    text2.style.display = "none";
    respostaCerta.append(Number(numeroCerto))
  }
  if (tentativasEx == true) {
    errou.style.zIndex = 2;
    errou.style.display = "block";
    acertou.style.display = "none";
    pensando.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "block";
    btn1.style.display = "block";
    tentativa.style.display = "none";
    respostaCerta.append(Number(numeroCerto))
  }
}

btn2.addEventListener("click", function (event) {
  event.preventDefault();

  verificarNum(Number(palpite.value));
  if (palpites.length < 5) {
    tentativas++;
  } else {
    return console.log("voce exedeu as tentativas"), (tentativasEx = true);
  }

  if (palpite.value < numeroCerto) {
    // text3.append("Eu acho que e um pouco maior ...")
    

  }
  if (palpite.value > numeroCerto) {
    // text3.append("Eu acho que e um pouco menor ...")
  }

  console.log(palpites);
});

btn1.addEventListener("click", function () {
  tentativas = 0;
  pensando.style.display = "block";
  pensando.style.zIndex = 2;
  acertou.style.display = "none";
  errou.style.display = "none";
  
  btn1.style.display = "none";
  tentativa.style.display = "flex";
  
  while (palpites.length > 0) {
    palpites.pop(1)
  }
})