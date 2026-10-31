const button = document.querySelectorAll(".numeros"); //
const corrige = document.querySelectorAll(".corrige");
const digito = document.querySelectorAll(".digito");
let numero = "";

let contador = 0;
button.forEach((element) => {
  element.addEventListener("click", () => {
    if (digito[contador]) {
      digito[contador].innerHTML = element.value;
      numero += digito[contador].textContent;    // JUNTA OS NUMEROS EM UM SÓ
      contador++;

      if (digito.length === contador) {
        // VERIFICAÇÃO SE JÁ DIGITOU O NUMERO CERTO
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
