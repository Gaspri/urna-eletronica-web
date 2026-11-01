const button = document.querySelectorAll(".numeros"); //
const corrige = document.querySelectorAll(".btn-corrige");
const digito = document.querySelectorAll(".digito");
const nome = document.getElementById("nome-candidato");
const partido = document.getElementById("partido-candidato");
const detalhes = document.querySelector(".detalhes-candidato");
const detalhesErrado = document.querySelector(".detalhes-errado");

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
          .then((mensagemSucesso) => {
            return mensagemSucesso.json();
          })
          .then((candidato) => {
            if (candidato.status === "erro") {
              detalhesErrado.classList.remove("oculto");
            } else {
              nome.textContent = candidato.nome;
              partido.textContent = candidato.partido;
              detalhes.classList.remove("oculto");
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      }
    }
  });
});

corrige.forEach((element) => {
  element.addEventListener("click", () => {
    contador = 0;
    numero = "";
    detalhes.classList.add("oculto");
    detalhesErrado.classList.add("oculto");
    digito.forEach((span) => {
      span.innerHTML = "";
    });
  });
});
