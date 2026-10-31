<?php
require_once __DIR__ . "/../config.php";


$dsn = "mysql:host=localhost;dbname=urna_eletronica;charset=utf8mb4";
$usuario = $user;
$senha = $password;

try {
    $pdo = new PDO($dsn, $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (PDOException $erro) {
    echo "Erro: ". $erro->getMessage();
}



