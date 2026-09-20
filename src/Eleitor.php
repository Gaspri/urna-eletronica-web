<?php

class Eleitor
{
    public function __construct(
        public int $id,
        public bool $statusvoto,
        public string $nome = "",
        public string $cpf = "",
        
    ) {}
}

