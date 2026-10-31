const button = document.querySelectorAll('.numeros')
const digito = document.querySelectorAll('.digito')

let contador = 0

button.forEach(element => {
        element.addEventListener("click", ()=>{
               if(digito[contador]){
                digito[contador].innerHTML = element.value
                contador++
               }
        })
});
