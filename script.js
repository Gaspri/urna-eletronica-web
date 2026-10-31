const button = document.querySelectorAll(".numeros"); //
const corrige = document.querySelectorAll(".corrige");
const digito = document.querySelectorAll(".digito");
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

        fetch(
          `http://localhost/urna%20Eletronica/buscar_candidato.php?numero=${numero}`,
        )
          .then((mensagemSucesso) => {
            return mensagemSucesso.json();
          })
          .then((mensagemSucesso) => {
            console.log(mensagemSucesso);
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
    digito.forEach((span) => {
      span.innerHTML = "";
    });
  });
});
