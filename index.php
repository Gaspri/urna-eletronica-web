<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="urna">
  <!-- TELA / DISPLAY -->
  <div id="display">
    <div class="info">
      <p class="rotulo">SEU VOTO VAI PARA</p>
      <h2 class="cargo">PREFEITO</h2>
      <div class="caixas-num">
        <span class="digito"></span>
        <span class="digito"></span>
      </div>
    </div>
    <div class="foto-candidato">
      <!-- Imagem do candidato entra aqui -->
    </div>
  </div>

  <!-- TECLADO -->
  <div class="container">
    <input class="numeros" type="button" value="1" />
    <input class="numeros" type="button" value="2" />
    <input class="numeros" type="button" value="3" />
    <input class="numeros" type="button" value="4" />
    <input class="numeros" type="button" value="5" />
    <input class="numeros" type="button" value="6" />
    <input class="numeros" type="button" value="7" />
    <input class="numeros" type="button" value="8" />
    <input class="numeros" type="button" value="9" />
    <input class="numeros" type="button" value="0" />
    <input type="button" value="BRANCO" />
    <input class="corrige" type="button" value="CORRIGE" />
    <input type="button" value="CONFIRMA" />
  </div>
</div>
</body>
<script src="./script.js"></script>
</html>