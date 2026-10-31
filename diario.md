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


Diário da Urna Eletrônica: 31/10/2026

O que fiz hoje

Retomei o JavaScript da tela da urna do zero, em partes pequenas, depois de um tempo sem mexer no projeto.
Corrigi sozinho o seletor dos botões: usei querySelectorAll('.numeros') para pegar só os botões numéricos e entendi por que o forEach funciona com NodeList. Troquei o seletor dos spans para .digito.
Criei o botão corrige: um clique zera o contador, esvazia todos os dígitos com forEach e zera o número guardado. Funciona com qualquer quantidade de spans.
Criei o gatilho de fim da digitação, que compara o contador com o total de spans em vez de usar um número fixo.
Criei a variável numero (string), que junta os dígitos digitados em um número só (ex.: “1” e “2” viram “12”).
Fiz commits e push da tela, do corrige e da junção dos números. Último commit: 8494120.

O que aprendi

Diferença entre HTMLCollection e NodeList, e por que só um tem forEach.
Escopo de variáveis e o cuidado com nomes de parâmetros em forEach aninhados.
A diferença entre == e ===, e que o contador (um número) não tem length, mas a lista digito tem.
Que o estado da urna tem três partes (spans, contador e número), e o corrige precisa resetar as três.
Como usar git add só de arquivos específicos e ler o git status antes de commitar.