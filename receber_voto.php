<?php

header('Content-Type: application/json; charset=utf-8');
require_once "./src/conexao.php";
require_once "./src/Candidato.php";

$linha = file_get_contents('php://input');
$dados = json_decode($linha, true);
$numero = $dados["numero"];
$statusVoto = $dados["voto"];

if ($dados["voto"] === "VALIDO") {
    $stmtCandidato = $pdo->prepare("SELECT * FROM candidato WHERE numero = :numero");
    $stmtCandidato->execute(array(
        ":numero" => $numero,

    ));

    if ($stmtCandidato->rowCount() > 0) {
        $resultCandidato = $stmtCandidato->fetch(PDO::FETCH_ASSOC);
        $resultCandidato = new Candidato(...$resultCandidato);
        http_response_code(201);
        echo json_encode($resultCandidato);

        $stmtVoto = $pdo->prepare("INSERT INTO voto (id_candidato, status) VALUES (:id, :statusVoto)");
        $stmtVoto->execute(array(
            ":id" => $resultCandidato->id,
            ":statusVoto" => $statusVoto
        ));
    } else {
        echo json_encode(array(
            "status" => "erro"
        ));
    }
}
if ($dados["voto"] === "BRANCO") {
    $stmtVoto = $pdo->prepare("INSERT INTO voto (id_candidato, status) VALUES (:id, :statusVoto)");
    $stmtVoto->execute(array(
        ":id" => $resultCandidato->id,
        ":statusVoto" => $statusVoto
    ));
};
if ($dados["voto"] === "NULO") {
    $stmtVoto = $pdo->prepare("INSERT INTO voto (id_candidato, status) VALUES (:id, :statusVoto)");
    $stmtVoto->execute(array(
        ":id" => $resultCandidato->id,
        ":statusVoto" => $statusVoto
    ));
};

