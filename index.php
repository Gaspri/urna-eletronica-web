<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Urna Eletrônica</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="urna">
    <!-- TELA / DISPLAY -->
    <div id="display">
      <div class="info">
        <p class="rotulo">SEU VOTO VAI PARA</p>
        <h2 class="cargo">PRESIDENTE</h2>

        <div class="caixas-num">
          <span class="digito"></span>
          <span class="digito"></span>
        </div>

        <!-- Dados do Candidato (Aparecem via JS) -->
        <div class="detalhes-candidato oculto">
          <p class="campo-detalhe">Nome: <span id="nome-candidato"></span></p>
          <p class="campo-detalhe">Partido: <span id="partido-candidato"></span></p>


        </div>

        <div class="detalhes-errado oculto">
          <p class="numero-errado">Número Errado</p>
          <p class="voto-nulo">Voto Nulo</p>
        </div>
        
      </div>

      <div class="foto-candidato oculto">
        <!-- Imagem do candidato renderizada dinamicamente -->
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
      <input class="btn-branco" type="button" value="BRANCO" />
      <input class="btn-corrige" type="button" value="CORRIGE" />
      <input class="btn-confirma" type="button" value="CONFIRMA" />
    </div>
  </div>

  <script src="./script.js"></script>
</body>

</html>