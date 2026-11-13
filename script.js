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
let contador = 0;

function branco() {
  btnBranco.addEventListener("click", () => {
    if (contador > 0) {
      ocultar();
      limpar();
    }

    espacoErro.classList.remove("oculto");
    dadosNulo.classList.add("oculto");
    espacoErro.textContent = "Voto em Branco";
  });
}

function confirma() {
  btnConfirm.addEventListener("click", () => {
    fim.classList.remove("oculto");
    display.classList.add("oculto");
    audioConfirma.play();
  });
}

button.forEach((element) => {
  element.addEventListener("click", () => {
    if (digito[contador]) {
      digito[contador].innerHTML = element.value;
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
              dadosNulo.classList.remove("oculto");
            } else {
              nome.textContent = candidato.nome;
              partido.textContent = candidato.partido;
              foto.alt = candidato.nome;
              foto.src = "assets/" + candidato.foto;
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
      }
      confirma();
    }
  });
});

corrige.forEach((element) => {
  element.addEventListener("click", () => {
    ocultar();

    if (contador === 0) {
    } else {
      controller.abort();
    }
    limpar();
  });
});

function mostrar() {
  divFoto.classList.remove("oculto");
  dadosCandidato.classList.remove("oculto");
}

function ocultar() {
  dadosCandidato.classList.add("oculto");
  dadosNulo.classList.add("oculto");
  divFoto.classList.add("oculto");
  espacoErro.classList.add("oculto");
}

branco();

function limpar() {
  contador = 0;
  numero = "";

  digito.forEach((span) => {
    span.innerHTML = "";
  });
}
