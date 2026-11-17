<!DOCTYPE html>

<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Eleitor</title>
    <link rel="stylesheet" href="cadastro.css">
</head>

<body>

    <main class="container">

        <header>
            <h1>Pesquisa de Intenção de Voto</h1>
            <h3>Participe dessa democracia!</h3>
        </header>

        <form action="" method="POST">

            <h2>Cadastro do Eleitor</h2>

            <p class="descricao">
                Informe seus dados para participar da pesquisa.
            </p>

            <div class="campo">
                <label for="nome">Nome completo:</label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Digite seu nome completo"
                    autocomplete="name"
                    required>
            </div>

            <div class="campo">
                <label for="telefone">Telefone celular:</label>
                <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    placeholder="(00) 00000-0000"
                    autocomplete="tel"
                    inputmode="tel"
                    required>
            </div>

            <p class="aviso">
                Seus dados serão utilizados para controle de participação.
                Sua escolha na pesquisa será mantida em sigilo.
            </p>

            <a href="index.php">

                <button type="button">
                    Continuar
                </button>
            </a>
        </form>

        <footer>
            <p>Pesquisa de intenção de voto</p>
        </footer>

    </main>
</body>

</html>