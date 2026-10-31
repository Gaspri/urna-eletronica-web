const button = document.querySelectorAll(".numeros"); //
const corrige = document.querySelectorAll(".corrige");
const digito = document.querySelectorAll(".digito");

let contador = 0;
button.forEach((element) => {
  element.addEventListener("click", () => {
    if (digito[contador]) {
      digito[contador].innerHTML = element.value;
      contador++;
    }
  });
});

corrige.forEach((element) => {
  element.addEventListener("click", () => {
    contador = 0;
    digito.forEach((span) => {
      span.innerHTML = "";
    });
  });
});
