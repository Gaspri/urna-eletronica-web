const button = document.querySelectorAll(".numeros");
const corrige = document.querySelectorAll(".btn-corrige");
const btnBranco = document.querySelector(".btn-branco");
const btnConfirm = document.querySelector(".btn-confirma");
const digito = document.querySelectorAll(".digito");
const nome = document.getElementById("nome-candidato");
const partido = document.getElementById("partido-candidato");
const dadosCandidato = document.querySelector(".detalhes-candidato");
const dadosNulo = document.querySelector(".detalhes-errado");
const divFoto = document.querySelector(".foto-candidato");
const foto = document.querySelector(".img-candidato");
const espacoErro = document.querySelector(".espacoErro");
const fim = document.querySelector(".display-Fim");
const display = document.querySelector("#display");
const audioConfirma = document.querySelector(".audio-confirma");
let controller;
let numero = "";
let voto = "";
let contador = 0;

function branco() {
  btnBranco.addEventListener("click", () => {
    voto = "branco";
    ocultar();
    abortar();
    limpar();
    espacoErro.classList.remove("oculto");
    dadosNulo.classList.add("oculto");
    espacoErro.textContent = "Voto em Branco";
  });
}

function votoNulo() {
  ocultar();
  voto = "nulo";
  dadosNulo.classList.remove("oculto");
}

function confirma() {
  btnConfirm.addEventListener("click", () => {
    if (voto === "invalido") {
      return;
    }
    if (voto === "") {
      return;
    }
    fim.classList.remove("oculto");
    display.classList.add("oculto");
    audioConfirma.play();
  });
}

ocultar();

button.forEach((element) => {
  element.addEventListener("click", () => {
    if (digito[contador]) {
      digito[contador].textContent = element.value;
      numero += digito[contador].textContent; // JUNTA OS NUMEROS EM UM SÓ
      contador++;
      controller = new AbortController();

      if (digito.length === contador) {
        // VERIFICAÇÃO SE JÁ DIGITOU O NUMERO CERTO

        fetch(`buscar_candidato.php?numero=${numero}`, {
          signal: controller.signal,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP erro! ${response.status}`);
            }
            return response.json();
          })
          .then((candidato) => {
            if (candidato.status === "erro") {
              votoNulo();
            } else {
              nome.textContent = candidato.nome;
              partido.textContent = candidato.partido;
              foto.alt = candidato.nome;
              foto.src = "assets/" + candidato.foto;
              voto = "valido";
              mostrar();
            }
          })
          .catch((erro) => {
            if (erro.name === "AbortError") {
            } else {
              espacoErro.classList.remove("oculto");
              espacoErro.textContent =
                "Problemas Técnicos! Verifique sua Conexão!";
            }
          });
      } else if (digito.length !== contador) {
        voto = "invalido";
      }
    }
  });
});

corrige.forEach((element) => {
  element.addEventListener("click", () => {
    ocultar();
    voto = "";
    abortar();
    limpar();
  });
});

function mostrar() {
  //REMOVE OCULTO
  divFoto.classList.remove("oculto");
  dadosCandidato.classList.remove("oculto");
}

function ocultar() {
  //DEIXA OCULTO
  dadosCandidato.classList.add("oculto");
  dadosNulo.classList.add("oculto");
  divFoto.classList.add("oculto");
  espacoErro.classList.add("oculto");
}

function limpar() {
  contador = 0;
  numero = "";

  digito.forEach((span) => {
    span.innerHTML = "";
  });
}

function abortar() {
  if (contador === 0) {
  } else {
    controller.abort();
  }
}

branco();
confirma();
