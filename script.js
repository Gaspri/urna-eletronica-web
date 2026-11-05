const button = document.querySelectorAll(".numeros");
const corrige = document.querySelectorAll(".btn-corrige");
const digito = document.querySelectorAll(".digito");
const nome = document.getElementById("nome-candidato");
const partido = document.getElementById("partido-candidato");
const dadosCandidato = document.querySelector(".detalhes-candidato");
const dadosNulo = document.querySelector(".detalhes-errado");
const divFoto = document.querySelector(".foto-candidato");
const foto = document.querySelector(".img-candidato");
const espacoErro = document.querySelector(".espacoErro");

let numero = "";

let contador = 0;
button.forEach((element) => {
  element.addEventListener("click", () => {
    if (digito[contador]) {
      digito[contador].innerHTML = element.value;
      numero += digito[contador].textContent; // JUNTA OS NUMEROS EM UM SÓ
      contador++;

      if (digito.length === contador) {
        // VERIFICAÇÃO SE JÁ DIGITOU O NUMERO CERTO

        fetch(`buscar_candidato.php?numero=${numero}`)
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
            espacoErro.classList.remove("oculto");
            espacoErro.textContent = "Problemas Técnicos ! Verifique sua Conexão !";
            console.log(erro)
          });
      }
    }
  });
});

corrige.forEach((element) => {
  element.addEventListener("click", () => {
    contador = 0;
    numero = "";
    ocultar();
    digito.forEach((span) => {
      span.innerHTML = "";
    });
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
  espacoErro.classList.add("oculto")
}
