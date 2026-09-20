<?php

require_once "../src/Candidato.php";
require_once "../src/Eleitor.php";
require_once "../src/conexao.php";


$numero = 22;

$stmt = $pdo->prepare("SELECT * FROM candidato WHERE numero = :numero");
$stmt->execute(array(":numero" => $numero));

if ($stmt->rowCount() > 0) {
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $result = new Candidato(...$result);
    var_dump($result);
}

$cpf = "08130862565";
$stmt = $pdo->prepare("SELECT * FROM ELEITOR WHERE cpf = :cpf");
$stmt->execute(array(
    ':cpf' => $cpf
));

if ($stmt->rowCount() > 0) {
    $resultEleitor = $stmt->fetch(PDO::FETCH_ASSOC);
    $resultEleitor = new Eleitor(...$resultEleitor);
    if ($resultEleitor->statusvoto === true) {
        echo "Liberado pra votar";
    } else {
        echo "Já votou";
    }
};
