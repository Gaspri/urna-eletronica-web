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

