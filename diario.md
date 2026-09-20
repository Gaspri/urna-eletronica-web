##15/09/2026
Hoje criei o banco de dados com três tabelas: uma para candidatos, outra para eleitores e outra para votos.

Na tabela de votos, fiz a ligação por foreign key para o ID do candidato e o ID do eleitor, criando uma relação de 1 para muitos. Apliquei a restrição UNIQUE em alguns campos das tabelas para garantir que cada pessoa seja única no sistema, indo além da validação padrão do ID.

Quando terminei, realizei testes para verificar se o voto de uma mesma pessoa poderia se repetir e obtive êxito na restrição. Também testei o cadastro de um voto apontando para um candidato inexistente, confirmando em ambos os casos o funcionamento das foreign keys.

Logo após, cadastrei todos os candidatos na tabela de candidatos. Na coluna da foto, mantive a nomenclatura fotonumero.jpg, pois farei o direcionamento dinâmico via PHP junto com o HTML.

Abri o VS Code, criei a pasta database, fiz a exportação personalizada do banco de dados e a salvei no arquivo database.sql. Em seguida, fiz a instalação e configuração do Git integrado ao GitHub, criei o repositório do projeto e realizei o primeiro commit do nosso banco de dados.

##16/09/2026
Hoje fiz a conexão pdo ao banco de dados, e passeis umas regras pra não ocorrer slq injection
Criei tbm um .gitignore e passei todas as configurações restritas do site.
--Amanha pretenddo criar todas as classes que viu utilizar no código e instaciar elas, pra podermos fazer algumas manipulações