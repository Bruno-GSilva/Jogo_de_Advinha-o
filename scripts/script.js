const pensando = document.getElementById("pensando");
const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou");
const card = document.getElementById("card");
const respostaCerta = document.getElementById("respostaCerta");
const respostaCerta1 = document.getElementById("respostaCerta1");
const btn1 = document.getElementById("tryAgain");
const btn2 = document.getElementById("try");
const Mostrarpalpites = document.getElementById("palpites");
const tentativa = document.getElementById("tentativa");
const palpite = document.getElementById("palpite");
const text1 = document.getElementById("textAcertou");
const text2 = document.getElementById("textErrou");
const text3 = document.getElementById("textAjuda");

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
  text3.style.display = "none";
};
let exibirDerrota = () => {
  errou.style.zIndex = 2;
  errou.style.display = "block";
  acertou.style.display = "none";
  pensando.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "block";
  text3.style.display = "none";
  btn1.style.display = "block";
  tentativa.style.display = "none";
};
let exibirPensando = () => {
  pensando.style.zIndex = 2;
  pensando.style.display = "block";
  acertou.style.display = "none";
  errou.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "none";
  text3.style.display = "block";
  btn1.style.display = "none";
  tentativa.style.display = "flex";
};

let verificarNum = (num) => {
  if (palpites.includes(num)) {
    console.log(`esse voce ja tentou ${num}`);
  } else {
    palpites.push(num);
    palpites.length < 10
      ? Mostrarpalpites.append(`${num} - `)
      : Mostrarpalpites.append(num);
  }

  if (num == numeroCerto) {
    exibirVitoria();
    setTimeout(function () {
      window.location.reload(true);
    }, 3500);
    respostaCerta.innerHTML = Number(numeroCerto);
  }
};

btn1.addEventListener("click", () => {
  tentativas = 0;
  tentativasEx = false;
  palpites.length = 0;
  exibirPensando();
  Mostrarpalpites.innerHTML = " ";
});

btn2.addEventListener("click", (event) => {
  event.preventDefault();

  verificarNum(Number(palpite.value));

  palpites.length < 10
    ? tentativas++
    : ((tentativasEx = true),
      exibirDerrota(),
      (respostaCerta1.innerHTML = Number(numeroCerto)),
      console.log("voce exedeu as tentativas"));

  palpite.value < numeroCerto
    ? (text3.innerHTML = "Eu acho que e um pouco maior ...")
    : (text3.innerHTML = "Eu acho que e um pouco menor ...");
  console.log(palpites);

  if (card.offsetWidth === 350) {
    acertou.style.scale = 0.8;
    errou.style.scale = 0.8;
    pensando.style.scale = 0.8;
  }
});
