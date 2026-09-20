<?php

class Candidato
{

    public function __construct(
        public int $id,
        public string $nome = "",
        public string $partido = "",
        public int $numero = 0,
        public string $foto = ""
    ) {}
}

