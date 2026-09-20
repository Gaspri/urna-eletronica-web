<?php


require_once "../src/conexao.php";
require_once "../src/Candidato.php";
require_once "../src/Eleitor.php";
require_once "../src/Voto.php";

$numero = 22;
$stmtCandidato = $pdo->prepare("SELECT * FROM candidato WHERE numero = :numero");
$stmtCandidato->execute(array(
    ':numero' => $numero
));

$cpf = "12345678910";
$stmtEleitor = $pdo->prepare("SELECT * FROM eleitor WHERE cpf = :cpf");
$stmtEleitor->execute(array(
    ':cpf' => $cpf
));



if ($stmtCandidato->rowCount() > 0) {
    $resultCandidato = $stmtCandidato->fetch(PDO::FETCH_ASSOC);
    $resultCandidato = new Candidato(...$resultCandidato);

    if ($stmtEleitor->rowCount() > 0) {
        $resultEleitor = $stmtEleitor->fetch(PDO::FETCH_ASSOC);
        $resultEleitor = new Eleitor(...$resultEleitor);

        if ($resultEleitor->statusvoto === true) {
            echo "já votou";
        } else {
            try {
                $stmtVoto = $pdo->prepare("INSERT INTO voto(id_candidato, id_eleitor) values (:id_candidato, :id_eleitor)");
                $stmtVoto->execute(array(
                    ':id_candidato' => $resultCandidato->id,
                    ':id_eleitor' => $resultEleitor->id
                ));
                $stmtStatus = $pdo->prepare("UPDATE eleitor set statusvoto = 1 WHERE id = :id");
                $stmtStatus->execute(array(
                    ':id' => $resultEleitor->id
                ));
            } catch (PDOException $e) {
                echo "Não pode votar" . $e->getMessage();
            };
        };
    };
};
