//bonecas
const pensando = document.getElementById("pensando");
const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou");
//resposta
const respostaCerta = document.getElementById("respostaCerta");
const respostaCerta1 = document.getElementById("respostaCerta1");
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
let numeroCerto = randomNum;

let palpites = [];

let exibirVitoria = () => {
  acertou.style.zIndex = 2;
  acertou.style.display = "block";
  errou.style.display = "none";
  pensando.style.display = "none";
  text1.style.display = "block";
  text2.style.display = "none";
  text3.style.display = "none"
}
let exibirDerrota = () => { 
  errou.style.zIndex = 2;
  errou.style.display = "block";
  acertou.style.display = "none";
  pensando.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "block";
  text3.style.display = "none"
  btn1.style.display = "block";
  tentativa.style.display = "none";
}
let exibirPensando = () => {
  pensando.style.zIndex = 2;
  pensando.style.display = "block";
  acertou.style.display = "none";
  errou.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "none";
  btn1.style.display = "none";
  tentativa.style.display = "flex";
}

verificarNum = (num) => {
  if (palpites.includes(num)) {
    console.log("esse voce ja tentou")
  } 
  else {
    palpites.push(Number(palpite.value));
    if (palpites.length <= 9) {
      Mostrarpalpites.append(palpite.value + " - ")
    } else {
      Mostrarpalpites.append(palpite.value)
    }
  }
  if (num == numeroCerto) {
    exibirVitoria()
    setTimeout(function(){window.location.reload(true)},3500)
    respostaCerta.innerHTML = (Number(numeroCerto))
  }
}

btn2.addEventListener("click", function (event) {
  event.preventDefault();

  verificarNum(Number(palpite.value));

  if (palpites.length <= 9) {
    tentativas++
  }
  else {
    tentativasEx = true;
    exibirDerrota()
    respostaCerta1.innerHTML = (Number(numeroCerto))
    console.log("voce exedeu as tentativas")
  }

  if (palpite.value < numeroCerto) {
    text3.innerHTML = ("Eu acho que e um pouco maior ...")
  }
  if (palpite.value > numeroCerto) {
    text3.innerHTML = ("Eu acho que e um pouco menor ...")
  }

});

btn1.addEventListener("click", function () {
  tentativas = 0;
  tentativasEx = false
  palpites.length = 0;
  exibirPensando()
  Mostrarpalpites.innerHTML = " "
})