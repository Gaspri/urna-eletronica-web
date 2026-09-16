<?php
require_once "../config.php";

$dsn = "mysql:host=localhost;dbname=urna_eletronica;charset=utf8mb4";
$usuario = $user;
$senha = $password;

try {
    $pdo = new PDO($dsn, $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    echo "Conectado com sucesso !";
} catch (PDOException $erro) {
    echo "Erro: ". $erro->getMessage();
}



