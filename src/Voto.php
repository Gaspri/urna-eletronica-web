<?php

class Voto
{
    public function __construct(
        public int $id,
        public int $idCandidato,
        public int $idEleitor,
        public bool $status = false,
        public string $dataVoto = "",
        
    ) {}
}

$voto = new Voto(1, 0, 0,false, '0000-00-00');
var_dump($voto);
