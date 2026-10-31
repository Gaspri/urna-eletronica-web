<?php
header('Content-Type: application/json; charset=utf-8');
require_once "./src/conexao.php";
require_once "./src/Candidato.php";


$pegarNumero = $_GET['numero'];



$stmtCandidato = $pdo->prepare("SELECT * FROM candidato WHERE numero = :numero");
$stmtCandidato->execute(array(
    ':numero' => $pegarNumero
));

if ($stmtCandidato->rowCount() > 0) {
    $resultCandidato = $stmtCandidato->fetch(PDO::FETCH_ASSOC);
    $resultCandidato = new Candidato(...$resultCandidato);
    echo json_encode($resultCandidato);
} else {
    echo json_encode(array(
        "status" => "erro"
    ));
}
